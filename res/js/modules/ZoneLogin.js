!function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=231)}({19:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o;!function(){function t(t){this.mode=h.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,r=this.data.length;e<r;e++){var o=[],n=this.data.charCodeAt(e);n>65536?(o[0]=240|(1835008&n)>>>18,o[1]=128|(258048&n)>>>12,o[2]=128|(4032&n)>>>6,o[3]=128|63&n):n>2048?(o[0]=224|(61440&n)>>>12,o[1]=128|(4032&n)>>>6,o[2]=128|63&n):n>128?(o[0]=192|(1984&n)>>>6,o[1]=128|63&n):o[0]=n,this.parsedData.push(o)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function r(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var o=0;o<t.length-r;o++)this.num[o]=t[o+r]}function n(t,e){this.totalCount=t,this.dataCount=e}function i(){this.buffer=[],this.length=0}function a(){console.log(this);var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var r=e.toString().match(/android ([0-9]\.[0-9])/i);r&&r[1]&&(t=parseFloat(r[1]))}return t}function s(t,e){for(var r=1,o=u(t),n=0,i=p.length;n<=i;n++){var a=0;switch(e){case l.L:a=p[n][0];break;case l.M:a=p[n][1];break;case l.Q:a=p[n][2];break;case l.H:a=p[n][3]}if(o<=a)break;r++}if(r>p.length)throw new Error("Too long data");return r}function u(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,r=this.parsedData.length;e<r;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){var r=new t(e);this.dataList.push(r),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,r){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++){this.modules[o]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[o][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,r),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,r)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var o=-1;o<=7;o++)e+o<=-1||this.moduleCount<=e+o||(this.modules[t+r][e+o]=0<=r&&r<=6&&(0==o||6==o)||0<=o&&o<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=o&&o<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var o=c.getLostPoint(this);(0==r||t>o)&&(t=o,e=r)}return e},createMovieClip:function(t,e,r){var o=t.createEmptyMovieClip(e,r);this.make();for(var n=0;n<this.modules.length;n++)for(var i=1*n,a=0;a<this.modules[n].length;a++){var s=1*a,u=this.modules[n][a];u&&(o.beginFill(0,100),o.moveTo(s,i),o.lineTo(s+1,i),o.lineTo(s+1,i+1),o.lineTo(s,i+1),o.endFill())}return o},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=c.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var o=t[e],n=t[r];if(null==this.modules[o][n])for(var i=-2;i<=2;i++)for(var a=-2;a<=2;a++)this.modules[o+i][n+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},setupTypeNumber:function(t){for(var e=c.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var o=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=o}for(var r=0;r<18;r++){var o=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=o}},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,o=c.getBCHTypeInfo(r),n=0;n<15;n++){var i=!t&&1==(o>>n&1);n<6?this.modules[n][8]=i:n<8?this.modules[n+1][8]=i:this.modules[this.moduleCount-15+n][8]=i}for(var n=0;n<15;n++){var i=!t&&1==(o>>n&1);n<8?this.modules[8][this.moduleCount-n-1]=i:n<9?this.modules[8][15-n-1+1]=i:this.modules[8][15-n-1]=i}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,o=this.moduleCount-1,n=7,i=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var s=0;s<2;s++)if(null==this.modules[o][a-s]){var u=!1;i<t.length&&(u=1==(t[i]>>>n&1));var h=c.getMask(e,o,a-s);h&&(u=!u),this.modules[o][a-s]=u,n--,-1==n&&(i++,n=7)}if((o+=r)<0||this.moduleCount<=o){o-=r,r=-r;break}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,r,o){for(var a=n.getRSBlocks(t,r),s=new i,u=0;u<o.length;u++){var h=o[u];s.put(h.mode,4),s.put(h.getLength(),c.getLengthInBits(h.mode,t)),h.write(s)}for(var l=0,u=0;u<a.length;u++)l+=a[u].dataCount;if(s.getLengthInBits()>8*l)throw new Error("code length overflow. ("+s.getLengthInBits()+">"+8*l+")");for(s.getLengthInBits()+4<=8*l&&s.put(0,4);s.getLengthInBits()%8!=0;)s.putBit(!1);for(;;){if(s.getLengthInBits()>=8*l)break;if(s.put(e.PAD0,8),s.getLengthInBits()>=8*l)break;s.put(e.PAD1,8)}return e.createBytes(s,a)},e.createBytes=function(t,e){for(var o=0,n=0,i=0,a=new Array(e.length),s=new Array(e.length),u=0;u<e.length;u++){var h=e[u].dataCount,l=e[u].totalCount-h;n=Math.max(n,h),i=Math.max(i,l),a[u]=new Array(h);for(var f=0;f<a[u].length;f++)a[u][f]=255&t.buffer[f+o];o+=h;var d=c.getErrorCorrectPolynomial(l),g=new r(a[u],d.getLength()-1),p=g.mod(d);s[u]=new Array(d.getLength()-1);for(var f=0;f<s[u].length;f++){var v=f+p.getLength()-s[u].length;s[u][f]=v>=0?p.get(v):0}}for(var m=0,f=0;f<e.length;f++)m+=e[f].totalCount;for(var _=new Array(m),w=0,f=0;f<n;f++)for(var u=0;u<e.length;u++)f<a[u].length&&(_[w++]=a[u][f]);for(var f=0;f<i;f++)for(var u=0;u<e.length;u++)f<s[u].length&&(_[w++]=s[u][f]);return _};for(var h={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},l={L:1,M:0,Q:3,H:2},f={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},c={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;c.getBCHDigit(e)-c.getBCHDigit(c.G15)>=0;)e^=c.G15<<c.getBCHDigit(e)-c.getBCHDigit(c.G15);return(t<<10|e)^c.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;c.getBCHDigit(e)-c.getBCHDigit(c.G18)>=0;)e^=c.G18<<c.getBCHDigit(e)-c.getBCHDigit(c.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return c.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case f.PATTERN000:return(e+r)%2==0;case f.PATTERN001:return e%2==0;case f.PATTERN010:return r%3==0;case f.PATTERN011:return(e+r)%3==0;case f.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case f.PATTERN101:return e*r%2+e*r%3==0;case f.PATTERN110:return(e*r%2+e*r%3)%2==0;case f.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new r([1],0),o=0;o<t;o++)e=e.multiply(new r([1,d.gexp(o)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case h.MODE_NUMBER:return 10;case h.MODE_ALPHA_NUM:return 9;case h.MODE_8BIT_BYTE:case h.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case h.MODE_NUMBER:return 12;case h.MODE_ALPHA_NUM:return 11;case h.MODE_8BIT_BYTE:return 16;case h.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case h.MODE_NUMBER:return 14;case h.MODE_ALPHA_NUM:return 13;case h.MODE_8BIT_BYTE:return 16;case h.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,o=0;o<e;o++)for(var n=0;n<e;n++){for(var i=0,a=t.isDark(o,n),s=-1;s<=1;s++)if(!(o+s<0||e<=o+s))for(var u=-1;u<=1;u++)n+u<0||e<=n+u||0==s&&0==u||a==t.isDark(o+s,n+u)&&i++;i>5&&(r+=3+i-5)}for(var o=0;o<e-1;o++)for(var n=0;n<e-1;n++){var h=0;t.isDark(o,n)&&h++,t.isDark(o+1,n)&&h++,t.isDark(o,n+1)&&h++,t.isDark(o+1,n+1)&&h++,0!=h&&4!=h||(r+=3)}for(var o=0;o<e;o++)for(var n=0;n<e-6;n++)t.isDark(o,n)&&!t.isDark(o,n+1)&&t.isDark(o,n+2)&&t.isDark(o,n+3)&&t.isDark(o,n+4)&&!t.isDark(o,n+5)&&t.isDark(o,n+6)&&(r+=40);for(var n=0;n<e;n++)for(var o=0;o<e-6;o++)t.isDark(o,n)&&!t.isDark(o+1,n)&&t.isDark(o+2,n)&&t.isDark(o+3,n)&&t.isDark(o+4,n)&&!t.isDark(o+5,n)&&t.isDark(o+6,n)&&(r+=40);for(var l=0,n=0;n<e;n++)for(var o=0;o<e;o++)t.isDark(o,n)&&l++;return r+=Math.abs(100*l/e/e-50)/5*10}},d={glog:function(t){if(t<1)throw new Error("glog("+t+")");return d.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return d.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},g=0;g<8;g++)d.EXP_TABLE[g]=1<<g;for(var g=8;g<256;g++)d.EXP_TABLE[g]=d.EXP_TABLE[g-4]^d.EXP_TABLE[g-5]^d.EXP_TABLE[g-6]^d.EXP_TABLE[g-8];for(var g=0;g<255;g++)d.LOG_TABLE[d.EXP_TABLE[g]]=g;r.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),o=0;o<this.getLength();o++)for(var n=0;n<t.getLength();n++)e[o+n]^=d.gexp(d.glog(this.get(o))+d.glog(t.get(n)));return new r(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=d.glog(this.get(0))-d.glog(t.get(0)),o=new Array(this.getLength()),n=0;n<this.getLength();n++)o[n]=this.get(n);for(var n=0;n<t.getLength();n++)o[n]^=d.gexp(d.glog(t.get(n))+e);return new r(o,0).mod(t)}},n.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],n.getRSBlocks=function(t,e){var r=n.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=r.length/3,i=[],a=0;a<o;a++)for(var s=r[3*a+0],u=r[3*a+1],h=r[3*a+2],l=0;l<s;l++)i.push(new n(u,h));return i},n.getRsBlockTable=function(t,e){switch(e){case l.L:return n.RS_BLOCK_TABLE[4*(t-1)+0];case l.M:return n.RS_BLOCK_TABLE[4*(t-1)+1];case l.Q:return n.RS_BLOCK_TABLE[4*(t-1)+2];case l.H:return n.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},i.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var p=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],v=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){function e(t,e){var r=document.createElementNS("http://www.w3.org/2000/svg",t);for(var o in e)e.hasOwnProperty(o)&&r.setAttribute(o,e[o]);return r}var r=this._htOption,o=this._el,n=t.getModuleCount();Math.floor(r.width/n),Math.floor(r.height/n);this.clear();var i=e("svg",{viewBox:"0 0 "+String(n)+" "+String(n),width:"100%",height:"100%",fill:r.colorLight});i.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),o.appendChild(i),i.appendChild(e("rect",{fill:r.colorLight,width:"100%",height:"100%"})),i.appendChild(e("rect",{fill:r.colorDark,width:"1",height:"1",id:"template"}));for(var a=0;a<n;a++)for(var s=0;s<n;s++)if(t.isDark(a,s)){var u=e("use",{x:String(s),y:String(a)});u.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),i.appendChild(u)}},t.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},t}(),m="svg"===document.documentElement.tagName.toLowerCase(),_=m?v:function(){return"undefined"!=typeof CanvasRenderingContext2D}()?function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function e(t,e){var r=this;if(r._fFail=e,r._fSuccess=t,null===r._bSupportDataURI){var o=document.createElement("img"),n=function(){r._bSupportDataURI=!1,r._fFail&&r._fFail.call(r)},i=function(){r._bSupportDataURI=!0,r._fSuccess&&r._fSuccess.call(r)};return o.onabort=n,o.onerror=n,o.onload=i,void(o.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===r._bSupportDataURI&&r._fSuccess?r._fSuccess.call(r):!1===r._bSupportDataURI&&r._fFail&&r._fFail.call(r)}var r=a();if(r&&r<=2.1){var o=1/window.devicePixelRatio,n=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,e,r,i,a,s,u,h,l){if("nodeName"in t&&/img/i.test(t.nodeName))for(var f=arguments.length-1;f>=1;f--)arguments[f]=arguments[f]*o;else void 0===h&&(arguments[1]*=o,arguments[2]*=o,arguments[3]*=o,arguments[4]*=o);n.apply(this,arguments)}}var i=function(t,e){this._bIsPainted=!1,this._android=a(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return i.prototype.draw=function(t){var e=this._elImage,r=this._oContext,o=this._htOption,n=t.getModuleCount(),i=o.width/n,a=o.height/n,s=Math.round(i),u=Math.round(a);e.style.display="none",this.clear();for(var h=0;h<n;h++)for(var l=0;l<n;l++){var f=t.isDark(h,l),c=l*i,d=h*a;r.strokeStyle=f?o.colorDark:o.colorLight,r.lineWidth=1,r.fillStyle=f?o.colorDark:o.colorLight,r.fillRect(c,d,i,a),r.strokeRect(Math.floor(c)+.5,Math.floor(d)+.5,s,u),r.strokeRect(Math.ceil(c)-.5,Math.ceil(d)-.5,s,u)}this._bIsPainted=!0},i.prototype.makeImage=function(){this._bIsPainted&&e.call(this,t)},i.prototype.isPainted=function(){return this._bIsPainted},i.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},i.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},i}():function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,r=this._el,o=t.getModuleCount(),n=Math.floor(e.width/o),i=Math.floor(e.height/o),a=['<table style="border:0;border-collapse:collapse;">'],s=0;s<o;s++){a.push("<tr>");for(var u=0;u<o;u++)a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+n+"px;height:"+i+"px;background-color:"+(t.isDark(s,u)?e.colorDark:e.colorLight)+';"></td>');a.push("</tr>")}a.push("</table>"),r.innerHTML=a.join("");var h=r.childNodes[0],l=(e.width-h.offsetWidth)/2,f=(e.height-h.offsetHeight)/2;l>0&&f>0&&(h.style.margin=f+"px "+l+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}();o=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:l.H},"string"==typeof e&&(e={text:e}),e)for(var r in e)this._htOption[r]=e[r];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(_=v),this._android=a(),this._el=t,this._oQRCode=null,this._oDrawing=new _(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},o.prototype.makeCode=function(t){this._oQRCode=new e(s(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},o.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},o.prototype.clear=function(){this._oDrawing.clear()},o.CorrectLevel=l}(),e.default=o},231:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var n=r(39),i=o(n),a=r(19),s=o(a);r(232);var u=$("#qecode_data").val();new s.default($(".qrcode")[0],{text:"your content",width:256,height:256,colorDark:"#000000",colorLight:"#ffffff"}).makeCode(u);var h=function(t,e){$.ajax({type:"post",url:"/pss/scanLogin",data:{qid:t,loginid:e},dataType:"json",success:function(t){if(0!=t.errcode)return t.errmsg.indexOf("frozen")>-1?void $(".content_box").html('<div class="frozen"><p>您的账号已被冻结，请与机构联系！</p></div>'):void $.dialogFull.Tips(t.errmsg);$.dialogFull.Tips("登录成功！"),window.location.href=t.data.url},error:function(){$.dialogFull.Tips("网络错误，请稍后重试")}})},l=void 0,f=function(t){$.ajax({type:"post",url:"/pss/queryScanResult",data:{qid:t},dataType:"json",success:function(e){50001==e.errcode||(50002==e.errcode?($(".qrcodeLogin").hide(),$(".loginStatus_success").show()):50003==e.errcode?(clearInterval(l),$(".qrcodeLogin, .loginStatus_success").hide(),$(".loginStatus_error").show()):0==e.errcode?(clearInterval(l),h(t,e.data.loginid)):$.dialogFull.Tips(e.errmsg))},error:function(){$.dialogFull.Tips("网络错误，请稍后重试")}})};l=setInterval(function(){f(u)},2e3),$(".content_box").on("click",".loginType",function(){var t=$(this),e=t.data("type"),r="passwordLogin"===e?".qrcodeLogin":".passwordLogin";t.parent().slideUp(),$(r).slideDown(),".qrcodeLogin"===r?(clearInterval(l),l=setInterval(function(){f(u)},2e3)):clearInterval(l)}).on("click","#submit_login",function(){var t=$.form.get();t&&(t.password=(0,i.default)(t.password),$.form.submit({data:t,success:function(t){if(0!=t.errcode)return void $.dialogFull.Tips(t.errmsg);$.dialogFull.Tips("登录成功！"),window.location.href=t.data.url},error:function(){$.dialogFull.Tips("网络错误，请稍后重试")}}))}).on("click",".loginStatus_error .btn",function(){window.location.reload()})},232:function(t,e){},39:function(t,e,r){"use strict";function o(t){return d(n(c(t),t.length*p))}function n(t,e){t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e;for(var r=1732584193,o=-271733879,n=-1732584194,i=271733878,f=0;f<t.length;f+=16){var c=r,d=o,g=n,p=i;r=a(r,o,n,i,t[f+0],7,-680876936),i=a(i,r,o,n,t[f+1],12,-389564586),n=a(n,i,r,o,t[f+2],17,606105819),o=a(o,n,i,r,t[f+3],22,-1044525330),r=a(r,o,n,i,t[f+4],7,-176418897),i=a(i,r,o,n,t[f+5],12,1200080426),n=a(n,i,r,o,t[f+6],17,-1473231341),o=a(o,n,i,r,t[f+7],22,-45705983),r=a(r,o,n,i,t[f+8],7,1770035416),i=a(i,r,o,n,t[f+9],12,-1958414417),n=a(n,i,r,o,t[f+10],17,-42063),o=a(o,n,i,r,t[f+11],22,-1990404162),r=a(r,o,n,i,t[f+12],7,1804603682),i=a(i,r,o,n,t[f+13],12,-40341101),n=a(n,i,r,o,t[f+14],17,-1502002290),o=a(o,n,i,r,t[f+15],22,1236535329),r=s(r,o,n,i,t[f+1],5,-165796510),i=s(i,r,o,n,t[f+6],9,-1069501632),n=s(n,i,r,o,t[f+11],14,643717713),o=s(o,n,i,r,t[f+0],20,-373897302),r=s(r,o,n,i,t[f+5],5,-701558691),i=s(i,r,o,n,t[f+10],9,38016083),n=s(n,i,r,o,t[f+15],14,-660478335),o=s(o,n,i,r,t[f+4],20,-405537848),r=s(r,o,n,i,t[f+9],5,568446438),i=s(i,r,o,n,t[f+14],9,-1019803690),n=s(n,i,r,o,t[f+3],14,-187363961),o=s(o,n,i,r,t[f+8],20,1163531501),r=s(r,o,n,i,t[f+13],5,-1444681467),i=s(i,r,o,n,t[f+2],9,-51403784),n=s(n,i,r,o,t[f+7],14,1735328473),o=s(o,n,i,r,t[f+12],20,-1926607734),r=u(r,o,n,i,t[f+5],4,-378558),i=u(i,r,o,n,t[f+8],11,-2022574463),n=u(n,i,r,o,t[f+11],16,1839030562),o=u(o,n,i,r,t[f+14],23,-35309556),r=u(r,o,n,i,t[f+1],4,-1530992060),i=u(i,r,o,n,t[f+4],11,1272893353),n=u(n,i,r,o,t[f+7],16,-155497632),o=u(o,n,i,r,t[f+10],23,-1094730640),r=u(r,o,n,i,t[f+13],4,681279174),i=u(i,r,o,n,t[f+0],11,-358537222),n=u(n,i,r,o,t[f+3],16,-722521979),o=u(o,n,i,r,t[f+6],23,76029189),r=u(r,o,n,i,t[f+9],4,-640364487),i=u(i,r,o,n,t[f+12],11,-421815835),n=u(n,i,r,o,t[f+15],16,530742520),o=u(o,n,i,r,t[f+2],23,-995338651),r=h(r,o,n,i,t[f+0],6,-198630844),i=h(i,r,o,n,t[f+7],10,1126891415),n=h(n,i,r,o,t[f+14],15,-1416354905),o=h(o,n,i,r,t[f+5],21,-57434055),r=h(r,o,n,i,t[f+12],6,1700485571),i=h(i,r,o,n,t[f+3],10,-1894986606),n=h(n,i,r,o,t[f+10],15,-1051523),o=h(o,n,i,r,t[f+1],21,-2054922799),r=h(r,o,n,i,t[f+8],6,1873313359),i=h(i,r,o,n,t[f+15],10,-30611744),n=h(n,i,r,o,t[f+6],15,-1560198380),o=h(o,n,i,r,t[f+13],21,1309151649),r=h(r,o,n,i,t[f+4],6,-145523070),i=h(i,r,o,n,t[f+11],10,-1120210379),n=h(n,i,r,o,t[f+2],15,718787259),o=h(o,n,i,r,t[f+9],21,-343485551),r=l(r,c),o=l(o,d),n=l(n,g),i=l(i,p)}return Array(r,o,n,i)}function i(t,e,r,o,n,i){return l(f(l(l(e,t),l(o,i)),n),r)}function a(t,e,r,o,n,a,s){return i(e&r|~e&o,t,e,n,a,s)}function s(t,e,r,o,n,a,s){return i(e&o|r&~o,t,e,n,a,s)}function u(t,e,r,o,n,a,s){return i(e^r^o,t,e,n,a,s)}function h(t,e,r,o,n,a,s){return i(r^(e|~o),t,e,n,a,s)}function l(t,e){var r=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(r>>16)<<16|65535&r}function f(t,e){return t<<e|t>>>32-e}function c(t){for(var e=Array(),r=(1<<p)-1,o=0;o<t.length*p;o+=p)e[o>>5]|=(t.charCodeAt(o/p)&r)<<o%32;return e}function d(t){for(var e=g?"0123456789ABCDEF":"0123456789abcdef",r="",o=0;o<4*t.length;o++)r+=e.charAt(t[o>>2]>>o%4*8+4&15)+e.charAt(t[o>>2]>>o%4*8&15);return r}Object.defineProperty(e,"__esModule",{value:!0});var g=0,p=8;e.default=o}});