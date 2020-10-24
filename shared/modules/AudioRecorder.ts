import { useEffect, useState, useRef } from 'react';
import { Platform } from 'react-native';
import { Recorder } from '@react-native-community/audio-toolkit';
import Utils from './Utils';
// import Alerts from '../components/Alerts';

function useRecorder(): [boolean, Function, Function] {
  const [isRecording, setRecording] = useState(false);
  const recorder = useRef(Recorder);
  const [startTime, setStartTime] = useState(new Date());
  const extension = Platform.OS === 'android' ? `mp3` : `mp4`;
  const calculateDuration = (start: Date, end: Date) => {
    let minutes = end.getMinutes() - start.getMinutes();
    let seconds = end.getSeconds() - start.getSeconds();
    if (seconds < 0) {
      seconds = 60 + seconds;
      minutes -= 1;
    }
    if (minutes < 0) {
      minutes = 0;
    }
    return `${minutes}:${`0${seconds}`.slice(-2)}`;
  };
  useEffect(() => {
    const audioTempFile = `audio_message.${extension}`;
    Utils.audioPermission().then((result) => {
      if (result) {
        recorder.current = new Recorder(audioTempFile, {
          encoder: '',
          format: '',
          bitrate: 256000,
          channels: 2,
          sampleRate: 44100,
          quality: 'max',
        });
      }
    });
  }, [extension]);
  const stopRecording = (callBack: (arg0: string, arg1: string, arg2: string) => void) => {
    recorder.current.stop();
    const audioTempFile = `audio_message.${extension}`;
    const audioFile = `${Utils.getBasePath()}/${audioTempFile}`;
    setRecording(false);
    const duration = calculateDuration(startTime, new Date());
    if (callBack) {
      callBack(audioFile, extension, duration);
    }
  };
  const startRecording = () => {
    setStartTime(new Date());
    recorder.current.prepare((error: any) => {
      if (error) {
        // Alerts.simpleAlert('prepare error', JSON.stringify(error));
      } else {
        recorder.current.record((error: any) => {
          if (error) {
            // Alerts.simpleAlert('record error', JSON.stringify(error));
          }
        });
      }
    });
    setRecording(true);
  };
  return [isRecording, startRecording, stopRecording];
}

export default useRecorder;
