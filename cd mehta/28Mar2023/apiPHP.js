fetch('http://127.0.0.1/APISTUDENTS/studentread.php')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    var trdata="";
    const mydata=data.map((cval)=>{
        trdata+=`<tr>
        <td>${cval.stud_id}</td>
       
    </tr>`;
    })
    document.getElementById("data").innerHTML=trdata;
})