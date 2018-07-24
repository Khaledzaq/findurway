import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { COLORS } from 'constants/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Hyperlink from 'react-native-hyperlink';
import {Text, Linking} from 'react-native';



const Container = styled.View`
  background-color: ${COLORS.GREY.FIRE_ENGINE_PER};
  height: 100%;
`;

const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10;
  padding-left: 10;
  padding-bottom: 10;
`;

const TitleText = styled.Text`
  color: ${COLORS.WHITE.WHITE};
`;


const SummaryContainer = styled.View`
  background-color: ${COLORS.WHITE.WHITE};
  padding-top: 10;
  padding-right: 10;
  padding-left: 10;
  padding-bottom: 10;
`;

const SummaryText = styled.Text`
  color: ${COLORS.GREY.BRIGHT_GREY};
  fontSize: 20;
`;

const LinkText = styled.Text`
  color: ${COLORS.WHITE.WHITE};
  fontSize: 20;
`;

const SummaryHeader = styled(SummaryText)`
  margin-bottom: 15;
  fontSize: 20;
`;

const Linkheader = styled(LinkText)`
 margin-bottom: 15;
  fontSize: 20;
`;

const SummaryCreditsText = styled.Text`
  color: ${COLORS.GREY.BRIGHT_GREY};
  margin-top: 5;
  fontSize: 15;
`;

const HeaderContainer = styled.View`
`;

const LinkContainer =styled.View`
`;

const ImageHeader = styled.Image`
  width: 100%;
  height: 150;
  margin-top: 10;
`;

const BackIconContainer = styled.View`
  margin-top: 10;
  margin-left: 10;
`;

const PlayIconContainer = styled.View`
  margin-left: 10;
`;

const MyListButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90;
  height: 30;
  background-color: ${COLORS.GREY.BRIGHT_GREY};
  margin-right: 10;
`;

const MyListButtonText = styled.Text`
  color: ${COLORS.WHITE.WHITE};
  margin-left: 5;
`;

class ShowDetailsScreen extends Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <Container>
        <HeaderContainer>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <BackIconContainer>
              <Icon name={'arrow-left'} size={30} color={COLORS.WHITE.WHITE} />
            </BackIconContainer>
          </TouchableOpacity>
          <ImageHeader source={params.image} resizeMode={'contain'} />
        </HeaderContainer>
        <TitleContainer>
          <TitleText>{params.title}</TitleText>
          <TouchableOpacity onPress={() => {}}>
          </TouchableOpacity>
        </TitleContainer>
        <SummaryContainer>
          <SummaryHeader>{}</SummaryHeader>
          <SummaryText>{params.summary}</SummaryText>
        </SummaryContainer>
        <LinkContainer>
       

    <Text style={ { fontSize: 15 } }  onPress={ (url, text) =>{ Linking.openURL(params.link); }}>
     {params.link}
    </Text>


 
  
          {/*<Linkheader> {'Link: '}</Linkheader>
          <LinkText>{params.link.link(params.link)}</LinkText>*/}
        </LinkContainer>

      </Container>
    );
  }
}

export default ShowDetailsScreen;