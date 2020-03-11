import ImagePicker from 'react-native-image-picker';

const pickImage = (message, callback) => {
  let options = {
    title: 'Select Image',
    customButtons: [
      {
        name: 'customOptionKey',
        title: message,
      },
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  ImagePicker.showImagePicker(options, response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      let path = response.path;
      let source = {uri: 'data:image/jpeg;base64,' + response.data};
      callback(source, path);
    }
  });
};
export default pickImage;
