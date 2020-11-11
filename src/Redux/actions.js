export const addRegion = (regions) => {
  return {
    type: "ADD_REGION",
    value: regions,
  };
};

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

export const removeRegion = (index) => {
  return {
    type: "REMOVE_REGION",
    value: index,
  };
};
