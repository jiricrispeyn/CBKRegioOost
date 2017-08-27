import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Button, Text } from 'native-base';

class Home extends Component {
  state = {  }
  render() {
    return (
      <Container>
        <Content padder>
          <Button onPress={() => this.props.navigation.navigate('PlayersDetail', { id: 'D0005' })}>
            <Text>Click Me! </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

});

export default Home;