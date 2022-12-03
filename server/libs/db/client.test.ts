import clientPromise from 'server/libs/db/client';

describe('database client connect', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // Most important - it clears the cache
    process.env = { ...OLD_ENV }; // Make a copy
  });

  afterAll(() => {
    process.env = OLD_ENV; // Restore old environment
  });
  it('cline 연결하기', async () => {
    await expect(clientPromise).resolves.toBeTruthy();
  });

  // NODE_ENV 가 test 로 고정되어 있어서

  it('이미 client 가 연결되어 있는 경우', async () => {
    const client = await clientPromise;
    await expect(clientPromise).resolves.toBe(client);
  });
});

export {};
