const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const reactBuild = path.join(__dirname, "build");
app.use(express.static(reactBuild));

app.get("*", async (req, res) => {
  res.sendFile(path.join(reactBuild, "index.html"));
});

app.listen(PORT, ()=> console.log('server is running on ' + PORT))