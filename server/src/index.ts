import app from './web/app';

let port = process.env.PORT;

if (process.env.NODE_ENV === 'production') {
  port = '3002';
}


app.listen(port, () => {
  console.log(`web server is listening on ${port}`)
})
