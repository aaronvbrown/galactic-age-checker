export default class GalacticAge {
    constructor(earthAge, planet = 'earth', lastBirthday = 0, futureBirthday = earthAge) {
        this.earthAge = earthAge;
        this.planet = planet;
        this.lastBirthday = lastBirthday;
        this.futureBirthday = futureBirthday;
        this.yearConversions = {
            earth: 1,
            mercury: .24,
            venus: .62,
            mars: 1.88,
            jupiter: 11.86
        }
    }

    convertedAge() {
        return (this.yearConversions[this.planet] * this.earthAge);
    }

    yearsSincePastBirthday() {
        return ((this.earthAge - this.lastBirthday) / this.yearConversions[this.planet]);
    }

    yearsUntilFutureBirthday() {
        return ((this.futureBirthday - this.earthAge) / this.yearConversions[this.planet]);
    }
}