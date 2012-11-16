var psLnIgsid = "l4YEfZMDmrBp";
// safe-standard@gecko.js

var psLnIgiso;
try {
	psLnIgiso = (opener != null) && (typeof(opener.name) != "unknown") && (opener.psLnIgwid != null);
} catch(e) {
	psLnIgiso = false;
}
if (psLnIgiso) {
	window.psLnIgwid = opener.psLnIgwid + 1;
	psLnIgsid = psLnIgsid + "_" + window.psLnIgwid;
} else {
	window.psLnIgwid = 1;
}
function psLnIgn() {
	return (new Date()).getTime();
}
var psLnIgs = psLnIgn();
function psLnIgst(f, t) {
	if ((psLnIgn() - psLnIgs) < 7200000) {
		return setTimeout(f, t * 1000);
	} else {
		return null;
	}
}
var psLnIgol = true;
function psLnIgow() {
	if (psLnIgol || (1 == 1)) {
		var pswo = "menubar=0,location=0,scrollbars=auto,resizable=1,status=0,width=650,height=680";
		var pswn = "pscw_" + psLnIgn();
		var url = "https://messenger.providesupport.com/messenger/1g7p1zb3ia7vp1mz19k5e40ndk.html?ps_s=" + psLnIgsid;
		if (false && !true) {
			window.open(url, pswn, pswo); 
		} else {
			var w = window.open("", pswn, pswo); 
			w.location.href = url;
			/*
			try {
				w.document.body.innerHTML += '<form id="pscf" action="https://messenger.providesupport.com/messenger/1g7p1zb3ia7vp1mz19k5e40ndk.html" method="post" target="' + pswn + '" style="display:none"><input type="hidden" name="ps_s" value="'+psLnIgsid+'"></form>';
				w.document.getElementById("pscf").submit();
			} catch (e) {
				w.location.href = url;
			}
			*/
		}
	} else if (1 == 2) {
		document.location = "http\u003a\u002f\u002f";
	}
}
var psLnIgil;
var psLnIgit;
function psLnIgpi() {
	var il;
	if (3 == 2) {
		il = window.pageXOffset + 50;
	} else if (3 == 3) {
		il = (window.innerWidth * 50 / 100) + window.pageXOffset;
	} else {
		il = 50;
	}
	il -= (271 / 2);
	var it;
	if (3 == 2) {
		it = window.pageYOffset + 50;
	} else if (3 == 3) {
		it = (window.innerHeight * 50 / 100) + window.pageYOffset;
	} else {
		it = 50;
	}
	it -= (191 / 2);
	if ((il != psLnIgil) || (it != psLnIgit)) {
		psLnIgil = il;
		psLnIgit = it;
		var d = document.getElementById('ciLnIg');
		if (d != null) {
			d.style.left  = Math.round(psLnIgil) + "px";
			d.style.top  = Math.round(psLnIgit) + "px";
		}
	}
	setTimeout("psLnIgpi()", 100);
}
var psLnIglc = 0;
function psLnIgsi(t) {
	window.onscroll = psLnIgpi;
	window.onresize = psLnIgpi;
	psLnIgpi();
	psLnIglc = 0;
	var url = "http://messenger.providesupport.com/" + ((t == 2) ? "auto" : "chat") + "-invitation/1g7p1zb3ia7vp1mz19k5e40ndk.html?ps_s=" + psLnIgsid + "&ps_t=" + psLnIgn() + "";
	var d = document.getElementById('ciLnIg');
	if (d != null) {
		d.innerHTML = '<iframe allowtransparency="true" style="background:transparent;width:271;height:191" src="' + url + 
			'" onload="psLnIgld()" frameborder="no" width="271" height="191" scrolling="no"></iframe>';
	}
}
function psLnIgld() {
	if (psLnIglc == 1) {
		var d = document.getElementById('ciLnIg');
		if (d != null) {
			d.innerHTML = "";
		}
	}
	psLnIglc++;
}
if (false) {
	psLnIgsi(1);
}
var psLnIgd = document.getElementById('scLnIg');
if (psLnIgd != null) {
	if (psLnIgol || (1 == 1) || (1 == 2)) {
		if (false) {
			psLnIgd.innerHTML = '<table style="display:inline" cellspacing="0" cellpadding="0" border="0"><tr><td align="center"><a href="#" onclick="psLnIgow(); return false;"><img name="psLnIgimage" src="http://image.providesupport.com/image/1g7p1zb3ia7vp1mz19k5e40ndk/online-559851990.jpg" width="166" height="61" border="0"></a></td></tr><tr><td align="center"><a href="http://www.providesupport.com/pb/1g7p1zb3ia7vp1mz19k5e40ndk" target="_blank"><img src="http://image.providesupport.com/lcbps.gif" width="140" height="17" border="0"></a></td></tr></table>';
		} else {
			psLnIgd.innerHTML = '<a href="#" onclick="psLnIgow(); return false;"><img name="psLnIgimage" src="http://image.providesupport.com/image/1g7p1zb3ia7vp1mz19k5e40ndk/online-559851990.jpg" width="166" height="61" border="0"></a>';
		}
	} else {
		psLnIgd.innerHTML = '';
	}
}
var psLnIgop = false;
function psLnIgco() {
	var w1 = psLnIgci.width - 1;
	psLnIgol = (w1 & 1) != 0;
	psLnIgsb(psLnIgol ? "http://image.providesupport.com/image/1g7p1zb3ia7vp1mz19k5e40ndk/online-559851990.jpg" : "http://image.providesupport.com/image/1g7p1zb3ia7vp1mz19k5e40ndk/offline-1981750285.jpg");
	psLnIgscf((w1 & 2) != 0);
	var h = psLnIgci.height;

	if (h == 1) {
		psLnIgop = false;

	// manual invitation
	} else if ((h == 2) && (!psLnIgop)) {
		psLnIgop = true;
		psLnIgsi(1);
		//alert("Chat invitation in standard code");
		
	// auto-invitation
	} else if ((h == 3) && (!psLnIgop)) {
		psLnIgop = true;
		psLnIgsi(2);
		//alert("Auto invitation in standard code");
	}
}
var psLnIgci = new Image();
psLnIgci.onload = psLnIgco;
var psLnIgpm = false;
var psLnIgcp = psLnIgpm ? 30 : 60;
var psLnIgct = null;
function psLnIgscf(p) {
	if (psLnIgpm != p) {
		psLnIgpm = p;
		psLnIgcp = psLnIgpm ? 30 : 60;
		if (psLnIgct != null) {
			clearTimeout(psLnIgct);
			psLnIgct = null;
		}
		psLnIgct = psLnIgst("psLnIgrc()", psLnIgcp);
	}
}
function psLnIgrc() {
	psLnIgct = psLnIgst("psLnIgrc()", psLnIgcp);
	try {
		psLnIgci.src = "http://image.providesupport.com/cmd/1g7p1zb3ia7vp1mz19k5e40ndk?" + "ps_t=" + psLnIgn() + "&ps_l=" + escape(document.location) + "&ps_r=" + escape(document.referrer) + "&ps_s=" + psLnIgsid + "" + "&User+ID=++&Current+License=+++&Email+ID=+";
	} catch(e) {
	}
}
psLnIgrc();
var psLnIgcb = "http://image.providesupport.com/image/1g7p1zb3ia7vp1mz19k5e40ndk/online-559851990.jpg";
function psLnIgsb(b) {
	if (psLnIgcb != b) {
		var i = document.images['psLnIgimage'];
		if (i != null) {
			i.src = b;
		}
		psLnIgcb = b;
	}
}

