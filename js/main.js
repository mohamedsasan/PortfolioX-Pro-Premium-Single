/*==================================================
    PORTFOLIO V2.0
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
        LOADER
    =========================================*/

    window.addEventListener("load", () => {

        const loader = document.querySelector(".loader");

        if (loader) {

            setTimeout(() => {

                loader.classList.add("hide");

                setTimeout(() => {

                    loader.remove();

                }, 300);

            }, 700);

        }

    });

    /*=========================================
        TYPING EFFECT
    =========================================*/

    if (document.querySelector("#typing")) {

        new Typed("#typing", {

            strings: [

                "Full Stack Developer",

                "Frontend Developer",

                "UI / UX Designer",

                "React Developer",

                "Freelancer"

            ],

            typeSpeed: 70,

            backSpeed: 45,

            backDelay: 1500,

            loop: true

        });

    }

    /*=========================================
        STICKY NAVBAR
    =========================================*/

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("active");

        } else {

            header.classList.remove("active");

        }

    });

    /*=========================================
        PROGRESS BAR
    =========================================*/

    const progressBar = document.querySelector(".progress-bar");

    window.addEventListener("scroll", () => {

        const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const progress =
            (window.pageYOffset / totalHeight) * 100;

        progressBar.style.width = progress + "%";

    });

    /*=========================================
        ACTIVE NAVIGATION
    =========================================*/

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-menu a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.clientHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /*=========================================
        MOBILE MENU
    =========================================*/

    const menuBtn = document.getElementById("menuBtn");

    const navMenu = document.querySelector(".nav-menu");

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("show");

    });

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");

        });

    });

    /*=========================================
        BACK TO TOP
    =========================================*/

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /*=========================================
        DARK / LIGHT MODE
    =========================================*/

    const themeBtn = document.getElementById("themeBtn");

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const icon = themeBtn.querySelector("i");

        if (document.body.classList.contains("light")) {

            icon.classList.remove("fa-moon");

            icon.classList.add("fa-sun");

        } else {

            icon.classList.remove("fa-sun");

            icon.classList.add("fa-moon");

        }

    });

    /*=========================================
        REVEAL ON SCROLL
    =========================================*/

    const reveals = document.querySelectorAll(".reveal");

    function revealSections() {

        reveals.forEach(item => {

            const windowHeight = window.innerHeight;

            const revealTop = item.getBoundingClientRect().top;

            if (revealTop < windowHeight - 120) {

                item.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", revealSections);

    revealSections();

    /*=========================================
        GSAP
    =========================================*/

    if (typeof gsap !== "undefined") {

        gsap.from(".logo", {

            y: -60,

            opacity: 0,

            duration: 1

        });

        gsap.from(".nav-menu li", {

            y: -60,

            opacity: 0,

            stagger: .12,

            duration: 1,

            delay: .2

        });

        gsap.from(".hero-text", {

            x: -120,

            opacity: 0,

            duration: 1.2,

            delay: .4

        });

        gsap.from(".hero-image", {

            x: 120,

            opacity: 0,

            duration: 1.2,

            delay: .6

        });

    }

    /*=========================================
        AOS
    =========================================*/

    AOS.init({

        duration: 900,

        once: true,

        offset: 100

    });



    /*=========================================
    COUNTER
=========================================*/

const counters = document.querySelectorAll(".counter");

const runCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        const update = () => {

            const current = +counter.innerText;

            const increment = Math.ceil(target / 80);

            if (current < target) {

                counter.innerText = current + increment;

                setTimeout(update, 20);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

    });

};

const aboutSection = document.querySelector("#about");

let counterStarted = false;

window.addEventListener("scroll", () => {

    if (!counterStarted) {

        const top = aboutSection.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            runCounter();

            counterStarted = true;

        }

    }

});


/*=========================================
MOUSE SPOTLIGHT
=========================================*/

const spotlight=document.querySelector(".spotlight");

document.addEventListener("mousemove",(e)=>{

spotlight.style.left=e.clientX+"px";

spotlight.style.top=e.clientY+"px";

});




document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;

btn.style.transform=`translate(${x*.15}px,${y*.15}px)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translate(0,0)";

});

});





const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

});