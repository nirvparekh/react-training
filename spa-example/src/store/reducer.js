const initialValues = [];

export const postsReducer = (currentState = initialValues, action) => {
  switch (action.type) {
    case "GET_POSTS": {
      return currentState;
    }
    case "SET_POST": {
      const _state = [...currentState];
      _state.push(action.data);
      return _state;
    }
    default: {
      return currentState;
    }
  }
};
