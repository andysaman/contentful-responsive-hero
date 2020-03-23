// heroImageSet borrowed from ww-web-next HubHero component
const heroImageSet = image => {
  return [
    {
      src: `${image}?w=480&h=621&fm=webp&fit=fill 1x, ${image}?w=960&h=1242&fm=webp&fit=fill 2x`,
      media: "(max-width: 480px)",
      type: "image/webp"
    },
    {
      src: `${image}?w=480&h=621&fm=jpg&fit=fill 1x, ${image}?w=960&h=1242&fm=jpg&fit=fill 2x`,
      media: "(max-width: 480px)",
      type: "image/jpeg"
    },
    {
      src: `${image}?w=768&h=788&fm=webp&fit=fill 1x, ${image}?w=1536&h=1576&fm=webp&fit=fill 2x`,
      media: "(max-width: 768px)",
      type: "image/webp"
    },
    {
      src: `${image}?w=768&h=788&fm=jpg&fit=fill 1x, ${image}?w=1536&h=1576&fm=jpg&fit=fill 2x`,
      media: "(max-width: 768px)",
      type: "image/jpeg"
    },
    {
      src: `${image}?w=1024&fm=webp 1x, ${image}?w=2048&fm=webp 2x`,
      media: "(max-width: 1024px)",
      type: "image/webp"
    },
    {
      src: `${image}?w=1024&fm=jpg 1x, ${image}?w=2048&fm=jpg 2x`,
      media: "(max-width: 1024px)",
      type: "image/jpeg"
    },
    {
      src: `${image}?w=1440&fm=webp 1x, ${image}?w=2880&fm=webp 2x`,
      media: "(max-width: 1440px)",
      type: "image/webp"
    },
    {
      src: `${image}?w=1440&fm=jpg 1x, ${image}?w=2880&fm=jpg 2x`,
      media: "(max-width: 1440px)",
      type: "image/jpeg"
    },
    {
      src: `${image}?fm=webp`,
      type: "image/webp"
    },
    {
      src: `${image}?fm=jpg`,
      type: "image/jpeg"
    }
  ];
};

const genHTML = imageSet => {
  return (
    "<picture>" +
    imageSet
      .map((image, index) => {
        if (index === imageSet.length - 1) {
          return `<img src="${image.src}" />
      `;
        }
        return `<source srcSet="${image.src}"${image.media ? " media=" + image.media : ""}${
          image.type ? " type=" + image.type : ""
        } />
    `;
      })
      .join("") +
    "</picture>"
  );
};

// User passes the URL
const passedURL = process.argv[2];

// We spit out the HTML
let response = genHTML(heroImageSet(passedURL));

console.log(response);
