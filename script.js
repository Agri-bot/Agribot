soilsensor();

function soilsensor() {
  //ss1
fetch('https://blr1.blynk.cloud/external/api/get?token=kItwL6-9TrM_OSUNbnrpymiClguiG76L&v2').then((data)=>{
  return data.json();
}).then((completedata)=>{
  console.log(completedata);
  document.getElementById('value1').innerHTML= completedata;
});

//ss2
fetch('https://blr1.blynk.cloud/external/api/get?token=kItwL6-9TrM_OSUNbnrpymiClguiG76L&v3').then((data)=>{
  return data.json();
}).then((completedata)=>{
  console.log(completedata);
  document.getElementById('value2').innerHTML= completedata;
});

//ss3
fetch('https://blr1.blynk.cloud/external/api/get?token=kItwL6-9TrM_OSUNbnrpymiClguiG76L&v4').then((data)=>{
  return data.json();
}).then((completedata)=>{
  console.log(completedata);
  document.getElementById('value3').innerHTML= completedata;
});

//ss4
fetch('https://blr1.blynk.cloud/external/api/get?token=kItwL6-9TrM_OSUNbnrpymiClguiG76L&v5').then((data)=>{
    return data.json();
  }).then((completedata)=>{
    console.log(completedata);
    document.getElementById('value4').innerHTML= completedata;
  });

}


  setInterval(soilsensor, 2000 );
//temp
temp()


function temp() {
  fetch('https://blr1.blynk.cloud/external/api/get?token=kItwL6-9TrM_OSUNbnrpymiClguiG76L&v0').then((data)=>{
    return data.json();
  }).then((completedata)=>{
    console.log(completedata);
    document.getElementById('value5').innerHTML= completedata;
  });
}
setInterval(temp, 2000 );

//hum
hum()

function hum() {
  fetch('https://blr1.blynk.cloud/external/api/get?token=kItwL6-9TrM_OSUNbnrpymiClguiG76L&v1').then((data)=>{
    return data.json();
  }).then((completedata)=>{
    console.log(completedata);
    document.getElementById('value6').innerHTML= completedata;
  });
}
setInterval(hum, 2000 );

//met
met()

function met() {
  fetch('https://blr1.blynk.cloud/external/api/get?token=kItwL6-9TrM_OSUNbnrpymiClguiG76L&v6').then((data)=>{
    return data.json();
  }).then((completedata)=>{
    console.log(completedata);
    document.getElementById('value7').innerHTML= completedata;
  });
}
setInterval(met, 2000 );

//rain
rain()

var rain;

function rain() {
  fetch('https://blr1.blynk.cloud/external/api/get?token=kItwL6-9TrM_OSUNbnrpymiClguiG76L&v10').then((data)=>{
    return data.json();
  }).then((completedata)=>{
    console.log(completedata);
    rain = completedata;

    if(rain == 1)
    {
      document.getElementById('value11').innerHTML = "It's raining";
    }else
    {
      document.getElementById('value11').innerHTML = "It isn't raining";
    }

  });
}
setInterval(rain, 2000 );

//n
n()
function n() {
  fetch('https://blr1.blynk.cloud/external/api/get?token=kItwL6-9TrM_OSUNbnrpymiClguiG76L&v7').then((data)=>{
    return data.json();
  }).then((completedata)=>{
    console.log(completedata);
    document.getElementById('value8').innerHTML= completedata;
  });
}
setInterval(n , 2000);

//p
p()
function p() {
  fetch('https://blr1.blynk.cloud/external/api/get?token=kItwL6-9TrM_OSUNbnrpymiClguiG76L&v8').then((data)=>{
    return data.json();
  }).then((completedata)=>{
    console.log(completedata);
    document.getElementById('value9').innerHTML= completedata;
  });
}
setInterval(p , 2000);



//k
k()
function k() {
  fetch('https://blr1.blynk.cloud/external/api/get?token=kItwL6-9TrM_OSUNbnrpymiClguiG76L&v9').then((data)=>{
    return data.json();
  }).then((completedata)=>{
    console.log(completedata);
    document.getElementById('value10').innerHTML= completedata;
  });
}
setInterval(k , 2000);
