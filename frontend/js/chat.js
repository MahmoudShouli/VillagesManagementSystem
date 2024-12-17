document.getElementById('admins').addEventListener('click', (event) => {
    if(event.target.className == 'profile-pic'){
        const adminName = event.target.getAttribute("alt");
        document.getElementById('admin-name').innerText = adminName;
        const paras = document.querySelectorAll('.admin_para');
        paras.forEach((element) => {
            element.childNodes[0].nodeValue = adminName + ": ";
        })

        document.getElementById('chatting').style.visibility = 'visible';
    }
});
