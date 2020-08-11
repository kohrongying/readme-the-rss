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
      - uses: actions/checkout@v2
      - name: Get RSS Feed
        uses: kohrongying/readme-the-rss@master
        with:
          feed_url: https://blog.rongying.co/feed.xml
          count: 6 # default 5
      - name: Commit file changes
        run: |
            git config --global user.name 'YOUR_USERNAME'
            git config --global user.email 'YOUR_GMAIL'
            git add .
            git diff --quiet --cached || git commit -m "Update README"    
      - name: Push changes
        uses: ad-m/github-push-action@master
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
```
`git diff --quiet --cached` will exit with 1 (there is difference), else exit with 0 if no difference. 1 will trigger the commit.

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