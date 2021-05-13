import React, { useEffect, useState } from "react";
import { Container, FreindDiv, FLName } from "./styles";

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

  useEffect(() => {
    System.import("@monkeysmedia/util-module")
      .then((util) => util.apiGet(`api/profile/list-all-users-following/`))
      .then((resp) => {
        setProfiles(resp.data);
      });
  }, []);

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

  if (!profiles) {
    return <h2>Loading!!!! </h2>;
  } else if (profiles!.length <= 0) {
    return (
      <Container>
        <h2>Without freinds here!</h2>
      </Container>
    );
  }

  return (
    <Container>
      <div>
        <input type={"text"} />
        <div>
          {profiles!.map((item: ProfileInfoTypes) => {
            return (
              <FreindDiv key={item.id}>
                <a
                  href={`/chat/${item.user}`}
                  onClick={(e) => changeChat(e, item.user)}
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
                    <div>
                      <span>{item.user}</span>
                    </div>
                    <FLName id="names">
                      <span>
                        <span dir="ltr">
                          {item.first_name} {item.last_name}
                        </span>
                      </span>
                    </FLName>
                  </div>
                </a>
              </FreindDiv>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Freinds;
