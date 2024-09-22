import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View,Text,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';
export default function FakeMeter() {
    const [flagged, setFlagged] = React.useState(false);
    return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setFlagged(!flagged)}>
        <Ionicons
          name={flagged ? "flag" : "flag-outline"} // Toggle icon
          size={25}
          color="#f0c929"
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
});