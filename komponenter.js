
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
        'oninput' : 'logga_in(' + p + ')'
    });
    var label = länka_in('label', test, person.fnamn + ' ' + person.enamn, {
        'for' : id,
        'style' : 'font-size:x-small'
    });

/*     var label = länka_in('label', test, person.fnamn + ' ' + person.enamn + ' (' + JSON.stringify(person.behörighet) + ')', {
        'for' : id,
        'style' : 'font-size:x-small'
    });
 */    
  }
  
}

function navigering(här) {
  
  var nav = länka_in('nav', här.parentNode, '', false, här.nextSibling);
  
}

function sätt_upp_navigation(header, skriv_rubrik=true) {
  
  var navigation = bestäm(model['menyer'], model['meny']); 
    
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
      'onclick' : 'window.location.reload();',
      'value' : 'Logga ut',
      'class' : 'logga-ut'
      
  });
   var full = länka_in('button', nav, '⇥	Full skärm', {
      'onclick' : 'fullscreen()',
      'value' : 'Full',
      'class' : 'logga-ut'
      
  });
  navigationsblock(navigation, model['sida'], nav, skriv_rubrik);
  
}

function navigationsblock(navigation, aktiv, plats, skriv_rubrik=true) {
  
  var ol = länka_in('ol', plats);
  
  for (var n in navigation) {
    
    if (!kolla_sida(navigation[n].sida)) {
      
      continue;
      
    }
    
    var li = länka_in('li', ol);
    var a = länka_in('a', li, navigation[n].namn,  {
        //'href' : '?sida=' + navigation[n].sida,
        'href' : '#',
        //'onclick' : 'uppdatera("sida","'+navigation[n].sida+'"); sätt_upp_sida();return false;'
        'onclick' : 'till("'+navigation[n].sida+'")'
    });
    
    if (navigation[n].sida == aktiv) {
      
      a.setAttribute('class', 'aktiv');
      document.title = navigation[n].namn;
      
    }
    
    var undersidor = bestäm(navigation[n], 'undersidor');
    
    if (undersidor) {
      
      navigationsblock(undersidor, aktiv, li, skriv_rubrik);
      
    }
    
  }
  
}

function till(sida=false) {
  console.log('Till ' + sida);
  if (!sida) {
    if (model['sida']) {
      
      sida = model['sida'];
      
    } else {
    
      sida = model['menyer'][model['meny']][0]['sida'];
    
    }
    
  }
  
  uppdatera('sida', sida);
  
  sätt_upp_sida(sida);
  
  var huvudmeny = document.getElementById('menyknapp_huvudmeny');
  
  if (huvudmeny.checked) {
    
    huvudmeny.checked = false;
    
  }
  
  return false;
  
}

function logga_in(nr) {
  
  model['inloggad'] = model['person'][nr];
  
  till();
  
}

function kollaLokal() {
  
  if (!bestäm(model, 'lokalid')) {
    
    console.log('ingen lokal!');
    
    till('valj_lokal');
    
    return false;
    
  }
  
  return true;
  
}

function kollaVallokal() {
  
  if (!bestäm(model, 'lokalid')) {
    
    console.log('ingen vallokal!');
    
    till('valj_vallokal');
    
    return false;
    
  }
  
  return true;
  
}


function kollaLokalStatus() {
  
  /*
  
  if (bestäm(model, 'lokalstatus') != 'ok') {
    
    console.log('lokalen stängd!');
    
    till('oppna_stang_fortidsrostning');
    
    return false;
    
  }
  */
  return true;
  
}

function hållpunkt(sida) {
  
  model['sida'] = sida;
  
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

//  var laddningstider = ['0.5', '0.5', '0.5', '1', '1', '1', '1', '1', '1', '1.5', '1.5', '1.5', '1.5', '2', '2', '2', '2', '2', '2', '2', '2', '3', '3', '3', '4', '4', '5', '8', '15', '5'];

  var laddningstider = ['0.5', '0.5', '0.5'];


  var random = Math.floor(Math.random() * laddningstider.length);

  var s = laddningstider[random];
  
  window.scrollTo(0, 0);

  var container = länka_in('div', plats, null, {
      'style' : 'position:fixed; z-index: 100;width: 100vw; background-color: white; height: 100vh;top: 0;left:0; bottom:0;right:0;animation: loader_container ' + s + 's linear forwards;'
  });
  
  
  var spinner = länka_in('div', container, null, {
      'style' : 'position: fixed;width: 20vw;height: 20vw;left:40vw;top:20vh;border: 10px solid;border-color: lightblue transparent;border-radius: 50%;display: inline-block;box-sizing: border-box;outline: 4000px solid white; animation: loader 2s linear infinite;'
  });
  

  return spinner;

}

function statistikGrej(plats) {
  
  //antal mottagna röster
  //stanna 
  //lämna
  //
  
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
 // nr = ('0000' + nr).substr(-4,4);
  
  return lan + kom + vd + nr;
  
}

function kort_kod (lång_kod) {
  //00273215400006505499420171214031712143201239012345678
  //000 065 054 99
  
  //
  
  lång_kod = lång_kod.split(' ');
  lång_kod = lång_kod.join('');
  
  lång_kod = lång_kod.replace('002732154', '');
  lång_kod = lång_kod.replace('420171214031712143201239012345678', '');
  
  return lång_kod;
  
}


function sista_nr (nr) {
  
  return nr % model['antalvnr'] > 0 ? false : true;
  
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
      'class' : 'sok-personnummer',
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
  
  console.log('sok_person');
  
  var sok_pnr = sokform.querySelector('.sok-personnummer').value;
  
  
  console.log(sok_pnr);
  pnr = sok_pnr.replace('-', '');
 
  var index = Number(pnr[pnr.length - 6] + pnr[pnr.length -5]);

  person = model['person'][index];
  
  sätt_upp_sida(svarssida);
  
}

function laddaOmOmBack() {
  
  var perfEntries = performance.getEntriesByType("navigation");

  if (perfEntries[0].type === "back_forward") {
      window.location.reload();
  }
  
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
  
  var div = länka_in('div', plats, '' , {'class' : 'test'});
 
  dumpblock(div, model);
  
}

function dumpblock(plats, data) {
  
 
  var div = länka_in('dl', plats, '' , {'class' : 'test'});
  var dl = länka_in('dl', plats, '' , {'class' : 'test'});
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
  
/*   for (var p in model['person']) {
    
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
 */  
}