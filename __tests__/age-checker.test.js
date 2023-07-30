import GalacticAge from './../src/age-checker.js';

describe(`GalacticAge`, () => {

    // test(`should return an object with Earth age`, () => {
    //     let newGalacticAge = new GalacticAge(1);
    //     expect(newGalacticAge.earthAge).toEqual(1);
    // });

    test(`should return an object with converted Earth age`, () => {
        let newGalacticAge = new GalacticAge(1);
        expect(newGalacticAge.convertedAge()).toEqual(1);
    });

    test(`should return an object with correct Mercury age`, () => {
        let newGalacticAge = new GalacticAge(1, 'mercury');
        expect(newGalacticAge.convertedAge()).toEqual(0.24);
    });

    test(`should return an object with correct years since past birtday (earth)`, () => {
        let newGalacticAge = new GalacticAge(10, 'earth', 8);
        expect(newGalacticAge.yearsSincePastBirthday()).toEqual(2);
    });

})