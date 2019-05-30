import reducer from './commentsReducer';
import { createComment } from '../actions/commentsActions';

describe('comment reducer', () => {
  it('returns an empty array of comments on initialization', () => {
    const newState = reducer(undefined, {
      type: '@@INIT'
    });
    expect(newState).toEqual([]);
  });

  it('facilitates creating a comment', () => {
    const newerState = reducer([], createComment('someVideoId', 'Great video!'));
    expect(newerState).toEqual([
      'someVideoId:', 
      'Great video!'
    ]);
  });
});

