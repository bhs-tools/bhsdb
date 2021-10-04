// util code goes here
import React from "react";
export var Usercontext = React.createContext({});
export function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}
export function generateError(message, code) {
    return {
        "code": "ERROR",
        "content": {
            "code": code,
            "error": message
        }
    }
}
export function generateResp(message) {
    return {
        "code": "SUCCESS",
        "content": message
    }
}