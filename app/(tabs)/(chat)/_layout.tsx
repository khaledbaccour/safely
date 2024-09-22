import { Stack } from "expo-router";

export default function ChatLayout(){
    return (
        <Stack>
        <Stack.Screen name="chat" options={{
            title: "Chat",
            headerShown: false,
        }} />
        <Stack.Screen name="conversation" options={{
            title: "Conversation",
            headerShown: false,
        }} />
    </Stack>
    );
}