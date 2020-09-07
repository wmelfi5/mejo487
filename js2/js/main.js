var htmlBuilder = "";

var teams = ["Braves", "Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dogers","Diamondbacks","Giants","Padres","Rockies"];
var wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
var losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];

//logic to determine the team with the most wins.

var tempHighWins = 0;
var tempLeader = 0;

for (var i=0; i<teams.length; i++){
  if(wins[i] >= tempHighWins){
    tempHighWins = wins[i];
    tempLeader = i;
  }
}

//table function

function createTable(){
  document.write('<table>')
  document.write('<tr><th>Teams</th><th>Wins</th><th>Losses</th></tr>')

  for (var i=0; i < teams.length; i++){
    document.write('<tr><td>' + teams[i] + '</td><td>' + wins[i] + '</td><td>' + losses[i] + '</td></tr>');
  }

  document.write('</table>')
  }

createTable()
