const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  if (action.type === "STORE_USER") {
    const stateCopy = { ...state };
    stateCopy.user = action.payload;
    return stateCopy;
  }
  return state;
};

export default userReducer;
