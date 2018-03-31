class Xotaker extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.tariq = 0;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    sharjvel() {
        if (weather == "W" || weather == "Su"){
            this.energy-=4;
        }
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        this.energy--;

        if (norVandak) {

            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var xot = this.yntrelVandak(1);
        var miHatXot = random(xot);

        if (miHatXot) {
            matrix[this.y][this.x] = 0;
            matrix[miHatXot[1]][miHatXot[0]] = 2;
            this.x = miHatXot[0];
            this.y = miHatXot[1];
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                }
            }
        }
        else {
            this.sharjvel();
        }
    }
    bazmanal() {
        var axjik = random(this.yntrelVandak(2.5));
        var xotakervandak = random(this.yntrelVandak(0));
        var r = random(1, 3);
        r = Math.floor(r);
        if (this.energy > 5 && xotakervandak && axjik) {
            if (r == 1) {
                var norXotaker = new XotakerA(xotakervandak[0], xotakervandak[1]);
                xotakerAArr.push(norXotaker);
                matrix[xotakervandak[1]][xotakervandak[0]] = 2.5;
                this.energy -= 3;
            }
            else {
                var norXotaker = new Xotaker(xotakervandak[0], xotakervandak[1]);
                xotakerArr.push(norXotaker);
                matrix[xotakervandak[1]][xotakervandak[0]] = 2;
                this.energy -= 3;
            }
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
    }
}
