const express = require("express");
const app = express();

const apiRoutes = require("./routes");

app.use(express.json());

// API versioning
app.use("/api/v1", apiRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Blogify API running"
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

app.use("/api/v1", apiRoutes);