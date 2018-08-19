
const api=process.env.NODE_ENV=="development"?"http://localhost:8081"+"/chatbot":"https://youtube-myapp.herokuapp.com/chatbot";
module.exports={
    chatbotapi:api
}
