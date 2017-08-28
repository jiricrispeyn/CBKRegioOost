const apiUrl = 'https://cbkregio-oost.herokuapp.com';

const api = {
  getLeagues: getLeagues,
  getAddresses: getAddresses,
  getPlayers: getPlayers,
  getPlayerRankings: getPlayerRankings,
  getPlayerDetail: getPlayerDetail,
  getTrophies: getTrophies,
  getTrophiesDetail: getTrophiesDetail
};

function getLeagues() {
  const url = `${apiUrl}/leagues`;
  
  return fetch(url, { method: 'GET'}).then(res => {
    if (!res.ok) {
      throw new Error();
    }

    return res.json();
  });
}

function getAddresses(league) {
  const url = `${apiUrl}/addresses/${league}`;

  return fetch(url, { method: 'GET'}).then(res => {
    if (!res.ok) {
      throw new Error();
    }

    return res.json();
  });
}

function getPlayers(league) {
  const url = `${apiUrl}/players/${league}`;
  
  return fetch(url, { method: 'GET'}).then(res => {
    if (!res.ok) {
      throw new Error();
    }

    return res.json();
  });
}

function getPlayerRankings(league) {
    const url = `${apiUrl}/playerrankings/${league}`;
    
    return fetch(url, { method: 'GET'}).then(res => {
      if (!res.ok) {
        console.log(res);
        throw new Error(res);
      }
  
      return res.json();
    });
}

function getPlayerDetail(id) {
    const url = `${apiUrl}/player/${id}`;
    
    return fetch(url, { method: 'GET'}).then(res => {
      if (!res.ok) {
        throw new Error();
      }
  
      return res.json();
    });
}

function getTrophies() {
  const url = `${apiUrl}/trophies`;
  
  return fetch(url, { method: 'GET'}).then(res => {
    if (!res.ok) {
      throw new Error();
    }

    return res.json();
  });
}

function getTrophiesDetail(id) {
  const url = `${apiUrl}/trophies/${id}`;
  
  return fetch(url, { method: 'GET'}).then(res => {
    if (!res.ok) {
      throw new Error();
    }

    return res.json();
  });
}

module.exports = api;