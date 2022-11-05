(function () {
  const slides = [
    '<div class="slide"><img src="img/adidas.svg" alt="adidas" class="brands-carousel__img"></div>',
    '<div class="slide"><img src="img/asics.svg" alt="asics" class="brands-carousel__img"></div>',
    '<div class="slide"><img src="img/new-balance.svg" alt="new-balance" class="brands-carousel__img"></div>',
    '<div class="slide"><img src="img/nike.svg" alt="nike" class="brands-carousel__img"></div>',
    '<div class="slide"><img src="img/reebok.svg" alt="reebok" class="brands-carousel__img"></div>',
  ];
  let currentSlideIndx = 0;
  function renderSlide() {
    const slideContainer = document.querySelector(".brands-carousel-container");
    slideContainer.innerHTML = slides[currentSlideIndx];
    if (window.innerWidth > 600) {
      const secondSlideInd =
        currentSlideIndx + 1 >= slides.length ? 0 : currentSlideIndx + 1;
      slideContainer.innerHTML += slides[secondSlideInd];

      if (window.innerWidth > 768) {
        const thirdSlideInd =
          secondSlideInd + 1 >= slides.length ? 0 : secondSlideInd + 1;
        slideContainer.innerHTML += slides[thirdSlideInd];

        if (window.innerWidth > 992) {
          const fourthSlideInd =
            thirdSlideInd + 1 >= slides.length ? 0 : thirdSlideInd + 1;
          slideContainer.innerHTML += slides[fourthSlideInd];
        }
      }
    }
  }
  function nextSlide() {
    currentSlideIndx =
      currentSlideIndx + 1 >= slides.length ? 0 : currentSlideIndx + 1;
    renderSlide();
  }
  function prevSlide() {
    currentSlideIndx =
      currentSlideIndx - 1 < 0 ? slides.length - 1 : currentSlideIndx - 1;
    renderSlide();
  }
  renderSlide();
  const nextBtn = document.querySelector(".brands-carousel-next");
  nextBtn.addEventListener("click", nextSlide);

  const prevBtn = document.querySelector(".brands-carousel-prev");
  prevBtn.addEventListener("click", prevSlide);

  window.addEventListener("resize", renderSlide);
})();
