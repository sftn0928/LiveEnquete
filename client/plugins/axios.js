export default function({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.log("request to", config.url);
  });
}
