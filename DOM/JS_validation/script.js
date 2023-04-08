function formValidation(){
    // Pagando os valores do formulario e input com a propriedade;
    let inpt1 = document.forms['form']['inpt1'].value;

    //Validação dizendo se o input for igual '', retornara uma mensagem como o alert, dizendo ao usuario que insira um dado;
    if(inpt1 == ''){
        alert('preencha os campos que estão em vazio!')
        return false
    }

}



