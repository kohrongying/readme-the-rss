const fs = require("fs")

const START_ANNOTATION = "<!-- BLOGPOSTS:START -->"
const END_ANNOTATION = "<!-- BLOGPOSTS:END -->"


// add default paramter
const formatToMarkdown = (feed, num) => {
  let md = ""
  for (let i = 0; i < num; i += 1) {
    const item = feed[i]
    md += `- [${item.title}](${item.link})\n`
  }
  return md
}

const replaceMd = (filepath, newContent) => {
  fs.readFile(filepath, "utf8", (err, data) => {
    const fileContents = data.toString()
    const newFileContent = spliceMd(fileContents, newContent)
    // return data
  })
  // return toReturn
  // return fileContent
}

const spliceMd = (oldContent, postsMd) => {
  const startIndex = oldContent.indexOf(START_ANNOTATION)
  const endIndex = oldContent.indexOf(END_ANNOTATION)
  if (startIndex > 0 && endIndex > 0) {
    const start = oldContent.slice(0, startIndex + START_ANNOTATION.length)
    const end = oldContent.slice(endIndex)
    return start + postsMd + end
  } else {
    return oldContent
  }
}

exports.formatToMarkdown = formatToMarkdown
exports.replaceMd = replaceMd
exports.spliceMd = spliceMd