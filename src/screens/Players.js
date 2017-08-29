import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Tabs, Tab, Content } from 'native-base';
import PlayersList from '../components/PlayersList';
import PlayerRankingsList from '../components/PlayerRankingsList';

class Players extends Component {
  state = {  }
  render() {
    return (
      <Container style={styles.container}>
        <Tabs tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>
          <Tab heading="SPELERS" tabStyle={styles.tabStyle} activeTabStyle={styles.activeTabStyle} textStyle={styles.textStyle} activeTextStyle={styles.activeTextStyle}>
            <Content>
              <PlayersList navigation={this.props.navigation} league={this.props.navigation.state.params.league} />
            </Content>
          </Tab>
          <Tab heading="SPELERS RANKING" tabStyle={styles.tabStyle} activeTabStyle={styles.activeTabStyle} textStyle={styles.textStyle} activeTextStyle={styles.activeTextStyle}>
            <Content>
            <PlayerRankingsList navigation={this.props.navigation} league={this.props.navigation.state.params.league} />
            </Content>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  tabBarUnderlineStyle: {
    backgroundColor: '#3D348B'
  },
  tabStyle: {
    backgroundColor: '#fff'
  },
  activeTabStyle: {
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#191716'
  },
  activeTextStyle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#191716'
  }
});

export default Players;