document.getElementById("crypt").addEventListener("input", encrypt);
let width = getComputedStyle(document.getElementById("crypt"));
console.log(width.height);

function encrypt(e) {
	let msg = e.target.value;
	console.log(msg);
	let chars = "²&é\"'(-è_çà)=azertyuiop^$sdfghjklmù*wxcvbn,;:!1234567890°+AZERTYUIOP¨£QSDFGHJKLM%µWXCVBN?./§<>~#{[|`^@]}€¤ \\";
	let code = ""
	
	for (let i=0;i<msg.length;i++) {
		for (let key=0;key<chars.length;key++) {
			if (msg[i] === chars[key]) {
				code += chars[(key+chars.length/2)%chars.length];
				document.getElementById("crypted").textContent = code;
			}
		}
	}
}