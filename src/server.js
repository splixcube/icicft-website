
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicPath = path.join(__dirname, "../public");

app.use(express.static(publicPath));

/* Homepage */
app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

/* Clean URL routing */
app.get("/:page", (req, res) => {
  const page = req.params.page;
  const filePath = path.join(publicPath, `${page}.html`);

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send("Page not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});