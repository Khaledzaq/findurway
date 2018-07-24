import React, { Component } from 'react';
import styled from 'styled-components/native';
import Header from 'components/common/header';
import { COLORS } from 'constants/styles';
import { TouchableWithoutFeedback, ScrollView, TouchableOpacity } from 'react-native';
import {SHOWS , requirments , scholarships} from 'data/data';
import Icon from 'react-native-vector-icons/FontAwesome';
//import requirments from  'data/data';

const Container = styled.View`
	display: flex;
	width: 100%;
	height: 100%;
	background-color: ${COLORS.GREY.FIRE_ENGINE_PER};
`;

const UserNavigationContainer = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: ${COLORS.GREY.FIRE_ENGINE_PER};
`;

const UserNavigationLink = styled.View`
	margin-right: 10;
	margin-left: 10;
	margin-top: 10;
	padding-top: 10;
	padding-right: 10;
	padding-left: 10;
	padding-bottom: 10;
	background-color: ${COLORS.GREY.FIRE_ENGINE_PER};
	border-bottom-width: 5;
`;

const ActiveUserNavigationLink = styled(UserNavigationLink)`
	border-bottom-color: ${COLORS.WHITE.WHITE};
`;

const UserNavigationLinkText = styled.Text`
	color: ${COLORS.WHITE.WHITE}
`;

const ImageContainer = styled.View`
	display: flex;
	flex-direction: row;
`;

const Image = styled.Image`
	width: 150;
	height: 125;
	margin-left: 5;
	margin-right: 5;
	margin-top: 10;
`;

const SubHeader = styled.View`
	padding-top: 15;
	padding-bottom: 5;
	padding-left: 15;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const SubHeaderTextContainer = styled.View`
`;

const SubHeaderTitleText = styled.Text`
	color: ${COLORS.WHITE.WHITE};
`;

const SubHeaderText = styled.Text`
	color: ${COLORS.GREY.BRIGHT_GREY};
`;

const AllContainer = styled.View`
	align-self: flex-end;
	display: flex;
	flex-direction: row;
`;

const AllText = styled.Text`
	color: ${COLORS.GREY.BRIGHT_GREY};
	align-self: center;
	margin-right: 5;
`;

const IconContainer = styled.View`
	margin-right: 10;
`;

class HomeScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: 'browse',
		};

		this.setActiveUserNavigation = this.setActiveUserNavigation.bind(this);
	}

	setActiveUserNavigation(selected) {
		this.setState({
			selected,
		});
	}

	renderUserNavigation() {
		const userNavigation = [{ title: 'BROWSE', id: 'browse' }, { title: 'MY LIST', id: 'my-list' }];
		const { selected } = this.state;

		return userNavigation.map((element, index) => {
			if (selected === element.id) {
				return (
					<TouchableWithoutFeedback
						onPress={() => this.setActiveUserNavigation(element.id)}
						key={index}
					>
						<ActiveUserNavigationLink>
							<UserNavigationLinkText>{element.title}</UserNavigationLinkText>
						</ActiveUserNavigationLink>
					</TouchableWithoutFeedback>
				);
			} else {
				return (
					<TouchableWithoutFeedback
						onPress={() => this.setActiveUserNavigation(element.id)}
						key={index}
					>
						<UserNavigationLink>
							<UserNavigationLinkText>{element.title}</UserNavigationLinkText>
						</UserNavigationLink>
					</TouchableWithoutFeedback>
				);
			}
		});
	}

	renderSubHeading(titleText, text) {
		if(text) {
			return (
				<SubHeader>
					<SubHeaderTextContainer>
						<SubHeaderTitleText>
							{titleText}
						</SubHeaderTitleText>
						<SubHeaderText>
							{text}
						</SubHeaderText>
					</SubHeaderTextContainer>
					<AllContainer>
						<AllText>{'All'}</AllText>
						<IconContainer>
							<Icon name={'angle-right'} size={20} color={COLORS.GREY.BRIGHT_GREY} />
						</IconContainer>
					</AllContainer>
				</SubHeader>
			);
		} else {
			return (
				<SubHeader>
					<SubHeaderTitleText>
						{titleText}
					</SubHeaderTitleText>
					<AllContainer>
						<AllText>{'All'}</AllText>
						<IconContainer>
							<Icon name={'angle-right'} size={20} color={COLORS.GREY.BRIGHT_GREY} />
						</IconContainer>
					</AllContainer>
				</SubHeader>
			);
		}
	}

	renderHorizontalCarousel(data) {
		return (
			<ImageContainer>
				{data.map((show, index) => (
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate('ShowDetails', show)}
						key={index}
					>
						<Image source={show.image} key={index} />
					</TouchableOpacity>
				))}
			</ImageContainer>
		);
	}

	render() {
		return (
		<Container>
			<ScrollView>
			

				<Header openDrawer={() => this.props.navigation.navigate('DrawerOpen')} />
				<UserNavigationContainer>
					{this.renderUserNavigation()}
				</UserNavigationContainer>
				{this.renderSubHeading('Colleges', 'top colleges in the US')}
				<ScrollView horizontal={true}>
					{this.renderHorizontalCarousel(SHOWS)}
				</ScrollView>
				{this.renderSubHeading('requirments', null)}
				<ScrollView horizontal={true}>
					{this.renderHorizontalCarousel(requirments)}
				</ScrollView>
				{this.renderSubHeading('schalorships', null)}
				<ScrollView horizontal={true}>
					{this.renderHorizontalCarousel(scholarships)}
				</ScrollView>
		
			</ScrollView>
		</Container>
		);
	}
}

export default HomeScreen;
