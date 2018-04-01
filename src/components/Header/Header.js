import React from 'react';
import { Segment, Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const FullSegment = styled(Segment).attrs({
  style: {
    borderRadius: 0,
    display: 'flex',
  },
})``;

const IconButton = styled(Button).attrs({
  style: {
    backgroundColor: '#1b1c1d',
    color: 'white',
  },
})``;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.div`
  font-color: grey;
  font-weight: bold;
  padding-left: 8px;
  font-size: 24px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Header = () => (
  <FullSegment inverted>
    <Left>
      <IconButton icon>
        <Icon name="bars" />
      </IconButton>
      <Title>
        EMP
      </Title>
    </Left>
    <Right>
      <IconButton icon>
        <Icon name="setting" />
      </IconButton>
    </Right>
  </FullSegment>
);


export default Header;
