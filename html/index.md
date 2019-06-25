---
layout: default
title: Html Test Data
---

# About Raw Html Test Data

Html format *Event Data* can be output by the FR application and uploaded as is.
The files in this folder have been copied here unchanged.

## Inside the NameTest file

Use browser dev tools or the excerpt below:

```html
<html>
<head><title></title></head>

<body>

<h1>NameTest</h1>

<table class="sortable fr results">

<thead>
<tr>
<th class="h">ID</th>
<th class="h">SNR</th>
<th class="h">Bib</th>
<th class="hl">DN</th>
<th class="h">NAT</th>
<th class="h">R1</th>
<th class="h">R2</th>
<th class="h">Total</th>
<th class="h">Rank</th>
</tr>
</thead>

<tr>
<td class='a'>1</td>
<td class='ae'>1000</td>
<td class='ae'>1</td>
<td class='al'>FN1 LN1</td>
<td class='ae'>GER</td>
<td>2</td>
<td>3</td>
<td class='a'>5.0</td>
<td class='a'>2</td>
</tr>

<tr>
<td class='n'>2</td>
<td class='e'>1001</td>
<td class='e'>2</td>
<td class='nl'>FN2 LN2</td>
<td class='e'>ITA</td>
<td>7</td>
<td>4</td>
<td class='n'>11.0</td>
<td class='n'>5</td>
</tr>

// more table rows follow ...

</table>

<table class="fr properties">
<thead><tr><th>Name</th><th>Value</th></tr></thead>
<tr><td>EP.Name</td><td>NameTest</td></tr>
<tr><td>EP.ScoringSystem</td><td>Low Point System</td></tr>
<tr><td>EP.Throwouts</td><td>0</td></tr>
<tr><td>EP.NameFieldSchema</td><td>NX</td></tr>
<tr><td>EP.FieldCaptions</td><td>DN,NAT</td></tr>
<tr><td>EP.NameFieldCount</td><td>2</td></tr>
<tr><td>EP.NameFieldOrder</td><td>12</td></tr>
<tr><td>EP.FieldCount</td><td>2</td></tr>
</table>

<div id="index_table"><pre>
[
[1,1,1,1,3,4,8,8,8],
[2,2,2,2,1,1,7,1,1],
[3,3,3,3,2,8,1,7,7],
[4,4,4,4,4,7,2,4,4],
[5,5,5,5,5,3,5,2,2],
[6,6,6,6,6,5,6,5,5],
[7,7,7,7,7,2,4,3,3],
[8,8,8,8,8,6,3,6,6]
]
</pre></div>

</body>

</html>
```

You can see that:
- There is a thin wrapper around the **html fragment** (inside of body) to make it valid html.
- It contains a **result table** wich can be identified by `class="sortable fr results"`.
- It contains another table with **event properties**, only used by the application.
- It contains **index data** inside a div with `id="index_table"`, intended for javascript to sort the table.
- The cells in the result table may have a **css class attribute** to help with styling.

Note:
- The FR application can load the html file as data.
- Event properties will not be included if they have the default value.
- In the future you may see markdown front matter instead of html wrapper text.

## About table cell styling

This is a just a suggestion, I think the output of the css class attributes is optional.

Incomplete legend for the attribute values:
```
n = a normal row
a = alternate row
e = editable row (editable in the application, not on the html page) 
nl = normal row but left aligned
ae = editable column cell in alternate row
g1 = group 1, the default if not racing in groups
g2 = group 2, when they are racing in groups/fleets
g0 = group 0, for the medal race
```

## About the Event Menu page

The event menu page will have menu items, links or buttons, for the events.

The original example had the links in the sidebar and/or in a menu component.

In order to use the raw html file format as intended on a static web site:

1. Create a hosting event menu page, just another html file.
1. Place a `div` element in there that is going to host the result table.
1. Have a **link** on the event menu page for every event.
1. Execute *javascript* when you click on the link.
1. Let the javascript download the raw html for the event via *ajax*.
1. Use *jquery* to **put the result table into the div**.
1. Handle **click** events on the `hd` column header cell elements of the result table.
1. Use the *index_table* data in the event data html to **sort** the result table when the user clicks.
1. Provide a *css style sheet* on the host page to **style** the table. 

You do NOT need to touch the raw html event data files. Use them as output by the application.

## Prepare your event web site

Prepare your site upfront, say you have a regatta with 8 events (classes), then you need to:
- Upload 8 template event data files.
- Place 8 links on the event menu page.
- Optionally update an `EventMenu.xml` file for use by the applications.
- Be done with the preparations.

Push updated event data files to the server as the event progresses.

## Just an idea

How you can have the site for your Regatta online easily, with no money spent on your part:

- You could clone a repository at GitHub and publish as a **GitHub Pages** web site.
- The template could be a Jekyll theme.
- The cloned repo would contain an example event menu page, css and javascript.
- The template would probably contain an example data file or two.
- You could **add to** and/or replace the example data.
- You could test the site locally.
- You could publish the site when you think it is about time.
- You could unpublish the GitHub Pages site later.
- You could delete the whole repository any time you choose.

I think it is possible, I am quite sure from what I have been reading about GitHub Pages.

## Longer list of links to raw html test data

<pre>
<a href="A-2004-470-M.html">A-2004-470-M.html</a>
<a href="A-2004-470-W.html">A-2004-470-W.html</a>
<a href="A-2004-49er.html">A-2004-49er.html</a>
<a href="A-2004-Europe.html">A-2004-Europe.html</a>
<a href="A-2004-Finn.html">A-2004-Finn.html</a>
<a href="A-2004-Laser.html">A-2004-Laser.html</a>
<a href="A-2004-Mistral-M.html">A-2004-Mistral-M.html</a>
<a href="A-2004-Mistral-W.html">A-2004-Mistral-W.html</a>
<a href="A-2004-Star.html">A-2004-Star.html</a>
<a href="A-2004-Tornado.html">A-2004-Tornado.html</a>
<a href="A-2004-Yngling.html">A-2004-Yngling.html</a>
<a href="C-2007-470-M.html">C-2007-470-M.html</a>
<a href="C-2007-470-W.html">C-2007-470-W.html</a>
<a href="C-2007-49er.html">C-2007-49er.html</a>
<a href="C-2007-Finn.html">C-2007-Finn.html</a>
<a href="C-2007-Laser-M.html">C-2007-Laser-M.html</a>
<a href="C-2007-Laser-W.html">C-2007-Laser-W.html</a>
<a href="C-2007-RSX-M.html">C-2007-RSX-M.html</a>
<a href="C-2007-RSX-W.html">C-2007-RSX-W.html</a>
<a href="C-2007-Star.html">C-2007-Star.html</a>
<a href="C-2007-Tornado.html">C-2007-Tornado.html</a>
<a href="C-2007-Yngling.html">C-2007-Yngling.html</a>
<a href="FleetTest.html">FleetTest.html</a>
<a href="IDM-420-1991.html">IDM-420-1991.html</a>
<a href="IDM-420-1997.html">IDM-420-1997.html</a>
<a href="IDM-420-2000.html">IDM-420-2000.html</a>
<a href="IDM-420-2004.html">IDM-420-2004.html</a>
<a href="NameTest.html">NameTest.html</a>
<a href="P-2011-470-M.html">P-2011-470-M.html</a>
<a href="P-2011-470-W.html">P-2011-470-W.html</a>
<a href="P-2011-49er.html">P-2011-49er.html</a>
<a href="P-2011-Finn.html">P-2011-Finn.html</a>
<a href="P-2011-Laser-M.html">P-2011-Laser-M.html</a>
<a href="P-2011-Laser-W.html">P-2011-Laser-W.html</a>
<a href="P-2011-RSX-M.html">P-2011-RSX-M.html</a>
<a href="P-2011-RSX-W.html">P-2011-RSX-W.html</a>
<a href="P-2011-Star.html">P-2011-Star.html</a>
<a href="Q-2008-470-M.html">Q-2008-470-M.html</a>
<a href="Q-2008-470-W.html">Q-2008-470-W.html</a>
<a href="Q-2008-49er.html">Q-2008-49er.html</a>
<a href="Q-2008-Finn.html">Q-2008-Finn.html</a>
<a href="Q-2008-Laser-M.html">Q-2008-Laser-M.html</a>
<a href="Q-2008-Laser-W.html">Q-2008-Laser-W.html</a>
<a href="Q-2008-RSX-M.html">Q-2008-RSX-M.html</a>
<a href="Q-2008-RSX-W.html">Q-2008-RSX-W.html</a>
<a href="Q-2008-Star.html">Q-2008-Star.html</a>
<a href="Q-2008-Tornado.html">Q-2008-Tornado.html</a>
<a href="Q-2008-Yngling.html">Q-2008-Yngling.html</a>
</pre>

## Unofficial test data, is this even correct ?

It is possible to know if the application computes the same result.
You use a compare list, which can be included in a text data file.
The given html sample files do not include a compare list.

My local version of the NameTest example in text format does:
```
#Params

DP.StartlistCount = 8
DP.ITCount = 0
DP.RaceCount = 2

#Event Properties

EP.Name = NameTest
EP.ScoringSystem = Low Point System
EP.Throwouts = 0
EP.DivisionName = 420
EP.InputMode = Strict
EP.RaceLayout = Finish
EP.NameSchema = NX
EP.FieldMap = FN,_,LN
EP.FieldCaptions = FN,LN,SN,NAT,FN2,LN2,CPos
EP.FieldCount = 7
EP.NameFieldCount = 2
EP.NameFieldOrder = 04
EP.UseFleets = False
EP.TargetFleetSize = 8
EP.FirstFinalRace = 20
EP.IsTimed = False
EP.UseCompactFormat = True

NameList.Begin
SNR;N1;N2;N3;N4;N5;N6;N7
1000;FN1;LN1;SN1;GER;FN2-1;LN2-1;x
1001;FN2;LN2;SN2;ITA;FN2-2;LN2-2;y
1002;FN3;LN3;SN3;FRA;FN2-3;LN2-3;z
NameList.End

StartList.Begin
Pos;SNR;Bib
1;1001;1
2;1002;2
3;1003;3
4;1004;4
5;1005;5
6;1006;6
7;1007;7
8;1008;8
StartList.End

FinishList.Begin
SNR;Bib;R1;R2
1001;1;2;3
1002;2;7;4
1003;3;5;8
1004;4;1;7
1005;5;6;5
1006;6;8;6
1007;7;4;2
1008;8;3;1
FinishList.End

CompareList.Begin
008=00400
001=00500
007=00600
004=00800
002=01100
005=01100
003=01300
006=01400
CompareList.End

#W1

#W2

EP.IM = Strict
```

Find the *compare list* in the text above.
- It is given in ranking order, the unique ranking is used.
- First row is rank 1, the winner.
- Lines contain Name=Value pairs: ID=Points.
- 3 digits for ID, the ID of the row.
- 5 digits for series points.
- Points is a scaled by 100 Integer.

ID: The 1 based ID is automatically maintained by the program.
Internally the collection of items is never sorted.
Think of ID as derived from initial start list order.
Pad with zeros to the left to get three digits.

Points: You usually display and compare two digits after the decimal for series points.
Just multiply by 100, take the integer part of the number, and pad with zeros to the left.
That should be the value for the compare list.

Compare lists need to match exactly.
- After loading an event you should see a *green light*.
- Load all existing test events to check for green.

There may or may not be a green light in the application.
But the application should produce a compare list,
and be able to compare against a given compare list.
If the compare lists (given and computed after loading) do not match,
the application will indicate this in the output of the produced compare list.
For example, lines will be commented out or marked in an appropriate way.
You can test this out in the application.

When you find an issue, please include a compare list in addition to original info.
