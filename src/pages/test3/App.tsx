import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
//
const Test3: FC = (props) => {
    return (
    <html>
    <body>
        <h1>Test3</h1>
        <div id="root"></div>
        <hr class="my-2" />
        <div id="root2"></div>
        {/* JS */}
        {import.meta.env.PROD ? (
            <script  type="module" src="/static/Page3.js"></script>
        ) : (
            <script type="module" src="/src/client/Page3.ts"></script>
        )}        
    </body>
    </html>
    )
}
export default Test3;
