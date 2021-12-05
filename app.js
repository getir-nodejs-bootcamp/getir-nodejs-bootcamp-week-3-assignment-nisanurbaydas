const express = require('express');
const PostRouter = require('./routers/PostRouter');
const UserRouter = require('./routers/UserRouter');
const LoginRouter = require('./routers/LoginRouter');
require('dotenv').config();

//getting a function back from express and we invoke it
const app = express();

app.use(express.json());
app.use(PostRouter);
app.use(UserRouter);
app.use(LoginRouter);


/* app.all('*',(req,res)=>{
    res.status(404).send('<h1>No such page exists</h1>')
})
 */
app.listen(1907, () => {
    console.log('server is listening on port 1907...');
});