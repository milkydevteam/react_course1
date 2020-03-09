import AsyncStorage from '@react-native-community/async-storage';

storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.log("Store [" + key + "," + value + "]: " + e);
    }
}
  
getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if(value !== null) return value;
    } catch(e) {
        console.log("Get [" + key + "]: " + e);
    }
}

export default StorageUtils = {storeData, getData};