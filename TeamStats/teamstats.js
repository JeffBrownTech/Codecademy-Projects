const team = {
    _players: [
      {firstName: "Steven", lastName: "Adams", age: 25},
      {firstName: "Russell", lastName: "Westbrook", age: 30},
      {firstName: "Paul", lastName: "George", age: 28}
    ],
    
    _games: [
      {opponent: "Mavericks", teamPoints: 98, opponentPoints: 115},
      {opponent: "Cavaliers", teamPoints: 95, opponentPoints: 86},
      {opponent: "Rockets", teamPoints: 98, opponentPoints: 80}
    ],
    
    get players() {
      return this._players;
    },
  
      get games() {
      return this._games;
    },
    
    addPlayer(firstName, lastName, age) {
      const player = {
        firstName,
        lastName,
        age
      };
      this.players.push(player);
    },
    
    addGame(opponent, teamPoints, opponentPoints) {
      const game = {
        opponent,
        teamPoints,
        opponentPoints
      };
      this.games.push(game);
    }
  };
  
  console.log(team.players);
  console.log(team.games);
  
  team.addPlayer('Andre', 'Roberson', 26);
  team.addPlayer('Terrance', 'Ferguson', 20);
  team.addPlayer('Alex', 'Abrines', 26);
  
  console.log(team.players);
  
  team.addGame('Pelicans', 122, 116);
  team.addGame('Wizards', 134, 111);
  team.addGame('Suns', 117, 110);
  
  console.log(team.games); 