class Qaraker extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.tariq = 0;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y - 1]
        ];
    }
    yntrelVandak(character) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(character);
    }
    sharjvel() {
        if (weather == "W" || weather == "Su"){
            this.energy--;
        }

        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        this.energy--;

        if (norVandak) {

            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 6;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var qaraker = this.yntrelVandak(5);
        var miHatQaraker = random(qaraker);
        if (miHatQaraker) {
            matrix[this.y][this.x] = 0;
            matrix[miHatQaraker[1]][miHatQaraker[0]] = 6;
            this.x = miHatQaraker[0];
            this.y = miHatQaraker[1];
            this.energy++;
        }
        else {
            this.sharjvel();
        }
    }
    bazmanal() {
        var Qarakervandak = random(this.yntrelVandak(0));
        if (this.energy >= 20 && Qarakervandak) {
            var norQaraker = new Qaraker(Qarakervandak[0], Qarakervandak[1]);
            QarakerArr.push(norQaraker);
            matrix[Qarakervandak[1]][Qarakervandak[0]] = 6;
            this.energy -= 10;
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in QarakerArr) {
                if (QarakerArr[i].x == this.x && QarakerArr[i].y == this.y) {
                    QarakerArr.splice(i, 1);
                }
            }
        }
    }
}
