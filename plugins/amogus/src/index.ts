 // Rubber Ducky #1385 helped me significantly improving my code and fix some pretty big bugs! THANK YOU!! 

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
  var data = () => $.getJSON(giphyURL, json);
  return data['0']['content'];
}

//const quote = await getQuote();

export const onLoad = () => {

      quoteCMD = registerCommand({

          name: "amogus",

          displayName: "amogus",

          description: "Sends a random Among Us gif",

          displayDescription: "Sends a random Among Us gif",

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
