var init_amt = 0;
var mth_amt = 500;
var int_rate = 0.08;
var years = [1, 3, 5, 10, 20, 25];

calculation = {
	invest: function(init_amt, mth_amt, int_rate, years) {
    var init_amt = init_amt;
		var mth_amt = mth_amt;
    var int_rate = int_rate;
    var months = years*12;

    // console.log("initial amount: " + init_amt);
    // console.log("monthly contribution: " + mth_amt);
    // console.log("interest rate: " + int_rate);
    // console.log("months investment: " + months);

    for (var i = 0; i < months; i++) {
      var mth_int = (init_amt * int_rate)/12;
      init_amt = init_amt + mth_amt + mth_int;
    }

    return init_amt;
	}
}

// console.log("after x years: " + calculation.invest(init_amt, mth_amt, int_rate, years));
function multiYears() {
    for (var p = 0; p < years.length; p++) {
        console.log("after " + years[p] + " years: " + calculation.invest(init_amt, mth_amt, int_rate, years[p]));
    }
}

multiYears();