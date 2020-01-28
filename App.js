import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';


export default function App() {
  const [ outputText, setOutputText ] = useState('Open up App.js to start working on your app!');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Change Text" onPress={() => setOutputText('The text changed!')}/>
    </View>
  );
}

<Text style={{color: '#ffffff', fontSize: 23}}>Sing In here!</Text>
      <TextInput placeholder='Username' />
      <TextInput placeholder='Password' />
      <Button title="Sing In"
          onPress={() => Alert.alert('Pressed')}/>


/*export default function App() {
  return (
    <View style={styles.container}>
    </View>
  );
}*/

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A6572',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

