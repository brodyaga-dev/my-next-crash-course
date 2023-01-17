export default function handler(req, res) {
    const { method, query } = req;
    console.log("method: ", method, query.params[0], query.params[1], query.params[2]);

    switch(method) {
        case 'GET':
            // Get data
            res.status(200).json({ pageName: "Dashboard Two page API" });
            break;

        case 'POST':
            // Post data
            res.status(200).json({ response: "POST successful" })
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }    
}