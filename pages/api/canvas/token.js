const redis = require("redis");
const client = redis.createClient({host: process.env.REDIS_URL, port: 6379});
client.on("error", function(error) {
    console.error(error);
  });
export default async function token(req, res) {
    var code = req.query.code
    if ("error" in req.query) {
        // oh shit
        res.redirect("/")
        return
    }
    if (code == undefined) {
        res.status(400).send('No code')
        return
    }
    console.log('code: ' + code)
    var url = process.env.CANVAS_URL + "/login/oauth2/token"
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            grant_type: "authorization_code",
            client_id: process.env.CANVAS_CLIENT_ID,
            client_secret: process.env.CANVAS_CLIENT_SECRET,
            redirect_uri: process.env.REDIRECT_URI,
            code: code
        })
        }).then(resp => resp.json()).then(resp => {
            var state = req.query.state
            client.set(state+"_refresh",resp.refresh_token, () => {
                client.set(state+"_access",resp.access_token,"EX",resp.expires_in, () => {
                    res.redirect("/api/canvas/auth_success")
                })
            })
        })
}