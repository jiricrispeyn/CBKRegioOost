import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { List, ListItem, Text, Spinner } from 'native-base';
import _ from 'lodash';
import * as api from '../utils/api';

class TrophiesList extends Component {
  state = {
    trophies: null
  }
  render() {
    if (!this.state.trophies) {
      return (
        <Spinner />
      );
    }

    return (
      <List dataArray={this.state.trophies}
        renderRow={item => 
          <ListItem button onPress={() => {this.goToDetail(item.id, item.text)}} style={styles.listItem}>
            <Text style={styles.itemText}>{item.upperCaseText}</Text>
          </ListItem>
        }>
      </List>
    );
  }
  componentWillMount() {
    this.fetchData();
  }
  fetchData() {
    api.getTrophies().then(
      res => res.map(item => Object.assign({}, item, {
        upperCaseText: _.upperCase(item.text)
      })),
      err => console.log(err)
    ).then(
      res => this.setState({
        trophies: res
      }),
      err => console.log(err)
    );
  }
  goToDetail(id, text) {
    this.props.navigation.navigate('TrophiesDetail', {id: id, text: text});    
  }
}

const styles = StyleSheet.create({
  listItem: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 0,
    borderColor: '#AAAAAA',
  },
  itemText: {
    color: '#333333',
    fontSize: 12
  }
});

export default TrophiesList;