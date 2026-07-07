function calculateRoleRating(player){


let a=player.attributes;

let role=player.role;


let score;



if(role.includes("Shutdown")){


score =
a.defense*.50+
a.physicality*.20+
a.usage*.20+
a.puckMovement*.10;


}



else if(role.includes("Scoring")){


score =
a.scoring*.45+
a.playmaking*.20+
a.puckMovement*.15+
a.usage*.20;


}



else if(role.includes("Playmaking")){


score =
a.playmaking*.45+
a.puckMovement*.25+
a.scoring*.15+
a.usage*.15;


}



else{


score =
a.scoring*.25+
a.playmaking*.25+
a.defense*.20+
a.physicality*.15+
a.usage*.15;


}



return Math.round(score);

}
