// <!-- Throttling means limiting how often a function can 
// excute within a certain time interval.  -->

// For example, if an event fires 100 times in 1 second, 
// throttling can make your function execute 
// only once every 200ms.


// Date Object 


function throttle(fn, delay) {
    let lastTime = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastTime >= delay) {
            lastTime = now;
            fn.apply(this, args);
        }
    }
}

function handleScroll() {
    console.log("Scrolling ...")
}

window.addEventListener(
    "scroll",
    throttle(handleScroll, 200)
);