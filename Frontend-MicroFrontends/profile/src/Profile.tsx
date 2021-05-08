import React, { useEffect, useState, useCallback, useRef } from "react";
import Parcel from "single-spa-react/parcel";
import { mountRootParcel } from "single-spa";
import { motion } from "framer-motion";
import ProfileHeader from "./ProfileHeader";

import { Container } from "./styles";

type PostType = {
  id: number;
  user: string;
  title?: string;
  content?: string;
  image?: string;
  profile_image: string;
  likes: number;
  timestamp: string;
};

export default function Root(props) {
  const [profileUsername, setProfileUsername] = useState<string>("");

  useEffect(() => {
    System.import("@monkeysmedia/util-module").then((util) =>
      setProfileUsername(util.getUsernamePropsUrl())
    );
  });

  return (
    <Container>
      <ProfileHeader username={profileUsername} />
      {profileUsername ? (
        <Parcel
          config={() => System.import("@monkeysmedia/feed")}
          mountParcel={mountRootParcel}
          username={profileUsername}
        />
      ) : (
        <h1>Loading..</h1>
      )}
    </Container>
  );
}
