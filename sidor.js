function sätt_upp_basic_sida(kräv_inloggad=true) {
  
  console.log('sätt_upp_basic_sida');
    
  var head = document.getElementsByTagName('head')[0];
  
  var body = document.getElementsByTagName('body')[0];
  
  var header = länka_in('header', body);
  var main = länka_in('main', body, '', {
      'id' : 'main'
  });
  var footer = länka_in('footer', body);
  
  sätt_upp_navigation(header);
  
  dump(footer);
  
  if (kräv_inloggad) {
    
    model['inloggad'] = bestäm(model['person'], model['parameter']['inloggad']);
    
    if (!model['inloggad']) {
      
      console.log('Ingen är inloggad');
      
      inloggning(main);
      
    }

  }
    
  return main;
  
}



function start() {
  console.log('start');
  var main = sätt_upp_basic_sida();
  console.log(model['inloggad']);
  var hej = länka_in('h1', main, 'Hej ' + model['inloggad'].fnamn + '!');
  länka_in('p', main, 'Välkommen till mina sidor!');
  var a = länka_in('a', main, '', {
    'href' : '?sida=valjare',
    'class' : 'blocklink'
  });
  länka_in('span', a, 'Jag som väljare');
  länka_in('div', a, 'För dig som vill/får rösta');

  var a = länka_in('a', main, '', {
    'href' : '?sida=parti',
    'class' : 'blocklink'
  });
  länka_in('span', a, 'Jag som partiföreträdare');
  länka_in('div', a, 'För dig som på något sätt representerar ett parti');
  
  var är_funktionär = typeof model['inloggad']['behörighet'] === 'object';
  
  if (är_funktionär) {
    var a = länka_in('a', main, '', {
      'href' : '?sida=valfunktionar',
      'class' : 'blocklink'
    });
    länka_in('span', a, 'Jag som valfunktionär');
    länka_in('div', a, 'För dig som jobbar med valet');
  
  }
  

}

function valjare() {
  console.log('valjare');
  var main = sätt_upp_basic_sida();
  
 // länka_in('p', main, 'Jag som väljare');

  var a = länka_in('a', main, '', {
    'href' : '?sida=rostratt',
    'class' : 'blocklink'
  });
  länka_in('span', a, 'Min rösträtt');
  var div = länka_in('div', a);
  
  if (model['inloggad']['rd'].length > 1) {
    var ri = länka_in('div', div, 'Riksdag', {
        'class' : 'riksdag'
    });
  }
  if (model['inloggad']['rf'].length > 1) {
    var re = länka_in('div', div, 'Region', {
        'class' : 'region'
    });
  }
  if (model['inloggad']['kf'].length > 1) {
    var ko = länka_in('div', div, 'Kommun', {
        'class' : 'kommun'
    });
  }
  if (model['inloggad']['eu'].length > 1) {
    var fo = länka_in('div', div, 'EU', {
        'class' : 'eu'
    });
  }
  if (model['inloggad']['st'].length > 1) {
    var fo = länka_in('div', div, 'Sameting', {
        'class' : 'sameting'
    });
  }
  if (model['inloggad']['fo'].length > 1) {
    var fo = länka_in('div', div, 'Folkomr.', {
        'class' : 'folkomr'
    });
  }
  var a = länka_in('a', main, '', {
    'href' : '?sida=rostlangd',
    'class' : 'blocklink'
  });
  länka_in('span', a, 'Jag i röstlängden');
  länka_in('div', a, 'Valdistriktet X');

  var a = länka_in('a', main, '', {
    'href' : '?sida=rosta',
    'class' : 'blocklink'
  });
  länka_in('span', a, 'Jag vill rösta');
  länka_in('div', a, 'Söderbärkeskolan');
  länka_in('div', a, 'Förtidsrösta');

  
}

function rostratt() {
  console.log('rostratt');
  var main = sätt_upp_basic_sida();
  
  länka_in('p', main, 'Baserat på de uppgifter som Valmyndigheten har om dig, skulle du få följande rösträtt om det vore val idag:');
  
  var div = länka_in('div', main, '', {
    'style' : 'display:flex; flex-direction: column; gap: 10px;'
    
  });

  if (model['inloggad']['rd'].length > 1) {
    var ri = länka_in('div', div, model['inloggad']['rd'].split(',')[0], {
        'class' : 'riksdag'
    });
  }
  if (model['inloggad']['rf'].length > 1) {
    var re = länka_in('div', div, model['inloggad']['rf'], {
        'class' : 'region'
    });
  }
  if (model['inloggad']['kf'].length > 1) {
    var ko = länka_in('div', div, model['inloggad']['kf'], {
        'class' : 'kommun'
    });
  }
  if (model['inloggad']['eu'].length > 1) {
    var fo = länka_in('div', div, model['inloggad']['eu'], {
        'class' : 'eu'
    });
  }
  if (model['inloggad']['st'].length > 1) {
    var fo = länka_in('div', div, model['inloggad']['st'], {
        'class' : 'sameting'
    });
  }
  if (model['inloggad']['fo'].length > 1) {
    var fo = länka_in('div', div, model['inloggad']['fo'], {
        'class' : 'folkomr'
    });
  }


  
  
  var details = länka_in('details', main);
  var summary = länka_in('summary', details, 'Inget val på gång');
  var div = länka_in('div', details);
  var p = länka_in('p', div, 'Men för att få rösta måste du stå i en röstlängd. Just nu är det inget val på gång och därmed är ingen röstlängd upprättad.');
  
  var details = länka_in('details', main);
  var summary = länka_in('summary', details, 'Val på gång');
  
  var a = länka_in('a', details, '', {
    'href' : '?sida=rostlangd',
    'class' : 'blocklink'
  });
  
  länka_in('span', a, 'Min plats i röstlängden');
  länka_in('div', a, 'Valdistrikt X');
 
  
  länka_in('p', main, 'Kanske även:');
  
  länka_in('p', main, 'Givet din ålder kommer du få rösträtt första gången vid valet X. (för ung)');
  länka_in('p', main, 'Givet din ålder har du haft rösträtt vid X antal val.');
  
}

function rosta() {
  console.log('rosta');
  var main = sätt_upp_basic_sida();

  länka_in('p', main, 'Den X september är det val. Då kan du rösta i din vallokal:');
  länka_in('p', main, 'Skolan.');
  länka_in('p', main, 'Det här är mina alternativa sätt som jag kan rösta på.');

  var details = länka_in('details', main);
  var summary = länka_in('summary', details, 'Inget val på gång');
  var div = länka_in('div', details);
  var p = länka_in('p', div, 'Inget val ännu. Du kan inte rösta ännu.');


  länka_in('p', main, 'Även - det här är mina alternativ som jag kan rösta på.');
  

  

  
}
function rostlangd() {
  console.log('rostlangd');
  var main = sätt_upp_basic_sida();
  
  länka_in('p', main, 'Det räcker inte med att ha rösträtt - du måste finnas skriven i en röstlängd för att få rösta.');
  
  
  var details = länka_in('details', main);
  var summary = länka_in('summary', details, 'Ingen röstlängd');
  var div = länka_in('div', details);
  länka_in('p', div, 'Just nu finns det ingen röstlängd sammanställd.');
  länka_in('p', div, 'Nästa val är den X september. Röstlängden kommer att sammanställas inför detta val den X mars.');

  var details = länka_in('details', main);
  var summary = länka_in('summary', details, 'Inte med');
  var div = länka_in('div', details);
  länka_in('p', div, 'Röstlängden finns nu upprättad inför valet den X september.');
  länka_in('p', div, 'Men du är inte med.');
  
  var details = länka_in('details', main);
  var summary = länka_in('summary', details, 'Preliminär röstlängd');
  var div = länka_in('div', details);
  länka_in('p', div, 'Just nu finns det en preliminär röstlängd sammanställd inför nästa val den X september. Den används för att...');
  länka_in('p', div, 'Här är de uppgifter som finns om dig:');

  var details = länka_in('details', main);
  var summary = länka_in('summary', details, 'Slutlig röstlängd');
  var div = länka_in('div', details);
  länka_in('p', div, 'Röstlängden finns nu upprättad inför valet den X september.');
  länka_in('p', div, 'Här är de uppgifter som finns om dig:');
  
  var ul = länka_in('ul', main);
  var li = länka_in('li', ul, 'Nr. i röstlängd');
  var li = länka_in('li', ul, 'Valdistriktets namn');
  var li = länka_in('li', ul, 'Totalt antal i röstlängden?');
  var li = länka_in('li', ul, 'Länk till karta');
  
  var p = länka_in('p', main, 'Se även');
  var ul = länka_in('ul', main);
  var li = länka_in('li', ul, 'Min vallokal');

}

function anmal_rostlangd() {
  console.log('anmal_rostlangd');
  var main = sätt_upp_basic_sida();
  
  länka_in('p', main, 'Jag vill anmäla mig till röstlängden');
  länka_in('p', main, 'Hej');
  

  

  
}
function hur_gick_det() {
  console.log('hur_gick_det');
  var main = sätt_upp_basic_sida();
  
  länka_in('p', main, 'Hur gick det i valet?');
  länka_in('p', main, 'Hej');
  

  

  
}

function parti() {
  console.log('parti');
  var main = sätt_upp_basic_sida();
  
  var details = länka_in('details', main);
  var summary = länka_in('summary', details, 'Inget parti');
  var p = länka_in('p', details, 'Enligt våra uppgifter förträder du inget parti.');
  
  var a = länka_in('a', details, '', {
    'href' : '?sida=kandidat',
    'class' : 'blocklink'
  });
  
  länka_in('span', a, 'Men nu vill jag kandidera');
  länka_in('div', a, '4637 kandidater hittills.');

  var a = länka_in('a', details, '', {
    'href' : '?sida=partiombud',
    'class' : 'blocklink'
  });
  
  länka_in('span', a, 'Men nu vill jag skapa ett nytt parti');
  länka_in('div', a, '432 partier hittills.');
  
  
  länka_in('p', main, 'Jag som partiföreträdare');
  
}
function kandidat() {
  console.log('kandidat');
  var main = sätt_upp_basic_sida();
  
  länka_in('p', main, 'Jag är kandidat, eller vill bli kandidat.');
  länka_in('p', main, 'Skicka in samtycke');
  länka_in('p', main, 'Svara på förfrågan om kandidatur. Parti X har satt upp dig som kandidat. Är det ok?');
  länka_in('p', main, 'Här är mina kandidaturer:');
  länka_in('p', main, 'Här är mina tidigare kandidaturer:');
  länka_in('p', main, 'Här är mina personröster:');
  länka_in('p', main, 'Här kan jag bli vald:');
  
}
function vald() {
  console.log('vald');
  var main = sätt_upp_basic_sida();
  
  länka_in('p', main, 'Jag är vald, eller ersättare. Eller jag har varit?');
  länka_in('p', main, 'Här är de platser där jag är vald eller ersättare.');
  länka_in('p', main, 'Här står jag på tur att bli vald eller ersättare.');
  länka_in('p', main, 'Om jag skulle avgå, då ersätts jag av...');
  länka_in('p', main, 'Tryck här för att avgå.');

  
}
function partiombud() {
  console.log('partiombud');
  var main = sätt_upp_basic_sida();
  
  länka_in('p', main, 'Jag är partiombud');
  länka_in('p', main, 'Jag kan anmäla deltagande.');
  länka_in('p', main, 'Jag kan anmäla registrerad partibeteckning.');
  länka_in('p', main, 'Jag kan se mina potentiella kandidater.');
  länka_in('p', main, 'Jag kan beställa valsedlar.');
  länka_in('p', main, 'Jag kan ändra min partibeteckning eller ladda upp ny symbol.');

  

  
}

function valfunktionar() {
  console.log('valfunktionar');
  var main = sätt_upp_basic_sida();
  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', 'valfunk');
  var är_funktionär = typeof model['inloggad']['behörighet'] === 'object';
  
  var details_inte = länka_in('details', main);
  var summary = länka_in('summary', details_inte, 'Jag är inte valfunktionär');
  var div = länka_in('div', details_inte);
  var p = länka_in('p', div, 'Du verkar inte vara registrerad för att jobba med val.');
  var p = länka_in('p', div, 'Vill du jobba med valet? Kontakta din kommun eller länsstyrelsen.');
  
  var details = länka_in('details', main);
  var summary = länka_in('summary', details, 'Jag är valfunktionär, men inget att göra just nu');
  var div = länka_in('div', details);
  var p = länka_in('p', div, 'Du är registrerad som valfunktionär i kommun X.');
  var p = länka_in('p', div, 'Men inga funktioner är öppna för tillfället. Vi ses!');

  var details_är = länka_in('details', main);
  var summary = länka_in('summary', details_är, 'Jag är valfunktionär');

  
  if (är_funktionär) {
    
    länka_in('p', details_är, 'Jag har befogenhet att göra följande arbetsuppgifter:');
    
    details_är.setAttribute('open', 'open');
    
    for (var i in model['inloggad']['behörighet']) {
      
      var beh = model['inloggad']['behörighet'][i];

      if (i.indexOf('FR') > -1) {
        
          var a = länka_in('a', details_är, '', {
            'href' : '?sida=ta_emot_fortidsrost',
            'class' : 'blocklink'
          });
          
          länka_in('span', a, 'Registrera förtidsröst');
          länka_in('div', a, model['inloggad']['behörighet'][i]);

        
        continue;
        
      }
      if (i.indexOf('VL') > -1)  {
        
        var a = länka_in('a', details_är, '', {
          'href' : '?sida=ta_emot_rost',
          'class' : 'blocklink'
        });
        
        länka_in('span', a, 'Ta emot röst');
        länka_in('div', a, model['inloggad']['behörighet'][i]);
        
        continue; 
        
      }
      länka_in('p', details_är, i + ' = ' + model['inloggad']['behörighet'][i]);
      
    }
    
  } else {
    
    details_inte.setAttribute('open', 'open');
    
  }
  
}

function vallokal() {
  console.log('vallokal');
  var main = sätt_upp_basic_sida();
  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', 'valfunk');
  var är_funktionär = typeof model['inloggad']['behörighet'] === 'object';

  
  länka_in('p', main, 'Här kan man välja lokal som man har behörighet till!');
  länka_in('p', main, 'Har man bara behörighet till en, så är den vald automatiskt. Valet är då osynligt.');
  
  if (är_funktionär) {
    
    if (model['inloggad']['behörighet']['VL']) {
    
      ladda_jox('GET', 'vallokaler.csv', false, function (response) {
        
        var lokaler = läs_csv(response, [0, 2, 7]);
        
        länka_in('p', main, lokaler[model['inloggad']['behörighet']['VL']]['LOKAL']);
        
        return false;
      
      });
      
    }
    
  }

  
}

function om_rostmottagningen() {
  console.log('om_rostmottagningen');
  var main = sätt_upp_basic_sida();
  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', 'valfunk');
  
  var hej = länka_in('p', main, 'Här skulle du kunna skriva om röstmottagningen');
  
  var lista = länka_in('ul', main);
  var li = länka_in('li', lista, 'Status röstmottagning? Körschema, vad kommer sen? Var är vi?');
  var li = länka_in('li', lista, 'Öppna/stäng röstmottagning?');
  var li = länka_in('li', lista, 'Ange (tillfälliga) öppettider?');
  var li = länka_in('li', lista, 'Ange (tillfällig) beskrivning av lokalen?');
  var li = länka_in('li', lista, 'Ange aktiva röstmottagare?');
  var li = länka_in('li', lista, 'Se logg mottagna röster?');
  var li = länka_in('li', lista, 'Protokoll?');
  
}

function rapportera_resultat() {
  console.log('rapportera_resultat');
  var main = sätt_upp_basic_sida();
  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', 'valfunk');
  
  var hej = länka_in('p', main, 'Här kan du rapportera resultat!');
  
  
  
}


function incidentrapport() {
  console.log('incidentrapport');
  var main = sätt_upp_basic_sida();
  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', 'valfunk');
  
  länka_in('p', main, 'Här kan man lämna en incidentrapport!');
  
  länka_in('input', main, null, {
      'type' : 'button',
      'value' : 'Skicka',
      'onclick' : 'uppdatera("status", "skickad")'
    
    
  });
  
}

function om_mig() {
  console.log('om_mig');
  var main = sätt_upp_basic_sida();
  
  länka_in('p', main, 'Det här är de uppgifter Valmyndigheten har om dig:');

  var lista = länka_in('ul', main);
  länka_in('li', lista, 'Namn');
  länka_in('li', lista, 'Adress');
  länka_in('li', lista, 'E-post för avisering');
  länka_in('li', lista, 'Telefon för avisering');
  länka_in('li', lista, 'Kandiderat 4 gånger');
  länka_in('li', lista, 'Vald 1 gång');
  
  länka_in('p', main, 'Om något inte stämmer - hit kan du vända dig:');

  länka_in('p', main, 'Inställningar');

  var lista = länka_in('ul', main);
  länka_in('li', lista, 'Val av språk.');
  länka_in('li', lista, 'Vilket/vilka partier som ska highlightas på val.se');
  länka_in('li', lista, 'Vilka kandidater som ska highlightas på val.se');
  länka_in('li', lista, 'Vilket/vilka geografiska områden som ska highlightas på val.se');
  länka_in('li', lista, 'Hur/om jag vill ha aviseringar');

}


function sidan_finns_inte() {
  console.log('sidan_finns_inte');
  var main = sätt_upp_basic_sida();
  
  var hej = länka_in('p', main, 'Sidan "' + model['parameter']['sida'] + '" finns inte.');
  
  
  
}

function ta_emot_rost() {
  console.log('ta_emot_rost');
  var main = sätt_upp_basic_sida();
  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', 'valfunk');
  
  /*
  data vi jobbar med
  - inloggad
  - väljare
  - kuvertid
  - röst


  if (person.rd.length > 2) {  
    
    var div = länka_in('div', rösträtter, 'Riksdagen', {
        'class' : 'riksdag'
    });
    
    var input = länka_in('input', rösträtter, null, {
        'type' : 'checkbox',
        'class' : 'menyknapp',
        'name' : 'rd',
        'value' : 'rd',
        'id' : 'rostratt_rd'
    }); 
    var label = länka_in('label', rösträtter, 'Riksdagen', {
        'for' : 'rostratt_rd',
        'class' : 'riksdag'
    });
  
  }
  if (person.rf.length > 2) {  

    var input = länka_in('input', rösträtter, null, {
        'type' : 'checkbox',
        'class' : 'menyknapp',
        'name' : 'rf',
        'value' : 'rf',
        'id' : 'rostratt_rf'
    });
    var label = länka_in('label', rösträtter, 'Regionfullmäktige', {
        'for' : 'rostratt_rf',
        'class' : 'region'  
    });

  }
  
  if (person.kf.length > 2) {  

    var input = länka_in('input', rösträtter, null, {
        'type' : 'checkbox',
        'class' : 'menyknapp',
        'name' : 'kf',
        'value' : 'kf',
        'id' : 'rostratt_kf'
    }); 
    var label = länka_in('label', rösträtter, 'Kommunfullmäktige', {
        'for' : 'rostratt_kf',
        'class' : 'kommun'
    });
  
  }

  if (person.fo.length > 2) {  
    var input = länka_in('input', rösträtter, null, {
        'type' : 'checkbox',
        'class' : 'menyknapp',
        'name' : 'fo',
        'value' : 'fo',
        'id' : 'rostratt_fo'
    });
    var label = länka_in('label', rösträtter, 'Folkomröstning', {
        'for' : 'rostratt_fo',
        'class' : 'folkomr'
    });
  
  }


  */
  
  länka_in('p', main, 'Här kan man ta emot en röst!');
  

}

function fortidsrostning() {
  console.log('fortidsrostning');
  var main = sätt_upp_basic_sida();
  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', 'valfunk');

  var är_funktionär = typeof model['inloggad']['behörighet'] === 'object';

  
  länka_in('p', main, 'Här kan man hantera förtidsröstning!');
  var lista = länka_in('ul', main);
  var li = länka_in('li', lista, 'Välj plats? se alla platser, med statistik? "min" är highlightad?');
  var li = länka_in('li', lista, 'Nyheter?');

  if (är_funktionär) {
    
    if (model['inloggad']['behörighet']['FR']) {
    
      ladda_jox('GET', 'rostningslokaler.csv', false, function (response) {
        
        var lokaler = läs_csv(response, [0, 2], 7);
        
        var min_kommun = model['inloggad']['behörighet']['FR'];
        
        //länka_in('p', main, lokaler[model['inloggad']['behörighet']['FR']]['LOKAL']);
        
        if (typeof lokaler[min_kommun] !== 'undefined') {
          
          var mina_lokaler = lokaler[min_kommun];
          
          mina_lokaler.sort(sorteraNamn);

          function sorteraNamn(a, b) {
                  
                  return a['LOKAL'].localeCompare(b['LOKAL']);
          }
          
          for (var i = 0; i < mina_lokaler.length; i++) {
            
            var p = länka_in('p', main, mina_lokaler[i]['LOKAL']);
            
          }
          
        }
        
        return false;
      
      });
      
    }
    
  }


}

function om_fortidsrostningen() {
  console.log('om_fortidsrostningen');
  var main = sätt_upp_basic_sida();
  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', 'valfunk');
  
  var hej = länka_in('p', main, 'Här kan du skriva om förtidsröstningen');
  var lista = länka_in('ul', main);
  var li = länka_in('li', lista, 'Status röstmottagning? Körschema, vad kommer sen? Var är vi?');
  var li = länka_in('li', lista, 'Öppna/stäng röstmottagning?');
  var li = länka_in('li', lista, 'Ange (tillfälliga) öppettider?');
  var li = länka_in('li', lista, 'Ange (tillfällig) beskrivning av lokalen?');
  var li = länka_in('li', lista, 'Ange aktiva röstmottagare?');
  var li = länka_in('li', lista, 'Se logg mottagna röster?');
  var li = länka_in('li', lista, 'Dagrapport?'); 
  
}

function ta_emot_fortidsrost() {
  console.log('ta_emot_fortidsrost');
  var main = sätt_upp_basic_sida();
  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', 'valfunk');
  
  var fieldset = länka_in('fieldset', main);
  var legend = länka_in('legend', fieldset, 'Väljarens personnummer:');
  

  
  var id_form = länka_in('form', fieldset, '', {
      'action' : '',
      'name' : 'pnr_valjare',
      'onsubmit' : 'event.preventDefault();sok_person(this, "ta_emot_fortidsrost2");return false;',
      'autocomplete' : 'off',
      'method' : 'get'
  });
  
  var sökruta = sökPersonnummer(id_form, 'pnr_id-handling', '', false);
  sökruta.focus();
 
/*  
  var fieldset = länka_in('fieldset', main);
  var legend = länka_in('legend', fieldset, 'Väljarens personnummer hämtas från:');
  var div = länka_in('div', fieldset);
  

  
  var input = länka_in('input', div, null, {
      'type' : 'radio',
      'class' : 'menyknapp',
      'name' : 'id_hamtat_fran',
      'value' : 'id-handling',
      'id' : 'id_hamtat_fran_id-handling',
      'checked' : 'checked',
      'oninput' : 'document.getElementById("pnr_id-handling_input").focus()'
  });
  var label = länka_in('label', div, 'Id-handling', {
      'for' : 'id_hamtat_fran_id-handling',
      'class' : 'menyknapp'
  });
  var id_div = länka_in('div', div, null, {
      'style' : 'padding-top: 80px;background-color: white;background-image: url("id.svg");background-position: top 30px right;background-size: 200px;background-repeat: no-repeat;'
  })

  var id_form = länka_in('form', id_div, '', {
      'action' : '',
      'name' : 'pnr_valjare',
      'onsubmit' : 'event.preventDefault();sok_person(this, "ta_emot_fortidsrost2");return false;',
      'autocomplete' : 'off',
      'method' : 'get'
  });
  
  var sökruta = sökPersonnummer(id_form, 'pnr_id-handling', 'Väljarens personnummer hämtat från uppvisad id-handling', true);
  sökruta.focus();

//

  var input = länka_in('input', div, null, {
      'type' : 'radio',
      'class' : 'menyknapp',
      'name' : 'id_hamtat_fran',
      'value' : 'intygande',
      'id' : 'id_hamtat_fran_intygande',
      'oninput' : 'document.getElementById("pnr_valjare_intygande_input").focus()'
  });
  var label = länka_in('label', div, 'Medföljande intygar', {
      'for' : 'id_hamtat_fran_intygande',
      'class' : 'menyknapp'
  });
  var intygande_div_outer = länka_in('div', div, null, {
      'style' : 'padding-top: 80px;background-color: white;background-image: url("intygande.svg");background-position: top 30px right;background-size: 200px;background-repeat: no-repeat;'
  });

  var intygande_form = länka_in('form', intygande_div_outer, '', {
      'action' : '',
      'name' : 'pnr_valjare',
      'onsubmit' : 'event.preventDefault();sok_person(this, "ta_emot_fortidsrost2");return false;',
      'autocomplete' : 'off',
      'method' : 'get',
      'style' : 'display: flex;justify-content: space-between;flex-wrap: wrap;'
  });
  
  var v_div = länka_in('div', intygande_form, '', {
      'style' : 'flex:50%;padding: 10px;'
  });
  var h_div = länka_in('div', intygande_form, '', {
      'style' : 'flex:50%;background-color: lightgray;padding: 10px;'
  });
  
  var sökruta = sökPersonnummer(v_div, 'pnr_valjare_intygande', 'Väljarens personnummer', false);
  var sökruta = sökPersonnummer(h_div, 'pnr_intygande', 'Intygandes personnummer hämtat från uppvisad id-handling', true);

//
 
  var input = länka_in('input', div, null, {
      'type' : 'radio',
      'class' : 'menyknapp',
      'name' : 'id_hamtat_fran',
      'value' : 'rostmottagare',
      'id' : 'id_hamtat_fran_rostmottagare',
      'oninput' : 'document.getElementById("pnr_valjare_rostmottagare_input").focus()'
  });
  var label = länka_in('label', div, 'Röstmottagare intygar', {
      'for' : 'id_hamtat_fran_rostmottagare',
      'class' : 'menyknapp'
  });
  
  var rostmottagare_div_outer = länka_in('div', div, null, {
      'style' : 'padding-top: 80px;background-color: white;background-image: url("rostmottagare.svg");background-position: top 30px right;background-size: 200px;background-repeat: no-repeat;'
  });
  
  var rostmottagare_form = länka_in('form', rostmottagare_div_outer, '', {
      'action' : '',
      'name' : 'pnr_valjare',
      'onsubmit' : 'event.preventDefault();sok_person(this, "ta_emot_fortidsrost2");return false;',
      'autocomplete' : 'off',
      'method' : 'get',
      'style' : 'display: flex;justify-content: space-between;flex-wrap: wrap;'
  });

  var v_div = länka_in('div', rostmottagare_form, '', {
      'style' : 'flex:50%;padding: 10px;'
  });
  var h_div = länka_in('div', rostmottagare_form, '', {
      'style' : 'flex:50%;background-color: lightgray;padding: 10px;'
  });
  
  var sökruta = sökPersonnummer(v_div, 'pnr_valjare_rostmottagare', 'Väljarens personnummer', false);
 // var sökruta = sökPersonnummer(h_div, 'pnr_rostmottagare', 'Röstmottagare', true);
  var label = länka_in('label', h_div, 'Röstmottagare', {
      'for' : 'intygar',
      'style' : 'font-size: 0.7rem;display:block;line-height: 1rem;'
  });
  var input = länka_in('input', h_div, '', {
      'type' : 'text',
      'id' : 'intygar',
      'maxlength' : '30',
      'required' : 'required'
  });

//

  var input = länka_in('input', div, null, {
      'type' : 'radio',
      'class' : 'menyknapp',
      'name' : 'id_hamtat_fran',
      'value' : 'budrostningskuvert',
      'id' : 'id_hamtat_fran_budrostningskuvert',
      'oninput' : 'document.getElementById("pnr_budrost_input").focus()'
  });
  var label = länka_in('label', div, 'Budröstningskuvert', {
      'for' : 'id_hamtat_fran_budrostningskuvert',
      'class' : 'menyknapp'
  });
  
  var budrostningskuvert_div = länka_in('div', div);

  var budrostningskuvert_form = länka_in('form', budrostningskuvert_div, '', {
      'action' : '',
      'name' : 'pnr_valjare',
      'onsubmit' : 'event.preventDefault();sok_person(this, "budrostning");return false;',
      'autocomplete' : 'off',
      'method' : 'get'
  });
  
  var sökruta = sökPersonnummer(budrostningskuvert_form, 'pnr_budrost', 'Väljarens personnummer från budröstningskuvert', false);

//

  var input = länka_in('input', div, null, {
      'type' : 'radio',
      'class' : 'menyknapp',
      'name' : 'id_hamtat_fran',
      'value' : 'efterregistreringskuvert',
      'id' : 'id_hamtat_fran_efterregistreringskuvert',
      'oninput' : 'document.getElementById("pnr_efterregistrering_input").focus()'
  });
  var label = länka_in('label', div, 'Efterregistrering', {
      'for' : 'id_hamtat_fran_efterregistreringskuvert',
      'class' : 'menyknapp'
  });
  
  var efterregistreringskuvert_div = länka_in('div', div);
  
  var efterregistreringskuvert_form = länka_in('form', efterregistreringskuvert_div, '', {
      'action' : '',
      'name' : 'pnr_valjare',
      'onsubmit' : 'event.preventDefault();sok_person(this, "efterregistrering");return false;',
      'autocomplete' : 'off',
      'method' : 'get'
  });
  
  var sökruta = sökPersonnummer(efterregistreringskuvert_form, 'pnr_efterregistrering', 'Väljarens personnummer från efterregistreringskuvert', false);

//

  var input = länka_in('input', div, null, {
      'type' : 'radio',
      'class' : 'menyknapp',
      'name' : 'id_hamtat_fran',
      'value' : 'brevrostningskuvert',
      'id' : 'id_hamtat_fran_brevrostningskuvert',
      'oninput' : 'document.getElementById("pnr_brevrost_input").focus()'
  });
  var label = länka_in('label', div, 'Brevröstningskuvert', {
      'for' : 'id_hamtat_fran_brevrostningskuvert',
      'class' : 'menyknapp'
  });
  
  var brevrostningskuvert_div = länka_in('div', div);

  var brevrostningskuvert_form = länka_in('form', brevrostningskuvert_div, '', {
      'action' : '',
      'name' : 'pnr_valjare',
      'onsubmit' : 'event.preventDefault();sok_person(this, "ta_emot_fortidsrost2");return false;',
      'autocomplete' : 'off',
      'method' : 'get'
  });

  var sökruta = sökPersonnummer(brevrostningskuvert_form, 'pnr_brevrost', 'Väljarens personnummer från brevröstningskuvert', false);
  sökruta.setAttribute('placeholder', '[inte implementerat]');

  var hittad = länka_in('div', main, '', {
      'id' : 'hittad'
  });
  
  */
  
}

function ta_emot_fortidsrost2() {

  var main = document.getElementsByTagName('main')[0];
  
  var sok_pnr = document.getElementById('valjare_pnr').value;

  console.log('ta_emot_fortidsrost2 med pnr:' + sok_pnr);
  
  person = hitta_i_datat(model['person'], 'personnummer', sok_pnr);

  main.innerHTML = '';

  var spinner = loader(main);
  
  var backa = länka_in('a', main, '< Avbryt', {
      'onclick' : 'window.location.reload();',
      'href' : '#',
      'style' : 'padding-bottom: 10px'
  });
  
   if (!person) {
    
    if (model['parameter']['hitta-alltid'] == 'ja') {
      
      var index = sok_pnr[sok_pnr.length - 1];
      
      person = model['person'][index];
      //person.personnummer = sok_pnr;
      
    } else {

      var ohittad = länka_in('p', main, 'Personnummer ' + sok_pnr + ' hittades inte.')
      
      return false;

    }
   
  } 
  
  if (person['personnummer'] == model['inloggad']['personnummer']) {
    
    var p = länka_in('p', main, '(Du kan inte ta emot din egen röst, inloggad = väljare)');
    
  }

  var ol = länka_in('ol', main);
  var li = länka_in('li', ol, 'Säkerställ väljarens identitet:');
  


  var personnummer_text = person.personnummer.substr(0, 4) + ' ';
  personnummer_text += person.personnummer.substr(4, 2) + ' ';
  personnummer_text += person.personnummer.substr(6, 2) + ' ';
  personnummer_text += ' - ';
  personnummer_text += person.personnummer.substr(8, 4);
  
  var dl = länka_in('dl', li); 
  
  var div = länka_in('div', dl);  
  var dt = länka_in('dt', div, 'Personnummer');
  var dd = länka_in('dd', div, personnummer_text);

  var div = länka_in('div', dl);
  var dt = länka_in('dt', div, 'Förnamn');
  var dd = länka_in('dd', div, person.fnamn);
  
  var div = länka_in('div', dl);
  var dt = länka_in('dt', div, 'Efternamn');
  var dd = länka_in('dd', div, person.enamn);

  
/*  var nr = person.röstlängdsnr;
  
  var table = länka_in('table', td_r, '', {
    'class' : 'rl_tabell'    
  });
  var tr = länka_in('tr', table);
  var td = länka_in('td', tr, nr.substr(0, 2));
  var td = länka_in('td', tr, nr.substr(2, 2));
  var td = länka_in('td', tr, nr.substr(4, 4));
  var td = länka_in('td', tr, nr.substr(8));

*/
  if (person.röstlängdsnr.length > 2) {


    var li = länka_in('li', ol, 'Ovanstående uppgifter har hämtats från:');
    
    var tabs = länka_in('div', li, '', {
        'class' : 'tabs'
    });
    
    var input = länka_in('input', tabs, null, {
        'type' : 'radio',
        'class' : 'menyknapp',
        'name' : 'id',
        'value' : 'id',
        'id' : 'id-handling',
        'checked' : 'checked'
    }); 
    var label = länka_in('label', tabs, 'ID-handling', {
        'for' : 'id-handling'
    });
    
    var input = länka_in('input', tabs, null, {
        'type' : 'radio',
        'class' : 'menyknapp',
        'name' : 'id',
        'value' : 'bud',
        'id' : 'bud',
        'oninput' : 'document.getElementById("id-bud").focus()'
    }); 
    var label = länka_in('label', tabs, 'Budröst ▼', {
        'for' : 'bud'
    });
    
    var input = länka_in('input', tabs, null, {
        'type' : 'radio',
        'class' : 'menyknapp',
        'name' : 'id',
        'value' : 'intygande',
        'id' : 'intygande',
        'oninput' : 'document.getElementById("id-intygande").focus()'
    }); 
    var label = länka_in('label', tabs, 'Intygande ▼', {
        'for' : 'intygande'
    });
    
    
    var input = länka_in('input', tabs, null, {
        'type' : 'radio',
        'class' : 'menyknapp',
        'name' : 'id',
        'value' : 'kand',
        'id' : 'kand',
        'oninput' : 'document.getElementById("id-kand").focus()'
    }); 
    var label = länka_in('label', tabs, 'Känd av röstmottagare ▼', {
        'for' : 'kand'
    });
    
    var hr = länka_in('hr', tabs);
    
    var div = länka_in('div', tabs, '', {
        'id' : 'tabs-content-bud'
    });
    var label = länka_in('label', div, 'Budets identitet enligt uppvisad ID-handling:', {
        'for' : 'id-bud'
    });
    var input = länka_in('input', div, '', {
        'type' : 'text',
        'id' : 'id-bud',
        'inputmode' : 'numeric',
        'autocomplete' : 'off',
        'required' : 'required',
        'maxlength' : '15',
        'form' : 'koppla_form',
        'style' : 'margin-left: 10px'
      
    });
    var div = länka_in('div', tabs, '', {
        'id' : 'tabs-content-intygande'
    });
    var label = länka_in('label', div, 'Intygandes personnummer enligt uppvisad ID-handling:', {
        'for' : 'id-intygande'
    });
    var input = länka_in('input', div, '', {
        'type' : 'text',
        'id' : 'id-intygande',
        'inputmode' : 'numeric',
        'autocomplete' : 'off',
        'required' : 'required',
        'form' : 'koppla_form',
        'style' : 'margin-left: 10px',
        'maxlength' : '13',
        'pattern' : '(19|20)?[0-9]{2}(01|02|03|04|05|06|07|08|09|10|11|12)(01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31)[\\-]?[0-9]{4}'

      
    });
    var div = länka_in('div', tabs, '', {
        'id' : 'tabs-content-kand'
    });
    var label = länka_in('label', div, 'Röstmottagarens initialer?:', {
        'for' : 'id-kand'
    });
    var input = länka_in('input', div, '', {
        'type' : 'text',
        'id' : 'id-kand',
        'inputmode' : 'numeric',
        'autocomplete' : 'off',
        'required' : 'required',
        'maxlength' : '4',
        'form' : 'koppla_form',
        'style' : 'width: 100px; margin-left: 10px;'
      
    });
    
  }
  
  if (person.röstlängdsnr.length > 2) {

    var li = länka_in('li', ol, person.fnamn + ' ' + person.enamn + ' får lämna röst i följande val:');
    
    var rösträtter = länka_in('div', li);
    
    if (person.rd.length > 2) {  
      
      var div = länka_in('div', rösträtter, 'Riksdagen', {
          'class' : 'riksdag'
      });
        
    }
    if (person.rf.length > 2) {  
      var div = länka_in('div', rösträtter, 'Regionfullmäktige', {
          'class' : 'region'
      });

    }
    
    if (person.kf.length > 2) {  
      var div = länka_in('div', rösträtter, 'Kommunfullmäktige', {
          'class' : 'kommun'
      });
    
    }

    if (person.fo.length > 2) {  
      var div = länka_in('div', rösträtter, 'Folkomröstning', {
          'class' : 'folkomr'
      });
    }
  
  } else if (person.rd.length > 2) {
    
    var li = länka_in('li', ol);
    
    var p = länka_in('p', li, person.fnamn + ' ' + person.enamn + ' har rösträtt, men är inte inskriven i en röstlängd.');
    
    var p = länka_in('p', li, 'Ta emot rösten i nedkopplat läge och lägg därefter rösten i särskilt omslag.');    

  }
  
  if (person.röstlängdsnr.length > 2) {

    var li = länka_in('li', ol, 'Koppla rösten genom att ange kopplingskod på kuvertet:');

    
    var formulär = länka_in('form', li, '', {
        'action' : '',
        'name' : 'koppla_form',
        'onsubmit' : 'event.preventDefault();koppling_gjord(this);return false;',
        'autocomplete' : 'off',
        'method' : 'get'
      
    });
    
    var input = länka_in('input', formulär, '', {
        'type' : 'text',
        'id' : 'koppla',
        'inputmode' : 'numeric',
        'required' : 'required',
        'maxlength' : '13',
        'pattern' : '^(?!(19|20)?[0-9]{2}(01|02|03|04|05|06|07|08|09|10|11|12)(01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31)[\\-]?[0-9]{4}).*'
      
    });
    
    input.focus();
    
    var submit_knapp = länka_in('input', formulär, '', {
        'type' : 'submit',
        'value' : 'Koppla'
      
    });
  }
  
  window.scrollTo(0, 100);
}

function efterregistrering() {
  
  var main = document.getElementsByTagName('main')[0];
  
  var sok_pnr = document.getElementById('valjare_pnr').value;

  console.log('efterregistrering med pnr:' + sok_pnr);

  person = hitta_i_datat(model['person'], 'personnummer', sok_pnr);
  
  main.innerHTML = '';
    var backa = länka_in('a', main, '< Börja om', {
      'onclick' : 'window.location.reload();',
      'href' : '#',
      'style' : 'padding-bottom: 10px'
  });
  var h2 = länka_in('h2', main, 'Efterregistrering');
  var spinner = loader(main);

   if (!person) {
    
    if (model['parameter']['hitta-alltid'] == 'ja') {
      
      var index = sok_pnr[sok_pnr.length - 1];
      
      person = model['person'][index];
      //person.personnummer = sok_pnr;
      
    } else {

      var ohittad = länka_in('p', main, 'Personnummer ' + sok_pnr + ' hittades inte.')
      
      return false;

    }
    
  } 
  
  var fieldset = länka_in('fieldset', main);
  var legend = länka_in('legend', fieldset, 'Uppgifter om väljaren:');

  var table = länka_in('table', fieldset);
  
  var tr = länka_in('tr', table);
  var th = länka_in('th', tr, 'Förnamn');
  var th = länka_in('th', tr, 'Efternamn');
  var tr = länka_in('tr', table);
  var td = länka_in('td', tr, person.fnamn);
  var td = länka_in('td', tr, person.enamn);
  

  var tr = länka_in('tr', table, '', {'colspan' : '2'});

  var th = länka_in('th', tr, 'Personnummer');
  //var th = länka_in('th', tr, 'Nr. i röstlängden');
  var tr = länka_in('tr', table, '', {'colspan' : '2'});
  var td = länka_in('td', tr, person.personnummer);
  
  var tr = länka_in('tr', table, '', {'colspan' : '2'});
  var th = länka_in('th', tr, 'Nr. i röstlängden');
  
  var tr = länka_in('tr', table, '', {'colspan' : '2'});
  var td_r = länka_in('td', table);
  
  var nr = person.röstlängdsnr;
  
  var table = länka_in('table', td_r, '', {
    'class' : 'rl_tabell'    
  });
  var tr = länka_in('tr', table);
  var td = länka_in('td', tr, nr.substr(0, 2));
  var td = länka_in('td', tr, nr.substr(2, 2));
  var td = länka_in('td', tr, nr.substr(4, 4));
  var td = länka_in('td', tr, nr.substr(8));
  


/**/
/*
  var rubrik = länka_in('h3', main, 'Rösträtt');

  var input = länka_in('input', main, null, {
      'type' : 'checkbox',
      'class' : 'menyknapp',
      'name' : 'rd',
      'value' : 'rd',
      'id' : 'rostratt_rd'
  });
  var label = länka_in('label', main, 'Riksdagen', {
      'for' : 'rostratt_rd',
      'class' : 'menyknapp',
      'style' : 'background-color: LemonChiffon'
  });
  if (person.RD == '1') {
    input.setAttribute('checked', 'checked');
  }

  var input = länka_in('input', main, null, {
      'type' : 'checkbox',
      'class' : 'menyknapp',
      'name' : 'rf',
      'value' : 'rf',
      'id' : 'rostratt_rf'
  });
  var label = länka_in('label', main, 'Regionfullmäktige', {
      'for' : 'rostratt_rf',
      'class' : 'menyknapp',
      'style' : 'background-color: lightblue'
  });
  if (person.RF == '1') {
    input.setAttribute('checked', 'checked');
  }

  var input = länka_in('input', main, null, {
      'type' : 'checkbox',
      'class' : 'menyknapp',
      'name' : 'kf',
      'value' : 'kf',
      'id' : 'rostratt_kf'
  });
  var label = länka_in('label', main, 'Kommunfullmäktige', {
      'for' : 'rostratt_kf',
      'class' : 'menyknapp'
  });
  if (person.KF == '1') {
    input.setAttribute('checked', 'checked');
  }

*/
  var fieldset = länka_in('fieldset', main, '', {
      'style' : 'margin-top: 50px'
  });
  var legend = länka_in('legend', fieldset, 'Ange enligt uppgifter på kuvertet hur väljaren styrkt sin identitet:');

  var formulär = länka_in('form', fieldset, '', {
      'action' : '',
      'name' : 'koppla_form',
      'onsubmit' : 'event.preventDefault();koppling_gjord(this);return false;',
      'autocomplete' : 'off',
      'method' : 'get',
      'style' : ''
    
  });

  var input = länka_in('input', formulär, null, {
      'type' : 'radio',
      'class' : 'menyknapp',
      'name' : 'styrkt-id',
      'value' : 'id-handling',
      'id' : 'styrkt-id_id-handling',
      'required' : 'required'
  });
  var label = länka_in('label', formulär, 'Id-handling', {
      'for' : 'styrkt-id_id-handling',
      'class' : 'menyknapp'
  });
  var input = länka_in('input', formulär, null, {
      'type' : 'radio',
      'class' : 'menyknapp',
      'name' : 'styrkt-id',
      'value' : 'rostmottagare',
      'id' : 'styrkt-id_rostmottagare',
      'required' : 'required'
  });
  var label = länka_in('label', formulär, 'Röstmottagare', {
      'for' : 'styrkt-id_rostmottagare',
      'class' : 'menyknapp'
  });
  var input = länka_in('input', formulär, null, {
      'type' : 'radio',
      'class' : 'menyknapp',
      'name' : 'styrkt-id',
      'value' : 'annan',
      'id' : 'styrkt-id_annan',
      'required' : 'required',
      'oninput' : 'document.getElementById("intygar").focus()'
  });
  var label = länka_in('label', formulär, 'Annan/bud intygar', {
      'for' : 'styrkt-id_annan',
      'class' : 'menyknapp'
  });
  var div = länka_in('div', formulär, '', {
      'style' : 'padding:20px;'
      
  });
  var input = länka_in('input', div, '', {
      'type' : 'text',
      'id' : 'intygar',
      'maxlength' : '30'
  });

  var fieldset = länka_in('fieldset', formulär, '', {
      'style' : 'margin-top: 50px'
  });
  var legend = länka_in('legend', fieldset, 'Kopplingskod');
  
  var input = länka_in('input', fieldset, '', {
      'type' : 'text',
      'id' : 'koppla',
      'inputmode' : 'numeric',
      'required' : 'required',
      'maxlength' : '13',
      'pattern' : '^(?!(19|20)?[0-9]{2}(01|02|03|04|05|06|07|08|09|10|11|12)(01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31)[\\-]?[0-9]{4}).*'
    
  });
  
  input.focus();
  
  var knapp = länka_in('input', fieldset, '', {
      'type' : 'button',
      'value' : '[▦]',
      'style' : 'margin-left: -65px; font-size: 1.2rem',
      'onclick' : 'skanner(this)'
    
  });
  
  var submit_knapp = länka_in('input', fieldset, '', {
      'type' : 'submit',
      'value' : 'Koppla'

    
  });
  
  window.scrollTo(0, 100);
}

function koppling_gjord(formulär) {
  
  var main = document.getElementsByTagName('main')[0];

  console.log('koppling_gjord');

  main.innerHTML = '';

  var spinner = loader(main);

  var h2 = länka_in('h2', main, 'Nästan klart!');
  
  var p = länka_in('p', main, 'Fliken på kuvertet ska vara igenklistrad!');
  var p = länka_in('p', main, 'Ange följande röstlängdsnummer på kuvertet:');
  var nr = person.röstlängdsnr;
  
  var table = länka_in('table', main, '', {
    'class' : 'rl_tabell'    
  });
  var tr = länka_in('tr', table);
  var td = länka_in('td', tr, nr.substr(0, 2));
  var td = länka_in('td', tr, nr.substr(2, 2));
  var td = länka_in('td', tr, nr.substr(4, 4));
  var td = länka_in('td', tr, nr.substr(8));
/* */ 
  var formulär = länka_in('form', main, '', {
      'action' : '',
      'name' : 'avsluta_form',
      'onsubmit' : 'event.preventDefault();slutfor_registrering(this);return false;',
      'autocomplete' : 'off',
      'method' : 'get',
      'style' : ''
    
  });
  var submit_knapp = länka_in('input', formulär, '', {
      'type' : 'submit',
      'value' : 'Slutför registrering'
    
  });

}

function slutfor_registrering(formulär) {
  
  main.innerHTML = '';
  
  var h2 = länka_in('h2', main, '✔️ Klart');

  var p = länka_in('p', main, person['fnamn'] + ' ' + person['enamn'] + ' har nu förtidsröstat!');
  
  var kör = länka_in('input', main, '', {
      'type' : 'submit',
      'onclick' : 'window.location.reload();',
      'value' : 'Ta emot ny röst'
    
  });

  kör.focus();
}

function budrostning() {
  var main = document.getElementsByTagName('main')[0];
  
  var sok_pnr = document.getElementById('valjare_pnr').value;

  console.log('Budröstning med pnr:' + sok_pnr);
  window.scrollTo(0, 100);

  person = hitta_i_datat(model['person'], 'personnummer', sok_pnr);
  
  main.innerHTML = '';
  var backa = länka_in('a', main, '< Börja om', {
      'onclick' : 'window.location.reload();',
      'href' : '#',
      'style' : 'padding-bottom: 10px'
  });
  var h2 = länka_in('h2', main, 'Budröstning');
  var spinner = loader(main);

   if (!person) {
    
    if (model['parameter']['hitta-alltid'] == 'ja') {
      
      var index = sok_pnr[sok_pnr.length - 1];
      
      person = model['person'][index];
      //person.personnummer = sok_pnr;
      
    } else {

      var ohittad = länka_in('p', main, 'Personnummer ' + sok_pnr + ' hittades inte.')
      
      return false;

    }
    
  }
  var formulär = länka_in('form', main, '', {
      'action' : '',
      'name' : 'koppla_form',
      'onsubmit' : 'event.preventDefault();koppling_gjord(this);return false;',
      'autocomplete' : 'off',
      'method' : 'get',
      'style' : ''
    
  });
  var fieldset = länka_in('fieldset', formulär);
  var legend = länka_in('legend', fieldset, 'Granska budrösten');
  
  var ul = länka_in('ul', fieldset);
  var li = länka_in('li', ul, 'Ytterkuvertet är igenklistrat och verkar inte ha blivit öppnat.');
  
  var div = länka_in('div', fieldset, '', {
      'style' : 'padding-top: 400px;background-color: white;background-image: url("budrost-fram.png");background-position: top left;background-size: contain;background-repeat: no-repeat;'
  });
  
  var legend = länka_in('legend', fieldset, 'Framsökta uppgifter om väljaren:');

  var table = länka_in('table', fieldset);
  
  var tr = länka_in('tr', table);
  var th = länka_in('th', tr, 'Förnamn');
  var th = länka_in('th', tr, 'Efternamn');
  var tr = länka_in('tr', table);
  var td = länka_in('td', tr, person.fnamn);
  var td = länka_in('td', tr, person.enamn);
  

  var tr = länka_in('tr', table, '', {'colspan' : '2'});

  var th = länka_in('th', tr, 'Personnummer');
  //var th = länka_in('th', tr, 'Nr. i röstlängden');
  var tr = länka_in('tr', table, '', {'colspan' : '2'});
  var td = länka_in('td', tr, person.personnummer);
  
  var tr = länka_in('tr', table, '', {'colspan' : '2'});
  var th = länka_in('th', tr, 'Nr. i röstlängden');
  
  var tr = länka_in('tr', table, '', {'colspan' : '2'});
  var td_r = länka_in('td', table);
  
  var nr = person.röstlängdsnr;
  
  var table = länka_in('table', td_r, '', {
    'class' : 'rl_tabell'    
  });
  var tr = länka_in('tr', table);
  var td = länka_in('td', tr, nr.substr(0, 2));
  var td = länka_in('td', tr, nr.substr(2, 2));
  var td = länka_in('td', tr, nr.substr(4, 4));
  var td = länka_in('td', tr, nr.substr(8));
  


  var ul = länka_in('ul', fieldset);
  var li = länka_in('li', ul, 'Väljarens namnunderskrift finns på ytterkuvertet och motsvarar de framsökta uppgifterna.');
  
  var ul = länka_in('ul', fieldset);
  var li = länka_in('li', ul, 'Vittnets namnunderskrift och personnummer finns på ytterkuvertet.');
  var li = länka_in('li', ul, 'Vittnet är 18 år eller äldre (födelsedatum 2008-09-13)');

  var div = länka_in('div', fieldset, '', {
      'style' : 'padding-top: 400px;background-color: white;background-image: url("budrost-bak.png");background-position: top left;background-size: contain;background-repeat: no-repeat;'
  });

  var ul = länka_in('ul', fieldset);
  var li = länka_in('li', ul, 'Bud och vittne är två olika personer.');
  var li = länka_in('li', ul, 'Typ av bud är angivet på kuvertet.');
  var li = länka_in('li', ul, 'Budets namnunderskrift och personnummer finns på ytterkuvertet.');
  var li = länka_in('li', ul, 'Budets uppgifter på ytterkuvertet stämmer överens med uppvisad id-handling.');
  
  var div = länka_in('div', fieldset, '', {
      'style' : 'background-color: lightgray; margin: 0 0 0 30px;padding: 10px;'
    
  });
  
  var label = länka_in('label', div, 'Budets personnummer hämtat från uppvisad id-handling', {
      'for' : 'budet_pnr',
      'style' : 'font-size: 0.7rem;display:block;line-height: 1rem;'
    
  });
  
  var input = länka_in('input', div, '', {
      'type' : 'text',
      'id' : 'budet_pnr',
      'inputmode' : 'numeric',
      'required' : 'required',
      'maxlength' : '13',
      'pattern' : '(19|20)?[0-9]{2}(01|02|03|04|05|06|07|08|09|10|11|12)(01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31)[\\-]?[0-9]{4}'
    
  });


  var knapp = länka_in('input', div, '', {
      'type' : 'button',
      'value' : '[▦]',
      'style' : 'margin-left: -65px; font-size: 1.2rem',
      'onclick' : 'skanner(this)'
    
  });
  
  var submit_knapp = länka_in('input', div, '', {
      'type' : 'submit',
      'value' : '⌕',
      'style' : 'margin-left: -10px; font-size: 1.8rem'
    
  });
  
  var fieldset = länka_in('fieldset', formulär, '' , {
      'style' : 'margin: 40px 0 40px 0;'
    
  });
  var legend = länka_in('legend', fieldset, 'Kopplingskod');
  
  var input = länka_in('input', fieldset, '', {
      'type' : 'text',
      'id' : 'koppla',
      'inputmode' : 'numeric',
      'required' : 'required',
      'maxlength' : '13',
      'pattern' : '^(?!(19|20)?[0-9]{2}(01|02|03|04|05|06|07|08|09|10|11|12)(01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31)[\\-]?[0-9]{4}).*'
    
  });
  
  var knapp = länka_in('input', fieldset, '', {
      'type' : 'button',
      'value' : '[▦]',
      'style' : 'margin-left: -65px; font-size: 1.2rem',
      'onclick' : 'skanner(this)'
    
  });
  
  var submit_knapp = länka_in('input', fieldset, '', {
      'type' : 'submit',
      'value' : '⌕',
      'style' : 'margin-left: -10px; font-size: 1.8rem'
    
  });
  
  
}

function efterregistrera() {
  console.log('efterregistrera');
  var main = sätt_upp_basic_sida();
  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', 'valfunk');
  
  länka_in('p', main, 'Här kan nedkopplade förtidsröster efterregistreras.');
  
  var ol = länka_in('ol', main);
  var li = länka_in('li', ol, 'Välj vilken plats som ska efterregistreras för.');
  var li = länka_in('li', ol, 'Varför nedkopplad?');
  var li = länka_in('li', ol, 'Ambulerande');
  var li = länka_in('li', ol, 'Avbrott');
  var li = länka_in('li', ol, 'Makulera');
  var li = länka_in('li', ol, 'Tillägg utlandssvensk');
  var li = länka_in('li', ol, 'Sök fram person utifrån efterregistreringsinfo.');
  var li = länka_in('li', ol, 'Gör "som vanligt".');
  var li = länka_in('li', ol, 'Börja om, utan att behöva välja plats igen...');
  
  länka_in('p', main, 'Den här typen av röster kan inte efterregistreras:');
  
  var ol = länka_in('ol', main);
  var li = länka_in('li', ol, 'Välj vilken plats som ska efterregistreras för.');
  var li = länka_in('li', ol, 'Varför nedkopplad?');
  var li = länka_in('li', ol, 'Ambulerande');
  var li = länka_in('li', ol, 'Avbrott');
  var li = länka_in('li', ol, 'Makulera');
  var li = länka_in('li', ol, 'Tillägg utlandssvensk');
  var li = länka_in('li', ol, 'Sök fram person utifrån efterregistreringsinfo.');
  var li = länka_in('li', ol, 'Gör "som vanligt".');
  var li = länka_in('li', ol, 'Börja om, utan att behöva välja plats igen...');

  
}



function dump() {
  console.log('dump');
  var main = sätt_upp_basic_sida(false);
  
  länka_in('p', main, 'Dump!');
  
  dumpblock(main, model['parameter']);
  
}