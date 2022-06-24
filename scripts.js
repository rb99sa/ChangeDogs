const BASE_URL = 'https://dog.ceo/api/breeds/image/random';
const catBtn = document.getElementById('change-dog');
const catImg = document.getElementById('cat')

const getDogs = async () => {
	
		await fetch('https://dog.ceo/api/breeds/image/random')
		.then(response => response.json())
        .then(response => {
            let url = response.message
            console.log(url)
			document.getElementById('dogs').src = response.message
			
		})

};
const loadImg = async () => {
	catImg.src = await getDogs();
 };

 catBtn.addEventListener('click', loadImg);

getDogs();
