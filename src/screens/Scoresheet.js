import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, Spinner } from 'native-base';
import * as api from '../utils/api';

class Scoresheet extends Component {
  state = {
    scoresheet: null
  }
  render() {
    if (!this.state.scoresheet) {
      return (
        <Spinner color="#3D348B" />
      );
    }

    return (
      <Container style={styles.container}>
        <Content>
          <Text>Scoresheet</Text>
        </Content>
      </Container>
    );
  }
  componentWillMount() {
    const params = this.props.navigation.state.params;

    this.fetchData(params.type, params.subtype, params.scoresheet);
  }
  fetchData(type, subtype, scoresheet) {
    api.getScoresheet(type, subtype, scoresheet).then(
      res => {
        this.setState({
          scoresheet: res
        });

        console.log(res); 
      },
      err => console.log(err)
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
});

export default Scoresheet;