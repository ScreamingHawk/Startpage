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