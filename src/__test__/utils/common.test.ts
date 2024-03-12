import { createUid } from '@/utils';

describe('createUid test', () => {
  test('', () => {
    const uid1 = createUid();
    const uid2 = createUid();
    expect(uid1 !== uid2).toBeTruthy();
  });
});
