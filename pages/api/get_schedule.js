const StudentVue = require("../../lib/svue.js")
import Cors from 'cors'
import { runMiddleware,  generateError, generateResp } from '../../lib/util'
// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

export default async function get_schedule(req, res) {
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
    let term = 0
    if ("term" in req.body) {
    term = req.body.term
    }
    StudentVue.login('https://wa-beth-psv.edupoint.com', req.body.username, req.body.password)
        .then(client => client.getSchedule(term))
        .then((data) => {
            data = JSON.parse(data)
            if (data.hasOwnProperty("RT_ERROR")) {
                res.status(200).json(generateError(data.RT_ERROR.ERROR_MESSAGE,"STUDENTVUE_ERROR"))
                return
            }
            res.status(200).json(generateResp(data["StudentClassSchedule"]))
            return
        });
}
