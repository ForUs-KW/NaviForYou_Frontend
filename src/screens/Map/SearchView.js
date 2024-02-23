import React from 'react';
import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const SearchView = ({ navigation }) => {
  const [keyword, setKeyword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.searchTextInput}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
          <Text>{"<"}</Text>
          </TouchableOpacity>
          <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              //clearButtonMode="always"
              placeholderTextColor={'#929292'}
              style={styles.textInput}
              placeholder="장소, 주소, 버스 검색"
              value={keyword}
              onChangeText={setKeyword}
              autoFocus={true}
          />
          <TouchableOpacity
              style={styles.voiceButton}
              title="v"
              onPress={() => setKeyword('')}>
              <Text>{keyword ? 'x' : 'v'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.bottomView}>
            <FlatList
                data={[
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                ]}
                renderItem={({item}) => <TouchableOpacity style={styles.item}>{item.key}</TouchableOpacity>}
            />
        </ScrollView>
    </View>
  );

};
const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#fff',
    flex: 1,
  },
  topView: {
      flexDirection: 'column',
      width: '100%',
      height: '10%',
  },
  searchTextInput: {
      borderWidth: 1,
      borderColor: '#000',

      justifyContent: 'center',
      //flex:1,
      height: '60%',
      lineHeight: 40,
      paddingHorizontal: 5,
      backgroundColor: '#f0f0f0',
      marginTop: 15,
      borderRadius: 5,
      flexDirection: 'row',
  },
  backButton: {
      //position: 'absolute',
      //left: 0,
      width: '10%',
      height: '100%',
      justifyContent: 'center',
      paddingHorizontal: 10,
      backgroundColor: 'white'
  },
  textInput: {
      //color: '#ffffff',
      width: '80%',
      height: '100%',
      fontSize: 16,
      marginLeft: 8,
      paddingHorizontal: 7,
      paddingVertical: 0,
  },
  voiceButton: {
      //position: 'absolute',
      //right: 0,
      width: '10%',
      height: '100%',
      justifyContent: 'center',
      paddingHorizontal: 10,
      backgroundColor:'white',
  },
  bottomView:{
      height: screenHeight * 0.85,
  },
  item:{
      padding: 10,
      fontSize: 18,
      height: 44,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#f0f0f0',
  },
});
export default SearchView;