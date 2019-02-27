import { StyleSheet } from 'react-native';
import { FONT_HEADER } from '../../constants';

export default StyleSheet.create({
  scroll: {
    width: '100%',


  },
  actionButtonIcon: {
    fontSize: 20,
    color: 'white',
  },
  formCard: {
    flex: 0.3,
    width: '100%',
    height: 200,
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
    backgroundColor: '#F5FCFF',
    height: '100%',
    width: '100%',
  },

});
