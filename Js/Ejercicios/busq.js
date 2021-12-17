let star = '⭐️';
let elfo = '🧝';
let dracula = '🧛';
let mago = '🧙‍♂️';
let zombie = '🧟';
let heroe = '🦸';
let check = '✅';

function barraInicio() {
  console.log(`${star}  ${'='.repeat(50)}   ${star}`);
}

function barra() {
  console.log(`${'='.repeat(50)}`);
}

function mostrarElfo(elfo) {
  let diamante = '💎';
  console.log(`${diamante}  Soy un Elfo ${elfo}`);
}

function mostrarDracula(dracula) {
  let diamante = '💎';
  console.log(`${diamante}  Soy un dracula ${dracula}`);
}

function mostrarMago(mago) {
  let diamante = '💎';
  console.log(`${diamante}  Soy un Mago ${mago}`);
}

function mostrarZombie(zombie) {
  let diamante = '💎';
  console.log(`${diamante}  Soy un Zombie ${zombie}`);
}

function mostrarHeroe(heroe) {
  let diamante = '💎';
  console.log(`${diamante}  Soy un heroe ${heroe}`);
}

function personajes(pers) {
  let n1=1, n2=2, n3=3, n4=4, n5=5;

  switch (pers) {
    case 'elfo':
      console.log(`
      ${check} elfo 🧝
      ${n2} dracula 🧛
      ${n3} mago 🧙‍♂️
      ${n4} zombie 🧟
      ${n5} heroe 🦸
      `);
      break;
    case 'dracula':
      console.log(`
      ${n1} elfo 🧝
      ${check} dracula 🧛
      ${n3} mago 🧙‍♂️
      ${n4} zombie 🧟
      ${n5} heroe 🦸
      `);
      break;
    case 'mago':
      console.log(`
      ${n1} elfo 🧝
      ${n2} dracula 🧛
      ${check} mago 🧙‍♂️
      ${n4} zombie 🧟
      ${n5} heroe 🦸
      `);
      break;
    case 'zombie':
      console.log(`
      ${n1} elfo 🧝
      ${n2} dracula 🧛
      ${n3} mago 🧙‍♂️
      ${check} zombie 🧟
      ${n5} heroe 🦸
      `);
      break;
    case 'heroe':
      console.log(`
      ${n1} elfo 🧝
      ${n2} dracula 🧛
      ${n3} mago 🧙‍♂️
      ${n4} zombie 🧟
      ${check} heroe 🦸
      `);
      break;
  }
}

function mostrarPersonaje(personaje) {
  switch (personaje) {
    case 'elfo':
      mostrarElfo(elfo);
      break;
    case 'dracula':
      mostrarDracula(dracula);
      break;
    case 'mago':
      mostrarMago(mago);
      break;
    case 'zombie':
      mostrarZombie(zombie);
      break;
    case 'heroe':
      mostrarHeroe(heroe);
      break;
  }
}

let pers = "mago"
barraInicio();
//mostrarPersonaje(pers);
//personajes(pers);
barraInicio();
