export const addRegion = (regions) => {
  return {
    type: "ADD_REGION",
    value: regions,
  };
};
export const removeRegion = (index) => {
  return {
    type: "REMOVE_REGION",
    value: index,
  };
};

export const login = (bool) => {
  return {
    type: "LOGIN",
    value: bool,
  };
};

const loginUser = (User) => {
  return function (dispatch) {
    fetch("/auth/login", {
      method: "POST",
      body: JSON.stringify(User),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) =>
        res.json().then((data) => {
          dispatch(userLoaded(data));
        })
      )

      .catch((error) => {
        return {
          type: "error",
          value: error,
        };
      });
  };
};
const userLoaded = (data) => {
  return {
    type: "LOGIN",
    value: data,
  };
};

// export const setUser = (username) => {
//   return {
//     type: "SET_USER",
//     value: username,
//   };
// };
const userAdded = (data) => {
  return {
    type: "ADD_USER",
    value: data,
  };
};
const setUser = (User) => {
  return function (dispatch) {
    fetch("/auth/signup", {
      method: "POST",
      body: JSON.stringify(User),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) =>
        res.json().then((data) => {
          dispatch(userAdded(data));
        })
      )

      .catch((error) => {
        return {
          type: "error",
          value: error,
        };
      });
  };
};

export { loginUser, setUser };
