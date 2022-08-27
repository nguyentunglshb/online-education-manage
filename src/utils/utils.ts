export const getTokenFromLocalStorage = localStorage.getItem("accesstoken")
  ? localStorage.getItem("accesstoken")
  : "";

export const setTokenToLocalStorage = (token: string) => {
  localStorage.setItem("accesstoken", token);
};

export const isUserLoggedIn = () => {
  const token = localStorage.getItem("accesstoken");
  return !!token;
};
