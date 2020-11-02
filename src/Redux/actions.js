export const login = (bool) => {
  return {
    type: "LOGIN",
    value: bool,
  };
};

export const setUser = (username) => {
  return {
    type: "SET_USER",
    value: username,
  };
};
