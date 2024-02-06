function disableDefault(event){
    event.preventDefault()
}

document.addEventListener('contextmenu',disableDefault)
document.addEventListener('keydown',event => {
    if(event.ctrlKey && event.key == 'c'){
        event.preventDefault()
    }
})
document.addEventListener('selectstart',disableDefault)
document.addEventListener('dragstart',disableDefault)