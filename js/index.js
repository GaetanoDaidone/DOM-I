const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


const nav = document.querySelector ('header nav');
const navLinks = document.querySelectorAll('nav a');
const navImage = document.querySelector('#logo-img');
let nav_items = nav.children;
for (let i = 0; i < nav_items.length; i++) {
    if (i >= 1 && i <= 6) {
        nav_items[i].textContent = siteContent["nav"][`nav-item-${i}`];
    }
    nav_items[i].style.color = "green";
}

navImage.src = siteContent.nav['img-src'];

//cta

const ctaH1 = document.querySelector('.cta h1');
const ctaBtn = document.querySelector('.cta button');
const ctaImage = document.querySelector('#cta-img');
ctaImage.src = siteContent.cta['img-src'];
ctaH1.textContent = siteContent.cta.h1
ctaBtn.textContent = siteContent.cta.button

const middle_Img = document.querySelector('#middle-img');
middle_Img.src = siteContent["main-content"]['middle-img-src'];

let text_content_h4 = document.querySelectorAll(".text-content h4");
text_content_h4[0].textContent = siteContent['main-content']['features-h4']
text_content_h4[1].textContent = siteContent["main-content"]["about-h4"];
text_content_h4[2].textContent = siteContent["main-content"]["services-h4"];
text_content_h4[3].textContent = siteContent["main-content"]["product-h4"];
text_content_h4[4].textContent = siteContent["main-content"]["vision-h4"];

let text_content_ps = document.querySelectorAll(".text-content p");
text_content_ps[0].textContent = siteContent["main-content"]["features-content"];
text_content_ps[1].textContent = siteContent["main-content"]["about-content"];
text_content_ps[2].textContent = siteContent["main-content"]["services-content"];
text_content_ps[3].textContent = siteContent["main-content"]["product-content"];
text_content_ps[4].textContent = siteContent["main-content"]["vision-content"];

let contact_h4 = document.querySelector(".contact h4");
contact_h4.textContent = siteContent["contact"]["contact-h4"];

let contact_ps = document.querySelectorAll(".contact p");
contact_ps[0].textContent = siteContent["contact"]["address"];
contact_ps[1].textContent = siteContent["contact"]["phone"];
contact_ps[2].textContent = siteContent["contact"]["email"];

let footer_p = document.querySelector("footer p").textContent = siteContent["footer"]["copyright"];