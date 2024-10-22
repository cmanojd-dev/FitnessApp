import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  userTitle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  userName: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  employeeName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default styles;
