export const getLanguage = () => {
  return localStorage.getItem("lang");
};
export const lang = getLanguage() ? getLanguage() : "ru";
