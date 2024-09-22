import React from "react";
import { View, StyleSheet } from "react-native";

type parentProps = {
    children: React.ReactNode;
};

export default function Parent({ children }: parentProps) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",}
   
});