let currentUser;

const getUserSessionData = (nameUser) => {
    const retrievedPlayer = localStorage.getItem(nameUser);
    if (!retrievedUser) return;
    return JSON.parse(retrievedPlayer);
  };

const setAuthenticatedUser = (nameUser, objectUser) => {
    localStorage.setItem(nameUser, serializedPlayer);
    currentUser = nameUser;
};

const isAuthenticated = () => currentUser !== undefined;

const clearAuthenticatedUser = (nameUser) => {
  localStorage.removeItem(nameUser);
  currentUser = undefined;
};

// eslint-disable-next-line object-curly-newline
module.exports = { getUserSessionData, setAuthenticatedUser, isAuthenticated, clearAuthenticatedUser };