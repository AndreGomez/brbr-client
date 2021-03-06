
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content } from 'native-base';

//customs
import styles from './styles';
import locale from '../../../locale';

//component
import MainButton from '../../../components/button';
import CustomHeader from '../../../components/header';
import HeaderTitle from '../../../components/header_title';
import BackButton from '../../../components/back_button';

//icons
import duiIcons from '../../../assets/icons/dui.png';
import cameraIcons from '../../../assets/icons/camera.png';
import id_empty from '../../../assets/icons/id_empty.png'

//camera
import Camera from '../../../utils/image_picker';

//store
import { store } from '../../../../store';

//utils
import uploadAsset from '../../../utils/upload_asset';
import successMessage from '../../../utils/success_message';

//actions
import { INIT_SESSION } from '../../../actions/auth';
import { SET_USER } from '../../../actions/user';

//api
import {
	authIdentityConfirm
} from '../../../api/auth';
import { GetMyInfo } from '../../../api/user';

class UploadDUI extends Component {

	state = {
		lng: {},
		img: null,
		loadingButton: false
	}

	async componentDidMount() {
		const lng = await locale()

		this.setState({
			lng
		})
	}

	navigateTo = (screen) => {
		const { navigation } = this.props

		navigation.navigate(screen)
	}

	goBack = () => {
		const { navigation } = this.props

		navigation.goBack()
	}

	onPressTakePhoto = async () => {
		try {
			const res = await Camera.ImageCamera()

			this.setState({
				img: res.uri,
				imgInfo: res
			})
		} catch (error) {
		}
	}

	onPressLibrary = async () => {
		try {
			const res = await Camera.ImageLibrary()

			this.setState({
				img: res.uri,
				imgInfo: res
			})
		} catch (error) {
		}
	}

	onPressSkip = () => {
		// const {
		// 	dispatch
		// } = this.props;

		// dispatch({
		// 	type: INIT_SESSION,
		// 	payload: {
		// 		firstTime: true
		// 	}
		// });

		this.navigateTo('SetProfileImage')
	}

	onPressAcept = async () => {
		const {
			img,
			lng,
			imgInfo
		} = this.state

		const {
			dispatch
		} = this.props;

		if (img) {
			try {
				this.setState({ loadingButton: true })

				const res = await uploadAsset('authIdentiry', imgInfo.uri, imgInfo.fileName, { contentType: imgInfo.type })

				const storeState = await store.getState()

				await authIdentityConfirm(storeState.user._id, {
					auth_identity: res
				})

				const resUser = await GetMyInfo(storeState.user._id)

				dispatch({
					type: SET_USER,
					payload: {
						...resUser.data
					}
				});

				this.setState({ loadingButton: false })
				successMessage('Exitoso!')
				return this.props.navigation.goBack()
			} catch (error) {
				this.setState({ loadingButton: false })
			}
		} else {
			return successMessage(lng.photo_identify, 'danger')
		}
	}

	onPressNext = async () => {
		const {
			img,
			lng,
			imgInfo
		} = this.state

		const {
			dispatch
		} = this.props;

		if (img) {
			try {
				this.setState({ loadingButton: true })

				const res = await uploadAsset('authIdentiry', imgInfo.uri, imgInfo.fileName, { contentType: imgInfo.type })

				const storeState = await store.getState()

				const userData = await authIdentityConfirm(storeState.user._id, {
					auth_identity: res
				})
				const resUser = await GetMyInfo(storeState.user._id)

				this.setState({ loadingButton: false })

				dispatch({
					type: SET_USER,
					payload: {
						...resUser.data
					}
				});

				this.navigateTo('SetProfileImage')

			} catch (error) {
				this.setState({ loadingButton: false })
			}
		} else {
			return successMessage(lng.photo_identify, 'danger')
		}
	}

	render() {

		const {
			lng,
			img,
			loadingButton
		} = this.state

		const {
			navigation
		} = this.props

		return (
			<Container
				style={styles.container}
			>
				<CustomHeader
					center={
						<HeaderTitle
							text={lng.id_oficial}
						/>
					}
					left={
						<BackButton
							onPress={() => this.goBack()}
						/>
					}
				/>
				<Content
					contentContainerStyle={styles.content}
					bounces={false}
				>
					<View
						style={styles.cameraContainer}
					>
						<TouchableOpacity
							onPress={() => this.onPressLibrary()}
						>
							<Text
								style={styles.cameraText}
							>
								{lng.galery}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => this.onPressTakePhoto()}
						>
							<Image
								source={cameraIcons}
							/>
						</TouchableOpacity>
					</View>
					<Image
						style={styles.icon}
						source={duiIcons}
					/>
					<Text
						style={styles.title}
					>
						{lng.id_oficial}
					</Text>
					<Text
						style={styles.label}
					>
						{lng.id_oficial_label1}
					</Text>
					{
						!navigation.state.params.addExternal ?
							<Image
								style={img ? styles.img : styles.empty_img}
								source={img ? { uri: img } : id_empty}
								resizeMode={'contain'}
							/>
							:
							<Image
								style={img ? styles.img : navigation.state.params.userData.auth_identity ? styles.img : styles.empty_img}
								source={img ? { uri: img } : navigation.state.params.userData.auth_identity ? { uri: navigation.state.params.userData.auth_identity } : id_empty}
								resizeMode={'contain'}
							/>
					}
					{/* <Text
            style={
              [
                styles.label,
                styles.label2
              ]
            }
          >
            {lng.id_oficial_label2}
          </Text> */}
					{
						!navigation.state.params.addExternal ?
							<View
								style={styles.btnContainer}
							>
								<MainButton
									raised_green
									text={lng.skip}
									sm
									onPress={() => this.onPressSkip()}
								/>
								<MainButton
									white
									text={lng.next}
									sm
									onPress={() => this.onPressNext()}
									loading={loadingButton}
								/>
							</View>
							:
							<View
								style={styles.btnContainerNoParams}
							>
								<MainButton
									white
									text={lng.accept}
									sm
									onPress={() => this.onPressAcept()}
									loading={loadingButton}
								/>
							</View>
					}
				</Content>
			</Container>
		);
	}
}

export default connect()(UploadDUI);