let text = document.getElementById('toggle')
let list = document.getElementsByClassName('res-list')[0]

      text.onclick = function(){
        console.log("click")
    if(text.innerText == "Menu")
      {
        text.innerText = "Close"
        list.classList.remove('none')
        list.classList.add('show')
      }
      else
      {
         text.innerText = "Menu"
        list.classList.remove('show')
        list.classList.add('none')
      }
      }