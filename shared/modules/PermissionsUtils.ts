import React from "react";
import { PermissionsAndroid, Platform } from 'react-native';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';

const audioPermission = async () => {
  if (Platform.OS !== 'android') {
    return Promise.resolve(true);
  }
  let result;
  try {
    result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO);
  } catch (error) {
    return Promise.reject(error);
  }
  return result === PermissionsAndroid.RESULTS.GRANTED;
};

const cameraPermission = () =>
  new Promise((resolve) => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
        .then((permission) => {
          resolve(permission);
        })
        .catch(() => {
          resolve(null);
        });
    } /** IOS platform* */ else {
      request(PERMISSIONS.IOS.CAMERA)
        .then((iosPermission) => {
          switch (iosPermission) {
            case RESULTS.UNAVAILABLE:
              resolve(null);
              break;
            case RESULTS.DENIED:
              resolve(null);
              break;
            case RESULTS.GRANTED:
              resolve(true);
              break;
            default:
              resolve(null);
              break;
          }
        })
        .catch(() => {
          resolve(null);
        });
    }
    return true;
  });

const cameraExtendedPermission = () =>
  new Promise((resolve) => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ])
        .then((permission) => {
          resolve(permission);
        })
        .catch(() => {
          resolve(null);
        });
    } /** IOS platform* */ else {
      request(PERMISSIONS.IOS.CAMERA)
        .then((iosPermission) => {
          switch (iosPermission) {
            case RESULTS.UNAVAILABLE:
              resolve(null);
              break;
            case RESULTS.DENIED:
              resolve(null);
              break;
            case RESULTS.GRANTED:
              resolve(true);
              break;
            default:
              resolve(null);
              break;
          }
        })
        .catch(() => {
          resolve(null);
        });
    }
    return true;
  });

const getTwilioPermissions = async () => {
  try {
    if (Platform.OS === 'android') {
      return PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);
    }
    return null;
  } catch (err) {
    return null;
  }
};

export default {
  cameraPermission,
  cameraExtendedPermission,
  audioPermission,
  getTwilioPermissions,
};
