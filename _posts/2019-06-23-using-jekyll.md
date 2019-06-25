---
layout: post
title: How to use Jekyll
tags: jekyll
---

# Using Jekyll

Actually, this topic is about using
- Jekyll for html
- Sass for css
- Typescript for js
- FR for content

## Jekyll

I test locally using localhost or the machine name, `gshp` in the example:
```
bundle exec jekyll serve
bundle exec jekyll serve --host gshp
bundle exec jekyll s -H gshp
```

### About the Jekyll theme

> It is based on Cayman theme.

- Yes it is ultimately based on the Cayman GitHub Pages theme.
- But I started out cloning the Blog repository of Natalya, which is based on the Cayman theme.
- Then I removed stuff from that
- Then I added css and javascript

Natalya is using the theme to write posts, and I wanted to keep that.
But I changed the includes and layouts, mostly by removing stuff.
- For example, I removed comments, social links, and automatic generation of links to related blog posts.
- I am using relative markdown links instead of Liquid links.
- I do not use the date of a post in the permalink.

Just two notes:
1. I need to include .html extension in every link.
I need these hardcoded extensions when I run the site locally, from a node server.
1. I do not want to remember and use the date when I write hard coded markdown links.
I can remember the carefully chosen name of the file, but not the date.
The date will be a fake date anyway, most of the time.

So, I have made significant changes to the Cayman theme that was already significantly changed by Natalya.
It is already difficult to compare this version of the theme to the original.

The theme as it is could or should be extracted into a repo of its own, later.
But probably not at this time, it is too early.

## Typescript

There is just one typescript file - `fr-grid-sort-v1.ts` -
which I have put it into `src` folder,
to be picked up from there by the typescript compiler tsc.

```
tsc
```

But there is also the `tsconfig.json` file,
in which I have changed `sourceMap` to `false` and `outDir` to `javascripts`.

So from the root of the project, call up `tsc` from the command line.
I assume that you have typescript installed globally on your system.

The typescript compiler will put the output javascript file into the javascripts folder.
That javascript file will be part of the project,
meaning that you only have to use typescript compiler when you want to change it.
Of course you could just change the javascript file,
but by providing the source I make it clear that I have used typescript to make it much more obvious how it works.

Please have a look at `_config.yml`,
where I have excluded tsconfig.json and the src folder,
excluded from being copied to the _site folder by jekyll.

## Sass

This is automatic when I build or serve the site using jekyll.

I have added `fr-table.scss` and `start-btn.scss` to the other files in the `_sass` folder,
and then imported these files into `assets/css/style.scss`.

By doing so I will end up with all css bundled into `_site/assets/style.css` file,
and this will then be the only css file for the theme.
My additions, the css in the files I added, will become part of the theme.

I have changed sass variables in `style.scss`.
If you needed an  example of how to do that, just look at the source file in the repo.

### About using important

Note that I needed to add `!important` to style `g1`, for example.
If I don't it would not be used to style the right border of a table cell in the html result table,
instead the border definition `for table td` in file `jekyll-theme-cayman.scss` would be used.

```scss
  table {
    display: block;
    width: 100%;
    overflow: auto;
    word-break: normal;
    word-break: keep-all; // For Firefox to horizontally scroll wider tables.
    -webkit-overflow-scrolling: touch;

    th {
      font-weight: bold;
    }

    th,
    td {
      padding: 0.5rem 1rem;
      border: 1px solid $table-border-color;
    }
  }
```

### About conflicting styles

1. The html format snippets of the sailing event result data content which is at the heart of this site uses css class attributes, e.g `.nl`.
1. When the user hovers with the mouse over a row in the html result table, the javascript will dynamically include the `.highlight` css class.
1. The Cayman theme uses `rouge-github.scss` which defines color and font-weight for a `.highlight .nl` combination of css classes.

```scss
.highlight .nl {
  color: #990000;
  font-weight: bold;
}
```

The little problem is that now we have conflicting style definitions.
If you look at `fr-table.scss` you can see how I have tried to override the dominant rouge style,
so that the font does not get boldened any longer when I hover with the mouse over a table row.
