import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
//import * as Update from 'expo-updates';

//const restart = () => Update.reloadAsync();

//export default restart;

const storeUserData = async (token, userId) => {
  try {
    await AsyncStorage.setItem('userData', JSON.stringify({ token, userId }));
    console.log('User data stored successfully.');
    //console.log(token);
    //console.log(userId);
  } catch (error) {
    console.error('Error storing user data:', error);
  }
};

const getUserData = async () => {
  try {
    const userData = await AsyncStorage.getItem('userData');
    return JSON.parse(userData);
  } catch (error) {
    console.error('Error getting user data:', error);
    return null;
  }
};

const removeUserData = async () => {
    try {
      await AsyncStorage.removeItem('userData');
      //restart();
      navigation.navigate('Mypage');
      console.log('User data removed successfully.');
    } catch (error) {
      console.error('Error removing user data:', error);
    }
};
  

const test = async(token, userID) =>{
    console.log('test');
}

export { storeUserData, getUserData, removeUserData };
