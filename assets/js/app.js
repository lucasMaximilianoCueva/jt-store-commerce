var products;
var shoppingCart;
var showTotalPrice;
var searchResultLength;
var Filters;
var searchInput;
var formSearch;
var results = [];
var data;

function addToCart(id) {
    shoppingCart.add(data[id - 1]);
    var totalPrice = totalPrice + data[id - 1].price;
}

function emptyCart() {
    shoppingCart.del();
}

function delProduct(id) {
    shoppingCart.remove(data[id - 1]);
    var totalPrice = totalPrice - data[id - 1].price;
}

function goBack() {
    $('#Details').hide();
    $('#products-body').show('slow');
    $('#img-product-container').empty();
}

function seeMore(id) {
    $('#title-product').html(data[id - 1].title);
    $('#description-product').html(data[id - 1].longdescription);

    $('#img-product-container').append(`<div id="img-product"><img src="${data[id - 1].img}"></div>`);

    $('#price-product').html(`Precio: $${data[id-1].price}`);
    $('#add-product').html(`<div class="btn-buy-details" onclick="addToCart('${data[id-1].id}')"><img src="assets/img/image.png" alt="Agregar"></div>`)
    $('#return').html(`<div id="go-back" class="btn-buy-details" onclick="goBack()"><img src="assets/img/go-back-arrow.png" alt="Volver"></div>`)

    $('#products-body').hide();
    $('#Details').show('slow');
}

function paymentGateway() {
    $('.btn-payment').click(function() {
        $('#body-store').hide();
        $('#landing-body').hide();
        $('#contact').hide();
        $('#form-search').hide();
        $('.payment-block').hide();
        $('#payment-gateway').show('slow');
    });
}

function goContact() {
    $('#contact').show('slow');
    $('#landing-body').hide();
    $('#body-store').hide();
    $('#form-search').hide();
    $('.payment-block').hide();
}

// payment gateway

$('#btnConfirm').click(function() {

    pay = $('input[name="pay"]:checked');
    comment = $('input[name="comment"]');

    $('#method-display').html(`<h2>${pay.val()}</h2>`)
    $('#pay-display').html(`<h2>$${totalPrice}</h2>`)
    $('#comment-display').html(`<p>${comment.val()}</p>`)

    $('.payment-block').show('slow');
});

function closePayment() {
    $('#payment-gateway').hide();
    $('#landing-body').show();

}

$(document).ready(() => {

    productsContainer = $('#products-body');
    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: "https://lucasmaximilianocueva.github.io/jt-store-commerce/assets/data/data.json",

    }).done(function(dataJson) {
        buildList(dataJson);
        data = dataJson;
    }).fail(function() {
        alert('No se puede acceder a este sitio web correctamente');
    })


    Filters = $('#filter-list');
    $.ajax({
        method: 'GET',
        dataType: 'json',
        url: "https://lucasmaximilianocueva.github.io/jt-store-commerce/assets/data/data_filters.json",

    }).done(function(filters) {
        buildFilters(filters);
    }).fail(function() {
        alert('No se puede acceder a los filtros');
    })

    shoppingCart = new ShoppingCart();
    shoppingCart.populate();
    shoppingCart.buildCart('cart-box');

    shoppingCart.totalPriceRender();

    searchResultLength = $('#search-result-length');

    $('#delete-input').click(function() {
        deleteInput();
    });


    searchInput = $('#search-input');
    searchInput.on('input', function(event) {
        if (event.target.value.length > 2) {
            getSearchBoxValue();
        } else if (event.target.value.length == 0 && event.target.value.length < 3) {
            $(searchResultLength.empty());
            buildList(data);
        }
    })

    formSearch = $('#form-search');
    formSearch.submit(function(e) {
        e.preventDefault();
        getSearchBoxValue();
    });


    $('#slider').nivoSlider({

        effect: 'fade',
        controlNav: false,
        directionNav: false,
        pauseOnHover: false,
        randomStart: false,

        beforeChange: function() {},

        afterChange: function() {},

        slideshowEnd: function() {},

        lastSlide: function() {},

        afterLoad: function() {}

    });


});