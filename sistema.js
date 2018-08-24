//Objeto Participante
function Participante() {
    this.nome = "";
    this.sobrenome = "";
    this.email = "";
    this.idade = 0
    this.sexo = 0
    this.nota = 0
    this.aprovado = false
}

/***********************
 * Representa o sistema
 * Uma vez instanciado, deve-se usar essa mesma
 * instancia em todas as operações.
 */
function SistemaCadastro() {

    //Onde os participantes ficarão armazenados
    const armazenamento = new ArmazenamentoHTTP();

    function adicionarParticipante(nome, sobrenome, email, idade, sexo) {
        //implemente o código necessário
        if (obterParticipante(email) === undefined){
            var p = new Participante();
            p.nome = nome;
            p.sobrenome = sobrenome;
            p.email = email;
            p.idade = idade;
            p.sexo = sexo;

            armazenamento.adicionar(p);
        }
        else
            throw ("Este email já existe: " + email);
    }

    function editarParticipante(nome, sobrenome, email, idade, sexo, nota){
        
        var participante = obterParticipante(email);
        participante.nome = nome;
        participante.sobrenome = sobrenome;
        participante.idade = idade;
        participante.sexo = sexo;

        adicionarNota(participante, nota);
        armazenamento.editar("email", participante);
    }

    function removerParticipante(email){
        //implemente o código necessário                                
        armazenamento.remover("email",email); 
    }

    function obterParticipantes(){
        return armazenamento.obterTodosParticipantes();
    }

    function buscarParticipantesPorNome(nome){
        //implemente o código necessário                                
        return armazenamento.buscarParticipante("nome", nome);       
    }    

    function buscarParticipantesPorSexo(sexo){
        //implemente o código necessário                                
        return armazenamento.buscarParticipante("sexo", sexo); 
    }

    function buscarParticipantesAprovados(){
        //implemente o código necessário                                
        return armazenamento.buscarParticipante("aprovado", true); 
    }       

    function buscarParticipantesReprovados(){
        //implemente o código necessário                                
        return armazenamento.buscarParticipante("reprovado", false); 
    }

    function obterParticipante(email){
        //implemente o código necessário                                
        return armazenamento.buscarParticipante("email", email);
    }

    function adicionarNotaAoParticipante(email, nota){
        //implemente o código necessário                                
        var participante = obterParticipante(email);
		adicionarNota(participante, nota);
        armazenamento.editar("email", participante);      
    }

    function adicionarNota(participante, nota){                       
        participante.nota = nota;
		participante.aprovado = participante.nota >= 70; 
    }

    function obterMediaDasNotasDosParticipantes(){
        //implemente o código necessário                                
        function calcularSomaParticipantes(somaDosParticipantes, dadosParticipante){
            return somaDosParticipantes + dadosParticipante.nota;
        }

        return armazenamento.serializar().reduce(calcularSomaParticipantes, 0) / obterTotalDeParticipantes();
    }

    function obterTotalDeParticipantes(){
        return armazenamento.deserializar().length;                   
    }

    function obterQuantidadeDeParticipantesPorSexo(sexo){
        //implemente o código necessário
        return buscarParticipantesPorSexo(sexo).length;
    } 

    return {
        adicionarParticipante,
        removerParticipante,
        buscarParticipantesPorNome,
        buscarParticipantesPorSexo,
        buscarParticipantesAprovados,
        buscarParticipantesReprovados,
        obterParticipante,
        obterParticipantes,
        adicionarNotaAoParticipante,
        obterMediaDasNotasDosParticipantes,
        obterTotalDeParticipantes, 
        obterQuantidadeDeParticipantesPorSexo,
        editarParticipante
    };
}