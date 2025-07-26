setTimeout(() => {
            let anim = document.getElementById('load-anim')
            anim.style.display = 'none'
            let contDis = document.getElementById('cont')
            contDis.style.display = 'block'
}, 2500)



var form = document.getElementById('form')
var user = document.getElementById('val1')
var email = document.getElementById('val2')
var password = document.getElementById('val3')


form.addEventListener('submit', (event) => {
    event.preventDefault();
    // ======section1=========
    const emailValue = email.value.trim
    const passwordValue = password.value
    const userValue = user.value

    document.getElementById('title').innerHTML = 'Loading...'

    // save the user's name and password
    
    localStorage.setItem('userPassword', `${passwordValue}`)
    
    localStorage.setItem('userName', `${userValue}`)

    // ========== section1 ENDED =======

    // clear input

    user.value = ''
    email.value = ''
    password.value = ''
    //===========================

    // Create user ID loading animation

    document.getElementById('create-user-id-load-cont').style.display = 'flex';
    document.getElementById('overall-display').style.display = 'none';

    let percent = 0;
    const text = document.getElementById("percentage");
    const status = document.getElementById("status");

    const statusMessages = {
        30: "Creating user ID...",
        60: "Impending to database...",
        90: "Almost done..."
    };

    const interval = setInterval(() => {
        if (percent <= 100) {
        text.textContent = percent + "%";

        // Update status message if one is defined for the current percent
        if (statusMessages[percent]) {
            status.textContent = statusMessages[percent];
        }

        percent += 5;
        } else {
        status.textContent = "Done!";
        clearInterval(interval);
        }
    }, 2000);
    //=================================
    //time out animation
    setTimeout(() => {
        document.getElementById('bar-cont').style.display = 'none'
        document.getElementById('hidden-btn').style.display = 'block'
        document.getElementById('title').innerHTML = 'Done'
    }, 47500)
    //=================================
    
})


