document.getElementById("crypt").addEventListener("input", encrypt);

function encrypt(e) {
	let msg = e.target.value;
	let chars = "²&é\"'(-è_çà)=azertyuiop^$qsdfghjklmù*wxcvbn,;:!1234567890°+AZERTYUIOP¨£QSDFGHJKLM%µWXCVBN?./§<>~#{[|`@]}€¤ \\êï";
	let code = "";
	
	for (let i=0;i<msg.length;i++) {
		let inChars = false;
		for (let key=0;key<chars.length;key++) {
			if (msg[i] === chars[key]) {
				inChars = true;
				code += chars[(key+chars.length/2)%chars.length];
			}
		}
		if (! inChars) code += msg[i];
	}
	document.getElementById("crypted").textContent = code;
}
