import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text } from 'native-base';

class LeaguesDetail extends Component {
  state = {  }
  render() {
    return (
      <Container style={styles.container}>
        <Content padder>
          <Text>LeaguesDetail</Text>
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

export default LeaguesDetail;