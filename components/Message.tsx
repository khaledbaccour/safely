import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import PostOwner from "./PostOwner";

type messageProps = {	
    message: string;	
    username: string;
    pic : any;
    onMessagePress: (
        message: string,
        username: string,
        pic: any
    ) => void;
};

export function Message(
    { message, username, pic, onMessagePress }: messageProps
) {
    return (
        <TouchableOpacity onPress={()=>{onMessagePress(message,username,pic)}}>
            <View style={styles.container}>
                <PostOwner username={username} pic={pic} />
                <Text style={styles.message}>{message.length > 10 ? message.substring(0, 70) + '...' : message}</Text>
            </View>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        width: '100%',
    },
    message: {
            paddingTop: 10,
            fontFamily: 'sans-serif',
            fontSize: 16,
            color: '#666',
          }
   }
);
