var flag = true;
document.getElementById("btnSend").addEventListener("click", function(){flag=true});
$(document).ready(function() {


    populateEvents();
    menu();
    icons();
    text();
    ddl();
    insertImage();
    magnifPopup();
    insertRadioBtn();
    insertCb();
    imagesDesing();
    couponPopUp();

    document.getElementById("btnSend").addEventListener("click", formValidate);

    //SERVICE SHOW
    $(':radio[name=radio]').change(function() {
        $(".showService").show("slow")
    });

    //BACK TO TOP AROW
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    //PORTFOLIO IMG
    const appear = document.querySelector('.appear');
    const cb = function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('inview');
            } else {
                entry.target.classList.remove('inview');
            }
        });
    }
    const io = new IntersectionObserver(cb);
    io.observe(appear);

    function magnifPopup() {
        $('.image-popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }
})

function couponPopUp() {
    const couponContainer = document.querySelector(".coupon-container");
    const closeBtn = document.querySelector(".coupon-container .close");
    const redeemBtn = document.querySelector(".coupon-container .btn");

    setTimeout(() => {
        couponContainer.classList.add("active");
    }, 3000);

    closeBtn.addEventListener("click", () => {
        couponContainer.classList.remove("active");
    });

    redeemBtn.addEventListener("click", () => {
        couponContainer.classList.remove("active");
    });
}

function imagesDesing() {
    let ispis = ""
    let image = ["Venčanja", "Rođendani", "Krštenja"];

    image.forEach(e => {

        if (e == "Venčanja") {
            ispis += `<div class="carousel-item active">
                    <img src="images/people/${e.toLowerCase()}.jpg" class="img-fluid team-image" alt="${e}">
                    <div class="team-thumb bg-warning">
                        <h3 class="text-white mb-0">${e}</h3>
                    </div>
                </div>`
        } else {
            ispis += `<div class="carousel-item">
            <img src="images/people/${e.toLowerCase()}.jpg" class="img-fluid team-image" alt="${e}">
            <div class="team-thumb bg-warning">
                <h3 class="text-white mb-0">${e}</h3>
            </div>
        </div>`
        }

    });
    document.getElementById("inputImg").innerHTML = ispis;

}

function menu() {
  let ispis = `<ul class="navbar-nav mx-auto">`;

  let menu = [
    { text: "Početna", link: "#pocetna" },
    { text: "O nama", link: "#o-nama" },
    { text: "Portfolio", link: "#portfolio" },
    { text: "Događaji", link: "#dogadjaji" },
    { text: "Kontakt", link: "#kontakt" },
    { text: "Autor", link: "#autor" },
    {
      text: "Doc",
      link: "",
      download: true
    },
    { text: "Sajt", link: "#" }
  ];

  menu.forEach(el => {
    if (el.download) {
      ispis += `
        <li class="nav-item">
          <a class="nav-link" href="${el.link}" download>
            ${el.text}
          </a>
        </li>
      `;
    } else {
      ispis += `
        <li class="nav-item">
          <a class="nav-link" href="${el.link}">
            ${el.text}
          </a>
        </li>
      `;
    }
  });

  ispis += `</ul>`;
  document.getElementById("navbarNav").innerHTML = ispis;
}

function icons() {
    var social = "<ul class='social-icon'>"
    let menu = ["facebook", "whatsapp", "instagram", "youtube", "diagram-3"];
    let href = ["https://www.facebook.com/",
        "https://wa.me/+3811234567",
        "https://www.instagram.com/",
        "https://www.youtube.com/",
        "informations/sitemap.xml",
    ]

    menu.forEach(function callback(element, index) {
        social += `<li><a href="${href[index]}"  target="_blank" class="social-icon-link bi-${element}"></a></li>`
    });
    social += '</ul>';
    document.getElementById("icons").innerHTML = social;
}

function text() {
    let ispis = '';
    let p = ["Fotografske usluge koje nudimo uključuju portretnu fotografiju, fotografisanje događaja, fotografisanje nekretnina i još mnogo toga.",
        "Od početka našeg rada, stvorili smo mnogo uspomena zajedno sa našim klijentima koje su nas učinile savršenim za vaše prilike.",
        "Neki trenuci zaslužuju više od selfija, posebno oni koji se dele sa porodicom. Dozvolite nam da vaše zajedničke trenutke pretvorimo u uspomene koje traju ceo život."
    ];

    p.forEach(element => {
        ispis += `<p class= "textBr">${element}</p>`
    });
    document.querySelector("#text").innerHTML = ispis;
}

function insertImage() {
    let ispis = '';
    const list = document.getElementsByClassName("insert");
    let src = [{
            type: "birthday2",
            title: "Nevenin rođendan"
        },
        {
            type: "wedding2",
            title: "Anino i Nikolino venčanje"
        },
        {
            type: "wedding1",
            title: "Jovanino i Aleksino venčanje"
        },
        {
            type: "newYear",
            title: "Fotografije za novogodišnji kalendar"
        }
    ];

    for (let i = 0; i < src.length; i++) {
        ispis = `<a href="images/portfolio/${src[i].type}.jpg" class="image-popup">
                    <img src="images/portfolio/${src[i].type}.jpg" class="img-fluid portfolio-image" alt="">
                </a>
                <div class="portfolio-info">                     
                    <h4 class="portfolio-title mb-0">${src[i].title}</h4>
                </div>`
        list[i].innerHTML = ispis;
    }
}

function insertRadioBtn() {
    let ispis = '';
    const radioBtn = document.getElementsByClassName("inputRadio");
    let typeOfCelebration = ["Venčanje", "Rođendan", "Krštenje"];

    typeOfCelebration.forEach(function callback(element, index) {
        ispis = `<div class="form-check">
        <input type="radio" name="radio" class="form-check-input fnt">
        
        <label class="form-label">${element}</label></div>`
        radioBtn[index].innerHTML = ispis;
    });
}

function insertCb() {
    let ispis = '';
    const cb = document.getElementsByClassName("cb");
    let typeOfServices = ["Fotografisanje", "Snimanje", "Snimanje dronom"];

    typeOfServices.forEach(function callback(element, index) {
        ispis = `<div class="form-check">
        <input type="checkbox" name="checkbox" class="form-check-input fnt">
        
        <label class="form-label">${element}</label></div>`
        cb[index].innerHTML = ispis;
    });
}

function ddl() {
    let ispisDDL = "<label class='form-label'>Koje Vam vreme odgovara:</label><select id='time' name='time'><option value='0'>Izaberite</option>"
    let valueDDL = ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"]
    valueDDL.forEach(element => {
        ispisDDL += `<option value="${element}">${element}h</option>`
    });

    ispisDDL += "</select>";
    document.getElementById("ddl").innerHTML = ispisDDL;
}

function formValidate() {
    var nameContact = document.getElementById("name");
    var email = document.getElementById("email");
    var radioBtns = document.getElementsByName("radio");
    var cb = document.getElementsByName("checkbox");
    var date = document.getElementById("date");
    var ddlTime = document.getElementById("time");

    var reName = /^[A-ZŠĐČĆŽ][a-zšđčćž]{1,11}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{1,11})+$/;
    var reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var messageFullName = "Niste pravilno uneli puno ime! Primer: Jovan Sinik";
    var messageEmail = "Niste pravilno uneli imejl! Primer: jovan.sinik@gmail.com";
    var messageRadio = "Morate izabrati jedan događaj!";
    var messageCb = "Morate da izaberete jednu od usluga!"
    var messageDate = "Morate izabrati datum, i on mora biti u budućnosti!";
    var messageTime = "Morate odabrati vreme za svoju priliku!";

    checkRegex(reName, nameContact, messageFullName);
    checkRegex(reEmail, email, messageEmail);

    let valueRadio = "";
    for (let i = 0; i < radioBtns.length; i++) {
        if (radioBtns[i].checked) {
            valueRadio = radioBtns[i].value;
            break;
        }
    }

    let valueCb = "";
    for (let i = 0; i < cb.length; i++) {
        if (cb[i].checked) {
            valueCb += cb[i].value + " ";
        }
    }

    serviceChecks(valueRadio, radioBtns, messageRadio);
    if (valueRadio != "") {
        serviceChecks(valueCb, cb, messageCb);
    }

    dateValidation(date, messageDate);
    timeValidation(ddlTime, messageTime);

    if (flag) {
        let divSuccess = document.getElementById("success");

        divSuccess.innerHTML = `
        <div>
            <strong>Forma je uspešno poslata!</strong><br>
            Hvala ${nameContact.value}, kontaktiraćemo vas u najkraćem roku!
        </div>
    `;

    divSuccess.classList.remove("hidden");
    divSuccess.classList.add("show");

    setTimeout(() => {
        divSuccess.classList.remove("show");
    }, 5000);
        document.getElementById("form").reset();
        console.log(errorCount)
    }
}


function checkRegex(regex, object, message) {
    if (!regex.test(object.value)) {
        object.nextElementSibling.classList.remove("hide");
        object.nextElementSibling.innerHTML = message;
        flag=false;
    } else {
        object.nextElementSibling.classList.add("hide");
    }
}

function serviceChecks(checkedElements, array, message) {
    if (checkedElements == "") {
        array[array.length - 1].parentElement.parentElement.nextElementSibling.classList.remove("hide");
        array[array.length - 1].parentElement.parentElement.nextElementSibling.innerHTML = message;
        flag=false;
    } else {
        array[array.length - 1].parentElement.parentElement.nextElementSibling.classList.add("hide");
    }
}

function dateValidation(date, message) {
    var selectedDate = new Date(date.value);

    var now = new Date();

    if (isNaN(selectedDate) || selectedDate < now) {
        date.parentElement.nextElementSibling.classList.remove("hide");
        date.parentElement.nextElementSibling.innerHTML = message;
        flag=false;
    } else {
        date.parentElement.nextElementSibling.classList.add("hide");
    }
}

function timeValidation(time, message) {
    let ddlTimeValue = time.options[time.selectedIndex].value;

    if (ddlTimeValue == "0") {
        time.parentElement.parentElement.nextElementSibling.classList.remove("hide");
        time.parentElement.parentElement.nextElementSibling.innerHTML = message;
        flag=false;
    } else {
        time.parentElement.parentElement.nextElementSibling.classList.add("hide");
    }

}

function populateEvents() {

    let ispis = "";
    let events = [{
            src: "anniversary",
            alt: "Desetogodišnjica",
            bg: "primary",
            time: "Nadolazeće",
            title: "Dođite i sa nama proslavite desetogodišnjicu od otvaranja!",
            happened: "Januar 30, 2023"
        },
        {
            src: "calendars",
            alt: "Novogodišnji kalendari",
            bg: "success",
            time: "Trenutno",
            title: "Fotografisanje za novogodišnji kalendar",
            happened: "U toku"
        }
    ]

    events.forEach(e => {
        ispis += `<div class="news-thumb news-two-column d-flex flex-column flex-lg-row" data-aos="fade-up">
                        <div class="news-top w-100 news-image-hover news-image-hover-${e.bg}" data-aos="fade-up">
                             <img src="images/news/${e.src}.jpg" class="img-fluid news-image" alt="${e.alt}" />
                            <div class="news-category bg-${e.bg} text-white">${e.time}</div>
                        </div>
                        <div class="news-bottom w-100">
                            <div class="news-text-info">
                                 <h5 class="news-title news-title-link">
                                 ${e.title}
                                </h5>
                                <span class="text-muted">
                                     <i class="bi-geo-alt-fill me-1 mb-2 mb-lg-0"></i>
                                    Šabac, ${e.happened}
                                 </span>
                            </div>
                        </div>
                        </div>
                    `
    });

    document.getElementById("eventSpace").innerHTML = ispis;
}
