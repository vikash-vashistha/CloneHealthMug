// product data store in arr of object bellow
var productData = [
  {
    img: "https://static.oxinis.com/healthmug/image/product/5317-2-200.jpg",
    nam: "Baidyanath Bhringrajasava (450ml)",
    detail:
      "Useful in seasonal cold and viral flu, reduces bloating and helps in digestive process",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "90",
    discount: "40",
    actualprice: "110",
    cat: "medicine",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/132288-1-200.jpg",
    nam: "Baidyanath Bhringrajasava (450ml)",
    detail:
      "Useful in seasonal cold and viral flu, reduces bloating and helps in digestive process",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "90",
    discount: "40",
    actualprice: "110",
    cat: "medicine",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/134473-1-200.jpg",
    nam: "Baidyanath Bhringrajasava (450ml)",
    detail:
      "Useful in seasonal cold and viral flu, reduces bloating and helps in digestive process",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "90",
    discount: "40",
    actualprice: "110",
    cat: "medicine",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/130156-2-200.jpg",
    nam: "Baidyanath Bhringrajasava (450ml)",
    detail:
      "Useful in seasonal cold and viral flu, reduces bloating and helps in digestive process",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "90",
    discount: "40",
    actualprice: "110",
    cat: "medicine",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/132288-1-200.jpg",
    nam: "Baidyanath Bhringrajasava (450ml)",
    detail:
      "Useful in seasonal cold and viral flu, reduces bloating and helps in digestive process",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "90",
    discount: "50",
    actualprice: "110",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/140397-1-200.jpg",
    nam: "Baidyanath Bhringrajasava (450ml)",
    detail:
      "Useful in seasonal cold and viral flu, reduces bloating and helps in digestive process",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "90",
    discount: "30",
    actualprice: "110",
    cat: "Bhasma & Pishti",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/5876-2-200.jpg",
    nam: "Baidyanath Bhringrajasava (450ml)",
    detail:
      "Useful in seasonal cold and viral flu, reduces bloating and helps in digestive process",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "90",
    cat: "Ras & Sindur",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/5876-2-200.jpg",
    nam: "Baidyanath Bhringrajasava (450ml)",
    detail:
      "Useful in seasonal cold and viral flu, reduces bloating and helps in digestive process",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "90",
    cat: "Ras & Sindur",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/103791-1-200.jpg",
    nam: "Baidyanath (Nagpur) Mahamanjisthadi Kadha (450ml)",
    detail:
      "Useful in skin diseases,  acne and pimples, inflammation, redness and skin rashes.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
    price: "90",
    discount: "40",
    actualprice: "110",
    cat: "medicine",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/5718-2-200.jpg",
    nam: "Dabur Triphala Tablets (60tab)",
    detail:
      "Ayurvedic powdered formulation for a healthy gut, overall well being etc",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
    price: "50",
    discount: "40",
    actualprice: "66",
    cat: "medicine",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/128831-1-200.jpg",
    nam: "Dabur Arjun Chhal Churna (100g)",
    detail:
      "It helps in keeping the heart muscles healthy and strong and may give relief from excessive thirst",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
    price: "53",
    discount: "40",
    actualprice: "200",
    cat: "medicine",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star-half-alt",
    s5: "far fa-star",
    
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/11740-1-200.jpg",
    nam: "Unjha Arogyavardhini Rasa (40tab)",
    detail:
      "Fatty Liver, Jaundice, Hepatitis, Cirrhosis, Constipation, Indigestion, Skin Disorders",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
    price: "53",
    discount: "40",
    actualprice: "200",
    cat: "medicine",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star-half-alt",
    s5: "far fa-star",
    
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/5952-2-200.jpg",
    nam: "Baidyanath Brahmi Vati (Buddhi Vardhak) (80tab)",
    detail:
      "Useful in seasonal cold and viral flu, reduces bloating and helps in digestive process",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "90",
    cat: "Ras & Sindur",
    s1: "fas fa-star",
    s2: "fas fa-star-half-alt",
    s3: "far fa-star",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/149499-1-200.jpg",
    nam: "B Tex White Ointment (14g, Pack of 3)",
    detail:
      "Useful in various skin conditions such as eczema, itching, ringworm, pimples and similar bacterial skin infections.",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "90",
    cat: "Ras & Sindur",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/60559-1-200.jpg",
    nam: "Dabur Erand Tail (Castor Oil) (100ml)",
    detail:
      "Erand taila(oil) or castor oil is very good for skin, hair and treating chronic constipation",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "90",
    cat: "Ras & Sindur",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/3123-1-200.jpg",
    nam: "Himalaya Cystone Tablet (60tab)",
    detail:
      "Expels Renal Calculi, Control High Uric Acid, Urinary Track Infection (UTI)",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "90",
    cat: "Ras & Sindur",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star-half-alt",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/5718-2-200.jpg",
    nam: "Dabur Triphala Tablets (60tab)",
    detail:
      "Ayurvedic powdered formulation for a healthy gut, overall well being etc",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
    price: "50",
    discount: "40",
    actualprice: "66",
    cat: "medicine",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/3139-1-200.jpg",
    nam: "Dabur Arjun Chhal Churna (100g)",
    detail:
      "It helps in keeping the heart muscles healthy and strong and may give relief from excessive thirst",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
    price: "49",
    discount: "40",
    actualprice: "233",
    cat: "medicine",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star-half-alt",
    s5: "far fa-star",
    
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/11740-1-200.jpg",
    nam: "Unjha Arogyavardhini Rasa (40tab)",
    detail:
      "Fatty Liver, Jaundice, Hepatitis, Cirrhosis, Constipation, Indigestion, Skin Disorders",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
    price: "36",
    discount: "40",
    actualprice: "100",
    cat: "medicine",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star-half-alt",
    s5: "far fa-star",
    
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/128849-1-200.jpg",
    nam: "Tara Pharmaceuticals Double Power Capsules For Men (10caps)",
    detail:
      "Useful in seasonal cold and viral flu, reduces bloating and helps in digestive process",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "90",
    actualprice: "100",
    cat: "Ras & Sindur",
    s1: "fas fa-star",
    s2: "fas fa-star-half-alt",
    s3: "far fa-star",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/64769-1-200.jpg",
    nam: "B Tex White Ointment (14g, Pack of 3)",
    detail:
      "Useful in various skin conditions such as eczema, itching, ringworm, pimples and similar bacterial skin infections.",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "69",
    actualprice: "100",
    cat: "Ras & Sindur",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },

  {
    img: "https://static.oxinis.com/healthmug/image/product/5776-2-200.jpg",
    nam: "Organic India LKC (Liver-Kidney Care) Capsules (60caps)",
    detail:
      "Fatty Liver, Jaundice, Renal Failure, Urinary Tract Infection, Renal Calculi",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "455",
    actualprice: "500",
    cat: "Ras & Sindur",
    s1: "fas fa-star",
    s2: "fas fa-star-half-alt",
    s3: "far fa-star",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/5776-2-200.jpg",
    nam: "Baidyanath Roupya Bhasma (2.5g)",
    detail:
      "Used in  high blood sugar levels , skin disorders ",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "222",
    actualprice: "380",
    cat: "Ras & Sindur",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/5979-2-200.jpg",
    nam: "Baidyanath Raj Gandhak Vati (60tab)",
    detail:
      "Erand taila(oil) or castor oil is very good for skin, hair and treating chronic constipation",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "63",
    actualprice: "100",
    cat: "Ras & Sindur",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/60934-1-200.jpg",
    nam: "Himalaya Cystone Tablet (60tab)",
    detail:
      "Gastritis, Indigestion, Hyperacidity, Pain in Stomach, Diarrhea, Colitis",
    logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
    price: "99",
    actualprice: "100",
    cat: "Ras & Sindur",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star",
    s4: "fas fa-star-half-alt",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/60934-1-200.jpg",
    nam: "Dabur Triphala Tablets (60tab)",
    detail:
      "Ayurvedic powdered formulation for a healthy gut, overall well being etc",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
    price: "50",
    discount: "40",
    actualprice: "66",
    cat: "medicine",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/152508-1-200.jpg",
    nam: "Dabur Triphala Tablets (60tab)",
    detail:
      "Ayurvedic powdered formulation for a healthy gut, overall well being etc",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
    price: "50",
    discount: "40",
    actualprice: "66",
    cat: "medicine",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
  },
  {
    img: "https://static.oxinis.com/healthmug/image/product/60934-1-200.jpg",
    nam: "Dabur Triphala Tablets (60tab)",
    detail:
      "Ayurvedic powdered formulation for a healthy gut, overall well being etc",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
    price: "50",
    discount: "40",
    actualprice: "66",
    cat: "medicine",
    s1: "fas fa-star",
    s2: "fas fa-star",
    s3: "fas fa-star-half-alt",
    s4: "far fa-star",
    s5: "far fa-star",
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
    return ele.cat == "medicine";
  });
  console.log(filtitem);
  display(filtitem);
}

document.querySelector(".bayurveda2").addEventListener("click", filterby2);
function filterby2() {
  var filtitem = productData.filter(function (ele) {
    return ele.cat == "Ras & Sindur";
  });
  console.log(filtitem);
  display(filtitem);
}

document.querySelector(".bayurveda3").addEventListener("click", filterby3);
function filterby3() {
  var filtitem = productData.filter(function (ele) {
    return ele.cat == "Bhasma & Pishti";
  });
  console.log(filtitem);
  display(filtitem);
}

document.querySelector(".bayurveda4").addEventListener("click", filterby4);
function filterby4() {
  var filtitem = productData.filter(function (ele) {
    return ele.cat == "Vati Gutika & Guggulu";
  });
//   console.log(filtitem);
  display(filtitem);
}


//by price filter
//bellow 200
document.querySelector(".b200").addEventListener("click", filtby200);
function filtby200(){
    var filtbyprice = productData.filter(function(ele){
        return Number(ele.price)<= 100;
    }); 
      console.log(filtbyprice)
      display(filtbyprice)
}

//bellow 500 and abow 200
document.querySelector(".b500").addEventListener("click", filtby500);
function filtby500(){
    var filtbyprice = productData.filter(function(ele){
        return Number(ele.price)<= 500 &&  Number(ele.price)>= 201;
    }); 
      console.log(filtbyprice)
      display(filtbyprice)
}

