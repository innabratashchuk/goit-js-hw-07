
const items = document.querySelectorAll('#categories .item');


console.log(`Number of categories: ${items.length}`);


items.forEach(item => {
  // Знаходимо текст заголовка h2
  const title = item.querySelector('h2').textContent;
  
  
  const elementsCount = item.querySelectorAll('ul li').length;
  
  
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});