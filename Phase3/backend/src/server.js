import express from'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import authRouter from './routes/authRoute.js'
import galleryRouter from './routes/galleryRoute.js'
import villageRouter from './routes/villageRoute.js'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './schemas/index.js'
import { resolvers } from './resolvers/index.js'
import { GallerySchema } from './schemas/GallerySchema.js'
import resolversGallery from './resolvers/GalleryResolver.js'
import { VillageSchema } from './schemas/VillageSchema.js'
import resolversVillage from './resolvers/VillageResolver.js'

dotenv.config({path: '../.env'})
connectDB()   
const PORT = process.env.PORT
const app = express()

const apolloServer = new ApolloServer({ typeDefs, resolvers })
const apolloServerGallery = new ApolloServer({ typeDefs: GallerySchema, resolvers: resolversGallery })
const apolloServerVillage = new ApolloServer({ typeDefs: VillageSchema, resolvers: resolversVillage })

await apolloServer.start()
await apolloServerGallery.start()
await apolloServerVillage.start()
apolloServer.applyMiddleware({ app })
apolloServerGallery.applyMiddleware({ app, path: '/gallerygraphql' })
apolloServerVillage.applyMiddleware({ app, path: '/villagegraphql' })

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175']}))
app.use(express.json()) 
app.use('/api', authRouter)
app.use('/gallery', galleryRouter)
app.use('/village', villageRouter)

app.listen( PORT, () => {
    console.log(`Server running at http://localhost:${PORT}${apolloServer.graphqlPath}`)
})