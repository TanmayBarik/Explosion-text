const line = document.querySelectorAll('.line');
const word = document.querySelectorAll('.word');

// 1.iterate through all the elements of class line
line.forEach(
    function(item1){
        // 2. add eventListener to get mouseenter
        item1.addEventListener('mouseenter',function(){
            // 3. item1 is used to access item being triggered
            line.forEach(function(item){
                // 4. item is used to access all the items
                if(item != item1){
                    item.style.opacity = '0.5';
                } 
                else{
                    item.style.opacity = '1';
                }
            });
        });
        // 5. if item1 = item then opacity remains same
        //    and item explodes,
        //    else item gets lower opacity
        // 6. when mouseleaves then opacity returns to 1
        item1.addEventListener('mouseleave',function(){
            line.forEach(function(item){
                item.style.opacity = '1';
            });
        });
    }
)

// code to put a span tag around each character
word.forEach(function(item){

    temp_text = '';
    for(i=0; i<item.innerText.length; i++){
        temp_text += `<span>${item.innerText[i]}</span>`;
    }
    item.innerHTML = temp_text;
})

// don't call on top, can only be called after spanning
const span = document.querySelectorAll('span');



