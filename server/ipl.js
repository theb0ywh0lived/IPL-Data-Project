const filesystem = require("fs");
//First Function
function calculateTheMatchesPerSeason(matches) {
    const matchesPerSeason = matches.reduce((totalMatches, currentMatch) => {
        totalMatches[currentMatch.season] = totalMatches[currentMatch.season] + 1 || 1;
        return totalMatches;

    }, {});
    return (matchesPerSeason);
}
module.exports.calculateTheMatchesPerSeason = calculateTheMatchesPerSeason;
//Second Function
function matchesWonPerTeamPerSeason(matches) {
    return matches.reduce((totalTeams, teams) => {
        if (totalTeams[teams.winner]) {
            if (totalTeams[teams.winner][teams.season]) {
                ++totalTeams[teams.winner][teams.season];
            }
            else {
                totalTeams[teams.winner][teams.season] = 1;
            }
        }
        else {
            totalTeams[teams.winner] = {};
            totalTeams[teams.winner][teams.season] = 1;
        }
        return totalTeams;
    }, {});
}
module.exports.matchesWonPerTeamPerSeason = matchesWonPerTeamPerSeason;
//Third Function
function extraRunsPerTeam(matches, deliveries) {
    let extra_runs = {};
    extra_runs = deliveries.reduce((accumulator, delivery) => {
        let match = matches.map((match) => {
            if (match.id == delivery.match_id && match.season == '2016') {
                if (delivery.bowling_team in accumulator) {
                    accumulator[delivery.bowling_team] += parseInt(delivery.extra_runs);
                }
                else {
                    accumulator[delivery.bowling_team] = parseInt(delivery.extra_runs);
                }
            }
        });
        return accumulator;
    }, {});
    return extra_runs;
}
module.exports.extraRunsPerTeam = extraRunsPerTeam;
//Fourth Function
function topTenEconomicalBowler(matches, deliveries) {
    let runs = {};
    runs = deliveries.reduce((runsScored, delivery) => {
        let match = matches.map((match) => {
            if (match.id == delivery.match_id && match.season == '2015') {
                if (delivery.bowler in runsScored) {
                    runsScored[delivery.bowler] += Number(delivery.total_runs) - Number(delivery.bye_runs) - Number(delivery.legbye_runs);
                }
                else {
                    runsScored[delivery.bowler] = Number(delivery.total_runs) - Number(delivery.bye_runs) - Number(delivery.legbye_runs);
                }
            }
        });
        return runsScored;
    }, {});
    let balls = {};
    balls = deliveries.reduce((totalBallValue, currentBallValue) => {
        let match = matches.map((match) => {
            if (match.id == currentBallValue.match_id && match.season == '2015') {
                if (currentBallValue.wide_runs != '0' || currentBallValue.noball_runs != '0') {
                    return totalBallValue;
                } else {
                    if (totalBallValue[currentBallValue.bowler]) {
                        ++totalBallValue[currentBallValue.bowler];
                    }
                    else {
                        totalBallValue[currentBallValue.bowler] = 1;
                    }
                    return totalBallValue;
                }
            }
        });
        return totalBallValue;

    }, {});

    var totalBallsByBowler = Object.values(balls)
    var bowlerName = Object.keys(balls);
    var totalRunsGivenByBowler = Object.values(runs)
    economy = totalBallsByBowler.map(function (bowls, index) {
        return { "name": bowlerName[index], "economy": (totalRunsGivenByBowler[index] * 6) / bowls };
    });
    let sortedEconomyRate = economy.sort(function (a, b) {
        return a.economy - b.economy;
    })
    let topTenEconomicalBowlerArray = sortedEconomyRate.slice(0, 10);
    var topTenEconomicalBowlerObject = topTenEconomicalBowlerArray.map(item => ({
        [item.name]: item.economy
    }));
    var topTenEconomicalBowler = Object.assign({}, ...topTenEconomicalBowlerObject);
    let topTenEconomicalBowlerStatus = { "bowlers": Object.keys(topTenEconomicalBowler), "economy": Object.values(topTenEconomicalBowler) };
    return topTenEconomicalBowlerStatus;

}
module.exports.topTenEconomicalBowler = topTenEconomicalBowler;

function writeOutput(path,fileName,charEncoding){
    filesystem.writeFile(path,fileName,charEncoding,function(err){
    if (err){
        console.log("An error occured");
        return console.log(err);
    }
    console.log("json file succesfully written");

    })

}
module.exports.writeOutput = writeOutput;