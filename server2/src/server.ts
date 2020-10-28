import * as http from 'http';
import app from './app';
// import * as database from './database';
import * as path from 'path'
import * as dotenv from 'dotenv'

dotenv.config({ path: path.join(__dirname, '../.env') })

const { PORT } = process.env;

// database.getConnection();

http.createServer(app).listen(PORT || 8080, () => {
  console.log(`Server is listening to ${PORT}`);
});