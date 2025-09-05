
function inloggning(här) {
  
  var div = länka_in('div', här.parentNode, '', {
      'id' : 'inloggning'
  });
  var h1 = länka_in('h1', div, 'Logga in');
  var p = länka_in('p', div, 'Välj inloggning:', {
  });
  
  var img = länka_in('img', div, '', {
      'src' : 'QR-till-E-leg-app-fast-fejk.png',
      'style' : 'display: block; margin: auto; width: 20%;min-width: 250px;'
  });
  
  var test = länka_in('div', div, '', {
      'class' : 'test',
      'style' : 'line-height:1rem'
  });
  var p = länka_in('p', test, 'Logga in som...', {
  });
  
  for (p in model['person']) {
    
    var person = model['person'][p];
    var id = 'person_' + p;
    
    var input = länka_in('input', test, '', {
        'id' : id,
        'name' : 'inloggad',
        'type' : 'radio',
        'value' : p,
        'oninput' : 'uppdatera("inloggad", "' + p + '")'
    });
    var label = länka_in('label', test, person.fnamn + ' ' + person.enamn + ' (' + JSON.stringify(person.behörighet) + ')', {
        'for' : id,
        'style' : 'font-size:x-small'
    });
    
  }
  
  var kör = länka_in('a', test, 'Logga in',  {
      'href' : '',
      'onclick' : 'document.getElementById("inloggning").setAttribute("style", "display:none");',
      'class' : 'knapp'
    
  });
  
}

function navigering(här) {
  
  var nav = länka_in('nav', här.parentNode, '', false, här.nextSibling);
  
}

function sätt_upp_navigation(header, skriv_rubrik=true) {
  
  var navigation = bestäm(model['meny'], model['parameter']['meny']); 
    
  if (!navigation) {
    
    return false;
    
  }
  
  var menyknapp = länka_in('input', header, '', {
      'type' : 'checkbox',
      'id' : 'menyknapp_huvudmeny',
      'style' : 'position: absolute; opacity: 0',
      'class' : 'menyknapp'
    
  });
  
  var label = länka_in('label', header, '≡', {
      'for' : 'menyknapp_huvudmeny',
      'class' : 'menyknapp'
  });
  
  var nav = länka_in('nav', header);
  
  var logga_ut = länka_in('button', nav, '⇥	Logga ut', {
      'onclick' : 'window.location = window.location.pathname',
      'value' : 'Logga ut',
      'class' : 'logga-ut'
      
  });
  
  navigationsblock(navigation, model['parameter']['sida'], nav, skriv_rubrik);
  
}

function navigationsblock(navigation, aktiv, plats, skriv_rubrik=true) {
  
  var ol = länka_in('ol', plats);
  
  for (var n in navigation) {
    
    if (!kolla_sida(navigation[n].sida)) {
      
      continue;
      
    }
    
    var li = länka_in('li', ol);
    var a = länka_in('a', li, navigation[n].namn,  {
        'href' : '?sida=' + navigation[n].sida,
        //'onclick' : 'uppdatera("sida","'+navigation[n].sida+'"); sätt_upp_sida(' + navigation[n].sida + ');return false;'
      
    });
    
    if (navigation[n].sida == aktiv) {
      
      a.setAttribute('class', 'aktiv');
      document.title = navigation[n].namn;
      
      if (skriv_rubrik) {
      
        var main = document.getElementsByTagName('main')[0];
        länka_in('h1', main, navigation[n].namn);
     
      }
      
    }
    
    var undersidor = bestäm(navigation[n], 'undersidor');
    
    if (undersidor) {
      
      navigationsblock(undersidor, aktiv, li, skriv_rubrik);
      
    }
    
  }
  
}

function kollaLokal() {
  
  if (!model['parameter']['lokalnamn']) {
    
    console.log('ingen lokal!');
    
    window.location.replace(uppdatera_url("?sida=valj_lokal"))
    
  }
  
}

function kollaLokalStatus() {
  console.log('lskdfjslkdfjsldkfjsdflkj', model['parameter']);
  if (model['parameter']['lokalstatus'] != 'ok') {
    
    console.log('lokalen stängd!');
    
    window.location.replace(uppdatera_url("?sida=oppna_stang_fortidsrostning"))
    
  }
  
}

function skanner(plats) {
  
  var input = plats.previousSibling;
  
  var id = input.id;
  
  var skanner_id = 'skanner_' + id;
  
  var skanner = länka_in('div', plats.parentNode, '', {
    
      'id' : skanner_id,
      'style' : 'width:300px;'
    
  });
  
  var formulär = input.form;
  
  var html5QrcodeScanner = new Html5QrcodeScanner(
  
    skanner_id, { 'fps': 20, 'qrbox': 200 }
    
  );
  
  html5QrcodeScanner.render(onScanSuccess);
  
  function onScanSuccess(decodedText, decodedResult) {
        
    input.value = decodedText;
    
    formulär.requestSubmit();

    html5QrcodeScanner.clear();
    
  }
  function onScanError(errorMessage) {
    // handle on error condition, with error message
    console.error(errorMessage);
    
  }

}

function loader(plats) {

  var laddningstider = ['0.5', '0.5', '0.5', '1', '1', '1', '1', '1', '1', '1.5', '1.5', '1.5', '1.5', '2', '2', '2', '2', '2', '2', '2', '2', '3', '3', '3', '4', '4', '5', '8', '15', '5'];

  var random = Math.floor(Math.random() * laddningstider.length);

  var s = laddningstider[random];
  
  window.scrollTo(0, 0);

  var container = länka_in('div', plats, null, {
      'style' : 'position:fixed; z-index: 100;width: 100%; background-color: white; height: 100%;top: 0;left:0; bottom:0;right:0;animation: loader_container ' + s + 's linear forwards;'
  });
  
  
  var spinner = länka_in('div', container, null, {
      'style' : 'position: fixed;width: 200px;height: 200px;left:30vw;top:10vw;border: 20px solid;border-color: lightblue transparent;border-radius: 50%;display: inline-block;box-sizing: border-box;outline: 4000px solid white; animation: loader 2s linear infinite;'
  });
  

  return spinner;

}

function kuvertIdTillNr(kuvertID, vallokaler) {
  //skapa nr i röstlängd utifrån ett kuvertID
  
  const multi = 10; //antal i samma valdistrikt
  const max_vd = 2139; //max antal i ett valdistrikt
  const nåt_halvstort_tal = 9876; //så att inte två idn efter varandra pekar på två nr efter varandra
  
  var id = Number(kuvertID) || 0;
  var antal = vallokaler.length;
  
  var antal_multi = antal * multi;
  
  //var index = id % antal;
  var index = Math.floor((id % antal_multi) / multi);
  var lan = vallokaler[index]['LÄNSKOD'];
  var kom = vallokaler[index]['KOMMUNKOD'];
  var vd = vallokaler[index]['VALDISTRIKTKOD'];
  
  var nr = id % max_vd;
  nr = (nåt_halvstort_tal * nr) % max_vd + 1;
  
  return lan + kom + vd + nr;
  
}


function koppla_kod(formulär) {
  
  //var kopplingskod = document.getElementById('koppla').value;
  //var personnummer = document.getElementById('valjare_pnr').value;
  
  //var main = document.getElementsByTagName('main')[0];
  //var spinner = loader(main);

  //alert('Kuvert med kopplingskod: ' + kopplingskod + '\nnu kopplad till personnummer: ' + personnummer);
  //window.location.reload();
  
}


function dropdown(kopplingar) {
  
  
  
}

function sökPersonnummer(plats, id='sok_form', labeltext=false, skanner=false) {
  
  if (labeltext) {
  
    var label = länka_in('label', plats, labeltext, {
        'for' : id + '_input',
        'style' : 'font-size: 0.7rem;display:block;line-height: 1rem;'
      
    });
  
  }
  var div = länka_in('div', plats, '', {
      'class' : 'textinput-och-knapp'
  });
  var input = länka_in('input', div, '', {
      'type' : 'text',
      'id' : id + '_input',
      'name' : id,
      'inputmode' : 'numeric',
      'required' : 'required',
      'maxlength' : '13',
      'pattern' : '(19|20)?[0-9]{2}(01|02|03|04|05|06|07|08|09|10|11|12)(01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31)[\\-]?[0-9]{4}',
      'onblur' : 'uppdatera("' + id + '", this.value, true)'
    
  });


  
  if (skanner) {
    
    var knapp = länka_in('input', div, '', {
        'type' : 'button',
        'value' : '[▦]',
        'style' : 'margin-left: -65px; font-size: 1.2rem',
        'onclick' : 'skanner(this)'
      
    });
    
  }
  
  var submit_knapp = länka_in('input', div, '', {
      'type' : 'submit',
      'value' : 'Sök'
    
  });
  
  return input;
  
}

function sok_person(sokform, svarssida='') {
  
  console.log('sok_person', svarssida);
  
  var sok_pnr = sokform.querySelector('input').value;
  
  pnr = sok_pnr.replace('-', '');
 
  var index = sok_pnr[sok_pnr.length - 1];
  
  person = model['person'][index];      
  
  /*
  var valjare_pnr = länka_in('input', document.getElementsByTagName('body')[0], '', {
      'type' : 'hidden',
      'value' : pnr,
      'id' : 'valjare_pnr'
  });
  */
  
  
  sätt_upp_sida(svarssida);
  

}


function dump(plats) {
  
  
  var menyknapp = länka_in('input', plats, '', {
      'type' : 'checkbox',
      'id' : 'menyknapp_dump',
      'style' : 'position: absolute; opacity: 0',
      'class' : 'menyknapp'
    
  });
  
  var label = länka_in('label', plats, '🚧', {
      'for' : 'menyknapp_dump',
      'class' : 'menyknapp',
      'style' : 'font-size:medium; float:right'
  });
  
  dumpblock(plats, model['parameter']);
  
}

function dumpblock(plats, data) {
  
 
  
  var dl = länka_in('dl', plats, '' , {'class' : 'test'});
   var p = länka_in('p', dl, '{testparametrar}');
  for (var d in data) {
    
    if (typeof data[d] == 'object') {
      
      var fieldset = länka_in('fieldset', plats);
      var legend = länka_in('legend', fieldset, d);
      dumpblock(fieldset, data[d]);
      continue;
      
    }
    
    var dt = länka_in('dt', dl);
    var label = länka_in('label', dt, d, {
      
        'for' : 'id_' + d
    });
    
    var dd = länka_in('dd', dl);
    var input = länka_in('input', dd, '', {
      
        'value' : bestäm(data, d, ''),
        'id' : 'id_' + d,
        'onfocus' : 'this.select()',
        'onblur' : 'uppdatera("' + d + '", this.value)'
      
    });
        
  }
  
  for (var p in model['person']) {
    
    var dt = länka_in('dt', dl, p);
    for (var q in model['person'][p]) {
      
      var dt = länka_in('dt', dl);
      var label = länka_in('label', dt, q, {
        
          'for' : 'id_' + p + '_' + q
      });
      
      var dd = länka_in('dd', dl);
      var input = länka_in('input', dd, '', {
        
          'value' : model['person'][p][q],
          'id' : 'id_' + p + '_' + q,
          'onfocus' : 'this.select()',
          'onblur' : 'model["person"][' + p + ']["' + q + '"] = this.value'
        
      });      
      
    }
    
  }
  
}