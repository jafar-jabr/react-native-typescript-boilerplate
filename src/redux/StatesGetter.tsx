export const getAuthState = (state) => state.authState;
export const getUserState = (state) => state.userState?.data ?? {};
