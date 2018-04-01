import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import images from 'assets/images';

const albums = [
  {
    id: 'Albums.sleepless',
    imgId: 'sleepless',
  },
  {
    id: 'Albums.uncomfortable',
    imgId: 'uncomfortable',
  },
];

const AlbumsView = () => (
  <Card.Group centered>
    {
      albums.map(({ id, imgId }) => (
        <Card key={id} raised={false}>
          <Image src={images[imgId]} />
          <Card.Content>
            <Card.Header>
              <FormattedMessage id={id} />
            </Card.Header>
            <Card.Description>
              <span>123  </span>
              <Icon name="music" />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button fluid basic color="violet">
              <Icon name="play" />
            </Button>
          </Card.Content>
        </Card>
      ))
    }
  </Card.Group>
);

export default AlbumsView;
