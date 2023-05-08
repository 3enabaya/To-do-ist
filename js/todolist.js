let add = document.getElementById('add')
let input = document.getElementById('input')
let task= document.getElementById('task')
//array for values

let array = []


//loading tasks  
if (localStorage.getItem('TODOLIST')){
    array= JSON.parse(localStorage.getItem('TODOLIST'))
}
window.onload= function(){
for(let i =0; i<array.length; i++){
//getting tasks again
let div = document.createElement('div')
div.setAttribute('class',`div`)
let text = document.createTextNode(array[i].input)
div.appendChild(text)
task.appendChild(div)
div.setAttribute('id',array[i].id)
div.setAttribute('done','no')
let butto = document.createElement('button')
let remove = document.createTextNode('X')
butto.appendChild(remove)
div.appendChild(butto)
butto.setAttribute('id','remove')
let done = document.createElement('a')
done.setAttribute('href','#')
done.innerHTML='<i class="fa-regular fa-circle-check u"></i>'
div.appendChild(done)

//end storing in array
//colors
if(div.id.endsWith(1)){
    div.style.backgroundColor='rgb(0, 245, 255)'
}
if(div.id.endsWith(2)){
    div.style.backgroundColor='rgb(234, 4, 126)'

}
if(div.id.endsWith(3)){
    div.style.backgroundColor='rgb(252, 231, 0)'

}
if(div.id.endsWith(4)){
    div.style.backgroundColor='rgb(167, 255, 228)'

}
if(div.id.endsWith(5)){
    div.style.backgroundColor='rgb(255, 136, 75)'

}
if(div.id.endsWith(6)){
    div.style.backgroundColor='rgb(213, 139, 221)'

}
if(div.id.endsWith(7)){
    div.style.backgroundColor='rgb(250, 234, 72)'

}
if(div.id.endsWith(8)){
    div.style.backgroundColor='rgb(156, 255, 46)'
   

}
if(div.id.endsWith(9)){
    div.style.backgroundColor='rgb(135, 88, 255)'


}
if(div.id.endsWith(0)){
    div.style.backgroundColor= 'rgb(175, 122, 179)'

}
//end colors 

//first condition 
for (let i=0; i<array.length; i++){
    if (array[i].value=='yes'){
  if(div.id === array[i].id){
    done.innerHTML='<i class="fa-solid fa-circle-check u"></i>'
    div.style.opacity='.7'
    div.style.backgroundColor='grey'
    
  }
    }
}


butto.addEventListener('click',function(){
    array.pop(text)
    div.remove()
    localStorage.setItem('TODOLIST',JSON.stringify(array))
})

// done task
div.addEventListener('click', function(e){
    done.innerHTML='<i class="fa-solid fa-circle-check u"></i>'
    div.style.opacity='.7'
    div.style.backgroundColor='grey'
    div.setAttribute('done','yes')
    for (let i =0; i<array.length; i++){
        if(div.id === array[i].id){
    if(array[i].value==='no'){
        array[i].value='yes'  
    }
    else{ array[i].value='no'  
//colors
if(div.id.endsWith(1)){
    div.style.backgroundColor='rgb(0, 245, 255)'
}
if(div.id.endsWith(2)){
    div.style.backgroundColor='rgb(234, 4, 126)'

}
if(div.id.endsWith(3)){
    div.style.backgroundColor='rgb(252, 231, 0)'

}
if(div.id.endsWith(4)){
    div.style.backgroundColor='rgb(167, 255, 228)'

}
if(div.id.endsWith(5)){
    div.style.backgroundColor='rgb(255, 136, 75)'

}
if(div.id.endsWith(6)){
    div.style.backgroundColor='rgb(213, 139, 221)'

}
if(div.id.endsWith(7)){
    div.style.backgroundColor='rgb(250, 234, 72)'

}
if(div.id.endsWith(8)){
    div.style.backgroundColor='rgb(156, 255, 46)'

}
if(div.id.endsWith(9)){
    div.style.backgroundColor='rgb(135, 88, 255)'

}
if(div.id.endsWith(0)){
    div.style.backgroundColor= 'rgb(175, 122, 179)'
}  
    done.innerHTML='<i class="fa-regular fa-circle-check u"></i>'
    div.style.opacity='1'
}
    }
    }
    localStorage.setItem('TODOLIST',JSON.stringify(array))
    })
        // end done task




}


}





//crating tasks 
add.onclick= function(){
    //div 
    if(!input.value){
        return
    }  
JSON.parse(localStorage.getItem('TODOLIST'))
let div = document.createElement('div')
div.setAttribute('class',`div`)
div.setAttribute('done','no')
let text = document.createTextNode(`${input.value}`)
div.appendChild(text)
div.setAttribute('id', Date.now())
task.appendChild(div)
let butto = document.createElement('button')
let remove = document.createTextNode('X')
butto.appendChild(remove)
butto.setAttribute('id','remove')
div.appendChild(butto)  
let done = document.createElement('a')
done.setAttribute('id','done')
done.setAttribute('href','#')
let k =done.innerHTML='<i class="fa-regular fa-circle-check u"></i>'
div.appendChild(done)
//end crating tasks 


//storing in array
array.push({input:input.value , value:'no' , id:div.id})
localStorage.setItem('TODOLIST',JSON.stringify(array))
if(input.value!==''){
    input.value=''
}

//end storing in array
//colors
if(div.id.endsWith(1)){
    div.style.backgroundColor='rgb(0, 245, 255)'
}
if(div.id.endsWith(2)){
    div.style.backgroundColor='rgb(234, 4, 126)'

}
if(div.id.endsWith(3)){
    div.style.backgroundColor='rgb(252, 231, 0)'

}
if(div.id.endsWith(4)){
    div.style.backgroundColor='rgb(167, 255, 228)'

}
if(div.id.endsWith(5)){
    div.style.backgroundColor='rgb(255, 136, 75)'

}
if(div.id.endsWith(6)){
    div.style.backgroundColor='rgb(213, 139, 221)'

}
if(div.id.endsWith(7)){
    div.style.backgroundColor='rgb(250, 234, 72)'

}
if(div.id.endsWith(8)){
    div.style.backgroundColor='rgb(156, 255, 46)'

}
if(div.id.endsWith(9)){
    div.style.backgroundColor='rgb(135, 88, 255)'


}
if(div.id.endsWith(0)){
    div.style.backgroundColor= 'rgb(175, 122, 179)'

}
//end colors 

// delete task

butto.onclick = function(){
    array.pop(text)
    div.remove()
    localStorage.setItem('TODOLIST',JSON.stringify(array)
    )
    console.log(text)
}
//end delete task
// done task
div.addEventListener('click', function(e){
    done.innerHTML='<i class="fa-solid fa-circle-check u"></i>'
    div.style.opacity='.7'
    div.style.backgroundColor='grey'
   

    div.setAttribute('done','yes')
    for (let i =0; i<array.length; i++){
        if(div.id === array[i].id){
    if(array[i].value==='no'){
        array[i].value='yes'  
    }
    else{ array[i].value='no'  
//colors
if(div.id.endsWith(1)){
    div.style.backgroundColor='rgb(0, 245, 255)'
}
if(div.id.endsWith(2)){
    div.style.backgroundColor='rgb(234, 4, 126)'

}
if(div.id.endsWith(3)){
    div.style.backgroundColor='rgb(252, 231, 0)'

}
if(div.id.endsWith(4)){
    div.style.backgroundColor='rgb(167, 255, 228)'

}
if(div.id.endsWith(5)){
    div.style.backgroundColor='rgb(255, 136, 75)'

}
if(div.id.endsWith(6)){
    div.style.backgroundColor='rgb(213, 139, 221)'

}
if(div.id.endsWith(7)){
    div.style.backgroundColor='rgb(250, 234, 72)'

}
if(div.id.endsWith(8)){
    div.style.backgroundColor='rgb(156, 255, 46)'

}
if(div.id.endsWith(9)){
    div.style.backgroundColor='rgb(135, 88, 255)'

}
if(div.id.endsWith(0)){
    div.style.backgroundColor= 'rgb(175, 122, 179)'
}  
    done.innerHTML='<i class="fa-regular fa-circle-check u"></i>'
    div.style.opacity='1'
}
    }
    }
    localStorage.setItem('TODOLIST',JSON.stringify(array))
    })
        // end done task


}
