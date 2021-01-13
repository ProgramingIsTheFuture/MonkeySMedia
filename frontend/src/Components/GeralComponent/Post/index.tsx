import {useStoreState} from "easy-peasy";
import React from "react";
import {Link} from "react-router-dom";
import {PostType} from "../../../Store/types";
import Likes from "./Likes";
import DeleteBTN from "./DeleteBTN";
import {
	Card,
	CardContent,
	CardImage,
	CardTitle,
	Container,
	UserSimpleInfo,
} from "./styles";

export interface Props {
	post: PostType;
	refe: any;
}

const Post: React.FC<Props> = ({post, refe}) => {
	const username = useStoreState((state: any) => state.User.username);

	return (
		<Container ref={refe ? refe : null}>
			<UserSimpleInfo>
				<Link to={`/Profile/${post.user}`}>
					<div>
						<img
							src={`${process.env.REACT_APP_BACKEND_URL}${post.profile_image}`}
							width={"55px"}
							height={"55px"}
							alt={"Profile"}
						/>
						<div>
							<p>{post.user}</p>
							<p>{post.timestamp}</p>
						</div>
					</div>
				</Link>
				<div>
					{post.user === username ? <DeleteBTN postID={post.id} /> : null}
				</div>
			</UserSimpleInfo>
			<Card>
				<CardTitle>{post.title}</CardTitle>
				{post.content ? <CardContent>{post.content}</CardContent> : null}
				{post.image ? (
					<CardImage>
						<img
							src={`${process.env.REACT_APP_BACKEND_URL}${post.image}`}
							alt={`${post.user}`}
						/>
					</CardImage>
				) : null}
			</Card>
			<Likes id={post.id} likes={post.likes} />
		</Container>
	);
};

export default Post;
