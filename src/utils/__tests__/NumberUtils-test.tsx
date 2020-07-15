import {randomizeNumber} from '../NumberUtils';

describe('NumberUtils', () => {
  describe('randomizeNumber', () => {
    it('should return 3', () => {
      expect(randomizeNumber(2, 3, 2)).toStrictEqual(3);
    });

    it('should return 2', () => {
      expect(randomizeNumber(2, 3, 3)).toStrictEqual(2);
    });

    it('should return the minimumNumber, when maximumNumber is smaller than minimumNumber', () => {
      expect(randomizeNumber(2, 1, 2)).toStrictEqual(2);
    });
  });
});
