
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalclose = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container')

        // hàm hiển thị from mua vế (thêm class open vào modal)
function showBuyTickets(){
 modal.classList.add('open');
    }

        // lặp qua từng thẻ button và nghe sự kiện click
for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click',showBuyTickets )
        }

        // hàm ẩn thẻ mua vế(gỡ class modal open)

function hideBuyTickets(){
    modal.classList.remove('open')
        }


        // nghe hành vi click vào bbtn close( trước phẩy là tên hành vi, sau là tên hàm)
modalclose.addEventListener('click' , hideBuyTickets);
       


modal.addEventListener('click', hideBuyTickets);

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})


var menuDrop = document.getElementById('menudrop');

var mobiMenu = document.getElementById('menu-mobi');
var heightMenu = menuDrop.clientHeight;

mobiMenu.onclick = function () {
    var isClose = menuDrop.clientHeight === heightMenu;
    if (isClose) {
        menuDrop.style.height = 'auto';
    }
    else {
        menuDrop.style.height = null;
    }
}

// tự động đóng menu khi chọn

var menuItems = document.querySelectorAll('#menudrop li a[href*="#"]');
for(var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    

    menuItem.onclick = function (event) {
        var isParent = this.nextElementSibling && this.nextElementSibling.classList.contains('drop');
        if(isParent) {
             event.preventDefault();
        }
        else {
            menuDrop.style.height = null;
        }
    }
}

