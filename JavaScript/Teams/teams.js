const team = {
  _players: [
    ["Kemal", "Karabulut", 90],
    ["Levent", "Beyazbulu", 100],
    ["Johhny", "Last", 31],
  ],
  _games: [
    ["LA", 99, 100],
    ["NBA", 81, 90],
    ["TRA", 45, 106],
  ],
  get player(){
    return this._players;
  },
  get games(){
    return this._games
  },
  addPlayer(newFirstName, newLastName, newAge){
    this._players.push([newFirstName, newLastName, newAge])
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    this._games.push([newOpponent, newTeamPoints, newOpponentPoints]);
  }
};

team.addPlayer("Buggs", "Bunny", 76);
team.addGame("Titans", 100, 98);
console.log(team._players)
console.log(team._games)
