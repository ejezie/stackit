import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';


import App from "../src/App"

const PORT = 8080;
const app = express();

app.get("/*", (req, res) => {
    const context = {};
    const app = ReactDOMServer.renderToString(<StaticRouter location={req.url} context={context}><App/></StaticRouter>);

    const indexFile = path.resolve("../build/index.html");
    fs.readFile(indexFile, "utf8", (err, data) => {
        if(err){
            console.error("An error has occured: ", err);
            return res.status(500).send('Opps better luck next time');
        }

        data = data.replace('<div id="root"></div>', `<div id="root">${app}</div>`);
        return res.send(data);
    })
})

app.listen(PORT, ()=> {
    console.log(`server side rendering on port ${PORT}`)
})