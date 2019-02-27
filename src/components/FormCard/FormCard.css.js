import { StyleSheet } from 'react-native';
import { FORM_TIME, FORM_NAME } from '../../constants';

export default StyleSheet.create({

  container: {
    margin: 10,
    marginTop: 20,
    padding: 10,
    flex: 1,
    width: '80%',
    height: 250,
    backgroundColor: 'white',
  },
  formName: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: FORM_NAME,
    height: '70%',
  },
  horizantalLine: {
    marginTop: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 0.5,
  },
  formTime: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
    paddingBottom: 10,
    fontSize: FORM_TIME,
  },
  formDetail: {
    textAlign: 'left',
  },
  formTimeView: {
    textAlign: 'right',
    alignItems: 'flex-start',
  },
});
