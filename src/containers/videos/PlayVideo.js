import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Video from '../../components/video/Video';
import { getVideoUrl } from '../../selectors/videosSelectors';

const mapStateToProps = (state, props) => ({
  url: getVideoUrl(state, props.match.params.id)
});

export default withRouter(connect(
  mapStateToProps
)(Video));
