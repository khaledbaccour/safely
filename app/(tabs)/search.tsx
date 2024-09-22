import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';
import { Text } from 'react-native';


export default function HomeScreen() {
  
  return (
    <>
    <WebView
      style={styles.container}
      source={{ uri: 'https://start.duckduckgo.com' }}
    />
    <View style={styles.cont1}>
      <Ionicons name="logo-ionic" size={24} color="white" />
      <Text style={styles.text}>Connected to Tor Network</Text>
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '95%',
    marginTop: Constants.statusBarHeight,
  },
  cont1: {
    paddingTop: 3,
    width: '100%',
    height: '5%',
    backgroundColor: '#794493',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },

  text: {
    paddingTop: 4,
    fontSize: 20,
    fontFamily: 'QuanSlim',
    marginStart: 15,
    color: 'white',
  },
});