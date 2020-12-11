
// Cart


// Store
$('#form-search').hide();
$('#body-store').hide();
$('#store-btn').click(function() {
    const headerStore = document.querySelector("header");
    $('#Details').hide();
    $('#body-store').show('linear');
    $('#form-search').show();
    $('#one').hide();
    $('#two').hide();
    $('#three').hide();
    $('#contact').hide();
    $('#products-body').show('slow');
    $('#img-product-container').empty();
    $('#payment-gateway').hide();
    headerStore.classList.add("header-store");

});

$('.payment-block').hide();

// Landing

$('#landing-btn').click(function() {
    $('#landing-body').show();
    $('#body-store').hide();
    $('#form-search').hide();
    $('#contact').hide();
    $('#payment-gateway').hide();
});

// Contact

$('#contact-btn').click(function() {
    $('#contact').show('slow');
    $('#landing-body').hide();
    $('#body-store').hide();
    $('#form-search').hide();
    $('#payment-gateway').hide();
});

// Payment Gateway


function navSection() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            const id = this.getAttribute("id");
            const navActive = document.querySelector(`a[href="#${id}"]`);
            navLinks.forEach(link => link.classList.remove("active"));
            navActive.classList.add("active");
        })
    })
}

navSection();

function scrollAppear() {
    let introText = document.querySelector('.intro-text');
    let introPosition =  introText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if(introPosition < screenPosition) {
        introText.classList.add('intro-appear-scroll');
    }
}

window.addEventListener('scroll', scrollAppear);

function scrollAppearTwo() {
    let introTextTwo = document.querySelector('.intro-text2');
    let introPosition2 =  introTextTwo.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if(introPosition2 < screenPosition) {
        introTextTwo.classList.add('intro-appear-scroll');
    }
}

window.addEventListener('scroll', scrollAppearTwo);

function scrollAppearThree() {
    let introTextThree = document.querySelector('.intro-text3');
    let introPosition3 =  introTextThree.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.5;

    if(introPosition3 < screenPosition) {
        introTextThree.classList.add('intro-appear-scroll');
    }
}

window.addEventListener('scroll', scrollAppearThree);


