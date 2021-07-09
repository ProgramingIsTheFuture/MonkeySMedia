import React, { useEffect, useState } from "react";
import { Container, NavFixed, BackIcon, FreindDiv, FLName } from "./styles";

export interface ProfileInfoTypes {
  id: number;
  user: string;
  first_name: string;
  last_name: string;
  profile_image: string;
  background_profile_image: string;
  description: string;
  following: number;
  followers: number;
}

const Freinds: React.FC = () => {
  const [profiles, setProfiles] = useState<[ProfileInfoTypes] | null>(null);
  const [baseUrl, setBaseUrl] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [refresh, setRefresh] = useState<boolean>(true);

  useEffect(() => {
    if (refresh) {
      System.import("@monkeysmedia/util-module")
        .then((util) => util.apiGet(`api/chat/list-users/`))
        .then((resp) => {
          setProfiles(resp.data);
        });
      setRefresh(false);
    }
  }, [refresh, setRefresh]);

  const changeChat = (e: any, user: string) => {
    e.preventDefault();
    System.import("@monkeysmedia/util-module").then((util) =>
      util.RedirectTo(`/chat/${user}`)
    );

    window.dispatchEvent(
      new CustomEvent("@monkeysmedia/chat/changeChat", {
        detail: { user: user },
      })
    );
  };

  useEffect(() => {
    System.import("@monkeysmedia/util-module").then((util) =>
      setBaseUrl(util.baseUrl)
    );
  }, []);

  const onChangeSearch = (e: any) => {
    if (e.target.value !== "") {
      setSearchText(e.target.value);
      System.import("@monkeysmedia/util-module")
        .then((util) =>
          util.apiGet(`api/profile/search-profile?search=${searchText}`, false)
        )
        .then((resp: any) => {
          setProfiles(
            resp.data.map((i: ProfileInfoTypes) => {
              i.profile_image = i.profile_image.replace(
                baseUrl.substring(1),
                ""
              );
              return i;
            })
          );
        })
        .catch((e: Error) => {});
      return;
    }
    setRefresh(true);
    return;
  };

  if (!profiles) {
    return <h2>Loading!!!! </h2>;
  }

  return (
    <Container>
      <div>
        <NavFixed>
          <div>
            <BackIcon onClick={() => history.back()} />
          </div>
        </NavFixed>
        <form>
          <label htmlFor={"search"}>Procurar</label>
          <input
            type={"text"}
            name={"search"}
            placeholder={"Procurar"}
            onChange={onChangeSearch}
          />
        </form>
        <div>
          {searchText.length >= 1 && profiles!.length < 1 ? (
            <h3 style={{ textAlign: "center" }}>
              Não foram encontrados resultados!
            </h3>
          ) : null}
          {profiles!.map((item: ProfileInfoTypes) => {
            return (
              <FreindDiv key={item.id}>
                <div
                  onClick={(e) => {
                    changeChat(e, item.user);
                    System.import("@monkeysmedia/util-module").then((util) =>
                      util.RedirectTo(`/chat/${item.user}`)
                    );
                  }}
                >
                  <div style={{ height: "50px" }}>
                    <img
                      src={`${baseUrl}${item.profile_image.substring(1)}`}
                      alt={"Profile"}
                      width={"50px"}
                      height={"50px"}
                      style={{ borderRadius: "25px" }}
                    />
                  </div>
                  <div>
                    <FLName id="names">
                      <span>
                        <span dir="ltr">
                          {(
                            item.user +
                            " " +
                            item.first_name +
                            " " +
                            item.last_name
                          ).length > 22
                            ? (
                                item.user +
                                " " +
                                item.first_name +
                                " " +
                                item.last_name
                              ).substring(0, 22) + "..."
                            : item.user +
                              " " +
                              item.first_name +
                              " " +
                              item.last_name}
                        </span>
                      </span>
                    </FLName>
                  </div>
                </div>
              </FreindDiv>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Freinds;
