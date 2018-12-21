export const initialValue = {
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              },
            ],
          },
        ],
      },
    ],
  },
};

export let blockquoteType = 'blockquote';
export let linkType = 'link';
export let listItemType = 'list-item';
export let orderedListType = 'ordered-list';
export let unorderedListType = 'unordered-list';
export let imageType = 'image';
export let embedType = 'embed';
export let headingType = 'heading';
export let defaultType = 'paragraph';
export let captionType = 'caption';
