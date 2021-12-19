// product data store in arr of object bellow
var productData = [
  {
    img: "https://static.oxinis.com/healthmug/image/product/117573-4-200.jpg",
    nam: "Evion Capsule (400mg) (10caps)",
    detail:
      "Assists in managing the levels of Vitamin E in the body, contains anti-oxidants",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "27",
    prd: "evion capsule",
    discount: "40",
    actualprice: "32",
    cat: "Allopathic Medicines",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/132517-2-400.jpg",
    nam: "Skinlite cream (15g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "90",
    prd: "cream",
    discount: "40",
    actualprice: "110",
    cat: "Allopathic Medicines",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/117616-4-200.jpg",
    nam: "Neurobion Forte Tablet (30tab)",
    detail:
      "Helps to counter Vitamin B deficiency, and assists in promoting a healthy nervous system",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "29",
    discount: "40",
    actualprice: "34",
    cat: "Allopathic Medicines",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/87220-1-200.jpg",
    nam: "Candid Cream (50g)",
    detail:
      "Useful in seasonal cold and viral flu, reduces bloating and helps in digestive process",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "130",
    prd: "cream",
    discount: "40",
    actualprice: "153",
    cat: "Allopathic Medicines",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/87220-1-200.jpg",
    nam: "Candid Cream (50g)",
    detail:
      "Useful in seasonal cold and viral flu, reduces bloating and helps in digestive process",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "130",
    prd: "cream",
    discount: "40",
    actualprice: "153",
    cat: "Allopathic Medicines",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/87220-1-200.jpg",
    nam: "Candid Cream (50g)",
    detail:
      "Useful in seasonal cold and viral flu, reduces bloating and helps in digestive process",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "130",
    discount: "40",
    prd: "cream",
    actualprice: "153",
    cat: "Allopathic Medicines",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/87220-1-200.jpg",
    nam: "Candid Cream (50g)",
    detail:
      "Useful in seasonal cold and viral flu, reduces bloating and helps in digestive process",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "130",
    discount: "40",
    actualprice: "153",
    prd: "cream",
    cat: "Allopathic Medicines",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/115757-1-200.jpg",
    nam: "Clear Gel (20g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "98",
    cat: "Syrups & Suspensions",
    discount: "50",
    actualprice: "148",
    prd: "gel",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/127856-1-200.jpg",
    nam: "Salicylic Acid I.P. (20g)",
    detail: "Salicylic Acid for better skin and Keratolytictherapy",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "169",
    discount: "30",
    actualprice: "200",
    cat: "Tablets & Capsules",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/112434-3-200.jpg",
    nam: "Refresh Tears Eye Drop (10ml)",
    detail:
      "Helps in relieving pain and provides comfort in dry eyes by producing artificial tears",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "90",
    cat: "Tablets & Capsules",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/132153-1-200.jpg",
    nam: "Isotine Eye Drops (10ml)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "90",
    discount: "30",
    cat: "Syrups & Suspensions",
    actualprice: "110",
    cat: "Tablets & Capsules",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/95137-1-200.jpg",
    nam: "Silverex Ionic Gel (10g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "90",
    cat: "Tablets & Capsules",
    prd: "gel",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/117646-1-200.jpg",
    nam: "Seven Seas Original Cod Liver Oil Capsule (100caps)",
    detail: "Codliver oil softgel capsules for overall health and wellbeing",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "270",
    discount: "30",
    actualprice: "280",
    prd: "capsule",
    cat: "Tablets & Capsules",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/117617-2-200.jpg",
    nam: "Neurobion Plus Tablet (10tab)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "120",
    actualprice: "200",
    cat: "Tablets & Capsules",
    prd: "capsule",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/117573-4-200.jpg",
    nam: "Evion Capsule (400mg) (10caps)",
    detail:
      "Assists in managing the levels of Vitamin E in the body, contains anti-oxidants",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "27",
    discount: "40",
    actualprice: "32",
    cat: "medicine",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/137710-1-200.jpg",
    nam: "Nicotex Chewing Gums Tin Box Sugar Free (4mg) Mint Plus (25pcs)",
    detail:
      "Sugar Free nicotine chewing gums to help you quit smoking, comes in a tin box",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "300",
    discount: "40",
    actualprice: "320",
    cat: "Syrups & Suspensions",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/91733-1-200.jpg",
    nam: "Ketostar Anti Dandruff Lotion (50ml)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "300",
    discount: "40",
    actualprice: "320",
    cat: "Syrups & Suspensions",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/137438-2-200.jpg",
    nam: "Nicotex Chewing Gums Sugar Free (4mg) Mint Plus (9pcs)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "300",
    discount: "40",
    actualprice: "320",
    cat: "Syrups & Suspensions",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/84333-1-200.jpg",
    nam: "Clocip Cream (15g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "200",
    discount: "40",
    actualprice: "289",
    prd: "cream",
    cat: "Creams & Ointments",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star",
    s5: "fas fa-star-half-alt",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/84333-1-200.jpg",
    nam: "Clocip Cream (15g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "200",
    discount: "40",
    actualprice: "289",
    prd: "cream",
    cat: "Creams & Ointments",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star-half-alt",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/92785-1-200.jpg",
    nam: "Soframycin Skin Cream (30g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "189",
    discount: "40",
    actualprice: "250",
    cat: "Creams & Ointments",
    prd: "cream",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star",
    s5: "fas fa-star-half-alt",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/92785-1-200.jpg",
    nam: "Soframycin Skin Cream (30g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "189",
    discount: "40",
    actualprice: "250",
    cat: "Creams & Ointments",
    prd: "cream",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star",
    s5: "fas fa-star-half-alt",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/92785-1-200.jpg",
    nam: "Soframycin Skin Cream (30g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "189",
    discount: "40",
    actualprice: "250",
    cat: "Creams & Ointments",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star",
    s5: "fas fa-star-half-alt",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/137284-1-200.jpg",
    nam: "Volini Gel (4g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "70",
    discount: "40",
    actualprice: "100",
    cat: "Creams & Ointments",
    prd: "gel",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star",
    s5: "fas fa-star-half-alt",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/121505-1-200.jpg",
    nam: "Cliface Gel (20g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "100",
    discount: "40",
    actualprice: "150",
    cat: "Creams & Ointments",
    prd: "gel",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star",
    s5: "fas fa-star-half-alt",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/92785-1-200.jpg",
    nam: "Soframycin Skin Cream (30g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "189",
    discount: "40",
    actualprice: "250",
    cat: "Creams & Ointments",
    prd: "cream",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star",
    s5: "fas fa-star-half-alt",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/137284-1-200.jpg",
    nam: "Volini Gel (4g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "70",
    discount: "40",
    actualprice: "100",
    cat: "Creams & Ointments",
    prd: "gel",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star",
    s5: "fas fa-star-half-alt",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/121505-1-200.jpg",
    nam: "Cliface Gel (20g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "100",
    discount: "40",
    actualprice: "150",
    prd: "gel",
    cat: "Creams & Ointments",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star",
    s5: "fas fa-star-half-alt",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/92570-1-200.jpg",
    nam: "Combiflam Icy Hot Fast Pain Relief Gel (30g)",
    detail: null,
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "477",
    discount: "40",
    actualprice: "522",
    prd: "gel",
    cat: "Creams & Ointments",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star",
    s5: "fas fa-star-half-alt",
  },
];

//                 map productData and append in to div bellow
function display(productData) {
  document.querySelector(".items").textContent = "";
  productData.map(function (ele, index) {
    var mainD = document.createElement("div");
    mainD.setAttribute("class", "itm"); //main div for item img and details

    var d1 = document.createElement("div"); //img
    var img = document.createElement("img");
    img.setAttribute("src", ele.img);
    d1.append(img);

    var d2 = document.createElement("div");
    var name = document.createElement("p");
    name.setAttribute("id", "iname"); //name of product
    name.textContent = ele.nam;
    var detail = document.createElement("p");
    detail.textContent = ele.detail;
    d2.prepend(name, detail);

    var d3 = document.createElement("div"); // img for review stras img (still ppending)
    var stardiv1 = document.createElement("i");
    var stardiv2 = document.createElement("i");
    var stardiv3 = document.createElement("i");
    var stardiv4 = document.createElement("i");
    var stardiv5 = document.createElement("i");
    stardiv1.setAttribute("class", ele.s1);
    stardiv2.setAttribute("class", ele.s2);
    stardiv3.setAttribute("class", ele.s3);
    stardiv4.setAttribute("class", ele.s4);
    stardiv5.setAttribute("class", ele.s5);
    d3.append(stardiv1, stardiv2, stardiv3, stardiv4, stardiv5);

    var d4 = document.createElement("div");
    var logo = document.createElement("img");
    logo.setAttribute("src", ele.logo);
    logo.setAttribute("src", ele.logo);
    d4.append(logo);

    var d5 = document.createElement("div");
    var price = document.createElement("p");
    price.setAttribute("id", "price");
    price.textContent = ele.price;
    var rupeeLogo = document.createElement("span");
    rupeeLogo.textContent = "₹";
    rupeeLogo.style.fontSize = "20px";
    var rupeeLogo1 = document.createElement("span");
    rupeeLogo1.textContent = "₹";
    rupeeLogo1.style.fontSize = "20px";
    rupeeLogo1.style.color = "#b7b7b7";
    var actualPrice = document.createElement("span");
    actualPrice.textContent = ele.actualprice;
    actualPrice.style.fontSize = "20px";
    actualPrice.style.color = "#b7b7b7";
    actualPrice.style.marginRight = "15px";
    actualPrice.style.textDecoration = "line-through";

    d5.append(rupeeLogo1, actualPrice, rupeeLogo, price);

    var d6 = document.createElement("div"); // add to cart logo
    var cartLogo = document.createElement("i");
    cartLogo.setAttribute("class", "fas fa-cart-plus");
    cartLogo.style.fontSize = "20px";
    d6.append(cartLogo);

    mainD.append(d1, d2, d3, d4, d5, d6);
    document.querySelector(".items").append(mainD);
  });
  // var numberofitem = document.createElement("div");
  // numberofitem.textContent = productData.length;
  // console.log(numberofitem);
  // document.querySelector(".products>div:nth-child(4)>div:nth-child(1)").append(numberofitem)
}
// document.querySelector(".products>div:nth-child(4)>div:nth-child(1)").textContent= "";
display(productData);
//sorting bellow
// sort by name
document.querySelector(".sbyName").addEventListener("click", sortbyname);

function sortbyname() {
  productData.sort(function (a, b) {
    if (a.nam > b.nam) return -1;
    if (a.nam < b.nam) return -1;
    return 0;
  });
  display(productData);
  // console.log(productData)
}

// sort by price   --1
document.querySelector(".LtoH").addEventListener("click", sortbyLtoH);

function sortbyLtoH() {
  productData.sort(function (a, b) {
    return Number(a.price) - Number(b.price);
  });
  display(productData);

  // console.log(productData)
}

// sort by price   --2

document.querySelector(".HtoL").addEventListener("click", sortbyHtoL);

function sortbyHtoL() {
  productData.sort(function (a, b) {
    return Number(b.price) - Number(a.price);
  });
  display(productData);

  // console.log(productData)
}

document.querySelector(".bayurveda1").addEventListener("click", filterby1);
function filterby1() {
  var filtitem = productData.filter(function (ele) {
    return ele.cat == "Allopathic Medicines";
  });
  console.log(filtitem);
  display(filtitem);
}

document.querySelector(".bayurveda2").addEventListener("click", filterby2);
function filterby2() {
  var filtitem = productData.filter(function (ele) {
    return ele.cat == "Tablets & Capsules";
  });
  console.log(filtitem);
  display(filtitem);
}

document.querySelector(".bayurveda3").addEventListener("click", filterby3);
function filterby3() {
  var filtitem = productData.filter(function (ele) {
    return ele.cat == "Syrups & Suspensions";
  });
  console.log(filtitem);
  display(filtitem);
}

document.querySelector(".bayurveda4").addEventListener("click", filterby4);
function filterby4() {
  var filtitem = productData.filter(function (ele) {
    return ele.cat == "Creams & Ointments";
  });
  //   console.log(filtitem);
  display(filtitem);
}

//by price filter
//bellow 200
document.querySelector(".b200").addEventListener("click", filtby200);
function filtby200() {
  var filtbyprice = productData.filter(function (ele) {
    return Number(ele.price) <= 100;
  });
  console.log(filtbyprice);
  display(filtbyprice);
}

//bellow 500 and abow 200
document.querySelector(".b500").addEventListener("click", filtby500);
function filtby500() {
  var filtbyprice = productData.filter(function (ele) {
    return Number(ele.price) <= 500 && Number(ele.price) >= 201;
  });
  console.log(filtbyprice);
  display(filtbyprice);
}

// search function bellow

document.querySelector(".btn").addEventListener("click", searching);
//   console.log(valu);
function searching(valu) {
  var valu = document.querySelector("#search_bar").value;
  //   console.log(valu);
  var searchitm = productData.filter(function (ele) {
    return ele.prd == valu;
  });
  //   console.log(searchitm);
  display(searchitm);
}
document.querySelector(".items").addEventListener("click", function () {
  window.location.href = "productPage.html";
});

document.querySelector("#return").addEventListener("click", function () {
  window.location.href = "landing_page.html";
});
