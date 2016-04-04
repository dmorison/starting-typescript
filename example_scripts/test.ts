class Testme {
	name: string;
	saying: string = "needs a pooh";

	constructor (saying: string) {
		this.name = "David";
		this.saying = saying;
	}

	toilet() {
		return this.name + " " + this.saying + " RIGHT NOW!";
	}
}

var solidBrown = new Testme();

console.log(solidBrown.saying);

var solidBrown = new Testme("is learning typescript");

console.log(solidBrown.toilet());