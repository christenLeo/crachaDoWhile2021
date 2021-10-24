const links = {
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