import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  avatarContainer: {
    // height: 300,
    alignItems: 'center',
    position: 'relative',
    top: -100,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 5,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },
  editBox: {
    borderColor: '#27a135',
    borderWidth: 2,
    borderRadius: 8,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
export default styles;
