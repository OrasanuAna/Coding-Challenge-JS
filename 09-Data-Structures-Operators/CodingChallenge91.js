// ---------- CodingChallenge 1 ----------

/*
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.

GOOD LUCK 😀

*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// ----- TASK 1 -----
//Your tasks:
//1. Create one player array for each team (variables 'players1' and 'players2')

// V1
const [players1, players2] = game.players;

// V2
// const players1 = game.players[0];
// const players2 = game.players[1];
// console.log(players1);
// console.log(players2);

// ----- TASK 2 -----
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

// V1
const [gk, ...fieldPlayers] = players1;

// V2
//const gk = players1[0];
//const fieldPlayers = [
//  game.players[0][1],
//  game.players[0][2],
//  game.players[0][3],
//  game.players[0][4],
//  game.players[0][5],
//  game.players[0][6],
//  game.players[0][7],
//  game.players[0][8],
//  game.players[0][9],
//  game.players[0][10],
//];

// V3

//const gk = players1[0];
//const fieldPlayers = players1.slice(1);

// console.log(gk);
// console.log(fieldPlayers);

// ----- TASK 3 -----
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
//console.log(allPlayers);

// ----- TASK 4 -----
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

//console.log(players1Final);

// ----- TASK 5 -----
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

// V1
const {
  odds: { team1, x: draw, team2 },
} = game;
//console.log(team1, draw, team2);

// V2
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;

// ----- TASK 6 -----
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// V1
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scores`);
};

// V2
//function printGoals(...players) {
//  console.log(players);
//  console.log(`Total goals scored: ${players.length}`);
//}

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// ----- TASK 7 -----
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
// V1
//team1 < team2 && console.log('Team 1 is more likely to win!');
//team1 > team2 && console.log('Team 2 is more likely to win!');

// V2
//const odds = game.odds;
//const winner = {
//  [odds.team1]: 'Bayern Munich',
//  [odds.team2]: 'Borrussia Dortmund',
//  [odds.x]: 'Draw',
//};
//console.log(winner[Math.min(odds.team1, odds.team2, odds.x)]);
