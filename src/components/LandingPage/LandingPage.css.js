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
    height: 260,
    alignSelf: 'center',
  },
  header: {
    backgroundColor: '#1d61e0',
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',

  },
  headerText: {
    fontSize: FONT_HEADER,
    color: 'white',
    paddingLeft: 5,
    alignSelf: 'center',
    alignItems: 'flex-start',

  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: '100%',
    width: '100%',
  },
  menu: {
    alignSelf: 'center',
    alignItems: 'flex-end',
    marginLeft: 100,
    marginTop: 10,
  },
});
