import { StyleSheet } from 'react-native';
import { FONT_HEADER, FORM_NAME } from '../../constants';

export default StyleSheet.create({
  scroll: {
    width: '100%',
    height: '100%',

  },
  header: {
    backgroundColor: '#1d61e0',
    justifyContent: 'center',
    width: '100%',
    height: '10%',

  },
  headerText: {
    fontSize: FONT_HEADER,
    color: 'white',
    paddingLeft: 25,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  buttonText: {
    fontSize: FORM_NAME,
    color: 'white',
    paddingTop: 7,
  },
  button: {
    width: '35%',
    height: '7%',
    margin: 30,
    backgroundColor: '#1d61e0',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  textInput: {
    width: 300,
    height: 50,
    marginTop: 40,
    backgroundColor: 'grey',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    borderWidth: 2,
  },
});
