const root = document.getElementById('root');
const limit = 10;

const container = document.createElement('div');
container.classList.add('container');
root.append(container);

fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}`)
    .then((response) => response.json())
    .then((data) => {
        console.table(data);
        const array = data.map((element) => {
            const image = document.createElement('img');
            image.classList.add('image');
            image.src = element.url;
            image.addEventListener('click', () => {
                const imageWrapper = document.createElement('div');
                const bigImage = document.createElement('img');
                bigImage.src = element.url;
                const closeButton = document.createElement('span');
                closeButton.textContent = 'X';
                closeButton.classList.add('close-button');
                imageWrapper.classList.add('big-image-wrapper');
                closeButton.addEventListener('click', () => {
                    imageWrapper.remove();
                });
                imageWrapper.append(closeButton, bigImage);
                root.append(imageWrapper);
            });
            return image;
        });
        container.append(...array);
    })
    .catch((error) => {
        console.log(error);
    })