class ValidaCPF {
  constructor(cpfenvido) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfenvido.replace(/\D+/g, ""),
    });
  }
  Sequencia() {
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
  }
  geraNovoCpf() {
    const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
    this.novoCPF = cpfSemDigitos + digito1 + digito2;
  }

  static geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for (let stringnum1 of cpfSemDigitos) {
      total += reverso * Number(stringnum1);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? digito : "0";
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.Sequencia()) return false;
    this.geraNovoCpf();

    return this.novoCPF === this.cpfLimpo;
  }
}

// let cpf1 = new ValidaCPF("147.516.787-36");

// if (cpf1.valida()) {
//   console.log("CPF VALIDO");
// } else {
//   console.log("CPF INVALIDO");
// }
