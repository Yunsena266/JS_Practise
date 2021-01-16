/*
Create a decorator spy(func), which should return a wrapper, that saves function calls inside property "calls".
Every call should be saved as an array of arguments.
*/


function spy(func) {

  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  }

  wrapper.calls = [];

  return wrapper;
}