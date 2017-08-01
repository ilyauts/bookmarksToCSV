'use strict';
var fs = require('fs')

// Let's start by reading in a file
fs.readFile('./GoogleBookmarks.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  console.log('Link, Time, Name');

  var newData = data.split('<DT><A HREF="').join('');
  newData = newData.split('" ADD_DATE="').join(',');
  newData = newData.split('">').join(',');
  newData = newData.split('</A>').join('');
  newData = newData.split('</DL><p>').join('');
  newData = newData.split(`<!DOCTYPE NETSCAPE-Bookmark-file-1>
							<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8,
							<TITLE>Bookmarks</TITLE>
							<H1>Bookmarks</H1>
							<DL><p>
							<DT><H3 ADD_DATE="1486306431014001,Unlabeled</H3>
							<DL><p>`).join('');

console.log(newData);
});