let bagItems;
onScreenLoad();

function onScreenLoad(){
  let bagItemStr=localStorage.getItem('bagItems');
  bagItems=bagItemStr ? JSON.parse(bagItemStr): [];
  displayItemsOnScreen();
  displaybagIcon();
}

function addToBag(itemId){
bagItems.push(itemId);
localStorage.setItem('bagItems',JSON.stringify(bagItems));
displaybagIcon();
}


function displaybagIcon(){
  let bagItemCountElement= document.querySelector('.bag-item-count');
  if(bagItems.length>0){
    bagItemCountElement.style.visibility='visible';
    bagItemCountElement.innerText=bagItems.length; 
  }
  else{
  bagItemCountElement.style.visibility='hidden';
  }
}

  function displayItemsOnScreen(){
    let itemsContainerElement=document.querySelector('.items-container');
    if(!itemsContainerElement){
      return;
    }
    let innerHTML='';
    items.forEach(item=> {
      innerHTML+=`
      <div class="item-container">
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating">
          ${item.rating.stars}⭐| ${item.rating.count}k
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag" onclick="addToBag(${item.id});">Add To Bag</button>
      </div>
      `;
    });

    itemsContainerElement.innerHTML=innerHTML;
  }
  

