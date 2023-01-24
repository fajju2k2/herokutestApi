const reducer = (state, action) => {
  if (action.type === 'Home_update') {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
    };
  }

  if (action.type === 'About_update') {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
    };
  }

  if (action.type === 'GET_SERVICES') {
    return {
      ...state,
      services: action.payload,
    };
  }

  return state;
};

export default reducer;
