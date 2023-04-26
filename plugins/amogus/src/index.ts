//--Credits--//
//@mantikafasi for the original plugin, which can be found at https://github.com/mantikafasi/AliucordPlugins/tree/main/Amog%E2%80%8C%E2%80%8Dus
//@BreadoWebTech for Quotes plugin, which I used as a skeleton, which can be found at https://github.com/BreadoWebTech/breadoplugs/blob/master/plugins/quotes/src/index.ts
//Chyno Deluxe for the random GIF generator web app I used as reference material, which can be found at https://codepen.io/ChynoDeluxe/pen/WGQzWW
//You, for downloading this plugin :D

import { logger } from "@vendetta";

import { registerCommand } from "@vendetta/commands";

let gifCMD = [];

async function getGif() {
  const response = await fetch("https://amogus-plugin-worker.techguy7916261.workers.dev");
  //const data = await response.json();
  ///return data['0']['content'];
  return response;
}
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
            return getGif();
          },
        })


    }
  


export const onUnload = () => {
  gifCMD();
};
