import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

//customs
import styles from './styles';

//icons
import right_arrow from '../../assets/icons/right_arrow.png';

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
        avatar ?
          <View
            style={styles.row}
          >
            <View
              style={styles.row}
            >
              <Image
                style={styles.avatar}
                source={{ uri: avatar }}
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