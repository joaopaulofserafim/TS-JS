class Jaguar {
    nome: string = "jaguar";
    peso: number = 100;
    velocidade: number = 0; // inicial 

    constructor(novoJaguar: string) {
        this.nome = novoJaguar;
    }

    correr(velocidade?: number) {

        if (velocidade === undefined ) {
            this.velocidade = 0;
            console.log(this.nome + " está parado ");
        }
        else {
            this.velocidade = velocidade;
            console.log(this.nome + " está correndo a " + this.velocidade + "km/h");
        }
    }
}
const jaguar1 = new Jaguar("Jaguar_1");
const jaguar2 = new Jaguar("Jaguar_2");
const jaguar3 = new Jaguar("Jaguar_3");
const jaguar4 = new Jaguar("Jaguar_4");

jaguar1.correr();
jaguar1.correr(50);
jaguar3.correr(70);
jaguar4.correr();

