export default async function get_url(req, res) {
    res.status(200).send({ url: process.env.CHAT_URL })
}