# README the RSS
Pulls your most recent blog posts through an RSS feed

## How to use
* Add the following section tags to your `README.md` file

```
## My Blog
<!-- BLOGPOSTS:START -->
<!-- BLOGPOSTS:END -->
```
* Create a file in `.github/workflows/blogposts.yml`
```yml
name: Blog post workflow
on:
  schedule:
    # Runs every day at 3pm UTC (11pm SG)
    - cron: '0 15 * * *'

jobs:
  pull_blog_rss:
    name: Update with latest blog posts
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@3d3c42e5aac5ba805825da76410c181273ba90b1 # v7.0.1
      - name: Get RSS Feed
        uses: kohrongying/readme-the-rss@v2
        with:
          feed_url: https://blog.rongying.co/feed.xml
          count: 6 # default 5
      - name: Commit and push changes
        uses: stefanzweifel/git-auto-commit-action@4a55954c782fc1ea30b9056cd3e7a2b40ca8887d # v7
        with:
          commit_message: "Update README"
```

## Arugments

|Inputs | Default | Description    |
|---|---|---|
|`feed_url`|`""`|Required. RSS Url|
|`count`   |`5`   |Number of posts to display   |
|`readme_path`|`README.md`|Path to readme file|

<!--
How to run

Generate the build file in dist/index.js
npm run build 
-->