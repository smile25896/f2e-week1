import { createBrowserHistory as createHistory } from "history";

const history = createHistory({ basename: process.env.PUBLIC_URL });

export default history;
