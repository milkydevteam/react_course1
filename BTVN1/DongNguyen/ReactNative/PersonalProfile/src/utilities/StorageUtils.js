import AsyncStorage from '@react-native-community/async-storage';

var storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log('Store [' + key + ',' + value + ']: ' + e);
  }
};

var getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log('Get [' + key + ']: ' + e);
  }
};

var getKeys = async () => {
  try {
    const values = await AsyncStorage.getAllKeys();
    if (values !== null) {
      return values;
    }
  } catch (e) {
    console.log('Get keys: ' + e);
  }
};

var removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log('Remove item: ' + e);
  }
};
const StorageUtils = {storeData, getData, getKeys, removeItem};
export default StorageUtils;
