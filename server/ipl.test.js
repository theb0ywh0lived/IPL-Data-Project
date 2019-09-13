const IPL=require('./ipl')


//testing  number of matches per year 
const matches2=[{season:"2017"},{season:"2016"},{season:"2017"}]
test('matches played have to be coorect ',()=>{
    expect(IPL.calculateTheMatchesPerSeason(matches2)).toEqual({2017:2,2016:1})
});
test('Checking if returning an empty object',()=>{
    expect(IPL.calculateTheMatchesPerSeason([])).toBe('you passed an empty object')
});
test('Checking if the function exists',()=>{
expect(IPL.calculateTheMatchesPerSeason).toBeDefined();
});  


//testing number of matches per team per year

const sampledata=[{season:"2017",winner:"Sunrisers Hyderabad"},{season:"2015",winner:"Sunrisers Hyderabad"},{season:"2017",winner:"Sunrisers Hyderabad"}]
test('Checking number of matches per team per year',()=>{
    expect(IPL.matchesWonPerTeamPerSeason(sampledata)).toEqual({'Sunrisers Hyderabad':{'2015':1,'2017':2}})
})
test('Checking if returning an empty object',()=>{
    expect(IPL.calculateTheMatchesPerSeason([])).toBe('you passed an empty object')
});
test('Checking if the function exists',()=>{
    expect(IPL.matchesWonPerTeamPerSeason).toBeDefined();
    });  

//testing extraRuns function

const sampleMatches=[{season:"2016", id:"2"}]
const sampleDelivery=[{match_id:"2",bowling_team:"Sunrisers Hyderabad",extra_runs:"8"},{match_id:"3",bowling_team:"Sunrisers Hyderabad",extra_runs:"9"}]

test('extraRuns given per year per team',()=>{
    expect(IPL.extraRunsPerTeam(sampleMatches,sampleDelivery)).toEqual({"Sunrisers Hyderabad":8})
});
test('Checking for empty parameters',()=>{
    expect(IPL.extraRunsPerTeam([],[])).toBe("Check your parameters")
});
test('Checking if the function exists',()=>{
    expect(IPL.extraRunsPerTeam).toBeDefined();
    });


//testing economy function
const sampleMatchesEconomy=[{season:"2015",id:"5"}]
const sampleDeliveryEconomy=[{bowler:"RN ten Doeschate",match_id:"5",wide_runs:"0",noball_runs:"0",bye_runs:"0",legbye_runs:"0",total_runs:"4"},{bowler:"RN ten Doeschate",match_id:"5",wide_runs:"0",noball_runs:"0",bye_runs:"0",legbye_runs:"0",total_runs:"2"},{bowler:"RN ten Doeschate",match_id:"20",wide_runs:"0",noball_runs:"0",bye_runs:"0",legbye_runs:"0",total_runs:"4"},{bowler:"RN ten Doeschate",match_id:"20",wide_runs:"0",noball_runs:"0",bye_runs:"0",legbye_runs:"0",total_runs:"4"},{bowler:"RN ten Doeschate",match_id:"20",wide_runs:"0",noball_runs:"0",bye_runs:"0",legbye_runs:"0",total_runs:"4"},{bowler:"RN ten Doeschate",match_id:"20",wide_runs:"0",noball_runs:"0",bye_runs:"0",legbye_runs:"0",total_runs:"4"}]

test('Economy of bowler',()=>{
    expect(IPL.topTenEconomicalBowler(sampleMatchesEconomy,sampleDeliveryEconomy)).toEqual({"bowlers": ["RN ten Doeschate"], "economy": [18]})
})
test('Checking for empty parameters',()=>{
    expect(IPL.topTenEconomicalBowler([],[])).toBe("Check your parameters")
});
test('Checking if the function exists',()=>{
    expect(IPL.topTenEconomicalBowler).toBeDefined();
    });
    