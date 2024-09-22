import React from "react";
import { View, Text, Image,StyleSheet, DimensionValue } from "react-native";
import PostOwner from "./PostOwner";
import PostContent from "./PostContent";
import FakeMeter from "./FakeMeter";
import ActionBar from "./ReactCommentShare";

interface PostProps {
    username: string;
    profile_image: string | null;
    story: string;
    likes: number;
    shares: number;
    comments: number;
    date: string;
    postWidth: DimensionValue;
}

export default function Post({ username, profile_image, story, likes, shares, comments, date,postWidth }: PostProps) {
    const styles = getStyles(postWidth);
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <PostOwner username={username} date={date} pic={profile_image as string} />
                <FakeMeter />
            </View>
            <PostContent content={story} />
            <ActionBar likes={likes} comments={comments} shares={shares} />
        </View>
    );
}

const getStyles =(width: DimensionValue) => StyleSheet.create({
    container: {
        padding: 10,
        width: width,
    },
    container1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    }
});
