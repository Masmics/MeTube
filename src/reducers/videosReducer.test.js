import reducer from './videosReducer';
import { createVideo } from '../actions/videosActions';

describe('video reducer', () => {
  it('return an empty array when initialized', () => {
    const newState = reducer(undefined, {
      type:'@@INIT'
    });
    expect(newState).toEqual([]);
  });

  it('handles create video', () => {
    const newState = reducer([], createVideo('test'));
    expect(newState).toEqual([
      'test'
    ]);
  });
});
