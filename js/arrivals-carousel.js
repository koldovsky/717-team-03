(function () {
    const carouselArrivalsCards = [
      '<div class="arrivals-card" data-active><a class="arrivals-card-link" href="#"><img class="arrivals-card-img" src="img/arrivals/adidas_black_trainer.jpg" alt="Adidas black"><p class="arrivals-card-title">Adidas Black Trainers</p></a><p class="arrivals-card-price">$60,00</p><button class="arrivals-card-btn" type="submit">Add to Cart</button></div>',
      '<div class="arrivals-card" data-active><a class="arrivals-card-link" href="#"><img class="arrivals-card-img" src="img/arrivals/asics_jordan_2000.jpg" alt="Asics Jordan"><p class="arrivals-card-title">Asics Jordan 2000</p></a><p class="arrivals-card-price">$200,00</p><button class="arrivals-card-btn" type="submit">Add to Cart</button></div>',
      '<div class="arrivals-card" data-active><a class="arrivals-card-link" href="#"><img class="arrivals-card-img" src="img/arrivals/nike_winter_jacket_in_blue.jpg" alt="Nike winter"><p class="arrivals-card-title">Nike Winter Jacket in Blue</p></a><p class="arrivals-card-price">$85,00</p><button class="arrivals-card-btn" type="submit">Add to Cart</button></div>',
      '<div class="arrivals-card" data-active><a class="arrivals-card-link" href="#"><img class="arrivals-card-img" src="img/arrivals/puma_textile_running_shoes.jpg" alt="Puma  Shoes"><p class="arrivals-card-title">Puma Textile Running Shoes</p></a><p class="arrivals-card-price">$62,00</p><button class="arrivals-card-btn" type="submit">Add to Cart</button></div>',
      '<div class="arrivals-card" data-active><a class="arrivals-card-link" href="#"><img class="arrivals-card-img" src="img/arrivals/reebok_red_duster.jpg" alt="Reebok Red Duster"><p class="arrivals-card-title">Reebok Red Duster</p></a><p class="arrivals-card-price">$60,00</p><button class="arrivals-card-btn" type="submit">Add to Cart</button></div>',
    ];
    let currentCardIndex = 0;
    function renderArrivalsCard() {
      const arrivalsCardsContainer = document.querySelector(
        ".arrivals-carousel-cards"
      );
      arrivalsCardsContainer.innerHTML = carouselArrivalsCards[currentCardIndex];
      if (window.innerWidth > 767) {
        const secondCardIndex =
          currentCardIndex + 1 >= carouselArrivalsCards.length ? 0 : currentCardIndex + 1;
        arrivalsCardsContainer.innerHTML += carouselArrivalsCards[secondCardIndex];
  
        if (window.innerWidth > 990) {
          const thirdCardIndex =
            secondCardIndex + 1 >= carouselArrivalsCards.length ? 0 : secondCardIndex + 1;
          arrivalsCardsContainer.innerHTML += carouselArrivalsCards[thirdCardIndex];
  
          if (window.innerWidth > 991) {
            const fourthCardIndex =
              thirdCardIndex + 1 >= carouselArrivalsCards.length ? 0 : thirdCardIndex + 1;
            arrivalsCardsContainer.innerHTML += carouselArrivalsCards[fourthCardIndex];
          }
        }
      }
    }
    function showNextArrivalsCard() {
      currentCardIndex =
        currentCardIndex + 1 >= carouselArrivalsCards.length ? 0 : currentCardIndex + 1;
      renderArrivalsCard();
    }
    function showPrevArrivalsCard() {
      currentCardIndex =
        currentCardIndex - 1 < 0 ? carouselArrivalsCards.length - 1 : currentCardIndex - 1;
      renderArrivalsCard();
    }
    renderArrivalsCard();
    const nextArrivalsCardButton = document.querySelector(".arrivals-carousel-button-next");
    nextArrivalsCardButton.addEventListener("click", showNextArrivalsCard);
    const prevArrivalsCardButton = document.querySelector(".arrivals-carousel-button-prev");
    prevArrivalsCardButton.addEventListener("click", showPrevArrivalsCard);
  
    window.addEventListener("resize", renderArrivalsCard);
  })();