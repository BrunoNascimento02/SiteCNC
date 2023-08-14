function validaformulario() {
  class ValidandoFormulario {
    constructor() {
      this.formulario = document.querySelector(".formulario");
      this.clicando();
    }

    clicando() {
      this.formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let valida = this.validando();
        let loading = this.formulario.querySelector('.loading')
        let confirmed = this.formulario.querySelector('.confirmado')

            if (valida === true){
                if(loading.style.display ==='block'){
                    loading.style.display = 'none'
                }else{loading.style.display ='block'}
                this.criaTempo(2000,'Criando Banco de dados').then(reposta =>{
                console.log(reposta)
                return this.criaTempo(2000,'acessando servidor')
            }).then(resposta =>{
                console.log(resposta);
                return this.criaTempo(1000,'decodificando o bando de dados')
            }).then(resposta =>{
                console.log(resposta);
                return this.criaTempo(1000,'Criando novos dados')
            }).then(resposta =>{
                console.log(resposta);
                if(loading.style.display ==='block'){
                    loading.style.display = 'none'
                }else{loading.style.display ='block'};

                if(confirmed.style.display === 'block'){
                    confirmed.style.display = 'none'
                }else{confirmed.style.display ='block'}
                return this.criaTempo(2000,'decodificando')
            }).then(resposta =>{
                console.log(resposta);
                this.formulario.submit()
            })
        }
      });
    }


    criaTempo(tempo, msg) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(msg);
        }, tempo);
      });
    }

    validando() {
      let valida = true;
      let campo;
      let erro;
      for (erro of this.formulario.querySelectorAll(".erro-text")) {
        erro.remove();
      }
      for (campo of this.formulario.querySelectorAll(".valida")) {
        if (!campo.value) {
          this.criaErro(campo, `o campo não pode estar vazio`);
          valida = false;
        }
      }

      if (!this.validaNome()) valida = false;
      if (!this.validaEmail()) valida = false;
      if (!this.validaCPF()) valida = false;
      if (!this.ageValid()) valida = false;
      if (!this.validaSenha()) valida = false;

      return valida;
    }

    validaSenha() {
      let valida = true;
      let senha1 = this.formulario.querySelector(".senha");
      let confirmasenha1 = this.formulario.querySelector(".confirmasenha");

      if (senha1.value.length < 5) {
        this.criaErro(senha1, "Senha deve ser maior que 5 digitos");
        valida = false;
      }
      if (senha1.value !== confirmasenha1.value) {
        this.criaErro(senha1, "Senhas não sao compativeis");
        this.criaErro(confirmasenha1, "Senhas não sao compativeis");
        valida = false;
      }
      return valida;
    }

    ageValid() {
      let valida = true;
      let idade = this.formulario.querySelector(".idade");
      if (idade.value < 18) {
        this.criaErro(idade, "Você deve ser maior de idade");
        valida = false;
      }

      return valida;
    }

    validaCPF() {
      let valida = true;
      let newcpf1 = this.formulario.querySelector(".cpf");
      let newcpf = new ValidaCPF(newcpf1.value);
      if (!newcpf.valida()) {
        this.criaErro(newcpf1, "CPF invalido");
        valida = false;
      }
      return valida;
    }

    validaNome() {
      let valida = true;
      let validausuario = this.formulario.querySelector(".nome");
      if (validausuario.value.length < 5) {
        this.criaErro(validausuario, "Seu nome deve ter mais que 5 digitos");
        valida = false;
      }
      return valida;
    }

    validaEmail() {
      let valida = true;
      let email = this.formulario.querySelector(".email");
      if (email.value.includes("@")) {
        return (valida = true);
      } else {
        this.criaErro(email, "Precisa Obrigadoriamente ter o @");
        return (valida = true);
      }
    }

    criaErro(campo, msg) {
      // Erro que exibira na tela junto a uma div Criada
      let div = document.createElement("div");
      div.classList.add("erro-text");
      div.innerHTML = msg;
      campo.insertAdjacentElement("afterend", div);
    }
  }

  const novoFormulario = new ValidandoFormulario();
}

validaformulario();
