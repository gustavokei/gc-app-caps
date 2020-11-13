export default function validateInfo(values) {
  let errors = {};

  if (!values.login.trim()) {
    errors.login = 'Username required';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }
  if (!values.gamepoints) {
    errors.gamepoints = 'Game points is required';
  } else if (!/^-?[0-9]\d*\.?\d*$/.test(values.gamepoints)) {
    errors.gamepoints = 'Game points should be a number';
  }
  if (!values.cash) {
    errors.cash = 'Cash is required';
  } else if (!/^-?[0-9]\d*\.?\d*$/.test(values.cash)) {
    errors.cash = 'Cash should should be a number';
  }
  if (!values.virtualcash) {
    errors.virtualcash = 'Virtual Cash is required';
  } else if (!/^-?[0-9]\d*\.?\d*$/.test(values.virtualcash)) {
    errors.virtualcash = 'Virtual cash should be a number';
  }
  return errors;
}