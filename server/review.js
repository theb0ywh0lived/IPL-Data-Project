const matches = require('./../dataset/matches.json');
const deliveries = require('./../dataset/deliveries.json');

//per team highest wicket taker
//"player_dismissed":"",

function highestbowling_teams(deliveries) {
    let wickets = deliveries.filter(match => match.player_dismissed != '')
        .reduce((acc, curr) => {
            if (acc[curr.bowling_team]) {
                if (acc[curr.bowling_team][curr.bowler]) {
                    acc[curr.bowling_team][curr.bowler]++;
                }
                else {
                    acc[curr.bowling_team][curr.bowler] = 1;
                }

            }
            else {
                acc[curr.bowling_team] = {};
                acc[curr.bowling_team][curr.bowler] = 1;
            }
            return acc;

        }, {});
        Object.keys(wickets).map(a=>{
           wickets[a]= Object.entries(wickets[a]).sort((a,b)=>{return b[1]-a[1]}).slice(0,1);
        })      
         

       return wickets;

}
const y = highestbowling_teams(deliveries)
console.log(y);
