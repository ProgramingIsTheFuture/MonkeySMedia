import React, { useEffect, useState } from "react";
import { Container } from "./styles";

type props = {
  username: string;
};

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

const HeaderProfile: React.FC<props> = ({ username }) => {
  const [data, setdata] = useState<ProfileInfoTypes | null>(null);
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    if (baseUrl == "") {
      System.import("@monkeysmedia/util-module").then((util) =>
        setBaseUrl(util.baseUrl)
      );
    }
  }, [baseUrl]);

  useEffect(() => {
    if (username) {
      System.import("@monkeysmedia/util-module")
        .then((util) =>
          util.apiPost("api/profile/get-profile/", { username: username })
        )
        .then((resp) => setdata(resp.data))
        .catch();
    }
  }, [username]);

  if (!data) {
    return (
      <Container>
        <h3 style={{ verticalAlign: "center" }}>loading ...</h3>
      </Container>
    );
  }
  return (
    <Container>
      <div
        style={{ cursor: "pointer" }}
        onClick={() =>
          System.import("@monkeysmedia/util-module").then((util) =>
            util.RedirectTo(`/profile/${data.user}`)
          )
        }
      >
        <div>
          {baseUrl ? (
            <img
              src={`${baseUrl}${data.profile_image.substring(1)}`}
              alt={"profile"}
              height={"50px"}
              width={"50px"}
            />
          ) : (
            baseUrl
          )}
        </div>
        <div>
          <div style={{ alignItems: "center" }}>{data.user}</div>
        </div>
      </div>
    </Container>
  );
};

export default HeaderProfile;
