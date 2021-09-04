var data = JSON.stringify({
    "collegeDomain": "juitsolan.in"
});

var config = {
    method: 'post',
    url: 'https://covege.herokuapp.com/api/get-vaccine-data',
    headers: {
        'Content-Type': 'application/json'
    },
    data: data
};

axios(config)
    .then(function(response) {
        console.log(JSON.stringify(response.data));
        var ctx = document.getElementById('stu1-graph').getContext('2d');
        var stu1_graph = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Dose1', 'Dose2'],
                datasets: [{
                    label: 'Number of student vaccinated ',
                    data: [response.data.student.dose1, response.data.student.dose2],
                    backgroundColor: [
                        '#D3D0FF',
                        'rgba(54, 162, 235, 0.2)',

                    ],
                    borderColor: [
                        '#6C63FF',
                        'rgba(54, 162, 235, 1)',

                    ],
                    borderWidth: 2,
                    maintainAspectRatio: false,
                }]
            },

        });

        var ctx = document.getElementById('stu2-graph').getContext('2d');
        var stu2_graph = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Covid negative', 'Covid positive'],
                datasets: [{
                    label: 'Number of student infected',
                    data: [response.data.student.covidNegative, response.data.student.covidPositive],
                    backgroundColor: [

                        'rgba(54, 162, 235, 0.2)',
                        '#D3D0FF',

                    ],
                    borderColor: [

                        'rgba(54, 162, 235, 1)',
                        '#6C63FF',

                    ],
                    borderWidth: 2,
                    maintainAspectRatio: false,
                }]
            },

        });

        var ctx = document.getElementById('prof1-graph').getContext('2d');
        var prof1_graph = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Dose1', 'Dose2'],
                datasets: [{
                    label: 'Number of professor vaccinated ',
                    data: [response.data.professor.dose1, response.data.professor.dose2],
                    backgroundColor: [
                        '#D3D0FF',
                        'rgba(54, 162, 235, 0.2)',

                    ],
                    borderColor: [
                        '#6C63FF',
                        'rgba(54, 162, 235, 1)',

                    ],
                    borderWidth: 2,
                    maintainAspectRatio: false,
                }]
            },

        });

        var ctx = document.getElementById('prof2-graph').getContext('2d');
        var prof2_graph = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Covid negative', 'Covid positive'],
                datasets: [{
                    label: 'Number of professor infected',
                    data: [response.data.professor.covidNegative, response.data.professor.covidPositive],
                    backgroundColor: [

                        'rgba(54, 162, 235, 0.2)',
                        '#D3D0FF',

                    ],
                    borderColor: [

                        'rgba(54, 162, 235, 1)',
                        '#6C63FF',

                    ],
                    borderWidth: 2,
                    maintainAspectRatio: false,
                }]
            },

        });

        var ctx = document.getElementById('total1-graph').getContext('2d');
        var total1_graph = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Dose1', 'Dose2'],
                datasets: [{
                    label: 'Number of total vaccinated ',
                    data: [response.data.total.dose1, response.data.total.dose2],
                    backgroundColor: [
                        '#D3D0FF',
                        'rgba(54, 162, 235, 0.2)',

                    ],
                    borderColor: [
                        '#6C63FF',
                        'rgba(54, 162, 235, 1)',

                    ],
                    borderWidth: 2,
                    maintainAspectRatio: false,
                }]
            },

        });

        var ctx = document.getElementById('total2-graph').getContext('2d');
        var total2_graph = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Covid negative', 'Covid positive'],
                datasets: [{
                    label: 'Number of total infected',
                    data: [response.data.total.covidNegative, response.data.total.covidPositive],
                    backgroundColor: [

                        'rgba(54, 162, 235, 0.2)',
                        '#D3D0FF',

                    ],
                    borderColor: [

                        'rgba(54, 162, 235, 1)',
                        '#6C63FF',

                    ],
                    borderWidth: 2,
                    maintainAspectRatio: false,
                }]
            },

        });

    })
    .catch(function(error) {
        console.log(error);
    });