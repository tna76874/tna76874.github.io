(function($,Drupal){'use strict';Drupal.behaviors.customUsercentrics={attach:function(context,settings){uc.reloadOnOptOut('BJz7qNsdj-7');uc.setCustomTranslations({de:{VIDEO_DESCRIPTION:"Ich erkläre mein Einverständnis, dass mir dieser externe Inhalt angezeigt wird. Hierbei werden personenbezogene Daten an Drittplattformen übermittelt. Die Joachim Herz Stiftung kann dies nicht beeinflussen. Näheres dazu lesen Sie in unserer Datenschutzerklärung. Sie können die Anzeige externen Inhalts jederzeit widerrufen.",DEFAULT_TITLE:"Redaktionell empfohlener, externer Inhalt"}});var settings=JSON.parse(window.localStorage.getItem('uc_settings'));if(settings!==null){var services=settings['services'];for(let i=0;i<services.length;i++){if(services[i].id==='vdnsUKNlPP5Fnc'){if(services[i].status===true){$('#no-consent-ck12').hide();}
else{$('#no-consent-ck12').html('<div class="p-5 bg-gray" id="no-consent">\n'+
'<h3>Redaktionell empfohlener, externer Inhalt</h3>\n'+
'\n'+
'<p>Ich erkläre mein Einverständnis, dass mir dieser externe Inhalt angezeigt wird. Hierbei werden personenbezogene Daten an Drittplattformen übermittelt. Die Joachim Herz Stiftung kann dies nicht beeinflussen. Näheres dazu lesen Sie in unserer <a href="/datenschutzhinweis">Datenschutzerklärung</a>. Sie können die Anzeige externen Inhalts jederzeit widerrufen.</p>\n'+
'\n'+
'<div class="uc-embedding-buttons"><button class="btn border mr-3" onclick="uc.ucapi.showInfoModal(\'vdnsUKNlPP5Fnc\'); return false;">Mehr Informationen</button><button class="btn btn-primary" onclick="uc.ucapi.setConsents([{\'templateId\':\'vdnsUKNlPP5Fnc\', \'status\':true}]);document.getElementById(\'no-consent\').style.display = \'none\';">Akzeptieren</button></div>\n'+
'</div>');}}
if(services[i].id==='SNgmdWE4-rZK-A'){if(services[i].status===true){$('#no-consent-readspeaker').hide();$('#readspeaker_button1').show();}
else{$('#readspeaker_button1').hide();$('#no-consent-readspeaker').html('<div class="p-5 bg-gray" id="no-consent">\n'+
'<h3>Redaktionell empfohlener, externer Inhalt</h3>\n'+
'\n'+
'<p>Auf dieser Seite wird eine Text-to-Speech Lösung für eine bessere Barrierefreiheit genutzt. Ich erkläre mein Einverständnis, dass mir dieser externe Inhalt angezeigt wird. Hierbei werden personenbezogene Daten an Drittplattformen übermittelt. Die Joachim Herz Stiftung kann dies nicht beeinflussen. Näheres dazu lesen Sie in unserer <a href="/datenschutzhinweis">Datenschutzerklärung</a>. Sie können die Anzeige externen Inhalts jederzeit widerrufen. Die Seite wird nach der Zustimmung neu geladen.</p>\n'+
'\n'+
'<div class="uc-embedding-buttons"><button class="btn border mr-3" onclick="uc.ucapi.showInfoModal(\'SNgmdWE4-rZK-A\'); return false;">Mehr Informationen</button><button class="btn btn-primary" onclick="uc.ucapi.setConsents([{\'templateId\':\'SNgmdWE4-rZK-A\', \'status\':true}]);document.getElementById(\'no-consent\').style.display = \'none\';window.location.reload();">Akzeptieren</button></div>\n'+
'</div>');}}
if(services[i].id==='BJz7qNsdj-7'){if(services[i].status===true){$('#no-consent-video-articles').hide();}
else{$('#video-articles-list').hide();$('#no-consent-video-articles').html('<div class="p-5 bg-gray" id="no-consent">\n'+
'<h3>Redaktionell empfohlener, externer Inhalt</h3>\n'+
'\n'+
'<p>Ich erkläre mein Einverständnis, dass mir dieser externe Inhalt angezeigt wird. Hierbei werden personenbezogene Daten an Drittplattformen übermittelt. Die Joachim Herz Stiftung kann dies nicht beeinflussen. Näheres dazu lesen Sie in unserer <a href="/datenschutzhinweis">Datenschutzerklärung</a>. Sie können die Anzeige externen Inhalts jederzeit widerrufen.</p>\n'+
'\n'+
'<div class="uc-embedding-buttons"><button class="btn border mr-3" onclick="uc.ucapi.showInfoModal(\'BJz7qNsdj-7\'); return false;">Mehr Informationen</button><button class="btn btn-primary" onclick="uc.ucapi.setConsents([{\'templateId\':\'BJz7qNsdj-7\', \'status\':true}]);document.getElementById(\'no-consent\').style.display = \'none\';window.location.reload();">Akzeptieren</button></div>\n'+
'</div>');}}}}
if(window.location.hash==="#no-uc-banner"){var checkExist=setInterval(function(){if(typeof(UC_UI)=="object"){UC_UI.closeCMP();clearInterval(checkExist);}},100);}}};})(jQuery,Drupal);