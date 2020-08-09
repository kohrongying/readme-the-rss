// test if able to get the feed
// test if able to extract out the title and URL

const { items, oldContent, newContent, existingContent, noTags } = require('./stub')
const { formatToMarkdown, replaceMd, spliceMd } = require('../helper')
const test = require('ava');
const fs = require('fs')


test('Format to markdown with x number of posts', t => {
  const num = 5
  const string = formatToMarkdown(items, num)
  t.is(string, 
`- [This is my title](http://example.com)
- [This is my title](http://example.com)
- [This is my title](http://example.com)
- [This is my title](http://example.com)
- [This is my title](http://example.com)
`)
});

test('splicing md', t => {
  const postsMd = `
- [This is my title](http://example.com)
- [This is my title](http://example.com)
`
  const updated = spliceMd(oldContent, postsMd)
  t.is(updated, newContent)
})

test('splicing md with existing content', t => {
  const postsMd = `
- [This is my title](http://example.com)
- [This is my title](http://example.com)
`
  const updated = spliceMd(existingContent, postsMd)
  t.is(updated, newContent)
})

test('Return original content if tags do not exist', t => {
  const postsMd = `
- [This is my title](http://example.com)
- [This is my title](http://example.com)
`
  const updated = spliceMd(noTags, postsMd)
  t.is(updated, noTags)
})

test('bar', async t => {
	const bar = Promise.resolve('bar');
	t.is(await bar, 'bar');
});