import axios from 'axios';
import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from './types';

const loadPosts = posts => {
  return {
      type: FETCH_POSTS
  }
}
const loadPostsSuccess = posts => {
  return {
      type: FETCH_POSTS_SUCCESS,
      payload: posts
  }
}
const loadPostsError = posts => {
  return {
      type: FETCH_POSTS_ERROR,
      payload: posts
  }
}
export const fetchPosts = () => dispatch => {
  dispatch(loadPosts())
  axios.get('https://api.mocki.io/v1/af37df01')
    .then(res =>
      dispatch(loadPostsSuccess(res.data))
    )
    .catch( err => {
      dispatch(loadPostsError(err.message))
  })
};