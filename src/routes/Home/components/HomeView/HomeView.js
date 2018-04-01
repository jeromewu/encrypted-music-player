import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import { CenteredDiv } from './styles';

const HomeView = ({
  style, keyphrase, onSubmit, onUpdate,
}) => (
  <CenteredDiv style={style}>
    <h3><FormattedMessage id="Home.enter.keyphrase" /></h3>
    <Input
      icon="key"
      iconPosition="left"
      value={keyphrase}
      onChange={onUpdate}
      action={{ icon: 'send', onClick: onSubmit }}
    />
  </CenteredDiv>
);

HomeView.propTypes = {
  style: PropTypes.object,
  keyphrase: PropTypes.string,
  onUpdate: PropTypes.func,
  onSubmit: PropTypes.func,
};

HomeView.defaultProps = {
  style: {},
  keyphrase: '',
  onUpdate: () => {},
  onSubmit: () => {},
};

export default HomeView;
