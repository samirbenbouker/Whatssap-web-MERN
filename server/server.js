import express from "express";
import mongoose from "mongoose";

import MessagesRouter from './resources/message/message.router.js'
import pusher from "./pusher.js";
import ENV from "./env.js";

// App Config
const app = express()

const db = mongoose.connection
db.once("open", () => {
    console.log("DB connected")

    const msgCollection = db.collection("messagecontents")
    const changeStream = msgCollection.watch()

    changeStream.on('change', (change) => {
        if(change.operationType === "insert") {
            const messageDetails = change.fullDocument
            pusher.trigger("messages", "inserted", 
                {
                    user: messageDetails.user,
                    message: messageDetails.message
                }   
            )
        } else {
            console.log("Error triggering Pusher")
        }
    })
})
  
// Middleware
app.use(express.json())

// Api routes
app.use("/message", MessagesRouter)

// DB Config
mongoose.connect(ENV.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (!err) {
        app.listen(ENV.PORT, () => {
            console.log(`Server running in localhost:${ENV.PORT}`)
        })
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
