import React from 'react';
import { ProfileInfo } from '../../../Store/types';

import { Container } from './styles';

interface Props {
    Profile: ProfileInfo
}

const ProfileSearch: React.FC<Props> = ({Profile}) => {
  return <Container>
      {Profile.user}
  </Container>;
}

export default ProfileSearch;