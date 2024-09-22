import { Audio } from 'expo-av';
import { PermissionsAndroid, Platform, useColorScheme } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import { useState } from 'react';



const playAudio = async (soundSrc: number) => {
    try {
        console.log('Loading Sound', soundSrc);
        const { sound } = await Audio.Sound.createAsync(soundSrc);
        console.log('Playing Sound');
        await sound.playAsync();
      } catch (error) {
        console.error('Error playing sound:', error);
      }
  };

 const getRecordPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const grants = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);
  
  
      if (
        grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        grants['android.permission.READ_EXTERNAL_STORAGE'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        grants['android.permission.RECORD_AUDIO'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Permissions granted');
      } else {
        console.log('All required permissions not granted');
        return;
      }
    } catch (err) {
      console.warn(err);
      return;
    }
  }
}



const audioRecorderPlayer = new AudioRecorderPlayer();




const startRecord = async () => {
  const result = await audioRecorderPlayer.startRecorder();
  audioRecorderPlayer.addRecordBackListener((e) => {
  });
  console.log('Recording started', result);
};

const stopRecord = async () => {
  const result = await audioRecorderPlayer.stopRecorder();
  audioRecorderPlayer.removeRecordBackListener();
  console.log('Recording stopped', result);
};



export { playAudio, startRecord, stopRecord, getRecordPermission };
