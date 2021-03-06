import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { List, ListItem, Body, Left, Right, Text, Icon } from 'native-base';

class PlayerHistory extends Component {
  state = {
    history: []
  }
  render() {
    const listItems = this.state.history.map((item, i) => {
      return (
        <ListItem key={i} style={styles.listItem}>
          <Left style={styles.left}>
            <Text style={styles.itemText}>{item.season}</Text>
          </Left>
          <Body>
            <Text style={styles.itemText}>{item.club} {this.getChampionStars(item.autumn_champion, item.champion)}</Text>
            {this.getLeague(item.league, item.position)}
          </Body>
          <Right>
            <Text style={styles.itemText}>{item.ranking}</Text>
            {this.getElo(item.elo)}
          </Right>
        </ListItem>
      )
    });
    return (
      <List>
        <ListItem itemDivider style={styles.listItemDivider}>
          <Text style={styles.listItemDividerText}>Archief</Text>
        </ListItem>
        {listItems}
      </List>
    );
  }
  componentWillMount() {
    const history = this.humanizeHistory(this.props.history);

    this.setState({
      history: history
    });
  }
  humanizeHistory(history) {
    return history.map(item => {
      return Object.assign({}, item, {
        elo: this.formatElo(item.elo)
      })
    });
  }
  formatElo(elo) {
    return elo.substring(elo.indexOf('[') + 1, elo.indexOf(']')).replace(' ptn', '');
  }
  getChampionStars(autumnChampion, champion) {
    let stars = [];

    if (autumnChampion === 'JA') {
      stars = stars.concat(<Icon name="star-half" key={1} style={styles.star} />);
    }

    if (champion === 'JA') {
      stars = stars.concat(<Icon name="ios-star" key={2} style={styles.star} />);
    }

    if (stars.length > 0) {
      return stars;
    }

    return;
  }
  getLeague(league, position) {
    if (position === 0) {
      return <Text note style={styles.itemTextNote}>Afdeling {league}</Text>;
    }

    return <Text note style={styles.itemTextNote}>{position}e plaats in afdeling {league}</Text>;
  }
  getElo(elo) {
    if (elo > 0) {
      return <Text note style={styles.itemTextNote}>ELO {elo}</Text>;
    }

    return;
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
  left: {
    flex: 0,
    width: 50
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
  star: {
    color: '#e6af2e',
    fontSize: 20
  }
});

export default PlayerHistory;