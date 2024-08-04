
const rand_index = Math.floor(Math.random() * 16);

const quote_container  = document.querySelector(".quote");

async function get_quote(){
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        const para = document.createElement("p");
        para.innerHTML = data[rand_index].text;
        quote_container.appendChild(para)
    });

}
get_quote()