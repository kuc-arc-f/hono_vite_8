import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
//
const Test4: FC = (props) => {
    return (
    <div>
        {html`
        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        `}
        <h1>Test4</h1>
        <div id="root"></div>
        <hr />
        {/* JS */}
        {import.meta.env.PROD ? (
            <script type="module" src="/static/Page4.js"></script>
        ) : (
            <script type="module" src="/src/client/Page4.tsx"></script>
        )}        
    </div>
    )
}
export default Test4;
