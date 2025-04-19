export const getLocalStorageItem = ({key}:{key: string}) => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : "";
  } catch (error) {
    console.error(`Error reading localStorage key "${key}":`, error);
    return "";
  }
};

export const setLocalStorageItem = <T>({key, value}:{key: string, value: T}) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error);
  }
};
