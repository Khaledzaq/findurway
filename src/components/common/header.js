import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from 'constants/styles';
import { TouchableWithoutFeedback, Text } from 'react-native';
//const NETFLIX_LOGO = require('../../../assets/icons/right-college.jpg');

const Container = styled.View`
	display: flex;
	flex-direction: row;
	height: 60;
	align-items: center;
	background-color: ${COLORS.GREY.FIRE_ENGINE_PER};
	justify-content: center;

`;

const IconContainer = styled.View`
	padding-left: 10;
	padding-right: 10;
	padding-top:50;
`;

const LogoContainer = styled.Image`	
	padding-top: 20;
	width: 175;
	height: 100;
	padding-top:50;
`;

const Textword = styled.Text`	
	align-items: center;
	fontSize: 40px;
	fontFamily: 'Chela_One';
	color: ${COLORS.WHITE.WHITE};
`;

class Header extends Component {
	static propTypes = {
		openDrawer: PropTypes.func.isRequired,
	};

	render() {
		const { openDrawer } = this.props;
		return (
			<Container>
				<Textword> Find your way </Textword>

			</Container>
		);
	}
}

export default Header;
