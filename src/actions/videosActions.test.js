import { createVideo, CREATE_VIDEO } from './videosActions';

describe('videos actions', () => {
  it('facilitates creating a video', () => {
    expect(createVideo('test')).toEqual({
      type: CREATE_VIDEO,
      payload: 'test'
    });
  });
});
