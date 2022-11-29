let currentUser;
const getUserSessionData = (gameUser) => {
    const retrievedPlayer = localStorage.getItem(gameUser);
    if (!retrievedUser) return;
    return JSON.parse(retrievedPlayer);
  };

const setAuthenticatedUser = (gameUser, pseudoPlayer, point) => {
    let player = {userPseudo : pseudoPlayer, nbrPoint : point};
    const serializedPlayer = JSON.stringify(player);
    localStorage.setItem(gameUser, serializedPlayer);
    currentUser = gameUser;
};

const isAuthenticated = () => currentUser !== undefined;
const clearAuthenticatedUser = (gameUser) => {
  localStorage.removeItem(gameUser);
  currentUser = undefined;
};

// eslint-disable-next-line object-curly-newline
export {getUserSessionData, setAuthenticatedUser, isAuthenticated, clearAuthenticatedUser };