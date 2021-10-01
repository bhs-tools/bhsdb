const StudentVue = require("studentvue.js")
import { runMiddleware,  generateError, generateResp } from '../../lib/util'
import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

export default async function get_student_info(req, res) {
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
            res.status(200).json(generateResp(data["StudentInfo"]))
            return
        });
}