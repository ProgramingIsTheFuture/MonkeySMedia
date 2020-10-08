import React from 'react';
import { PostType } from '../../../Store/types';
import Post from '../../Feed/Posts/Post'

import { Container } from './styles';

interface Props {
    post: PostType
}

const PostSearch: React.FC<Props> = ({post}) => {
  return <Post post={post} />;
}

export default PostSearch;