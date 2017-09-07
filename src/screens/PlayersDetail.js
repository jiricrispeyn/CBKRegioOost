import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Spinner } from 'native-base';
import PlayerInfo from '../components/PlayerInfo';
import PlayerHistory from '../components/PlayerHistory';
import * as api from '../utils/api';

class PlayersDetail extends Component {
  state = {
    isLoaded: false,
    info: null,
    history: null
  }
  render() {
    if (!this.state.isLoaded) {
      return (
        <Spinner color="#3D348B" />
      );
    }

    return (
      <Container style={styles.container}>
        <Content>
          <PlayerInfo info={this.state.info} />
          <PlayerHistory history={this.state.history} />
        </Content>
      </Container>
    );
  }
  componentWillMount() {
    this.fetchData(this.props.navigation.state.params.id);
  }
  fetchData(id) {
    api.getPlayerDetail(id).then(
      res => {
        this.setState({
          isLoaded: true,
          info: res.info,
          history: res.history
        }); 
      },
      err => console.log(err)
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
});

export default PlayersDetail;