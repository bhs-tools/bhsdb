const login_url = process.env.CANVAS_URL+"/login/oauth2/auth?client_id="+process.env.CANVAS_CLIENT_ID+"&response_type=code&state={}&redirect_uri="+process.env.REDIRECT_URI
export default async function login(req, res) {
    return res.redirect(login_url.replace("{}",req.query.id))
}