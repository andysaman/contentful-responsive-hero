# contentful-responsive-hero
Generate a picture tag which works with the contentful images API

## Requires
This script requires NodeJS. I recommend [installing node JS with nvm](https://github.com/nvm-sh/nvm#install--update-script).

## Commands
- `node generatePictureTag.js <insert url here>` - use this to generate HTML code for a responsive hero image.

__Example:__

Input: `node generatePictureTag.js https://images.ctfassets.net/usf1vwtuqyxm/38rqUqYdGjL9mHJ7feADdh/b2dcc93338118fe214ef1c28ce1cbea8/shadows_layered.png`

Output:
```
<picture><source srcSet="https://images.ctfassets.net/usf1vwtuqyxm/38rqUqYdGjL9mHJ7feADdh/b2dcc93338118fe214ef1c28ce1cbea8/shadows_layered.png?w=480&h=621&fm=webp&fit=fill 1x, https://images.ctfassets.net/usf1vwtuqyxm/38rqUqYdGjL9mHJ7feADdh/b2dcc93338118fe214ef1c28ce1cbea8/shadows_layered.png?w=960&h=1242&fm=webp&fit=fill 2x" media=(max-width: 480px) type=image/webp />
    <source srcSet="https://images.ctfassets.net/usf1vwtuqyxm/38rqUqYdGjL9mHJ7feADdh/b2dcc93338118fe214ef1c28ce1cbea8/shadows_layered.png?w=480&h=621&fm=jpg&fit=fill 1x, https://images.ctfassets.net/usf1vwtuqyxm/38rqUqYdGjL9mHJ7feADdh/b2dcc93338118fe214ef1c28ce1cbea8/shadows_layered.png?w=960&h=1242&fm=jpg&fit=fill 2x" media=(max-width: 480px) type=image/jpeg />
    <source srcSet="https://images.ctfassets.net/usf1vwtuqyxm/38rqUqYdGjL9mHJ7feADdh/b2dcc93338118fe214ef1c28ce1cbea8/shadows_layered.png?w=768&h=788&fm=webp&fit=fill 1x, https://images.ctfassets.net/usf1vwtuqyxm/38rqUqYdGjL9mHJ7feADdh/b2dcc93338118fe214ef1c28ce1cbea8/shadows_layered.png?w=1536&h=1576&fm=webp&fit=fill 2x" media=(max-width: 768px) type=image/webp />
    <source srcSet="https://images.ctfassets.net/usf1vwtuqyxm/38rqUqYdGjL9mHJ7feADdh/b2dcc93338118fe214ef1c28ce1cbea8/shadows_layered.png?w=768&h=788&fm=jpg&fit=fill 1x, https://images.ctfassets.net/usf1vwtuqyxm/38rqUqYdGjL9mHJ7feADdh/b2dcc93338118fe214ef1c28ce1cbea8/shadows_layered.png?w=1536&h=1576&fm=jpg&fit=fill 2x" media=(max-width: 768px) type=image/jpeg />
    <source srcSet="https://images.ctfassets.net/usf1vwtuqyxm/38rqUqYdGjL9mHJ7feADdh/b2dcc93338118fe214ef1c28ce1cbea8/shadows_layered.png?w=1024&fm=webp 1x, https://images.ctfassets.net/usf1vwtuqyxm/38rqUqYdGjL9mHJ7feADdh/b2dcc93338118fe214ef1c28ce1cbea8/shadows_layered.png?w=2048&fm=webp 2x" media=(max-width: 1024px) type=image/webp />
    <source srcSet="https://images.ctfassets.net/usf1vwtuqyxm/38rqUqYdGjL9mHJ7feADdh/b2dcc93338118fe214ef1c28ce1cbea8/shadows_layered.png?w=1024&fm=jpg 1x, https://images.ctfassets.net/usf1vwtuqyxm/38rqUqYdGjL9mHJ7feADdh/b2dcc93338118fe214ef1c28ce1cbea8/shadows_layered.png?w=2048&fm=jpg 2x" media=(max-width: 1024px) type=image/jpeg />
    <source srcSet="https://images.ctfassets.net/usf1vwtuqyxm/38rqUqYdGjL9mHJ7feADdh/b2dcc93338118fe214ef1c28ce1cbea8/shadows_layered.png?w=1440&fm=webp 1x, https://images.ctfassets.net/usf1vwtuqyxm/38rqUqYdGjL9mHJ7feADdh/b2dcc93338118fe214ef1c28ce1cbea8/shadows_layered.png?w=2880&fm=webp 2x" media=(max-width: 1440px) type=image/webp />
    <source srcSet="https://images.ctfassets.net/usf1vwtuqyxm/38rqUqYdGjL9mHJ7feADdh/b2dcc93338118fe214ef1c28ce1cbea8/shadows_layered.png?w=1440&fm=jpg 1x, https://images.ctfassets.net/usf1vwtuqyxm/38rqUqYdGjL9mHJ7feADdh/b2dcc93338118fe214ef1c28ce1cbea8/shadows_layered.png?w=2880&fm=jpg 2x" media=(max-width: 1440px) type=image/jpeg />
    <source srcSet="https://images.ctfassets.net/usf1vwtuqyxm/38rqUqYdGjL9mHJ7feADdh/b2dcc93338118fe214ef1c28ce1cbea8/shadows_layered.png?fm=webp" type=image/webp />
    <img src="https://images.ctfassets.net/usf1vwtuqyxm/38rqUqYdGjL9mHJ7feADdh/b2dcc93338118fe214ef1c28ce1cbea8/shadows_layered.png?fm=jpg" />
      </picture>
```
