import React from 'react';
import PlayVideo from '../containers/videos/PlayVideo';
import styles from './VideoPage.css';

import CommentsByVideo from '../containers/comments/CommentsByVideo';
import CreateComment from '../containers/comments/CreateComment';

export default function VideoPage() {
  return (
    <>

      <div>
        <h1 style={styles}>Enjoy Your Video!</h1>
      </div>

      <div>
        <PlayVideo />
      </div>
      <div>
        <CreateComment />
      </div>
      <CommentsByVideo />

    </>
  );
}
