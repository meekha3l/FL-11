let admin = { email: 'admin@gmail.com', password: 'AdminPass' }
let user = { email: 'user@gmail.com', password: 'UserPass' }
let currentUser = {};

let userEmail = prompt('Enter your e-mail:');
let userPass;
let emailValid = false;
let passValid = false;

console.log(Object.keys(currentUser).length === 0);

const MIN_EMAIL_LENGHT = 6;
const MIN_PASSWORD_LENGHT = 5;

if (!userEmail) {
    alert('Canceled');

} else if (userEmail.length < MIN_EMAIL_LENGHT) {
    alert('I don`t know any emails having name length less than 6 symbol');

} else if (userEmail === user.email || userEmail === admin.email) {
    emailValid = true;

} else {
    alert('I don`t know you');
}

if (emailValid) {
    userPass = prompt('Enter your password:');

    if (userPass) {
        
        switch (userEmail) {
            case user.email :
                if (userPass === user.password) {
                    currentUser.email = user.email;
                    currentUser.password = user.password;
                    passValid = true;
                }
                break;
            case admin.email :
                if (userPass === admin.password) {
                    currentUser.email = admin.email;
                    currentUser.password = admin.password;
                    passValid = true;
                }
                break;
            default:
                passValid = false;
        }

        if(!passValid) {
            alert('Wrong password');
        }

    } else {
        alert('Canceled');
    }

}

if (emailValid && passValid) {
    let changePass = confirm('Do you want to change your password?');

    if (changePass) {
        userPass = prompt('Enter your password:');

        if (userPass === currentUser.password) {
            userPass = prompt('Enter your new password:');

            if (userPass.length < MIN_PASSWORD_LENGHT) {
                alert('It’s too short password. Sorry.');
            } else {
                let userPassTmp = userPass;
                userPass = prompt('Enter your new password:');

                if (userPassTmp === userPass) {
                    alert('You have successfully changed your password.');
                } else {
                    alert('You wrote the wrong password.');
                }
            }

        } else {
            alert('Wrong password');
        }

    } else {
        alert('You have failed the change.');
    }
}

