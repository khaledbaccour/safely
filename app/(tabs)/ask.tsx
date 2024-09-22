import { Image, StyleSheet, View, Text, TouchableOpacity, useColorScheme } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Parent from '@/components/Parent';

export default function Ask() {
  const handleKeyboardPress = () => {
  };

  const handleMicPress = () => {
  };

  const handleSettingsPress = () => {
  };

  return (
    <Parent>
      {/* <Header keyphrase="Chatbot" title='Safely' img={require("@/assets/images/logo-safely.png")} /> */} 
      <View style={styles.cont1}>
        <Image source={require("@/assets/images/chatbot-safely.png")} style={{ width: 220, height: 220 }} />
        <Text style={styles.text}>Ask me anything related to Tunisian media laws and legislation!</Text>
        <Text style={styles.text1}>
          This conversation is end-to-end encrypted and your data is not stored.
        </Text>
      </View>
      <View style={styles.cont2}>
        <TouchableOpacity onPress={handleKeyboardPress}>
          <Ionicons name="chatbox-outline" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMicPress} style={styles.micButton}>
          <Ionicons name="mic-outline" size={60} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSettingsPress}>
          <Ionicons name="settings-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </Parent>
  );
}

const styles = StyleSheet.create({
  cont1: {
    marginTop: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 30,
    fontFamily: 'QuanSlim',
  },
  text1: {
    marginTop: 20,
    fontSize: 15,
    color: '#2187b8',
    fontFamily: 'QuanSlim',
    textAlign: 'center',
  },
  cont2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20, 
    left: 0,
    right: 0,
    paddingHorizontal: 30, 
    paddingLeft: 65,
    width: '100%',
  },
  micButton: {
    backgroundColor: '#1A94D6', // Blue background close to #28B3FF
    borderRadius: 50, // Circular shape
    padding: 10, // Padding for the icon inside the button
    marginBottom: 40, // Margin at the bottom of the button
    
    // Android specific 3D effect
    elevation: 8, // Creates the 3D elevation effect for Android
  },
  micIcon: {
    marginHorizontal: 20, 
  },
});
