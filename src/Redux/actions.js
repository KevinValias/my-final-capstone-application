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

// export const login = (bool) => {
//   return {
//     type: "LOGIN",
//     value: bool,
//   };
// };
// after building new actions make sure to make relative paths//
const loginUser = (User) => {
  return function (dispatch) {
    fetch("http://localhost3000/auth/login", {
      method: "POST",
      body: JSON.stringify(User),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) =>
        res.json().then((data) => {
          document.cookie = "loggedIn=true;max-age=600*1000";
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

const userAdded = (data) => {
  return {
    type: "ADD_USER",
    value: data,
  };
};
const setUser = (User) => {
  return function (dispatch) {
    fetch("http://localhost3000/auth/signup", {
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
