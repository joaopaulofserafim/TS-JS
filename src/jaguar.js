var Jaguar = /** @class */ (function () {
    function Jaguar(novoJaguar) {
        this.nome = "jaguar";
        this.peso = 100;
        this.velocidade = 0; // inicial 
        this.nome = novoJaguar;
    }
    Jaguar.prototype.correr = function (velocidade) {
        if (velocidade === undefined) {
            this.velocidade = 0;
            console.log(this.nome + " está parado ");
        }
        else {
            this.velocidade = velocidade;
            console.log(this.nome + " está correndo a " + this.velocidade + "km/h");
        }
    };
    return Jaguar;
}());
var jaguar1 = new Jaguar("Jaguar_1");
var jaguar2 = new Jaguar("Jaguar_2");
var jaguar3 = new Jaguar("Jaguar_3");
var jaguar4 = new Jaguar("Jaguar_4");
jaguar1.correr();
jaguar1.correr(50);
jaguar3.correr(70);
jaguar4.correr();
