fetch("data/players.json")

.then(r=>r.json())

.then(players=>{


let box=document.getElementById("players");


players.forEach(player=>{


player.attributes =
calculateAttributes(player.stats);



player.role =
generateRole(player);



player.rating =
calculateRoleRating(player);



box.innerHTML +=`

<div class="card">

<h2>${player.name}</h2>

<h3>${player.role}</h3>

<h1>${player.rating}</h1>


<p>
Scoring:
${Math.round(player.attributes.scoring)}
</p>


<p>
Defense:
${Math.round(player.attributes.defense)}
</p>


<p>
Physical:
${Math.round(player.attributes.physicality)}
</p>


</div>


`;


});


});
