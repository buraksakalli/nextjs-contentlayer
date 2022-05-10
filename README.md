# Nextjs ContentLayer

This repository has an example project for ContentLayer with Next.js and TypeScript, bootstrapped with Create Next App.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

You should edit fields in `contentlayer.config.js` and define your keys with type, description, and required flags.

```json
fields: {
    [key]: {
      type: string,
      description: string,
      required: boolean,
    },
    ...
  },
```

After that, edit the resolve path in the URL if necessary.

## Markdown Posts

In the default config, you need to keep your posts inside the `posts` folder. If you want to change the path, you need to update `contentDirPath` in `contentlayer.config.js`.

```js
export default makeSource({
  contentDirPath: "<PATH>",
  documentTypes: [Post],
});
```

You must define header parameters for each post if it's required.

### Example

```md
---
title: What is Lorem Ipsum
subtitle: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
date: 2022-05-07
---
```
