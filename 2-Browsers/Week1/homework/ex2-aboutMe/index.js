'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.

const myNickname = document.getElementById('nickname');
myNickname.textContent = 'Satoof';

const myFavFood = document.getElementById('fav-food');
myFavFood.textContent = 'Soup';

const myHomeTown = document.getElementById('hometown');
myHomeTown.textContent = 'Taiz';

const liElements = document.getElementsByTagName('li');
for (let i = 0; i <= liElements.length; i++) {
  liElements[i].className = 'list-item';
}
