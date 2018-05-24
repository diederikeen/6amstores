import Instafeed from 'instafeed.js';

const fetchInsta = function(){
    let container;
    
    const init = () => {
        container = document.getElementById('instagram-feed');

        const token = '7498090227.b1f6f12.19b1a288657644c68f2623ccb1ef5d82';

        const url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='+token+'&count=9';

        fetch(url, {method: 'get'})
            .then(res => res.json())
            .then(data => {

                fillFeed(data.data);
            })
    };

    const fillFeed = (data) => {
        
        data.map(post => {
            const img = createImageTag(post.images.standard_resolution);
            
            container.appendChild(img);
        });


    };

    const createImageTag = (el) => {
        const img = document.createElement('img');
        img.src = el.url;
        return img;
    };

    return {
        init
    }
}();

fetchInsta.init();