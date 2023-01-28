setInterval(() => {
    let t = new Date()
    let time =  t.getHours() + ' : ' + t.getMinutes() + ' : ' + t.getSeconds() ;
    let date = t.toLocaleDateString() ;
    document.getElementById('clock').innerHTML = time;
    document.getElementById('date').innerHTML = date;
}, 1000);


