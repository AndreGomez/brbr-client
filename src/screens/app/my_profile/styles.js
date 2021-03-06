import { StyleSheet, Platform } from 'react-native';

//utils
import { resize, AIRBNB_MEDIUM } from '../../../utils/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  content: {
    paddingHorizontal: resize(20),
    paddingTop: resize(40, 'h'),
    width: '100%',
    paddingBottom: resize(50, 'h')
  },
  cancelSecure: {
    color: 'black',
    fontFamily: 'Airbnb Cereal App',
    fontSize: resize(20),
    fontWeight: '700',
    paddingTop: resize(20, 'h')
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowBtns: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: resize(20, 'h')
  },
  name: {
    color: '#ffffff',
    fontFamily: 'Airbnb Cereal App',
    fontSize: resize(24),
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
    width: resize(270)
  },
  city: {
    color: '#cfcfcf',
    fontFamily: 'Airbnb Cereal App',
    fontSize: resize(20),
    fontWeight: '300',
  },
  avatar: {
    width: resize(82, 'h'),
    height: resize(82, 'h'),
    borderRadius: resize(41, 'h'),
    borderWidth: 3,
    borderColor: '#707070',
  },
  stars: {
    color: '#ffffff',
    fontFamily: 'Airbnb Cereal App',
    fontSize: resize(22),
    fontWeight: Platform.OS === 'ios' ? '500' : '400',
  },
  txtContainer: {
    marginLeft: resize(30)
  },
  switch: {
    marginTop: resize(42, 'h')
  },
  separator: {
    height: resize(1),
    borderColor: '#ffffff',
    borderWidth: resize(4),
    marginTop: resize(34, 'h'),
    backgroundColor: 'white'
  },
  sep: {
    marginTop: resize(34, 'h'),
  },
  empty: {
    color: '#ffffff',
    paddingTop: resize(10, 'h'),
    fontFamily: 'Airbnb Cereal App',
    fontSize: resize(18),
    fontWeight: '300',
  },
  empty2: {
    color: '#ffffff',
    marginTop: resize(-20, 'h'),
    fontFamily: 'Airbnb Cereal App',
    fontSize: resize(18),
    fontWeight: '300',
  },
  list: {
    paddingTop: resize(34, 'h'),
  },

});