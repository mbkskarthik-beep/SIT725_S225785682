const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.static('public')); 
app.use('/api', routes);           

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
