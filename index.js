function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

function numPointsScored(playerName) {
    const game = gameObject();
    const allPlayers = Object.assign({}, game.home.players, game.away.players);
    return allPlayers[playerName].points;
}

function shoeSize(playerName) {
    const game = gameObject();
    const allPlayers = Object.assign({}, game.home.players, game.away.players);
    return allPlayers[playerName].shoe;
}

function teamColors(teamName) {
    const game = gameObject();
    const teams = {
        [game.home.teamName]: game.home.colors,
        [game.away.teamName]: game.away.colors,
    };
    return teams[teamName];
}

function teamNames() {
    const game = gameObject();
    const teams = [game.home.teamName, game.away.teamName];
    return teams;
}

function playerNumbers(teamName) {
  const game = gameObject();
    let team;
    if (teamName === game.home.teamName) {
        team = game.home;
    } else {
        team = game.away;
    }
    return Object.values(team.players).map((player) => player.number);
}


function playerStats(playerName) {
    const game = gameObject();
    const players = Object.assign({}, game.home.players, game.away.players);
    return Object.assign({}, players[playerName]);
}

function bigShoeRebounds() {
    const game = gameObject();
    const players = Object.values(Object.assign({}, game.home.players, game.away.players));
    const largestShoePlayer = players.reduce((largest, player) => {
        if (player.shoe > largest.shoe) {
            return player;
        }
        return largest;
    });
    return largestShoePlayer.rebounds;
}