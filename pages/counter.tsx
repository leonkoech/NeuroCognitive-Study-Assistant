function startTimer(duration: number, display:any ) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = Math.floor(timer / 60)
        seconds = Math.floor(timer % 60)

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
const counter=()=>{
    if (typeof window !== "undefined") {
    var fiveMinutes = 60 * 50,
    
    display = document.getElementById('time');
startTimer(fiveMinutes, display);}
return(
    <div>
        <div><span id="time">50:00</span></div>
        <div>end session</div>
    </div>
    
)

}
export default counter;