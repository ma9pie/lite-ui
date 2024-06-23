import { firstToUpper } from '@/utils';

describe('Util test', () => {
  test('firstToUpper', () => {
    const result = firstToUpper('test');
    expect(result).toEqual('Test');
  });
});
