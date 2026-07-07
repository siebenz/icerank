function calculateAttributes(stats){

return {

    scoring:
    average(
        stats.goals,
        stats.shots,
        stats.shooting
    ),


    playmaking:
    average(
        stats.assists,
        stats.primaryAssists,
        stats.points
    ),


    defense:
    average(
        stats.blocks,
        stats.takeaways,
        stats.defensiveImpact
    ),


    physicality:
    average(
        stats.hits,
        stats.pim,
        stats.blocks
    ),


    puckMovement:
    average(
        stats.assists,
        stats.transition,
        stats.corsi
    ),


    usage:
    average(
        stats.toi,
        stats.ppTime,
        stats.pkTime
    )

};

}



function average(...numbers){

return numbers.reduce((a,b)=>a+b,0)
/
numbers.length;

}
