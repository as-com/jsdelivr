/*! Qoopido.js library 3.7.4, 2015-08-14 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(e,t){t.qoopido.registerSingleton("url",e,["./base"])}(function(e,t,n,o){"use strict";function r(e){var t=document.createElement("a");return t.href=e||"",t}var c,i,a=new RegExp("[?&]?([^=]+)=([^&]*)","g");try{c=location}catch(s){c=r()}return i=new RegExp("".concat("^",c.protocol,"//",c.hostname),"i"),e.base.extend({resolve:function(e){return r(e).href},redirect:function(e,t){t=t||n,t.location.href=this.resolve(e)},getParameter:function(e){for(var t,n={},o=r(e).search.split("+").join(" ");t=a.exec(o);)n[decodeURIComponent(t[1])]=decodeURIComponent(t[2]);return n},isLocal:function(e){return i.test(this.resolve(e))}})},this);