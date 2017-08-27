import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Body, Right, List, ListItem, Text, Spinner } from 'native-base';
import _ from 'lodash';
import * as api from '../utils/api';

class PlayersList extends Component {
  state = {
    clubs: null
  }
  render() {
    if (!this.state.clubs) {
      return (
        <Spinner />
      );
    }

    const playersList = this.state.clubs.map(club => {
      const itemHeader = <ListItem itemHeader style={styles.listItemHeader}>
          <Text style={styles.listItemHeaderText}>{club.name}</Text>
        </ListItem>;

      const players = club.players.map(player => {
        return (
          <ListItem button onPress={() => {this.goToDetail(player.id)}} style={styles.listItem}>
            <Body>
              <Text style={styles.itemText}>{player.first_name} {player.last_name}</Text>
              <Text note style={styles.itemTextNote}>{player.birthdate}</Text>
            </Body>
            <Right>
              <Text style={styles.itemText}>{player.id}</Text>
              <Text note style={styles.itemTextNote}>{player.ranking}</Text>
            </Right>
          </ListItem>
        );
      });

      return [itemHeader, players];
    });
    
    return (
      <List>{playersList}</List>
    );
  }
  componentWillMount() {
    this.fetchData(this.props.league);
  }
  fetchData(league) {
    api.getPlayers(league).then(
      res => this.groupPlayersByClub(res.players),
      err => console.error(err)
    ).then(
      res => this.setState({
        clubs: res
      }),
      err => console.log(err)
    );
  }
  groupPlayersByClub(players) {
    return _.chain(players)
      .groupBy('club')
      .toPairs()
      .map(club => _.zipObject(['name', 'players'], club))
      .value();
  }
  goToDetail(id) {
    this.props.navigation.navigate('PlayersDetail', {id: id});    
  }
}

const styles = StyleSheet.create({
  listItem: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 5,
    paddingRight: 15,
    marginLeft: 0,
    borderColor: '#aaa'
  },
  itemText: {
    color: '#1C1C1C',
    fontSize: 14
  },
  itemTextNote: {
    color: '#878787',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 2
  },
  listItemHeader: {
    backgroundColor: '#1452E3',
    paddingTop: 17,
    paddingBottom: 19,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0,
  },
  listItemHeaderText: {
    fontSize: 12,
    color: '#fff'
  }
});

export default PlayersList;