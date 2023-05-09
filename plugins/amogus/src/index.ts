//--Credits--//
//@mantikafasi for the original plugin, which can be found at https://github.com/mantikafasi/AliucordPlugins/tree/main/Amog%E2%80%8C%E2%80%8Dus
//@BreadoWebTech for Quotes plugin, which I used as a skeleton, which can be found at https://github.com/BreadoWebTech/breadoplugs/blob/master/plugins/quotes/src/index.ts
//@Wing of the Vendetta Discord server for sharing the code snippet that retooled this plugin to use Discord's GIF API
//You, for downloading this plugin :D

import { logger } from "@vendetta";

import { registerCommand } from "@vendetta/commands";

let gifCMD;

//const quote = await getQuote();

export const onLoad = () => {

      gifCMD = registerCommand({

          name: "amogus",

          displayName: "amogus",

          description: "Sends a random Among Us gif",

          displayDescription: "Sends a random Among Us gif",

          type: 1,

          applicationId: "-1",

          inputType: 1,

          execute: async () => {
            return {await RestAPI.get({
                  url: "/gifs/search",
                  query: {
                        q: "amongus",
                        media_format: "gif",
                        provider: "tenor",
                        locale: "en-US",
                        limit: void 0
                  },
                  oldFormErrors: true
                  })
            }
         }           

export const onUnload = () => {
  gifCMD?.();
};
