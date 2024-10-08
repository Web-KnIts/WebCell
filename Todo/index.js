let list = document.getElementById('list').children[0]
let task = document.getElementById('task_value')
var task_Count = [];

window.onload = function(){
    let arr = localStorage.getItem('Task').split(',')
    if(arr === null||arr?.length === 0 || arr[0] == "")
    {

        console.log('empty')
    }
    else
    {
        task_Count = [...arr]
        console.log("before creation - ",task_Count)
        arr.forEach((text)=>{
            CreateElement(text)
        })
    }
}

function CreateElement(string)
{
    let li = document.createElement('li')
    li.classList.add('li-box')
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type','checkbox')
    let para = document.createElement('p')
    para.classList.add('content')
    para.innerText = string;
    let span = document.createElement('span')
    span.classList.add('close-btn')
    span.innerText = 'x'
    list.append(li);
    li.append(checkbox);
    li.append(para);
    li.append(span);
}

function AddTask(){
     let text = task.value.trim()
    if(text == "" || text == " " )
    {
        alert('Enter task to show !')
    }
    else
    {
    CreateElement(text)
    task_Count.push(text)
    localStorage.setItem('Task',task_Count)
    task.value = "";
    console.log( localStorage.getItem('Task').split(','))
    }
}
list.addEventListener('click',function(e){
    if(e.target.tagName === "INPUT")
    {
        if(e.target.checked === true)
        e.target.nextSibling.classList.add('line-through')
        else
        e.target.nextSibling.classList.remove('line-through')
    }
    else if(e.target.tagName === "P")
    {
        // do notthing
    }
    else
    {
        let removeCount = 1
        let element = e.target.parentNode.childNodes[1].innerText;
        let newArr = task_Count.filter((text)=>{
            console.log('chala')
            if(text == element && removeCount )
            {
                removeCount--;
                return false;
            }
            return true
        })
        console.log('before deletion',task_Count)
        console.log('newArr',newArr)
        task_Count = newArr
        localStorage.setItem('Task',task_Count)
        e.target.parentNode.remove()
    }
})
