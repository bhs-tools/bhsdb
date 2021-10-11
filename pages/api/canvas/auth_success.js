export default async function auth_success(req, res) {
    if (process.env.ENABLE_CANVAS == "false" || process.env.ENABLE_CANVAS === undefined) {
        res.status(200).send("CANVAS DISABLED")
        return
    }
    return res.send("auth ok!")
}