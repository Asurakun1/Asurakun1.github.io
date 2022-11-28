const api_url ="https://zenquotes.io/api/quotes/[your_key]";

async function getapi(url)
{
  const response = await fetch(url);
  let data = await response.json();
  console.log(data[10].q);
}

getapi(api_url);
