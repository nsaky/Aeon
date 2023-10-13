// REVIEWS
const slider = new A11YSlider(document.querySelector(".slider"), {
  // adaptiveHeight: false,
  dots: true,

  autoplay: true,
  autoplaySpeed: 3000,
  autoplayHoverPause: false,

  arrows: false,
  container: true,
  customPaging: function (index, a11ySlider) {
    return '<button class="btn-pagination">' + index + "</button>";
  },
  responsive: {
    481: {
      dots: false,
      slidesToShow: 2,
    },
    950: {
      slidesToShow: null,
    },
  },
});

// PRICING

const toggle = document.getElementById("price-toggle");
const basicPrice = document.querySelector("#basic h1");
const processionalPrice = document.querySelector("#professional h1");
const masterPrice = document.querySelector("#master h1");

updatePrices(toggle.checked);

toggle.addEventListener("click", (e) => {
  updatePrices(e.target.checked);
});

function updatePrices(checked) {
  if (checked) {
    basicPrice.innerHTML = "<span>&dollar;</span>199.99";
    processionalPrice.innerHTML = "<span>&dollar;</span>249.99";
    masterPrice.innerHTML = "<span>&dollar;</span>399.99";
  } else {
    basicPrice.innerHTML = "<span>&dollar;</span>19.99";
    processionalPrice.innerHTML = "<span>&dollar;</span>24.99";
    masterPrice.innerHTML = "<span>&dollar;</span>39.99";
  }
}
