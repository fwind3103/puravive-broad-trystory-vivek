!function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(c){var e=this;do{if(Element.prototype.matches.call(e,c))return e}while(null!==(e=e.parentElement||e.parentNode)&&1===e.nodeType);return null});var f=window.location.search.replace(/^\?/,"&"),e=function(c){for(var e={},i=c.split("&"),t=0;t<i.length;t++){var a=i[t].match(/(.*)=(.*)/);a&&(e[a[1].toLowerCase()]=decodeURIComponent(a[2]))}return e}(f),c=parseInt(A("cmc_debug")),b="https://www.clkmc.com/api/",x=window.location.href.replace(/\?.*/,""),i=function(){var c=0,e=document.domain,i=e.split("."),t="_gd"+(new Date).getTime();for(;c<i.length-1&&-1===document.cookie.indexOf(t+"="+t);)e=i.slice(-1-++c).join("."),document.cookie=t+"="+t+";domain="+e+";";document.cookie=t+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+e+";",/^(co|com|edu|gov|ltd|net|org)\.[a-z]{2}$/i.test(e)&&(e=document.domain.split(".").slice(-3).join("."));return e}(),o=(N("Computed root domain is "+i),600),v=!1,h=!1,t={active_reqs:0},w="undefined"!=typeof clickmagick_cmc;if(w){clickmagick_cmc.version="2.37.20",clickmagick_cmc._orderBumps={},c=c||clickmagick_cmc.debug,N("Version",clickmagick_cmc.version);var a=A("cmc_audopt");/^(1|true|on)$/i.test(a)?P("cmc_audopt_setting","."+i):/^(0|false|off)$/i.test(a)&&L("cmc_audopt_setting","off","."+i,365);"off"===$("cmc_audopt_setting")&&(clickmagick_cmc.audopt="off");var a=parseInt(clickmagick_cmc.split_ratio),m=clickmagick_cmc.split_url;if(!isNaN(a)&&1<=a&&a<=100&&/^https?:\/\//i.test(m)){N("Processing a split-test");var n=clickmagick_cmc.cmc_ref||"",r=$("cmc_split_"+n);if(""===r&&(N("Random split ratio =",g=Math.floor(101*Math.random())),L("cmc_split_"+n,r=g<=a?"b":"a","."+i,365)),"b"===r)return N("Split-testing page 'b'. Redirecting to: "+(m+=(/\?/.test(m)?"&":"?")+f.substring(1))),window.location.href=m;N("Split-testing, page 'a'")}}if(N("Processing click and conversion code"),!function(){if(new RegExp(["google-adwords","google web preview","google-structured-data","appengine-google","feedfetcher-google","adsbot-google","googlebot","facebookexternalhit","bingbot","msnbot","bingpreview","pinterestbot","google-read-aloud","petalbot","ahrefsbot","adidxbot"].join("|"),"i").test(navigator.userAgent))return N("Ignoring high-activity bot",navigator.userAgent),1;return}(navigator.userAgent)){for(var y=0,l=Object.keys(e),_=0;_<l.length;_++){var d=e[l[_]].match(/(\d{9,12}_cmc\d{10})/);if(d){y=d[1];break}}var g,C=A("cmc_vid");if(C.match(/^cmc\d{10}$/i)&&U(C),N("vid found =",C=S()),w){if(N("Found clickmagick_cmc"),!((g=A(n="cmc_ignore"))?!/^(no|false|0)$/i.test(g):clickmagick_cmc[n])){""!=E(A("utm_source"))&&""!=E(A("utm_medium"))&&""!=E(A("utm_campaign"))||["utm_source","utm_medium","utm_campaign","utm_term","utm_content"].forEach(function(c){delete e[c]});for(l=(["utm_source","utm_medium","utm_campaign","utm_term","utm_content","cmc_project","cmc_goal","cmc_amt","cmc_cpc","cmc_ref","cmc_cogs","cmc_unique","cmc_strip","cmc_tid","cmc_adid","cmc_click","gclid","wbraid","msclkid","fbclid","ttclid","epik","audopt","audopt_pro","vid_info","cmc_redir","cmc_redir_wait","cmc_firstname","cmc_lastname","cmc_email","cmc_mobile","cmc_date_of_birth","cmc_phone","cmc_gender","cmc_country","cmc_postal_code","cmc_city","cmc_state_prov","invitee_email","invitee_first_name","invitee_full_name","invitee_last_name","wj_lead_email","wj_lead_first_name","wj_lead_last_name","wj_lead_phone_number","wj_lead_phone_country_code","attendee_email","text_reminder_number"].forEach(function(c){clickmagick_cmc[c]=D(c)}),clickmagick_cmc.hasOwnProperty("cmc_redir_wait")&&/^\d+$/.test(clickmagick_cmc.cmc_redir_wait)&&300<clickmagick_cmc.cmc_redir_wait&&N("Updated the redirect wait to "+(o=parseInt(clickmagick_cmc.cmc_redir_wait))),["utm_source","utm_medium","utm_campaign","utm_term","utm_content"].forEach(function(c){clickmagick_cmc[c]=E(clickmagick_cmc[c])}),Object.keys(e)),_=0;_<l.length;_++){var s=l[_];!/^cmc_/.test(s)||clickmagick_cmc[s]||(clickmagick_cmc[s]=D(s))}""==clickmagick_cmc.vid_info&&(clickmagick_cmc.vid_info=clickmagick_cmc.audopt_pro),clickmagick_cmc.cmc_amt=clickmagick_cmc.cmc_amt.replace(/%2c/gi,","),clickmagick_cmc.cmc_cpc=clickmagick_cmc.cmc_cpc.replace(/%2c/gi,","),clickmagick_cmc.cmc_adid=clickmagick_cmc.cmc_adid.replace(/^tt(?=\d)/,"tt_");var k,u=function(){var c="";{var e;document.referrer&&((e=document.createElement("a")).href=document.referrer,c=e.hostname||"")}return c.toLowerCase()}(),a=(["utm_source","utm_medium","utm_campaign","utm_term","utm_content"].forEach(function(c){clickmagick_cmc[c]=clickmagick_cmc[c].replace(/_referr?er_/gi,u)}),clickmagick_cmc.utm_source.toLowerCase()),r=("internal"===a?clickmagick_cmc.utm_source=a:"organic"===a&&(clickmagick_cmc.utm_source="",C||(clickmagick_cmc.utm_source=a,clickmagick_cmc.utm_medium=a,clickmagick_cmc.utm_campaign=""!==u?u:"none",clickmagick_cmc.cmc_goal="")),N(JSON.parse(JSON.stringify(clickmagick_cmc))),A("cbur").toLowerCase()),m=("a"===r&&(clickmagick_cmc.cmc_goal="s"),"d"===r&&(clickmagick_cmc.cmc_goal=""),/^[aes]$/i.test(clickmagick_cmc.cmc_goal)),a=""!==clickmagick_cmc.utm_source&&""!==clickmagick_cmc.utm_medium&&""!==clickmagick_cmc.utm_campaign&&"n"!=clickmagick_cmc.cmc_click;N("isValidClick =",a,"isValidGoal =",m),clickmagick_cmc.uid&&clickmagick_cmc.hid&&(a||m)&&(a&&""===clickmagick_cmc.cmc_project&&(clickmagick_cmc.cmc_project=i,clickmagick_cmc.domain=document.domain),/^(appspot\.com|googleusercontent\.com|localhost|\d+(\.\d+)+)$/i.test(clickmagick_cmc.cmc_project)||(r=a&&(!m||"internal"===clickmagick_cmc.utm_source),U(C=!C&&r?"cmc"+(Math.round(3294967294*Math.random())+1e9):C),clickmagick_cmc.disabled=/^cmc\d+$/.test(S())?0:1,N("Computed vid =",C),k="?vid="+C.substr(3),(a=Object.keys(clickmagick_cmc)).forEach(function(c){/^(cmc_strip|cmc_redir|vid|id|attrs|_.+)$/.test(c)||""===clickmagick_cmc[c]||(k+="&"+c+"="+encodeURIComponent(clickmagick_cmc[c]))}),T(),r&&(""!=clickmagick_cmc.fbclid&&(k+="&_fbc="+encodeURIComponent($("_fbc"))+"&_fbp="+encodeURIComponent($("_fbp"))),O(b+k.replace(/&cmc_goal=[^&]+/,""),"click"),v=!0,a.forEach(function(c){z(c)&&window.sessionStorage.setItem("_cmc_"+c,clickmagick_cmc[c])})),m&&(O(b+k.replace(/&utm_[^&]+/gi,""),"goal"),h=!0),B()))}clickmagick_cmc.hasOwnProperty("cmc_redir")&&clickmagick_cmc.cmc_redir.length&&(F(o),r=(r=decodeURIComponent(clickmagick_cmc.cmc_redir)).replace(/\[cmc_vid\]/gi,C),/^http/i.test(r)||(r="https://"+r),window.location.href=r),clickmagick_cmc.log=function(c,e,i,t){e=e||"";var a=i||"",m=0;"s"!==(c=c.toLowerCase())&&!V(c)||(m=Number(i||"0.00"),a=t||""),/^\d+$/.test(clickmagick_cmc.uid)&&/^\d+$/.test(clickmagick_cmc.hid)&&(goalURL=b+"?vid="+C.replace(/^cmc/i,"")+"&uid="+clickmagick_cmc.uid+"&hid="+clickmagick_cmc.hid+"&cmc_goal="+c.substring(0,1)+"&cmc_ref="+encodeURIComponent(e),T(),"a"===c||"e"===c?O(goalURL+"&cmc_project="+encodeURIComponent(a),"goal"):"s"===c?O(goalURL+"&cmc_amt="+encodeURIComponent(m)+"&cmc_project="+encodeURIComponent(a),"goal"):V(c)&&(i=c+"::"+e+"::"+m,m=Number(m),void 0===clickmagick_cmc._orderBumps[i]||0==clickmagick_cmc._orderBumps[i]||0==m?clickmagick_cmc._orderBumps[i]=m:(console.assert(clickmagick_cmc._orderBumps[i]==m),m=-m,clickmagick_cmc._orderBumps[i]=0),O(goalURL+"&cmc_amt="+encodeURIComponent(m)+"&cmc_project="+encodeURIComponent(a),"goal")),B(),F(o))},clickmagick_cmc.vid=C}var p={};"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?R():document.addEventListener("DOMContentLoaded",R)}function j(c){N("Sending PII",c);c=function(c){var e="",i=(c=encodeURIComponent(c),0);for(;i<c.length;){var t;"%"===c.charAt(i)?(e+=c.substr(i+1,2),i+=3):(t=c.charCodeAt(i).toString(16).toUpperCase(),e+=(1==t.length?"0":"")+t,i++)}return e}(q(JSON.stringify(c))).split("").reverse().join("");O(b+"?vid="+C.replace(/^cmc/i,"")+"&uid="+clickmagick_cmc.uid+"&hid="+clickmagick_cmc.hid+"&cmclid="+encodeURIComponent(c),"data")}function I(c){var t={};c.forEach(function(m){var c,e=m.value.trim().replace(/\s+/," ");function i(c,e){e=M(e);e=clickmagick_cmc["vid_"+e]||clickmagick_cmc["audopt_"+e];if(void 0===e)return(i=new RegExp(M(c),"i")).test(m.name)||i.test(m.id);for(var i,t=e.replace(/\s+/g,"").split(/\s*,\s*/),a=0;a<t.length;a++)if("."===t[a].charAt(0)){if((i=new RegExp("(^|\\s)"+t[a].substring(1)+"(\\s|$)","i")).test(m.classList))return 1}else if("!"===t[a].charAt(0)){if(m.name===t[a].substring(1))return 1}else if(m.id===t[a].replace(/^#/,""))return 1}""!==e&&(i("42923666e626a6d2d7a62606b7c7a7c6d2b636a6669637a2e23666e626a6a2e237a6763726a68215","3666e626a6")?t.l=e:i("4292a626e616b7c7d76696d2d7a62606b7c7a7c6d2b636a6669637b7c7d7669637a626e616a225a71545963716968215","a626e61605b7c7d76696")?t.a=e:i("4292a626e616b7c7e636d2d7a62606b7c7a7c6d2b636a6669637b7c7e63637a626e616a2e2363716368215","a626e61605b7c7e636")?t.z=e:i("4292a626e616d2d7a62606b7c7a7c6d2b636a6669637a626e61637a626e616f3053636a7968215","a626e616053636a796")?-1!==(c=(t.a=e).indexOf(" "))&&(t.a=e.substr(0,c),t.z=e.substr(c+1)):i("4292d7a6d626a71605d7a6b6166626a6d705b777a6b737d7a6d626a71605c726c737a2e23636a6c637a2e2a63666d60626a2e28215","a63666d60626")?(e=e.replace(/\D/g,""),/\d{10,}/.test(e)&&(t.b=e)):i("42920616b7c6e6b71606c6d2d7a62606b7c7a7c6d2b636a6669637a2e205d7a687c716e637a62606763746d7068737a2e236a6b737a2e2a6160676f7a2e23776f78215","a6160676f7")?(e=e.replace(/\D/g,""),/\d{10,}/.test(e)&&(t.f=e)):i("429267b766c6e2c7c7a6d7b6b6e6e2d7a62606b7c7a7c6d2b636a666963767b766c637b7c68215","67b766c6")?3<=e.length&&(t.t=e):i("4292a6b7e6b7c7d2c7c7a6d7b6b6e6d2d7a62606b7c7a7c6d2b636a6669637a2e29706d7f7a2e2a6b7e6b7c737f392a6c61666829706d7f737a6b7e6b7c737b7c78215","9706d7f705a6b7e6b7c7")?2<=e.length&&(t.v=e):i("4292f76657d2c7c7a6d7b6b6e6d2d7a62606b7c7a7c6d2b636a6669637a2e2b7c706f737a2e2f7665737f7578215","a6b606c60536e6b7c706f7")?2<=e.length&&(t.p=e):i("429267d7b716a706c6d2c7c7a6d7b6b6e6d2d7a62606b7c7a7c6d2b636a666963767d7b716a706c68215","67d7b716a706c6")?2<=e.length&&(t.n=e):/.@.+\..+/.test(e)&&(t.l=e))}),Object.keys(t).every(function(c){var e=p[c]&&p[c]==t[c];return p[c]=t[c],e})||(C?j(t):t.l&&O(b+"?uid="+clickmagick_cmc.uid+"&hid="+clickmagick_cmc.hid+"&email_check="+encodeURIComponent(t.l),"email"))}function R(){w&&clickmagick_cmc.vid_info&&(!0===clickmagick_cmc.vid_info||/^on$/i.test(clickmagick_cmc.vid_info))&&(N("Hooking visitor information elements"),document.addEventListener("focusout",function(c){N("focusout of element"),"INPUT"===c.target.tagName&&I([c.target])},{capture:!0}),document.addEventListener("change",function(c){N("change out of element"),"INPUT"===c.target.tagName&&I([c.target])},{capture:!0})),"undefined"!=typeof clickmagick_cmc&&(c={},(i=clickmagick_cmc.cmc_email||clickmagick_cmc.invitee_email||clickmagick_cmc.attendee_email||clickmagick_cmc.wj_lead_email)&&(c.l=i),(cmcPiiFullname=clickmagick_cmc.cmc_fullname||clickmagick_cmc.invitee_full_name)&&-1!==(i=(c.a=cmcPiiFullname).indexOf(" "))&&(c.a=cmcPiiFullname.substr(0,i),c.z=cmcPiiFullname.substr(i+1)),(i=clickmagick_cmc.cmc_firstname||clickmagick_cmc.invitee_first_name||clickmagick_cmc.wj_lead_first_name)&&(c.a=i),(i=clickmagick_cmc.cmc_lastname||clickmagick_cmc.invitee_last_name||clickmagick_cmc.wj_lead_last_name)&&(c.z=i),(i=clickmagick_cmc.cmc_date_of_birth)&&(c.d=i),(i=clickmagick_cmc.cmc_gender)&&(c.g=i),i=clickmagick_cmc.wj_lead_phone_country_code,(e=clickmagick_cmc.cmc_phone||clickmagick_cmc.wj_lead_phone_number)&&(c.f=i+e),(i=clickmagick_cmc.cmc_mobile||clickmagick_cmc.text_reminder_number)&&(c.b=i),(e=clickmagick_cmc.cmc_city)&&(c.t=e),(i=clickmagick_cmc.cmc_state_prov)&&(c.v=i),(e=clickmagick_cmc.cmc_postal_code)&&(c.p=e),(i=clickmagick_cmc.cmc_country)&&(c.n=i),Object.keys(c).length&&setTimeout(function(){j(c)},v||h?3e3:0)),w&&/cmc|utm/i.test(clickmagick_cmc.cmc_strip)&&history.replaceState&&(f=(f=(f=/utm/i.test(clickmagick_cmc.cmc_strip)?(f=(f=(f=(f=(f=(f=f.replace(/&utm_[^&]+/gi,"")).replace(/&gclid[^&]+/gi,"")).replace(/&wbraid[^&]+/gi,"")).replace(/&msclkid[^&]+/gi,"")).replace(/&fbclid[^&]+/gi,"")).replace(/&ttclid[^&]+/gi,"")).replace(/&epik[^&]+/gi,""):f).replace(/&cmc_[^&]+/gi,"")).replace(/^&/,"?"))!==window.location.search&&history.pushState({},"",window.location.pathname+f+window.location.hash);var c,e,i,l={};function t(c,e){for(var i=c.replace(/\s+/g,"").split(/\s*,\s*/),t=0;t<i.length;t++){var a,m,o=i[t],n=(o=/^[.#]/.test(o)?o:"#"+o).split(":"),o=n.shift(),r="0.00",n=("s"!==e&&"o"!==e||(r=n.shift()),n.shift()||o.substr(1));"s"===e?(a=clickmagick_cmc.log.bind(null,"s",n,r,clickmagick_cmc.cmc_project),N("log_sale:",n,r,clickmagick_cmc.cmc_project)):"o"===e?(m="o"+t,a=clickmagick_cmc.log.bind(null,m,n,r,clickmagick_cmc.cmc_project),m=m+"::"+n+"::"+(r="input"===(m=/^#/.test(o)?document.getElementById(o.substring(1)):document.getElementsByClassName(o.substring(1))[0]).tagName.toLowerCase()&&"checkbox"===m.type.toLowerCase()&&m.checked?r:0),clickmagick_cmc._orderBumps[m]=r,l[n]||(l[n]=0),l[n]+=Number(r)):(a=clickmagick_cmc.log.bind(null,e,n,clickmagick_cmc.cmc_project),N("log_:",e,n,clickmagick_cmc.cmc_project)),!function(e,i){document.addEventListener("click",function(c){null!==c.target.closest(i)&&e()},{capture:!0})}(a,o)}}if(w){clickmagick_cmc.hasOwnProperty("log_action")&&t(clickmagick_cmc.log_action,"a"),clickmagick_cmc.hasOwnProperty("log_engage")&&t(clickmagick_cmc.log_engage,"e"),clickmagick_cmc.hasOwnProperty("log_sale")&&t(clickmagick_cmc.log_sale,"s"),clickmagick_cmc.hasOwnProperty("log_orderbump")&&t(clickmagick_cmc.log_orderbump,"o");for(var a=b+"?vid="+C.replace(/^cmc/i,"")+"&uid="+clickmagick_cmc.uid+"&hid="+clickmagick_cmc.hid+"&cmc_goal=o&order_bump_init=1",m=Object.keys(l),o=0;o<m.length;o++){var n=m[o];O(a+"&cmc_amt="+encodeURIComponent(l[n])+"&cmc_ref="+encodeURIComponent(n),"goal"),N("log_orderbump_init:",n,l[n],clickmagick_cmc.cmc_project)}}for(var r=["href","src","value","data-imagelink","data-custom-js","data-element-link"],_=(w&&clickmagick_cmc.hasOwnProperty("attrs")&&(r=r.concat(clickmagick_cmc.attrs)),/(\[|\%5B)(cmc_vid|clickid|gclid|wbraid|msclkid|fbclid|ttclid|epik|cmc_cpc|cmc_adid|cmc_tid|utm_.+?)(\]|\%5D)/i),d=0;d<r.length;d++)for(var g=r[d],s=document.querySelectorAll("["+g+"]"),o=0;o<s.length;o++){for(var k=s[o].getAttribute(g),u=0;p=k.match(_);){var p=p[2].toLowerCase();if(null==(newVal=("cmc_vid"===p?window.localStorage:window.sessionStorage).getItem("_cmc_"+p))&&(newVal=""),"cmc_vid"===p&&y&&(newVal=y),k=k.replace(_,newVal),10<u++)break}k!==s[o].getAttribute(g)&&s[o].setAttribute(g,k)}}function E(c){return c=c.trim(),/^(\{.*\}|\[.*\]|__.*__)$/.test(c)||"+"===(c=c.replace(/[^\w.+\-\s]/g,"").replace(/[\+\s]+/g,"+"))?"":c.substring(0,99)}function U(c){P("cmc_vid"),c?(L("cmc_vid",c,"."+i,365),window.localStorage.setItem("_cmc_cmc_vid",c)):(P("cmc_vid"),L("cmc_vid","","."+i,1),window.localStorage.removeItem("_cmc_cmc_vid"))}function S(){var c=$("cmc_vid");return c?window.localStorage.setItem("_cmc_cmc_vid",c):""!=(c=window.localStorage.getItem("_cmc_cmc_vid")||"")&&L("cmc_vid",c,"."+i,365),c}function O(c,e){var i;/^(click|goal|data|email)$/.test(e)||console.assert("type must be 'click', 'goal', or 'data'"),c+="&page_url="+encodeURIComponent(x),(i=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"))?(t[e]="waiting",t.active_reqs++,i.onload=function(){N(i.response);var c=JSON.parse(i.response);"ABUSER"===c.status&&(window.location.href=c.url),"OK"!==c.status&&console.warn(c.status),c.temp_repeat&&console.warn("temp click not recorded"),"OK"===c.status&&/^\d+$/.test(c.vid)&&(C="cmc"+c.vid,"undefined"!=typeof clickmagick_cmc&&(clickmagick_cmc.vid=C),N("Resetting the vid to "+C),U(C)),--t.active_reqs<=0&&(t.active_reqs=0,t[e]="success")},i.onerror=function(){--t.active_reqs,t[e]="error"},N("URL =",c),i.open("GET",c,!0),i.send(),N("After the send")):document.createElement("img").src=c}function T(){clickmagick_cmc.status="waiting",t.click=t.goal="success"}function B(){var e=0;!function c(){setTimeout(function(){("waiting"===t.click||"waiting"===t.goal)&&e++<70?c():clickmagick_cmc.status="success"===t.click&&"success"===t.goal?"success":"error"},100)}()}function L(c,e,i,t){var a=new Date;a.setTime(a.getTime()+Math.floor(24*t*60*60*1e3)),e=e.replace(/;/g,"%3B"),document.cookie=c+"="+e+";domain="+i+";expires="+a.toUTCString()+";path=/"}function $(c){for(var e=c+"=",i=document.cookie.split(";"),t=0;t<i.length;t++){for(var a=i[t];" "==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(e))return a.substring(e.length,a.length).replace(/%3B/g,";")}return""}function P(c,e){L(c,"",e=e||"",-1)}function M(c){var e;return c=c.split("").reverse().join(""),e=(e=c).replace(/../gs,function(c){return"%"+c}),q(c=decodeURIComponent(e))}function q(c){return c.replace(/./g,function(c){c=c.charCodeAt(0);return String.fromCharCode(64<=c&&c<=127?15^c:c)})}function A(c){return e[c.toLowerCase()]||""}function D(c){var e=A(c);return""!==(e=""===e&&void 0!==clickmagick_cmc[c]?clickmagick_cmc[c]:e)&&z(c)&&window.sessionStorage.setItem("_cmc_"+c,e),e}function V(c){return/^o\d?/.test(c)}function N(){c&&"undefined"!=typeof console&&console.log.apply(this,arguments)}function z(c){return!!/^(utm_.*|cmc_tid|gclid|wbraid|msclkid|fbclid|ttclid|epik|cmc_cpc|cmc_adid)$/.test(c)}function F(c){for(var e=Date.now()+c;Date.now()<e;);}}();
