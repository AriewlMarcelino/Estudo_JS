//Comando para poder criar um cookie ou ler ele;
// let cookies = document.cookie = 'Paulo Silva';
// alert(`cookies criado ${cookies}`);

//comando para fazer a expiração do cookie no navegador ou seja esse mesmo parametro server para poder deletar um cookie;

// let cookies2 = document.cookie = 'Paulo Silva; expire=Sun, 09 abril 12:26:00'; 
// window.confirm(`este cookies sera deletado no seguinte dia ${cookies2}`)

//Ultilizando o comando js, para poder saber a qual pagina se destina aquele cookies;
// let cookies3 = document.cookie = 'Paulo Silva; expire=Sun, 09 Apr 12:22:00; path=/'; 
// alert(`Este cookie é referente a pagina: ${cookies3}`)

//funções para criar o cookie feito pela W3C:

/*
Exemplo explicado:

Os parâmetros da função acima são o nome do cookie (cname), o valor do cookie (cvalue) e o número de dias até que o cookie expire (exdays).

A função define um cookie adicionando o cookiename, o valor do cookie e a string expires.

*/
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

//função para obter um cookies W3C:
/*

Função explicada:

Pegue o cookiename como parâmetro (cname).

Crie uma variável (nome) com o texto a ser pesquisado (cname + "=").

Decodifique a string do cookie, para lidar com cookies com caracteres especiais, por exemplo, '$'

Divida document.cookie em ponto-e-vírgula em uma matriz chamada ca (ca = decodedCookie.split(';')).

Percorra a matriz ca (i = 0; i < ca.length; i++) e leia cada valor c = ca[i]).

Se o cookie for encontrado (c.indexOf(name) == 0), retorne o valor do cookie (c.substring(name.length, c.length).

Se o cookie não for encontrado, retorne "".

*/ 
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


/*
Uma função para verificar um cookie
Por último, criamos a função que verifica se um cookie está definido.

Se o cookie estiver definido, ele exibirá uma saudação.

Se o cookie não estiver definido, ele exibirá uma caixa de prompt, solicitando o nome do usuário e armazenará o cookie de nome de usuário por 365 dias, chamando a setCookiefunção:
  */

  function checkCookie() {
    let username = getCookie("username");
    if (username != "") {
     alert("Welcome again " + username);
    } else {
      username = prompt("Please enter your name:", "");
      if (username != "" && username != null) {
        setCookie("username", username, 365);
      }
    }
  }



