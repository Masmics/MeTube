import { connect } from 'react-redux';
import VideoThumbnails from '../../components/video/VideoThumbnails';
import { getVideoThumbnails } from '../../selectors/videosSelectors';

const mapStateToProps = state => ({
  thumbnails: getVideoThumbnails(state)
});

export default connect(
  mapStateToProps
)(VideoThumbnails);
