/* =========================================
   WEBEX PORTFOLIO JAVASCRIPT
========================================= */


/* =========================================
   PRELOADER
========================================= */

window.addEventListener("load", () => {

    const preloader =
        document.getElementById("preloader");

    setTimeout(() => {

        preloader.classList.add("hide");

    }, 900);

});


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

});


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

        });

    });


/* =========================================
   CUSTOM CURSOR
========================================= */

const cursor =
    document.querySelector(".cursor");

const cursorRing =
    document.querySelector(".cursor-ring");


if (window.innerWidth > 700) {

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;


    window.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.left =
            mouseX + "px";

        cursor.style.top =
            mouseY + "px";

    });


    function animateCursor() {

        ringX +=
            (mouseX - ringX) * 0.12;

        ringY +=
            (mouseY - ringY) * 0.12;

        cursorRing.style.left =
            ringX + "px";

        cursorRing.style.top =
            ringY + "px";

        requestAnimationFrame(
            animateCursor
        );

    }

    animateCursor();


    document
        .querySelectorAll("a, button")
        .forEach(element => {

            element.addEventListener(
                "mouseenter",
                () => {

                    cursor.classList.add("active");

                }
            );

            element.addEventListener(
                "mouseleave",
                () => {

                    cursor.classList.remove("active");

                }
            );

        });

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   PROJECT CARD TILT
========================================= */

const projectCards =
    document.querySelectorAll(".project-card");


if (window.innerWidth > 900) {

    projectCards.forEach(card => {

        card.addEventListener(
            "mousemove",
            (e) => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    e.clientX - rect.left;

                const y =
                    e.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    (y - centerY) / 30;

                const rotateY =
                    (centerX - x) / 30;

                card.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

            }
        );

    });

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const projectType =
            document.getElementById("projectType").value;

        const message =
            document.getElementById("message").value.trim();


        if (!name || !email || !message) {

            formMessage.textContent =
                "Please fill in the required fields.";

            return;

        }


        const whatsappMessage =

            `Hello WEBEX!

Name: ${name}

Email: ${email}

WhatsApp: ${phone || "Not provided"}

Project: ${projectType || "Not specified"}

Message:
${message}`;


        const encodedMessage =
            encodeURIComponent(
                whatsappMessage
            );


        const whatsappURL =
            `https://wa.me/919762463324?text=${encodedMessage}`;


        formMessage.textContent =
            "Opening WhatsApp...";


        window.open(
            whatsappURL,
            "_blank"
        );


        contactForm.reset();

    }
);


/* =========================================
   THREE.JS 3D SCENE
========================================= */

import * as THREE from "three";


const canvas =
    document.getElementById("threeCanvas");


if (canvas) {

    const scene =
        new THREE.Scene();


    const camera =
        new THREE.PerspectiveCamera(
            45,
            canvas.clientWidth /
            canvas.clientHeight,
            0.1,
            100
        );


    camera.position.z = 6;


    const renderer =
        new THREE.WebGLRenderer({

            canvas: canvas,

            antialias: true,

            alpha: true

        });


    renderer.setPixelRatio(
        Math.min(
            window.devicePixelRatio,
            2
        )
    );


    renderer.setSize(
        canvas.clientWidth,
        canvas.clientHeight,
        false
    );


    /* =========================
       LIGHTS
    ========================= */

    const ambientLight =
        new THREE.AmbientLight(
            0xffffff,
            1.5
        );


    scene.add(ambientLight);


    const purpleLight =
        new THREE.PointLight(
            0x8b5cf6,
            12,
            10
        );


    purpleLight.position.set(
        2,
        2,
        3
    );


    scene.add(purpleLight);


    const cyanLight =
        new THREE.PointLight(
            0x22d3ee,
            8,
            10
        );


    cyanLight.position.set(
        -3,
        -1,
        2
    );


    scene.add(cyanLight);


    /* =========================
       MAIN 3D OBJECT
    ========================= */

    const group =
        new THREE.Group();


    scene.add(group);


    const material =
        new THREE.MeshStandardMaterial({

            color: 0x8b5cf6,

            metalness: 0.7,

            roughness: 0.25,

            emissive: 0x16052f,

            emissiveIntensity: 0.8

        });


    const darkMaterial =
        new THREE.MeshStandardMaterial({

            color: 0x101016,

            metalness: 0.8,

            roughness: 0.2

        });


    /* Monitor */

    const monitorGeometry =
        new THREE.BoxGeometry(
            3.5,
            2.1,
            0.18
        );


    const monitor =
        new THREE.Mesh(
            monitorGeometry,
            darkMaterial
        );


    monitor.position.y = 0.6;


    group.add(monitor);


    /* Screen */

    const screenGeometry =
        new THREE.PlaneGeometry(
            3.15,
            1.75
        );


    const screenMaterial =
        new THREE.MeshBasicMaterial({

            color: 0x090912

        });


    const screen =
        new THREE.Mesh(
            screenGeometry,
            screenMaterial
        );


    screen.position.set(
        0,
        0.6,
        0.11
    );


    group.add(screen);


    /* Screen glow */

    const glowGeometry =
        new THREE.PlaneGeometry(
            2.7,
            1.4
        );


    const glowMaterial =
        new THREE.MeshBasicMaterial({

            color: 0x4c1d95,

            transparent: true,

            opacity: 0.35

        });


    const glow =
        new THREE.Mesh(
            glowGeometry,
            glowMaterial
        );


    glow.position.set(
        0,
        0.6,
        0.13
    );


    group.add(glow);


    /* Monitor stand */

    const standGeometry =
        new THREE.BoxGeometry(
            0.25,
            1,
            0.25
        );


    const stand =
        new THREE.Mesh(
            standGeometry,
            darkMaterial
        );


    stand.position.y = -0.75;


    group.add(stand);


    /* Base */

    const baseGeometry =
        new THREE.BoxGeometry(
            1.8,
            0.15,
            0.8
        );


    const base =
        new THREE.Mesh(
            baseGeometry,
            darkMaterial
        );


    base.position.y = -1.2;


    group.add(base);


    /* Floating cube */

    const cubeGeometry =
        new THREE.IcosahedronGeometry(
            0.5,
            1
        );


    const cube =
        new THREE.Mesh(
            cubeGeometry,
            material
        );


    cube.position.set(
        2,
        1.5,
        0
    );


    group.add(cube);


    /* Floating small objects */

    const smallMaterial =
        new THREE.MeshStandardMaterial({

            color: 0x22d3ee,

            metalness: 0.6,

            roughness: 0.2,

            emissive: 0x032d36

        });


    const smallGeometry =
        new THREE.OctahedronGeometry(
            0.22,
            0
        );


    const smallOne =
        new THREE.Mesh(
            smallGeometry,
            smallMaterial
        );


    smallOne.position.set(
        -2,
        1.3,
        0
    );


    group.add(smallOne);


    const smallTwo =
        new THREE.Mesh(
            smallGeometry,
            material
        );


    smallTwo.position.set(
        1.9,
        -1.2,
        0
    );


    group.add(smallTwo);


    /* =========================
       PARTICLES
    ========================= */

    const particleGeometry =
        new THREE.BufferGeometry();


    const particleCount = 250;


    const positions =
        new Float32Array(
            particleCount * 3
        );


    for (
        let i = 0;
        i < particleCount * 3;
        i++
    ) {

        positions[i] =
            (Math.random() - 0.5) * 10;

    }


    particleGeometry.setAttribute(

        "position",

        new THREE.BufferAttribute(
            positions,
            3
        )

    );


    const particleMaterial =
        new THREE.PointsMaterial({

            color: 0x8b5cf6,

            size: 0.025,

            transparent: true,

            opacity: 0.7

        });


    const particles =
        new THREE.Points(
            particleGeometry,
            particleMaterial
        );


    scene.add(particles);


    /* =========================
       MOUSE
    ========================= */

    let mouseX = 0;
    let mouseY = 0;


    window.addEventListener(
        "mousemove",
        (event) => {

            mouseX =
                (event.clientX /
                    window.innerWidth) *
                2 - 1;

            mouseY =
                -(event.clientY /
                    window.innerHeight) *
                2 + 1;

        }
    );


    /* =========================
       ANIMATION
    ========================= */

    const clock =
        new THREE.Clock();


    function animate() {

        requestAnimationFrame(
            animate
        );


        const elapsed =
            clock.getElapsedTime();


        group.rotation.y +=
            (
                mouseX * 0.25 -
                group.rotation.y
            ) * 0.025;


        group.rotation.x +=
            (
                mouseY * 0.12 -
                group.rotation.x
            ) * 0.025;


        cube.rotation.x =
            elapsed * 0.5;

        cube.rotation.y =
            elapsed * 0.7;


        smallOne.rotation.x =
            elapsed * 0.7;

        smallOne.rotation.y =
            elapsed * 0.5;


        smallTwo.rotation.y =
            elapsed * 0.8;


        particles.rotation.y =
            elapsed * 0.015;


        renderer.render(
            scene,
            camera
        );

    }


    animate();


    /* =========================
       RESIZE
    ========================= */

    function resizeRenderer() {

        const width =
            canvas.clientWidth;

        const height =
            canvas.clientHeight;


        camera.aspect =
            width / height;

        camera.updateProjectionMatrix();


        renderer.setSize(
            width,
            height,
            false
        );

    }


    window.addEventListener(
        "resize",
        resizeRenderer
    );


    resizeRenderer();

}