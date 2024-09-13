import { parse, walk } from 'css-tree';

// https://developer.mozilla.org/en-US/docs/Web/CSS/@media#syntax
const contents = `
  @media screen and (min-width: 900px) {
    article {
      padding: 1rem 3rem;
    }
  }
`;

const ast = parse(contents);

walk(ast, {
  enter: function (node, item) {
    if (node.type === 'MediaQuery') {
      console.log({ node })
    }
  }
});