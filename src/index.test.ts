import check from '.';

describe('BI', () => {
  it('VALID 8 DIGITS', () => {
    expect(check('00000000 0')).toBe(true);
  });
  it('VALID 7 DIGITS', () => {
    expect(check('0000000 0')).toBe(true);
  });
  it('INVALID 8 DIGITS', () => {
    expect(check('12345678 0')).toBe(false);
  });
  it('INVALID 7 DIGITS', () => {
    expect(check('1234567 0')).toBe(false);
  });
  it('INVALID CHECK DIGIT NOT ZERO', () => {
    expect(check('12345678 1')).toBe(false);
  });
});

describe('CC', () => {
  it('VALID 8 DIGITS', () => {
    expect(check('00000000 0 ZZ4')).toBe(true);
  });
  it('VALID 7 DIGITS', () => {
    expect(check('0000000 0 ZZ4')).toBe(true);
  });
  it('INVALID 8 DIGITS', () => {
    expect(check('12345678 0 ZZ4')).toBe(false);
  });
  it('INVALID 7 DIGITS', () => {
    expect(check('1234567 0 ZZ4')).toBe(false);
  });
});

describe('FORMAT', () => {
  it('WRONG FORMAT', () => {
    expect(() => check('NOT_AN_ID')).toThrowError(
      'The value provided does not match the official format for portuguese IDs',
    );
  });
});
