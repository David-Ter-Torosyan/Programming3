class Xxy extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.tariq = 0;
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
    chooseCell(character) {
        this.stanalNorKordinatner();
        return super.chooseCell(character);
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
            this.energy -= 10;
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
