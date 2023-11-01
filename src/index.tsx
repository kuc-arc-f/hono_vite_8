import { Hono } from 'hono'

const app = new Hono()

import Test1 from './pages/test/App';
import Test3 from './pages/test3/App';

//
app.get('/', (c) => {
  return c.render(<h1>Hello!</h1>)
})
/* test */
app.get('/test1', async (c) => { 
  return c.html(<Test1 items={[]} />);
});
app.get('/test3', async (c) => { 
  return c.html(<Test3 items={[]} />);
});

export default app
