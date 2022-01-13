log = console.log;
//********************************************************************** */
log("Ejemplo 1\n\n")

var heroes = ["mago","elfo","mishi","orco"]

log(heroes[1])
log(heroes[0])
log(heroes[3])
log(heroes[2])

//********************************************************************** */
log("\n\nEjemplo 2\n\n")

let arrayA = [];
log(arrayA);

arrayA.unshift('Daniel')
log(arrayA);

arrayA.push('Venezuela');
log(arrayA);

arrayA.shift();
log(arrayA);

arrayA.pop();
log(arrayA);
//********************************************************************** */
log("\n\nEjemplo 3\n\n")

if (heroes[2] == "orco") {
    log("es Orco\n")
    
}else{
    log("No es orco \n")
}
//********************************************************************** */
log("\n\nEjemplo 4\n\n")

pos = 1
heroes[pos] = "alien"
log(heroes[pos])
log(heroes)

//********************************************************************** */
log("\n\nEjemplo 5\n\n")
hero=["mago","elfo","mishi","orco","humano","troll","gargola"]
for (let index = 1; index <= 5; index++){
    log(hero[index])
}

//********************************************************************** */
log("\n\nEjemplo 6\n\n")

let tree = "🌴"
let road = "🛣"
let genius = "🧞‍♂️"
let house = "🏡"

let map = [
    ["g", 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, "h"],
    [0, 0, 0, 0, 0, 0],
]

for (let fila = 0; fila < map.length; fila++) {
    let col = 0;
    for (col = 0; col < 6; col++) {
        if (map[fila][col] == "g") {
            map[fila][col] = genius
        }
        if (map[fila][col] == 0) {
            map[fila][col] = tree
        }
        if (map[fila][col] == 1) {
            map[fila][col] = road
        }
        if (map[fila][col] == "h") {
            map[fila][col] = house
        }
    }
}

for (let index = 0; index < map.length; index++) {
    log(map[index][0], map[index][1],map[index][2],map[index][3],map[index][4],map[index][5])
}