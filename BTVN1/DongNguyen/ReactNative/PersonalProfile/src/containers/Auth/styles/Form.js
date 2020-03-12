import {StyleSheet, Dimensions} from 'react-native';

const DEVICE_WIDTH = Math.round(Dimensions.get('window').width);
// const DEVICE_HEIGHT = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  container: {
    width: 0.7 * DEVICE_WIDTH,
    height: 210,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  textInput: {
    flex: 1,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 17,
  },
  submitButton: {
    width: 100,
    height: 30,
    backgroundColor: 'gray',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default styles;
