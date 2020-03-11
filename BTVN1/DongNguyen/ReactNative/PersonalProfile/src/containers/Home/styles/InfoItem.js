import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: '100%',
    height: 'auto',
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 2,
    padding: 12,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  leftTitleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  editBox: {
    borderColor: '#27a135',
    borderWidth: 2,
    borderRadius: 8,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  content: {
    fontSize: 15,
  },
});

export default styles;
