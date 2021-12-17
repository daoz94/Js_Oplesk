function auto(tipo) {
  return tipodDeAuto(tipo);
}

function tipodDeAuto(tipo) {
  if (tipo == 'deportivo') return 'F1';

  if (tipo == 'familiar') return 'Vw';
}

let r = auto('deportivo');
console.log(r);
