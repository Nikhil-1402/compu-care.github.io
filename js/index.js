const counters = document.querySelectorAll('.count');
// console.log(counters);
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        // console.log(target);
        const count = +counter.innerText;
        const inc = target / speed;
        // console.log(inc);
        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }
    }
    updateCount();
})