base_url = 'https://covege.herokuapp.com';
// base_url = 'http://localhost';


function loginUser() {
    var data = JSON.stringify({
        "email": document.getElementById("loginEMAIL").value,
        "password": document.getElementById("loginPASSWORD").value,
    });

    var config = {
        method: 'post',
        url: base_url + '/api/auth/authenticate',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function(response) {
            // var checkbox = document.getElementById('switch');
            // console.log(checkbox)
            // checkbox.addEventListener('change', function() {
            //     if (this.checked) {
            //         window.location.replace('/d-dashboard.html')
            //     } else {
            //         window.location.replace('/l-dashboard.html')

            //     }
            // })
            console.log(JSON.stringify(response.data));
        })
        .catch(function(error) {
            console.log(error);
        });

}

function registerUser() {
    var data = JSON.stringify({
        "name": document.getElementById("signupNAME").value,
        "email": document.getElementById("signupEMAIL").value,
        "password": document.getElementById("signupPASSWORD").value
    });

    var config = {
        method: 'post',
        url: base_url + '/api/auth/register',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function(response) {
            console.log(JSON.stringify(response.data));
            window.location.replace('/form.html')
        })
        .catch(function(error) {
            console.log(error);
        });


}

function googleLogin() {
    location.replace("https://covege.herokuapp.com/api/auth/google-login")
}