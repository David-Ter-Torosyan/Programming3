class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 7;
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
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        if (this.multiply >= 8 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }
}
//------------------------------------------------------------------------------------------
class Xotaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
        this.index = 2;
        this.energy = 3;
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {

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
            this.energy++;
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
        var xotakervandak = random(this.yntrelVandak(0));
        if (this.energy > 5 && xotakervandak) {
            var norXotaker = new Xotaker(xotakervandak[0], xotakervandak[1]);
            xotakerArr.push(norXotaker);
            matrix[xotakervandak[1]][xotakervandak[0]] = 2;
            this.energy--
        }
    }
    mahanal() {
        if (this.energy == 0) {
            matrix[this.y][this.x] = 0
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
    }
}
//-------------------------------------------------------------------------------------------
class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
        this.index = 3;
        this.energy = 9;
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 2, this.y - 1],
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
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
    sharjvel2() {

        var datarkVandakner = this.yntrelVandak(1);
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
            this.sharjvel2();
        }
    }
    bazmanal() {
        var gishatichvandak = random(this.yntrelVandak(0));
        if (this.energy >= 10 && gishatichvandak) {
            var norGishatich = new Gishatich(gishatichvandak[0], gishatichvandak[1]);
            gishatichArr.push(norGishatich);
            matrix[gishatichvandak[1]][gishatichvandak[0]] = 3;
            this.energy--;
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
//-------------------------------------------------------------------------------------------
class Xxy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
        this.index = 4;
        this.energy = 4;
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 3],
            [this.x - 1, this.y + 3],
            [this.x - 3, this.y - 1],
            [this.x - 3, this.y + 1],
            [this.x + 1, this.y + 3],
            [this.x + 1, this.y - 3],
            [this.x + 3, this.y + 1],
            [this.x + 3, this.y - 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {

        var datarkVandakner = this.yntrelVandak(0);
        var norVandak = random(datarkVandakner);
        this.energy--;

        if (norVandak) {

            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }
    utel() {
        this.stanalNorKordinatner();
        var xxy = this.yntrelVandak(0);
        var miHatXxy = random(xxy);
        if (miHatXxy) {
            matrix[this.y][this.x] = 5;
            matrix[miHatXxy[1]][miHatXxy[0]] = 4;
            this.x = miHatXxy[0];
            this.y = miHatXxy[1];
            this.energy++;
        }
        else {
            this.sharjvel();
        }
    }
    bazmanal() {
        var Xxyvandak = random(this.yntrelVandak(0));
        if (this.energy >= 20 && Xxyvandak) {
            var norXxy = new Xxy(Xxyvandak[0], Xxyvandak[1]);
            XxyArr.push(norXxy);
            matrix[Xxyvandak[1]][Xxyvandak[0]] = 4;
            this.energy-=10;
        }
    }
    mahanal() {
        if (this.energy == 0) {
            matrix[this.y][this.x] = 5
            for (var i in XxyArr) {
                if (XxyArr[i].x == this.x && XxyArr[i].y == this.y) {
                    XxyArr.splice(i, 1);
                }
            }
        }
    }
}
//---------------------------------------------------------------------------------
class Qaraker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = [];
        this.index = 6;
        this.energy = 15;
    }

    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y - 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {

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
            this.energy-=10;
        }
    }
    mahanal() {
        if (this.energy == 0) {
            matrix[this.y][this.x] = 0
            for (var i in QarakerArr) {
                if (QarakerArr[i].x == this.x && QarakerArr[i].y == this.y) {
                    QarakerArr.splice(i, 1);
                }
            }
        }
    }
}