import * as Koa from 'koa';
import * as ReactDOMServer from 'react-dom/server';
import * as React from 'react';

import Index from '../client/src/pages/index';
const app = new Koa();

app.use(async (ctx) => {
    ctx.body =ReactDOMServer.renderToString(<Index />);
});

app.listen(3001 as Number);