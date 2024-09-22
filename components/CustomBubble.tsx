import React from 'react';
import { Bubble } from 'react-native-gifted-chat';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {playAudio} from '@/utils/sound';

const renderBubble = (props: any) => {
  const { currentMessage } = props;
  const bgCol = currentMessage.user._id === 1 ? '#0084FF' : '#fff';
  const styles = createStyles(bgCol);

  if (currentMessage.audio) {
    return (
      <View style={styles.audioBubbleContainer}>
        <TouchableOpacity
          style={styles.audioButton}
          onPress={() => playAudio(currentMessage.audio)}
        >
          <Ionicons 
            name="play" 
            size={24} 
            color={currentMessage.user._id === 1 ? '#fff' : '#000'} 
            style={styles.playIcon} 
          />
          <Text style={styles.audioText}>Voice message</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return <Bubble {...props} />;
};


const createStyles = (bgCol:string) => StyleSheet.create({
  audioBubbleContainer: {
    backgroundColor: bgCol,
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '80%',
  },
  audioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playIcon: {
    marginRight: 10,
  },
  audioText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default renderBubble;
