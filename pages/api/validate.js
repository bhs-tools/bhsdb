import { get_student_info as servervue_get_student_info } from '../../lib/servervue'
import Cors from 'cors'
import { runMiddleware, generateError, generateResp } from '../../lib/util'
// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'HEAD'],
})


export default async function validate(req, res) {
    await runMiddleware(req, res, cors)
    if (req.method != 'POST') {
        // cry
        res.status(405).json(generateError("Invalid Method", "INVALID_METHOD"))
        return
    }
    if (!("username" in req.body && "password" in req.body)) {
        res.status(400).json(generateError("Missing Content", "INVALID_REQUEST"))
        return;
    }
    try {
        let _ = await servervue_get_student_info(req.body.username, req.body.password) // theres gotta be a better way to check creds
    } catch (e) {
        if (e.code == "STUDENTVUE") {
            res.status(200).json(generateError(e.message,"STUDENTVUE_ERROR"))
            return
        }
        else {
            throw e;
        }
    }
    res.status(200).json(generateResp({}))
    return
}