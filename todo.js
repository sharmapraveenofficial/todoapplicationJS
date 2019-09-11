
let ul=document.getElementById('list');
let li;


let addButton= document.getElementById('add')
addButton.addEventListener('click',addItem)

let removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)

let removeAllButton = document.getElementById('removeAll')
removeAllButton.addEventListener('click', removeAllItem)




function addItem() {
    var input= document.getElementById('input')
    var item=input.value;
    ul=document.getElementById('list')
    var textnode=document.createTextNode(item)
   
    if (item ==='') {
        let newValue = document.querySelector('p')
        newValue.textContent = 'Enter Your Todo....'
       
        let inputclick = document.getElementById('input')
        inputclick.addEventListener('click', removep)
        function removep() {
           
            newValue.textContent = ''
        }

    } else{

        //create list
        li=document.createElement('li')
        
        //create checkbox
        var checkbox=document.createElement('input')
        checkbox.type ='checkbox';
        checkbox.setAttribute('id','check')

        //create label
        var label=document.createElement('label')
        label.setAttribute('for','item') //optional
         

        //on web page
        ul.append(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li,ul.childNodes[0]);
        
        setTimeout(() => {
            li.className = 'visual';
        }, 10);

        input.value =''
      

    }

}

function removeItem() {
   li=ul.children

   for (let index = 0; index < li.length; index++) {
       while (li[index] && li[index].children[0].checked) {
           ul.removeChild(li[index])
       }
       
   }
}

function removeAllItem() {
    li=ul.children
    for (let index = 0; index < li.length; index++) {
       ul.remove()
        }

    }


