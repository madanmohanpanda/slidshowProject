(function () {
    const imgDiv = document.querySelector('img');
    const next = document.getElementById('next');
    const prev = document.getElementById('pre');
    const imgArr = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg"];
    let i = 0;
    next.addEventListener('click', () => {

        i = (i) % (imgArr.length - 1) + 1;
        imgDiv.src = imgArr[i];
    });

    prev.addEventListener('click', () => {
        i--;
        if (i < 0) {
            i = imgArr.length - 1;
        }
        imgDiv.src = imgArr[i];
    });

})();



