// product data store in arr of object bellow
var productData = [
    {
      img: "https://static.oxinis.com/healthmug/image/product/137209-1-200.jpg",
      nam: "Bigmuscles Nutrition Premium Gold Whey Protein Isolate & Concentrate Belgian Chocolate (1kg)",
      detail:"100% protein from whey isolate and whey concentrate, promotes muscle growth ",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "500",
      prd:"evion capsule",
      discount: "40",
      actualprice: "600",
      cat: "Tablets & Capsules",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/135348-1-200.jpg",
      nam: "FDC Ltd Electral Powder Unflavoured (21.8g)",
      detail:null,
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "200",
      prd:"cream",
      discount: "40",
      actualprice: "300",
      cat: "Tablets & Capsules",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/152938-1-200.jpg",
      nam: "Baidyanath Ayurved Ashwagandha Tablets (60tab)",
      detail:
        " General Wellness Tablets act as an immunity booster and helps to handle stress and anxiety",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "300",
      discount: "40",
      actualprice: "400",
      cat: "Tablets & Capsules",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/65818-1-200.jpg",
      nam: "Kaahan Ayurvedas Sehat King Powder (160g)",
      detail:
        "100% Natural Karela Jamun juice for overall wellbeing",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "200",
      prd:"cream",
      discount: "40",
      actualprice: "300",
      cat: "Tablets & Capsules",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/65520-2-200.jpg",
      nam: "Jiva Ayurveda Amla Chatpata Candy (450g)",
      detail:
        "100% Natural Karela Jamun juice for overall wellbeing",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "300",
      prd:"cream",
      discount: "40",
      actualprice: "445",
      cat: "Syrups & Suspensions",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/137209-1-200.jpg",
      nam: "Bigmuscles Nutrition Premium Gold Whey Protein Isolate & Concentrate Belgian Chocolate (1kg)",
      detail:"100% protein from whey isolate and whey concentrate, promotes muscle growth ",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "500",
      prd:"evion capsule",
      discount: "40",
      actualprice: "600",
      cat: "Syrups & Suspensions",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/135348-1-200.jpg",
      nam: "FDC Ltd Electral Powder Unflavoured (21.8g)",
      detail:null,
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "200",
      prd:"cream",
      discount: "40",
      actualprice: "300",
      cat: "Syrups & Suspensions",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/152938-1-200.jpg",
      nam: "Baidyanath Ayurved Ashwagandha Tablets (60tab)",
      detail:
        " General Wellness Tablets act as an immunity booster and helps to handle stress and anxiety",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "300",
      discount: "40",
      actualprice: "400",
      cat: "Syrups & Suspensions",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/65818-1-200.jpg",
      nam: "Kaahan Ayurvedas Sehat King Powder (160g)",
      detail:
        "100% Natural Karela Jamun juice for overall wellbeing",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "200",
      prd:"cream",
      discount: "40",
      actualprice: "300",
      cat: "Allopathic Medicines",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/65520-2-200.jpg",
      nam: "Jiva Ayurveda Amla Chatpata Candy (450g)",
      detail:
        "100% Natural Karela Jamun juice for overall wellbeing",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "300",
      prd:"cream",
      discount: "40",
      actualprice: "445",
      cat: "Allopathic Medicines",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/65818-1-200.jpg",
      nam: "Kaahan Ayurvedas Sehat King Powder (160g)",
      detail:
        "100% Natural Karela Jamun juice for overall wellbeing",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "200",
      prd:"cream",
      discount: "40",
      actualprice: "300",
      cat: "Allopathic Medicines",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/65520-2-200.jpg",
      nam: "Jiva Ayurveda Amla Chatpata Candy (450g)",
      detail:
        "100% Natural Karela Jamun juice for overall wellbeing",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "300",
      prd:"cream",
      discount: "40",
      actualprice: "445",
      cat: "Allopathic Medicines",
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
  
  // search function bellow

  document.querySelector(".btn").addEventListener("click", searching);
  //   console.log(valu);
  function searching(valu){
      var valu = document.querySelector("#search_bar").value;
    //   console.log(valu);
      var searchitm = productData.filter(function(ele){
          return ele.prd == valu;
      })
    //   console.log(searchitm);
      display(searchitm)
  }