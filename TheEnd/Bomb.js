class Bomb extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.tariq = 0;
    }
    paytel() {
        matrix[this.x - 1][this.y - 1] = 0;
        matrix[this.x][this.y - 1] = 0;
        matrix[this.x + 1][this.y - 1] = 0;
        matrix[this.x - 1][this.y] = 0;
        matrix[this.x + 1][this.y] = 0;
        matrix[this.x - 1][this.y + 1] = 0;
        matrix[this.x][this.y + 1] = 0;
        matrix[this.x + 1][this.y + 1] = 0;
        matrix[this.x - 2][this.y - 2] = 0;
        matrix[this.x][this.y - 2] = 0;
        matrix[this.x + 2][this.y - 2] = 0;
        matrix[this.x - 2][this.y] = 0;
        matrix[this.x + 2][this.y] = 0;
        matrix[this.x - 2][this.y + 2] = 0;
        matrix[this.x][this.y + 2] = 0;
        matrix[this.x + 2][this.y + 2] = 0;
        this.energy=0;
    }
    mahanal() {
        if (this.energy == 0) {
            matrix[this.y][this.x] = 0;
            for (var i in bombArr) {
                if (bombArr[i].x == this.x && bombArr[i].y == this.y) {
                    bombArr.splice(i, 1);
                }
            }
        }
    }
}
