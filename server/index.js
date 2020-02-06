const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const posts = require('./routes/api/posts')
app.use('/api/posts', posts);

//production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname + '/public/'));
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server started on ' + port));