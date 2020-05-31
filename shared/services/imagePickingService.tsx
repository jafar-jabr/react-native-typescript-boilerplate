import { PERMISSIONS, check, RESULTS, request } from 'react-native-permissions';
import { Alert, Platform } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import I18n from '../I18n/I18n';
import LogService from './logService';
import openSettingsButton from '../components/buttons/openSettingsButton';
import Utils from '../modules/Utils';

const pickerOptions = {
  title: I18n.t('select_photo'),
  cancelButtonTitle: I18n.t('cancel'),
  takePhotoButtonTitle: I18n.t('take_photo'),
  chooseFromLibraryButtonTitle: I18n.t('choose_from_library'),
  storageOptions: {
    skipBackup: true,
    path: '',
    privateDirectory: true,
  },
  mediaType: 'photo',
};
const selectNewImage = (onImagePicked) => {
  ImagePicker.showImagePicker(pickerOptions, (response) => {
    if (response.didCancel) {
      return;
    }
    if (response.error) {
      LogService.log(response.error);
      return;
    }
    onImagePicked(response);
  });
};

const checkPhotoLibraryPermission = async (onImagePicked) => {
  try {
    const result = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
    switch (result) {
      case RESULTS.GRANTED:
        selectNewImage(onImagePicked);
        break;

      case RESULTS.DENIED:
        await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
        await checkPhotoLibraryPermission(onImagePicked);
        break;
      case RESULTS.BLOCKED:
      case RESULTS.UNAVAILABLE:
      default:
        selectNewImage(onImagePicked);
    }
  } catch (error) {
    LogService.log(error);
  }
};

// react-native-image-picker 1.1.0 presents permission alerts after uploading new images (somehow)
// also, they don't support specifying the error messages on iOS, so we can't internationalize
// therefore, its best to handle them manually on iOS.
// https://github.com/react-native-community/react-native-image-picker/issues/1187

//  Other possible solutions:
// 1. downgrade to version 1.0.1 (hard to find problem if someone updates it back accidentally)
// 2. Update package when iOS is fixed so the flow will be the same on both platforms

const selectLocalImage = async (onImagePicked) => {
  if (Platform.OS === 'android') {
    await Utils.cameraExtendedPermission();
    selectNewImage(onImagePicked);
    return;
  }
  try {
    const result = await check(PERMISSIONS.IOS.CAMERA);
    switch (result) {
      case RESULTS.UNAVAILABLE:
        Alert.alert(I18n.t('error'), I18n.t('camera_unavailable'));
        break;
      case RESULTS.DENIED:
        await request(PERMISSIONS.IOS.CAMERA);
        await selectLocalImage(onImagePicked);
        break;
      case RESULTS.GRANTED:
        await checkPhotoLibraryPermission(onImagePicked);
        break;
      case RESULTS.BLOCKED:
        Alert.alert(I18n.t('error'), I18n.t('camera_denied'), [openSettingsButton]);
        break;
      default:
        break;
    }
  } catch (error) {
    LogService.log(error);
  }
};

export default selectLocalImage;
