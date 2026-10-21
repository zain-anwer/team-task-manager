import express from 'express'
import authRoutes from './routes/auth.route.js'
import taskRoutes from './routes/task.route.js'
import teamRoutes from './routes/team.route.js'

const app = express()
app.use(express.json())

/* mounting routes */
app.use('/api/auth',authRoutes)
app.use('/api/task',taskRoutes)
app.use('/api/team',teamRoutes)

/* health api */
app.get("/",(req,res) => { res.status(200).json({'message':'Server Started'}) })

/* only for starting the server and server side console messages */
app.listen(3000,() => {
        console.log("server listening at port 3000")
    }
)