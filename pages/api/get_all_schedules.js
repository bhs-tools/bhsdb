import { get_schedule as servervue_get_schedule } from '../../lib/servervue'
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
    let terms = []
    try {
        terms.push(await servervue_get_schedule(req.body.username, req.body.password, 0))
        terms.push(await servervue_get_schedule(req.body.username, req.body.password, 1))
        terms.push(await servervue_get_schedule(req.body.username, req.body.password, 2))
    } catch (e) {
        if (e.code == "STUDENTVUE") {
            res.status(200).json(generateError(e.message,"STUDENTVUE_ERROR"))
            return
        }
        else {
            throw e;
        }
    }
    let classesperterm = terms.map(term => term["StudentClassSchedule"]["ClassLists"]["ClassListing"])
    res.status(200).json(generateResp(classesperterm))
    return
}
