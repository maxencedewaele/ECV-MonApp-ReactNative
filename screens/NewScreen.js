import React from 'react';
import { ScrollView, StyleSheet, TextInput, Button, Alert } from 'react-native';

export default class NewScreen extends React.Component {
  static navigationOptions = {
    title: 'New',
    headerStyle: {
      backgroundColor: '#ffff8b',
    }
  };
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <Button
        onPress={() => {
          Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
        }}
        title="Submit"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
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
