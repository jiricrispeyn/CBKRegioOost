import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { List, ListItem, Text, Spinner } from 'native-base';
import * as api from '../utils/api';

class LeaguesList extends Component {
  state = {
    leagues: null
  }
  render() {
    if (!this.state.leagues) {
      return (
        <Spinner color="#3D348B" />
      );
    }

    return (
      <List dataArray={this.state.leagues}
        renderRow={item => 
          <ListItem button onPress={() => {this.goToDetail(item.id)}} style={styles.listItem}>
            <Text style={styles.itemText}>{item.id}</Text>
          </ListItem>
        }>
      </List>
    );
  }
  componentWillMount() {
    this.fetchData();
  }
  fetchData() {
    api.getLeagues().then(
      res => this.setState({
        leagues: res
      }),
      err => console.log(err)
    );
  }
  goToDetail(league) {
    this.props.navigation.navigate(this.props.routeName, {league: league});
  }
}

const styles = StyleSheet.create({
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
    fontSize: 12
  }
});

export default LeaguesList;