const elementKeys: {
  [key: string]: string;
} = {
  'h1': '#',
  'h2': '##',
  'h3': '###',
  'h4': '####',
  'h5': '#####',
  'h6': '######',
  'blockquote': '>',
  'hr': '---',
  '': 'newline',
};

const alloWedKeys = Object.values(elementKeys);

const getTag = (content: string) => String(content?.match(/[^\s]+/) || 'newline');

const getElement = (markDownTag: string, content: string) => {
  const contentSanitized = content.replace(markDownTag, '').trim();

  switch (markDownTag) {
    case elementKeys.hr:
      return <hr />;
    case elementKeys.h1:
      return <h1>{contentSanitized}</h1>;
    case elementKeys.h2:
      return <h2>{contentSanitized}</h2>;
    case elementKeys.h3:
      return <h3>{contentSanitized}</h3>;
    case elementKeys.h4:
      return <h4>{contentSanitized}</h4>;
    case elementKeys.h5:
      return <h5>{contentSanitized}</h5>;
    case elementKeys.h6:
      return <h6>{contentSanitized}</h6>;
    case elementKeys.blockquote:
      return <blockquote>{contentSanitized}</blockquote>;
    default:
      return <p>{content}</p>;
  }
};

export const sanitizeBlocks = (lines: string[]) => {
  const sanitizedBlocks: string[] = [];

  lines.forEach((line, index) => {
    const tag = getTag(line);

    if (tag === 'newline') {
      if (alloWedKeys.includes(getTag(lines[index + 1]))) return;

      let block = lines.slice(index + 1);
      block = block.slice(0, block.indexOf(''));

      sanitizedBlocks.push(block.join('\n'));
      return;
    }

    if (alloWedKeys.includes(tag)) sanitizedBlocks.push(line);
  });

  return sanitizedBlocks;
};

export const translateToHTML = (lines: string[]) => {
  const htmlString: JSX.Element[] = [];

  lines.forEach((content, index) => {
    const tag = getTag(content);
    if (tag === 'newline' && alloWedKeys.includes(getTag(lines[index + 1]))) return;

    htmlString.push(getElement(tag, content));
  });

  return htmlString;
};
