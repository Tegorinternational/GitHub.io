import data from "/GitHub.io/hr-slide-shop/storedata.js";
const buildProductCard = productcard => {
  // Create elements needed to build a card
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const productImage = document.createElement("img");
  const div3 = document.createElement("div");
  const productName = document.createElement("h2");
  const productId = document.createElement("h3");
  const productDescription = document.createElement("p");
  const div4 = document.createElement("div");
  const div5 = document.createElement("div");
  const fullPrice = document.createElement("span");
  const strike = document.createElement("s");
  const discount = document.createElement("sup");
  const lineBreak = document.createElement("br");
  const discountedPrice = document.createElement("span");
  const buyButton = document.createElement("a");
  
  // Append newly created elements into the DOM
  const storeCard = document.querySelector(".store-card");
  storeCard.append(div1);
  div1.append(div2);
  div2.append(productImage);
  div2.append(div3);
  div3.append(productName);
  div3.append(productId);
  div2.append(productDescription);
  div2.append(div4);
  div4.append(div5);
  div5.append(fullPrice);
  fullPrice.append(strike);
  div5.append(discount);
  div5.append(lineBreak);
  div5.append(discountedPrice);
  div4.append(buyButton);
  
  // Set content
  productImage.setAttribute("src", productcard.getproductimg);
  productName.innerHTML = productcard.getproductname;
  productId.innerHTML = productcard.getproductid;
  productDescription.innerHTML = productcard.getproductDescription;
  fullPrice.innerHTML = "<s>" + "&nbsp;" + "₹" + productcard.getfullprice + "&nbsp;" + "</s>";
  discount.innerHTML = productcard.getdiscount + "% off";
  discountedPrice.innerHTML = "₹" + productcard.getdiscountedPrice;
  buyButton.innerHTML = "Buy";
  
  
  // add classes
   div1.setAttribute("class", "slide-card shrink-1 grow-1 mr-5 rounded-lg");
   div2.setAttribute("class", "bg-gray-200 p-6 rounded-lg");
   
   productImage.setAttribute("class", "img-mt w-40 rounded w-full object-cover object-center mb-3 h-32");
   div3.setAttribute("class", "w-full flex mb-3");
   productName.setAttribute("class", "text-lg text-gray-900 font-medium title-font mr-auto");
   productId.setAttribute("class", "text-base text-gray-900 title-font ml-auto");
   productDescription.setAttribute("class", "text-sm pb-3");
   div4.setAttribute("class", "flex mt-1");
   div5.setAttribute("class", "");
   fullPrice.setAttribute("class", "title-font text-base text-gray-900");
   strike.setAttribute("class", "");
   discount.setAttribute("class", "text-red-500 text-sm");
   lineBreak.setAttribute("class", "");
   discountedPrice.setAttribute("class", "title-font font-medium text-xl text-gray-900");
   buyButton.setAttribute("class", "flex ml-auto text-white bg-indigo-500 border-0 py-2 my-auto px-5 focus:outline-none hover:bg-indigo-600 rounded");
   
  // Add links
  buyButton.setAttribute("href", productcard.buyButton);
};

data.forEach(productcard => buildProductCard(productcard));
