# Folder-zip
A fork of npm module [easy-zip](https://github.com/owenchong/easy-zip).

# Installation
	npm install folder-zip
		
## Examples  
	var FolderZip = require('folder-zip');
     
	var zip = new FolderZip();
	zip.file('hello.txt','Hello World！'); //add text
	zip.writeToFile('text.zip');
	        
## **Add folder**  
 	var zip2 = new FolderZip();
    var jsFolder = zip2.folder('js');
    jsFolder.file('hello.js','alert("hello world")');
    zip2.writeToFile('folder.zip');```
	
**Add file**  

	var zip3 = new FolderZip();
	zip3.addFile('main.js','index.js',function(){
		zip3.writeToFile('file.zip');
	});
	
**Add files in batches**  

	var files = [
		{source : 'index.js',target:'index.js'},
		{target : 'img'},//if source is null,means make a folder
		{source : 'jszip.js',target:'lib/tmp.js'}
	];
	
	var zip4 = new FolderZip();
	zip4.batchAdd(files,function(){
		zip4.writeToFile('batchadd.zip');
	});

	
**Zip a folder**  
       
    //zip a folder and change folder destination name
	var zip5 = new FolderZip();
	zip5.zipFolder('../folder-zip', function(){
		zip5.writeToFile('folderall.zip');
	});
	
	
** Write data to http.Response **  
	```
	   zip.writeToResponse(response, 'attachment.zip');
	```
	
**Write to file sync**  

	   zip.writeToFileSycn(filePath);

# License
[GPL 3.0](http://www.gnu.org/licenses/gpl-3.0.en.html)
