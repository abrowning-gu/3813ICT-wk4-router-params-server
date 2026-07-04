import express from "express";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { routes } from "./routes.js";
import cors from 'cors';

const APP = express();
const SITEROOT = path.dirname(fileURLToPath(import.meta.url));
const httpServer = http.createServer(APP);

//APP.use(express.static(path.join(SITEROOT,"../demo/dist/demo/browser/")));
APP.use(cors({
    origin: 'http://localhost:4200',
    credentials: true
    }));
    
APP.use(express.json());
routes(APP,SITEROOT)

//Start the server listening for requests.
httpServer.listen(3000,()=>{
    console.log('Starting the HTTP server');
});