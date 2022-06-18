import React from "react";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import PermissionsUtils from '../modules/PermissionsUtils';

const captureImage = async (onImagePicked) => {
  const options = {
    mediaType: 'photo',
    quality: 1,
    saveToPhotos: true,
  };
  const isCameraPermitted = await PermissionsUtils.cameraPermission();
  const isStoragePermitted = await PermissionsUtils.cameraExtendedPermission();
  if (isCameraPermitted && isStoragePermitted) {
    // @ts-ignore
    launchCamera(options, (response) => {
      if (response.didCancel) {
        return;
      }
      if (response.errorCode === 'camera_unavailable') {
        return;
      }
      if (response.errorCode === 'permission') {
        return;
      }
      if (response.errorCode) {
        return;
      }
      onImagePicked(response);
    });
  }
};

const chooseFile = (onImagePicked) => {
  const options = {
    mediaType: 'photo',
    maxWidth: 300,
    maxHeight: 550,
    quality: 1,
  };
  // @ts-ignore
  launchImageLibrary(options, (response) => {
    if (response.didCancel) {
      return;
    }
    if (response.errorCode === 'camera_unavailable') {
      return;
    }
    if (response.errorCode === 'permission') {
      return;
    }
    if (response.errorCode) {
      return;
    }
    onImagePicked(response);
  });
};

export default { captureImage, chooseFile };
