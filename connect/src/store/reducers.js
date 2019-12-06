let initialState = { foo: 'bar' };
let actions = {};

export default function reducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case 'CHANGE':
      return { foo: Math.random() * payload };

    default:
      return state;
  }
}

actions.changeName = payload => {
  return {
    type: 'CHANGE',
    payload: payload
  };
};

export { actions };
