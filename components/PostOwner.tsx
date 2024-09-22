import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View,Text,StyleSheet,Image, TouchableOpacity} from 'react-native';

type postOwnerProps = {
    username?: string;
    date?: string;
    pic? : string;
};

export default function PostOwner(
    {username, date, pic} : postOwnerProps
) {
    return(
    <TouchableOpacity>
        <View>
        <View style={styles.container1}>
            {pic && <Image source={{uri: pic}} style={styles.pic} />
            ||
            <Ionicons name="person-circle" size={50} color="#2187b8" style={styles.pic}/>}
            <Text style={styles.owner}>{username}</Text>
        </View>
       
            
        </View>
    </TouchableOpacity>
         )
    }

const styles = StyleSheet.create({
    
    container1 : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    pic : {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    owner : {
        marginTop: 10,
        fontSize: 30,
        fontFamily: 'QuanSlim',
        marginStart: 10,
        
        color: '#000',
    },
    date : {
        marginTop: -2,
        marginStart:70,
        color: 'gray',
        fontSize: 10,
    },
});