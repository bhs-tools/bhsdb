import { pxp } from "./pxp.js"
import { HttpClient } from "soap/lib/http"
function request(rurl, data, callback, exheaders, exoptions) {
    console.log(rurl)
    if (rurl.endsWith("?WSDL")) {
        callback(null, { status: 200, data: pxp }, pxp)
    }
    else {
        (new HttpClient({})).request(rurl, data, (err, response, definition) => {
            callback(err,response,definition)
        }, exheaders, exoptions)
    }
}

export const patched = {
    request: request
}