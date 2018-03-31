class Gishatich extends KendaniEak {
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
            this.energy--;
        }
        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        this.energy -= 1;

        if (norVandak) {

            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var gishatich = this.yntrelVandak(2);
        var xotaker2 = this.yntrelVandak(2.5);
        var miHatGishatichA = random(xotaker2)
        var miHatGishatich = random(gishatich);
        if (miHatGishatich) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            matrix[miHatGishatich[1]][miHatGishatich[0]] = 3;
            this.x = miHatGishatich[0];
            this.y = miHatGishatich[1];
            for (var l in xotakerArr) {
                if (xotakerArr[l].x == this.x && xotakerArr[l].y == this.y) {
                    xotakerArr.splice(l, 1);
                }
            }
        }
        else if (miHatGishatichA) {
            this.energy++;
            matrix[this.y][this.x] = 0;
            matrix[miHatGishatichA[1]][miHatGishatichA[0]] = 3.5;
            this.x = miHatGishatichA[0];
            this.y = miHatGishatichA[1];
            for (var l in xotakerAArr) {
                if (xotakerAArr[l].x == this.x && xotakerAArr[l].y == this.y) {
                    xotakerAArr.splice(l, 1);
                }
            }
        }
        else{
            this.sharjvel();
        }
    }
    bazmanal() {
        var axjik = random(this.yntrelVandak(3.5));
        var xotakervandak = random(this.yntrelVandak(0));
        var r = random(1, 3);
        r = Math.floor(r);
        if (this.energy > 7 && xotakervandak && axjik) {
            if (r == 1) {
                var norXotaker = new Gishatich(xotakervandak[0], xotakervandak[1]);
                gishatichArr.push(norXotaker);
                matrix[xotakervandak[1]][xotakervandak[0]] = 3.5;
                this.energy -= 3;
            }
            else if (r == 2) {
                var norXotaker = new GishatichA(xotakervandak[0], xotakervandak[1]);
                gishatichAArr.push(norXotaker);
                matrix[xotakervandak[1]][xotakervandak[0]] = 3;
                this.energy -= 3;
            }
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                }
            }
        }
    }
}

