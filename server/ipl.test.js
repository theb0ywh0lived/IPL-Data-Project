const IPL = require('./ipl')


//testing  number of matches per year 
const matches = [{ season: "2017" }, { season: "2016" }, { season: "2017" }]
test('Checking if the function exists', () => {
    expect(IPL.calculateTheMatchesPerSeason).toBeDefined();
});
test('Checking if returning an empty object', () => {
    expect(IPL.calculateTheMatchesPerSeason([])).toBe('you passed an empty object')
});
test('matches played have to be coorect ', () => {
    expect(IPL.calculateTheMatchesPerSeason(matches)).toEqual({ 2017: 2, 2016: 1 })
});



//testing number of matches per team per year

const sampledata = [{ season: "2017", winner: "Sunrisers Hyderabad" }, { season: "2015", winner: "Sunrisers Hyderabad" }, { season: "2017", winner: "Sunrisers Hyderabad" }, { season: "2008", winner: "Delhi Daredevils" }, { season: "2009", winner: "Delhi Daredevils" }, { season: "2008", winner: "Delhi Daredevils" }, { season: "2013", winner: "Kolkata Knight Riders" }]
test('Checking if the function exists', () => {
    expect(IPL.matchesWonPerTeamPerSeason).toBeDefined();
});
test('Checking if returning an empty object', () => {
    expect(IPL.calculateTheMatchesPerSeason([])).toBe('you passed an empty object')
});

test('Checking number of matches per team per year', () => {
    expect(IPL.matchesWonPerTeamPerSeason(sampledata)).toEqual({ 'Sunrisers Hyderabad': { '2015': 1, '2017': 2 }, 'Delhi Daredevils': { '2008': 2, '2009': 1 }, 'Kolkata Knight Riders': { '2013': 1 } })
});



//testing extraRuns function

const sampleMatches = [{ season: "2016", id: "2" }]
const sampleDelivery = [{ match_id: "2", bowling_team: "Sunrisers Hyderabad", extra_runs: "1" }, { match_id: "2", bowling_team: "Sunrisers Hyderabad", extra_runs: "2" }, { match_id: "3", bowling_team: "Delhi Daredevils", extra_runs: "3" }, { match_id: "3", bowling_team: "Delhi Daredevils", extra_runs: "1" }]
test('Checking if the function exists', () => {
    expect(IPL.extraRunsPerTeam).toBeDefined();
});
test('Checking for empty parameters', () => {
    expect(IPL.extraRunsPerTeam([], [])).toBe("Check your parameters")
});

test('extraRuns given per year per team', () => {
    expect(IPL.extraRunsPerTeam(sampleMatches, sampleDelivery)).toEqual({ "Sunrisers Hyderabad": 3 }, { "Delhi Daredevils": 4 })
});



//testing economy function
const sampleMatchesEconomy = [{ season: "2015", id: "5" }]
const sampleDeliveryEconomy = [{ bowler: "RN ten Doeschate", match_id: "5", wide_runs: "0", noball_runs: "0", bye_runs: "0", legbye_runs: "0", total_runs: "4" }, { bowler: "RN ten Doeschate", match_id: "5", wide_runs: "0", noball_runs: "0", bye_runs: "0", legbye_runs: "0", total_runs: "2" }, { bowler: "RN ten Doeschate", match_id: "5", wide_runs: "0", noball_runs: "0", bye_runs: "0", legbye_runs: "0", total_runs: "4" }, { bowler: "RN ten Doeschate", match_id: "5", wide_runs: "0", noball_runs: "0", bye_runs: "0", legbye_runs: "0", total_runs: "4" }, { bowler: "RN ten Doeschate", match_id: "5", wide_runs: "0", noball_runs: "0", bye_runs: "0", legbye_runs: "0", total_runs: "4" }, { bowler: "RN ten Doeschate", match_id: "5", wide_runs: "0", noball_runs: "0", bye_runs: "0", legbye_runs: "0", total_runs: "4" }, { bowler: "J Yadav", match_id: "15", wide_runs: "0", noball_runs: "0", bye_runs: "0", legbye_runs: "0", total_runs: "3" }]
test('Checking if the function exists', () => {
    expect(IPL.topTenEconomicalBowler).toBeDefined();
});
test('Checking for empty parameters', () => {
    expect(IPL.topTenEconomicalBowler([], [])).toBe("Check your parameters")
});
test('Economy of bowler', () => {
    expect(IPL.topTenEconomicalBowler(sampleMatchesEconomy, sampleDeliveryEconomy)).toEqual({ "bowlers": ["RN ten Doeschate"], "economy": [22] }, { "bowlers": ["J Yadav"], "economy": [3] })
})


