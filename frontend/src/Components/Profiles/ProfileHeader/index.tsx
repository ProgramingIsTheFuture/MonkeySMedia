import {useStoreActions, useStoreState} from "easy-peasy";
import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import api from "../../../services";
import {ProfileInfoTypes} from "../../../Store/types";
import ChatBTN from "../../GeralComponent/ChatBTN";
import FollowingBTN from "../../GeralComponent/FollowingBTN";
import EditProfile from "../EditProfile";

import {
	Container,
	NavFixed,
	BackIcon,
	BackgroundImage,
	PersonalInfos,
	ProfileImage
} from "./styles";

const ProfileHeader: React.FC = () => {
	const token: any = localStorage.getItem("auth");
	const ProfileInfo: ProfileInfoTypes = useStoreState(
		(state: any) => state.Profile.ProfileInfo
	);
	const currentUser = useStoreState((state: any) => state.User.username);
	const setUsername = useStoreActions((action: any) => action.User.setUsername);

	useEffect(() => {
		api
			.get("api/users/get-user/", {
				headers: {Authorization: `Token ${JSON.parse(token).token}`},
			})
			.then((resp: any) => {
				const user = resp.data.username;
				setUsername(user ? user : null);
			});
	}, [token, setUsername]);

	return (
		<Container>
			<NavFixed>
				<Link to="/">
					<BackIcon />
				</Link>
			</NavFixed>
			<BackgroundImage>
				<img
					src={`${process.env.REACT_APP_BACKEND_URL}${ProfileInfo.background_profile_image}`}
					alt="Background"
				/>
			</BackgroundImage>
			<PersonalInfos>
				<ProfileImage>
					<img
						src={`${process.env.REACT_APP_BACKEND_URL}${ProfileInfo.profile_image}`}
						alt={`${ProfileInfo.user} Profile`}
						width={"150px"}
						height={"150px"}
					/>
				</ProfileImage>
				<div>
					<h2>{ProfileInfo.user}
						{currentUser !== ProfileInfo.user ? (
							<FollowingBTN username={ProfileInfo.user} />
						) : (
								<EditProfile />
							)}
						{currentUser !== ProfileInfo.user ? <ChatBTN /> : null}
					</h2>
					<p>{ProfileInfo.first_name} {ProfileInfo.last_name}</p>

					<p>{ProfileInfo.description}</p>
					<ul className="flex-menu">
						<li><strong>{ProfileInfo.followers}</strong> followers</li>
						<li><strong>{ProfileInfo.following}</strong> following</li>
					</ul>
				</div>
			</PersonalInfos>

		</Container>
	);
};

export default ProfileHeader;
