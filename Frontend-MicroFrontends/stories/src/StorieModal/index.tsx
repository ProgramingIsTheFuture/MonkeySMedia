import React, { ReactElement, useEffect, useState } from "react";
import { TStories } from "../Stories";
import ProfileIcon from "../ProfileIcon";
import StorieImg from "../StorieImg";
import ReactModal from "react-modal";

import { Storie } from "./styles";

interface Props {
  storie: TStories;
}

const StorieModal: React.FC<Props> = ({ storie }): ReactElement => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [baseUrl, setBaseUrl] = useState<string>("");

  useEffect(() => {
    System.import("@monkeysmedia/util-module").then((util) =>
      setBaseUrl(util.baseUrl)
    );
  }, []);

  return (
    <Storie onClick={() => setIsShow(true)}>
      <ProfileIcon
        profile_img={`${baseUrl}${storie.user.profile_image.substring(1)}`}
        username={storie.user.user}
      />

      {isShow ? (
        <ReactModal
          isOpen={isShow}
          style={{ height: "100%", width: "50%" }}
          preventScroll={true}
        >
          <StorieImg storie={storie} close={setIsShow} />
        </ReactModal>
      ) : null}
    </Storie>
  );
};

export default StorieModal;