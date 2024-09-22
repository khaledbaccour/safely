import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { InputToolbar, Send } from 'react-native-gifted-chat';
import React from 'react';

export const renderInputToolbar = (props: any) => {
    const { text, onTextChanged, onSend, isRecording, startStopRecording } = props;
  
    return (
      <InputToolbar
        {...props}
        containerStyle={styles.inputToolbarContainer}
        primaryStyle={styles.primaryStyle}
        renderActions={() => (
          <View style={styles.actionContainer}>
            <TouchableOpacity
            style={styles.iconButton}
            onPress={startStopRecording} 
          >
            <Ionicons
              name={isRecording ? "stop" : "mic"} 
              size={24}
              color={isRecording ? "red" : "gray"} 
            />
          </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="image" size={24} color="gray" />
            </TouchableOpacity>
          </View>
        )}
        renderComposer={() => (
          <TextInput
            value={text} 
            onChangeText={onTextChanged} 
            style={styles.textInput}
            placeholder="Type a message..."
          />
        )}
        renderSend={() => (
          <TouchableOpacity onPress={() => onSend([{ text }])} style={styles.sendButton}>
            <Ionicons name="send" size={24} color="#0078FF" />
          </TouchableOpacity>
        )}
      />
    );
  };
const styles = StyleSheet.create({
  inputToolbarContainer: {
    backgroundColor: '#FFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: '#E8E8E8',
    flexDirection: 'row',
    alignItems: 'center',
  },
  primaryStyle: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  actionContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#F8F8F8',
  },
  sendButton: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
