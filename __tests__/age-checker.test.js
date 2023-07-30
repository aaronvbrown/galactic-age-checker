import GalacticAge from './../src/age-checker.js';

describe(`GalacticAge`, () => {

    test(`should return an object with Earth age`, () => {
        let newGalacticAge = new GalacticAge(1);
        expect(newGalacticAge.earthAge).toEqual(1);
    });

    test(`should return an object with correct Mercury age`, () => {
        let newGalacticAge = new GalacticAge(1);
        expect(newGalacticAge.mercuryAge).toEqual(0.24);
    });

})