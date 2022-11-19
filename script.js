soilsensor();

function soilsensor() {
  //ss1
fetch('https://blr1.blynk.cloud/external/api/get?token=APuw3xTam8hTBHUTbSpt-c36Hf2HO2x0&v2').then((data)=>{
  return data.json();
}).then((completedata)=>{
  console.log(completedata);
  document.getElementById('value1').innerHTML= completedata;
});

//ss2
fetch('https://blr1.blynk.cloud/external/api/get?token=APuw3xTam8hTBHUTbSpt-c36Hf2HO2x0&v3').then((data)=>{
  return data.json();
}).then((completedata)=>{
  console.log(completedata);
  document.getElementById('value2').innerHTML= completedata;
});

//ss3
fetch('https://blr1.blynk.cloud/external/api/get?token=APuw3xTam8hTBHUTbSpt-c36Hf2HO2x0&v4').then((data)=>{
  return data.json();
}).then((completedata)=>{
  console.log(completedata);
  document.getElementById('value3').innerHTML= completedata;
});

//ss4
fetch('https://blr1.blynk.cloud/external/api/get?token=APuw3xTam8hTBHUTbSpt-c36Hf2HO2x0&v5').then((data)=>{
    return data.json();
  }).then((completedata)=>{
    console.log(completedata);
    document.getElementById('value4').innerHTML= completedata;
  });

}


  setInterval(soilsensor, 5000 );
//temp
temp()

function temp() {
  fetch('https://blr1.blynk.cloud/external/api/get?token=APuw3xTam8hTBHUTbSpt-c36Hf2HO2x0&v0').then((data)=>{
    return data.json();
  }).then((completedata)=>{
    console.log(completedata);
    document.getElementById('value5').innerHTML= completedata;
  });
}
setInterval(temp, 5000 );

//hum
hum()

function hum() {
  fetch('https://blr1.blynk.cloud/external/api/get?token=APuw3xTam8hTBHUTbSpt-c36Hf2HO2x0&v1').then((data)=>{
    return data.json();
  }).then((completedata)=>{
    console.log(completedata);
    document.getElementById('value6').innerHTML= completedata;
  });
}
setInterval(hum, 5000 );

//n
n()
function n() {
  fetch('https://blr1.blynk.cloud/external/api/get?token=APuw3xTam8hTBHUTbSpt-c36Hf2HO2x0&v7').then((data)=>{
    return data.json();
  }).then((completedata)=>{
    console.log(completedata);
    document.getElementById('value7').innerHTML= completedata;
  });
}
setInterval(n , 5000);

//p
p()
function p() {
  fetch('https://blr1.blynk.cloud/external/api/get?token=APuw3xTam8hTBHUTbSpt-c36Hf2HO2x0&v8').then((data)=>{
    return data.json();
  }).then((completedata)=>{
    console.log(completedata);
    document.getElementById('value8').innerHTML= completedata;
  });
}
setInterval(p , 5000);



//k
k()
function k() {
  fetch('https://blr1.blynk.cloud/external/api/get?token=APuw3xTam8hTBHUTbSpt-c36Hf2HO2x0&v9').then((data)=>{
    return data.json();
  }).then((completedata)=>{
    console.log(completedata);
    document.getElementById('value9').innerHTML= completedata;
  });
}
setInterval(k , 5000);