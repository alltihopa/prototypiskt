var get_parametrar = {};
var model = {};

var person = null;

/*

datum
tid
beh-omrade
beh-funkt
beh-

*/

window.onload = function() {
    
  ladda_data();
  
}

function ladda_get_parametrar() {
  
  if (window.location.search) {
      
    var url = decodeURI(window.location.search);
    
    var delar = url.substring(1).split('&');
    
    for (var i = 0; i < delar.length; i++) {
      
      var parameter = delar[i].split('=');
      
      if (!parameter[0]) continue;
      
      model['parameter'][parameter[0]] = parameter[1] || '';
      
      get_parametrar[parameter[0]] = parameter[1] || '';
        
    }
    
  }
  
  console.log(model['parameter']);
  
}

function ladda_data() {
  
  ladda_jox('GET', 'data.json', false, function (response) {
    
    model = JSON.parse(response);
    
    ladda_jox('GET', 'personer.csv', false, function (response) {
    
      model['person'] = läs_csv(response);
      
      ladda_get_parametrar();
      
      sätt_upp_sida();
      
      uppdatera();
      
      console.log(model);

      return false;
    
    });

    return false;
  
  });
  
}

function läs_csv(csv) {
  
  if (!csv) {
    
    return false;
    
  }
  
  const d = ';';
  const n = '\n';
  
  var rader = csv.split(n);
  var rubriker = rader.shift().trim().split(d);
  
  for (let i = 0; i < rubriker.length-1; i++) {
    
    rubriker[i] = rubriker[i].trim();

  }

  var mål = [];

  for (let i = 0; i < rader.length; i++) {
    
    var rad = rader[i].trim().split(d);
    
    mål[i] = [];
    
    for (let j = 0; j < rad.length-1; j++) {
      
      mål[i][rubriker[j]] = rad[j].trim();

    }
    
  }
  
  return mål;
  
}

function bestäm(mängd={}, namn=false, värde=false) {

  if (mängd[namn]) {
    värde = mängd[namn];
  }
  
  if (namn in mängd) {
    värde = mängd[namn];
  }

  return värde;
  
}

function sätt_upp_sida(sida=false) {
  
  if (sida) {
    
    efterfrågad_sida = sida;
    
  } else {
  
    efterfrågad_sida = bestäm(model['parameter'], 'sida');
  
  }
  
  console.log('sätter upp sidan ' + efterfrågad_sida);
  
  if (!kolla_sida(efterfrågad_sida)) {
    
    window['sidan_finns_inte']();
    
    return false;
    
  }
  
  window[efterfrågad_sida]();

  return true;
    
}

function kolla_sida(sida) {
  
  if (typeof window[sida] != 'function') {
    
    console.log(sida + ' finns inte');
    return false;
    
  }

  return true;
  
}

function uppdatera(namn=false, värde=false, lokal=false) {
  
  console.log('uppdatera: ' + namn + '=' + värde, 'lokal=' + lokal);
  model[namn] = värde;
  console.log(model);
  if (lokal) {
    
    return;
    
  }


  var nytt = {};
  
  if (värde) {
  
    get_parametrar[namn] = värde;
    
    nytt[namn] = värde;
  
  }
  
  //byt ut alla a så att parametrar finns med i url
  console.log('uppdatera länkar: ' + namn + '=' + värde);
  
  var länkar = document.getElementsByTagName('a');
  
  for (var l of länkar) {
    
    var grund = l.href;
    var delar = [];
    var länk_param = [];
    var parameter_url = '?';
    
    if (l.href.indexOf('?') > -1) {
    
      grund = l.href.split('?')[0];
      
      delar = l.href.split('?')[1].split('&');
          
    }
    
    for (var d in delar) {
      
      var del_namn = delar[d].split('=')[0];
      var del_värde = delar[d].split('=')[1];
      
      länk_param[del_namn] = del_värde;
      
    }

    var allt = Object.assign({}, get_parametrar, länk_param, nytt);
    
    for (var a in allt) {
      if (a == namn && värde == '') {
        
        console.log(a + '=' + värde);

        continue;
        
      }        
      
      parameter_url += a + '=' + allt[a] + '&';
      
    }
    parameter_url = parameter_url.substring(0, parameter_url.length - 1);
    
    l.href = grund + parameter_url;
    
  }
    
}

function hitta_i_datat(start=model, namn, värde, skoja_till_det=false) {
  
  for (var s in start) {
    if (typeof start[s][namn] == 'undefined') {
      
      continue;
      
    }

   // if (start[s][namn] == värde) {
    if (start[s][namn].indexOf(värde) !== -1) {  
    
      return start[s];
      
    }
    
  }
  
  return false;
  
}

function ladda_jox(method, url, data, callback) {
    
  var xhttp = new XMLHttpRequest();
  
  data = data || false;
  
  console.log(method, url, data);
  
  xhttp.onreadystatechange = function() {
      
    if (this.readyState == 4) {
        
      if (callback) {
          
        callback(xhttp.response);
          
      }
        
    }
      
  };
  
  xhttp.open(method, url, true);
  xhttp.send(data);

}

function länka_in(tag, förälder, text='', attribut=false, före=false) {
  
  var nod = document.createElement(tag);
  
  if (text) {
    
    textnod = document.createTextNode(text);
    
    nod.appendChild(textnod);
    
  }
  
  if (attribut) {
    
    for (var i in attribut) {
      
      nod.setAttribute(i, attribut[i]);
      
    }
    
  }
  
  if (före) {
    
    före.parentNode.insertBefore(nod, före);
    
  } else {
    
    förälder.appendChild(nod);
    
  }
  
  return nod;
  
}