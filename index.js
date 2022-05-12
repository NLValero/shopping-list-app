const form = document["addItem"]

form.addEventListener("submit", function(event){
    event.preventDefault()

    // new item added to dom //
    const newItems = form.itemName.value
    form.itemName.value = ""
    
    // new item //
    const li = document.createElement("li");
    const xBtn = document.createElement('button');
    li.textContent = newItems;
    
    
    // Append list //
    document.getElementById('list').appendChild(li)
    li.append(xBtn)
    
    
    // delete button style //
    xBtn.textContent = 'X'
    xBtn.style.backgroundColor = 'rgba(233, 150, 122, 0.562)'
    xBtn.style.listStyleType = 'none'
    xBtn.style.margin = '10px auto'
    xBtn.style.marginBottom = '10px'
    xBtn.style.textAlign = 'center'
    xBtn.style.borderRadius = '65px'
    
    //remove items//
    xBtn.addEventListener("click", function () {
        console.log("Item removed");
        li.remove();
    })
    
    
   
   

})    
  
 

  








