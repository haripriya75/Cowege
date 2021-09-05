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
            console.log(JSON.stringify(response.data));
            location.replace('/d-dashboard.html');
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
            location.replace('/form.html')
        })
        .catch(function(error) {
            console.log(error);
        });


}

function googleLogin() {
    location.replace("api/auth/google-login");
}

function formSumit(){
    var data = JSON.stringify({
    "dose1": true,
    "dose2": true,
    "covidPositive": true
    });

    var config = {
    method: 'post',
    url: 'https://covege.herokuapp.com/api/vacine-form',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
    location.replace('/d-dashboard.html')
}