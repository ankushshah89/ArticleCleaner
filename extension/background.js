var state;
chrome.storage.sync.get([ "state" ], function(items) {
	// console.log('Settings retrieved', items);
	state = items["state"];
	if (state === undefined) {
		state = true;
		chrome.storage.sync.set({
			"state" : state
		}, function() {
			// console.log('Settings saved');
		});
	}
	document.getElementById("state").checked = state;
});

function toggle() {
	var element = document.getElementById("state");
	state = !state;
	chrome.storage.sync.set({
		"state" : state
	}, function() {
		// console.log('Settings saved');
	});
	document.getElementById("state").checked = state;
}

document.getElementById("state").addEventListener("click", toggle);
