export default ({ dispatch }) => next => action => {

  // Check to see if its action
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  action.payload.then(function(response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  })
  // has a promise ? 
  // wait result
  // next middleware
};