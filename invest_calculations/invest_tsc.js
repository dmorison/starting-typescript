var Calculate = (function () {
    function Calculate(init_amt, mth_amt, int_rate, years) {
        this.init_amt = init_amt;
        this.mth_amt = mth_amt;
        this.int_rate = int_rate;
        this.months = years * 12;
    }
    Calculate.prototype.invest = function () {
        for (var i = 0; i < this.months; i++) {
            var mth_int = (this.init_amt * this.int_rate) / 12;
            this.init_amt = this.init_amt + this.mth_amt + mth_int;
        }
        return this.init_amt;
    };
    return Calculate;
})();
var myInvestment = new Calculate(0, 500, 0.08, 1);
console.log(myInvestment.invest());
