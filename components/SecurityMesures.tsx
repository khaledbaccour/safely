import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import SecMes from './SecMes';

export default function SecurityMesures() {
  const [showSecurity, setShowSecurity] = useState(true);

  return (
    <View style={styles.cont}>
      <View style={styles.header}>
        <Text style={styles.txt}>Security Toolbox</Text>
        <TouchableOpacity onPress={() => setShowSecurity(prev => !prev)}>
          <Text style={styles.buttonText}>{showSecurity ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>

      {showSecurity && (
        <>
          <SecMes iconName="shield-half" label="VPN" />
          <SecMes iconName="bug" label="Virus Scanner" />
          <SecMes iconName="lock-closed" label="Password Manager" />
          <SecMes iconName="shield-checkmark" label="Firewall" />
          <SecMes iconName="link-outline" label="Link Scanner" />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 30,
    marginRight: 10,
    fontFamily: 'QuanSlim',
  },
  cont: {
      width: "100%",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginTop: 20,
      paddingHorizontal: 20
    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    marginLeft: 20,
    fontSize: 30,
    color: '#007BFF',
    fontFamily: 'QuanSlim',
  },
});
