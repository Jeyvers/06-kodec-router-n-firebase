export const initialState = {
  user: null,
};

export const actionTypes = { SET_USER: 'SET_USER' };

const reducer = (state, action) => {
  if (action.type === actionTypes.SET_USER) {
    console.log(action.user);
    return {
      ...state,
      user: action.user,
    };
  } else return state;
};

export default reducer;
