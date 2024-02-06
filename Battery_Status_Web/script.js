

navigator.getBattery()
    .then(battery =>{
        const status = document.getElementById('status')
        const bat = document.getElementById('battery')

        function Update(){
            const batteryLevel = battery.level * 100
            bat.textContent = batteryLevel
            status.textContent = battery.charging? 'Charging':'Not Charging'
        }

        Update()

        battery.addEventListener('levelchange',Update)
        battery.addEventListener('chargingchange', Update)
        
    })