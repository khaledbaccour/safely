import renderBubble from "@/components/CustomBubble";
import { renderInputToolbar } from "@/components/CustomInputBar";
import { getRecordPermission, startRecord, stopRecord } from "@/utils/sound";
import { useLocalSearchParams } from "expo-router";
import { usePreventScreenCapture } from "expo-screen-capture";
import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';


export default function Conversation() {

    const [messages, setMessages] = useState<IMessage[]>([]);
    const [isRecording, setIsRecording] = useState(false);
    const [isOk, setIsOk] = useState(false);
    const [hasPermission, setHasPermission] = useState(false);
    

    const startStopRecording = () => {
        setIsRecording(!isRecording);
        setIsOk(true);
    }
    
    const searchParams = useLocalSearchParams();
    const username = searchParams?.username;
    const pic = searchParams?.pic;



  useEffect(() => {
    if (isOk) {
      if (isRecording) {
        if (hasPermission) {
          startRecord();
        } else {
          getRecordPermission();
          setHasPermission(true);
        }
      } else {
        stopRecord();
      }
    }

  }, [isRecording]);


  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'I saw a documentary about how things are escalating. It’s really alarming.',
        audio: require('@/assets/audios/male-audio.mp3'),
        createdAt: new Date(),
        user: {
          _id: 2,
          name: username as string || 'Anonymous',
          avatar: pic as string || 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'It’s terrifying. Freedom of speech seems to be disappearing.',
        createdAt: new Date(new Date().getTime() - 1000 * 60 * 5), // 5 minutes ago
        user: {
          _id: 1,
          name: 'You',
        },
      },
      {
        _id: 3,
        text: 'I heard they even arrested someone for speaking out on social media last week.',
        createdAt: new Date(new Date().getTime() - 1000 * 60 * 10), // 10 minutes ago
        user: {
          _id: 2,
          name: username as string || 'Anonymous',
          avatar: pic as string || 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 4,
        text: 'Yeah, it’s been troubling. They’re shutting down journalists and blocking websites.',
        createdAt: new Date(new Date().getTime() - 1000 * 60 * 15), // 15 minutes ago
        user: {
          _id: 1,
          name: 'You',
        },
      },
      {
        _id: 5,
        text: 'Have you been following the news? The censorship in Tunisia is getting worse.',
        createdAt: new Date(new Date().getTime() - 1000 * 60 * 20), // 20 minutes ago
        user: {
          _id: 2,
          name: username as string || 'Anonymous',
          avatar: pic as string || 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages: IMessage[] = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages),
    );
  }, []);

  

  return (
    <GiftedChat
      renderInputToolbar={(props) =>
        renderInputToolbar({
          ...props,
          isRecording, 
          startStopRecording, 
        })
      }
      alwaysShowSend
      renderBubble={renderBubble}
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{
        _id: 1, 
      }}
    />
  );
}
