class GishatichA extends KendaniEak {
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
        this.energy --;

        if (norVandak) {

            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3.5;
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
            matrix[miHatGishatich[1]][miHatGishatich[0]] = 3.5;
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
        else {
            this.sharjvel();
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in gishatichAArr) {
                if (gishatichAArr[i].x == this.x && gishatichAArr[i].y == this.y) {
                    gishatichAArr.splice(i, 1);
                }
            }
        }
    }
}

