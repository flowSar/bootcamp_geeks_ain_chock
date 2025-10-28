import express from "express";
import { fetchPosts } from "./data/dataService.js";

const app = express();

app.get("/api/posts", async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log("Data successfully loaded and sent as response.");
    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
