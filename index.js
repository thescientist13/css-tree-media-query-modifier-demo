import { parse, walk } from 'css-tree';

const contents = `
  @media screen and (max-width: 992px) {
    body {
      background-color: blue;
    }
  }
`;

const ast = parse(contents, {
  onParseError(error) {
    console.log(error.formattedMessage);
  }
});

walk(ast, {
  enter: function (node, item) {
    if (node.type === 'MediaQuery') {
      console.log({ node })
    }
  }
});