var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Shape = (function () {
    // name: string;
    function Shape(name, width, height) {
        this.name = name;
        this.area = width * height;
        this.color = "pink";
        // this.name = name;
    }
    ;
    Shape.prototype.shoutout = function () {
        return "I'm " + this.color + " " + this.name + " with an area of " + this.area + " cm squared.";
    };
    return Shape;
})();
var square = new Shape("square", 20, 20);
console.log(square.shoutout());
console.log('Area of Shape: ' + square.area);
console.log('Name of Shape: ' + square.name);
console.log('Color of Shape: ' + square.color);
console.log('Width of Shape: ' + square.width);
console.log('Height of Shape: ' + square.height);
console.log('');
var Shape3D = (function (_super) {
    __extends(Shape3D, _super);
    function Shape3D(name, width, height, length) {
        _super.call(this, name, width, height);
        this.name = name;
        this.volume = length * this.area;
    }
    ;
    Shape3D.prototype.shoutout = function () {
        return "I'm " + this.name + " with a volume of " + this.volume + " cm cube.";
    };
    Shape3D.prototype.superShout = function () {
        return _super.prototype.shoutout.call(this);
    };
    return Shape3D;
})(Shape);
var cube = new Shape3D("cube", 30, 30, 30);
console.log(cube.shoutout());
console.log(cube.superShout());
