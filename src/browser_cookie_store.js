import Cookies from 'js-cookie';

const createStore = ({ clientId, secure }) => {
  const expiration = 30; // 30 days
  const name = 'mgc-auth-token';

  const getToken = () => Cookies.getJSON(name);
  const setToken = tokenData => {
    const secureFlag = secure ? { secure: true } : {};
    Cookies.set(name, tokenData, { expires: expiration, ...secureFlag });
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
