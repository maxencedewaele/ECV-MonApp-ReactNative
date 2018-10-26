import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  FlatList,
  Button,
  AsyncStorage
} from 'react-native';

export default class HistoriqueScreen extends React.Component {
  static navigationOptions = {
    title: 'Historique',
    headerStyle: {
      backgroundColor: '#ffee58',
    }
  };

  constructor(props){
    super(props);
    this.state = {
      history : [],
      date: null,
      text: null,
      latitude: null,
      longitude: null,
    }
  }

  loadMessages() {
    // If value was submitted & not yet stored
    AsyncStorage.multiGet(["date", "text", "latitude", "longitude"]).then(response => {
      if (response[0][1]) {
        // Store values of upcoming message
        this.setState({
          'date' : response[0][1],
          'text' : response[1][1],
          'latitude' : response[2][1],
          'longitude' : response[3][1]
        })

        // Add newly added message element to array of messages
        this.setState({ 
          history: [...this.state.history, {date: this.state.date, text: this.state.text, latitude: this.state.latitude, longitude: this.state.longitude}] 
        })

        // Reset AsynStorage values
        AsyncStorage.multiRemove(['date', 'text', 'latitude', 'longitude']);
      }    
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonStyle}>
          <Button
            onPress={() => this.loadMessages()}
            title="Mettre à jour"
            color="black"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <FlatList
            data={this.state.history}
            renderItem={({ item }) => (
              <TouchableHighlight style={styles.containerMessage}>
                <View>
                  <Image></Image>
                  <Text>Date : {item.date}</Text>
                  <Text>Texte : {item.text}</Text>
                  <Text>Latitude : {item.latitude}</Text>
                  <Text>Longitude : {item.longitude}</Text>
                </View>
              </TouchableHighlight>
            )}
        />
      </View>
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
  containerMessage: {
    width: 300,
    marginBottom: 5,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 20,
    backgroundColor: '#f0ece4'
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
