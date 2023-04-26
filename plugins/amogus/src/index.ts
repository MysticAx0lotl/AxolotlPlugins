//--Credits--//
//@BreadoWebTech for Quotes plugin, which I used as a skeleton, which can be found at https://github.com/BreadoWebTech/breadoplugs/blob/master/plugins/quotes/src/index.ts
//Chyno Deluxe for the random GIF generator web app I used as reference material, which can be found at https://codepen.io/ChynoDeluxe/pen/WGQzWW
//You, for downloading this plugin :D

import { logger } from "@vendetta";

import { registerCommand } from "@vendetta/commands";

let amogusCMD = [];

const giphy = {
	baseURL: "https://api.giphy.com/v1/gifs/",
	apiKey: "cngHUDbMph29ojMkLmwb2D1MfXYMr22o",
	tag: "amogus",
	type: "random",
	rating: "pg-13"
};

async function getGif() {
	let giphyURL = encodeURI(
		giphy.baseURL +
		giphy.type +
		"?api_key=" +
		giphy.apiKey +
		"&tag=" +
		giphy.tag +
		"&rating=" +
		giphy.rating
	);
	var gifOBJ = $.get(giphyURL);
	return gifOBJ.url;
}

//const quote = await getQuote();

export const onLoad = () => {

      amogusCMD = registerCommand({

          name: "amogus",

          displayName: "amogus",

          description: "Sends a random Among Us gif",

          displayDescription: "Sends a random Among Us gif. Credits can be found in the plugin's source code at https://github.com/MysticAx0lotl/AxolotlPlugins/edit/master/plugins/amogus/src/index.ts",

          type: 1,

          applicationId: "-1",

          inputType: 1,

          execute: async () => {
 
            return { content: await getGif()};
          },
        })


    }
  


export const onUnload = () => {
  amogusCMD();
}
