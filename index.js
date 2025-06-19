require("dotenv").config();
const express = require("express");
const app = express();

const githubData = {
  login: "CyberAbdul-Siddiqui",
  id: 81949770,
  node_id: "MDQ6VXNlcjgxOTQ5Nzcw",
  avatar_url: "https://avatars.githubusercontent.com/u/81949770?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/CyberAbdul-Siddiqui",
  html_url: "https://github.com/CyberAbdul-Siddiqui",
  followers_url: "https://api.github.com/users/CyberAbdul-Siddiqui/followers",
  following_url:
    "https://api.github.com/users/CyberAbdul-Siddiqui/following{/other_user}",
  gists_url: "https://api.github.com/users/CyberAbdul-Siddiqui/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/CyberAbdul-Siddiqui/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/CyberAbdul-Siddiqui/subscriptions",
  organizations_url: "https://api.github.com/users/CyberAbdul-Siddiqui/orgs",
  repos_url: "https://api.github.com/users/CyberAbdul-Siddiqui/repos",
  events_url:
    "https://api.github.com/users/CyberAbdul-Siddiqui/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/CyberAbdul-Siddiqui/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: null,
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 16,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2021-04-05T05:56:13Z",
  updated_at: "2025-06-18T14:03:29Z",
};

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/instagram", (req, res) => {
  res.send("Welcome to Instagram!");
});

app.get("/login", (req, res) => {
  res.send("<h1>This is a login page</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>This is a YouTube Page</h2>");
});
app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
