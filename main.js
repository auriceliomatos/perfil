document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');
    const bioElement = document.querySelector('#bio');
    const companyElement = document.querySelector('#company');

    fetch('https://api.github.com/users/auriceliomatos')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followingElement.innerText = json.following;
            followersElement.innerText = json.followers;
            repos.innerText = json.public_repos;
            linkElement.href = json.html_url;
           bioElement.innerText = json.bio;
            companyElement.innerText = json.company;
        })
        .catch(function(erro) {
            alert("Um erro inesperado aconteceu no carregamento, tente novamente mais tarde.");
        })
})