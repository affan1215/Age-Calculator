document.querySelector("#submit").addEventListener("click",function(){
    const update =function(){
        let dob=document.querySelector("#dob").value,
        day=new Date(dob),
        time=day.getTime(),
        today=new Date(),
        timenow=today.getTime(),
        value=timenow-time,
        sec=Math.floor(value/1000),
        min=Math.floor(value/(1000*60)),
        hour=Math.floor(value/(1000*60*60)),
        days=Math.floor(value/(1000*60*60*24)),
        week=Math.floor(value/(1000*60*60*24*7)),
        month=Math.floor(value/(1000*60*60*24*30.4375)),
        year=Math.floor(value/(1000*60*60*24*365.25));

        let insert=function(x,y){
            document.querySelector(x).innerHTML=y;
        }
            insert("#year",year+"Your Age in Years" );
            insert("#month",month +"Your Age in Months");
            insert("#week",week +"Your Age in Week");
            insert("#day",days +"Your Age in Days");
            insert("#hour",hour +"Your Age in Hours");
            insert("#min",min +"Your Age in Minutes");
            insert("#sec",sec +"Your Age in Seconds");

        }
        setInterval(update,1000);

    })
