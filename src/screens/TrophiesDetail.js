import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text } from 'native-base';

class TrophiesDetail extends Component {
  state = {  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Text>TrophiesDetail</Text>
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

export default TrophiesDetail;