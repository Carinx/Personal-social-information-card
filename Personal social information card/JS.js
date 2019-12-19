var messageBox = document.querySelector('.js-message');
var btn = document.querySelector('.js-message-btn');
var card = document.querySelector('.js-profile-card');
var closeBtn = document.querySelectorAll('.js-message-close');
var up_count = document.getElementById("up_count");

btn.addEventListener('click', function (e) {
    e.preventDefault();
    card.classList.add('active');
});

closeBtn.forEach(function (element, index) {
    console.log(element);
    element.addEventListener('click', function (e) {
        e.preventDefault();
        card.classList.remove('active');
    });
});

up_count.addEventListener("click",function(){
    var count = document.getElementById("count");
    var text = parseInt(count.innerHTML)+1;
    count.innerHTML = text;
});
