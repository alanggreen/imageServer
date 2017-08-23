"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
var staticAlias = require("node-static-alias");
var log4js = require('log4js');
var logger = log4js.getLogger('node-static-alias');
const port = 1395;
var fileServer = new staticAlias.Server('./images', {
    alias: [
        {
            match: '/legoEducation',
            serve: 'legoeducationlogo.png'
        },
        {
            match: '/firstLegoLeague',
            serve: 'FIRSTLego_iconHorz_RGB.gif'
        },
        {
            match: '/challengeTheme',
            serve: 'FIRST-FLL-HYDRO-DYNAMICS-web-logo.png'
        }
    ],
    logger: console
});
http.createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(1395);
console.log('server running on port', port);
//# sourceMappingURL=index.js.map