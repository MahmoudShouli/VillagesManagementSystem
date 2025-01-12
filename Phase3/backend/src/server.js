import express from'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import authRouter from './routes/authRoute.js'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './schemas/schema.js'
import { resolvers } from './resolvers/resolver.js'

dotenv.config({path: '../.env'})
connectDB()   
const PORT = process.env.PORT
const app = express()

const apolloServer = new ApolloServer({ typeDefs, resolvers })

await apolloServer.start()
apolloServer.applyMiddleware({ app })

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174']}))
app.use(express.json()) 
app.use('/api', authRouter)

app.listen( PORT, () => {
    console.log(`Server running at http://localhost:${PORT}${apolloServer.graphqlPath}`)
})