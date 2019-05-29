import CREATE_VIDEO from '../actions/videosActions';

const initialState = [
  { 
    id: '-UoeQOC-5iw', 
    url: 'https://www.youtube.com/watch?v=-UoeQOC-5iw' 
  }, 
  { 
    id: '1RE5OB38stU', 
    url: 'https://www.youtube.com/watch?v=1RE5OB38stU' 
  }
];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_VIDEO:
      return [...state, action.payload];
    default:
      return state;
  }
}
