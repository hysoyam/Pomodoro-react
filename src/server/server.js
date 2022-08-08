import express from "express";
import ReactDom from "react-dom/server";
import indexTemplate from "./indexTemplate";
import { App } from "../shared/App";

const port = '3000'
const app = express()

app.use('/static', express.static('./dist/client'))

app.get('/auth', (req, res) => {
    res.send(indexTemplate(ReactDom.renderToString(App())))
})

app.get('*', (req, res) => {
    res.send(indexTemplate(ReactDom.renderToString(App())))
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})
