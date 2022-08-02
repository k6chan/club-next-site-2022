# Introduction

This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

When cloning the repository to your device, run `npm install`.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the pages by modifying the pages in the `pages` folder. Pages auto-update as you save the file ("
hot reloading").

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!

# ucsd.moe

## Pushing code

Before pushing code, run `git pull` to avoid merge conflicts.

The default branch is ```main```; when your changes are ready you can update the ````production```` branch (what
actually goes to [ucsd.moe](https://ucsd.moe)) with the command `git push origin main:production`. The site will be
successfully updated if the build completes in the GitHub Actions tab.

## BasePath

During development, the project was served on the
subdomain [ucsdanimeclub.github.io/club-next-site/](https://ucsdanimeclub.github.io/club-next-site/). By default Next.js
is not meant to be deployed on the sub-path of a domain, so `next.config.js` is edited to resolve this issue by applying
path prefixes when necessary. The `<MyImage>` tag is also created to resolve the issue when loading image sources, so
please use it instead of `<img>` or `<Image>` tags.

## Libraries

### React-Bootstrap

This library contains helpful components that you can use to build the site.

Many components (eg. Carousel, ListGroup, Navbar) are from
the [React-Bootstrap](https://react-bootstrap.github.io/components/alerts/) library.

For example, you can use the React-Bootstrap `<Container>` tag instead of the regular Bootstrap
container (`<div class="container">`).

## Files Guide

### Data

Data is read from JSON files so we can change content without changing structure. Components like carousels and the
officers display benefit from this practice as entries can be numerous or change with each year.

The home page carousel reads `banners.json`, the officers page reads `officers.json`, the gallery page
reads `gallery.json`, and the footer reads `socials.json`.

### Pages

#### _app.js

This "page" overrides the default App component that initializes pages. Recommended to use for page layouts that are
used in all pages (eg. the `layout.js` component that contains the Navbar and footer is always present in all pages, so
it is called here).

This project also contains the HTML `<head>` tag in this file.

#### index.js

This page is the default page that loads when visiting [ucsd.moe](https://ucsd.moe).

#### officers.js

This page reads and renders the `officers.json` datafile.

To add or remove officers, simply edit the datafile.

#### gallery.js

This page reads and renders the `gallery.json` datafile.

To edit gallery entries, simply edit the datafile.

Please note that low quality thumbnails are used so that the page loads quickly. High quality images are only loaded
when the user clicks on a thumbnail and opens the modal. You may use the `create_thumbnails.py` script located
in `public/images/gallery` to create
thumbnails using [Pillow]("https://pillow.readthedocs.io/en/stable/").

### Components

#### myimage.js

This component is a substitute for the `<img>` or `<Image>` tag. It is a workaround to the basePath issue that Next.js
has with GitHub Pages, so please use this component instead of the regular image tags.

#### layout.js (and social.js)

This component, called in `_app.js`, contains the Navbar as well as footer tags. The social medias in the footer are
obtained from `socials.json`.

`social.js` is a helper component that is called in `layout.js`. It reads the aforementioned datafile and renders the
social media icons with flexbox.

#### backgroundimage.js

Similar to `myimage.js`, this component allows for background-image CSS to be safely used without the basePath issue.

#### bannercarousel.js

This component uses the given banners data to render a Carousel. It is used for the carousel in the home page.

#### pageheader.js

This component creates the background image header seen in the history, officers, and gallery page.

### Images

Images are contained in the `public/images` folder. The FavIcon is in the `public` folder.

### Styles

#### globals.css

The CSS file for pages and components to use. To use a style in Next.js, you must use the `className` prop in the
desired tag instead of `class`.

#### fonts.css

This file is located in the `public` folder. It contains the imports for the site's fonts. This file is loaded
in `_app.js`.

#### theme.scss

This file is used to overwrite Bootstrap's default styling. It does this by defining the custom styles before
importing Bootstrap.

### next.config.js

Mainly used to adjust the basePath when the website is served on a subdomain (
i.e. [ucsdanimeclub.github.io/animefest-next-site/](https://ucsdanimeclub.github.io/animefest-next-site/)) instead
of [animefest.ucsd.moe](https://animefest.ucsd.moe).

### CNAME

A record that contains the domain name. GitHub Actions copies this file into its output when building the project.

## Credits

Original 2022-2023 website programmed by Kaitlyn Chan; designed by Jasmine Macy and Kaitlyn Chan.
