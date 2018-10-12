import React from 'react';
import { ScrollView, StyleSheet, TextInput, Button, Alert, FlatList, TouchableHighlight, Text, AsyncStorage } from 'react-native';

export default class NewScreen extends React.Component {
  static navigationOptions = {
    title: 'New',
    headerStyle: {
      backgroundColor: '#ffff8b',
    }
  };
  constructor(props){
    super(props);
    this.state = {
      text: " ",
    }
  }

  onSomeInputChange = () => {
    AsyncStorage.setItem('history', this.state.text)
  }

  render() {
  
    return (
      <ScrollView style={styles.container}>
        <TextInput
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        style={{height: 40, flex: 1, borderColor: 'gray', borderWidth: 1}}
      />
      <Button
        onPress={() => this.onSomeInputChange()}
        title="Submit"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <FlatList
          data={AsyncStorage.getItem('history')}
          renderItem={({ item }) => (
            <TouchableHighlight
              // onPress = { () => this._onPressItem(item) }
              >
              {/* <Profile content={item}/> */}
              <View>test</View>
            </TouchableHighlight>
          )}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'white',
  },
});
