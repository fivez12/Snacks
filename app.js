function randomImg() {
    var quotes = [
      {
        text: "BIO1",
        img:  "https://lays.ro/images/pack-clasic-sare.png"
      },
      {
        text: "BIO2",
        img:  "https://lays.ro/images/pack-clasic-barbecue.png",
      },
      {
        text: "BIO3",
        img:  "https://lays.ro/images/pack-clasic-onion.png",
      },
      {
        text: "BIO4",
        img:  "https://lays.ro/images/pack-clasic-paprika.png",
      },
      {
        text: "BIO5",
        img:  "https://lays.ro/images/pack-clasic-barbecue.png",
      },
    ];
    var snack = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("snacks").innerHTML =
    '<div class = "card-image">' +
      `<figure class = "image is-square">` +
      '<img src="' + snack.img + '">' + '</figure>' 
      '</div>'
      '<p>' + snack.text + '</p>';
  }