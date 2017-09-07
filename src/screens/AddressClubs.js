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
          <Spinner color="#3D348B" />
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
                  <Text style={styles.itemText}>{item.club}</Text>
                  {this.renderPlace(item.place)}
                  {this.renderAddress(item.address)}
                  {this.renderPhone(item.phone)}
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
      res => this.filterAddresses(res.addresses),
      err => console.log(err)
    ).then(
      res => this.setState({
        addresses: res
      }),
      err => console.log(err)
    );
  }
  filterAddresses(addresses) {
    return addresses.filter(address => !address.club || address.club !== 'BYE - VRIJ');
  }
  renderPlace(place) {
    if (place) {
      return <Text note style={styles.itemTextNote}>{place}</Text>;
    }

    return;
  }
  renderAddress(address) {
    if (address) {
      return <Text note style={styles.itemTextNote}>{address}</Text>;
    }

    return;
  }
  renderPhone(phone) {
    if (phone) {
      return <Text note style={[styles.itemTextNote, { color: '#e6af2e' }]}>{phone}</Text>;
    }

    return;
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
    borderColor: '#e0e2db',
  },
  itemText: {
    color: '#191716',
    fontSize: 17
  },
  itemTextNote: {
    color: '#beb7a4',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 2
  }
});

export default LeagueAddresses;