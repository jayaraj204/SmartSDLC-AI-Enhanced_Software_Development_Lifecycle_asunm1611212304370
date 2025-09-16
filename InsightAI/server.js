const express = require('express');
const { exec } = require('child_process');

const app = express();
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.send('Evaluator service is running!');
});

// Example endpoint to evaluate a story
app.post('/evaluate', (req, res) => {
  const story = req.body.story || '';
  
  // Replace this command with the actual evaluator script in your repo
  exec(`node run_evaluator.js "${story}"`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return res.status(500).send(stderr);
    }
    res.send(stdout);
  });
});

// Listen on Cloud Run port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Evaluator listening on port ${PORT}`);
});
