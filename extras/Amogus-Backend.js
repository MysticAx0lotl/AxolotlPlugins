/**
* This is the source code for the Cloudfare worker that powers my Amogus plugin.
* I can promise you that aside from the redacted API key and this disclaimer, 
* the code is 100% identical to what's been deployed on my Cloudfare account. 
* If you don't believe me, then feel free to submit an issue and I'll do my best 
* to clear up any concerns you have.
* This code is based on the example at 
* https://developers.cloudflare.com/workers/examples/fetch-json/.
**/

export default {
  async fetch(request, env, ctx) {

    // Contains all data used to assemble the Giphy API request link
	  const giphy = {
		  baseURL: "https://api.giphy.com/v1/gifs/",
		  apiKey: "redacted",
		  tag: "amogus",
		  type: "random",
		  rating: "pg"
	  };

    // Assembles the Giphy API request link from the above data
	  const gifURL = encodeURI(
		  giphy.baseURL +
			giphy.type +
			"?api_key=" +
			giphy.apiKey +
			"&tag=" +
			giphy.tag +
			"&rating=" +
			giphy.rating
	  );

    const response = await fetch(gifURL);
    const results = await response.json();
    const resultData = results.data;
    console.log(resultData.url)
    return new Response(resultData.url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Max-Age": "*",
        "Access-Control-Allow-Methods": "*"
      }
    })
  }
};
