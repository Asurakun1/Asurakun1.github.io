const api_url ="https://zenquotes.io/api/quotes/[your_key]";

async function getapi(url)
{
  const response = await fetch(url);
  let data = await response.json();
  return data;
}

console.log(getapi(api_url).then(data => console.log(data)));
