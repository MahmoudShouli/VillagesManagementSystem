import { Server } from 'socket.io';

const configureSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: ['http://localhost:5173', 'http://localhost:5174'],
            methods: ["GET", "POST"],
        },
    });

    io.on("connection", (socket) => {

        socket.on("send_message", (data) => {
            socket.broadcast.emit("receive_message", data);
        });

        socket.on("disconnect", () => {
            //
        });
    });
};

export default configureSocket;
