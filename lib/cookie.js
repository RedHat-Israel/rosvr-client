export function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "0";
}

export function getData() {
	var settings = {
		"hardware": { // Hardware: camera to use (back / front / back #2)
			"camera": getCookie("camera") // camera id
		},
		"software": { // Software: software only settings
			"setup": getCookie("setup") // setup: 0 if not setted up, 1 if setted up
		},
		"hardware-server": { // Hardware-Server: is hardware available and enabled on the server?
			"kinect": getCookie("kinect"), // kinect: 1 if kinect available and user enabled it, 0 otherwise
			"leapmotion": getCookie("leapmotion") // leapmotion: 1 if kinect available and user enabled it, 0 otherwise
		}
	};

	return settings;
}
