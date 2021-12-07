// return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem('token') || null;
}

export const getUserId = () => {
  return sessionStorage.getItem('clienteId') || null;
}

// remove the token and user from the session storage
export const removeUserSession = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('clienteId');
}

// set the token and user from the session storage
export const setUserSession = (token, id) => {
  sessionStorage.setItem('token', token);
  sessionStorage.setItem('clienteId', id);
}