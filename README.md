# css-tree-media-query-modifier-demo

## Setup

1. Clone the repo
1. Run `npm ci`
1. Run `node index.js`

For the given CSS
```css
@media screen and (max-width: 992px) {
  body {
    background-color: blue;
  }
}
```

Observe that `MediaQuery` does not return a value for `modifier` when I think it should be `and`
```sh
➜  css-tree-media-query-modifier-demo git:(master) ✗ node index.js 
{
  node: {
    type: 'MediaQuery',
    loc: null,
    modifier: null,
    mediaType: 'screen',
    condition: { type: 'Condition', loc: null, kind: 'media', children: [List] }
  }
}
```