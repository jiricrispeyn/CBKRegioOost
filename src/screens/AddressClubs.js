import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Body, Title, Content, List, ListItem, Text, Spinner } from 'native-base';
import * as api from '../utils/api';

class LeagueAddresses extends Component {
  state = {  }
  render() {
    if (!this.state.addresses) {
      return (
        <Container style={styles.container}>
          <Spinner />
        </Container>
      );
    }

    return (
      <Container style={styles.container}>
        <Content>
          <List dataArray={this.state.addresses}
            renderRow={item => 
              <ListItem style={styles.listItem}>
                <Body>
                  <Text style={styles.itemText}>{item.name}</Text>
                  <Text note style={styles.itemTextNote}>{item.place}</Text>
                  <Text note style={styles.itemTextNote}>{item.address}</Text>
                  <Text note style={[styles.itemTextNote, { color: '#1C56FF' }]}>{item.phone}</Text>
                </Body>
              </ListItem>
            }>
          </List>
        </Content>
      </Container>
    );
  }
  componentWillMount() {
    this.fetchData();
  }
  fetchData() {
    api.getAddresses(this.props.navigation.state.params.league).then(
      res => this.setState({
        addresses: res.addresses
      }),
      err => console.log(err)
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  listItem: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 0,
    borderColor: '#aaa',
  },
  itemText: {
    color: '#333',
    fontSize: 17
  },
  itemTextNote: {
    color: '#878787',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 2
  }
});

export default LeagueAddresses;