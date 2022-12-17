import axios from "axios";
import cheerio from "cheerio";
import express from "express";
const app = express();
const port = process.env.PORT || 3000;

// app.get("/", (req, res) => res.send("Hello World!"));
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
axios("htt")
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const statsTable = $(".wikitable.sortable").eq(0);
    console.log(statsTable.html());
  })
  .catch(console.error);
