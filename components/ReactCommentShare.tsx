import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type ActionBarProps = {
  likes: number;
  comments: number;
  shares: number;
};

export default function ActionBar({ likes, comments, shares }: ActionBarProps) {
  return (
    <View style={styles.actionBar}>
      <TouchableOpacity style={styles.actionItem}>
        <Ionicons name="heart-outline" size={24} color="red" />
        <Text style={styles.actionText}>{likes}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionItem}>
        <Ionicons name="chatbubble-outline" size={24} color="gray" />
        <Text style={styles.actionText}>{comments}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionItem}>
        <Ionicons name="share-outline" size={24} color="gray" />
        <Text style={styles.actionText}>{shares}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 5,
    fontSize: 16,
  },
});
