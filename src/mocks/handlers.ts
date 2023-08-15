import { rest } from 'msw';

export const handlers = [
  rest.get(
    'https://my-json-server.typicode.com/typicode/demo/posts',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          { id: 1, title: 'Post 1', body: 'Body of post 1' },
          { id: 2, title: 'Post 2', body: 'Body of post 2' },
        ])
      );
    }
  ),
];
