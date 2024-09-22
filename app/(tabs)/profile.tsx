import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  Appearance,
  ColorSchemeName,
  useColorScheme,
  TextInput
} from "react-native";
import { Searchbar } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
import Parent from "@/components/Parent";
import PostOwner from "@/components/PostOwner";
import SecurityMesures from "@/components/SecurityMesures";
import data from "@/dummy-data/dummy.json";
import Post from "@/components/Post";

export default function Profile() {

  const [colorScheme, setColorScheme] = useState<ColorSchemeName | string>(
    Appearance.getColorScheme(),
  );

  
  const [searchQuery, setSearchQuery] = useState("");
  const [whistleblowerMode, setWhistleblowerMode] = useState(false);
  const [showPosts, setShowPosts] = useState(true);
  const [iconUrls, setIconUrls] = useState<string[]>([]);
  const [showIcons, setShowIcons] = useState(false)
  const [icSearchQuery,setIcSearchQuery] = useState("whatsapp")

  useEffect(()=>{
    whistleblowerMode?setColorScheme("Dark"):setColorScheme("Light")
  },[whistleblowerMode])

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'x-freepik-api-key': 'FPSX5bbb87c3d945496a87a9ca77e489ad87',
        'Accept-Language': 'en-US'
      }
    };

    const query = icSearchQuery;
    const perPage = 10;
    const page = 1;

    const url = `https://api.freepik.com/v1/resources?page=${page}&order=relevance&term=${query}&limit=${perPage}&filters%5Bvector%5D%5Btype%5D=jpg`;

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log("data data",data.data[0].image.source.url)
        const newDataList: string[] = [];
        data.data.forEach((icon: any) => {
          const thumbnailUrl = icon.image.source.url;
          newDataList.push(thumbnailUrl);
          
        });
        setIconUrls(newDataList);
      })
      .catch((error) => console.error(error));
  }, [icSearchQuery]);

  const renderIcon = ({ item }: { item: string }) => (
    <View style={styles.iconWrapper}>
      <Image source={{ uri: item }} style={styles.iconImage} />
    </View>
  );

  const handleEditPost = () => {
  };

  const handleDeletePost = () => {
  };

  const userPosts = data.filter((post) => post.username === "Anonymous");

  const filteredData = userPosts.filter(
    (post) =>
      post.story.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleWhistleblowerMode = () => {
    setWhistleblowerMode((previousState) => !previousState);
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account? This action cannot be undone.",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            console.log("Account deleted");
          }
        }
      ]
    );
  };

  return (
    <Parent>
      <ScrollView
      style = {
        {
          width: "100%"
        }
      }
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}      
      >
        <View style={styles.container}>
        <PostOwner
          username="Anon4412"
          date=""
          pic="https://i.ibb.co/jLN1PwK/saied.png"
        />
        
        <Text style={styles.toggleHint}>
          your identity will remain anonymous across the platform.
        </Text>
        <Button
          title="Delete Account"
          color="#FF3B30"
          onPress={handleDeleteAccount}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.toggleLabel}>My Posts</Text>
        <TouchableOpacity onPress={() => setShowPosts((prevState) => !prevState)}>
          <Text style={styles.buttonText}>{showPosts ? "Hide" : "Show"}</Text>
        </TouchableOpacity>
      </View>

      {showPosts && (
        <>
          <Searchbar
            style={styles.searchbar}
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
          
            <View style={styles.postsContainer}>
              {filteredData.map((post, index) => (
                <View style={styles.postWrapper} key={index}>
                  <Post
                    username={post.username}
                    profile_image={post.profile_image}
                    story={post.story}
                    likes={post.likes}
                    shares={post.shares}
                    comments={post.comments}
                    date={post.date}
                    postWidth={300}
                  />
                  <View style={styles.iconColumn}>
                    <TouchableOpacity onPress={() => handleEditPost()}>
                      <Ionicons name="pencil-outline" size={24} color="#007BFF" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDeletePost()}>
                      <Ionicons name="trash-outline" size={24} color="#FF3B30" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          
        </>
      )}
      <SecurityMesures />

      <View style={styles.row}>
        <Text style={styles.toggleLabel}>Fake icons</Text>
        <TouchableOpacity onPress={() => setShowIcons((prevState) => !prevState)}>
          <Text style={styles.buttonText}>{showIcons ? "Hide" : "Show"}</Text>
        </TouchableOpacity>
      </View>
      {
        
        showIcons && (
          <>
          <Searchbar
            style={styles.searchbar}
            placeholder="Search icons"
            onChangeText={setIcSearchQuery}
            value={icSearchQuery}
          />
          <FlatList
          data={iconUrls}
          renderItem={renderIcon}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          contentContainerStyle={styles.iconGrid}
        />
          </>
        
        )
      }
      <View style={styles.row}>
        <Text style={styles.toggleLabel}>Fake name</Text>
        <TextInput style={styles.textInp} placeholder="enter fake name" />
      </View>
      </ScrollView>
    </Parent>
  );
}

const styles = StyleSheet.create({
  textInp : {
    width: "50%",
    fontSize: 17,
  },
  container: {
    width: "100%",
    padding: 20
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  toggleLabel: {
    fontSize: 30,
    marginRight: 10,
    fontFamily: "QuanSlim"
  },
  toggleHint: {
    fontSize: 20,
    color: "#777",
    marginBottom: 20,
    fontFamily: "QuanSlim"
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 20,
    paddingHorizontal: 20
  },
  buttonText: {
    fontSize: 30,
    color: "#007BFF",
    fontFamily: "QuanSlim",
    marginLeft: 20
  },
  searchbar: {
    width: "80%",
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: "#d6f2ff",
    height: 50
  },
  postsContainer: {
    width: "100%",
    marginTop: 30
  },
  postWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 20
  },
  iconColumn: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 20,
    marginTop: 20,
    height: 70
  },
  iconGrid: {
    padding: 20,
    justifyContent: "center",
    width: "100%"
  },
  iconWrapper: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: 80,
    height: 80,
    resizeMode: "cover"
  }
});
