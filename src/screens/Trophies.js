import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';
import TrophiesList from '../components/TrophiesList';

class Trophies extends Component {
  state = {  }
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <TrophiesList navigation={this.props.navigation} />
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