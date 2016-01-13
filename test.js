var folderZip = require('./index');

var zip = new folderZip();
//add text 
zip.file('hello.txt', 'Hello World！');
zip.writeToFile('text.zip');//write zip data to disk

//add folder
var zip2 = new folderZip();
var jsFolder = zip2.folder('js');
jsFolder.file('hello.js', 'alert("hello world")');
zip2.writeToFile('folder.zip');

//add file
var zip3 = new folderZip();
zip3.addFile('main.js', 'index.js', function () {
	zip3.writeToFile('file.zip');
});

//batch add files
var files = [
	{source: 'index.js', target: 'index.js'},
	{target: 'img'},//if source is null,means make a folder
	{source: 'jszip.js', target: 'lib/tmp.js'}
];

var zip4 = new folderZip();
zip4.batchAdd(files, function () {
	zip4.writeToFile('batchadd.zip');
});

//zip a folder
var zip5 = new folderZip();
zip5.zipFolder('../easy-zip', function () {
	zip5.writeToFile('folderall.zip');
});

//write data to http.Response
//zip.writeToResponse(response,'attachment.zip');

//write to file sync 
//zip.writeToFileSycn(filePath);
