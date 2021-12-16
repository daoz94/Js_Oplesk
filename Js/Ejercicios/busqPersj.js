let star = '🌐';
let elfo = '';
let dracula = '';
let mago = '';
let zombie = '';
let heroe = '';
let check = '';

function barraInicio() {
  console.log(`${star} ${'='.repeat(50)} ${star}`);
}

function barra() {
  console.log(`${'='.repeat(50)}`);
}

function mostrarElfo(elfo) {
  let diamante = ' ** ';
  console.log(`${diamante} Soy un Elfo ${elfo}`);
}

function mostrarDracula(dracula) {
  let diamante = ' ** ';
  console.log(`${diamante} Soy un dracula ${dracula}`);
}

function mostrarMago(mago) {
  let diamante = ' ** ';
  console.log(`${diamante} Soy un Mago ${mago}`);
}

function mostrarZombie(zombie) {
  let diamante = ' ** ';
  console.log(`${diamante} Soy un Zombie ${zombie}`);
}

function mostrarHeroe(heroe) {
  let diamante = ' ** ';
  console.log(`${diamante} Soy un heroe ${heroe}`);
}

function personajes(v) {
  console.log(`
  ${n1} elfo ;
  ${n2} dracula ;
  ${n3} mago ;
  ${n4} zombie ;
  ${n5} heroe ;

  `);
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

barraInicio();
mostrarPersonaje('mago');
//personajes(v);
barraInicio();
