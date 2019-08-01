import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

//customs
import styles from './styles';

//icons
import vipIcon from '../../assets/icons/vip.png';
import starIcon from '../../assets/icons/star.png';
import ImagesCustom from '../imagesCustom';

export default function BrbrPaymentReview(props) {

  const {
    lng,
    vip,
    avatar,
    name,
    city,
    stars,
    paymentMethod,
    onPressProfile,
    onPressChange,
  } = props

  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.top}
      >
        <View
          style={styles.topHeader}
        >
          <Text
            style={styles.barber}
          >
            {lng.brbr_profile_title}
          </Text>
          {
            vip &&
            <Image
              source={vipIcon}
            />
          }
        </View>
        <View
          style={styles.topHeader}
        >
          <View
            style={styles.topHeaderContent}
          >
            <ImagesCustom
              img={avatar ? { uri: avatar } : null}
              styles={styles.avatar}
            />
            <View>
              <Text
                style={styles.name}
              >
                {name}
              </Text>
              <Text
                style={styles.city}
                numberOfLines={2}
              >
                {city}
              </Text>
            </View>
          </View>
          <View
            style={styles.starContent}
          >
            <View
              style={styles.asap}
            >
              <Text
                style={styles.stars}
              >
                {stars}
              </Text>
              <Image
                source={starIcon}
              />
            </View>
            <TouchableOpacity
              onPress={onPressProfile}
            >
              <Text
                style={styles.txtTouch}
              >
                {lng.view_profile}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={styles.bottom}
      >
        <Text
          style={styles.payment}
        >
          {lng.method}
        </Text>
        <View>
          <Text
            style={styles.name}
          >
            {paymentMethod}
          </Text>
          <TouchableOpacity
            onPress={onPressChange}
          >
            <Text
              style={styles.txtTouch}
            >
              {lng.change}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

BrbrPaymentReview.defaultProps = {
  vip: false,
  avatar: '',
  name: '',
  city: '',
  star: 0,
  paymentMethod: '',
  onPressProfile: () => { },
  onPressChange: () => { }
}