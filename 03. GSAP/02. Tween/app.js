// GreenSock Animation Platform -> Its a library in JS to create complex animations
// Works with React, Angular, Vue...

// A tween is a single movement in an animation.
// SYNTAX: gsap.method(element, vars object)

gsap.to(".box", {
    y: 200,
    x: 500,
    duration: 3,
    repeat: -1,  
    yoyo: true
});