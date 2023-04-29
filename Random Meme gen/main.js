const apiLink = "https://meme-api.com/gimme";
const memeButton = document.querySelector(".generateMemeButton");
const memeAuthor = document.querySelector(".memeAuthor");
const memeTitle = document.querySelector(".memeTitle");
const memeImg = document.querySelector(".memeGen img")

function updateDetails(url, title, author, subreddit){
    memeImg.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author + " • " + subreddit;
}

function generateMeme() {
    fetch("https://meme-api.com/gimme").then(
        (response) => response.json()).then(
            (data) => {
                updateDetails(data.url, data.title, data.author, data.subreddit);
            })
}
memeButton.addEventListener("click", generateMeme);