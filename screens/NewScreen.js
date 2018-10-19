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
    AsyncStorage.setItem('text', this.state.text);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        AsyncStorage.setItem('latitude', position.coords.latitude.toString());
        AsyncStorage.setItem('longitude', position.coords.longitude.toString());
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    )
  }

  render() {
  
    return (
      <ScrollView style={styles.container}>
        <TextInput
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        multiline
        style={{height: 200, flex: 1, borderColor: 'gray', borderWidth: 1}}
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
