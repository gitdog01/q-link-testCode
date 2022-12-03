import { handleGet, handlePost } from 'server/controller/links';
import mockHttp from 'node-mocks-http';

describe('Links Controller', () => {
  it('GET /api/links 쿼리 없이 요청을 보내는 경우', async () => {
    const req = mockHttp.createRequest({
      method: 'GET',
      path: '/api/links',
    });
    const res = mockHttp.createResponse();
    await handleGet(req, res);
    expect(res.statusCode).toBe(404);
  });
  it('GET /api/links 쿼리가 있지만 대상이 없을때 요청을 보내는 경우', async () => {
    const dumpId = 'monomonomonomono';
    const req = mockHttp.createRequest({
      method: 'GET',
      path: '/api/links',
      query: {
        id: dumpId,
      },
    });
    const res = mockHttp.createResponse();
    await handleGet(req, res);
    expect(res.statusCode).toThrow();
  });

  it('POST /api/links 정상처리', () => {
    const dumpBody = {
      url: 'https://www.naver.com',
      contents: '네이버',
      correct: '네이버',
    };
    const req = mockHttp.createRequest({
      method: 'POST',
      path: '/api/links',
      body: dumpBody,
    });
    const res = mockHttp.createResponse();
    handlePost(req, res);
    expect(res.statusCode).toBe(200);
  });

  it('POST /api/links 바디에 데이터가 없을때', async () => {
    const req = mockHttp.createRequest({
      method: 'POST',
      path: '/api/links',
    });
    const res = mockHttp.createResponse();
    await handlePost(req, res);
    expect(res.statusCode).toBe(404);
  });

  it('POST GET /api/links 데이터 넣고 불러오기', () => {
    const dumpBody = {
      url: 'https://www.naver.com',
      contents: '네이버',
      correct: '네이버',
    };
    const req = mockHttp.createRequest({
      method: 'POST',
      path: '/api/links',
      body: dumpBody,
    });
    const res = mockHttp.createResponse();
    handlePost(req, res);
    const insertedId = res._getData().data;
    const req2 = mockHttp.createRequest({
      method: 'GET',
      path: '/api/links',
      query: {
        id: insertedId,
      },
    });
    const res2 = mockHttp.createResponse();
    handleGet(req2, res2);
    expect(res2.statusCode).toBe(200);
  });
});
