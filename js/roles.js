function offensiveIdentity(a){


if(a.scoring >= 90 && a.playmaking >=90)
return "Elite Two-Way Creator";


if(a.scoring >=90)
return "Scoring";


if(a.playmaking >=90)
return "Playmaking";


if(a.scoring >=75 && a.physicality >=80)
return "Power Forward";


if(a.playmaking >=75)
return "Creative";


return "Balanced";


}



function defensiveIdentity(a){


if(a.defense >=90)
return "Shutdown";


if(a.defense >=80)
return "Two-Way";


if(a.puckMovement >=85)
return "Transition";


return "Offensive";

}



function physicalIdentity(a){


if(a.physicality >=90)
return "Physical";


if(a.physicality >=75)
return "Power";


return "";

}



function usageTier(a,position){


if(position==="D"){

if(a.usage>=90)
return "Top-Pair";

if(a.usage>=75)
return "Middle-Pair";

return "Bottom-Pair";

}


else{


if(a.usage>=90)
return "First-Line";

if(a.usage>=75)
return "Top-Six";

if(a.usage>=55)
return "Middle-Six";

return "Bottom-Six";

}


}



function generateRole(player){


let a=player.attributes;


let offense=
offensiveIdentity(a);


let defense=
defensiveIdentity(a);


let physical=
physicalIdentity(a);


let usage=
usageTier(a,player.position);



let positionName;


if(player.position==="C")
positionName="Center";


else if(player.position==="LW")
positionName="Left Wing";


else if(player.position==="RW")
positionName="Right Wing";


else if(player.position==="LD")
positionName="Left Defenseman";


else
positionName="Right Defenseman";



if(player.position==="D"){


if(defense==="Shutdown")
return `${defense} ${usage} ${positionName}`;


if(offense==="Scoring")
return `${offense} ${usage} ${positionName}`;


return `${defense} ${usage} ${positionName}`;

}



return `${offense} ${usage} ${positionName}`;

}
