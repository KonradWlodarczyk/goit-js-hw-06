const list = document.getElementById('categories');
const categories = list.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);


for (let categoriesItem of categories) {
    console.log(`Category: ${categoriesItem.querySelector('h2').innerText}`);
    console.log(`Elements: ${categoriesItem.getElementsByTagName('li').length}`);
}
