import { get_gradebook as servervue_get_gradebook } from '../../lib/servervue'
import Cors from 'cors'
import { runMiddleware,  generateError, generateResp } from '../../lib/util'
// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

export default async function get_grades(req, res) {
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
    let term = undefined
    if ("term" in req.body) {
        term = req.body.term
    }
    let data = {}
    try {
        data = await servervue_get_gradebook(req.body.username, req.body.password, term)
    } catch (e) {
        if (e.code == "STUDENTVUE") {
            res.status(200).json(generateError(e.message,"STUDENTVUE_ERROR"))
            return
        }
        else {
            throw e;
        }
    }
    res.status(200).json(generateResp(data["Gradebook"]))
    return
}