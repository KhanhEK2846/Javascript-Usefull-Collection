document.addEventListener('copy',event=>{
    event.preventDefault()
const max = 10
    let copyTxt = window.getSelection().toString()
    if(copyTxt.length>max){
        copyTxt = copyTxt.substring(0,max) + '...'
    }
    const copyright = 'Source: KhanhEK'
    event.clipboardData.setData('text/plain',copyTxt + '\n\n' + copyright)
})
