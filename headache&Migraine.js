// product data store in arr of object bellow
var productData = [
   
    {
      img: "https://static.oxinis.com/healthmug/image/product/341-1-200.jpg",
      nam: "Dr. Reckeweg R16 (Cimisan) (22ml)",
      detail:
        "Headache, Migraine and Neuralgia of the Head",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "130",
      discount: "40",
      actualprice: "153",
      prd:"dr",
      cat: "Homeopathy",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/5657-1-200.jpg",
      nam: "SBL Calcarea Phosphorica 6X (25g)",
      detail:
        "Headache, Migraine and Neuralgia of the Head",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "130",
      discount: "40",
      actualprice: "153",
      prd:"sbl",
      cat: "Homeopathy",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/885-1-200.jpg",
      nam: "SBL Five Phos Tablet 3X (25g)",
      detail:
        "Useful in seasonal cold and viral flu, reduces bloating and helps in digestive process",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "130",
      discount: "40",
      prd:"sbl",
      actualprice: "153",
      cat: "Homeopathy",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/231-1-200.jpg",
      nam: "Dr. Reckeweg Kali Phosphoricum 6X (20g)",
      detail:
        null,
      logo: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
      price: "98",
      cat:"Ayurveda",
      discount: "50",
      actualprice: "148",
      prd:"dr",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/3018-1-200.jpg",
      nam: "New Shama Zulfi Shampoo (200ml)",
      detail:
        null,
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "98",
      cat:"Ayurveda",
      discount: "50",
      actualprice: "148",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/41700-2-200.jpg",
      nam: "Dr. Reckeweg Silicea 12X (20g)",
      detail:
        null,
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "98",
      cat:"Ayurveda",
      discount: "50",
      actualprice: "148",
      prd:"dr",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/41635-1-200.jpg",
      nam: "Hamdard Chandprabha Vati (25tab)",
      detail:
        null,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
      price: "98",
      cat:"Ayurveda",
      discount: "50",
      actualprice: "148",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/7570-2-200.jpg",
      nam: "Allen A50 High Blood Pressure (HBP) Drops (30ml)",
      detail:
        null,
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "98",
      cat:"Ayurveda",
      discount: "50",
      actualprice: "148",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/5952-2-200.jpg",
      nam: "Baidyanath Brahmi Vati (Buddhi Vardhak) (80tab)",
      detail:
        "Headache, Migraine and Neuralgia of the Head",
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "169",
      discount: "30",
      actualprice: "200",
      cat: "Unani",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star",
      s4: "fas fa-star",
      s5: "fas fa-star",
      
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/39480-1-200.jpg",
      nam: "Bakson Sinus Aid Tabs (75tab)",
      detail:
        "Helps in relieving pain and provides comfort in dry eyes by producing artificial tears",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "90",
      cat: "Unani",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/41863-1-200.jpg",
      nam: "Hamdard Rogan Gul (50ml)",
      detail:
        null,
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "200",
      discount: "30",
      cat:"Ayurveda",
      actualprice: "399",
      cat: "Unani",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
    {
      img: "https://static.oxinis.com/healthmug/image/product/5682-2-200.jpg",
      nam: "Dabur Brahma Rasayan (250g)",
      detail:
        null,
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "90",
      cat: "Unani",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
   
    {
        img: "https://static.oxinis.com/healthmug/image/product/358-1-200.jpg",
        nam: "Dr. Reckeweg R33 (Buforan) (22ml)",
        detail:null,
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "189",
        discount: "40",
        actualprice: "250",
        cat: "Biochemic Tablets",
        prd:"dr",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star",
        s4: "fas fa-star",
        s5: "fas fa-star-half-alt",
        
      },
    {
        img: "https://static.oxinis.com/healthmug/image/product/39756-1-200.jpg",
        nam: "Sadar Dawakhana Sharbat Ikseer E Suaal (200ml)",
        detail:null,
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "70",
        discount: "40",
        actualprice: "100",
        cat: "Unani",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star",
        s4: "fas fa-star",
        s5: "fas fa-star-half-alt",
        
      },
    {
        img: "https://static.oxinis.com/healthmug/image/product/5516-2-200.jpg",
        nam: "Adven Sinus Gold Drops (30ml)",
        detail:null,
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "100",
        discount: "40",
        actualprice: "150",
        cat: "Unani",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star",
        s4: "fas fa-star",
        s5: "fas fa-star-half-alt",
        
      },
    {
        img: "https://static.oxinis.com/healthmug/image/product/9802-1-200.jpg",
        nam: "Willmar Schwabe India Five Phos 6X (20g)",
        detail:null,
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "189",
        discount: "40",
        actualprice: "250",
        cat: "Unani",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star",
        s4: "fas fa-star",
        s5: "fas fa-star-half-alt",
        
      },
    {
      img: "https://static.oxinis.com/healthmug/image/product/7873-2-200.jpg",
      nam: "Apsara Herbal Sukoon Massage Oil (100ml)",
      detail:
     " Oil For sprains, headache, backache, joint and body pains with stiffness",
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "90",
      cat: "Unani",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
   
    {
        img: "https://static.oxinis.com/healthmug/image/product/7783-1-200.jpg",
        nam: "Soframycin Skin  (30g)",
        detail:"Oil For sprains, headache, backache, joint and body pains with stiffness",
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "189",
        discount: "40",
        actualprice: "250",
        cat: "Unani",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star",
        s4: "fas fa-star",
        s5: "fas fa-star-half-alt",
        
      },
    {
        img: "https://static.oxinis.com/healthmug/image/product/6821-1-200.jpg",
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "70",
        nam: "Cliface syrup (20g)",
        discount: "40",
        actualprice: "100",
        cat: "Unani",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star",
        s4: "fas fa-star",
        s5: "fas fa-star-half-alt",
        
      },
    {
        img: "https://static.oxinis.com/healthmug/image/product/41528-1-200.jpg",
        nam: "New Shama Nozina (30Pills)  (20g)",
        detail:"Headache, Migraine and Neuralgia of the Head",
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "100",
        discount: "40",
        actualprice: "150",
        cat: "Unani",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star",
        s4: "fas fa-star",
        s5: "fas fa-star-half-alt",
        
      },
    {
        img: "https://static.oxinis.com/healthmug/image/product/39451-1-200.jpg",
        nam: "Bakson Compound No 30 (Sinusitis) (100tab)",
        detail:null,
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "189",
        discount: "40",
        actualprice: "250",
        cat: "Unani",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star",
        s4: "fas fa-star",
        s5: "fas fa-star-half-alt",
        
      },
    {
      img: "https://static.oxinis.com/healthmug/image/product/7352-1-200.jpg",
      nam: "Wheezal Nosoline Drops (15ml)",
      detail:
        null,
      logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
      price: "90",
      cat: "Unani",
      s1: "fas fa-star",
      s2: "fas fa-star",
      s3: "fas fa-star-half-alt",
      s4: "far fa-star",
      s5: "far fa-star",
    },
   
    {
        img: "https://static.oxinis.com/healthmug/image/product/41677-1-200.jpg",
        nam: "Soframycin Skin Cream (30g)",
        detail:null,
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "189",
        discount: "40",
        actualprice: "250",
        cat: "Unani",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star",
        s4: "fas fa-star",
        s5: "fas fa-star-half-alt",
        
      },
    {
        img: "https://static.oxinis.com/healthmug/image/product/7724-1-200.jpg",
        nam: "Volopex  (4g)",
        detail:null,
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "70",
        discount: "40",
        actualprice: "100",
        cat: "Unani",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star",
        s4: "fas fa-star",
        s5: "fas fa-star-half-alt",
        
      },
    {
        img: "https://static.oxinis.com/healthmug/image/product/508-2-200.jpg",
        nam: "Cliface oil(20g)",
        detail:null,
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "100",
        discount: "40",
        actualprice: "150",
        cat: "Unani",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star",
        s4: "fas fa-star",
        s5: "fas fa-star-half-alt",
        
      },
    {
        img: "https://static.oxinis.com/healthmug/image/product/19034-4-200.jpg",
        nam: "Jiva Ayurveda Pain Calm Oil (120ml)",
        detail:null,
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "189",
        discount: "40",
        actualprice: "250",
        cat: "Unani",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star",
        s4: "fas fa-star",
        s5: "fas fa-star-half-alt",
        
      },
      {
        img: "https://static.oxinis.com/healthmug/image/product/878-1-400.jpg",
        nam: "SBL Kali Phosphorica 6X (25g)",
        detail:"Height and development of Children to Their Full Potential",
        logo: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
        price: "300",
        prd:"sbl",
        discount: "40",
        actualprice: "399",
        cat: "Homeopathy",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star-half-alt",
        s4: "far fa-star",
        s5: "far fa-star",
      },
      {
        img: "https://static.oxinis.com/healthmug/image/product/6880-1-200.jpg",
        nam: "Dawakhana Tibbiya Dimagheen (380g)",
        detail:null,
        logo: "	https://static.oxinis.com/healthmug/image/asset/498-rm-150.png",
        price: "49",
        discount: "40",
        actualprice: "210",
        cat: "Homeopathy",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star-half-alt",
        s4: "far fa-star",
        s5: "far fa-star",
      },
      {
        img: "https://static.oxinis.com/healthmug/image/product/7693-1-200.jpg",
        nam: "Indo German Sinus Care Tablets (25g)",
        detail:null,
        logo: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
        price: "49",
        discount: "40",
        actualprice: "210",
        cat: "Homeopathy",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star-half-alt",
        s4: "far fa-star",
        s5: "far fa-star",
      },
      {
        img: "https://static.oxinis.com/healthmug/image/product/41704-1-200.jpg",
        nam: "Hamdard Itrifal Ustukhuddus (150g)",
        detail:
          "Helps to counter Vitamin B deficiency, and assists in promoting a healthy nervous system",
        logo: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
        price: "29",
        discount: "40",
        actualprice: "34",
        cat: "Homeopathy",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star-half-alt",
        s4: "far fa-star",
        s5: "far fa-star",
      },
      {
        img: "https://static.oxinis.com/healthmug/image/product/41634-1-200.jpg",
        nam: "Hamdard Benazir Hair Oil (100ml)",
        detail:
          "Useful in seasonal cold and viral flu, reduces bloating and helps in digestive process",
        logo: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
        price: "200",
        discount: "40",
        actualprice: "300",
        cat: "Homeopathy",
        s1: "fas fa-star",
        s2: "fas fa-star-half-alt",
        s3: "far fa-star",
        s4: "far fa-star",
        s5: "far fa-star",
      },
      {
        img: "https://static.oxinis.com/healthmug/image/product/878-1-400.jpg",
        nam: "SBL Kali Phosphorica 6X (25g)",
        detail:"Height and development of Children to Their Full Potential",
        logo: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
        price: "250",
        prd:"sbl",
        discount: "40",
        actualprice: "399",
        cat: "Homeopathy",
        s1: "fas fa-star",
        s2: "fas fa-star",
        s3: "fas fa-star-half-alt",
        s4: "far fa-star",
        s5: "far fa-star",
      }, {
        img: "https://static.oxinis.com/healthmug/image/product/878-1-400.jpg",
        nam: "SBL Kali Phosphorica 6X (25g)",
        detail:"Height and development of Children to Their Full Potential",
        logo: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhsLXBmJvoDmYBorqmDgfjZs-y4Mn5xNGyg&usqp=CAU",
        price: "200",
        prd:"sbl",
        discount: "40",
        actualprice: "399",
        cat: "Homeopathy",
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
    // console.log(filtitem);
    display(filtitem);
  }
  
  document.querySelector(".bayurveda2").addEventListener("click", filterby2);
  function filterby2() {
    var filtitem = productData.filter(function (ele) {
      return ele.cat == "Ayurveda";
    });
    // console.log(filtitem);
    display(filtitem);
  }
  
  document.querySelector(".bayurveda3").addEventListener("click", filterby3);
  function filterby3() {
    var filtitem = productData.filter(function (ele) {
      return ele.cat == "Unani";
    });
    // console.log(filtitem);
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
        // console.log(filtbyprice)
        display(filtbyprice)
  }
  
  //bellow 500 and abow 200
  document.querySelector(".b500").addEventListener("click", filtby500);
  function filtby500(){
      var filtbyprice = productData.filter(function(ele){
          return Number(ele.price)<= 500 &&  Number(ele.price)>= 201;
      }); 
        // console.log(filtbyprice)
        display(filtbyprice)
  }
  
// searching items  functions bellow

  document.querySelector(".searchitm").addEventListener("click", searching);
  //   console.log(valu);
  function searching(valu){
      var valu = document.querySelector(".prdsearch").value;
    //   console.log(valu);
      var searchitm = productData.filter(function(ele){
          return ele.prd == valu;
      })
    //   console.log(searchitm);
      display(searchitm)
  }