const initialValues = {
  id: 123456,
  username: "johnson",
};

export const authReducer = (currentState = initialValues, action) => {
  switch (action.type) {
    case "SUCCESS_LOGIN": {
      let _state = { ...currentState };
      _state = action.data;
      return _state;
    }
    default: {
      return currentState;
    }
  }
};
