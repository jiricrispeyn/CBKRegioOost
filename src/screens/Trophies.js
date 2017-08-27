import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text } from 'native-base';
import TrophiesList from '../components/TrophiesList';

class Trophies extends Component {
  state = {  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <TrophiesList />
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

export default Trophies;