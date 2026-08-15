let Parser = require('rss-parser');
let parser = new Parser();
const { formatToMarkdown, replaceMd } = require('./helper')

const getRSSFeed = async (feedURL) => {
  let feed = await parser.parseURL(feedURL);
  return feed.items
}

const main = async() => {
  const core = await import(/* webpackMode: "eager" */ '@actions/core');
  try {
    const count = Number.parseInt(core.getInput('count'))
    const feedURL = core.getInput('feed_url');
    const readmePath = core.getInput('readme_path')

    console.log(`Getting RSS Feed url: ${feedURL}!`);
    const feed = await getRSSFeed(feedURL)

    console.log(`Formatting ${count} blog posts to md!`);
    const mdFeed = formatToMarkdown(feed, count)

    console.log(`Writing to readme`);
    await replaceMd(readmePath, mdFeed)

    console.log(`Written to readme`);
  } catch (error) {
    core.setFailed(error.message);
  }

}

main()