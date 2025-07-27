const setItem = (key) => {
  const val = window.localStorage.getItem("moode");
  return val;
};

const getItem = (key) => {
  const val = window.localStorage.getItem(key);
  return val ? JSON.parse(key) : undefined;
  
};
