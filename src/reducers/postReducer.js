import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from '../actions/types';

const initialState = {
  items: [],
  isLoading: false,
  error: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        isLoading: true
      };
      case FETCH_POSTS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          items: action.payload , 
          error: ''
        };  
        case FETCH_POSTS_ERROR:
          return {
            ...state,
            isLoading: false,
            items: [] , 
            error: action.payload
          };    
    default:
      return state;
  }
}