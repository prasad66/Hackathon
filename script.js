
// api url
const url = "https://makeup-api.herokuapp.com/api/v1/products.json";


async function getProducts() {

  try {
    const products = await fetch(url);
    const jsonProducts = await products.json();
    console.log(jsonProducts);

    // container for products
    var container = document.getElementById("card-container");

    // creating rows for the product cards
    const row = document.createElement("div");
    row.setAttribute("class", "row row-cols row-cols-md-3 g-4");


    // looping thru all the products 
    jsonProducts.forEach(product => {

      const col = document.createElement("div");
      col.setAttribute("class", "col-12 col-md-3 my-4");


      // this is to end the preloader after successfull fetching
      finishPreload();

      col.innerHTML = ` <a href="${product.product_link}" target = "_blank" class=" text-decoration-none">
       <div class="card mb-4 border-0">
            <img src="${product.image_link}" alt="${product.name}" class="card-img-top mt-2" onerror="altImage(event)"/>
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h3 class="card-title fw-bolder  text-dark">${product.name}</h3>
                <h2>
                  <span class="badge badge-pill bg-danger text-uppercase">
                    $&nbsp;${product.price}
                  </span>
                </h2>
              </div>
              <span class="badge badge-pill bg-success text-uppercase m-1">
                by - ${product.brand}</span>
              <span class="badge badge-pill bg-primary text-uppercase m-1">
                ${product.product_type}</span>
              <span class="text-dark">
                <p class="card-text fw-bold text-dark">${product.description}</p>
              </span>
            </div>
          </div>
          </a>
       `;

      //  appending each cards to the row
      row.appendChild(col);

    });

    // finally appending the row to the container
    container.append(row);
  } catch (error) {

    // this is to end the preloader
    finishPreload()

    // error message incase the fetch failed 
    document.getElementById("card-container").innerHTML = `<div class="d-flex flex-column align-items-center justify-content-center align-content-between">
                                                            <span class="badge bg-danger text-white col-md-6"><h2 class="display-6">Error occured while loading!!!</h2></span>
                                                          <button class="btn btn-outline-info col-md-2 my-2" onclick="window.location.reload()">Click here to refresh</button>
                                                          </div>`;
  }

}


// incase if the image of the product is not available, then this alt image will be used
function altImage(event) {
  event.srcElement.src = "https://uhcl-ir.tdl.org/bitstream/handle/10657.1/1573/not-available.jpg.jpg?sequence=1&isAllowed=y";
}


// Initializing for the main page design
function initialize() {

  // Preloader 
  let preloader = document.createElement("div");
  preloader.setAttribute("class", "preloader d-flex justify-content-center align-items-center");
  preloader.setAttribute("id", "preload");
  preloader.innerHTML = ` <img src="images/plane.png" class="plane" alt="" srcset="">
                          <img src="images/cloud.png" class="clouds cloud1" alt="cloud1"/>
                          <img src="images/cloud.png" class="clouds cloud2" alt="cloud2"/>
                          <img src="images/cloud.png" class="clouds cloud3" alt="cloud3"/>`;

  document.body.appendChild(preloader);



  // carousel container 
  let carousel_container = document.createElement("div");
  carousel_container.setAttribute("class", "container-fluid carousel-container mb-5")
  carousel_container.setAttribute("id", "carousel-container");

  carousel_container.innerHTML = ` <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="3500">
      <div class="carousel-img carousel-img1"></div>
      <div class="carousel-caption d-none d-md-block text-dark">
        <h5 class="fw-bolder display-5 shadow-lg carousel-text text-uppercase">"Creativity is your best makeup skill, don't be afraid toexperiment"</h5>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="3500">
      <div class="carousel-img carousel-img2"></div>
      <div class="carousel-caption d-none d-md-block text-dark">
      <h5 class="fw-bolder display-5 shadow-lg carousel-text text-uppercase">"Never ask a girl with winged eyeliner why she's late."</h5>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="3500">
      <div class="carousel-img carousel-img3"></div>
      <div class="carousel-caption d-none d-md-block text-dark">
      <h5 class="fw-bolder display-5 shadow-lg carousel-text text-uppercase">"love the confidence that makeup gives me."</h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`;

  document.body.appendChild(carousel_container);

  let heading = document.createElement("div");
  heading.setAttribute("class", "container d-flex justify-content-center heading border-bottom mb-3")
  heading.innerHTML = `<h1>Listing Products</h1>`;

  document.body.appendChild(heading);


  // cards container initialization
  let card_container = document.createElement("div");
  card_container.setAttribute("class", "container card-container")
  card_container.setAttribute("id", "card-container");

  document.body.appendChild(card_container);


  // footer
  let footer_container = document.createElement("div");
  footer_container.setAttribute("class", "container");
  footer_container.innerHTML = `<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                                  <div class="col-md-4 d-flex align-items-center">
                                    <span class="text-muted">© 2021 Company, Inc</span>
                                  </div>

                                  <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                                    <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
                                    <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
                                    <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
                                  </ul>
                                </footer>`;

  document.body.appendChild(footer_container);


  // calling the fetch products after the initialization is complete.. 
  getProducts();
}
initialize();


function finishPreload() {
  const preloader = document.getElementById("preload");
  preloader.classList.add('preload-finish');
}

