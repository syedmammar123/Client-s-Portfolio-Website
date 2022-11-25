const navbar = document.getElementById('ul');
const menubtn = document.getElementById('menu-btn');
const closebtn = document.getElementById('close-btn');

function showMenu() {
    navbar.style.display = 'block';
    menubtn.style.display = 'none';
    closebtn.style.display = 'block';

}

function hideMenu() {
    navbar.style.display = 'none';
    menubtn.style.display = 'block';
    closebtn.style.display = 'none';
}


function changeContent(e) {
    var certi = document.getElementById("certificaton")
    var exp = document.getElementById('experience');
    if (e.textContent == "Experience") {
        e.textContent = "Certifications & Education";
        certi.style.display = 'none';
        exp.style.display = 'block';

    }
    else {
        e.textContent = "Experience";
        certi.style.display = 'block';
        exp.style.display = 'none';
    }
}
function showSkill(e) {
    var items = e.nextSibling.nextSibling
    if (items.style.display == 'block') {
        items.style.display = 'none'
    }
    else {
        items.style.display = 'block'
    }
}

function zoomIn(e) {
    const modal = document.getElementById('modal');
    const modalPic = document.getElementById('modalPic')
    const src = e.src;
    modalPic.src = src;
    modal.style.display = 'block';

}




