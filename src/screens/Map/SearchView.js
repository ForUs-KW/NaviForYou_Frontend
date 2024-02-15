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

const SearchView = ({ navigation }) => {
  const [keyword, setKeyword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.searchTextInput}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {}}>
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
  );

};
const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#fff',
    //flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
  },

  searchTextInput: {
    justifyContent: 'center',
    flex:1,
    height: 40,
    lineHeight: 40,
    paddingHorizontal: 5,
    backgroundColor: '#f0f0f0',
    marginTop: 15,
    borderRadius: 5,
    flexDirection: 'row',
  },

  backButton: {
    position: 'absolute',
    left: 0,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  textInput: {
    //color: '#ffffff',
    fontSize: 16,
    marginLeft: 8,
    paddingHorizontal: 7,
    paddingVertical: 0,
  },
  voiceButton: {
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});
export default SearchView;