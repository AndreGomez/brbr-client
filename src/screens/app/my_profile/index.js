import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { Container, Content } from 'native-base';

//component
import CustomHeader from '../../../components/header';
import HeaderTitle from '../../../components/header_title';
import BackButton from '../../../components/back_button';
import Loading from '../../../components/loading';
import Switch from '../../../components/switch';
import BrbrPaymentReview from '../../../components/brbr_payment_review';

//locale
import locale from '../../../locale';

//customs
import styles from './styles';

//icons
import starIcon from '../../../assets/icons/star.png';
import ImagesCustom from '../../../components/imagesCustom';
import { getAppoiment } from '../../../api/appoinments';
import { getBarberProfile } from '../../../api/barbers';
import BrbrHistoryReserve from '../../../components/brbr_history_reserve';

class MyProfile extends Component {

  state = {
    loading: true,
    lng: {},
    active: true,
    appoinments: [],
    proxAppoinment: {}
  }

  async componentDidMount() {
    await this.getAppointemt()
    const lng = await locale()
    this.setState({
      lng,
      loading: false
    })
  }

  getAppointemt = async () => {
    const {
      currentUser
    } = this.props

    const {
      state
    } = this

    try {
      const res = await getAppoiment(currentUser._id)

      this.setState({
        ...state,
        appoinments: res.data,
      })
    } catch (error) {
    }
  }

  navigateTo = (screen, data = {}) => {
    const { navigation } = this.props

    navigation.navigate(screen, data)
  }

  renderHistory = (item) => {
    console.log(item)

    return (
      <BrbrHistoryReserve
        {...item.item}
      />
    )
  }

  render() {

    const {
      loading,
      lng,
      active,
      paymentMethod,
      appoinments,
      proxAppoinment
    } = this.state

    const {
      currentUser
    } = this.props

    return (
      <Container
        style={styles.container}
      >
        <CustomHeader
          center={
            <HeaderTitle
              text={lng.my_profile}
            />
          }
          left={
            <BackButton
              onPress={() => this.props.navigation.goBack()}
            />
          }
        />
        {
          loading ?
            <Loading />
            :
            <Content
              contentContainerStyle={styles.content}
              bounces={false}
            >
              <View
                style={styles.row}
              >
                <ImagesCustom
                  styles={styles.avatar}
                  img={currentUser.photo ? { uri: currentUser.photo } : null}
                />
                <View
                  style={styles.txtContainer}
                >
                  <Text
                    style={styles.name}
                  >
                    {currentUser.name}
                  </Text>
                  <Text
                    style={styles.city}
                  >
                    {
                      currentUser.address.length != 0 ?
                        currentUser.address.description
                        :
                        ''
                    }
                  </Text>
                  {/* <View
                    style={styles.row}
                  >
                    <Text
                      style={styles.stars}
                    >
                      {stars}
                    </Text>
                    <Image
                      source={starIcon}
                    />
                  </View> */}
                </View>
              </View>
              <View
                style={styles.switch}
              >
                <Switch
                  ft={lng.prox}
                  st={lng.history}
                  onPress={() => this.setState({ active: !active })}
                  active={active}
                />
              </View>
              <View
                style={styles.separator}
              />
              {
                active ?
                  appoinments.length != 0 ?
                    <React.Fragment>
                      <View style={styles.sep} />
                      <BrbrPaymentReview
                        lng={lng}
                        vip={false}
                        avatar={appoinments[appoinments.length - 1].barber.photo}
                        name={appoinments[appoinments.length - 1].barber.name}
                        city={appoinments[appoinments.length - 1].location[2]}
                        stars={appoinments[appoinments.length - 1].barber.qualification}
                        paymentMethod={'...'}
                        onPressProfile={() => this.navigateTo('BrbrProfile', { item: { barber: { ...{ _id: appoinments[appoinments.length - 1].barber.id } } } })}
                        onPressChange={() => this.navigateTo('BrbrProfile', { item: { barber: { ...{ _id: appoinments[appoinments.length - 1].barber.id } } } })}
                      />
                    </React.Fragment>
                    :
                    <Text style={styles.empty}>No tienes reservaciones</Text>
                  :
                  <FlatList
                    contentContainerStyle={styles.list}
                    keyExtractor={(a, i) => `${i}`}
                    renderItem={(item) => this.renderHistory(item)}
                    data={appoinments.reverse()}
                  />
              }

            </Content>
        }
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user
  }
};

export default connect(mapStateToProps)(MyProfile);