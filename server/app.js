const csvtojson = require("csvtojson");
const filesystem = require("fs");

csvtojson().fromFile("./../dataset/deliveries.csv").then(deliveries => {

    var jsonFile = JSON.stringify(deliveries);
    filesystem.writeFileSync('./../dataset/deliveries.json', jsonFile)
});
csvtojson().fromFile("./../dataset/matches.csv").then(matches => {

    var jsonFilematches = JSON.stringify(matches);
    filesystem.writeFileSync('./../dataset/matches.json', jsonFilematches)
});

const matches = require('./../dataset/matches.json');
const deliveries = require('./../dataset/deliveries.json');

var IPL = require('./ipl');

var data = {};
let yearCount = IPL.calculateTheMatchesPerSeason(matches);
let jsoncalculateTheMatchesPerSeason = JSON.stringify(yearCount);
data["matchesPerYear"] = yearCount;
IPL.writeOutput("./../output/matchesPerYear.json",jsoncalculateTheMatchesPerSeason,"utf8")

//console.log(ipl.calculateTheMatchesPerSeason(matches));
let matchesWonPerTeam = IPL.matchesWonPerTeamPerSeason(matches);
let jsonmatchesWonPerTeamPerSeason = JSON.stringify(matchesWonPerTeam);
data["matchesWonPerTeamPerYear"] = matchesWonPerTeam;
IPL.writeOutput("./../output/matchesPerTeamPerYear.json",jsonmatchesWonPerTeamPerSeason,"utf8")

//console.log(ipl.matchesWonPerTeamPerSeason(matches));
let extraRunsScoredPerTeam = IPL.extraRunsPerTeam(matches,deliveries);
let jsonextraRunsPerTeam = JSON.stringify(extraRunsScoredPerTeam);
data["extraRunsScoredPerTeam"] = extraRunsScoredPerTeam;
IPL.writeOutput("./../output/extraRunsScoredPerTeam.json",jsonextraRunsPerTeam,"utf8")

//console.log(ipl.extraRunsPerTeam(matches, deliveries));

let topEconomicalBowlers = IPL.topTenEconomicalBowler(matches,deliveries);
let jsonTopEconomicalBowlers = JSON.stringify(topEconomicalBowlers);
data["topEconomicalBowlers"] =topEconomicalBowlers;
IPL.writeOutput("./../output/topEconomicalBowlers.json",jsonTopEconomicalBowlers,"utf8")


//console.log(ipl.topTenEconomicalBowler(matches, deliveries));