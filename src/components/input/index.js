import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Input, Item, Label } from 'native-base';

//custom
import styles from './styles';

export default class MainInput extends Component {

  state = {
    txtStyle: styles.placeholder,
    underlineStyle: styles.underline,
    roundedFocus: styles.rounded,
    roundedText: styles.roundedText
  }

  onFocus = (txtStyle = styles.placeholder, underlineStyle = styles.underline, roundedFocus = styles.rounded, roundedText = styles.roundedText) => {
    this.setState({
      txtStyle,
      underlineStyle,
      roundedFocus,
      roundedText,
    })
  }

  render() {

    const {
      placeholder,
      onChangeText,
      value,
      underText,
      customStyle,
      sm,
      icon,
      rounded,
      label,
      customContainer
    } = this.props;

    const {
      underlineStyle,
      txtStyle,
      keyboardType,
      roundedFocus,
      roundedText
    } = this.state

    return (
      <View
        style={
          [
            styles.container,
            sm && styles.sm,
            customContainer && customContainer
          ]
        }
      >
        {
          label &&
          <Text
            style={styles.label}
          >
            {label}
          </Text>
        }
        <Item
          floatingLabel={!rounded && true}
          style={
            [
              styles.item, value != '' ?
                styles.underlineFocus
                :
                underlineStyle,
              customStyle && customStyle,
              rounded && roundedFocus,
              rounded && styles.itemHeight,

            ]
          }
        >
          {
            !rounded &&
            <Label
              style={txtStyle}
            >
              {placeholder}
            </Label>
          }

          <Input
            keyboardType={keyboardType}
            value={value}
            placeholder={rounded && placeholder}
            onChangeText={onChangeText}
            style={
              [
                styles.placeholder,
                rounded && roundedText,
              ]
            }
            onFocus={() => this.onFocus
              (
                styles.placeholderFocus, styles.underlineFocus, styles.roundedPlaceholderFocus,
                styles.roundedTextFocus,
              )
            }
            onBlur={() => this.onFocus()}
            placeholderTextColor={rounded && '#2d2d2d'}
          />
        </Item>
        {
          icon &&
          icon
        }
        {
          underText &&
          <Text
            style={styles.underText}
          >
            {underText}
          </Text>
        }

      </View>

    );
  }
}