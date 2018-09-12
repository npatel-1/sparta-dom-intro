document.addEventListener('DOMContentLoaded', () =>{

  console.log(document.body.children);
  //HEADER CODE
  const header1 = document.getElementById("header-id");
  header1.style.color = 'blue';
  header1.style.border = '2px solid black';
  header1.style.marginLeft = '30px';
  header1.addEventListener('click', () => {
    header1.style.color = 'red';
  });
  header1.addEventListener('mouseover', (e) => {
    console.log(e.target);
  })

  //Creating elements
  const ul = document.createElement('ul');
  ul.setAttribute('id', 'ul-list');

  //append to body
  document.body.appendChild(ul);
  //Add list items

for (var i = 0; i < 10; i++){
  const li = document.createElement('li');
  const randomNum = Math.random();
  li.innerHTML = randomNum;

  //adding event listener
  li.addEventListener('mouseenter', (e) => {
    e.target.style.fontSize = '30px';
  })
  li.addEventListener('mouseleave', (e) => {
    e.target.style.fontSize = '16px';
  })

  ul.appendChild(li);
}

for (var i = 0; i < 5; i++) {
  const img = document.createElement('img');
  img.setAttribute('src', 'http://fillmurray.com/300/200');
  document.body.appendChild(img);


}
  console.log(ul);
  console.log(document.body.children);
//remove and element from the page
  // document.body.removeChild(header1);
});


// console.log(header1);
// close document listener
