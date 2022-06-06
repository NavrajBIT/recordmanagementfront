import { newForm } from "../../../newForm"

export default function handler(req, res) {
    if(req.method === 'GET'){
        res.status(200).json({ name: 'John Doe' })
    } else if(req.method === 'POST'){
        const formReceived = req.body.formReceived;
        const newFR = {
            id: Date.now(),
            data: formReceived
        }
        newForm.push(newFR)
        res.status(201).json(newFR)
    }
}