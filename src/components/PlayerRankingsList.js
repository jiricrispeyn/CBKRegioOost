import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Body, Left, Right, List, ListItem, Text, Badge, Spinner } from 'native-base';
import _ from 'lodash';
import * as api from '../utils/api';

class PlayerRankingsList extends Component {
  state = {  }
  render() {
    if (!this.state.players) {
      return (
        <Spinner />
      );
    }
    
    return (
      <List dataArray={this.state.players}
        renderRow={item => 
          <ListItem button onPress={() => {this.goToDetail(item.id)}} style={styles.listItem}>
            <Left style={styles.left}>
              {this.getPositionStyle(item.position)}
            </Left>
            <Body>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text note style={styles.itemTextNote}>{item.club}</Text>
              <Body style={styles.body}>
                <Text style={styles.itemTextNote}>{item.games} matchen</Text>
                <Text style={styles.itemTextNote}>{item.sets} sets</Text>
                <Text style={styles.itemTextNote}>{item.percentage}</Text>
              </Body>
            </Body>
            <Right>
              <Text style={styles.itemTextPoints}>{item.points}</Text>
            </Right>
          </ListItem>
        }>
      </List>
    );
  }
  componentWillMount() {
    this.fetchData(this.props.league);
  }
  fetchData(league) {
    api.getPlayerRankings(league).then(
      res => this.setState({
        players: res.players
      }),
      err => console.log(err)
    );
  }
  goToDetail(id) {
    this.props.navigation.navigate('PlayersDetail', {id: id});    
  }
  getPositionStyle(position) {
    let positionItem;

    if (_.inRange(position, 1, 4)) {
      let backgroundColor;

      switch (position) {
        case 1: backgroundColor = '#FFDF00';
          break;
        case 2: backgroundColor = '#C0C0C0';
          break;
        case 3: backgroundColor = '#CD7F32';
          break;
        default:
          return;
      }

      positionItem = (
        <Badge style={{ backgroundColor: backgroundColor, alignSelf: 'center' }}>
          <Text style={{ fontSize: 14 }}>{position}</Text>
        </Badge>
      );
    } else {
      positionItem = <Text style={[styles.itemText, { marginLeft: 0 }]}>{position}</Text>;
    }

    return (
      <View style={{ flex: 1, alignItems: 'center' }}>{positionItem}</View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 5,
    paddingRight: 15,
    marginLeft: 0,
    borderColor: '#e0e2db'
  },
  left: {
    flex: 0,
    width: 40,
    flexDirection: 'row'
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 10
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
  itemTextPoints: {
    fontSize: 25
  }
});

export default PlayerRankingsList;