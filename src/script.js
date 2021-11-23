"use strict";

let randomDamage = () => {Math.floor((Math.random() * 10) + 1);}

let chooseOption = (opt1, opt2) => {
    let randNum = (Math.floor(Math.random() * 2));
    return (randNum === 0 ? opt1 : opt2);
}

const attackPlayer = function(health) {
    health = health - randomDamage();
    return health;
}

let logHealth = (player, health) => {console.log(`${player} health: ${health}`);}

let logDeath = (winner, loser) => {console.log(`${winner} defeated ${loser}`);}

let isDead = (health) => {(health <= 0);}



function fight(player1, player2, player1Health, player2Health) {

    while (true) {
        debugger;

        let attacker = chooseOption(player1, player2);

        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health); {
                if (player2Health === isDead) {
                logDeath(player1, player2);
                    break;
                }
            }
        } 
        else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health); {
                if (player1Health === isDead) {
                    logDeath(player2, player1);
                    break;
                }
            }
        }
}
}
fight("Kat", "Jane", 100, 100);

