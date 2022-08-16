
$('#getDataInCBHell').on('click', getData)

function getData() {
    console.log('request is sending now')
    const ul = $('#storesInCBHell')
    ul.html('')
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/stores',
        dataType: 'json',
        success: function (stores) {
            console.log('stores');
            console.log(stores);
            for (const store of stores) {
                $.ajax({
                    type: 'POST',
                    url: 'http://localhost:3000/bulk-departments',
                    data: JSON.stringify(store.departments),
                    contentType: 'application/json; charset=utf-8',
                    success: function (departments) {
                        console.log('departments');
                        console.log(departments);
                        for (const department of departments) {
                            $.ajax({
                                type: 'POST',
                                url: 'http://localhost:3000/bulk-products',
                                data: JSON.stringify(department.products),
                                contentType: 'application/json; charset=utf-8',
                                success: function (products) {
                                    console.log('products');
                                    console.log(products);
                                    for (const product of products) {
                                        ul.append(`
                                        <li id="list">
                                           <b>Store:</b> ${store.name},<br>
                                           <b>Department:</b> ${department.name},<br>
                                           <b>Product:</b> ${product.name}
                                         </li>`)
                                    }
                                },
                                error: function (error) {
                                    console.log('products');
                                    console.log(error.status);
                                }
                            })
                        }
                    },
                    error: function (error) {
                        console.log('departments');
                        console.log(error.status);
                    }
                })
            }
        },
        error: function (error) {
            console.log('stores');
            console.log(error.status);
        }
    })
}

