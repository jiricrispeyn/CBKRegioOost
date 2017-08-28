import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import Home from '../screens/Home';
import AddressLeagues from '../screens/AddressLeagues';
import AddressClubs from '../screens/AddressClubs';
import PlayersLeagues from '../screens/PlayersLeagues';
import Players from '../screens/Players';
import PlayersDetail from '../screens/PlayersDetail';
import Leagues from '../screens/Leagues';
import LeaguesDetail from '../screens/LeaguesDetail';
import Trophies from '../screens/Trophies';
import TrophiesDetail from '../screens/TrophiesDetail';

const stackNavigatorConfig = {
  headerBackTitle: null,
  headerStyle: {
    backgroundColor: '#3d348b',
    height: 65,
    borderBottomWidth: 0
  },
  headerTitleStyle: {
    fontSize: 17,
    fontWeight: '400',
    color: '#fff'
  },
  headerBackTitleStyle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#fff'
  },
  headerTintColor: '#fff'
};

const HomeTab = StackNavigator({
  Home: {
    screen: Home,
    path: '/',
    navigationOptions: {
      title: 'Home'
    }
  },
  PlayersDetail: {
    screen: PlayersDetail,
    path: '/:id',
    navigationOptions: {
      title: 'Speler'
    }
  }
}, {
  navigationOptions: stackNavigatorConfig
});

const AddressesTab = StackNavigator({
  AddressLeagues: {
    screen: AddressLeagues,
    path: '/',
    navigationOptions: {
      title: 'Reeksen'
    }
  },
  AddressClubs: {
    screen: AddressClubs,
    path: '/:league',
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.league
    })
  }
}, {
  navigationOptions: stackNavigatorConfig
});

const PlayersTab = StackNavigator({
  PlayersLeagues: {
    screen: PlayersLeagues,
    path: '/',
    navigationOptions: {
      title: 'Reeksen'
    }
  },
  Players: {
    screen: Players,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.league
    })
  },
  PlayersDetail: {
    screen: PlayersDetail,
    path: '/:id',
    navigationOptions: {
      title: 'Speler'
    }
  }
}, {
  navigationOptions: stackNavigatorConfig
});

const LeaguesTab = StackNavigator({
  Leagues: {
    screen: Leagues,
    path: '/',
    navigationOptions: {
      title: 'Competitie'
    }
  },
  LeaguesDetail: {
    screen: LeaguesDetail,
    path: '/:league',
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.league
    })
  }
}, {
  navigationOptions: stackNavigatorConfig
});

const TrophiesTab = StackNavigator({
  Trophies: {
    screen: Trophies,
    path: '/',
    navigationOptions: {
      title: 'Beker'
    }
  },
  TrophiesDetail: {
    screen: TrophiesDetail,
    path: '/:id',
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.text
    })
  }
}, {
  navigationOptions: stackNavigatorConfig
});

const StacksInTabs = TabNavigator({
  HomeTab: {
    screen: HomeTab,
    path: '/',
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name="home" style={{ color: tintColor, fontSize: 30 }} />
      )
    }
  },
  AddressesTab: {
    screen: AddressesTab,
    path: '/addresses',
    navigationOptions: {
      tabBarLabel: 'ADRESSEN',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name="pin" style={{ color: tintColor, fontSize: 30 }} />
      )
    }
  },
  PlayersTab: {
    screen: PlayersTab,
    path: '/players',
    navigationOptions: {
      tabBarLabel: 'SPELERS',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name="person" style={{ color: tintColor, fontSize: 30 }} />
      )
    }
  },
  LeaguesTab: {
    screen: LeaguesTab,
    path: '/leagues',
    navigationOptions: {
      tabBarLabel: 'COMPETITIE',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name="podium" style={{ color: tintColor, fontSize: 30 }} />
      )
    }
  },
  ThrophiesTab: {
    screen: TrophiesTab,
    path: '/throphies',
    navigationOptions: {
      tabBarLabel: 'BEKER',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name="trophy" style={{ color: tintColor, fontSize: 30 }} />
      )
    }
  }
}, {
  lazy: true,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#8a85b9',
    labelStyle: {
      fontSize: 9
    },
    style: {
      backgroundColor: '#3d348b',
      height: 60,
      borderTopWidth: 0
    }
  }
});

export default StacksInTabs;