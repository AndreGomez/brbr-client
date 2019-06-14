import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';

//components
import MainButton from '../button';

//customs
import styles from './styles';

//icons
import starIcon from '../../assets/icons/star.png';
import arrow_green from '../../assets/icons/arrow_green.png'

export default function BarberArround(props) {

  const {
    img,
    addres,
    stars,
    name,
    price,
    cash,
    reserve
  } = props

  return (
    <TouchableOpacity
      style={styles.container}
    >
      <Image
        source={{ uri: img }}
        style={styles.img}
      />
      <View
        style={styles.txtContainer}
      >
        <Text
          style={styles.name}
          numberOfLines={1}
        >
          {name}
        </Text>
        <Text
          style={styles.addres}
          numberOfLines={1}
        >
          {addres}
        </Text>
        <View
          style={styles.starContainer}
        >
          <Text
            style={styles.starText}
          >
            {stars}
          </Text>
          <Image
            style={styles.starIcon}
            source={starIcon}
          />
        </View>
      </View>
      <View
        style={styles.priceContainer}
      >
        <Text
          style={styles.cash}
        >
          {cash}
        </Text>
        <Text
          style={styles.price}
        >
          {`USD ${price}`}
        </Text>
        <MainButton
          containerStyle={styles.btn}
          xsRaisedGreen
          text={reserve}
          iconRight
          icon={arrow_green}
        />
      </View>
    </TouchableOpacity>
  );
}

BarberArround.defaultProps = {
  img: '',
  addres: '',
  stars: 0.0,
  name: '',
  price: 0.0
}