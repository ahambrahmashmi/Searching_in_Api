import axios from 'axios';
const getActionSearching = () => {
  return (dispatch: any, getState: any) => {
    const {SEARCH_DATA} = getState().SearchReducer;
    axios
      .get(`https://fakestoreapi.com/products`)
      .then(resp => {
        dispatch({type: 'SEARCH_DATA', payload: resp?.data});
      })
      .catch(err => {
        console.log('errrr', err);
      });
  };
};
export default getActionSearching;
