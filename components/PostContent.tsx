import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type PostContentProps = {
  content: string;
};

export default function PostContent({ content }: PostContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedContent = content.length > 100 ? content.substring(0, 100) + '...' : content;

  return (
    <TouchableOpacity>
      <View style={styles.postContainer}>
      <Text style={styles.postText}>
        {isExpanded ? content : truncatedContent}
      </Text>

      <TouchableOpacity onPress={toggleExpand}>
        <Text style={styles.readMoreText}>
          {isExpanded ? 'See Less' : 'See More'}
        </Text>
      </TouchableOpacity>
    </View>
    </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  postContainer: {
    padding: 10,
  },
  postText: {
    fontFamily: 'sans-serif',
    fontSize: 16,
  },
  readMoreText: {
    color: '#2187b8',
    marginTop: 5,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  },
});
