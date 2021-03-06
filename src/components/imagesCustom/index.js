import React from 'react';
import { Image } from 'react-native-elements';

//components
import Loading from '../loading';

//customs
import styles from './styles';

//icons
import img_empty from '../../assets/images/img_empty.png';
import { Spinner } from 'native-base';

export default function ImagesCustom(props) {

  const {
    img,
    roundedNormal,
    roundedS,
    list,
    complete,
    roundedXs,
    listy,
    colorLoading
  } = props

  return (
    <Image
      placeholderStyle={{ backgroundColor: 'transparent' }}
      style={
        [
          roundedNormal && styles.roundedNormal,
          roundedS && styles.roundedS,
          list && styles.list,
          listy && styles.listy,
          complete && styles.complete,
          roundedXs && styles.roundedXs,
          props.styles
        ]
      }
      source={img ? img : img_empty}
      PlaceholderContent={
        <Spinner
          color={colorLoading}
          size={'small'}
        />
      }
    />
  );
}

ImagesCustom.defaultProps = {
  avatar: '',
  colorLoading: 'white'
}