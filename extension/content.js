function clean() {
	var hostname = window.location.hostname
	// console.log("Hostname is ", hostname)
	elements = db[hostname].join()
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = elements + " { display: none !important }";
	document.head.appendChild(css);
}

chrome.storage.sync.get(["state"], function(items) {
	console.log('Settings retrieved', items);
	var state = items["state"];
	// console.log("State is ", state);
	if (state != false) {
		clean();
	}
});

