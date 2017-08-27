import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';
import LeaguesList from '../components/LeaguesList';

class Leagues extends Component {
  state = {  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <LeaguesList navigation={this.props.navigation} routeName="LeaguesDetail" />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});

export default Leagues;