// product data store in arr of object bellow
var productData = [
    {
      img: "https://static.oxinis.com/healthmug/image/product/586-2-200.jpg",
      nam: "SBL Berberis Aquifolium Gel (25g)",
      detail:"Acne, Pimples, Skin Darkening, Dark Circles Below Eyes, Dry Skin",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "27",
      prd:"evion capsule",
      discount: "40",
      actualprice: "32",
      cat: "Essential Oils",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/120507-2-200.jpg",
      nam: "Salve Pharma Benxop Face Wash (4%w/w) (50g)",
      detail:null,
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "90",
      prd:"cream",
      discount: "40",
      actualprice: "110",
      cat: "Essential Oils",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/5400-1-200.jpg",
      nam: "Wheezal Jaborandi Hair Treatment Oil (110ml)",
      detail:
        "For Hair Loss, Dandruff, Premature Graying, Strengthens Hair Roots",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "29",
      discount: "40",
      actualprice: "34",
      cat: "Essential Oils",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/12384-1-200.jpg",
      nam: "Hapdco Marks Go Cream (25g)",
      detail:
        "Useful in seasonal cold and viral flu, reduces bloating and helps in digestive process",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "130",
      prd:"cream",
      discount: "40",
      actualprice: "153",
      cat: "Essential Oils",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/5596-1-200.jpg",
      nam: "Hapdco Aqui Plus Cream (25g)",
      detail:
        "For Acne, Pimples, Blackheads, Facial Scars and Unhealthy Skin",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "130",
      prd:"cream",
      discount: "40",
      actualprice: "153",
      cat: "Essential Oils",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/17854-2-200.jpg",
      nam: "Candid Cream (50g)",
      detail:
        "For Acne, Pimples, Blackheads, Facial Scars and Unhealthy Skin",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "130",
      discount: "40",
      prd:"cream",
      actualprice: "153",
      cat: "Essential Oils",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/17854-2-200.jpg",
      nam: "SBL Arnica Montana Herbal Shampoo With Conditioner (200ml)",
      detail:
        "Nourishes Hair Roots, Reduce Hair Fall and Protects Hair Damage",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "130",
      discount: "40",
      actualprice: "153",
      prd:"cream",
      cat: "Essential Oils",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/109537-2-200.jpg",
      nam: "USV Erytop Gel (1%w/w) (20g)",
      detail:
        null,
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "98",
      cat:"Hair Care",
      discount: "50",
      actualprice: "148",
      prd:"gel",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/2855-2-200.jpg",
      nam: "Willmar Schwabe India B&T Arnica Shampoo (250ml)",
      detail:
        "Improve Hair Growth, Controls Hair Falling and Premature Graying",
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "169",
      discount: "30",
      actualprice: "200",
      cat: "Skin Care",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/5318-2-200.jpg",
      nam: "Ganpati Dawa Khana Cream (10g)",
      detail:
        "Helps in relieving pain and provides comfort in dry eyes by producing artificial tears",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "90",
      cat: "Skin Care",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/484-1-200.jpg",
      nam: "SBL Glowing Beauty Fairness Cream (50g)",
      detail:
        null,
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "90",
      discount: "30",
      cat:"Hair Care",
      actualprice: "110",
      cat: "Skin Care",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/95137-1-200.jpg",
      nam: "Silverex Ionic Gel (10g)",
      detail:
        null,
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "90",
      cat: "Skin Care",
      prd:"gel",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/87330-1-200.jpg",
      nam: "Glenmark Pharma Deriva CMS Gel (15g)",
      detail:
        "Codliver oil softgel capsules for overall health and wellbeing",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "270",
      discount: "30",
      actualprice: "280",
      prd:"capsule",
      cat: "Skin Care",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/2852-1-200.jpg",
      nam: "Willmar Schwabe India B&T Glow and Fairness Soap (75g)",
      detail:
        null,
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "120",
      actualprice:"200",
      cat: "Skin Care",
      prd:"capsule",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
        img: "https://static.oxinis.com/healthmug/image/product/5627-1-200.jpg",
        nam: "Bios Lab Hair Care External Drops (20ml)",
        detail:"Bios Lab Hair Care External Drops is an effective haircare product which is controls Hair Fall, Itching & Irritation of Scalp, Dandruff & Premature Graying",
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
        img: "https://static.oxinis.com/healthmug/image/product/120166-3-200.jpg",
        nam: "Rockmed Pharma Recharm Face Wash (60ml)",
        detail:"Sugar Free nicotine chewing gums to help you quit smoking, comes in a tin box",
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "300",
        discount: "40",
        actualprice: "320",
        cat: "Hair Care",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star-half-alt",
        s4: "far fa-star",
        s5: "far fa-star",
      },
    {
        img: "https://static.oxinis.com/healthmug/image/product/11538-2-200.jpg",
        nam: "Wheezal Hekla Lava Dental Gel (100g)",
        detail:null,
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "300",
        discount: "40",
        actualprice: "320",
        cat: "Hair Care",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star-half-alt",
        s4: "far fa-star",
        s5: "far fa-star",
      },
    {
        img: "https://static.oxinis.com/healthmug/image/product/72510-1-200.jpg",
        nam: "Wheezal Hekla Lava Charcoal Toothpaste (100g)",
        detail:null,
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "300",
        discount: "40",
        actualprice: "320",
        cat: "Hair Care",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star-half-alt",
        s4: "far fa-star",
        s5: "far fa-star",
      },
    {
        img: "https://static.oxinis.com/healthmug/image/product/119906-2-200.jpg",
        nam: "Piramal Tetmosol Medicated Soap (100g)",
        detail:null,
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "200",
        discount: "40",
        actualprice: "289",
        prd:"cream",
        cat: "Mens Grooming",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star",
        s4: "fas fa-star",
        s5: "fas fa-star-half-alt",
        
      },
    {
        img: "https://static.oxinis.com/healthmug/image/product/2978-1-200.jpg",
        nam: "Bakson Sunny Hair Color (Black) (20g)",
        detail:null,
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "200",
        discount: "40",
        actualprice: "289",
        prd:"cream",
        cat: "Mens Grooming",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star",
        s4: "fas fa-star-half-alt",
        s5: "far fa-star",
        
      },
    {
        img: "https://static.oxinis.com/healthmug/image/product/86595-1-200.jpg",
        nam: "Dr. Reddy's Mintop Forte Solution (5%w/v) (60ml)",
        detail:"Helps in increasing hair growth after hereditary hair loss, increase blood flow",
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "189",
        discount: "40",
        actualprice: "250",
        cat: "Mens Grooming",
        prd:"cream",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star",
        s4: "fas fa-star",
        s5: "fas fa-star-half-alt",
        
      },
    {
      img: "https://static.oxinis.com/healthmug/image/product/109537-2-200.jpg",
      nam: "USV Erytop Gel (1%w/w) (20g)",
      detail:
        null,
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "98",
      cat:"Hair Care",
      discount: "50",
      actualprice: "148",
      prd:"gel",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/2855-2-200.jpg",
      nam: "Willmar Schwabe India B&T Arnica Shampoo (250ml)",
      detail:
        "Improve Hair Growth, Controls Hair Falling and Premature Graying",
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "169",
      discount: "30",
      actualprice: "200",
      cat: "Skin Care",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/5318-2-200.jpg",
      nam: "Ganpati Dawa Khana Cream (10g)",
      detail:
        "Helps in relieving pain and provides comfort in dry eyes by producing artificial tears",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "90",
      cat: "Skin Care",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/484-1-200.jpg",
      nam: "SBL Glowing Beauty Fairness Cream (50g)",
      detail:
        null,
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "90",
      discount: "30",
      cat:"Hair Care",
      actualprice: "110",
      cat: "Skin Care",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/95137-1-200.jpg",
      nam: "Silverex Ionic Gel (10g)",
      detail:
        null,
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "90",
      cat: "Skin Care",
      prd:"gel",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/87330-1-200.jpg",
      nam: "Glenmark Pharma Deriva CMS Gel (15g)",
      detail:
        "Codliver oil softgel capsules for overall health and wellbeing",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "270",
      discount: "30",
      actualprice: "280",
      prd:"capsule",
      cat: "Skin Care",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/2852-1-200.jpg",
      nam: "Willmar Schwabe India B&T Glow and Fairness Soap (75g)",
      detail:
        null,
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "120",
      actualprice:"200",
      cat: "Skin Care",
      prd:"capsule",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
        img: "https://static.oxinis.com/healthmug/image/product/5627-1-200.jpg",
        nam: "Bios Lab Hair Care External Drops (20ml)",
        detail:"Bios Lab Hair Care External Drops is an effective haircare product which is controls Hair Fall, Itching & Irritation of Scalp, Dandruff & Premature Graying",
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
        img: "https://static.oxinis.com/healthmug/image/product/120166-3-200.jpg",
        nam: "Rockmed Pharma Recharm Face Wash (60ml)",
        detail:"Sugar Free nicotine chewing gums to help you quit smoking, comes in a tin box",
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "300",
        discount: "40",
        actualprice: "320",
        cat: "Hair Care",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star-half-alt",
        s4: "far fa-star",
        s5: "far fa-star",
      },
    {
        img: "https://static.oxinis.com/healthmug/image/product/11538-2-200.jpg",
        nam: "Wheezal Hekla Lava Dental Gel (100g)",
        detail:null,
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "300",
        discount: "40",
        actualprice: "320",
        cat: "Hair Care",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star-half-alt",
        s4: "far fa-star",
        s5: "far fa-star",
      },
    {
        img: "https://static.oxinis.com/healthmug/image/product/72510-1-200.jpg",
        nam: "Wheezal Hekla Lava Charcoal Toothpaste (100g)",
        detail:null,
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "300",
        discount: "40",
        actualprice: "320",
        cat: "Hair Care",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star-half-alt",
        s4: "far fa-star",
        s5: "far fa-star",
      },
    {
        img: "https://static.oxinis.com/healthmug/image/product/119906-2-200.jpg",
        nam: "Piramal Tetmosol Medicated Soap (100g)",
        detail:null,
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "200",
        discount: "40",
        actualprice: "289",
        prd:"cream",
        cat: "Mens Grooming",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star",
        s4: "fas fa-star",
        s5: "fas fa-star-half-alt",
        
      },
    {
        img: "https://static.oxinis.com/healthmug/image/product/2978-1-200.jpg",
        nam: "Bakson Sunny Hair Color (Black) (20g)",
        detail:null,
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "200",
        discount: "40",
        actualprice: "289",
        prd:"cream",
        cat: "Mens Grooming",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star",
        s4: "fas fa-star-half-alt",
        s5: "far fa-star",
        
      },
    {
        img: "https://static.oxinis.com/healthmug/image/product/86595-1-200.jpg",
        nam: "Dr. Reddy's Mintop Forte Solution (5%w/v) (60ml)",
        detail:"Helps in increasing hair growth after hereditary hair loss, increase blood flow",
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "189",
        discount: "40",
        actualprice: "250",
        cat: "Mens Grooming",
        prd:"cream",
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
      return ele.cat == "Essential Oils";
    });
    console.log(filtitem);
    display(filtitem);
  }
  
  document.querySelector(".bayurveda2").addEventListener("click", filterby2);
  function filterby2() {
    var filtitem = productData.filter(function (ele) {
      return ele.cat == "Skin Care";
    });
    console.log(filtitem);
    display(filtitem);
  }
  
  document.querySelector(".bayurveda3").addEventListener("click", filterby3);
  function filterby3() {
    var filtitem = productData.filter(function (ele) {
      return ele.cat == "Hair Care";
    });
    console.log(filtitem);
    display(filtitem);
  }
  
  document.querySelector(".bayurveda4").addEventListener("click", filterby4);
  function filterby4() {
    var filtitem = productData.filter(function (ele) {
      return ele.cat == "Mens Grooming";
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


  
  document.querySelector("#return").addEventListener("click", function () {
    window.location.href = "landing_page.html";
  });