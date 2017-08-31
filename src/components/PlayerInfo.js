import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { List, ListItem, Body, Right, Text } from 'native-base';

class PlayerInfo extends Component {
  state = {
    info: {}
  }
  render() {
    return (
      <List>
        <ListItem itemDivider style={styles.listItemDivider}>
          <Text style={styles.listItemDividerText}>Info</Text>
        </ListItem>
        <ListItem style={styles.listItem}>
          <Body>
            <Text style={styles.itemTextBody}>NAAM</Text>
          </Body>
          <Right style={styles.right}>
            <Text style={styles.itemTextRight}>{this.state.info.first_name} {this.state.info.last_name}</Text>
          </Right>
        </ListItem>
        <ListItem  style={styles.listItem}>
          <Body>
            <Text style={styles.itemTextBody}>GEBOORTEDATUM</Text>
          </Body>
          <Right style={styles.right}>
            <Text style={styles.itemTextRight}>{this.state.info.birthdate}</Text>
          </Right>
        </ListItem>
        <ListItem  style={styles.listItem}>
          <Body>
            <Text style={styles.itemTextBody}>LIDNR.</Text>
          </Body>
          <Right style={styles.right}>
            <Text style={styles.itemTextRight}>{this.state.info.id}</Text>
          </Right>
        </ListItem>
        <ListItem  style={styles.listItem}>
          <Body>
            <Text style={styles.itemTextBody}>RANKING</Text>
          </Body>
          <Right style={styles.right}>
            <Text style={styles.itemTextRight}>{this.state.info.ranking}</Text>
          </Right>
        </ListItem>
        <ListItem  style={styles.listItem}>
          <Body>
            <Text style={styles.itemTextBody}>AFDELING</Text>
          </Body>
          <Right style={styles.right}>
            <Text style={styles.itemTextRight}>{this.state.info.league}</Text>
          </Right>
        </ListItem>
        <ListItem  style={styles.listItem}>
          <Body>
            <Text style={styles.itemTextBody}>CLUB</Text>
          </Body>
          <Right style={styles.right}>
            <Text style={styles.itemTextRight}>{this.state.info.club}</Text>
          </Right>
        </ListItem>
      </List>
    );
  }
  componentWillMount() {
    this.setState({
      info: this.props.info
    });
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
  listItemDivider: {
    backgroundColor: '#F3F3F3',
    borderBottomWidth: 0.5,
    borderColor: '#D6D6D6'
  },
  listItemDividerText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#7C7C7C'
  },
  right: {
    flex: 0
  },
  itemTextBody: {
    fontSize: 12,
    fontWeight: '400',
    color: '#191716'
  },
  itemTextRight: {
    fontSize: 17,
    fontWeight: '400',
    color: '#beb7a4'
  }
});

export default PlayerInfo;