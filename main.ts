var div:HTMLDivElement = document.createElement('div')
div.style.width = '100px'
div.style.height = '100px'
div.style.border = '1px solid firebrick'
div.id = 'demo'
div.innerHTML = 'npx parcel index.html +++ tsconfig.js example'

document.body.appendChild(div)

var x:Boolean = false
var position:[number, number] = [0, 0]

div.onmousedown = (e:MouseEvent)=>{
    x = true
    position = [e.clientX, e.clientY]
}

document.onmousemove = (e)=>{
    if(x === true){
        let deltaX = e.clientX - position[0]
        let deltaY = e.clientY - position[1]
        //top有可能是 auto，parseInt(auto)是NaN
        //! ts语法，确定不会是NaN，不再报错
        //或者给保底值0（给0就可以不写 ！）
        let top = parseInt(div.style.top!) || 0
        let left = parseInt(div.style.left!) || 0
        div.style.top = top + deltaY + 'px'
        div.style.left = left + deltaX + 'px'
        position = [e.clientX, e.clientY]
    }
}

document.onmouseup = (e)=>{
    x = false
}