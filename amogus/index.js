(function(n,t){"use strict";let o=[];async function a(){return await fetch("https://amogus-plugin-worker.techguy7916261.workers.dev")}const e=function(){o=t.registerCommand({name:"amogus",displayName:"amogus",description:"Sends a random Among Us gif",displayDescription:"Sends a random Among Us gif",type:1,applicationId:"-1",inputType:1,execute:async function(){return{content:await a()}}})},i=function(){o()};return n.onLoad=e,n.onUnload=i,n})({},vendetta.commands);
