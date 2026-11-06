import express from "express";
import booksRouter from './routers/books.js';


const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('This is the API shop')
})

app.use('/books', booksRouter);

app.listen(port, () => console.log('Server online in http://localhost:' + port),
);