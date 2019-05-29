import CREATE_VIDEO from '../actions/videosActions';

const initialState = [{ id: '1', url: 'https://www.youtube.com/watch?v=-UoeQOC-5iw' }, { id: '2', url: 'https://www.youtube.com/watch?v=1RE5OB38stU' }];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_VIDEO:
      return [...state, action.payload];
    default:
      return state;
  }
}
