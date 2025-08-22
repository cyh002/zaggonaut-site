
export const getCollection = async (collection) => {
  if (collection === 'configuration') {
    return [{
      data: {
        site: {
          name: 'Test Site',
          description: 'A test site',
          image: 'test.png',
        },
        socials: [],
        text: {},
      }
    }];
  }
  return [];
};
