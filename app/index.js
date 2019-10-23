const express = require('express') ,
morgan = require('morgan'),
cors = require('cors'),
axios = require('axios')

const app = express();

const origin = process.env.NODE_ENV !== 'production' ? "http://localhost:3000" : "https://peoplefetcher.netlify.com";

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin }));

app.get('/', async(req, res) => {
    const count = req.query.count || 20
    const response = await axios.get(`https://randomuser.me/api?results=${count}`);
    res.json({ data: response.data.results}); 
});

app.listen(4000, () => {
    console.log(`Listening on PORT 4000`)

});
