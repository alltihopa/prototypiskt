function sätt_upp_basic_sida() {
    
  var body = document.getElementsByTagName('body')[0];
  
  body.innerHTML = '';
  body.setAttribute('class', '');
  
  var header = länka_in('header', body);
  
  var h1 = länka_in('h1', header);
  var a = länka_in('a', h1, '◯ Välkommen', {
      'href' : '#',
      'onclick' : 'till("' + model['menyer'][model['meny']][0]['sida'] + '")',
      'style' : 'font-family: Arial'
        
  });

  var main = länka_in('main', body, '', {
      'id' : 'main'
  });
  var footer = länka_in('footer', body);
  
  
    
  if (!model['inloggad']) {
    
    console.log('Ingen är inloggad');
    
    inloggning(main);
          
  } else {
    
    var dl = länka_in('dl', header, '', {
        'class' : 'inloggad-info'
    }); 
    
    var div = länka_in('div', dl);
    var dt = länka_in('dt', div, 'Inloggad som');
    var dd = länka_in('dd', div, model['inloggad'].fnamn + ' ' + model['inloggad'].enamn);

    if (model['lokalnamn']) {
    
      var div = länka_in('div', dl);  
      var dt = länka_in('dt', div, 'Lokal');
      var dd = länka_in('dd', div, model['lokalnamn']);
    
    }
   
  }
    

  sätt_upp_navigation(header);
  
  dump(footer);
  return main;
  
}


function sätt_upp_finis_sida() {
  
  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', 'finis');
  
  body.innerHTML = '';
  
  var header = länka_in('header', body);
  
  var h1 = länka_in('h1', header);
  var a = länka_in('a', h1, '◯ Välkommen', {
      'href' : '#',
      'onclick' : 'till("finis_start")',
      'style' : 'font-family: Arial'
        
  });

  var main = länka_in('main', body, '', {
      'id' : 'main'
  });
  var footer = länka_in('footer', body);
  
  
  dump(footer);
    
  if (!model['inloggad']) {
    
    console.log('Ingen är inloggad');
    
    inloggning(main);
          
  } else {
    
    var dl = länka_in('dl', header, '', {
        'class' : 'inloggad-info'
    }); 
    
    var div = länka_in('div', dl);
    var dt = länka_in('dt', div, 'Inloggad som');
    var dd = länka_in('dd', div, model['inloggad'].fnamn + ' ' + model['inloggad'].enamn);
   
  }

  sätt_upp_navigation(header);
  
  return main;
  
  
}

function sätt_upp_funkis_sida() {
  //har lokal
  
  
  
}


function start() {
  var main = sätt_upp_basic_sida();
  var h1 = länka_in('h1', main, 'Hej ' + model['inloggad'].fnamn + '!');
  länka_in('p', main, 'Välkommen till mina sidor!');
  var a = länka_in('a', main, '', {
      'href' : '#',
      'onclick' : 'till("valjare")',
      'class' : 'blocklink'
  });
  länka_in('span', a, 'Jag som väljare');
  länka_in('div', a, 'För dig som vill/får rösta');

  var a = länka_in('a', main, '', {
      'href' : '#',
      'onclick' : 'till("parti")',
      'class' : 'blocklink'
  });
  länka_in('span', a, 'Jag som partiföreträdare');
  länka_in('div', a, 'För dig som på något sätt representerar ett parti');
  
//  var är_funktionär = typeof model['inloggad']['behörighet'] === 'object';
  var är_funktionär = true;
  
  if (är_funktionär) {
    var a = länka_in('a', main, '', {
      'href' : '#',
      'onclick' : 'till("valfunktionar")',
      'class' : 'blocklink'
    });
    länka_in('span', a, 'Jag som valfunktionär');
    länka_in('div', a, 'För dig som jobbar med valet');
  
  }
  

}

function valjare() {
  var main = sätt_upp_basic_sida();
  
  var a = länka_in('a', main, '', {
      'href' : '#',
      'onclick' : 'till("rostratt")',
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
      'href' : '#',
      'onclick' : 'till("rostlangd")',
      'class' : 'blocklink'
  });
  länka_in('span', a, 'Jag i röstlängden');
  länka_in('div', a, 'Valdistriktet X');

  var a = länka_in('a', main, '', {
      'href' : '#',
      'onclick' : 'till("rosta")',
      'class' : 'blocklink'
  });
  länka_in('span', a, 'Jag vill rösta');
  länka_in('div', a, 'Söderbärkeskolan');
  länka_in('div', a, 'Förtidsrösta');

  
}

function rostratt() {
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
      'href' : '#',
      'onclick' : 'till("rostlangd")',
      'class' : 'blocklink'
  });
  
  länka_in('span', a, 'Min plats i röstlängden');
  länka_in('div', a, 'Valdistrikt X');
 
  
  länka_in('p', main, 'Kanske även:');
  
  länka_in('p', main, 'Givet din ålder kommer du få rösträtt första gången vid valet X. (för ung)');
  länka_in('p', main, 'Givet din ålder har du haft rösträtt vid X antal val.');
  
}

function rosta() {
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
  var main = sätt_upp_basic_sida();
  
  länka_in('p', main, 'Jag vill anmäla mig till röstlängden');
  länka_in('p', main, 'Hej');
  

  

  
}
function hur_gick_det() {
  var main = sätt_upp_basic_sida();
  
  länka_in('p', main, 'Hur gick det i valet?');
  länka_in('p', main, 'Hej');
  

  

  
}

function parti() {
  var main = sätt_upp_basic_sida();
  
  var details = länka_in('details', main);
  var summary = länka_in('summary', details, 'Inget parti');
  var p = länka_in('p', details, 'Enligt våra uppgifter förträder du inget parti.');
  
  var a = länka_in('a', details, '', {
      'href' : '#',
      'onclick' : 'till("kandidat")',
      'class' : 'blocklink'
  });
  
  länka_in('span', a, 'Men nu vill jag kandidera');
  länka_in('div', a, '4637 kandidater hittills.');

  var a = länka_in('a', details, '', {
      'href' : '#',
      'onclick' : 'till("partiombud")',
      'class' : 'blocklink'
  });
  
  länka_in('span', a, 'Men nu vill jag skapa ett nytt parti');
  länka_in('div', a, '432 partier hittills.');
  
  
  länka_in('p', main, 'Jag som partiföreträdare');
  
}
function kandidat() {
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
  var main = sätt_upp_basic_sida();
  
  länka_in('p', main, 'Jag är vald, eller ersättare. Eller jag har varit?');
  länka_in('p', main, 'Här är de platser där jag är vald eller ersättare.');
  länka_in('p', main, 'Här står jag på tur att bli vald eller ersättare.');
  länka_in('p', main, 'Om jag skulle avgå, då ersätts jag av...');
  länka_in('p', main, 'Tryck här för att avgå.');

  
}
function partiombud() {
  var main = sätt_upp_basic_sida();
  
  länka_in('p', main, 'Jag är partiombud');
  länka_in('p', main, 'Jag kan anmäla deltagande.');
  länka_in('p', main, 'Jag kan anmäla registrerad partibeteckning.');
  länka_in('p', main, 'Jag kan se mina potentiella kandidater.');
  länka_in('p', main, 'Jag kan beställa valsedlar.');
  länka_in('p', main, 'Jag kan ändra min partibeteckning eller ladda upp ny symbol.');

  

  
}

function valfunktionar() {
  var main = sätt_upp_basic_sida();
  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', 'valfunk');
  //var är_funktionär = typeof model['inloggad']['behörighet'] === 'object';
  var är_funktionär = true;
  
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
            
    var a = länka_in('a', details_är, '', {
        'href' : '#',
       'onclick' : 'till("fortidsrostning")',
        'class' : 'blocklink'
    });
    
    länka_in('span', a, 'Förtidsröstning');
    länka_in('div', a, 'Förtidsröstning');

    var a = länka_in('a', details_är, '', {
      'href' : '#',
      'onclick' : 'till("ta_emot_rost")',
      'class' : 'blocklink'
    });
  
    länka_in('span', a, 'Ta emot röst');
    länka_in('div', a, 'Ta emot röst');
        
  }
  
}

function vallokal() {
  
  if (!kollaVallokal()) {
    
    return false;
    
  }

  
  var main = sätt_upp_basic_sida();
  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', 'valfunk');
  var är_funktionär = true;
  
  
  var h1 = länka_in('h1', main, 'Hej ' + model['inloggad']['fnamn'] + '!');
  
  var p = länka_in('p', main);
  var span = länka_in('span', p, 'Du är inloggad i vallokalen ');
  var span = länka_in('span', p, model['lokalnamn'], {
      'style' : 'font-weight: bold'
      
  });
  var span = länka_in('span', p, ' - vad vill du göra?');
  
  var a = länka_in('a', main, '', {
    'href' : '#',
    'onclick' : 'till("ta_emot_rost")',
    'class' : 'blocklink'
  });
  länka_in('span', a, 'Ta emot röst');
  länka_in('div', a, 'Klicka här om du vill ta emot röster');

  var a = länka_in('a', main, '', {
    'href' : '#',
    'onclick' : 'till("granska_fortidsrost")',
    'class' : 'blocklink'
  });
  länka_in('span', a, 'Granska förtidsröst');
  länka_in('div', a, 'När det finns tid');

 
  var a = länka_in('a', main, '', {
    'href' : '#',
    'onclick' : 'till("rapportera_resultat")',
    'class' : 'blocklink'
  });
  länka_in('span', a, 'Rapportera preliminärt valresultat');
  länka_in('div', a, 'När alla röster är räknade');

  
}

function om_rostmottagningen() {
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
  var main = sätt_upp_basic_sida();
  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', 'valfunk');
  
  var hej = länka_in('p', main, 'Här kan du rapportera resultat!');
  
  
  
}


function incidentrapport() {
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
  var main = sätt_upp_basic_sida();
  
  var hej = länka_in('p', main, 'Sidan "' + model['sida'] + '" finns inte.');
  
  
  
}

function ta_emot_rost() {
  
  if (!kollaVallokal()) {return false;}
  
  var main = sätt_upp_basic_sida();
  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', 'valfunk');

  model['rostat'] = {};
  
  var steg = länka_in('div', main, '', {
    'class' : 'steg'
  });
  
  var div = länka_in('div', steg, '', {
    'class' : 'sel'
    
  });
  var ett = länka_in('span', div, '1');
  var ett = länka_in('span', div, 'Sök fram väljare');
  
  var div = länka_in('div', steg);
  var två = länka_in('span', div, '2');
  var två = länka_in('span', div, 'Kontrollera väljarens identitet');

  var div = länka_in('div', steg);
  var tre = länka_in('span', div, '3');
  var tre = länka_in('span', div, 'Markera i röstlängden');
  
  var linje = länka_in('hr', main, '', {
    'style' : 'position: relative; margin:0 20px 0 20px; top:-23px;z-index:0;height:0;border-top:1px solid black'
  });
  
  var div = länka_in('div', main, '', {
      'class' : 'centerdiv'
    
  });
  
  var fieldset = länka_in('fieldset', div);
  var legend = länka_in('legend', fieldset, 'Sök fram väljare');
  
  var p = länka_in('p', fieldset, 'Skanna ID-handling eller skriv in väljarens personnummer');
  
  var id_form = länka_in('form', fieldset, '', {
      'action' : '',
      'name' : 'pnr_valjare',
      'onsubmit' : 'event.preventDefault();sok_person(this, "ta_emot_rost2");return false;',
      'autocomplete' : 'off',
      'method' : 'get'
  });
  
  var sökruta = sökPersonnummer(id_form, 'pnr_id-handling', '', false);
  
  sökruta.setAttribute('placeholder', '10 eller 12 siffror');
  
  sökruta.focus();
  
}

function ta_emot_rost2() {
    
  var main = document.getElementsByTagName('main')[0];
    
  main.innerHTML = '';

  var spinner = loader(main);

  var steg = länka_in('div', main, '', {
    'class' : 'steg'
  });
  
  var div = länka_in('div', steg);
  var ett = länka_in('span', div, '✓', {
    'style' : 'background-color: navy; color: white;'
    
  });
  var ett = länka_in('span', div, 'Sök fram väljare');
  
  var div = länka_in('div', steg, '', {
    'class' : 'sel'
    
  });
  var två = länka_in('span', div, '2');
  var två = länka_in('span', div, 'Kontrollera väljarens identitet');

  var div = länka_in('div', steg);
  var tre = länka_in('span', div, '3');
  var tre = länka_in('span', div, 'Markera i röstlängden');
  
  var linje = länka_in('hr', main, '', {
    'style' : 'position: relative; margin:0 20px 0 20px; top:-23px;z-index:0;height:0;border-top:1px solid black'
  });



  var backa = länka_in('a', main, '< Tillbaka till sök', {
      'href' : '#',
      'onclick' : 'till("ta_emot_rost")',
      'style' : 'padding-bottom: 10px'
  });
  if (person['personnummer'] == model['inloggad']['personnummer']) {
    
    console.log('(Du kan inte ta emot din egen röst, inloggad = väljare)');
    
  }
  
  if (person.röstlängdsnr.length > 2) {
  
    var h2 = länka_in('h2', main, 'Kontrollera väljarens identitet');
    
    var outer = länka_in('div', main, '', {
      'style' : 'display: flex;justify-content: space-between;'
      
    });
    
    var inner = länka_in('div', outer, '', {
      'style' : 'flex-basis: 50%;flex-grow: 0;'
      
    });
  
    

    var personnummer_text = person.personnummer.substr(0, 4) + ' ';
    personnummer_text += person.personnummer.substr(4, 2) + ' ';
    personnummer_text += person.personnummer.substr(6, 2) + ' ';
    personnummer_text += ' - ';
    personnummer_text += person.personnummer.substr(8, 4);
    
    console.log(person);
    
    var dl = länka_in('dl', inner, '', {
        'style' : 'gap: 30px'
    }); 
      
    var div = länka_in('div', dl);
    var dt = länka_in('dt', div, 'Namn');
    var dd = länka_in('dd', div, person.enamn + ', ' + person.fnamn);

    var div = länka_in('div', dl);  
    var dt = länka_in('dt', div, 'Personnummer');
    var dd = länka_in('dd', div, personnummer_text);

    var div = länka_in('div', dl);  
    var dt = länka_in('dt', div, 'Nummer i röstlängden');
    var dd = länka_in('dd', div, person.röstlängdsnr.substr(8, 4));

    


    var inner = länka_in('div', outer, '', {
      'style' : 'background-color: #eeeeee;flex-basis: 50%;flex-grow: 0;padding: 20px;'
      
    });

    var hr = länka_in('h3', inner, 'Markera hur väljaren identifierar sig', {
      'style' : 'margin-top:0;'
      
    });
    
    var tabs = länka_in('div', inner, '', {
        'class' : 'tabs',
        'style' : 'flex-direction: column;'
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
        'value' : 'intygande',
        'id' : 'intygande',
        'oninput' : 'document.getElementById("id-intygande").focus()'
    }); 
    var label = länka_in('label', tabs, 'Annan person intygar ▼', {
        'for' : 'intygande'
    });
    var div = länka_in('div', tabs, '', {
        'id' : 'tabs-content-intygande',
        'style' : 'padding-bottom:10px;'
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

    var input = länka_in('input', tabs, null, {
        'type' : 'radio',
        'class' : 'menyknapp',
        'name' : 'id',
        'value' : 'bud',
        'id' : 'bud'
    }); 
    
    var hr = länka_in('hr', tabs);
    
/*    
    
    var label = länka_in('label', tabs, 'Budröst ▼', {
        'for' : 'bud'
    });
    
    
    var bud_div = länka_in('div', tabs, '', {
        'id' : 'tabs-content-bud',
        'style' : 'padding: 20px;'
    });
    var textblock = länka_in('span', bud_div, 'Ange hur budet styrkt sin identitet:');

    var input = länka_in('input', bud_div, null, {
        'type' : 'radio',
        'class' : 'menyknapp',
        'name' : 'bud-id',
        'value' : 'bud-id-handling',
        'id' : 'bud-id-handling',
        'checked' : 'checked'
    }); 
    var label = länka_in('label', bud_div, 'Budet har visat upp ID-handling som stämmer med uppgifter på budkuvertet', {
        'for' : 'bud-id-handling'
    });
    
    var input = länka_in('input', bud_div, null, {
        'type' : 'radio',
        'class' : 'menyknapp',
        'name' : 'bud-id',
        'value' : 'bud-id-intygande',
        'id' : 'bud-intygande',
        'oninput' : 'document.getElementById("bud-id-intygande").focus()'
    }); 
    var label = länka_in('label', bud_div, 'Annan har intygat budets identitet och själv uppvisat ID-handling', {
        'for' : 'bud-intygande'
    });
    
    var div = länka_in('div', bud_div, '', {
        'id' : 'tabs-content-bud-intygande',
        'style' : 'padding-left: 20px'
    });
    var label = länka_in('label', div, 'Intygandes personnummer enligt uppvisad ID-handling:', {
        'for' : 'bud-id-intygande'
    });
    var input = länka_in('input', div, '', {
        'type' : 'text',
        'id' : 'bud-id-intygande',
        'inputmode' : 'numeric',
        'autocomplete' : 'off',
        'required' : 'required',
        'form' : 'koppla_form',
        'style' : 'margin-left: 10px',
        'maxlength' : '13',
        'pattern' : '(19|20)?[0-9]{2}(01|02|03|04|05|06|07|08|09|10|11|12)(01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31)[\\-]?[0-9]{4}'

      
    });
    
    
    
    var input = länka_in('input', bud_div, null, {
        'type' : 'radio',
        'class' : 'menyknapp',
        'name' : 'bud-id',
        'value' : 'bud-id-kand',
        'id' : 'bud-kand',
        'oninput' : 'document.getElementById("bud-id-kand").focus()'        
    }); 
    var label = länka_in('label', bud_div, 'Budet är känd av en röstmottagare', {
        'for' : 'bud-kand'
    });
    
    var div = länka_in('div', bud_div, '', {
        'id' : 'tabs-content-bud-kand',
        'style' : 'padding-left: 20px'
    });
    var label = länka_in('label', div, 'Röstmottagarens initialer:', {
        'for' : 'bud-id-kand'
    });
    var input = länka_in('input', div, '', {
        'type' : 'text',
        'id' : 'bud-id-kand',
        'inputmode' : 'numeric',
        'autocomplete' : 'off',
        'required' : 'required',
        'maxlength' : '4',
        'form' : 'koppla_form',
        'style' : 'width: 100px; margin-left: 10px;text-transform: uppercase;',
        'pattern' : '.{2,}'
      
    });
    
*/

/*    var label = länka_in('label', div, 'Budets identitet enligt uppvisad ID-handling:', {
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
    
*/
    var div = länka_in('div', tabs, '', {
        'id' : 'tabs-content-kand'
    });
    var label = länka_in('label', div, 'Röstmottagarens initialer:', {
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
        'style' : 'width: 100px; margin-left: 10px;text-transform: uppercase;',
        'pattern' : '.{2,}'
      
    });
    
  } else {
    
    var div = länka_in('div', main, '', {
      'style' : 'border: 1px solid #aaaaaa;border-radius: 5px;padding: 30px;margin: 30px;max-width: 500px;'
    });
    var h2 = länka_in('h2', div, 'ⓘ Väljaren finns inte i röstlängden', {
    });
    var hr = länka_in('hr', div);
    var p = länka_in('p', div, 'Väljaren är i fel vallokal och tillhör valdistrikt XX.', {
    });
    var hr = länka_in('hr', div);
    var btn = länka_in('input', div, '', {
        'type' : 'button',
        'value' : 'OK',
        'onclick' : 'till("ta_emot_rost")'
    });
    return false;
  }
  
  var hr = länka_in('hr', main);
  
  var btn = länka_in('input', main, '', {
      'type' : 'button',
      'value' : 'Gå vidare till markera i röstlängd',
      'onclick' : 'till("ta_emot_rost3")'
  });

}

function ta_emot_rost3 ()
{
  
  var main = document.getElementsByTagName('main')[0];
    
  main.innerHTML = '';

  var spinner = loader(main);

  var steg = länka_in('div', main, '', {
    'class' : 'steg'
  });
  
  var div = länka_in('div', steg);
  var ett = länka_in('span', div, '✓', {
    'style' : 'background-color: navy; color: white;'
    
  });
  var ett = länka_in('span', div, 'Sök fram väljare');
  
  var div = länka_in('div', steg);
  var två = länka_in('span', div, '✓', {
    'style' : 'background-color: navy; color: white;'
    
  });
  var två = länka_in('span', div, 'Kontrollera väljarens identitet');

  var div = länka_in('div', steg, '', {
    'class' : 'sel'
    
  });
  var tre = länka_in('span', div, '3');
  var tre = länka_in('span', div, 'Markera i röstlängden');
  
  var linje = länka_in('hr', main, '', {
    'style' : 'position: relative; margin:0 20px 0 20px; top:-23px;z-index:0;height:0;border-top:1px solid black'
  });



  var backa = länka_in('a', main, '< Tillbaka till sök', {
      'href' : '#',
      'onclick' : 'till("ta_emot_rost")',
      'style' : 'padding-bottom: 10px'
  });
  
  var outer = länka_in('div', main, '', {
    'style' : 'display: flex;justify-content: space-between;'
    
  });
  
  var inner = länka_in('div', outer, '', {
    'style' : 'flex-basis: 50%;flex-grow: 0;'
    
  });
  
  if (person.röstlängdsnr.length > 2) {

    var h2 = länka_in('h2', inner, 'Kontrollera valkuvert och markera vilka val väljaren röstar i');
    
        
    var label = länka_in('label', inner, '', {
        'for' : 'rostratt_rd',
        'class' : 'riksdag'
    });

    if (person.rd.length > 2) {  

      var input = länka_in('input', label, null, {
          'type' : 'checkbox',
          'name' : 'rd',
          'value' : 'rd',
          'id' : 'rostratt_rd',
          'onchange' : 'this.checked ? model.rostat.rd = true : model.rostat.rd = false' 
      }); 
      
    } else { 
      var span = länka_in('span', label, '❌');
    }
    var span = länka_in('span', label, 'RD', {
        'style' : 'font-weight: bold; padding: 0 20px 0 20px'
    });
    var span = länka_in('span', label, 'Riksdagen');
    var span = länka_in('div', label, 'GUL', {
        'style' : 'float:left;padding-right: 5px;font-family:monospace'
    });
  

    var label = länka_in('label', inner, '', {
        'for' : 'rostratt_kf',
        'class' : 'kommun'
    });
    
    if (person.kf.length > 2) {  
    
      var input = länka_in('input', label, null, {
          'type' : 'checkbox',
          'name' : 'kf',
          'value' : 'kf',
          'id' : 'rostratt_kf',
          'onchange' : 'this.checked ? model.rostat.kf = true : model.rostat.kf = false' 
      }); 
      
    } else { var span = länka_in('span', label, '❌') }
    
    var span = länka_in('span', label, 'KF', {
        'style' : 'font-weight: bold; padding: 0 20px 0 20px'
    });
    var span = länka_in('span', label, 'Kommunfullmäktige');
    var span = länka_in('div', label, 'VIT', {
        'style' : 'float:left;padding-right: 5px;font-family:monospace'
    });
  

    var label = länka_in('label', inner, '', {
        'for' : 'rostratt_rf',
        'class' : 'region'  
    });
    
    if (person.rf.length > 2) {  
      var input = länka_in('input', label, null, {
          'type' : 'checkbox',
          'name' : 'rf',
          'value' : 'rf',
          'id' : 'rostratt_rf',
          'onchange' : 'this.checked ? model.rostat.rf = true : model.rostat.rf = false' 
      });
    } else { var span = länka_in('span', label, '❌') }
    
    var span = länka_in('span', label, 'RF', {
        'style' : 'font-weight: bold; padding: 0 20px 0 20px'
    });
    var span = länka_in('span', label, 'Regionfullmäktige');
    var span = länka_in('div', label, 'BLÅ', {
        'style' : 'float:left;padding-right: 5px;font-family:monospace'
    });


      if (person.fo.length > 2) {  
        var label = länka_in('label', inner, '', {
            'for' : 'rostratt_fo',
            'class' : 'folkomr'
        });
        var input = länka_in('input', label, null, {
            'type' : 'checkbox',
            'name' : 'fo',
            'value' : 'fo',
            'id' : 'rostratt_fo',
            'onchange' : 'this.checked ? model.rostat.fo = true : model.rostat.fo = false' 
        });
        var span = länka_in('span', label, 'FK', {
            'style' : 'font-weight: bold; padding: 0 20px 0 20px'
        });
        var span = länka_in('span', label, 'Kommunal folkomröstning');      
        var span = länka_in('div', label, '---', {
            'style' : 'float:left;padding-right: 5px;font-family:monospace;color:transparent'
        });
      }
    
    var rösträtter = länka_in('div', inner);
      
  } else if (person.rd.length > 2) {
    
    var inner = länka_in('div', outer);
    
    var p = länka_in('p', inner, person.fnamn + ' ' + person.enamn + ' har rösträtt, men är inte inskriven i en röstlängd.');
    
    var p = länka_in('p', inner, 'Systemet kan inte användas i detta fall. Ta emot rösten i nedkopplat läge och lägg därefter rösten i särskilt omslag.');    

  }

  var inner = länka_in('div', outer, '', {
    'style' : 'flex-basis: 50%;flex-grow: 0;text-align:right;'
    
  });

  var span = länka_in('span', inner, person['fnamn'] + ' ' + person['enamn']);
  
/*  var label = länka_in('label', inner, '', {
      'for' : 'protokoll'
  });
  var input = länka_in('input', label, null, {
      'type' : 'checkbox',
      'name' : 'protokoll',
      'value' : 'protokoll',
      'id' : 'protokoll'
  });
  var span = länka_in('span', label, 'Notering i protokollet', {
      'style' : ''
  });
*/  
  
  if (person.röstlängdsnr.length > 2) {
    
    var hr = länka_in('hr', main);
    
    var btn = länka_in('input', main, '', {
        'type' : 'button',
        'value' : 'Gå vidare och slutför',
        'onclick' : 'till("bekrafta_ta_emot")'
    });
    
  }
  
  window.scrollTo(0, 100);
}

function bekrafta_ta_emot() {
  
  var main = document.getElementsByTagName('main')[0];
    
  main.innerHTML = '';

  var spinner = loader(main);
  
  var div = länka_in('div', main, '', {
      'class' : 'centerdiv'
    
  });
  var fieldset = länka_in('fieldset', div);

  var h2 = länka_in('h2', fieldset, 'Markering i röstlängd är genomförd');
  
  var div = länka_in('div', fieldset, '', {
    
    'style' : 'display: flex; flex-direction: column;padding: 0 20%;align-items: flex-start;'
    
  })
  
  if (model.rostat.rd == true) {
    
    var rad = länka_in('div', div);
    var span = länka_in('span', rad, '✓', {
      'style' : 'color: green; padding-right:5px;font-weight:bold'
    })
    var span = länka_in('span', rad, 'Riksdagen');
    
  }
  if (model.rostat.kf == true) {
    
    var rad = länka_in('div', div);
    var span = länka_in('span', rad, '✓', {
      'style' : 'color: green; padding-right:5px;font-weight:bold'
    })
    var span = länka_in('span', rad, 'Kommunfullmäktige');
    
  }
  if (model.rostat.rf == true) {
    
    var rad = länka_in('div', div);
    var span = länka_in('span', rad, '✓', {
      'style' : 'color: green; padding-right:5px;font-weight:bold'
    })
    var span = länka_in('span', rad, 'Regionfullmäktige');
    
  }
  if (model.rostat.fo == true) {
    
    var rad = länka_in('div', div);
    var span = länka_in('span', rad, '✓', {
      'style' : 'color: green; padding-right:5px;font-weight:bold'
    })
    var span = länka_in('span', rad, 'Kommunal folkomröstning');
    
  }
  
  var div = länka_in('div', fieldset, '⚠ Kom ihåg att lägga ner valkuverten i urnan.', {
    'style' : 'padding: 20px; border:1px solid navy;border-radius:5px;margin: 20px'
    
    
  })

  var formulär = länka_in('form', fieldset, '', {
    'action' : '',
    'name' : 'avsluta_form',
    'onsubmit' : 'event.preventDefault();ta_emot_rost();return false;',
    'autocomplete' : 'off',
    'method' : 'get',
    'style' : 'padding-bottom: 40px'
    
  });
  var submit_knapp = länka_in('input', formulär, '', {
      'type' : 'submit',
      'value' : 'Ta emot nästa väljare >'
    
  });
  
}



function fortidsrostning() {
  
  if (!kollaLokal()) {
    
    return false;
    
  }
  

  var main = sätt_upp_basic_sida();
  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', 'valfunk');
  
  var h1 = länka_in('h1', main, 'Hej ' + model['inloggad']['fnamn'] + '!');
  
  var p = länka_in('p', main);
  var span = länka_in('span', p, 'Du är inloggad i röstningslokalen ');
  var span = länka_in('span', p, model['lokalnamn'], {
      'style' : 'font-weight: bold'
      
  });
  var span = länka_in('span', p, ' - vad vill du göra?');
  
  var a = länka_in('a', main, '', {
    'href' : '#',
    'onclick' : 'till("ta_emot_fortidsrost")',
    'class' : 'blocklink'
  });
  länka_in('span', a, 'Ta emot förtidsröst');
  länka_in('div', a, 'Klicka här om du vill ta emot förtidsröster');
  
  var a = länka_in('a', main, '', {
    'href' : '#',
    'onclick' : 'till("snabbfraga")',
    'class' : 'blocklink'
  });
  länka_in('span', a, 'Identifiera förtidsröst');
  länka_in('div', a, 'Registrera förtidsröster som tagits emot i nedkopplat läge');
  
}

function om_fortidsrostningen() {
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
  if (!kollaLokal()) {return false;}
  
  if (!kollaLokalStatus()) {return false;}    

  var main = sätt_upp_basic_sida();
  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', 'valfunk');
   
  var div = länka_in('div', main, '', {
      'class' : 'centerdiv'
    
  });
  
  var fieldset = länka_in('fieldset', div, '', {
      'style' : 'margin: 0 40px;'
  });
    
  if (model['vf_sista_nr'].length > 2) {

    var div = länka_in('div', fieldset, null, {
        'style' : 'padding:10px; margin: 20px; border: 1px solid orange; background-color: lightyellow; border-radius: 10px;'
      
    });

    var p = länka_in('p', div, 'Det här intervallet är nu fullt.');
    var p = länka_in('p', div, 'Ställ dig i webbläsarens adressfält och skanna en ny bilaga för att fortsätta.');
    
    model['vf_sista_nr'] = '';
    
    return false;
    
  } 
  
  
  var tabs = länka_in('div', fieldset, '', {
      'class' : 'tabs'
  });
  
  var input = länka_in('input', tabs, null, {
      'type' : 'radio',
      'class' : 'menyknapp',
      'name' : 'typ',
      'value' : 'uppkopplad',
      'id' : 'uppkopplad',
      'oninput' : 'document.getElementById("pnr_valjare_input").focus(); uppdatera("nedkopplad", "");uppdatera("budrost", "")'
  }); 
  var label = länka_in('label', tabs, 'Ta emot väljare ▼', {
      'for' : 'uppkopplad',
      'style' : 'margin: 0 20px 20px 0;background-color: white;'
  });
  
  if (model['nedkopplad'].length < 2) {
    
    input.setAttribute('checked', 'checked');
    
  }
  var input = länka_in('input', tabs, null, {
      'type' : 'radio',
      'class' : 'menyknapp',
      'name' : 'typ',
      'value' : 'budr',
      'id' : 'bud',
      'oninput' : 'document.getElementById("pnr_valjare_input").focus(); uppdatera("nedkopplad", "");uppdatera("budrost", "budrost")'
  }); 
  var label = länka_in('label', tabs, 'Ta emot budröst ▼', {
      'for' : 'bud',
      'style' : 'margin: 0 20px 20px 0;background-color: white;'
  });
  
  var input = länka_in('input', tabs, null, {
      'type' : 'radio',
      'class' : 'menyknapp',
      'name' : 'typ',
      'value' : 'nedkopplad',
      'id' : 'nedkopplad',
      'oninput' : 'document.getElementById("pnr_valjare_input").focus(); uppdatera("nedkopplad", "nedkopplad"); uppdatera("budrost", "")'
  }); 
  var label = länka_in('label', tabs, 'Efterregistrera ▼', {
      'for' : 'nedkopplad',
      'style' : 'align-self: flex-end; margin: 0 0 20px 0; background-color: rgba(132, 169, 184, 0.3);'
  });
  
  if (model['nedkopplad'].length > 2) {
    
    input.setAttribute('checked', 'checked');
    
  }

  
  var span = länka_in('span', tabs);
  
  var div_uppkopplad = länka_in('div', tabs, '', {
      'id' : 'tabs-content-uppkopplad',
      'style' : 'padding: 20px 40px 100px 40px;'

  });
  var div_budr = länka_in('div', tabs, '', {
      'id' : 'tabs-content-bud',
      'style' : 'padding: 20px 40px 100px 40px;'
  });
  var div_nedkopplad = länka_in('div', tabs, '', {
      'id' : 'tabs-content-nedkopplad',
      'style' : 'background-color: rgba(132, 169, 184, 0.3); padding: 20px 40px 100px 40px;'
  });
  
  
  
  
  
  var h2 = länka_in('h2', div_uppkopplad, 'Sök fram väljare')
  var h2 = länka_in('h2', div_budr, 'Sök fram väljare')
  var h2 = länka_in('h2', div_nedkopplad, 'Sök fram väljare')
  
  var p = länka_in('p', div_uppkopplad, 'Skanna ID-handling eller skriv in väljarens personnummer');
  
  var p = länka_in('p', div_budr, 'Skriv av väljarens personnummer från ytterkuvert för budröst');
  
  var p = länka_in('p', div_nedkopplad, 'Skriv av väljarens personnummer som antecknats för hand på rad ' + model['vnr'] + ' i bilagan');
  
  var id_form = länka_in('form', fieldset, '', {
      'action' : '',
      'name' : 'pnr_valjare',
      'onsubmit' : 'event.preventDefault();sok_person(this, "ta_emot_fortidsrost2");return false;',
      'autocomplete' : 'off',
      'method' : 'get',
      'style' : 'position: relative; top: -100px; padding: 0 20px;'
  });

  var sökruta = sökPersonnummer(id_form, 'pnr_valjare', '', false);
  
  sökruta.setAttribute('placeholder', '10 eller 12 siffror');

  console.log('vnr', model['vnr']); 
  
  if (model['vnr'] > 0) {
    
    var span = länka_in('span', sökruta.parentNode, model['vnr'] + ':', {
        'style' : 'padding: 10px 0 10px 0'
      
    }, sökruta);
    
  }


  
  sökruta.focus();
  
  
}

function ta_emot_fortidsrost2() {
  
  var main = document.getElementsByTagName('main')[0];
    
  main.innerHTML = '';

  var spinner = loader(main);
 




  var tabs = länka_in('div', main, '', {
      'class' : 'tabs',
      'style' : 'align-items: baseline;'
  });
  
  var backa = länka_in('a', tabs, '< Avbryt', {
      'href' : '#',
      'onclick' : 'uppdatera("budrost","");till("ta_emot_fortidsrost")',
      'style' : 'padding-bottom: 10px'
  });
  
/*  
  var hantera_som_budröst = länka_in('label', main, '', {
      'style' : 'float:right;padding:0'
      
  });
  var input = länka_in('input', hantera_som_budröst, null, {
      'type' : 'checkbox',
      'onchange' : 'ta_emot_budrost()'
  }); 
  var hantera_som_budröst_text = länka_in('span', hantera_som_budröst, 'Hantera som budröst');
 */ 
  if (person['personnummer'] == model['inloggad']['personnummer']) {
    
    console.log('(Du kan inte ta emot din egen röst, inloggad = väljare)');
    
  }
  
  var är_budröst = model['budrost'].length > 2 ? true : false;
  var ska_efterregistreras = model['nedkopplad'].length > 2 ? true : false;

  var ol = länka_in('ol', main);
  var li = länka_in('li', ol);
  
  if (är_budröst) {
    
    var textblock = länka_in('span', li, 'Jämför med väljarens uppgifter på ytterkuvertet:');

  } else {
    
    var textblock = länka_in('span', li, 'Kontrollera väljarens identitet:');
    
  }

  var personnummer_text = person.personnummer.substr(0, 4) + ' ';
  personnummer_text += person.personnummer.substr(4, 2) + ' ';
  personnummer_text += person.personnummer.substr(6, 2) + ' ';
  personnummer_text += ' - ';
  personnummer_text += person.personnummer.substr(8, 4);
  
  var dl = länka_in('dl', li, '', {
      'style' : 'gap: 30px'
  }); 
    
  if (person.inte.length < 2) {
    var div = länka_in('div', dl);
    var dt = länka_in('dt', div, 'Namn');
    var dd = länka_in('dd', div, person.enamn + ', ' + person.fnamn);
  }
  var div = länka_in('div', dl);  
  var dt = länka_in('dt', div, 'Personnummer');
  var dd = länka_in('dd', div, personnummer_text);
  
  if (person.inte.length > 2) {
    
    var li = länka_in('li', ol);
    
    var p = länka_in('p', li, 'Personen har rösträtt, men systemet kan inte användas i detta fall.');
    
    var p = länka_in('p', li, 'Ta emot rösten i nedkopplat läge. Rösten måste hanteras av valnämnden vid ett senare tillfälle.');    

    return false;
    
  }
  
  if (person.röstlängdsnr.length < 2) {
    
    var li = länka_in('li', ol);
    
    var p = länka_in('p', li, 'Personen har rösträtt, men systemet kan inte användas i detta fall.');
    
    var p = länka_in('p', li, 'Ta emot rösten i nedkopplat läge. Rösten måste hanteras av valnämnden vid ett senare tillfälle.');    

    return false;
    
  }

  if (person.röstlängdsnr.length > 2) {


    var li = länka_in('li', ol);

    if (ska_efterregistreras) {
      
      var textblock = länka_in('span', li, 'Skriv av hur identifiering på rad ' + model['vnr'] + ' har skett:');
      
    } else if (är_budröst) {
    
      var textblock = länka_in('span', li, 'Ange hur budet styrker sin identitet:');
    
    } else {
      
      var textblock = länka_in('span', li, 'Ovanstående uppgifter om väljarens identitet har hämtats från:');
      
    }
    
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


/*

    var input = länka_in('input', tabs, null, {
        'type' : 'radio',
        'class' : 'menyknapp',
        'name' : 'id',
        'value' : 'bud',
        'id' : 'bud'
    }); 
    var label = länka_in('label', tabs, 'Budröst ▼', {
        'for' : 'bud'
    });
    
    var hr = länka_in('hr', tabs);
    
    var bud_div = länka_in('div', tabs, '', {
        'id' : 'tabs-content-bud',
        'style' : 'padding: 20px;'
    });
    var textblock = länka_in('span', bud_div, 'Ange hur budet styrkt sin identitet:');

    var input = länka_in('input', bud_div, null, {
        'type' : 'radio',
        'class' : 'menyknapp',
        'name' : 'bud-id',
        'value' : 'bud-id-handling',
        'id' : 'bud-id-handling',
        'checked' : 'checked'
    }); 
    var label = länka_in('label', bud_div, 'Budet har visat upp ID-handling som stämmer med uppgifter på budkuvertet', {
        'for' : 'bud-id-handling'
    });
    
    var input = länka_in('input', bud_div, null, {
        'type' : 'radio',
        'class' : 'menyknapp',
        'name' : 'bud-id',
        'value' : 'bud-id-intygande',
        'id' : 'bud-intygande',
        'oninput' : 'document.getElementById("bud-id-intygande").focus()'
    }); 
    var label = länka_in('label', bud_div, 'Annan har intygat budets identitet och själv uppvisat ID-handling', {
        'for' : 'bud-intygande'
    });
    
    var div = länka_in('div', bud_div, '', {
        'id' : 'tabs-content-bud-intygande',
        'style' : 'padding-left: 20px'
    });
    var label = länka_in('label', div, 'Intygandes personnummer enligt uppvisad ID-handling:', {
        'for' : 'bud-id-intygande'
    });
    var input = länka_in('input', div, '', {
        'type' : 'text',
        'id' : 'bud-id-intygande',
        'inputmode' : 'numeric',
        'autocomplete' : 'off',
        'required' : 'required',
        'form' : 'koppla_form',
        'style' : 'margin-left: 10px',
        'maxlength' : '13',
        'pattern' : '(19|20)?[0-9]{2}(01|02|03|04|05|06|07|08|09|10|11|12)(01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31)[\\-]?[0-9]{4}'

      
    });
    
    
    
    var input = länka_in('input', bud_div, null, {
        'type' : 'radio',
        'class' : 'menyknapp',
        'name' : 'bud-id',
        'value' : 'bud-id-kand',
        'id' : 'bud-kand',
        'oninput' : 'document.getElementById("bud-id-kand").focus()'        
    }); 
    var label = länka_in('label', bud_div, 'Budet är känd av en röstmottagare', {
        'for' : 'bud-kand'
    });
    
    var div = länka_in('div', bud_div, '', {
        'id' : 'tabs-content-bud-kand',
        'style' : 'padding-left: 20px'
    });
    var label = länka_in('label', div, 'Röstmottagarens initialer:', {
        'for' : 'bud-id-kand'
    });
    var input = länka_in('input', div, '', {
        'type' : 'text',
        'id' : 'bud-id-kand',
        'inputmode' : 'numeric',
        'autocomplete' : 'off',
        'required' : 'required',
        'maxlength' : '4',
        'form' : 'koppla_form',
        'style' : 'width: 100px; margin-left: 10px;text-transform: uppercase;',
        'pattern' : '.{2,}'
      
    });
    */
    var hr = länka_in('hr', tabs);
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
    var label = länka_in('label', div, 'Röstmottagarens initialer:', {
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
        'style' : 'width: 100px; margin-left: 10px;text-transform: uppercase;',
        'pattern' : '.{2,}'
      
    });
    
  }
  
  if (person.röstlängdsnr.length > 2) {

    if (!ska_efterregistreras && !är_budröst) {
      
      var li = länka_in('li', ol);
      
      var textblock = länka_in('span', li, 'Kontrollera väljarens rösträtt nedan med mottagna valkuvert:');
      
      var rösträtter = länka_in('div', li);
      
      if (person.rd.length > 2) {  
        
        var div = länka_in('div', rösträtter, 'Riksdagen', {
            'style' : 'background-color: LemonChiffon; border: 1px solid Khaki; padding: 10px; border-radius: 5px;'
        });
          
      }
      
      if (person.kf.length > 2) {  
        var div = länka_in('div', rösträtter, 'Kommunfullmäktige', {
            'style' : 'background-color: white; border: 1px solid #cccccc; padding: 10px;border-radius: 5px;'
        });
      
      }
      if (person.rf.length > 2) {  
        var div = länka_in('div', rösträtter, 'Regionfullmäktige', {
            'style' : 'background-color: LightCyan; border: 1px solid LightSkyBlue; padding: 10px;border-radius: 5px;'
        });

      }

      if (person.fo.length > 2) {  
        var div = länka_in('div', rösträtter, 'Folkomröstning', {
            'style' : 'background-color: pink; border: 1px solid white; padding: 10px;border-radius: 5px;'
        });
      }
    
    }
    
    if (ska_efterregistreras) {
      
      var li = länka_in('li', ol);
      
      var textblock = länka_in('span', li, 'Är det en budröst?');
      
      var input = länka_in('input', li, null, {
          'type' : 'radio',
          'class' : 'menyknapp',
          'name' : 'budi',
          'value' : 'budi',
          'id' : 'budi_nej',
          'checked' : 'checked'
      }); 
      var label = länka_in('label', li, 'Nej', {
          'for' : 'budi_nej',
          'style' : 'display:inline;margin-left:20px;'
      });
      var input = länka_in('input', li, null, {
          'type' : 'radio',
          'class' : 'menyknapp',
          'name' : 'budi',
          'value' : 'budi',
          'id' : 'budi_ja'
      }); 
      var label = länka_in('label', li, 'Ja', {
          'for' : 'budi_ja',
          'style' : 'display:inline;margin-left:20px;'
      });
      
    }
    
  }
  
  if (person.röstlängdsnr.length > 2) {
    
    var li = länka_in('li', ol);

    if (model['nedkopplad'].length > 2) {
      
      var textblock = länka_in('span', li, 'Skanna eller mata in kuvertkoden nedan:');
            
    } else {

      var textblock = länka_in('span', li, 'Gör i ordning förtidsrösten och skanna eller mata in kuvertkoden nedan:');

    }
    
    
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
        'maxlength' : '60',
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

function koppling_gjord(formulär) {
  
  var main = document.getElementsByTagName('main')[0];
  
  var kuvertid = formulär.getElementsByTagName('input')[0].value;

  if (kuvertid.length > 10) {
    
    kuvertid = kort_kod(kuvertid);
    
  }
  
  if (model['reggade_froster'][kuvertid]) {
    /*
    var p = länka_in('p', formulär, '🔺Koden används redan. Försök igen.', {
        'style' : 'color: red;'
        
    });
    var p = länka_in('p', formulär, '(Men observera: Det här är ett testsystem, koderna återanvänds på kuverten - ange en annan kod manuellt, som du inte använt tidigare, t.ex. 1, så kan du köra vidare 🙂)', {
        'style' : 'color: red;'
        
    });
    return false;
    */
    
    console.log('kuvertid ' + kuvertid + ' används redan');
    
  }
  
  
  console.log('koppling_gjord ', kuvertid);

  model['aktuellt_vnr'] = model['vnr'];

  if (model['vnr'] >= 1) {
    
    if (sista_nr(model['vnr'])) {
      
      model['vf_sista_nr'] = 'japp';
      
    } else {
      
      model['vnr']++;
      
    }
        
  }
  
  main.innerHTML = '';

  var spinner = loader(main);
  var div = länka_in('div', main, '', {
      'class' : 'centerdiv'
    
  });  
  
  var fieldset = länka_in('fieldset', div);

  var h2 = länka_in('h2', fieldset, 'Kopplingen är nu gjord för ' + person['fnamn']);
  var p = länka_in('p', fieldset, 'Skriv löpnummer och röstlängdsnummer på baksidan av kuvertet');
  
  ladda_jox('GET', 'vallokaler.csv', false, function (response) {
    
    var lokaler = läs_csv(response);
    
    var nr = kuvertIdTillNr(kuvertid, lokaler);
    
    var p = länka_in('p', fieldset, '', {
        'style' : 'position: relative;border-bottom: 1px solid #cccccc;'
    });
    
    var div = länka_in('div', p, '', {
        'style' : 'position: absolute; top: 0; left: -18px; border-left: 1px solid #cccccc; height: 98px; width: 1px; transform: rotate(-22deg);'
    });
    var div = länka_in('div', p, '', {
        'style' : 'position: absolute; top: 0; right: -18px; border-right: 1px solid #cccccc; height: 98px; width: 1px; transform: rotate(22deg);'
    });
    
    var table = länka_in('table', p, '', {
      'class' : 'rl_tabell'
    });
    
    var vnr = model['aktuellt_vnr'] >= 1 ? model['aktuellt_vnr'] : '';
    
    var tr = länka_in('tr', table);
    var td = länka_in('td', tr, vnr);
    var td = länka_in('td', tr, '');
    var td = länka_in('td', tr, nr.substr(0, 2));
    var td = länka_in('td', tr, nr.substr(2, 2));
    var td = länka_in('td', tr, nr.substr(4, 4));
    var td = länka_in('td', tr, nr.substr(8));
    
    model['reggade_froster'][kuvertid] = {
      'vnr' : vnr,
      'nr'  : nr
    };
    
    var formulär = länka_in('form', fieldset, '', {
        'action' : '',
        'name' : 'avsluta_form',
        'onsubmit' : 'event.preventDefault();slutfor_registrering();return false;',
        'autocomplete' : 'off',
        'method' : 'get',
        'style' : ''
      
    });
    var submit_knapp = länka_in('input', formulär, '', {
        'type' : 'submit',
        'value' : 'Gå vidare >'
      
    });





    
    return false;
    
  });

}


function nastan_klart(formulär) {
  
  main.innerHTML = '';
  var div = länka_in('div', main, '', {
      'class' : 'centerdiv'
    
  });
  var fieldset = länka_in('fieldset', div);
  
  var rubrik = länka_in('h2', fieldset);
  var span = länka_in('span', rubrik, '... ', {
      'style' : 'font-size: 60px; color: goldenrod'
  });
  var span = länka_in('span', rubrik, 'Nästan klart');

  var ol = länka_in('ol', fieldset, null, {
        'style' : 'text-align: left'
  });
  var li = länka_in('li', ol, 'Riv av talongen');
  var li = länka_in('li', ol, 'Lägg ner rösten i extern låda');
  var formulär = länka_in('form', fieldset, '', {
      'action' : '',
      'name' : 'avsluta_form',
      'onsubmit' : 'event.preventDefault();slutfor_registrering();return false;',
      'autocomplete' : 'off',
      'method' : 'get',
      'style' : ''
    
  });
  var submit_knapp = länka_in('input', formulär, '', {
      'type' : 'submit',
      'value' : 'Gå vidare >'
    
  });

  submit_knapp.focus();
}



function slutfor_registrering() {
  
  main.innerHTML = '';
  var div = länka_in('div', main, '', {
      'class' : 'centerdiv'
    
  });
  var fieldset = länka_in('fieldset', div, '', {
      'style' : 'position: relative'
  });

  var rubrik = länka_in('h2', fieldset);
  if (model['vnr'] >= 1) {
    
    var span = länka_in('span', rubrik, model['aktuellt_vnr']);
  
  }
  var span = länka_in('span', rubrik, ' ✓', {
      'style' : 'font-size: 60px; color: green'
  });
  var span = länka_in('span', rubrik, 'Klart');

  var p = länka_in('p', fieldset, 'Förtidsrösten har nu registrerats.');
  
  var kör = länka_in('input', fieldset, '', {
      'type' : 'submit',
      'onclick' : 'till();',
      'value' : 'En till >'
    
  });

  kör.focus();
  
  
}

function ta_emot_budrost() {
  
  
  
}

function efterregistrera() {
  
  
}

function efterregistrera_centralt() {
  
  hållpunkt('efterregistrera_centralt');
  
  model['vnr'] = '';

  var main = sätt_upp_finis_sida();
  
  var outer = länka_in('form', main, '', {
      'action' : '',
      'name' : 'valjare_pnr',
      'onsubmit' : 'event.preventDefault();sok_person(this, "efterregistrera2");return false;',
      'autocomplete' : 'off',
      'method' : 'get'
  });
  
  var div = länka_in('div', outer, '', {
      'style' : 'display:flex;gap:10px;flex-wrap:wrap;'
  });
  
  var inner = länka_in('div', div);
  

  
  var h3 = länka_in('h3', inner, 'Röstningslokal');
  
  var sel = länka_in('select', inner, '', {
      'onchange' : 'uppdatera("lokalid", this.value);uppdatera("lokalnamn", this.options[this.selectedIndex].text);',
      'required' : 'required'
  });
  var inner = länka_in('div', div);
  var h3 = länka_in('h3', inner, 'Datum');
  var datum = länka_in('input', inner, '', {
      'type':"date",
      'id':"meeting-time",
      'name':"meeting-time",
      'value':"2026-08-30",
      'min':"2026-08-26",
      'max':"2026-09-12",
  });
  
  var tom = länka_in('option', sel, '');
  
  if (model['inloggad']) {
  
    ladda_jox('GET', 'utlandsmyndigheter.csv', false, function (response) {
      
      var lokaler = läs_csv(response);
      
      var opt_group = länka_in('optgroup', sel, '', {
          'label' : 'Brevröst'
      });
      
      var opt_brev = länka_in('option', sel, 'Brevröst', {
          'value' : '99999'
      });      
      
      if (lokaler) {
                
        var land = null;
       
        for (var i = 0; i < lokaler.length; i++) {

          if (lokaler[i]['Land'] != land) {
            
            var opt_group = länka_in('optgroup', sel, '', {
                'label' : lokaler[i]['Land']
            });
            
            land = lokaler[i]['Land'];
            
          }
          
          var opt = länka_in('option', sel, lokaler[i]['Stad'] + ' (' + lokaler[i]['Typ'] + ')', {
              'value' : i
          });

          if (model['lokalid'] && model['lokalid'] == i) {
            
            opt.setAttribute('selected', 'selected');
            
          }

          
        }
        
        var opt_group = länka_in('optgroup', sel, '', {
            'label' : 'Brevröst'
        });
        
        var opt_brev = länka_in('option', sel, 'Brevröst', {
            'value' : '99999'
        });
        
        if (model['lokalid'] && model['lokalid'] == '99999') {
          
          opt_brev.setAttribute('selected', 'selected');
          
        }
        
        uppdatera();
        
      }
      
      return false;
    
    });
    
  }

  länka_in('h3', outer, 'Väljarens personnummer');

  
  
  var sökruta = sökPersonnummer(outer, 'pnr', '', false);
  
  sökruta.setAttribute('placeholder', '10 eller 12 siffror');
  
  sökruta.focus();


}

function efterregistrera2() {
  
  uppdatera();
  
  var main = document.getElementsByTagName('main')[0];
    
  main.innerHTML = '';

  var spinner = loader(main);
  
  var backa = länka_in('a', main, '< Avbryt', {
      'onclick' : 'till()',
      'href' : '#',
      'style' : 'padding-bottom: 10px'
  });
  if (person['personnummer'] == model['inloggad']['personnummer']) {
    
    console.log('(Du kan inte registrera din egen röst, inloggad = väljare...)');
    
  }

  var ol = länka_in('ol', main);
  var li = länka_in('li', ol);
  var textblock = länka_in('span', li, 'Kontrollera väljarens identitet');

  var personnummer_text = person.personnummer.substr(0, 4) + ' ';
  personnummer_text += person.personnummer.substr(4, 2) + ' ';
  personnummer_text += person.personnummer.substr(6, 2) + ' ';
  personnummer_text += ' - ';
  personnummer_text += person.personnummer.substr(8, 4);
  
  var dl = länka_in('dl', li, '', {
      'style' : 'gap: 30px'
  }); 
    
  if (person.inte.length < 2) {
    var div = länka_in('div', dl);
    var dt = länka_in('dt', div, 'Namn');
    var dd = länka_in('dd', div, person.enamn + ', ' + person.fnamn);
  }
  var div = länka_in('div', dl);  
  var dt = länka_in('dt', div, 'Personnummer');
  var dd = länka_in('dd', div, personnummer_text);


  if (model['lokalid'] == '99999') { //brevröst
    
    if (person.röstlängdsnr.length > 2) {

      var li = länka_in('li', ol);
      
      if (model['sida'] == 'efterregistrera_lokalt' && Math.floor(Math.random() * 10) != 0) {
        //brevröst som ska stanna på kommunen
      
        var textblock = länka_in('span', li, 'Brevrösten ska stanna i kommunen');
        var textblock = länka_in('p', li, 'Skriv röstlängdsnummer på brevrösten för att underlätta sortering.');
        
        var p = länka_in('p', li);
        
        var nr = person.röstlängdsnr;
        
        var table = länka_in('table', p, '', {
          'class' : 'rl_tabell'
        });
        var tr = länka_in('tr', table);
        var td = länka_in('td', tr, '');
        var td = länka_in('td', tr, '');
        var td = länka_in('td', tr, nr.substr(0, 2));
        var td = länka_in('td', tr, nr.substr(2, 2));
        var td = länka_in('td', tr, nr.substr(4, 4));
        var td = länka_in('td', tr, nr.substr(8), {
            'style' : 'text-align: right'
        });
    
        var p = länka_in('p', li);
        
        var formulär = länka_in('form', p, '', {
            'action' : '',
            'name' : 'vidare',
            'onsubmit' : 'event.preventDefault();slutfor_registrering(this);return false;',
            'autocomplete' : 'off',
            'method' : 'get'
          
        });
            
        var submit_knapp = länka_in('input', formulär, '', {
            'type' : 'submit',
            'value' : 'Bekräfta'
          
        });
        
        return false;
        
      } else {
        
        var textblock = länka_in('span', li, 'Brevrösten ska skickas vidare');
        var textblock = länka_in('p', li, 'Lägg ner brevrösten i ett fönsterkuvert för förtidsröst och klistra igen kuvertet.');
        
      }
      
    } else if (person.rd.length > 2) {
      
      var li = länka_in('li', ol);
      
      var p = länka_in('p', li, person.fnamn + ' ' + person.enamn + ' har rösträtt, men är inte inskriven i en röstlängd.');
      
      var p = länka_in('p', li, 'Valmyndigheten får lägga till den röstberättigade.');    

    }
    
  } else if (person.röstlängdsnr.length > 2) {


    var li = länka_in('li', ol);

    var textblock = länka_in('span', li, 'Markera hur väljaren har identifierat sig:');

    
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
 /* 
    var input = länka_in('input', tabs, null, {
        'type' : 'radio',
        'class' : 'menyknapp',
        'name' : 'id',
        'value' : 'bud',
        'id' : 'bud'
    });   
    
    
    var label = länka_in('label', tabs, 'Budröst ▼', {
        'for' : 'bud'
    });
    
    
    var bud_div = länka_in('div', tabs, '', {
        'id' : 'tabs-content-bud',
        'style' : 'padding: 20px;'
    });
    var textblock = länka_in('span', bud_div, 'Ange hur budet styrkt sin identitet:');

    var input = länka_in('input', bud_div, null, {
        'type' : 'radio',
        'class' : 'menyknapp',
        'name' : 'bud-id',
        'value' : 'bud-id-handling',
        'id' : 'bud-id-handling',
        'checked' : 'checked'
    }); 
    var label = länka_in('label', bud_div, 'Budet har visat upp ID-handling som stämmer med uppgifter på budkuvertet', {
        'for' : 'bud-id-handling'
    });
    
    var input = länka_in('input', bud_div, null, {
        'type' : 'radio',
        'class' : 'menyknapp',
        'name' : 'bud-id',
        'value' : 'bud-id-intygande',
        'id' : 'bud-intygande',
        'oninput' : 'document.getElementById("bud-id-intygande").focus()'
    }); 
    var label = länka_in('label', bud_div, 'Annan har intygat budets identitet och själv uppvisat ID-handling', {
        'for' : 'bud-intygande'
    });
    
    var div = länka_in('div', bud_div, '', {
        'id' : 'tabs-content-bud-intygande',
        'style' : 'padding-left: 20px'
    });
    var label = länka_in('label', div, 'Intygandes personnummer enligt uppvisad ID-handling:', {
        'for' : 'bud-id-intygande'
    });
    var input = länka_in('input', div, '', {
        'type' : 'text',
        'id' : 'bud-id-intygande',
        'inputmode' : 'numeric',
        'autocomplete' : 'off',
        'required' : 'required',
        'form' : 'koppla_form',
        'style' : 'margin-left: 10px',
        'maxlength' : '13',
        'pattern' : '(19|20)?[0-9]{2}(01|02|03|04|05|06|07|08|09|10|11|12)(01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31)[\\-]?[0-9]{4}'

      
    });
    
    
  
    var input = länka_in('input', bud_div, null, {
        'type' : 'radio',
        'class' : 'menyknapp',
        'name' : 'bud-id',
        'value' : 'bud-id-kand',
        'id' : 'bud-kand',
        'oninput' : 'document.getElementById("bud-id-kand").focus()'        
    }); 
    var label = länka_in('label', bud_div, 'Budet är känd av en röstmottagare', {
        'for' : 'bud-kand'
    });
    
    var div = länka_in('div', bud_div, '', {
        'id' : 'tabs-content-bud-kand',
        'style' : 'padding-left: 20px;'
    });
    var label = länka_in('label', div, 'Röstmottagarens initialer:', {
        'for' : 'bud-id-kand'
    });
    var input = länka_in('input', div, '', {
        'type' : 'text',
        'id' : 'bud-id-kand',
        'inputmode' : 'numeric',
        'autocomplete' : 'off',
        'required' : 'required',
        'maxlength' : '4',
        'form' : 'koppla_form',
        'style' : 'width: 100px; margin-left: 10px;text-transform: uppercase;',
        'pattern' : '.{2,}'
      
    });
    
*/

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
    var label = länka_in('label', div, 'Röstmottagarens initialer:', {
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
        'style' : 'width: 100px; margin-left: 10px;text-transform: uppercase;',
        'pattern' : '.{2,}'
      
    });
    
  } else if (person.rd.length > 2) {
    
    var li = länka_in('li', ol);
    
    var p = länka_in('p', li, person.fnamn + ' ' + person.enamn + ' har rösträtt, men är inte inskriven i en röstlängd.');
    
    var p = länka_in('p', li, 'Valmyndigheten måste först lägga till den röstberättigade.');    

  }
  
  
  
  if (person.röstlängdsnr.length > 2) {

    var li = länka_in('li', ol);

    //var textblock = länka_in('span', li, 'Skanna kuvert-ID på kuvertet, eller ange manuellt:');
    var textblock = länka_in('span', li, 'Skanna eller mata in kopplingskod');
    
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
        'maxlength' : '60'
      
    });
    
    input.focus();
    
    var submit_knapp = länka_in('input', formulär, '', {
        'type' : 'submit',
        'value' : 'Koppla'
      
    });
  }
  
  window.scrollTo(0, 100);

}

function efterregistrera_lokalt() {
  
  var main = sätt_upp_finis_sida();
   
  var div = länka_in('div', main, '', {
      'style' : 'display:flex;gap:10px;flex-wrap:wrap;'
  });
  
  
  var inner = länka_in('div', div);
  var h3 = länka_in('h3', inner, 'Röstningslokal');
  
  var sel = länka_in('select', inner, '', {
      'onchange' : 'uppdatera("lokalid", this.value);uppdatera("lokalnamn", this.options[this.selectedIndex].text);'
  });
  var inner = länka_in('div', div);
  var h3 = länka_in('h3', inner, 'Datum');
  var datum = länka_in('input', inner, '', {
      'type':"date",
      'id':"meeting-time",
      'name':"meeting-time",
      'value':"2026-08-30",
      'min':"2026-08-26",
      'max':"2026-09-12",
  });
  
  var tom = länka_in('option', sel, '');
  
  if (model['inloggad']) {
  
    ladda_jox('GET', 'rostningslokaler.csv', false, function (response) {
      
      var lokaler = läs_csv(response, [0, 2], 7);
      
      var min_kommun = model['kommun'];
      
      if (typeof lokaler[min_kommun] !== 'undefined') {
        
        var mina_lokaler = lokaler[min_kommun];
        
        mina_lokaler.sort(sorteraNamn);

        function sorteraNamn(a, b) {
                
                return a['LOKAL'].localeCompare(b['LOKAL']);
        }
        
        for (var i = 0; i < mina_lokaler.length; i++) {
          
          var opt = länka_in('option', sel, mina_lokaler[i]['LOKAL'], {
              'value' : mina_lokaler[i]['LOKALID']
          });

          if (model['lokalid'] && model['lokalid'] == mina_lokaler[i]['LOKALID']) {
            
            opt.setAttribute('selected', 'selected');
            
          }
          
        }
        var opt_group = länka_in('optgroup', sel, '', {
            'label' : 'Övrigt'
        });
        
        var opt_ambulerande = länka_in('option', sel, 'Ambulerande', {
            'value' : '0'
        });
        
        if (model['lokalid'] && model['lokalid'] == '0') {
          
          opt_ambulerande.setAttribute('selected', 'selected');
          
        }
        
        var opt_brev = länka_in('option', sel, 'Brevröst', {
            'value' : '99999'
        });
        
        if (model['lokalid'] && model['lokalid'] == '99999') {
          
          opt_brev.setAttribute('selected', 'selected');
          
        }
        
        uppdatera();
        
      }
      
      return false;
    
    });
    
  }
  länka_in('h3', main, 'Väljarens personnummer');

  
  var id_form = länka_in('form', main, '', {
      'action' : '',
      'name' : 'valjare_pnr',
      'onsubmit' : 'event.preventDefault();sok_person(this, "efterregistrera2");return false;',
      'autocomplete' : 'off',
      'method' : 'get'
  });

  var sökruta = sökPersonnummer(id_form, 'pnr', '', false);
  
  sökruta.setAttribute('placeholder', '10 eller 12 siffror');
  
  sökruta.focus();
  
  var nr_vf = länka_in('input', sökruta.parentNode, '', {
      'type' : 'number',
      'id' : 'nr_vf',
      'name' : 'nr_vf',
      'inputmode' : 'numeric',
      'maxlength' : '5',
      'min' : '0',
      'max' : '99999',
      'onblur' : 'uppdatera("vnr", this.value, true)',
      'style' : 'width: 80px;padding: 14px 0 14px 14px;',
      'value' : model['vnr']   
  }, sökruta);

}

function finis_start() {
  
  model['vnr'] = '';
  var main = sätt_upp_finis_sida();
  
    
}

function snabbfraga() {
  
  //var main = sätt_upp_basic_sida();
  
  
  
  //var body = document.getElementsByTagName('body')[0];
  //body.setAttribute('class', 'valfunk');
  
  var main = document.getElementsByTagName('main')[0];
    
  main.innerHTML = '';

  
  console.log(model['reggade_froster']);
  
  länka_in('h3', main, 'Kuvertets ID');

  länka_in('p', main, 'Skanna eller mata in kopplingskoden på kuvertet.');
  
  var id_form = länka_in('form', main, '', {
      'action' : '',
      'name' : 'kuvert-ID',
      'onsubmit' : 'uppdatera("kuvert-ID", kort_kod(document.getElementById("kuvert-ID_input").value), true);event.preventDefault();sok_kuvert();return false;',
      'autocomplete' : 'off',
      'method' : 'get'
  });
  
  var div = länka_in('div', id_form, '', {
      'class' : 'textinput-och-knapp',
      'style' : 'justify-content: start'
  });
  var input = länka_in('input', div, '', {
      'type' : 'text',
      'id' : 'kuvert-ID_input',
      'name' : 'kuvert-ID',
      'inputmode' : 'numeric',
      'required' : 'required',
      'maxlength' : '60'    
  });
  
  var submit_knapp = länka_in('input', div, '', {
      'type' : 'submit',
      'value' : 'Sök'
    
  });
  
  var svarsdiv = länka_in('div', main, '', {
      'id' : 'svarsdiv',
      'style' : 'display: inline-block'
  });

  input.focus();

}

function sok_kuvert() {

  sätt_upp_sida('visa_kuvert');
  
}

function visa_kuvert() {
  
  var main = document.getElementsByTagName('main')[0];
  
  var spinner = loader(main);

  var svarsdiv = document.getElementById('svarsdiv');
  var input = document.getElementById('kuvert-ID_input');
  
  input.select();
  
  svarsdiv.innerHTML = '';
  
  var nr = '0';

  if (model['reggade_froster'][model['kuvert-ID']])
  {
    
    nr = model['reggade_froster'][model['kuvert-ID']].nr;
    vnr = model['reggade_froster'][model['kuvert-ID']].vnr;

    var p = länka_in('p', svarsdiv);
    var span = länka_in('span', p, 'Kuvert med kuvert-ID ');
    var span = länka_in('span', p, model['kuvert-ID'], {
        'style' : 'font-weight: bold'
    });
    var span = länka_in('span', p, ' innehåller förtidsröst tillhörig:');
    
    var table = länka_in('table', p, '', {
      'class' : 'rl_tabell'
    });
    var tr = länka_in('tr', table);
    var td = länka_in('td', tr, vnr);
    var td = länka_in('td', tr, '');
    var td = länka_in('td', tr, nr.substr(0, 2));
    var td = länka_in('td', tr, nr.substr(2, 2));
    var td = länka_in('td', tr, nr.substr(4, 4));
    var td = länka_in('td', tr, nr.substr(8));

  } else {
    
    var p = länka_in('p', svarsdiv);
    var span = länka_in('span', p, 'Kuvert med kuvert-ID ');
    var span = länka_in('span', p, model['kuvert-ID'], {
        'style' : 'font-weight: bold'
    });
    var span = länka_in('span', p, ' saknar information.');
  }

/* träff varje gång--------

  ladda_jox('GET', 'vallokaler.csv', false, function (response) {
    
    var lokaler = läs_csv(response);
    var nr = kuvertIdTillNr(model['kuvert-ID'], lokaler);
    
    var svarsdiv = document.getElementById('svarsdiv');
    var input = document.getElementById('kuvert-ID_input');
    
    svarsdiv.innerHTML = '';
    
    var p = länka_in('p', svarsdiv);
    var span = länka_in('span', p, 'Kuvert med kuvert-ID ');
    var span = länka_in('span', p, model['kuvert-ID'], {
        'style' : 'font-weight: bold'
    });
    var span = länka_in('span', p, ' innehåller förtidsröst tillhörig:');
    
    var table = länka_in('table', p, '', {
      'class' : 'rl_tabell'
    });
    var tr = länka_in('tr', table);
    var td = länka_in('td', tr, '*');
    var td = länka_in('td', tr, '');
    var td = länka_in('td', tr, nr.substr(0, 2));
    var td = länka_in('td', tr, nr.substr(2, 2));
    var td = länka_in('td', tr, nr.substr(4, 4));
    var td = länka_in('td', tr, nr.substr(8));

    var p = länka_in('p', svarsdiv, '* = Här kommer löpnummer stå, men det kan inte visas i denna prototyp.', {
      'style' : 'font-size:small; color: gray;'
    });
    
    input.focus();
    input.select();
    
    return false;
  
  });

  */

  
}

function ikappregistrera() {
  
  if (!kollaLokal()) {return false;}
  var main = sätt_upp_basic_sida();
  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', 'valfunk');

  var div = länka_in('div', main, '', {
      'class' : 'centerdiv'
    
  });

  var fieldset = länka_in('fieldset', div);
  länka_in('legend', fieldset, 'Väljare i väljarförteckning');
  var h3 = länka_in('p', fieldset, 'Skriv in väljarens personnummer från väljarförteckningen.');
  
  var id_form = länka_in('form', fieldset, '', {
      'action' : '',
      'name' : 'valjare_pnr',
      'onsubmit' : 'event.preventDefault();sok_person(this, "efterregistrera2");return false;',
      'autocomplete' : 'off',
      'method' : 'get'
  });

  var vnr = länka_in('span', id_form, 'Rad ' + model['vnr'] + ':', {
      'style' : 'position:absolute; right:100%; padding:10px 10px 0 0;white-space:nowrap;'
  });
  
  var sökruta = sökPersonnummer(id_form, 'pnr', '', false);
  
  sökruta.setAttribute('placeholder', '10 eller 12 siffror');
  
  sökruta.focus();
  
}

function valj_lokal() {
  
  var main = sätt_upp_basic_sida();
  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', 'valfunk');

  
  länka_in('p', main, 'Välj en lokal:');
  
  var div = länka_in('div', main, '', {
      'style' : 'display:flex;gap:10px;flex-wrap:wrap;'
  });
  
  var inner = länka_in('div', div);
  var h3 = länka_in('h3', inner, 'Röstningslokal');
  
  var sel = länka_in('select', inner, '', {
      'onchange' : 'uppdatera("lokalid", this.value);uppdatera("lokalnamn", this.options[this.selectedIndex].text);till("ta_emot_fortidsrost")'
  });
  
  var tom = länka_in('option', sel, '');
  
  if (model['inloggad']) {
  
    ladda_jox('GET', 'rostningslokaler.csv', false, function (response) {
      
      var lokaler = läs_csv(response, [0, 2], 7);
      
      var min_kommun = model['kommun'];
      
      
      if (typeof lokaler[min_kommun] !== 'undefined') {
        
        var mina_lokaler = lokaler[min_kommun];
        
        mina_lokaler.sort(sorteraNamn);

        function sorteraNamn(a, b) {
                
                return a['LOKAL'].localeCompare(b['LOKAL']);
        }
        
        for (var i = 0; i < mina_lokaler.length; i++) {
          
          var opt = länka_in('option', sel, mina_lokaler[i]['LOKAL'], {
              'value' : mina_lokaler[i]['LOKALID']
          });

          if (model['lokalid'] && model['lokalid'] == mina_lokaler[i]['LOKALID']) {
            
            opt.setAttribute('selected', 'selected');
            
          }
          
        }
        
        var opt_ambulerande = länka_in('option', sel, 'Ambulerande', {
            'value' : '0'
        });
        
        if (model['lokalid'] && model['lokalid'] == '0') {
          
          opt_ambulerande.setAttribute('selected', 'selected');
          
        }
        
        uppdatera();
        
      }
      
      return false;
    
    });
    
  }

}

function oppna_stang_fortidsrostning() {
  
  if (!kollaLokal()) {return false;}
  var main = sätt_upp_basic_sida();
  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', 'valfunk');
  
  var p = länka_in('p', main);
  var span = länka_in('span', p, 'Röstmottagningen i ');
  var span = länka_in('span', p, model['lokalnamn'], {
      'style' : 'font-weight: bold'
      
  });
  var span = länka_in('span', p, ' är just nu:');

  
  if (model['lokalstatus'] != 'ok') {
    
    var p = länka_in('p', main, 'STÄNGD', {
        'style' : 'font-weight: bold'
    });
    
    var p = länka_in('p', main, 'Klicka här för att öppna röstmottagningen i ' + model['lokalnamn']);
    
    var öppna = länka_in('input', main, 'hel', {
      'type' : 'button',
      'style' : 'background-color: green;',
      'value' : 'Öppna röstmottagningen',
      'onclick' : 'if (confirm("Röstmottagningen i ' + model['lokalnamn'] + ' kommer nu att öppna för dagen!") == false) {return false;};uppdatera("lokalstatus", "ok");till("fortidsrostning")'
      
    });
    
  } else {
    
    var p = länka_in('p', main, 'ÖPPEN', {
        'style' : 'font-weight: bold'
    });

    var p = länka_in('p', main, 'Klicka på knappen för att stänga röstmottagningen i ' + model['lokalnamn']);
    var p = länka_in('p', main, 'Observera att INGEN längre då kan ta emot röster!');
    
    var stäng = länka_in('input', main, 'hel', {
      'type' : 'button',
      'style' : 'background-color: tomato;',
      'value' : 'Stäng röstmottagningen',
      'onclick' : 'if (confirm("Vill du verkligen stänga röstmottagningen i ' + model['lokalnamn'] + ' för idag?") == false) {return false;};uppdatera("lokalstatus", "stangd");till("fortidsrostning")'
      
    });  }
  
}

function sena_tillagg() {
  var main = sätt_upp_finis_sida();
  var p = länka_in('p', main, 'Här finns sena tillägg.');
  var p = länka_in('p', main, 'De ska läggas till sist.');
  
}

function valj_vallokal() {
  
  var main = sätt_upp_basic_sida();
  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', 'valfunk');

  länka_in('p', main, 'Välj en vallokal:');
  
  var div = länka_in('div', main, '', {
      'style' : 'display:flex;gap:10px;flex-wrap:wrap;'
  });
  
  var inner = länka_in('div', div);
  var h3 = länka_in('h3', inner, 'Vallokal');
  
  var sel = länka_in('select', inner, '', {
      'onchange' : 'uppdatera("lokalid", this.value);uppdatera("lokalnamn", this.options[this.selectedIndex].text);till("ta_emot_rost")'
  });
  
  var tom = länka_in('option', sel, '');
  
  if (model['inloggad']) {
  
    ladda_jox('GET', 'vallokaler.csv', false, function (response) {
      
      var lokaler = läs_csv(response, [0, 2], 7);
      
      var min_kommun = model['kommun'];
            
      if (typeof lokaler[min_kommun] !== 'undefined') {
        
        var mina_lokaler = lokaler[min_kommun];
        
        mina_lokaler.sort(sorteraNamn);

        function sorteraNamn(a, b) {
                
                return a['VALDISTRIKT'].localeCompare(b['VALDISTRIKT'], undefined, {numeric: true, sensitivity: 'base'});
        }
        
        for (var i = 0; i < mina_lokaler.length; i++) {
          
          var kod = mina_lokaler[i]['LÄNSKOD'] + mina_lokaler[i]['KOMMUNKOD'] + mina_lokaler[i]['VALDISTRIKTKOD']
          
          var opt = länka_in('option', sel, mina_lokaler[i]['VALDISTRIKT'], {
              'value' : kod
          });

          if (model['lokalid'] && model['lokalid'] == kod) {
            
            opt.setAttribute('selected', 'selected');
            
          }
          
        }
                
        uppdatera();
        
      }
      
      return false;
    
    });
    
  }

  
}

function granska_fortidsrost() {
  var main = sätt_upp_basic_sida();
  var body = document.getElementsByTagName('body')[0];
  body.setAttribute('class', 'valfunk');
  
  var antal_fortidsroster = Number(model['lokalid'].substr(5, 3));
  
  var antal_i_vd = antal_fortidsroster < 621 ? 621 + antal_fortidsroster : antal_fortidsroster * 2;
  
  var vd = model['lokalid'].substr(0, 8);
    
  var table = länka_in('table', main, null, {
    'style' : 'border: 1px solid black; border-collapse: collapse'
    
  });
  
  var tr = länka_in('tr', table);
  var th = länka_in('th', tr, 'Vd');
  var th = länka_in('th', tr, 'Nr');
  var th = länka_in('th', tr, 'RD');
  var th = länka_in('th', tr, 'KF');
  var th = länka_in('th', tr, 'RF');
  var th = länka_in('th', tr, 'FO');
  var th = länka_in('th', tr, 'KuvertID');
  var th = länka_in('th', tr, 'Tid mottagen');
  
  var nr = 0;
  
  var tid_start = 1787702730000;
  
  var tid_period = 1626900000;
  
  for (let i = 1; i <= antal_i_vd; i++) {
    
    var har_f = (i + antal_i_vd) % ((i*i % 7) + 1) == 0 ? true : false;
    
    if (har_f) {
      
      nr++;
      
      var l = model['person'].length - 1;
      
      var index = i % l;
      
      var rb = model['person'][index];
      var tr = länka_in('tr', table, null, {
          'style' : 'border: 1px solid black'
      });
            
      var td = länka_in('td', tr, model['lokalid']);
      
      var td = länka_in('td', tr);    
      var span = länka_in('span', td, i, {
          'style' : 'font-weight: bold'
      });
      
      var td = länka_in('td', tr);
      if (rb.rd.length > 2) {
        
        länka_in('span', td, '🟨');
      }
      
      var td = länka_in('td', tr);
      if (rb.kf.length > 2) {
        
        länka_in('span', td, '⬜');
      }

      var td = länka_in('td', tr);
      if (rb.rf.length > 2) {
        
        länka_in('span', td, '🟦');
      }

      var td = länka_in('td', tr);
/*       if (rb.fo.length > 2) {
        
        länka_in('span', td, '🟥');
      } */

      var td = länka_in('td', tr, ((antal_i_vd + i) * (index + 7)));// haha
      
      var tid = new Date(tid_start + ((tid_period / 10) * index));
      
      var td = länka_in('td', tr, tid.toLocaleDateString());
    }

  }

  var antal = länka_in('p', main, 'Antal förtidsröster som potentiellt kan finnas i vallokalen: ' + nr );
  
 }

function visa_fortidsrost () {
  
  var main = document.getElementsByTagName('main')[0];
  
  var spinner = loader(main);
  
  ladda_jox('GET', 'vallokaler.csv', false, function (response) {
    
    var lokaler = läs_csv(response);
    var nr = kuvertIdTillNr(model['kuvert-ID'], lokaler);
    
    var svarsdiv = document.getElementById('svarsdiv');
    var input = document.getElementById('kuvert-ID_input');
    
    svarsdiv.innerHTML = '';
    
    var p = länka_in('p', svarsdiv);
    var span = länka_in('span', p, 'Kuvert med kuvert-ID ');
    var span = länka_in('span', p, model['kuvert-ID'], {
        'style' : 'font-weight: bold'
    });
    var span = länka_in('span', p, ' innehåller förtidsröst tillhörig:');
    
    var table = länka_in('table', p, '', {
      'class' : 'tabell'
    });
    var tr = länka_in('tr', table);
    
    var här = model['lokalid'];
    
    var td = länka_in('td', tr);
    var span = länka_in('span', td, här.substr(0, 2) + ' ');
    var span = länka_in('span', td, här.substr(2, 2) + ' ');
    var span = länka_in('span', td, här.substr(4, 4) + ' ');
    var span = länka_in('span', td, nr.substr(8), {
      
        'style' : 'font-weight: bold'
    });
    
    
    
    
    input.focus();
    input.select();
    
    return false;
  
  });

  
  
}