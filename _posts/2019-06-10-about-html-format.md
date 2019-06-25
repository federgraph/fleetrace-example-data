---
layout: post
title: About FR Html format
tags: FR
---

# FR Html

The FR application can load and save data in txt, xml, json and html format.
Here I will focus on the html format.
FR01 can output event data as html body content (the **html fragment**) or as a complete and valid html document (with html and head tags).

## Use from App

The **html** can be treated as **xml** which can be transformed into **txt** and loaded as always.

## Access from Browser

The raw **html event data files** can be used in the browser as is.
It is in the **Event Menu Page** where you add css and javascript.
The event menu page will load data via **ajax**, style the result table with **css** and sort the table with **javascript**.
See *Raw Html* link above for more info or *New Example* for the default test page.
Event-Menu pages are subject to improvement, which should be done through collaboration at GitHub.

## Notes

- This is not the documentation for the FR application itself.
- We use **json** format with the Angular SPA applications today.
- The event menu page is changing rapidly right now.
- When it has stabilized enough, I will transition the test data and event menu template to GitHub.
- Or even sooner.
- The Html event menu page is the integration point.
- Maybe a starting point for more.
