(function(n,t){"use strict";let e=[];async function o(){return await fetch("amogus-plugin-worker.techguy7916261.workers.dev")}const a=function(){e=t.registerCommand({name:"quote",displayName:"quote",description:"generates a quote.",displayDescription:"generates a quote",type:1,applicationId:"-1",inputType:1,execute:async function(){return{content:await o()}}})},i=function(){e()};return n.onLoad=a,n.onUnload=i,n})({},vendetta.commands);
