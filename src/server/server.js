import express from "express";
import ReactDom from "react-dom/server";
import { App } from "../App";
import indexTemplate from "./indexTemplate";
import { store } from "../store/store";

export const NewStore = store
const port = '3000'
const app = express()

app.use('/static', express.static('./dist/client'))



app.get('/auth', (req, res) => {

    const timeout = new Date(Date.now() + 30 * 60000)

    res
        .cookie('secret', process.env.SECRET, { expires: timeout })
        .cookie('clientId', process.env.CLIENT_ID, { expires: timeout })
        .cookie('code', req.query.code, { expires: timeout })
        .send(indexTemplate(ReactDom.renderToString(App())))

})

app.get('*', (req, res) => {
    res
        .cookie('secret', '')
        .cookie('clientId', '')
        .cookie('code', '')
        .send(
            indexTemplate(ReactDom.renderToString(App()))
        )
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})