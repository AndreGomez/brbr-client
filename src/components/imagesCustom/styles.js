import { StyleSheet } from 'react-native';

import { resize } from '../../utils/styles';
export default StyleSheet.create({
  roundedNormal: {
    width: resize(65, 'h'),
    height: resize(65, 'h'),
    borderRadius: resize(65, 'h') / 2,
  },
  roundedS: {
    width: resize(48, 'h'),
    height: resize(48, 'h'),
    borderRadius: resize(48, 'h') / 2,
  },
  list: {
    width: resize(74),
    height: resize(74),
    borderRadius: 10,
    marginHorizontal: resize(10),
  },
  listy: {
    width: resize(74),
    height: resize(74),
    borderRadius: 10,
  },
  complete: {
    width: '100%',
    height: '100%'
  },
});