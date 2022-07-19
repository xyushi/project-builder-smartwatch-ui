let wrngnum = [0,1,2,3,4,5,6,7,8,9]
let rghtnum = ['00','01','02','03','04','05','06','07','08','09']
let today = new Date()
let day = today.getDay()
let hour = today.getHours()
if (wrngnum.indexOf(hour)>-1) {
    hour = rghtnum[wrngnum.indexOf(hour)]
}
let min = today.getMinutes()
if (wrngnum.indexOf(min)>-1) {
    min = rghtnum[wrngnum.indexOf(min)]
}
let daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
document.getElementById("time").innerHTML=hour+":"+min
document.getElementById("time2").innerHTML=hour+":"+min
document.getElementById("day").innerHTML=daylist[day]