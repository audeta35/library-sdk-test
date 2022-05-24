const initialState = {
  isAuth: false,
  isLoading: true,
  detailKey: {},
};

const Reducers = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'SET_AUTH':
      return {...state, isAuth: payload?.isAuth};
    case 'SET_LOADING':
      return {...state, isLoading: payload?.isLoading};
    case 'SET_DETAIL_KEY':
      return {...state, detailKey: payload?.detailKey};
    default:
      return state;
  }
};

export default Reducers;
