import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Image } from 'react-native-elements';

//customs
import styles from './styles';

//icons
import right_arrow from '../../assets/icons/right_arrow.png';
import img_empty from '../../assets/images/img_empty.png';
import Loading from '../loading';

export default function ItemList(props) {

  const {
    text,
    onPress,
    avatar,
    name,
    version,
    notifications,
    active,
    lng
  } = props

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      {
        name ?
          <View
            style={styles.row}
          >
            <View
              style={styles.row}
            >
              <Image
                PlaceholderContent={<Loading />}
                style={styles.avatar}
                source={avatar ? { uri: avatar } : img_empty}
              />
              <View
                style={styles.txtContainer}
              >
                <Text
                  style={styles.name}
                >
                  {name}
                </Text>
                <Text
                  style={styles.textLbl}
                >
                  {text}
                </Text>
              </View>
            </View>
            <Image
              source={right_arrow}
            />
          </View>
          :
          <View
            style={styles.row}
          >
            <Text
              style={styles.txt}
            >
              {text}
            </Text>
            {
              version ?
                <Text
                  style={styles.version}
                >
                  {version}
                </Text>
                :
                notifications ?
                  <Text
                    style={active ? styles.active : styles.desactive}
                  >
                    {active ? lng.active : lng.desactive}
                  </Text>
                  :
                  <Image
                    source={right_arrow}
                  />
            }
          </View>
      }
    </TouchableOpacity>
  );
}

ItemList.defaultProps = {
  text: '',
  onPress: () => { }
}