import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Grid, Col, List, ListItem, Body, Right, Text, Spinner } from 'native-base';
import * as api from '../utils/api';

class TrophiesDetailList extends Component {
  state = {  }
  render() {
    if (!this.state.trophies) {
      return (
        <Spinner />
      );
    }

    const trophiesList = this.state.trophies.map(trophy => {
      const itemHeader = <ListItem itemHeader style={styles.listItemHeader}>
          <Text style={styles.listItemHeaderText}>{trophy.date}</Text>
        </ListItem>;

      const games = trophy.games.map(game => {
        return (
          <ListItem style={styles.listItem}>
            <Grid>
              <Col>
                <Text numberOfLines={1} style={styles.itemText}>{game.home.club}</Text>
                <Text numberOfLines={1} note style={styles.itemTextNote}>{game.home.city}</Text>
                <Text note style={styles.itemTextNote}>Afdeling {game.home.division}</Text>
              </Col>
              <Col style={styles.scoreCol}>
                <View style={styles.resultWrapper}>
                  <Text style={styles.gameResultText}>{game.result}</Text>
                </View>
                <Text>{game.test_game_result}</Text>
              </Col>
              <Col>
                <Text numberOfLines={1} style={styles.itemText}>{game.away.club}</Text>
                <Text numberOfLines={1} note style={styles.itemTextNote}>{game.away.city}</Text>
                <Text note style={styles.itemTextNote}>Afdeling {game.away.division}</Text>
              </Col>
            </Grid>
          </ListItem>
        );
      });

      return [itemHeader, games];
    });
    
    return (
      <List>{trophiesList}</List>
    );
  }
  componentWillMount() {
    this.fetchData();
  }
  fetchData() {
    api.getTrophiesDetail(this.props.id).then(
      res => this.setState({
        trophies: res
      }),
      err => console.log(err)
    );
  }
}

const styles = StyleSheet.create({
  scoreCol: {
    flex: 0,
    width: 60
  },
  listItem: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 0,
    borderColor: '#e0e2db'
  },
  itemText: {
    color: '#191716',
    fontSize: 14
  },
  itemTextNote: {
    color: '#beb7a4',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 2
  },
  listItemHeader: {
    backgroundColor: '#e6af2e',
    paddingTop: 17,
    paddingBottom: 19,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0,
  },
  listItemHeaderText: {
    fontSize: 12,
    color: '#fff'
  },
  resultWrapper: {
    // backgroundColor: '#e6af2e'
  },
  gameResultText: {
    color: '#191716',
    fontSize: 17
  },
  testGameResultText: {
    fontSize: 11
  }
});

export default TrophiesDetailList;