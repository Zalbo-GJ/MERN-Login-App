import Express  from 'express';
const app = Express()
import connDb from './conn.js';
import cors from 'cors';
const MDB = "mongodb+srv://zalbo:CombinationS@cluster0.pnl8oys.mongodb.net/?retryWrites=true&w=majority"

import routes from './routes/routes.js'
app.use(cors())
app.get('/', (req,res)=>{
    res.send("welcome")
})
app.use(Express.json())



app.use('/api/v1/auth', routes)

const start = async()=>{
    await connDb(MDB)
    app.listen(5000, () => {
    console.log("running successfully")
})
    
}
start()

