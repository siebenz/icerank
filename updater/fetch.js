const fs = require("fs");


async function getPlayers(){


let response =
await fetch(
"https://api-web.nhle.com/v1/player-stats-leaders/current?categories=points&limit=100"
);


let data =
await response.json();



fs.writeFileSync(

"data/raw.json",

JSON.stringify(data,null,2)

);


}


getPlayers();
