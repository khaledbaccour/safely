import React, { useState, useRef } from "react";
import { Header } from "@/components/Header";
import  Parent  from "@/components/Parent";
import { ScrollView, StyleSheet, View, Text, TextInput, Modal } from "react-native";
import { Searchbar } from "react-native-paper";
import data from "@/dummy-data/dummy.json";
import { Message } from "@/components/Message";
import  onMsgPress  from "@/utils/chatutils"

export default function Chat() {
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(true);
  const [code, setCode] = useState(Array(6).fill(''));
  const [errorMessage, setErrorMessage] = useState('');

  const inputRefs = Array(6)
    .fill(null)
    .map(() => useRef<TextInput>(null));

  const handleDigitChange = (value: string, index: number) => {
    if (/^\d$/.test(value)) {  
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (index < 5 && value) {
        inputRefs[index + 1].current?.focus(); 
      }

      else if (index === 5) {
        handleCodeSubmit();
      }

      
    } else if (value === '') {  
      const newCode = [...code];
      newCode[index] = '';
      setCode(newCode);
    }

    setErrorMessage('');
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && code[index] === '') {
      if (index > 0) {
        inputRefs[index - 1].current?.focus(); 
        const newCode = [...code];
        newCode[index - 1] = ''; 
        setCode(newCode);
      }
    }
  };

  const handleCodeSubmit = () => {
    setModalVisible(false);
    setErrorMessage('');
  };

  return (
    <Parent>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter 6-Digit Code</Text>
            <View style={styles.codeContainer}>
              {code.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={inputRefs[index]}
                  style={styles.digitInput}
                  keyboardType="numeric"
                  maxLength={1}
                  value={digit}
                  onChangeText={(value) => handleDigitChange(value, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)} 
                />
              ))}
            </View>
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
          </View>
        </View>
      </Modal>

      <Header keyphrase="Chats" />
      <Searchbar
        style={styles.searchbar}
        placeholder="Search chats"
        onChangeText={setSearchQuery}
        value={searchQuery}
        mode="bar"
      />
      <ScrollView style={styles.scrollView}>
        {data.map((chat, index) => (
          <Message
            key={index}
            username={chat.username}
            pic={chat.profile_image}
            message={modalVisible ? 'Chat is locked' : chat.story}
            onMessagePress = {onMsgPress}
          />
        ))}
      </ScrollView>
    </Parent>
  );
}

const styles = StyleSheet.create({
  searchbar: {
    width: '80%',
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 0,
    elevation: 2,
    backgroundColor: '#d6f2ff',
    height: 50,
    marginBottom: 10,
  },
  scrollView: {
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 35,
    marginBottom: 10,
    fontFamily: 'QuanSlim',
    color:"#188bc9",
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  digitInput: {
    width: 40,
    height: 50,
    borderWidth: .5,
    color: '#111',
    borderColor: '#eee',
    borderRadius: 2,
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'QuanSlim',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
