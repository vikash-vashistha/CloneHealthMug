// product data store in arr of object bellow
var productData = [
    {
      img: "https://static.oxinis.com/healthmug/image/product/6402-1-200.jpg",
      nam: "Willmar Schwabe India Syzygium Jambolanum 1X (Q) (30ml)",
      detail:"For Increased Amount of Sugar in the Blood, Urine and Related Symptoms",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "98",
      discount: "40",
      actualprice: "130",
      cat: "Homeopathy",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s4: "fas fa-star",
      s5: "fas fa-star",
     
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/803-1-400.jpg",
      nam: "SBL Syzygium Jambolanum 1X (Q) (30ml)",
      detail:"For Increased Amount of Sugar in the Blood, Urine and Related Symptoms",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "273",
      discount: "40",
      actualprice: "323",
      cat: "Homeopathy",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s4: "fas fa-star-half-alt",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/6351-1-200.jpg",
      nam: "Willmar Schwabe India Gymnema Sylvestre 1X (Q) (30ml)",
      detail:"Reduces Blood sugar levels and cholesterol, Helps lose weight, Worms",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "73",
      discount: "40",
      actualprice: "93",
      cat: "Homeopathy",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "far fa-star",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/66586-1-200.jpg",
      nam: "B Jain Syzygium Jambolanum 1X (Q) (100ml)",
      detail:"For Increased Amount of Sugar in the Blood, Urine and Related Symptoms",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "60",
      discount: "40",
      actualprice: "73",
      cat: "Homeopathy",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/707-1-200.jpg",
      nam: "SBL Gymnema Sylvestre 1X (Q) (30ml)",
      detail:"Reduces Blood sugar levels and cholesterol, Helps lose weight, Worms",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "40",
      discount: "40",
      actualprice: "63",
      cat: "Homeopathy",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s4: "fas fa-star-half-alt",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/5271-3-200.jpg",
      nam: "Hamdard Diabeat Capsules (60caps)",
      detail:"Diabeat Capsule Regulates Blood Sugar Levels & Beta Cells Secretion",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "10",
      discount: "40",
      actualprice: "70",
      cat: "Homeopathy",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/61138-1-200.jpg",
      nam: "German Homeo Care & Cure Diabetic Drops (30ml)",
      detail:" For High Blood Sugar, Maintains blood sugar, Weakness",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "80",
      discount: "40",
      actualprice: "200",
      cat: "Homeopathy",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s4: "fas fa-star-half-alt",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/3047-1-200.jpg",
      nam: "Bakson Alfalfa Tonic (Sugar Free) (450ml)",
      detail:"General Tonic, Helps Improve Appetite, Anaemia, Weakness, Work Fatigue",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "240",
      discount: "40",
      actualprice: "300",
      cat: "Homeopathy",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s4: "fas fa-star-half-alt",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/66344-1-200.jpg",
      nam: "B Jain Abroma Augusta 1X (Q) (100ml)",
      detail:"Excess thirst, High level of sugar, enuresis, vertigo, giddiness",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "166",
      discount: "40",
      actualprice: "187",
      cat: "Homeopathy",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/41645-1-200.jpg",
      nam: "Willmar Schwabe India Syzgium Jambolanum 1X Tablets (20g)",
      detail:"Willmar Schwabe India Syzgium Jambolanum 1X Tablets (20g)",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "156",
      discount: "40",
      actualprice: "160",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s4: "fas fa-star-half-alt",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/65816-1-200.jpg",
      nam: "Maharishi Ayurveda Glucomap Tablets (60tab)",
      detail:"Willmar Schwabe India Syzgium Jambolanum 1X Tablets (20g)",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "122",
      discount: "40",
      actualprice: "144",
      cat: "Homeopathy",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/26665-1-200.jpg",
      nam: "B Jain Arsenicum Bromatum 6 CH (30ml)",
      detail:"Acne rosacea, gland growth,High blood sugar, walking, locomotor",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "422",
      discount: "40",
      actualprice: "674",
      cat: "Homeopathy",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/2504-2-200.jpg",
      nam: "Organic India LKC (Liver-Kidney Care) Capsules (60caps)",
      detail:"Fatty Liver, Jaundice, Renal Failure, Urinary Tract Infection, Renal Calculi",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "222",
      discount: "40",
      actualprice: "321",
      cat: "Ayurveda",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s4: "fas fa-star-half-alt",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/7743-1-200.jpg",
      nam: "SBL Bio Combination 7 (450g)",
      detail:"Maintain Blood Sugar, Relieves Impaired Liver, Kidney Functions ",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "321",
      discount: "40",
      actualprice: "421",
      cat: "Ayurveda",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/52032-1-200.jpg",
      nam: "Nipco Jambolin Compound (450ml)",
      detail:"Lowers Raised Blood Sugar Level, reduce burning urine, tingling palms ",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "32",
      discount: "40",
      actualprice: "62",
      cat: "Ayurveda",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s4: "fas fa-star-half-alt",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/16369-1-200.jpg",
      nam: "SBL Syzygium Jambolanum 30 CH (30ml)",
      detail:"For Increased Amount of Sugar in the Blood, Urine and Related Symptoms",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "70",
      discount: "40",
      actualprice: "92",
      cat: "Ayurveda",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/2941-1-200.jpg",
      nam: "Willmar Schwabe India Alfalfa Tonic (Sugar Free) (100ml)",
      detail:"Increases Appetite, Weight gain, for weakness, body pains",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "50",
      discount: "40",
      actualprice: "88",
      cat: "Ayurveda",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/44446-1-200.jpg",
      nam: "Dhootapapeshwar Punarnavadi Guggul (60tab)",
      detail:"Increases Appetite, Weight gain, for weakness, body pains",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "50",
      discount: "40",
      actualprice: "88",
      cat: "Ayurveda",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s4: "fas fa-star-half-alt",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/47384-4-200.jpg",
      nam: "Baidyanath Ayurvedant Amla Juice (200ml)",
      detail:"Increases Appetite, Weight gain, for weakness, body pains",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "57",
      discount: "40",
      actualprice: "89",
      cat: "Ayurveda",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/67159-4-200.jpg",
      nam: "Apollo Noni Juice Concentrate Classic (450ml)",
      detail:"Pure Noni Extract",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "545",
      discount: "40",
      actualprice: "757",
      cat: "Ayurveda",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s4: "fas fa-star-half-alt",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/5808-7-200.jpg",
      nam: "Baidyanath Basant Kusumakar Ras (Swarna Moti Yukta) (25tab)",
      detail:"For High Blood Sugar, Anti-Ageing, Memory Loss, Urinary Track Infection.",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "45",
      discount: "40",
      actualprice: "57",
      cat: "Ayurveda",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/2425-1-200.jpg",
      nam: "Basic Ayurveda Amla Juice (Goose Berry) (500ml)",
      detail:"For High Blood Sugar, Anti-Ageing, Memory Loss, Urinary Track Infection.",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "65",
      discount: "40",
      actualprice: "87",
      cat: "Ayurveda",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s4: "fas fa-star-half-alt",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/7939-1-200.jpg",
      nam: "Kudos IME-9 (180tab)",
      detail:"For management of Sugar Level in blood and low energy .",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "650",
      discount: "40",
      actualprice: "870",
      cat: "Unani",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/7197-1-200.jpg",
      nam: "Haslab HC 73 (Uranium Nitricum Complex) (550g)",
      detail:"Helps Maintain Blood Sugar, High Blood Sugar and Frequent Urination at Night.",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "650",
      discount: "40",
      actualprice: "678",
      cat: "Unani",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/7320-1-200.jpg",
      nam: "Dr. Bhargava Diaboral Tablets (60tab)",
      detail:"Helps Maintain Blood Sugar, High Blood Sugar and Frequent Urination at Night.",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "10",
      discount: "40",
      actualprice: "65",
      cat: "Unani",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s4: "fas fa-star-half-alt",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/527-1-200.jpg",
      nam: "SBL Diaboherb Capsules (1Box)",
      detail:"Maintain Blood Sugar (High Blood Sugar), Weakness and Cramps.",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "109",
      discount: "40",
      actualprice: "489",
      cat: "Unani",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/145635-1-200.jpg",
      nam: "Pravek Diabkalp Tablets (30tab)",
      detail:"Diabkalp Tablet, Diabkalp, Diabetes, Type 1 Diabetes, Type 2 Diabetes, Insulin",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "567",
      discount: "40",
      actualprice: "769",
      cat: "Unani",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s4: "fas fa-star-half-alt",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/15373-1-200.jpg",
      nam: "SBL Syzygium Jambolanum 1M (1000 CH) (30ml)",
      detail:"For Increased Amount of Sugar in the Blood, Urine and Related Symptoms",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "543",
      discount: "40",
      actualprice: "568",
      cat: "Unani",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/103070-1-200.jpg",
      nam: "Sogo Teleshoping Natural Madhunashini (1Pack)",
      detail:"For Increased Amount of Sugar in the Blood, Urine and Related Symptoms",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "233",
      discount: "40",
      actualprice: "432",
      cat: "Unani",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s4: "fas fa-star-half-alt",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/54155-2-200.jpg",
      nam: "Basic Ayurveda Angurasav (450ml)",
      detail:"For Increased Amount of Sugar in the Blood, Urine and Related Symptoms",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "145",
      discount: "40",
      actualprice: "165",
      cat: "Unani",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/5975-1-200.jpg",
      nam: "Baidyanath Mehmudgar Vati (40tab)",
      detail:" Urinary Tract Disorders, Retention Of Urine, Difficulty In Urination, diabetes",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "45",
      discount: "40",
      actualprice: "67",
      cat: "Unani",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s4: "fas fa-star-half-alt",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/137923-1-200.jpg",
      nam: "Himalayan Organics Curcumin Tablet (90tab)",
      detail:" Ayurvedic medicine useful in various inflammatory conditions and is a good anti oxidant also",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "452",
      discount: "40",
      actualprice: "765",
      cat: "Unani",
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
      return ele.cat == "Homeopathy";
    });
    console.log(filtitem);
    display(filtitem);
  }
  
  document.querySelector(".bayurveda2").addEventListener("click", filterby2);
  function filterby2() {
    var filtitem = productData.filter(function (ele) {
      return ele.cat == "Ayurveda";
    });
    console.log(filtitem);
    display(filtitem);
  }
  
  document.querySelector(".bayurveda3").addEventListener("click", filterby3);
  function filterby3() {
    var filtitem = productData.filter(function (ele) {
      return ele.cat == "Unani";
    });
    console.log(filtitem);
    display(filtitem);
  }
  
//   document.querySelector(".bayurveda4").addEventListener("click", filterby4);
//   function filterby4() {
//     var filtitem = productData.filter(function (ele) {
//       return ele.cat == "Biochemic Tablets";
//     });
//   //   console.log(filtitem);
//     display(filtitem);
//   }
  
  
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
  

  
  document.querySelector("#return").addEventListener("click", function () {
    window.location.href = "landing_page.html";
  });
  