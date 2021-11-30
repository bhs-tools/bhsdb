import { get_school_info as servervue_get_school_info } from '../../lib/servervue'
import Cors from 'cors'
import { runMiddleware, generateError, generateResp } from '../../lib/util'
// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'HEAD'],
})

export default async function get_school_info(req, res) {
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
    let data = {}
    try {
        data = await servervue_get_school_info(req.body.username, req.body.password)
    } catch (e) {
        if (e.code == "STUDENTVUE") {
            res.status(200).json(generateError(e.message,"STUDENTVUE_ERROR"))
            return
        }
        else {
            throw e;
        }
    }
    res.status(200).json(generateResp(data["StudentSchoolInfoListing"]))
    return
}