const core = require('@actions/core');
const github = require('@actions/github');

let Parser = require('rss-parser');
let parser = new Parser();
const { formatToMarkdown, replaceMd } = require('./helper')

const getRSSFeed = async (feedURL) => {
  let feed = await parser.parseURL(feedURL);
  return feed.items
}

try {
  const feedURL = core.getInput('feed_url');
  console.log(`Getting RSS Feed url: ${feedURL}!`);
  const feed = getRSSFeed(feedURL)

  const mdFeed = formatToMarkdown(feed, 5)
  console.log(`Formatting feed to md: ${mdFeed}!`);
  

  console.log(`Writing to readme`);
  replaceMd('README.md', mdFeed)
  console.log(`Written to readme`);


  
  // 1) use octokit/core to push changes
//https://github.com/theboi/github-update-readme/blob/master/index.js

  // 2) write changes to readme file then use a push action in next
//https://medium.com/analytics-vidhya/create-github-actions-and-be-smart-f1e6b9cc9bfa



  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}

