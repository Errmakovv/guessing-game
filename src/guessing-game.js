class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.mmin=min;
        this.mmax=max;
    }

    guess() {
        return Math.ceil((this.mmin+this.mmax)/2);
    }

    lower() {
        this.mmax=this.guess();
    }

    greater() {
        this.mmin=this.guess();
    }
}

module.exports = GuessingGame;
