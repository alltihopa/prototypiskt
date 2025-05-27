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
  
    
  var nyheter = länka_in('p', main, 'Här visas nyheter!');
  
  
}

function vallokal() {
  console.log('vallokal');
  var main = sätt_upp_basic_sida();
  
  länka_in('p', main, 'Här kan man välja lokal som man har behörighet till!');
  länka_in('p', main, 'Har man bara behörighet till en, så är den vald automatiskt. Valet är då osynligt.');
  
  ladda_jox('GET', 'vallokaler.json', false, function (response) {
    
    var svar = JSON.parse(response);
    console.log(svar);
    
    return false;
  
  });
  

  
}

function om_rostmottagningen() {
  console.log('om_rostmottagningen');
  var main = sätt_upp_basic_sida();
  
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
  
  var hej = länka_in('p', main, 'Här kan du rapportera resultat!');
  
  
  
}


function incidentrapport() {
  console.log('incidentrapport');
  var main = sätt_upp_basic_sida();
  
  länka_in('p', main, 'Här kan man lämna en incidentrapport!');
  
  länka_in('input', main, null, {
      'type' : 'button',
      'value' : 'Skicka',
      'onclick' : 'uppdatera("status", "skickad")'
    
    
  });
  
}

function sidan_finns_inte() {
  console.log('sidan_finns_inte');
  var main = sätt_upp_basic_sida();
  
  var hej = länka_in('p', main, 'Sidan "' + model['parameter']['sida'] + '" finns inte.');
  
  
  
}

function ta_emot_rost() {
  console.log('ta_emot_rost');
  var main = sätt_upp_basic_sida();
  
  /*
  data vi jobbar med
  - inloggad
  - väljare
  - kuvertid
  - röst
  
  */
  
  länka_in('p', main, 'Här kan man ta emot en röst!');
  

}

function fortidsrostning() {
  console.log('fortidsrostning');
  var main = sätt_upp_basic_sida();
  
  länka_in('p', main, 'Här kan man hantera förtidsröstning!');
  var lista = länka_in('ul', main);
  var li = länka_in('li', lista, 'Välj plats? se alla platser, med statistik? "min" är highlightad?');
  var li = länka_in('li', lista, 'Nyheter?');
  
  ladda_jox('GET', 'rostningslokaler.json', false, function (response) {
    
    var svar = JSON.parse(response);
    console.log(svar);
    
    return false;
  
  });
  
}

function om_fortidsrostningen() {
  console.log('om_fortidsrostningen');
  var main = sätt_upp_basic_sida();
  
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
  
  
  
}

function ta_emot_fortidsrost2() {

  var main = document.getElementsByTagName('main')[0];
  
  var sok_pnr = document.getElementById('valjare_pnr').value;

  console.log('ta_emot_fortidsrost2 med pnr:' + sok_pnr);

  person = hitta_i_datat(model['person'], 'personnummer', sok_pnr);
  
  main.innerHTML = '';

  var spinner = loader(main);
  
  var backa = länka_in('a', main, '< Börja om', {
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
  
  var table = länka_in('table', main);
  
  var tr = länka_in('tr', table);
  var th = länka_in('th', tr, 'Förnamn');
  var th = länka_in('th', tr, 'Efternamn');
  var tr = länka_in('tr', table);
  var td = länka_in('td', tr, person.fnamn);
  var td = länka_in('td', tr, person.enamn);
  

  var tr = länka_in('tr', table);

  var th = länka_in('th', tr, 'Personnummer');
  var th = länka_in('th', tr, '');
  var tr = länka_in('tr', table);
  var td = länka_in('td', tr, person.personnummer);
  var td_r = länka_in('td', tr);
  
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
  
  if (person.rd.length < 2) {  
    input.setAttribute('disabled', 'disabled');
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
  if (person.rf.length < 2) {  
    input.setAttribute('disabled', 'disabled');
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
  if (person.kf.length < 2) {  
    input.setAttribute('disabled', 'disabled');
  }

   var input = länka_in('input', main, null, {
      'type' : 'checkbox',
      'class' : 'menyknapp',
      'name' : 'fo',
      'value' : 'fo',
      'id' : 'rostratt_fo'
  });
  var label = länka_in('label', main, 'Folkomröstning', {
      'for' : 'rostratt_fo',
      'class' : 'menyknapp',
      'style' : 'background-color: mistyrose'
  });
  if (person.fo.length < 2) {  
    label.setAttribute('style', 'display: none;');
  }

  var formulär = länka_in('form', main, '', {
      'action' : '',
      'name' : 'koppla_form',
      'onsubmit' : 'event.preventDefault();mottaget_och_klart(this);return false;',
      'autocomplete' : 'off',
      'method' : 'get',
      'style' : 'margin-top: 100px;'
    
  });
  
  var fieldset = länka_in('fieldset', formulär);
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
      'value' : '⌕',
      'style' : 'margin-left: -10px; font-size: 1.8rem'
    
  });
  
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
      'onsubmit' : 'event.preventDefault();mottaget_och_klart(this);return false;',
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
      'value' : '⌕',
      'style' : 'margin-left: -10px; font-size: 1.8rem'
    
  });
  
  window.scrollTo(0, 100);
}

function mottaget_och_klart(formulär) {
  
  var main = document.getElementsByTagName('main')[0];

  console.log('mottaget_och_klart');

  main.innerHTML = '';

  var spinner = loader(main);

  var h2 = länka_in('h2', main, '✅ Rösten är registrerad');
  
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
  var kör = länka_in('a', main, 'Registrera nästa röst',  {
      'href' : '',
      'onclick' : 'window.location.reload();',
      'class' : 'knapp'
    
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
      'onsubmit' : 'event.preventDefault();mottaget_och_klart(this);return false;',
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
  
  länka_in('p', main, 'Här kan man efterregistrera en förtidsröst!');
  
  var ol = länka_in('ol', main);
  var li = länka_in('li', ol, 'Välj vilken plats som ska efterregistreras för.');
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