let log =  console. log;

function Foo(){
  return function (){
    return "Super String"
  }
}

let r = Foo();

log(r)

log(r())
