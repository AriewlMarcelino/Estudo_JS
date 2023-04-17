//Try vai validar se o primeiro bloco esta valido a ser execultado.
try{
    let text = 'Welcome'
    document.querySelector('.demo').innerHTML = text
//Se caso tenha algum erro seja ele qual for retornara a mensagem abaixo!
}catch(err){
    let text = 'Sorry something is wrong!'
    document.querySelector('.demo').innerHTML = text
}

//Validação de campo com Throw
<script>
function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try { 
    if(x.trim() == "")  throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5)  throw "too low";
    if(x > 10)   throw "too high";
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}
</script>