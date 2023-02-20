export default function handler(req, res) {
    //get data that user submitted
    const body = req.body;

    console.log("server's body in receieved request", body);

    //verify user submitted a valid email address
    if(!body.email) {
        //send a HTTP bad request error code
        return res.status(400).json({ data: 'Email missing'})
    }

    //user submitted valid data. sends a HTTP success code
    res.status(200).json({data: body})
}