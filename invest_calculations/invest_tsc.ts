class Calculate {

  init_amt: number;
  mth_amt: number;
  int_rate: number;
  years: number;
  months: number;

  constructor ( init_amt: number, mth_amt: number, int_rate: number, years: number ) {
    this.init_amt = init_amt;
    this.mth_amt = mth_amt;
    this.int_rate = int_rate;
    this.months = years*12;
  }

  invest() {
    for (var i = 0; i < this.months; i++) {
      var mth_int = (this.init_amt * this.int_rate) / 12;
      this.init_amt = this.init_amt + this.mth_amt + mth_int;
    }

    return this.init_amt;
  }

}

var myInvestment = new Calculate(0, 500, 0.08, 1);

console.log(myInvestment.invest());