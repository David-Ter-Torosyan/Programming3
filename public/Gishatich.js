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
    chooseCell(character) {
        this.stanalNorKordinatner();
        return super.chooseCell(character);
    }
    sharjvel() {

        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        this.energy--;

        if (norVandak) {

            matrix[this.y][this.x] = 1;
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var gishatich = this.yntrelVandak(2);
        var miHatGishatich = random(gishatich);
        this.energy++;
        if (miHatGishatich) {
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
        else {
            this.sharjvel();
        }
    }
    bazmanal() {
        var gishatichvandak = random(this.yntrelVandak(0));
        if (this.energy >= 10 && gishatichvandak) {
            var norGishatich = new Gishatich(gishatichvandak[0], gishatichvandak[1]);
            gishatichArr.push(norGishatich);
            matrix[gishatichvandak[1]][gishatichvandak[0]] = 3;
            this.energy-=5;
        }
    }
    mahanal() {
        if (this.energy == 0) {
            matrix[this.y][this.x] = 0
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                }
            }
        }
    }
}

