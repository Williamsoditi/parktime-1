// const btn = document.getElementsByClassName('btn');

// btn.addEventListener('click', function onClick() {
//   btn.style.backgroundColor = 'salmon';
//   btn.style.color = 'white';
// });


const btn = document.getElementById('btn');

let index = 0;

const colors = ['green', 'orange', 'red'];

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = colors[index];
//   btn1.style.color = 'green';

  index = index >= colors.length - 1 ? 0 : index + 1;
});

function myFunction() {
    var btn1 = document.getElementById("btn1");
    if (btn1.value == "free") {
        btn1.value = "booked";
        btn1.innerHTML = "booked";
    }
    else {
        btn1.value = "free";
        btn1.innerHTML = "free";
    }
}