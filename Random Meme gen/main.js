let apiLink = "https://meme-api.com/gimme";
const memeButton = document.querySelector(".generateMemeButton");
const memeAuthor = document.querySelector(".memeAuthor");
const memeTitle = document.querySelector(".memeTitle");
const memeImg = document.querySelector(".memeGen img");
const subredditOptionList = document.querySelectorAll("li");
const buttonText = document.querySelector(".buttontext");

function updateDetails(url, title, author, subreddit){
    memeImg.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author + " • " + subreddit;
}

function generateMeme() {
    fetch(apiLink).then(
        (response) => response.json()).then(
            (data) => {

                updateDetails(data.url, data.title, data.author, data.subreddit);
            })
}
function editApiLink(params) {
    if (apiLink = "https://meme-api.com/gimme"){
        apiLink = apiLink+"/"+params;
        buttonText.innerHTML = params;
    }else{
        apiLink = "https://meme-api.com/gimme/"+params;
        buttonText.innerHTML = params;
    }
    
    console.log(apiLink);
}
memeButton.addEventListener("click", generateMeme);

for (let i = 0; i < subredditOptionList.length; i++) {
    const element = subredditOptionList[i];
    element.addEventListener("click", function (params) {
        editApiLink(element.innerHTML);    
    })
}