import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { setConfig } from 'modules/config';
import HomeView from '../components/HomeView';

export const mapStateToProps = ({
  config: { keyphrase },
}) => ({
  keyphrase,
});

export const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch(push('/index')),
  onUpdate: (evt, { value }) => dispatch(setConfig({ keyphrase: value })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeView);
