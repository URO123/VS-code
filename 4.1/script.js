const elList = document.querySelector('.js-list')


let products = [{
  id: 1,  
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  phone: '1-770-736-8031 x56442',
},
{
  id: 2,
  name: 'Ervin Howell',
  username: 'Antonette',
  email: 'Shanna@melissa.tv',
  phone: '010-692-6593 x09125',
},
{
  id: 3,
  name: 'Clementine Bauch',
  username: 'Samantha',
  email: 'Nathan@yesenia.net',
  phone: '1-463-123-4447',
},
{
  id: 4,
  name: 'Patricia Lebsack',
  username: 'Karianne',
  email: 'Julianne.OConner@kory.org',
  phone: '493-170-9623 x156',
},
{
  id: 5,
  name: 'Chelsey Dietrich',
  username: 'Kamren',
  email: 'Lucio_Hettinger@annie.ca',
  phone: '(254)954-1289',
},
];



for (let mahsulot of products) {
  const elItem = document.createElement('li');
  const elImage = document.createElement('p');
  const elSpanId = document.createElement('p');
  const elSpanName = document.createElement('p');
  const elSpanUserName = document.createElement('p');
  const elSpanEmail = document.createElement('p');
  const elSpanPhone = document.createElement('p');
  elItem.setAttribute('class', 'js-item')
  elImage.innerHTML = '<img class="js-image" src="user.4.png">'
  elSpanId.innerHTML = mahsulot.id
  elSpanName.innerHTML = mahsulot.name
  elSpanUserName.innerHTML = mahsulot.username
  elSpanEmail.innerHTML = mahsulot.email
  elSpanPhone.innerHTML = mahsulot.phone
  elItem.appendChild(elImage)
  elItem.appendChild(elSpanId)
  elItem.appendChild(elSpanName)
  elItem.appendChild(elSpanUserName)
  elItem.appendChild(elSpanEmail)
  elItem.appendChild(elSpanPhone)
  elList.appendChild(elItem)
}
