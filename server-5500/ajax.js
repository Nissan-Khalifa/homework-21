
const getAjax = document.querySelector("#getAjax")
const postAjax = document.querySelector("#postAjax")

getAjax.addEventListener('click', getDataAjax)
postAjax.addEventListener('click', postDataAjax)

function getDataAjax() {
    console.log('Get data Ajax');
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/stores-timeout',
        dataType: 'json',
        success: function (data) {
            console.log(data);
        },
        error: function (err) {
            console.log(err.status);
        }
    })
}


function postDataAjax() {
    console.log('post data Ajax');
    const stores = [{
        "name": "Rami Levi",
        "departments": [1, 7]
    },
    {
        "name": "IKEA",
        "departments": [2, 3, 5, 6]
    },
    {
        "name": "Zol Stock",
        "departments": [4, 8]
    }]
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/stores-timeout',
        data: JSON.stringify(stores),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            console.log(data)
        },
        error: function (err) {
            console.log(err.status)
        }
    })

}