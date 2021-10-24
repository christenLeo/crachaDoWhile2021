const links = {
    github: 'christenLeo',
    youtube: '',
    instagram: 'ilustrasleo',
    twitter: '#',
    facebook: '#'
}

const changeLinks = (media) => {
    const list = document.querySelector('#list');
    let socialMedia = list.children;

    for (let i = 0; i < socialMedia.length; i++) {
        let mediaName = socialMedia[i].classList[1];

        let newLink = socialMedia[i].children[0];

        newLink.href = `https://${mediaName}.com/${links[mediaName]}`;
    }
}

changeLinks();

const url = `https://api.github.com/users/${links.github}`;

const changeGitHubInfo = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        avatar.src = data.avatar_url;
        usr.textContent = data.name;
        linkToGitHub.href = data.html_url;
        aLilBit.textContent = data.bio;
    })
}

changeGitHubInfo();