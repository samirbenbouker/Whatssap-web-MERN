import mongoose from "mongoose";

import Messages from "./message.model.js";

export const getMessage = (req, res) => {
    Messages.find((err, data) => {
        if(err)
            res.status(500).send(err)
        else 
            res.status(200).send(data)
    })
}

export const postMessage = (req, res) => {
    const dbMessaage = req.body

    Messages.create(dbMessaage, (err, data) => {
        if(err)
            res.status(500).send(err)
        else 
            res.status(201).send(`new message created: \n ${data}`)
    })
}