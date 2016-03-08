# Folder-zip
A fork of npm module [easy-zip](https://github.com/owenchong/easy-zip) with **enhanced** folder zipping options.

# Installation
	npm install folder-zip
		
## Examples  

**Zip a folder**  
	
	var options = {
		excludeParentFolder: true, //Default : false. if true, the content will be zipped excluding parent folder.
		parentFolderName: 'v1.0' //if specified, the content will be zipped, within the 'v1.0' folder
	};
       
    //zip a folder and change folder destination name
	var zip = new FolderZip();
	zip.zipFolder('../folder-zip', options, function(){
		zip.writeToFile('folderall.zip');
	});

**Add text**

	var FolderZip = require('folder-zip');
	var zip = new FolderZip();
	zip.file('hello.txt','Hello World！'); //add text
	zip.writeToFile('text.zip');
	        
**Add folder**  

    var zip = new FolderZip();
    var jsFolder = zip.folder('js');
    jsFolder.file('hello.js','alert("hello world")');
    jsFolder.writeToFile('folder.zip');
	
**Add file**  

	var folderZip = new FolderZip();
	folderZip.addFile('main.js','index.js',function(){
		folderZip.writeToFileSync('file.zip');
	});
	
**Add files in batches**  

	var files = [
		{source : 'index.js',target:'index.js'},
		{target : 'img'},//if source is null,means make a folder
		{source : 'jszip.js',target:'lib/tmp.js'}
	];
	
	var folderZip = new FolderZip();
	folderZip.batchAdd(files,function(){
		folderZip.writeToFile('batchadd.zip');
	});	
	
**Write data to http.Response**  

    folderZip.writeToResponse(response, 'attachment.zip');

	
**Write to file sync**  

    folderZip.writeToFileSync(filePath);

## Tests

To run the test suite, first install the dependencies, then run npm test:

	npm install
	npm test


# License
[GPL 3.0](http://www.gnu.org/licenses/gpl-3.0.en.html)
