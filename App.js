import React from 'react';
import { StatusBar } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import HomeStackNavigator from 'components/navigation/home-stack-navigator';
import { COLORS } from 'constants/styles';
import styled from 'styled-components/native';
import { AppLoading, Font } from 'expo';

const DrawerContainer = styled.View`
  flex: 1;
  background-color: ${COLORS.GREY.BRIGHT_GREY};
`;

const AppContainer = styled.View`
  flex: 1;
  background-color: ${COLORS.GREY.FIRE_ENGINE_PER};
`;

const drawerRouteConfig = {
  Home: {
    screen: HomeStackNavigator,
  },
};

const CustomDrawerContentComponent = props => (
  <DrawerContainer>
    <DrawerItems {...props} />
  </DrawerContainer>
);

const drawerNavigatorConfig = {
  contentComponent: props => <CustomDrawerContentComponent {...props} />,
};

const AppDrawer = createDrawerNavigator(drawerRouteConfig, drawerNavigatorConfig);

export default class App extends React.Component {
  state = {
    appIsReady: false,
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Chela_One': require('./assets/fonts/Chela_One/ChelaOne-Regular.ttf'),
    }); 
    this.setState({ appIsReady: true});
  }
  render() {
    if (this.state.appIsReady) {
      return (
        <AppContainer>
          <StatusBar hidden={true} />
          <AppDrawer/>
        </AppContainer>
      );
    } else {
      return <AppLoading />;
    }
  }
}