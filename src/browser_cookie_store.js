import Cookies from 'js-cookie';

const createStore = () => {
  const expiration = 30; // 30 days
  const name = 'mgc-auth-token';

  const getToken = () => Cookies.getJSON(name);
  const setToken = tokenData => {
    Cookies.set(name, tokenData, { expires: expiration, secure: true, sameSite: 'strict' });
  };
  const removeToken = () => {
    Cookies.remove(name);
  };

  return {
    getToken,
    setToken,
    removeToken,
  };
};

export default createStore;
