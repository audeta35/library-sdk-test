export const ReduxSetAuth = (data) => {
    return {
        type: 'SET_AUTH',
        payload: data
    }
}

export const ReduxSetLoading = data => {
  return {
    type: 'SET_LOADING',
    payload: data,
  };
};

export const ReduxSetDetailKey = data => {
  return {
    type: 'SET_DETAIL_KEY',
    payload: data,
  };
}