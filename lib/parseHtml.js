import PropTypes from 'prop-types';
import parse from 'html-react-parser';

function ParseHtml({ documentObject }) {
  let postContent = ``;

  // Iterate over block objects
  documentObject.map((block) => {
    if (block.type === 'paragraph') {
      postContent += `<p>`;
      // Separate out item types and handle appropriately
      block.children.map((item) => {
        if (item.text) {
          postContent += `${item.text}`;
        }
        if (item.type === 'link') {
          postContent += `<a href="${item.href}">${item.children[0].text}</a>`;
        }
        return postContent;
      });
      postContent += `</p>`;
    } else if (block.type === 'code') {
      postContent += `<blockquote class="codeStyles">${block.children[0].text}</blockquote>`;
    }

    return postContent;
  });

  return <div className="e-content">{parse(postContent)}</div>;
}

export default ParseHtml;

ParseHtml.propTypes = {
  documentObject: PropTypes.array,
};
