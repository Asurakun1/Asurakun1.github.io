
const api_url ="https://zenquotes.io/api/quotes/";

async function getapi(url)
{
  const response = await fetch(url);
  var data = await response.json();
  return data;
}

const randomize = Math.floor(Math.random() * 5);

getapi(api_url).then(data => console.log(data[randomize].q));
