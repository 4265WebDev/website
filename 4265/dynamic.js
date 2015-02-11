window = document.getElementById("dynamic").innerHTML;
window.onload = function () {
	if (screen.width > 740) {
		var mvp = document.getElementById('testViewport');
		mvp.setAttribute('content','width=740');
	}
}