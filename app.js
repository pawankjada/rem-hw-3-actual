const studentList = [
  'Lisa',
  'Sarah',
  'Anne',
  'George',
  'Daniel',
  'Jionni',
  'Jennifer',
  'Tasha'
];

// Using the new DOM Manipulation library, do all of the following: 

// 1. Render all of the names in `studentList` individually in paragraph tags to the div with the class `content`.

const render = function () {
  $('.content').empty();
  for (let i = 0; i < studentList.length; i++) {
    $('.content').append(`<div><p> class="name"> ${studentList[i]} </p><div>`);
  }
};

render();
// 2. When the add button is pressed, use the `val` function to get the value of the user input and and add that name to the list. Re-render the list. 
$('#add').on('click', function () {
  const name = $('#name').val()
  studentList.push(name);
  render();

})
// 3. When the search button is pressed, add the `blue` class to the `body` if the name that was input is in the studentList array.
const search = function () {
  const inputName = $('#name').val()
  for (let i = 0; i < studentList.length; i++) {
    let name = studentList[i];
    if (inputName === name) {
      $('body').addClass('blue')
    }
  }
};
$('#search').on('click', search);
// 4. When the delete button is pressed, delete the element from studentList that matches the name the user entered in the input field. Re-render the list.

$('#delete').click(function () {
  const userDelete = studentList.indexOf($('#name').val());

  studentList.splice(userDelete, 1);

  render();
});