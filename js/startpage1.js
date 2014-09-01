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

function init() {
	buildSearchHelp();
	buildMenus();
	
	$('q').value = "";
	$('q').focus();
}

function buildSearchHelp() {
	var help = $('help');
	for (var i = 0; i < search.length; i++) {
		help.innerHTML += '<b>' + search[i][0] + '</b> = Search ' + search[i][2] + '<br/>';
	}
}

function buildMenus() {
	$('mnu').innerHTML = "";

	for (var i = 0; i < menus.length; i++) { // Menu titles
		$('mnu').innerHTML += '<li><label>' + menus[i][0] + '</label><ul id="mnu_' + i + '"></ul></li>';
		
		var items = menus[i][1];
		for (var j=0; j < items.length; j++) { // Menu links
			$('mnu_'+i).innerHTML += '<li><a href="' + items[j][1] + '" target="_self">' + items[j][0] + '</a></li>';
		}
	}
}
 
function handleQuery(e,q) { // Handle search query
	var key = e.keyCode || e.which;

	if (key == 13) { // enter
		if (q.lastIndexOf("!") != -1) {
			var x = q.lastIndexOf("!");
			
			for (var i = 0; i < search.length; i++) {
				if (search[i][0] == q.substr(x)) {
					window.location = search[i][1] + q.substr(0,x);
					return;
				}
			}
			q = q.substr(0,x);
		}
		// Default to first
		window.location = search[0][1] + q;
	}
}

var m = false;
function toggle() { // Toggle help
	m = !m;

	if (m) {
		$('help').style.opacity = 1;
		$('more').innerHTML = "-";
	} else {
		$('help').style.opacity = 0;
		$('more').innerHTML = "+";
	}

	$('q').focus();
}

function fade(x) {
	if (x == 1) {
		$('form').style.top = "-100px";
		$('form').style.opacity = 0;
		if (m){
			toggle();
		}
	} else {
		$('form').style.top = "0px";
		$('form').style.opacity = 1;
	}
}