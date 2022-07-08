function randomImg() {
    var quotes = [
      {
        price:360,
        kcal:350,
        img:  "https://lays.ro/images/pack-clasic-sare.png",
      },
      {price:360,
        kcal:350,
        img:  "https://lays.ro/images/pack-clasic-barbecue.png",
      },
      {price:360,
        kcal:350,
        img:  "https://lays.ro/images/pack-clasic-onion.png",
      },
      {price:360,
        kcal:350,
        img:  "https://lays.ro/images/pack-clasic-paprika.png",
      },
      {price:360,
        kcal:350,
        img:  "https://lays.ro/images/pack-clasic-barbecue.png",
      },
    ];
    var snack = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("snacks").innerHTML =
      `<figure class = "image is-square">` +
      '<img loading ="lazy" src="' + snack.img + '">' + '</figure>' ;
  
      document.getElementById("descri").innerHTML = 
      '<span>Pirce: ' + snack.price + '</span>'+ '<br>' +
      '<span>Kcal: ' + snack.kcal+ '</span>';
     

  }


 