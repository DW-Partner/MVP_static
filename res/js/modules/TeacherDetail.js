!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=509)}({16:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){return t.replace(/\{([^\{|^\}]+)\}/gi,function(t,r){if(t&&r)return e[r]||0===e[r]?e[r]:""})};e.default=n},42:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n;!function(){function t(t){this.mode=u.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,r=this.data.length;e<r;e++){var n=[],o=this.data.charCodeAt(e);o>65536?(n[0]=240|(1835008&o)>>>18,n[1]=128|(258048&o)>>>12,n[2]=128|(4032&o)>>>6,n[3]=128|63&o):o>2048?(n[0]=224|(61440&o)>>>12,n[1]=128|(4032&o)>>>6,n[2]=128|63&o):o>128?(n[0]=192|(1984&o)>>>6,n[1]=128|63&o):n[0]=o,this.parsedData.push(n)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function r(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++)this.num[n]=t[n+r]}function o(t,e){this.totalCount=t,this.dataCount=e}function a(){this.buffer=[],this.length=0}function i(){console.log(this);var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var r=e.toString().match(/android ([0-9]\.[0-9])/i);r&&r[1]&&(t=parseFloat(r[1]))}return t}function s(t,e){for(var r=1,n=l(t),o=0,a=g.length;o<=a;o++){var i=0;switch(e){case h.L:i=g[o][0];break;case h.M:i=g[o][1];break;case h.Q:i=g[o][2];break;case h.H:i=g[o][3]}if(n<=i)break;r++}if(r>g.length)throw new Error("Too long data");return r}function l(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,r=this.parsedData.length;e<r;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){var r=new t(e);this.dataList.push(r),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,r){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[n][o]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,r),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,r)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+r][e+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=c.getLostPoint(this);(0==r||t>n)&&(t=n,e=r)}return e},createMovieClip:function(t,e,r){var n=t.createEmptyMovieClip(e,r);this.make();for(var o=0;o<this.modules.length;o++)for(var a=1*o,i=0;i<this.modules[o].length;i++){var s=1*i,l=this.modules[o][i];l&&(n.beginFill(0,100),n.moveTo(s,a),n.lineTo(s+1,a),n.lineTo(s+1,a+1),n.lineTo(s,a+1),n.endFill())}return n},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=c.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var n=t[e],o=t[r];if(null==this.modules[n][o])for(var a=-2;a<=2;a++)for(var i=-2;i<=2;i++)this.modules[n+a][o+i]=-2==a||2==a||-2==i||2==i||0==a&&0==i}},setupTypeNumber:function(t){for(var e=c.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(var r=0;r<18;r++){var n=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,n=c.getBCHTypeInfo(r),o=0;o<15;o++){var a=!t&&1==(n>>o&1);o<6?this.modules[o][8]=a:o<8?this.modules[o+1][8]=a:this.modules[this.moduleCount-15+o][8]=a}for(var o=0;o<15;o++){var a=!t&&1==(n>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=a:o<9?this.modules[8][15-o-1+1]=a:this.modules[8][15-o-1]=a}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,n=this.moduleCount-1,o=7,a=0,i=this.moduleCount-1;i>0;i-=2)for(6==i&&i--;;){for(var s=0;s<2;s++)if(null==this.modules[n][i-s]){var l=!1;a<t.length&&(l=1==(t[a]>>>o&1));var u=c.getMask(e,n,i-s);u&&(l=!l),this.modules[n][i-s]=l,o--,-1==o&&(a++,o=7)}if((n+=r)<0||this.moduleCount<=n){n-=r,r=-r;break}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,r,n){for(var i=o.getRSBlocks(t,r),s=new a,l=0;l<n.length;l++){var u=n[l];s.put(u.mode,4),s.put(u.getLength(),c.getLengthInBits(u.mode,t)),u.write(s)}for(var h=0,l=0;l<i.length;l++)h+=i[l].dataCount;if(s.getLengthInBits()>8*h)throw new Error("code length overflow. ("+s.getLengthInBits()+">"+8*h+")");for(s.getLengthInBits()+4<=8*h&&s.put(0,4);s.getLengthInBits()%8!=0;)s.putBit(!1);for(;;){if(s.getLengthInBits()>=8*h)break;if(s.put(e.PAD0,8),s.getLengthInBits()>=8*h)break;s.put(e.PAD1,8)}return e.createBytes(s,i)},e.createBytes=function(t,e){for(var n=0,o=0,a=0,i=new Array(e.length),s=new Array(e.length),l=0;l<e.length;l++){var u=e[l].dataCount,h=e[l].totalCount-u;o=Math.max(o,u),a=Math.max(a,h),i[l]=new Array(u);for(var d=0;d<i[l].length;d++)i[l][d]=255&t.buffer[d+n];n+=u;var p=c.getErrorCorrectPolynomial(h),f=new r(i[l],p.getLength()-1),g=f.mod(p);s[l]=new Array(p.getLength()-1);for(var d=0;d<s[l].length;d++){var m=d+g.getLength()-s[l].length;s[l][d]=m>=0?g.get(m):0}}for(var v=0,d=0;d<e.length;d++)v+=e[d].totalCount;for(var _=new Array(v),w=0,d=0;d<o;d++)for(var l=0;l<e.length;l++)d<i[l].length&&(_[w++]=i[l][d]);for(var d=0;d<a;d++)for(var l=0;l<e.length;l++)d<s[l].length&&(_[w++]=s[l][d]);return _};for(var u={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},h={L:1,M:0,Q:3,H:2},d={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},c={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;c.getBCHDigit(e)-c.getBCHDigit(c.G15)>=0;)e^=c.G15<<c.getBCHDigit(e)-c.getBCHDigit(c.G15);return(t<<10|e)^c.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;c.getBCHDigit(e)-c.getBCHDigit(c.G18)>=0;)e^=c.G18<<c.getBCHDigit(e)-c.getBCHDigit(c.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return c.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case d.PATTERN000:return(e+r)%2==0;case d.PATTERN001:return e%2==0;case d.PATTERN010:return r%3==0;case d.PATTERN011:return(e+r)%3==0;case d.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case d.PATTERN101:return e*r%2+e*r%3==0;case d.PATTERN110:return(e*r%2+e*r%3)%2==0;case d.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new r([1],0),n=0;n<t;n++)e=e.multiply(new r([1,p.gexp(n)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case u.MODE_NUMBER:return 10;case u.MODE_ALPHA_NUM:return 9;case u.MODE_8BIT_BYTE:case u.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case u.MODE_NUMBER:return 12;case u.MODE_ALPHA_NUM:return 11;case u.MODE_8BIT_BYTE:return 16;case u.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case u.MODE_NUMBER:return 14;case u.MODE_ALPHA_NUM:return 13;case u.MODE_8BIT_BYTE:return 16;case u.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n++)for(var o=0;o<e;o++){for(var a=0,i=t.isDark(n,o),s=-1;s<=1;s++)if(!(n+s<0||e<=n+s))for(var l=-1;l<=1;l++)o+l<0||e<=o+l||0==s&&0==l||i==t.isDark(n+s,o+l)&&a++;a>5&&(r+=3+a-5)}for(var n=0;n<e-1;n++)for(var o=0;o<e-1;o++){var u=0;t.isDark(n,o)&&u++,t.isDark(n+1,o)&&u++,t.isDark(n,o+1)&&u++,t.isDark(n+1,o+1)&&u++,0!=u&&4!=u||(r+=3)}for(var n=0;n<e;n++)for(var o=0;o<e-6;o++)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(r+=40);for(var o=0;o<e;o++)for(var n=0;n<e-6;n++)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(r+=40);for(var h=0,o=0;o<e;o++)for(var n=0;n<e;n++)t.isDark(n,o)&&h++;return r+=Math.abs(100*h/e/e-50)/5*10}},p={glog:function(t){if(t<1)throw new Error("glog("+t+")");return p.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return p.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},f=0;f<8;f++)p.EXP_TABLE[f]=1<<f;for(var f=8;f<256;f++)p.EXP_TABLE[f]=p.EXP_TABLE[f-4]^p.EXP_TABLE[f-5]^p.EXP_TABLE[f-6]^p.EXP_TABLE[f-8];for(var f=0;f<255;f++)p.LOG_TABLE[p.EXP_TABLE[f]]=f;r.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var o=0;o<t.getLength();o++)e[n+o]^=p.gexp(p.glog(this.get(n))+p.glog(t.get(o)));return new r(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=p.glog(this.get(0))-p.glog(t.get(0)),n=new Array(this.getLength()),o=0;o<this.getLength();o++)n[o]=this.get(o);for(var o=0;o<t.getLength();o++)n[o]^=p.gexp(p.glog(t.get(o))+e);return new r(n,0).mod(t)}},o.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],o.getRSBlocks=function(t,e){var r=o.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=r.length/3,a=[],i=0;i<n;i++)for(var s=r[3*i+0],l=r[3*i+1],u=r[3*i+2],h=0;h<s;h++)a.push(new o(l,u));return a},o.getRsBlockTable=function(t,e){switch(e){case h.L:return o.RS_BLOCK_TABLE[4*(t-1)+0];case h.M:return o.RS_BLOCK_TABLE[4*(t-1)+1];case h.Q:return o.RS_BLOCK_TABLE[4*(t-1)+2];case h.H:return o.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},a.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var g=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],m=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){function e(t,e){var r=document.createElementNS("http://www.w3.org/2000/svg",t);for(var n in e)e.hasOwnProperty(n)&&r.setAttribute(n,e[n]);return r}var r=this._htOption,n=this._el,o=t.getModuleCount();Math.floor(r.width/o),Math.floor(r.height/o);this.clear();var a=e("svg",{viewBox:"0 0 "+String(o)+" "+String(o),width:"100%",height:"100%",fill:r.colorLight});a.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),n.appendChild(a),a.appendChild(e("rect",{fill:r.colorLight,width:"100%",height:"100%"})),a.appendChild(e("rect",{fill:r.colorDark,width:"1",height:"1",id:"template"}));for(var i=0;i<o;i++)for(var s=0;s<o;s++)if(t.isDark(i,s)){var l=e("use",{x:String(s),y:String(i)});l.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),a.appendChild(l)}},t.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},t}(),v="svg"===document.documentElement.tagName.toLowerCase(),_=v?m:function(){return"undefined"!=typeof CanvasRenderingContext2D}()?function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function e(t,e){var r=this;if(r._fFail=e,r._fSuccess=t,null===r._bSupportDataURI){var n=document.createElement("img"),o=function(){r._bSupportDataURI=!1,r._fFail&&r._fFail.call(r)},a=function(){r._bSupportDataURI=!0,r._fSuccess&&r._fSuccess.call(r)};return n.onabort=o,n.onerror=o,n.onload=a,void(n.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===r._bSupportDataURI&&r._fSuccess?r._fSuccess.call(r):!1===r._bSupportDataURI&&r._fFail&&r._fFail.call(r)}var r=i();if(r&&r<=2.1){var n=1/window.devicePixelRatio,o=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,e,r,a,i,s,l,u,h){if("nodeName"in t&&/img/i.test(t.nodeName))for(var d=arguments.length-1;d>=1;d--)arguments[d]=arguments[d]*n;else void 0===u&&(arguments[1]*=n,arguments[2]*=n,arguments[3]*=n,arguments[4]*=n);o.apply(this,arguments)}}var a=function(t,e){this._bIsPainted=!1,this._android=i(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return a.prototype.draw=function(t){var e=this._elImage,r=this._oContext,n=this._htOption,o=t.getModuleCount(),a=n.width/o,i=n.height/o,s=Math.round(a),l=Math.round(i);e.style.display="none",this.clear();for(var u=0;u<o;u++)for(var h=0;h<o;h++){var d=t.isDark(u,h),c=h*a,p=u*i;r.strokeStyle=d?n.colorDark:n.colorLight,r.lineWidth=1,r.fillStyle=d?n.colorDark:n.colorLight,r.fillRect(c,p,a,i),r.strokeRect(Math.floor(c)+.5,Math.floor(p)+.5,s,l),r.strokeRect(Math.ceil(c)-.5,Math.ceil(p)-.5,s,l)}this._bIsPainted=!0},a.prototype.makeImage=function(){this._bIsPainted&&e.call(this,t)},a.prototype.isPainted=function(){return this._bIsPainted},a.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},a.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},a}():function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,r=this._el,n=t.getModuleCount(),o=Math.floor(e.width/n),a=Math.floor(e.height/n),i=['<table style="border:0;border-collapse:collapse;">'],s=0;s<n;s++){i.push("<tr>");for(var l=0;l<n;l++)i.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+o+"px;height:"+a+"px;background-color:"+(t.isDark(s,l)?e.colorDark:e.colorLight)+';"></td>');i.push("</tr>")}i.push("</table>"),r.innerHTML=i.join("");var u=r.childNodes[0],h=(e.width-u.offsetWidth)/2,d=(e.height-u.offsetHeight)/2;h>0&&d>0&&(u.style.margin=d+"px "+h+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}();n=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:h.H},"string"==typeof e&&(e={text:e}),e)for(var r in e)this._htOption[r]=e[r];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(_=m),this._android=i(),this._el=t,this._oQRCode=null,this._oDrawing=new _(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},n.prototype.makeCode=function(t){this._oQRCode=new e(s(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},n.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},n.prototype.clear=function(){this._oDrawing.clear()},n.CorrectLevel=h}(),e.default=n},509:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=r(42),a=n(o),i=r(16),s=n(i);r(510);var l={base_info:"<p><span>教师姓名：</span><em>{name}</em></p>\t\t\t\t<p><span>性别：</span><em>{gender}</em></p>\t\t\t\t<p><span>出生日期：</span><em>{birthday}</em></p>\t\t\t\t<p><span>入职时间：</span><em>{entry_day}</em></p>\t\t\t\t<br />\t\t\t\t<p><span>详细地址：</span><em>{address}</em></p>\t\t\t\t<p><span>手机号：</span><em>{mobile}</em></p>\t\t\t\t<br /><p><span>身份证号：</span><em>{id_num}</em></p>\t\t\t\t<p><span>类型：</span><em>{type}</em></p>\t\t\t\t<br />\t\t\t\t<p><span>所属门店：</span><em>{zone_name}</em></p>",work_info:'<div class="data data1">\t\t\t\t\t\t<span>当月教案准备率</span>\t\t\t\t\t\t<p>{ready_rate}</p>\t\t\t\t\t</div>\t\t\t\t\t<div class="data data2">\t\t\t\t\t\t<span>当月出勤率</span>\t\t\t\t\t\t<p>{work_rate}</p>\t\t\t\t\t</div>\t\t\t\t\t<div class="data data3">\t\t\t\t\t\t<span>当月课时任务数</span>\t\t\t\t\t\t<p>{lesson_num}</p>\t\t\t\t\t</div>\t\t\t\t\t<div class="data data4">\t\t\t\t\t\t<span>负责班级数</span>\t\t\t\t\t\t<p>{class_num}</p>\t\t\t\t\t</div>',classList:'<li>            <div class="item"><p><span>{class_name}</span></p></div>            <div class="item"><p><span>{course_name}</span></p></div>            <div class="item"><p><span>{start_time}</span></p></div>            <div class="item"><p><span>{teacher_name}</span></p></div>            <div class="item"><p><span>{current_lesson}</span></p></div>            <div class="item"><p><span>{student_num}</span></p></div>        </li>'},u=$("#tid").val(),h=void 0,d=void 0,c=function(t){$.ajax({type:"post",dataType:"json",url:"/pss/updateQrcode",data:{code:$("#school_code").val(),zoneid:d,usertype:"teacher",userid:u,expired:180},success:function(e){if(0!=e.errcode)return void $.dialogFull.Tips(e.errmsg);$("#img_box").html(""),new a.default($("#img_box")[0],{text:"your content",width:256,height:256,colorDark:"#000000",colorLight:"#ffffff"}).makeCode(e.data.qrcode),t&&$.dialogFull.Tips("更新成功！")},error:function(){$.dialogFull.Tips("网络错误，请稍后重试！")}})};!function(){$.ajax({type:"post",dataType:"json",url:"/pss/getTeacherDetail",data:{code:$("#school_code").val(),tid:u},success:function(t){if(0!=t.errcode)return void $.dialogFull.Tips(t.errmsg);var e=(0,s.default)(l.base_info,t.data);$(".TeacherDetail .center").html(e),h="停止授课"==t.data.status?"start":"stop",$("#action span").text(t.data.status),d=t.data.zone_id,c()},error:function(){$.dialogFull.Tips("网络错误，请稍后重试！")}})}();!function(){$.ajax({type:"post",dataType:"json",url:"/pss/getTeacherWorkInfo",data:{code:$("#school_code").val(),tid:u},success:function(t){if(0!=t.errcode)return void $.dialogFull.Tips(t.errmsg);var e=(0,s.default)(l.work_info,t.data);$(".content_middle").append(e)},error:function(){$.dialogFull.Tips("网络错误，请稍后重试！")}})}();var p=function(){$.ajax({type:"post",dataType:"json",url:"/pss/teachAction",data:{code:$("#school_code").val(),tid:u,action:h},success:function(t){if(0!=t.errcode)return void $.dialogFull.Tips(t.errmsg);$.dialogFull.Tips("操作成功！"),h="start"==h?"stop":"start",$("#action span").text("start"==h?"停止授课":"正常")},error:function(){$.dialogFull.Tips("网络错误，请稍后重试！")}})};$.mainBox.on("click","#action",function(){p()}).on("click","#t_qrcode",function(){c(!0)})},510:function(t,e){}});