function getSiblings(node) {/*API*/
    var allChildren = node.parentNode.children
    var array = {
        length: 0
    }
    for (let i = 0; i < allChildren.length; i++) {
        if (allChildren[i] !== node) {
            array[array.length] = allChildren[i]
            array.length += 1
        }
    }
    return array
}
console.log(getSiblings(item3))






function addClass(node,classes) {
    for(let key in classes){
        var value = classes[key]
        if(value){
            node.classList.add(key)
        }else{
            node.classList.remove(key)
        }
    }
}

addClass(item3,{a:true,b:false,c:true})