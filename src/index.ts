import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from './routes';


const app = express();

// applying the routes to the basepath '/api'
app.use('/api', routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('what up bro World!')
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})