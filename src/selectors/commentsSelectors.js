export const getCommentsByVideo = (state, videoId) => {
  return state.comments[videoId] || [];
};
