var Testme = (function () {
    function Testme(saying) {
        this.saying = "needs a pooh";
        this.name = "David";
        this.saying = saying;
    }
    Testme.prototype.toilet = function () {
        return this.name + " " + this.saying + " RIGHT NOW!";
    };
    return Testme;
})();
var solidBrown = new Testme();
console.log(solidBrown.saying);
var solidBrown = new Testme("is learning typescript");
console.log(solidBrown.toilet());
