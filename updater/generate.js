const fs=require("fs");


let raw =
JSON.parse(
fs.readFileSync("data/raw.json")
);



let players=[];



raw.points.forEach(p=>{


players.push({

name:p.name,

position:p.position,

stats:{


goals:p.goals || 0,

assists:p.assists || 0,

points:p.points || 0,


shots:0,

shooting:0,


blocks:0,

hits:0,

takeaways:0,


defensiveImpact:50,


transition:50,


corsi:50,


toi:50,


ppTime:50,


pkTime:50,


primaryAssists:p.assists || 0


}



});


});



fs.writeFileSync(

"data/players.json",

JSON.stringify(players,null,2)

);
