export default function get_token(req,res) {
    if (process.env.ENABLE_CANVAS == "false" || process.env.ENABLE_CANVAS === undefined) {
        res.status(200).json({ code: "DISABLED"})
        return
    }
    // todo: actually get canvas token from creds in request
}