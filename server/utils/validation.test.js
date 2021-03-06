const expect = require('expect');
var {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var str = 898;
    expect(isRealString(str)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var str = '    ';
    expect(isRealString(str)).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    var str = 'sung hokage';
    expect(isRealString(str)).toBe(true);
  });
});
