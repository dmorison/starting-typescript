var InvestmentVars = (function () {
    function InvestmentVars(init_amt, mth_inv, int_rate, years) {
        this.init_amt = init_amt;
        this.mth_inv = mth_inv;
        this.int_rate = int_rate;
        this.months = this.calculateMonths(years);
    }
    InvestmentVars.prototype.calculateMonths = function (years) {
        var returnArray = new Array();
        for (var i = 0; i < years.length; i++) {
            returnArray.push(years[i] * 12);
        }
        return returnArray;
    };
    return InvestmentVars;
})();
function calculateInvestmentValue(values) {
    console.log(values);
    for (var i = 0; i < values.months.length; i++) {
        var amount = values.init_amt;
        for (var p = 0; p < values.months[i]; p++) {
            var interest = (amount * values.int_rate) / 12;
            amount = amount + interest + values.mth_inv;
        }
        console.log('after ' + (values.months[i] / 12) + ' years your total investment will be: ' + amount);
    }
}
var my_mths = new InvestmentVars(0, 500, 0.08, [1, 3, 5, 10, 20, 25]);
calculateInvestmentValue(my_mths);
