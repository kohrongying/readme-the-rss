const test = require('ava');

const items = [
  {
    "title": "This is my title",
    "link": "http://example.com"
  },
  {
    "title": "This is my title",
    "link": "http://example.com"
  },
  {
    "title": "This is my title",
    "link": "http://example.com"
  },
  {
    "title": "This is my title",
    "link": "http://example.com"
  },
  {
    "title": "This is my title",
    "link": "http://example.com"
  },
  {
    "title": "This is my title",
    "link": "http://example.com"
  },
  {
    "title": "This is my title",
    "link": "http://example.com"
  },
  {
    "title": "This is my title",
    "link": "http://example.com"
  }
]

exports.oldContent = `
# Hi there 

### About me
- Pronouns
- Work
- Passions

### My latest ramblings
<!-- BLOGPOSTS:START -->
<!-- BLOGPOSTS:END -->

### Contact me
You can reach me at twitter!
`

exports.existingContent = `
# Hi there 

### About me
- Pronouns
- Work
- Passions

### My latest ramblings
<!-- BLOGPOSTS:START -->
- [old title](http://example.com)
- [old title](http://example.com)
<!-- BLOGPOSTS:END -->

### Contact me
You can reach me at twitter!
`

exports.noTags = `
# Hi there 

### About me
- Pronouns
- Work
- Passions

### My latest ramblings

### Contact me
You can reach me at twitter!
`

exports.newContent = `
# Hi there 

### About me
- Pronouns
- Work
- Passions

### My latest ramblings
<!-- BLOGPOSTS:START -->

- [This is my title](http://example.com)
- [This is my title](http://example.com)
<!-- BLOGPOSTS:END -->

### Contact me
You can reach me at twitter!
`
exports.items = items