(function(V,O){var d=V.PIE||(V.PIE={});d.va=function(b){var a,c,e,f,h=arguments;a=1;for(c=h.length;a<c;a++){f=h[a];for(e in f)if(f.hasOwnProperty(e))b[e]=f[e]}return b};d.va(d,{i:"-pie-",Ka:"Pie",fa:"pie_",Sc:{TD:1,TH:1},ac:{TABLE:1,THEAD:1,TBODY:1,TFOOT:1,TR:1,INPUT:1,TEXTAREA:1,SELECT:1,OPTION:1,IMG:1,HR:1},ub:{A:1,INPUT:1,TEXTAREA:1,SELECT:1,BUTTON:1},qd:{submit:1,button:1,reset:1},hc:function(){}});try{O.execCommand("BackgroundImageCache",false,true)}catch(ea){}(function(){for(var b=4,a=O.createElement("div"),
c=a.getElementsByTagName("i");a.innerHTML="<!--[if gt IE "+ ++b+"]><i></i><![endif]--\>",c[0];);d.Ua=b;if(b===6)d.i=d.i.replace(/^-/,"");d.P=O.documentMode||d.Ua;a.innerHTML='<v:shape adj="1"/>';b=a.firstChild;b.style.behavior="url(#default#VML)";d.Db=typeof b.adj==="object"})();(function(){var b=0,a={};d.na={Sa:function(c){return c&&c._pieId||(c._pieId="_"+b++)},Zc:function(c,e,f){var h=a[c],l,j;if(h)Object.prototype.toString.call(h)==="[object Array]"?h.push([e,f]):e.call(f,h);else{j=a[c]=[[e,f]];
l=new Image;l.onload=function(){h=a[c]={g:l.width,f:l.height};for(var g=0,m=j.length;g<m;g++)j[g][0].call(j[g][1],h);l.onload=null};l.src=c}}}})();d.Ga={Uc:{top:0,right:90,bottom:180,left:270},nc:function(b,a,c,e){b=e.T;e=e.ta;var f;if(b)b=b.ec();else if(e)if(e[1]){b=e[0]=="top"||e[1]=="top"?a:-a;e=e[0]=="left"||e[1]=="left"?-c:c;b=Math.atan2(e,b)*180/Math.PI}else b=this.Uc[e[0]];else b=180;for(;b<0;)b+=360;b%=360;f=d.Ga.Fc(a/2,c/2,b,b>=180?0:a,b<90||b>270?0:c);e=f[0];f=f[1];a=a-e;c=c-f;return{T:b,
ic:e,jc:f,Pc:a,Qc:c,zc:d.Ga.fc(a,c,e,f)}},Fc:function(b,a,c,e,f){if(c===0||c===180)return[b,f];else if(c===90||c===270)return[e,a];else{c=Math.tan((c-90)*Math.PI/180);b=c*b-a;a=-1/c;e=a*e-f;f=a-c;return[(e-b)/f,(c*e-a*b)/f]}},fc:function(b,a,c,e){b=c-b;a=e-a;return Math.abs(b===0?a:a===0?b:Math.sqrt(b*b+a*a))}};d.L=function(){this.Za=[];this.yb={}};d.L.prototype={I:function(b){var a=d.na.Sa(b),c=this.yb,e=this.Za;if(!(a in c)){c[a]=e.length;e.push(b)}},aa:function(b){b=d.na.Sa(b);var a=this.yb;if(b&&
b in a){delete this.Za[a[b]];delete a[b]}},Y:function(){for(var b=this.Za,a=b.length;a--;)b[a]&&b[a]()}};d.ha=new d.L;d.ha.Kc=function(){var b=this,a;if(!b.Lc){a=O.documentElement.currentStyle.getAttribute(d.i+"poll-interval")||250;(function c(){b.Y();setTimeout(c,a)})();b.Lc=1}};(function(){function b(){d.D.Y();V.detachEvent("onunload",b);V.PIE=null}d.D=new d.L;V.attachEvent("onunload",b);d.D.Oa=function(a,c,e){a.attachEvent(c,e);this.I(function(){a.detachEvent(c,e)})}})();d.ja=new d.L;d.D.Oa(V,
"onresize",function(){d.ja.Y()});(function(){function b(){d.Ja.Y()}d.Ja=new d.L;d.D.Oa(V,"onscroll",b);d.ja.I(b)})();d.Ia=new d.L;d.D.Oa(O,"onmouseup",function(){d.Ia.Y()});d.gd=function(){function b(g){this.q=g}var a=O.createElement("length-calc"),c=O.body||O.documentElement,e=a.style,f={},h=["mm","cm","in","pt","pc"],l=h.length,j={};e.position="absolute";e.top=e.left="-9999px";for(c.appendChild(a);l--;){e.width="100"+h[l];f[h[l]]=a.offsetWidth/100}c.removeChild(a);e.width="1em";b.prototype={bb:/(px|em|ex|mm|cm|in|pt|pc|%)$/,
qc:function(){var g=this.Cc;if(g===void 0)g=this.Cc=parseFloat(this.q);return g},Ta:function(){var g=this.Vc;if(!g)g=this.Vc=(g=this.q.match(this.bb))&&g[0]||"px";return g},c:function(g,m){var i=this.qc(),n=this.Ta();switch(n){case "px":return i;case "%":return i*(typeof m==="function"?m():m)/100;case "em":return i*this.Ra(g);case "ex":return i*this.Ra(g)/2;default:return i*f[n]}},Ra:function(g){var m=g.currentStyle.fontSize,i,n;if(m.indexOf("px")>0)return parseFloat(m);else if(g.tagName in d.ac){n=
this;i=g.parentNode;return d.m(m).c(i,function(){return n.Ra(i)})}else{g.appendChild(a);m=a.offsetWidth;a.parentNode===g&&g.removeChild(a);return m}}};b.td=function(g){return g/f.pt};d.m=function(g){return j[g]||(j[g]=new b(g))};return b}();d.Fa=function(){function b(a){this.J=a}d.m("50%");b.prototype={};return b}();d.ea=function(){function b(a,c){this.g=a;this.f=c}b.prototype={c:function(a,c,e,f,h){var l=this.g,j=this.f,g=c/e;f=f/h;if(l==="contain"){l=f>g?c:e*f;j=f>g?c/f:e}else if(l==="cover"){l=
f<g?c:e*f;j=f<g?c/f:e}else if(l==="auto"){j=j==="auto"?h:j.c(a,e);l=j*f}else{l=l.c(a,c);j=j==="auto"?l/f:j.c(a,e)}return{g:l,f:j}}};b.Ib=new b("auto","auto");return b}();d.Gb=function(){function b(a){this.q=a}b.prototype={bb:/[a-z]+$/i,Ta:function(){return this.Vb||(this.Vb=this.q.match(this.bb)[0].toLowerCase())},ec:function(){var a=this.Qb,c;if(a===undefined){a=this.Ta();c=parseFloat(this.q,10);a=this.Qb=a==="deg"?c:a==="rad"?c/Math.PI*180:a==="grad"?c/400*360:a==="turn"?c*360:0}return a}};return b}();
d.Hb=function(){function b(g,m,i){if(i<0)i+=1;else if(i>1)i-=1;return 255*(6*i<1?g+(m-g)*i*6:2*i<1?m:3*i<2?g+(m-g)*(2/3-i)*6:g)}function a(g){this.q=g}var c={};a.Jc=/\s*rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(,\s*(\d+|\d*\.\d+))?\s*\)\s*/;a.uc=/\s*hsla?\(\s*(\d*\.?\d+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(,\s*(\d+|\d*\.\d+))?\s*\)\s*/;a.wa={};for(var e="black|0|navy|3k|darkblue|b|mediumblue|1u|blue|1e|darkgreen|jk1|green|5j4|teal|3k|darkcyan|26j|deepskyblue|ad0|darkturquoise|2xe|mediumspringgreen|8nd|lime|va|springgreen|3j|aqua|3k|cyan|0|midnightblue|xunl|dodgerblue|7ogf|lightseagreen|2zsb|forestgreen|2lbs|seagreen|guut|darkslategray|12pk|limegreen|4wkj|mediumseagreen|dwlb|turquoise|5v8f|royalblue|r2p|steelblue|75qr|darkslateblue|2fh3|mediumturquoise|ta9|indigo|32d2|darkolivegreen|emr1|cadetblue|ebu9|cornflowerblue|6z4d|mediumaquamarine|3459|dimgray|3nwf|slateblue|1bok|olivedrab|1opi|slategray|6y5p|lightslategray|9vk9|mediumslateblue|5g0l|lawngreen|27ma|chartreuse|48ao|aquamarine|5w|maroon|18|purple|3k|olive|p6o|gray|3k|lightslateblue|5j7j|skyblue|4q98|lightskyblue|f|blueviolet|3bhk|darkred|15we|darkmagenta|3v|saddlebrown|djc|darkseagreen|69vg|lightgreen|1og1|mediumpurple|3ivc|darkviolet|sfv|palegreen|6zt1|darkorchid|awk|yellowgreen|292e|sienna|7r3v|brown|6sxp|darkgray|6bgf|lightblue|5vlp|greenyellow|7k9|paleturquoise|2pxb|lightsteelblue|169c|powderblue|5jc|firebrick|1rgc|darkgoldenrod|8z55|mediumorchid|2jm0|rosybrown|34jg|darkkhaki|1mfw|silver|49jp|mediumvioletred|8w5h|indianred|8tef|peru|82r|violetred|3ntd|feldspar|212d|chocolate|16eh|tan|ewe|lightgrey|1kqv|palevioletred|6h8g|metle|fnp|orchid|2dj2|goldenrod|abu|crimson|20ik|gainsboro|13mo|plum|12pt|burlywood|1j8q|lightcyan|3794|lavender|8agr|darksalmon|3rsw|violet|6wz8|palegoldenrod|k3g|lightcoral|28k6|khaki|k5o|aliceblue|3n7|honeydew|1dd|azure|f|sandybrown|5469|wheat|1q37|beige|4kp|whitesmoke|p|mintcream|1z9|ghostwhite|46bp|salmon|25bn|antiquewhite|l7p|linen|zz|lightgoldenrodyellow|1yk|oldlace|46qc|red|1gka|magenta|73|fuchsia|0|deeppink|3v8|orangered|9kd|tomato|5zb|hotpink|19p|coral|49o|darkorange|2i8|lightsalmon|41m|orange|w6|lightpink|3i9|pink|1ze|gold|4dx|peachpuff|qh|navajowhite|s4|moccasin|16w|bisque|f|mistyrose|t|blanchedalmond|1d8|papayawhip|so|lavenderblush|80|seashell|zd|cornsilk|ku|lemonchiffon|dt|floralwhite|z|snow|a|yellow|sm|lightyellow|68|ivory|g|white|f".split("|"),
f=0,h=e.length,l=0,j;f<h;f+=2){l+=parseInt(e[f+1],36);j=l.toString(16);a.wa[e[f]]="#000000".slice(0,-j.length)+j}a.prototype={parse:function(){if(!this.Ma){var g=this.q,m;if(m=g.match(a.Jc)){g=this.Cb(+m[1],+m[2],+m[3]);m=m[5]?+m[5]:1}else if(m=g.match(a.uc)){var i=m[1],n=m[2],q=m[3],x,t;g=Math.round;n/=100;q/=100;if(n){n=q<=0.5?q*(n+1):q+n-q*n;x=q*2-n;i=i%360/360;q=b(x,n,i+1/3);t=b(x,n,i);i=b(x,n,i-1/3)}else q=t=i=q*255;g={Ic:g(q),kc:g(t),Xb:g(i)};g=this.Cb(g.Ic,g.kc,g.Xb);m=m[5]?+m[5]:1}else{if(a.wa.hasOwnProperty(m=
g.toLowerCase()))g=a.wa[m];m=g==="transparent"?0:1}this.Ma=g;this.kd=m}},Cb:function(g,m,i){return"#"+(g<16?"0":"")+g.toString(16)+(m<16?"0":"")+m.toString(16)+(i<16?"0":"")+i.toString(16)},dc:function(g){this.parse();return this.Ma==="currentColor"?d.N(g.currentStyle.color).dc(g):this.Ma}};d.N=function(g){return c[g]||(c[g]=new a(g))};return a}();d.p=function(){function b(c){this.sa=c;this.ch=0;this.J=[];this.$=0}var a=b.mb={da:1,hb:2,h:4,Jb:8,jb:16,R:32,o:64,S:128,Ha:256,ka:512,Pb:1024,URL:2048};
b.lb=function(c,e){this.e=c;this.a=e};b.lb.prototype={Wa:function(){return this.e&a.o||this.e&a.S&&this.a==="0"},H:function(){return this.Wa()||this.e&a.ka}};b.prototype={Yc:/\s/,Dc:/^[\+\-]?(\d*\.)?\d+/,url:/^url\(\s*("([^"]*)"|'([^']*)'|([!#$%&*-~]*))\s*\)/i,wb:/^\-?[_a-z][\w-]*/i,Rc:/^("([^"]*)"|'([^']*)')/,sc:/^#([\da-f]{6}|[\da-f]{3})/i,Wc:{px:a.o,em:a.o,ex:a.o,mm:a.o,cm:a.o,"in":a.o,pt:a.o,pc:a.o,deg:a.da,rad:a.da,grad:a.da},cc:{rgb:1,rgba:1,hsl:1,hsla:1},next:function(c){function e(q,x){q=
new b.lb(q,x);if(!c){m.J.push(q);m.$++}return q}function f(){m.$++;return null}var h,l,j,g,m=this;if(this.$<this.J.length)return this.J[this.$++];for(;this.Yc.test(this.sa.charAt(this.ch));)this.ch++;if(this.ch>=this.sa.length)return f();l=this.ch;h=this.sa.substring(this.ch);j=h.charAt(0);switch(j){case "#":if(g=h.match(this.sc)){this.ch+=g[0].length;return e(a.h,g[0])}break;case '"':case "'":if(g=h.match(this.Rc)){this.ch+=g[0].length;return e(a.Pb,g[2]||g[3]||"")}break;case "/":case ",":this.ch++;
return e(a.Ha,j);case "u":if(g=h.match(this.url)){this.ch+=g[0].length;return e(a.URL,g[2]||g[3]||g[4]||"")}}if(g=h.match(this.Dc)){j=g[0];this.ch+=j.length;if(h.charAt(j.length)==="%"){this.ch++;return e(a.ka,j+"%")}if(g=h.substring(j.length).match(this.wb)){j+=g[0];this.ch+=g[0].length;return e(this.Wc[g[0].toLowerCase()]||a.Jb,j)}return e(a.S,j)}if(g=h.match(this.wb)){j=g[0];this.ch+=j.length;if(j.toLowerCase()in d.Hb.wa||j==="currentColor"||j==="transparent")return e(a.h,j);if(h.charAt(j.length)===
"("){this.ch++;if(j.toLowerCase()in this.cc){h=function(q){return q&&q.e&a.S};g=function(q){return q&&q.e&(a.S|a.ka)};var i=function(q,x){return q&&q.a===x},n=function(){return m.next(1)};if((j.charAt(0)==="r"?g(n()):h(n()))&&i(n(),",")&&g(n())&&i(n(),",")&&g(n())&&(j==="rgb"||j==="hsa"||i(n(),",")&&h(n()))&&i(n(),")"))return e(a.h,this.sa.substring(l,this.ch));return f()}return e(a.jb,j)}return e(a.R,j)}this.ch++;return e(a.hb,j)},n:function(){return this.J[this.$-- -2]},all:function(){for(;this.next(););
return this.J},ba:function(c,e){for(var f=[],h,l;h=this.next();){if(c(h)){l=true;this.n();break}f.push(h)}return e&&!l?null:f}};return b}();d.gb=function(b){this.d=b};d.gb.prototype={F:0,Gc:function(){var b=this.Na,a;return!b||(a=this.Z())&&(b.x!==a.x||b.y!==a.y)},Nc:function(){var b=this.Na,a;return!b||(a=this.Z())&&(b.g!==a.g||b.f!==a.f)},vb:function(){var b=this.d,a=b.getBoundingClientRect(),c=d.P===9,e=d.Ua===7,f=a.right-a.left;return{x:a.left,y:a.top,g:c||e?b.offsetWidth:f,f:c||e?b.offsetHeight:
a.bottom-a.top,rd:e&&f?b.offsetWidth/f:1}},Z:function(){return this.F?this.oa||(this.oa=this.vb()):this.vb()},rc:function(){return!!this.Na},ua:function(){++this.F},Da:function(){if(!--this.F){if(this.oa)this.Na=this.oa;this.oa=null}}};(function(){function b(a){var c=d.na.Sa(a);return function(){if(this.F){var e=this.ob||(this.ob={});return c in e?e[c]:(e[c]=a.call(this))}else return a.call(this)}}d.k={F:0,xa:function(a){function c(e){this.d=e;this.nb=this.O()}d.va(c.prototype,d.k,a);c.Ub={};return c},
w:function(){var a=this.O(),c=this.constructor.Ub;return a?a in c?c[a]:(c[a]=this.za(a)):null},O:b(function(){var a=this.d,c=this.constructor,e=a.style;a=a.currentStyle;var f=this.Pa,h=this.ab,l=c.Sb||(c.Sb=d.i+f);c=c.Tb||(c.Tb=d.Ka+h.charAt(0).toUpperCase()+h.substring(1));return e[c]||a.getAttribute(l)||e[h]||a.getAttribute(f)}),B:b(function(){return!!this.w()}),rb:b(function(){var a=this.O(),c=a!==this.nb;this.nb=a;return c}),X:b,ua:function(){++this.F},Da:function(){--this.F||delete this.ob}}})();
d.db=d.k.xa({Pa:d.i+"background",ab:d.Ka+"Background",Wb:{scroll:1,fixed:1,local:1},Ba:{"repeat-x":1,"repeat-y":1,repeat:1,"no-repeat":1},Ab:{"padding-box":1,"border-box":1,"content-box":1},Hc:{top:1,right:1,bottom:1,left:1,center:1},Oc:{contain:1,cover:1},Tc:{top:1,bottom:1},Ac:{left:1,right:1},Aa:{ga:"backgroundClip",h:"backgroundColor",K:"backgroundImage",ia:"backgroundOrigin",s:"backgroundPosition",u:"backgroundRepeat",ma:"backgroundSize"},za:function(b){function a(o){return o&&(o.H()&&d.m(o.a)||
o.a==="auto"&&"auto")}var c=this.d.currentStyle,e,f,h,l=d.p.mb,j=l.Ha,g=l.R,m=l.h,i,n,q=0,x=this.Hc,t,v,r,k,s={G:[]};if(this.Qa()){e=new d.p(b);for(h={};f=e.next();){i=f.e;n=f.a;if(!h.z&&i&l.jb&&n==="linear-gradient"){t={Q:[],z:n};for(v={};f=e.next();){i=f.e;n=f.a;if(i&l.hb&&n===")"){v.color&&t.Q.push(v);t.Q.length>1&&d.va(h,t);break}if(i&m){if(t.T||t.ta){f=e.n();if(f.e!==j)break;e.next()}v={color:d.N(n)};f=e.next();if(f.H())v.zb=d.m(f.a);else e.n()}else if(i&l.da&&!t.T&&!t.ta&&!v.color&&!t.Q.length)t.T=
new d.Gb(f.a);else if(i&l.R&&n==="to"&&!t.ta&&!t.T&&!v.color&&!t.Q.length){r=this.Tc;k=this.Ac;f=e.ba(function(o){return!(o&&o.e&l.R&&(o.a in r||o.a in k))});i=f.length;f=[f[0]&&f[0].a,f[1]&&f[1].a];if(i<1||i>2||i>1&&(f[0]in r&&f[1]in r||f[0]in k&&f[1]in k))break;t.ta=f}else if(i&j&&n===","){if(v.color){t.Q.push(v);v={}}}else break}}else if(!h.z&&i&l.URL){h.xb=n;h.z="image"}else if((f&&f.H()||f.e&g&&f.a in x)&&!h.V){e.n();h.V=new d.Fa(e.ba(function(o){return!(o&&o.H()||o.e&g&&o.a in x)},false))}else if(i&
g)if(n in this.Ba&&!h.Va)h.Va=n;else if(n in this.Ab&&!h.qa){h.qa=n;if((f=e.next())&&f.e&g&&f.a in this.Ab)h.pa=f.a;else{h.pa=n;e.n()}}else if(n in this.Wb&&!h.pb)h.pb=n;else return null;else if(i&m&&!s.color)s.color=d.N(n);else if(i&j&&n==="/"&&!h.ra&&h.V){f=e.next();if(f.e&g&&f.a in this.Oc)h.ra=new d.ea(f.a);else if(t=a(f)){v=a(e.next());if(!v){v=t;e.n()}h.ra=new d.ea(t,v)}else return null}else if(i&j&&n===","&&h.z){h.$a=b.substring(q,e.ch-1);q=e.ch;s.G.push(h);h={}}else return null}if(h.z){h.$a=
b.substring(q);s.G.push(h)}s.bc=h.pa}else this.Eb(d.P<9?function(){var o=this.Aa,p=c[o.s+"X"],y=c[o.s+"Y"],A=c[o.K],B=c[o.h];if(B!=="transparent")s.color=d.N(B);if(A!=="none")s.G=[{z:"image",xb:(new d.p(A)).next().a,Va:c[o.u],V:new d.Fa((new d.p(p+" "+y)).all())}]}:function(){var o=this.Aa,p=/\s*,\s*/,y=c[o.K].split(p),A=c[o.h],B,J,K,M,F,G;if(A!=="transparent")s.color=d.N(A);if((M=y.length)&&y[0]!=="none"){A=c[o.u].split(p);B=c[o.s].split(p);J=c[o.ia].split(p);K=c[o.ga].split(p);o=c[o.ma].split(p);
s.G=[];for(p=0;p<M;p++)if((F=y[p])&&F!=="none"){G=o[p].split(" ");s.G.push({$a:F+" "+A[p]+" "+B[p]+" / "+o[p]+" "+J[p]+" "+K[p],z:"image",xb:(new d.p(F)).next().a,Va:A[p],V:new d.Fa((new d.p(B[p])).all()),qa:J[p],pa:K[p],ra:new d.ea(G[0],G[1])})}}});return s.color||s.G[0]?s:null},Eb:function(b){var a=d.P>8,c=this.Aa,e=this.d.runtimeStyle,f=e[c.K],h=e[c.h],l=e[c.u],j,g,m,i;if(f)e[c.K]="";if(h)e[c.h]="";if(l)e[c.u]="";if(a){j=e[c.ga];g=e[c.ia];i=e[c.s];m=e[c.ma];if(j)e[c.ga]="";if(g)e[c.ia]="";if(i)e[c.s]=
"";if(m)e[c.ma]=""}b=b.call(this);if(f)e[c.K]=f;if(h)e[c.h]=h;if(l)e[c.u]=l;if(a){if(j)e[c.ga]=j;if(g)e[c.ia]=g;if(i)e[c.s]=i;if(m)e[c.ma]=m}return b},O:d.k.X(function(){return this.Qa()||this.Eb(function(){var b=this.d.currentStyle,a=this.Aa;return b[a.h]+" "+b[a.K]+" "+b[a.u]+" "+b[a.s+"X"]+" "+b[a.s+"Y"]})}),Qa:d.k.X(function(){var b=this.d;return b.style[this.ab]||b.currentStyle.getAttribute(this.Pa)}),lc:function(b,a,c,e){var f=this.d,h=a.Z();a=h.g;h=h.f;if(b!=="border-box")if((c=c.w())&&(c=
c.ca)){a-=c.l.c(f)+c.r.c(f);h-=c.t.c(f)+c.b.c(f)}if(b==="content-box")if(b=e.w()){a-=b.l.c(f)+b.r.c(f);h-=b.t.c(f)+b.b.c(f)}return{g:a,f:h}},yc:function(){var b=0;if(d.Ua<7){b=this.d;b=""+(b.style[d.Ka+"PngFix"]||b.currentStyle.getAttribute(d.i+"png-fix"))==="true"}return b},B:d.k.X(function(){return(this.Qa()||this.yc())&&!!this.w()})});d.fb=d.k.xa({Mc:["Top","Right","Bottom","Left"],Bc:{thin:"1px",medium:"3px",thick:"5px"},za:function(){var b={},a={},c={},e=false,f=true,h=true,l=true;this.Fb(function(){for(var j=
this.d.currentStyle,g=0,m,i,n,q,x,t,v;g<4;g++){n=this.Mc[g];v=n.charAt(0).toLowerCase();m=a[v]=j["border"+n+"Style"];i=j["border"+n+"Color"];n=j["border"+n+"Width"];if(g>0){if(m!==q)h=false;if(i!==x)f=false;if(n!==t)l=false}q=m;x=i;t=n;c[v]=d.N(i);n=b[v]=d.m(a[v]==="none"?"0":this.Bc[n]||n);if(n.c(this.d)>0)e=true}});return e?{ca:b,ud:a,md:c,wd:l,nd:f,vd:h}:null},O:d.k.X(function(){var b=this.d,a=b.currentStyle,c;b.tagName in d.Sc&&b.offsetParent.currentStyle.borderCollapse==="collapse"||this.Fb(function(){c=
a.borderWidth+"|"+a.borderStyle+"|"+a.borderColor});return c}),Fb:function(b){var a=this.d.runtimeStyle,c=a.borderWidth,e=a.borderColor;if(c)a.borderWidth="";if(e)a.borderColor="";b=b.call(this);if(c)a.borderWidth=c;if(e)a.borderColor=e;return b}});d.eb=d.k.xa({Pa:"border-image",ab:"borderImage",Ba:{stretch:1,round:1,repeat:1,space:1},za:function(b){var a=null,c,e,f,h,l,j,g=0,m=d.p.mb,i=m.R,n=m.S,q=m.ka;if(b){c=new d.p(b);a={};for(var x=function(r){return r&&r.e&m.Ha&&r.a==="/"},t=function(r){return r&&
r.e&i&&r.a==="fill"},v=function(){h=c.ba(function(r){return!(r.e&(n|q))});if(t(c.next())&&!a.fill)a.fill=true;else c.n();if(x(c.next())){g++;l=c.ba(function(r){return!r.H()&&!(r.e&i&&r.a==="auto")});if(x(c.next())){g++;j=c.ba(function(r){return!r.Wa()})}}else c.n()};b=c.next();){e=b.e;f=b.a;if(e&(n|q)&&!h){c.n();v()}else if(t(b)&&!a.fill){a.fill=true;v()}else if(e&i&&this.Ba[f]&&!a.repeat){a.repeat={f:f};if(b=c.next())if(b.e&i&&this.Ba[b.a])a.repeat.cb=b.a;else c.n()}else if(e&m.URL&&!a.src)a.src=
f;else return null}if(!a.src||!h||h.length<1||h.length>4||l&&l.length>4||g===1&&l.length<1||j&&j.length>4||g===2&&j.length<1)return null;if(!a.repeat)a.repeat={f:"stretch"};if(!a.repeat.cb)a.repeat.cb=a.repeat.f;b=function(r,k){return{t:k(r[0]),r:k(r[1]||r[0]),b:k(r[2]||r[0]),l:k(r[3]||r[1]||r[0])}};a.slice=b(h,function(r){return d.m(r.e&n?r.a+"px":r.a)});if(l&&l[0])a.ca=b(l,function(r){return r.H()?d.m(r.a):r.a});if(j&&j[0])a.sd=b(j,function(r){return r.Wa()?d.m(r.a):r.a})}return a}});d.kb=d.k.xa({za:function(b){b=
new d.p(b);for(var a=[],c;(c=b.next())&&c.H();)a.push(d.m(c.a));return a.length>0&&a.length<5?{t:a[0],r:a[1]||a[0],b:a[2]||a[0],l:a[3]||a[1]||a[0]}:null},O:d.k.X(function(){var b=this.d,a=b.runtimeStyle,c=a.padding;if(c)a.padding="";b=b.currentStyle.padding;if(c)a.padding=c;return b})});d.la={Ya:function(b){function a(c,e,f,h){this.d=c;this.qb=e;this.C=f;this.parent=h}d.va(a.prototype,d.la,b);return a},Xa:function(){return false},Bb:d.hc,Ea:function(){this.B()?this.sb():this.j()},tc:function(){this.d.runtimeStyle.borderColor=
"transparent"},j:function(){}};d.Mb=d.la.Ya({Ec:/^,+|,+$/g,xc:/,+/g,Ca:function(b,a){(this.La||(this.La=[]))[b]=a||void 0},Ea:function(){var b=this.La,a;if(b&&(a=b.join(",").replace(this.Ec,"").replace(this.xc,","))!==this.Rb)this.Rb=this.d.runtimeStyle.background=a},j:function(){this.d.runtimeStyle.background="";delete this.La}});d.Kb=d.la.Ya({gc:O.createElement("canvas"),U:1,Xa:function(){return this.C.M.rb()},B:function(){var b=this.C;return b.M.B()||b.v.B()},sb:function(){var b=this.C,a=b.M,c=
a.w(),e,f,h=0,l,j;if(c){e=[];if(f=c.G)for(;l=f[h++];)if(l.z==="linear-gradient"){j=a.lc(e.qa,this.qb,b.W,b.ya);j=(l.ra||d.ea.Ib).c(this.d,j.g,j.f,j.g,j.f);e.push("url("+this.mc(l,j.g,j.f)+") "+this.Yb(l.V)+" / "+j.g+"px "+j.f+"px "+(l.pb||"")+" "+(l.qa||"")+" "+(l.pa||""))}else e.push(l.$a);if(c.color)e.push(c.color.q+" "+(c.bc||""));this.parent.Ca(this.U,e.join(","))}},Yb:function(b){return b?b.J.map(function(a){return a.a}).join(" "):"0 0"},mc:function(b,a,c){var e=this.d,f=b.Q,h=f.length,l=d.Ga.nc(e,
a,c,b);b=l.zc;var j=this.gc,g=j.getContext("2d");l=g.createLinearGradient(l.Pc,l.Qc,l.ic,l.jc);var m=[],i,n,q;for(i=0;i<h;i++)m.push(f[i].zb?f[i].zb.c(e,b):i===0?0:i===h-1?b:null);for(i=1;i<h;i++)if(m[i]===null){n=m[i-1];e=i;do q=m[++e];while(q===null);m[i]=n+(q-n)/(e-i+1)}for(i=0;i<h;i++)l.addColorStop(m[i]/b,f[i].color.q);j.width=a;j.height=c;g.fillStyle=l;g.fillRect(0,0,a,c);return j.toDataURL()},j:function(){this.parent.Ca(this.U)}});d.Lb=d.la.Ya({u:"repeat",Ob:"stretch",Nb:"round",U:0,Xa:function(){return this.C.v.rb()},
B:function(){return this.C.v.B()},sb:function(){var b=this,a=b.C.v.w(),c=b.C.W.w(),e=b.qb.Z(),f=a.repeat,h=f.f,l=f.cb,j=b.d,g=0;d.na.Zc(a.src,function(m){function i(w,P,W,X,Y,Z,$,aa,S,u){H.push('<pattern patternUnits="userSpaceOnUse" id="pattern'+C+'" x="'+(h===r?w+W/2-S/2:w)+'" y="'+(l===r?P+X/2-u/2:P)+'" width="'+S+'" height="'+u+'"><svg width="'+S+'" height="'+u+'" viewBox="'+Y+" "+Z+" "+$+" "+aa+'" preserveAspectRatio="none"><image xlink:href="'+v+'" x="0" y="0" width="'+x+'" height="'+t+'" /></svg></pattern>');
I.push('<rect x="'+w+'" y="'+P+'" width="'+W+'" height="'+X+'" fill="url(#pattern'+C+')" />');C++}var n=e.g,q=e.f,x=m.g,t=m.f,v=b.vc(a.src,x,t),r=b.u,k=b.Ob;m=b.Nb;var s=Math.ceil,o=d.m("0"),p=a.ca||(c?c.ca:{t:o,r:o,b:o,l:o});o=p.t.c(j);var y=p.r.c(j),A=p.b.c(j);p=p.l.c(j);var B=a.slice,J=B.t.c(j),K=B.r.c(j),M=B.b.c(j);B=B.l.c(j);var F=n-p-y,G=q-o-A,U=x-B-K,D=t-J-M,Q=h===k?F:U*o/J,T=l===k?G:D*y/K,N=h===k?F:U*A/M;k=l===k?G:D*p/B;var H=[],I=[],C=0;if(h===m){Q-=(Q-(F%Q||Q))/s(F/Q);N-=(N-(F%N||N))/s(F/
N)}if(l===m){T-=(T-(G%T||T))/s(G/T);k-=(k-(G%k||k))/s(G/k)}m=['<svg width="'+n+'" height="'+q+'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'];i(0,0,p,o,0,0,B,J,p,o);i(p,0,F,o,B,0,U,J,Q,o);i(n-y,0,y,o,x-K,0,K,J,y,o);i(0,o,p,G,0,J,B,D,p,k);if(a.fill)i(p,o,F,G,B,J,U,D,Q||N||U,k||T||D);i(n-y,o,y,G,x-K,J,K,D,y,T);i(0,q-A,p,A,0,t-M,B,M,p,A);i(p,q-A,F,A,B,t-M,U,M,N,A);i(n-y,q-A,y,A,x-K,t-M,K,M,y,A);m.push("<defs>"+H.join("\n")+"</defs>"+I.join("\n")+"</svg>");b.parent.Ca(b.U,
"url(data:image/svg+xml,"+escape(m.join(""))+") no-repeat border-box border-box");g&&b.parent.Ea()},b);g=1},vc:function(){var b={};return function(a,c,e){var f=b[a],h;if(!f){f=new Image;h=O.createElement("canvas");f.src=a;h.width=c;h.height=e;h.getContext("2d").drawImage(f,0,0);f=b[a]=h.toDataURL()}return f}}(),Bb:function(){if(this.B()){var b=this.d,a=b.runtimeStyle,c=this.C.v.w().ca;a.borderStyle="solid";if(c){a.borderTopWidth=c.t.c(b)+"px";a.borderRightWidth=c.r.c(b)+"px";a.borderBottomWidth=c.b.c(b)+
"px";a.borderLeftWidth=c.l.c(b)+"px"}this.tc()}},j:function(){var b=this.d.runtimeStyle;this.parent.Ca(this.U);b.borderColor=b.borderStyle=b.borderWidth=""}});d.ib=function(){function b(k,s){k.className+=" "+s}function a(k){var s=r.slice.call(arguments,1),o=s.length;setTimeout(function(){if(k)for(;o--;)b(k,s[o])},0)}function c(k){var s=r.slice.call(arguments,1),o=s.length;setTimeout(function(){if(k)for(;o--;){var p=s[o];p=v[p]||(v[p]=new RegExp("\\b"+p+"\\b","g"));k.className=k.className.replace(p,
"")}},0)}function e(k){if(/^normal$/i.test(k.currentStyle.zoom))k.runtimeStyle.zoom=1}function f(k){function s(u){try{k.filters["DXImageTransform.Microsoft.Gradient"].Enabled=u}catch(z){}}function o(){if(!X){var u,z,E=d.P,R=k.currentStyle,L=R.getAttribute(l)==="true",ba=R.getAttribute(g)!=="false",ca=R.getAttribute(m)!=="false";S=R.getAttribute(j);S=E>7?S!=="false":S==="true";if(!W){W=1;e(k);E<8&&k.parentNode&&k.parentNode===k.offsetParent&&e(k.parentNode);R=k;for(var da=1;R=R.previousSibling;)if(R.nodeType===
1){da=0;break}da&&b(k,x)}C.ua();if(L&&(z=C.Z())&&(u=O.documentElement||O.body)&&(z.y>u.clientHeight||z.x>u.clientWidth||z.y+z.f<0||z.x+z.g<0)){if(!$){$=1;d.Ja.I(o)}}else{X=1;$=W=0;d.Ja.aa(o);if(E===9){w={M:new d.db(k),v:new d.eb(k),W:new d.fb(k),ya:new d.kb(k)};P=[w.M,w.W,w.v,w.ya];I=new d.Mb(k,C,w);H=[new d.Kb(k,C,w,I),new d.Lb(k,C,w,I)]}else{w={M:new d.db(k),W:new d.fb(k),v:new d.eb(k),Zb:new d.bd(k),$b:new d.ed(k),ya:new d.kb(k),Xc:new d.jd(k)};P=[w.M,w.W,w.v,w.Zb,w.$b,w.ya,w.Xc];I=new d.hd(k,
C,w);H=[new d.dd(k,C,w,I),new d.$c(k,C,w,I),new d.cd(k,C,w,I),new d.ad(k,C,w,I)];k.tagName==="IMG"&&H.push(new d.fd(k,C,w,I));I.ld=H}if(u=k.currentStyle.getAttribute(d.i+"watch-ancestors")){u=parseInt(u,10);z=0;for(L=k.parentNode;L&&(u==="NaN"||z++<u);){D(L,"onpropertychange",U);D(L,"onmouseenter",B);D(L,"onmouseleave",J);D(L,"onmousedown",K);if(L.tagName in d.ub){D(L,"onfocus",F);D(L,"onblur",G)}L=L.parentNode}}if(S){d.ha.I(y);d.ha.Kc()}y(0,1)}if(!Y){Y=1;E<9&&D(k,"onmove",p);D(k,"onresize",p);D(k,
"onpropertychange",A);ca&&D(k,"onmouseenter",B);if(ca||ba)D(k,"onmouseleave",J);ba&&D(k,"onmousedown",K);if(k.tagName in d.ub){D(k,"onfocus",F);D(k,"onblur",G)}d.ja.I(p);d.D.I(Q)}C.Da()}}function p(){C&&C.rc()&&y()}function y(u,z){s(false);if(!aa)if(X){C.ua();for(var E=P.length;E--;)P[E].ua();E=0;for(var R=H.length,L=C.Nc();E<R;E++)H[E].Bb();for(E=0;E<R;E++)if(z||L||u&&H[E].Xa())H[E].Ea();if(z||L||u||C.Gc())I.Ea();for(u=P.length;u--;)P[u].Da();C.Da()}else W||o()}function A(){X&&!(event&&event.propertyName in
t)&&y(1)}function B(){a(k,i)}function J(){c(k,i,n)}function K(){a(k,n);d.Ia.I(M)}function M(){c(k,n);d.Ia.aa(M)}function F(){a(k,q)}function G(){c(k,q)}function U(){var u=event.propertyName;if(u==="className"||u==="id"||u.indexOf("style.")===0)A()}function D(u,z,E){u.attachEvent(z,E);Z.push([u,z,E])}function Q(){if(Y){for(var u=Z.length,z;u--;){z=Z[u];z[0].detachEvent(z[1],z[2])}d.D.aa(Q);Y=0;Z=[]}}function T(){if(!aa){var u,z;s(true);Q();aa=1;if(H){u=0;for(z=H.length;u<z;u++){H[u].pd=1;H[u].j()}}I.j();
S&&d.ha.aa(y);d.ja.aa(y);H=I=C=w=P=k=null;N.tb=N=0}}var N=this,H,I,C=new d.gb(k),w,P,W,X,Y,Z=[],$,aa,S;N.tb=k;N.wc=o;N.j=T}var h={},l=d.i+"lazy-init",j=d.i+"poll",g=d.i+"track-active",m=d.i+"track-hover",i=d.fa+"hover",n=d.fa+"active",q=d.fa+"focus",x=d.fa+"first-child",t={background:1,bgColor:1,display:1},v={},r=[];f.oc=function(k){var s=k.uniqueID;return h[s]||(h[s]=new f(k))};f.j=function(k){k=k.uniqueID;var s=h[k];if(s){s.j();delete h[k]}};f.od=function(){var k=[],s;if(h){for(var o in h)if(h.hasOwnProperty(o)){s=
h[o];k.push(s.tb);s.j()}h={}}return k};return f}();d.version="2.0beta2-SNAPSHOT";d.supportsVML=d.Db;d.attach=function(b){if(d.P===9||d.P<9&&d.Db)d.ib.oc(b).wc()};d.detach=function(b){d.ib.j(b)}})(window,document);
