const status = document.getElementById('status')

status.textContent = navigator.onLine? 'Online':'Offline'

window.addEventListener('offline',e=>{
    status.textContent = 'Offline'
})

window.addEventListener('online',e=>{
    status.textContent = 'Online'
})