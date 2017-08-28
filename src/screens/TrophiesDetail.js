import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text } from 'native-base';
import TrophiesDetailList from '../components/TrophiesDetailList';

class TrophiesDetail extends Component {
  state = {  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <TrophiesDetailList id={this.props.navigation.state.params.id} />
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