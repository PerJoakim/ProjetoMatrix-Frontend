var sistema = new SistemaCadastro();

function enviarParaLocalStorage(){

    function verificarSexo(){
        if(document.getElementById("masculino").checked === true)
            return "1";
        else
            if(document.getElementById("feminino").checked === true)
                return "2";       
    }
    
    sistema.adicionarParticipante(
        document.getElementById("nome").value,
        document.getElementById("sobrenome").value,
        document.getElementById("email").value,
        document.getElementById("idade").value,
        verificarSexo()      
    );    

    sistema.adicionarNotaAoParticipante(
        document.getElementById("email").value, 
        document.getElementById("nota").value
    );
}