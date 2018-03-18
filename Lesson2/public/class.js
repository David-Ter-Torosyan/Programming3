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