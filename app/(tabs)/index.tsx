import { Header } from "@/components/Header";
import Post from "@/components/Post";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
import { View, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { Searchbar } from 'react-native-paper';
import data from "@/dummy-data/dummy.json";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts based on search query
  const filteredData = data.filter(post =>
    post.story.toLowerCase().includes(searchQuery.toLowerCase())
    || post.username.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <View style={styles.container}>
      <Header title="Safely" keyphrase="Posts"  img={require('@/assets/images/logo-safely.png')}/>  
      <ScrollView>
        <View style={styles.searchAddCont}>
          <Ionicons name="add-circle" size={32} color="#42c3ff" style={styles.add} />
          <Searchbar
            style={styles.searchbar}
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            mode="bar"
          />
        </View>
        <View style={styles.postsContainer}>
          {filteredData.map((post, index) => (
          <Post
            key={index}
            username={post.username}
            profile_image={post.profile_image}
            story={post.story}
            likes={post.likes}
            shares={post.shares}
            comments={post.comments}
            date={post.date}
            postWidth={'100%'}
          />
        ))}
        </View>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  searchbar: {
    width: '80%',
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 0,
    elevation: 2,
    backgroundColor: '#d6f2ff',
    height: 50,
  },
  searchAddCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '89%',
    marginHorizontal: 20,
  },
  add: {
    marginTop: 17,
  },

  postsContainer: {
    width: '100%',
    marginTop: 30,
  }
});
