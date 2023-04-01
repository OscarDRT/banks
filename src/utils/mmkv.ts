import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

export const saveData = (key: string, value: any) => {
  storage.set(key, JSON.stringify(value));
};

export const getData = (key: string) => {
  const data = storage.getString(key);

  return data ? JSON.parse(data) : null;
};
