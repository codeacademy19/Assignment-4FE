import postForms from '.';

const axios = require('axios');

describe('the getForms function', () => {
  const mockPosts = {
    data: [{
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    }],
  };
  let getMock;
  beforeAll(() => {
    getMock = jest.spyOn(axios, 'post');
    getMock.mockImplementation(() => mockPosts);
  });
  afterAll(() => {
    getMock.mockRestore();
  });
  it('should return an array', async () => {
    const posts = await postForms();
    expect(posts instanceof Array).toBe(true);
  });

  it('should return the mock posts', async () => {
    const posts = await postForms();
    expect(posts).toEqual(mockPosts.data);
  });
});
