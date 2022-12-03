import { handleGet, handlePost } from 'server/controller/links';
import mockHttp from 'node-mocks-http';

describe('Links Controller', () => {
  it('쿼리 없이 요청을 보내는 경우', async () => {
    const req = mockHttp.createRequest({
      method: 'GET',
      path: '/api/links',
    });
    const res = mockHttp.createResponse();
    await handleGet(req, res);
    expect(res._getStatusCode()).toBe(404);
  });
});
