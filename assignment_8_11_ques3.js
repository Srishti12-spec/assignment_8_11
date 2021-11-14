function paint_wall(n, h, w) {
    var area = h * w;
    if (area % n == 0) {
        return area / n;
    } else {
        return (area / n) + 1;
    }
}

var n = 10;
var h = 8;
var w = 9;

var total_wall_paint = paint_wall(n, h, w);
console.log(total_wall_paint);