import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
      <Text style={styles.title}>마이 페이지</Text>

      <Text
        style={styles.paragraph}
        onPress={() => navigation.navigate("editInfo")}>
        &gt; 회원 정보 수정
      </Text>
      <Text
        style={styles.paragraph}
        onPress={() => navigation.navigate("settings")}>
        &gt; 앱 설정 관리
      </Text>
      <Text
        style={styles.paragraph}
        onPress={() => navigation.navigate("report")}>
        &gt; 제보하기
      </Text>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});
