const initialState = {
  screen: 'main',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SCREEN':
      return { ...state, screen: action.screen };
    default:
      return state;
  }
};

export default appReducer;
