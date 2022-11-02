const APP = document.querySelector("#app");
const FETCH_URL = "https://vanillajsacademy.com/api/dragons.json";

const drawData = (data) => {
  APP.innerHTML = `<h1>${data.publication}</h1>`;
  APP.innerHTML += `${data.articles
    .map((article) => {
      let art = `<details id="${article.url.slice(1)}" open><summary>${
        article.title
      }</summary><h4>${article.author} @ ${article.pubdate}</h4><p>${
        article.article
      }</p><p><a href="${article.url}">Permalink</a></p></details>`;
      return art;
    })
    .join("")}`;
};
const fetchData = async () => {
  try {
    let response = await fetch(FETCH_URL);
    if (!response.ok) {
      throw "It was all ok, and, ekhm... something went wrong, like, really wrong...";
    }
    let dragons = await response.json();
    drawData(dragons);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
