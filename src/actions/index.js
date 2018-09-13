export const setUser = ({ username, image }) => ({
  type: 'SET_USER',
  username,
  image
});

export const getToken = (token) => ({
  type: 'GET_TOKEN',
  token
});
