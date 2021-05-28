function AuthReducer(
  state = {
    isLoggedIn: true, // in real life should be undefined
    changePasswordError: undefined,
  },
  action: any,
) {
  return state;
}

export default AuthReducer;
