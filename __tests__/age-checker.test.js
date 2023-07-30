import GalacticAge from './../src/age-checker.js';

describe(`GalacticAge`, () => {

    test(`should return an object with earth age`, () => {
        let newGalacticAge = new GalacticAge(1);
        expect(newGalacticAge.earthAge).toEqual(1);
    });
    
})