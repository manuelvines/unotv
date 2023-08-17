export function count_down(){
 
    let countDownDate = new Date("Aug 31, 2023 00:00:00").getTime();
    const main_count = document.getElementById("main-count");

    //first time
    calc_date_diff(new Date().getTime(),countDownDate );

    //call every second
    let timer = setInterval(function() {
        let now = new Date().getTime();
        let date = calc_date_diff(now,countDownDate );
        
        date ? setDate(date) : clearTimeout(timer)  ; 
           
    }, 1000);

    function calc_date_diff(now,countDownDate ){

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        if(distance >= 0){
            let days    = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
           
            const date =  { 
                  "days":days.toString().padStart(2, '0'), 
                  "hours":hours.toString().padStart(2, '0'), 
                  "minutes":minutes.toString().padStart(2, '0'), 
                  "seconds":seconds.toString().padStart(2, '0')};
            return date;        
        }

        return null;
    }


    function setDate(date){
        let date_visible = `  
            <div><p>${date.days }</p><p>Días</p></div>   
            <div><p>${date.hours}</p><p>Horas</p></div>   
            <div><p>${date.minutes}<br>Min</p></div>         
            <div><p>${date.seconds}<br>Seg</p></div>
            `;
        main_count.innerHTML = date_visible;
    }


}

