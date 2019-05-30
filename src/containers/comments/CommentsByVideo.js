import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Comments from '../../components/comments/Comments';
import { getCommentsByVideo } from '../../selectors/commentsSelectors';

const mapStateToProps = (state, props) => ({
  comments: getCommentsByVideo(state, props.match.params.id)
});

export default withRouter(connect(
  mapStateToProps
)(Comments));
