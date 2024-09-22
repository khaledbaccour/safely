import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type SecMesProps = {
  iconName: keyof typeof Ionicons.glyphMap; 
  label: string;
}

const SecMes: React.FC<SecMesProps> = ({ iconName, label }) => {
  return (
    <TouchableOpacity>
       <View style={styles.cont}>
      <Ionicons name={iconName} size={30} color="#27B1FF" />
      <Text style={styles.txt}>{label}</Text>
    </View> 
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  txt: {
    fontSize: 30,
    marginLeft: 10, 
    fontFamily: 'QuanSlim',
  },
  cont: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding : 20,
  },
});

export default SecMes;