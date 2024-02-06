const detector = window.matchMedia('(prefers-color-scheme:dark)')
const result = document.getElementById('result')

const setResult = (isDark) =>{
    result.textContent = isDark? 'Dark':'Light'
}

setResult(detector.matches)

detector.addEventListener('change',(e)=>{
    setResult(e.matches)
})