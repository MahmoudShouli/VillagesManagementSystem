import express from 'express';
import http from 'http';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schemas/schema.js';
import { resolvers } from './resolvers/resolver.js';
import authRouter from './routes/authRoute.js';
import configureSocket from './config/socket.js';

const startServer = async () => {
    const app = express();
    const PORT = process.env.PORT || 5000;

    
    app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174'] }));
    app.use(express.json());
    app.use('/api', authRouter);

    
    const apolloServer = new ApolloServer({ typeDefs, resolvers });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });


    const server = http.createServer(app);
    configureSocket(server);

    server.listen(PORT, () => {
        console.log(`Server listening at http://localhost:${PORT}${apolloServer.graphqlPath}`);
    });
};

export default startServer;
