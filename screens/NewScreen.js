import React from 'react';
import { ScrollView, StyleSheet, TextInput, Button, View, AsyncStorage } from 'react-native';

export default class NewScreen extends React.Component {
  static navigationOptions = {
    title: 'New',
    headerStyle: {
      backgroundColor: '#ffee58',
    }
  };
  constructor(props){
    super(props);
    this.state = {
      text: " ",
    }
  }

  onSomeInputChange = () => {
    AsyncStorage.setItem('date', new Date());
    AsyncStorage.setItem('text', this.state.text);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        AsyncStorage.multiSet([
          ['latitude', position.coords.latitude.toString()], 
          ['longitude', position.coords.longitude.toString()]
        ]);
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    )

    alert('Votre message a bien été envoyé.')
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          multiline
        />
        <View style={styles.buttonStyle}>
          <Button
            onPress={() => this.onSomeInputChange()}
            title="Envoyer"
            color="black"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: 15,
    backgroundColor: 'white',
  },
  textInput: {
    flex: 1,
    width: 300,
    marginBottom: 30,
    height: 200, 
    borderColor: 'gray', 
    borderWidth: 1
  },
  buttonStyle: {
    color: 'white',
    backgroundColor: "#ffee58",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    marginBottom: 30,
  }
});
