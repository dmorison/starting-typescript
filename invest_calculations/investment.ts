class InvestmentVars {
	
	months: number[];

	constructor(public init_amt, public mth_inv, public int_rate, years) {
		this.months = this.calculateMonths(years);
	}

	calculateMonths(years) {
		var returnArray: number[] = new Array();
		for (var i = 0; i < years.length; i++) {
			returnArray.push(years[i] * 12);
		}
		return returnArray;
	}
}

interface values {
	init_amt: number;
	mth_inv: number;
	int_rate: number;
	months: number[];
}

function calculateInvestmentValue(values: values) {
	console.log(values);

	for (var i = 0; i < values.months.length; i++) {
		var amount: number = values.init_amt;
		for (var p = 0; p < values.months[i]; p++) {
			var interest: number = (amount * values.int_rate) / 12;
			amount = amount + interest + values.mth_inv;			
		}
		console.log('after ' + (values.months[i] / 12) + ' years your total investment will be: ' + amount);
	}
}

var my_mths = new InvestmentVars(0, 500, 0.08, [1,3,5,10,20,25]);

calculateInvestmentValue(my_mths);