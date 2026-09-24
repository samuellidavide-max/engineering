
document.addEventListener('DOMContentLoaded', function(){
  function set(id,v){var e=document.getElementById(id); if(e) e.textContent=v;}
  set('studioNameFine', CONFIG.studio); set('pivaFine', CONFIG.piva); set('footAddr', CONFIG.indirizzo);
  set('pvStudio', CONFIG.studio); set('pvAddr', CONFIG.indirizzo); set('pvPiva', CONFIG.piva);
  var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  var fm=document.getElementById('footMail'); if(fm){fm.textContent=CONFIG.email; fm.href='mailto:'+CONFIG.email;}
  var ft=document.getElementById('footTel'); if(ft){ft.textContent=CONFIG.telefono; ft.href='tel:'+CONFIG.telefono.replace(/\s/g,'');}
  ['pvEmail','pvEmail2'].forEach(function(id){var e=document.getElementById(id); if(e){e.textContent=CONFIG.email; e.href='mailto:'+CONFIG.email;}});
  var ov=document.getElementById('pvOverlay'), pl=document.getElementById('privacyLink');
  if(pl&&ov){
    pl.addEventListener('click',function(e){e.preventDefault(); if(CONFIG.privacyUrl){window.open(CONFIG.privacyUrl,'_blank','noopener');} else {ov.classList.add('open');}});
    var pc=document.getElementById('pvClose'); if(pc) pc.addEventListener('click',function(){ov.classList.remove('open');});
    ov.addEventListener('click',function(e){ if(e.target===ov) ov.classList.remove('open'); });
    document.addEventListener('keydown',function(e){ if(e.key==='Escape') ov.classList.remove('open'); });
  }
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
  document.querySelectorAll('.fade-up').forEach(function(el){io.observe(el);});

  document.querySelectorAll('form.jsform').forEach(function(form){
    form.addEventListener('submit', async function(e){
      e.preventDefault();
      var btn=form.querySelector('button[type=submit]'); var old=btn?btn.textContent:'';
      var okBox=form.parentNode.querySelector('.form-ok');
      var data=new FormData(form); var payload={};
      data.forEach(function(v,k){ if(['form-name','bot-field'].indexOf(k)<0) payload[k]=v; });
      payload.subject=(payload.oggetto||'Nuovo messaggio dal sito')+' — '+(payload.nome||payload.email||'');
      payload.from_name='Sito '+CONFIG.studio;
      payload.access_key=CONFIG.web3formsKey||'';
      function fallback(){
        var subj=encodeURIComponent(payload.subject);
        var lines=Object.keys(payload).filter(function(k){return ['access_key','from_name','subject'].indexOf(k)<0 && payload[k];}).map(function(k){return k+': '+payload[k];});
        var mail='mailto:'+CONFIG.email+'?subject='+subj+'&body='+encodeURIComponent(lines.join('\n'));
        var note=form.parentNode.querySelector('.form-fallback');
        if(!note){note=document.createElement('p');note.className='news-consent form-fallback';note.style.marginTop='12px';form.parentNode.appendChild(note);}
        note.innerHTML='Invio non riuscito online. Scrivimi direttamente: <a href="'+mail+'">apri l\'email</a> oppure a <b>'+CONFIG.email+'</b>.';
      }
      if(!CONFIG.web3formsKey){ fallback(); return; }
      if(btn){btn.disabled=true; btn.textContent='Invio…';}
      var ok=false;
      try{
        var r=await fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(payload)});
        var j=await r.json(); ok=!!j.success;
      }catch(err){ ok=false; }
      if(ok){ form.style.display='none'; if(okBox) okBox.hidden=false; }
      else { if(btn){btn.disabled=false; btn.textContent=old;} fallback(); }
    });
  });
});
