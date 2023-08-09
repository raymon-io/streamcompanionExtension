document.addEventListener('startCasting', (e) => {
    let url = e.detail;
    let castjs = new Castjs();
    castjs.cast(url);
});
