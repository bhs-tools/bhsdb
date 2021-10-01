const StudentVue = require("studentvue.js")
import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
  }

function generateError(message,code) {
    return {
        "code": "ERROR",
        "content": {
            "code": code,
            "error": message
        }
    }
}
function generateResp(message) {
    return {
        "code": "SUCCESS",
        "content": message
    }
}

export default async function validate(req, res) {
    await runMiddleware(req,res,cors)
    if (req.method != 'POST') {
        // cry
        res.status(405).json(generateError("Invalid Method","INVALID_METHOD"))
        return
    }
    if (!("username" in req.body && "password" in req.body)) {
        res.status(400).json(generateError("Missing Content","INVALID_REQUEST"))
        return;
    }
    StudentVue.login('https://wa-beth-psv.edupoint.com', req.body.username, req.body.password)
        .then(client => client.getStudentInfo())
        .then((data) => {
            data = JSON.parse(data)
            if (data.hasOwnProperty("RT_ERROR")) {
                res.status(200).json(generateError(data.RT_ERROR.ERROR_MESSAGE,"STUDENTVUE_ERROR"))
                return
            }
            res.status(200).json(generateResp({}))
            return
        });
}