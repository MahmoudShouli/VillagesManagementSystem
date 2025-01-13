# Villages Management System

## Introduction
- This is a management website for admins to manage villages information like the village name, region, area and more. A real time chatting system is also available. It contains 4 main pages that we are going to dive deep into. 

## Design and Structure
- This project is divided into two main folders, a frontend folder and a backend folder.
- the frontend section is a component-based architecture where pages are composed of reusable components. So we have a folder for components and a folder for pages.
- frontend/src/main.jsx is the entry point here.
- front server running on http://localhost:5173/
- the backend section has seperate folders for configuration, schemas, resolvers, and routes. 
- nodemon backend/src/index.js starts the server running on http://localhost:3000
- npm run start starts the frontend server
- two terminals to open them simultaneously


## Tech Stack
- React.js library for UI.
- Tailwind CSS for styling.
- NodeJS runtime and ExpressJS web framework.
- MongoDB database and Mongoose.
- GraphQL API's for village information and chatting
- REST API's for authentication and registeration
- Axios for communicating between frontend server and backend server.
- socket.io websockets for real time chatting system.



  
# Database
- We used NoSQL MongoDB because there's no clear relationships in the systems and Mongo provides a lot of flexibilty as everything is stored as documents.
- Our MongoDB database has 6 collections as shown :

    (provide image )

- **admin** contatins info for registered admins. (name, fullname , password)
- **charts** has info for the age distirbution, gender ratios, and population charts in the overview page.
- **gallerys** has info for images in the Gallery page/
- **general info** has info for the overview page.
- **messages** has info for chats between the admins. like the message sender, reciever, content, and timestamp.
- **villages** contains info for villages in the Village Management page.
  


## GraphQL

- We used GraphQL by Apollo Server for precise data fetching with no over or under fetching. We used it to perform multiple queries on villages and messages.
- you can find the resolvers and schemas in the backend/src folder.
- useQuery and useMutation hooks from apollo-client provide the ability to perform GraphQL queries on the client side like these :

  ```javascript
        const CREATE_MESSAGE = gql`
          mutation CreateMessage($sender: String, $receiver: String, $content: String, $timestamp: Date) {
              createMessage(sender: $sender, receiver: $receiver, content: $content, timestamp: $timestamp) {
                  sender
                  receiver
                  content
                  timestamp
              }
          }
      `;
    
        const GET_CHAT = gql`
          query getMessages($sender: String, $receiver: String) {
              messages(sender: $sender, receiver: $receiver) {
                  sender
                  senderFullName
                  receiver
                  content
                  timestamp
              }
          }
      `;


        const [createMessage] = useMutation(CREATE_MESSAGE);
        const { loading, error, data } = useQuery(GET_CHAT, {
          variables: { sender, receiver },
          fetchPolicy: 'network-only', 
        });




## Chatting System

- WebSockets for real time communication using socket.io libary.
- the express app is wrapped inside an http server which is wrapped inside a WebSocket server.
- when two clients open their chats, they are connected.
- messages are updated on the fly and sorted by timestamp.
- useEffect hook is used in client side to listen from server.

  **Note that we use local storage to store the current logged in admin using AdminContext, which is shared for the browser, so if you want to test the chatting you need to open the website on two different browsers and log in from two different admin accounts**










   

