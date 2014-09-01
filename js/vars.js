var $ = function(id) { return document.getElementById(id); };
 
var search = [ // Search engines (first is default)
	["!g", "https://www.google.no/#q=", "Google (Default)"], 
	["!i", "https://www.google.no/search?tbm=isch&q=", "Google Images"], 
	["!y", "https://www.youtube.com/results?search_query=", "YouTube"], 
	["!w", "http://en.wikipedia.org/w/index.php?search=", "Wikipedia"], 
	["!m", "http://www.imdb.com/find?q=", "IMDb"], 
	["!u", "http://www.urbandictionary.com/define.php?term=", "Urban Dictionary"]
];

var menus = [
	["News", [
		["Arch Linux", "http://archlinux.org"],
		["GameSpot", "http://gamespot.com"],
		["IGN", "http://ign.com"],
		["Stuff", "http://stuff.co.nz"]
	]],
	["4chan", [
		["/a/ - Anime & Manga", "https://boards.4chan.org/a/catalog"],
		["/b/ - Random", "https://boards.4chan.org/b/catalog"],
		["/fit/ - Fitness", "https://boards.4chan.org/fit/catalog"],
		["/g/ - Technology", "https://boards.4chan.org/g/catalog"],
		["/jp/ - Otaku Culture", "https://boards.4chan.org/jp/catalog"],
		["/mlp/ - Pony", "https://boards.4chan.org/mlp/catalog"],
		["/w/ - Anime/Wallpapers", "https://boards.4chan.org/w/catalog"]
	]],
	["Entertainment", [
		["DeviantArt", "http://deviantart.com/"],
		["Imgur", "https://imgur.com/"],
		["Reddit", "http://reddit.com"],
		["YouTube", "http://youtube.com"]
	]],
	["Other", [
		["Facebook", "http://facebook.com"],
		["Pastebin", "http://pastebin.com"],
		["Userstyles", "http://userstyles.org/"],
		["Wallbase", "http://wallbase.cc"]
	]],
];