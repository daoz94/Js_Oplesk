function deportivo(){
  return "Auto deportivo"
}

function familiar(){
  return "Auto familiar"
}

function tipodAuto(entrada, f1, f2){
  if (entrada == "familiar")
    return familiar()
  if (entrada == "deportivo")
    return deportivo()
}

let resp = tipodAuto("deportivo", deportivo,familiar)
console.log(resp)

//otra manera de verlo

//let resp = tipodAuto("deportivo", (){
//                                   return "Auto deportivo"
//                                  },
//                                  function familiar(){
//                                    return "Auto Familiar"
//                                  })
//console.log(resp)