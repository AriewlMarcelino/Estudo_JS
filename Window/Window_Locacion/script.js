//retorna o href (URL) da página atual
let x = document.querySelector('.inf1').innerHTML = 'Url da página: ' + window.location.href;

// retorna o href (URL) da página atual
let y = document.querySelector('.inf2').innerHTML = 'Nome do dominio da Pagina: ' + window.location.hostname;

// retorna o caminho e o nome do arquivo da página atual
let t = document.querySelector('.inf3').innerHTML = 'Caminho atual da pagina: ' + window.location.pathname;

// retorna o protocolo da web usado (http: ou https:)
let i = document.querySelector('.inf4').innerHTML = 'Protocolo da pagina: ' + window.location.protocol;