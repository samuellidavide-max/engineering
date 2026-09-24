SITO DAVIDE SAMUELLI — Istruzioni
=================================

CONTENUTO
- index.html ............ Home (presentazione + servizi)
- termotecnici.html ..... Impianti termotecnici
- elettrici.html ........ Impianti elettrici
- diagnosi.html ......... Diagnosi e relazioni ex Legge 10
- detrazioni.html ....... Detrazioni fiscali (Ecobonus / Conto Termico)
- ape.html .............. Attestato di Prestazione Energetica (con caricamento su Dropbox)
- news.html ............. News + iscrizione newsletter
- style.css ............. Grafica condivisa da tutte le pagine
- config.js ............. I TUOI DATI (email, telefono, P.IVA, indirizzo, link Dropbox)
- site.js ............... Funzioni condivise (footer, moduli, privacy)
- logo.png .............. Logo

MODIFICARE I TUOI DATI
Apri config.js e cambia lì i tuoi recapiti: valgono per TUTTE le pagine.

METTERE ONLINE SU NETLIFY
1. Vai su app.netlify.com/drop
2. Trascina l'INTERA CARTELLA (non i singoli file) nella pagina.
   Netlify pubblica tutto e usa index.html come home.
3. Per aggiornare il sito in futuro, ri-trascina la cartella aggiornata.

MODULI (email delle richieste)
Ogni pagina ha il suo modulo, gestito da Netlify Forms (gratis):
  contatto-termotecnici, contatto-elettrici, contatto-diagnosi,
  contatto-detrazioni, preventivo-ape, newsletter
Per riceverli:
1. Netlify -> Forms -> "Enable form detection"
2. Ri-pubblica la cartella (nuovo deploy) perche' i moduli vengano rilevati
3. Netlify -> Forms -> ciascun modulo -> Notifications -> notifica email
NB: le foto dell'APE NON passano dai moduli (limite 8 MB): vanno sul link
    Dropbox impostato in config.js (linkCaricamento).

COLORE PER TEMATICA
Ogni pagina ha un leggero colore di sfondo diverso (classe "theme-..."
sul tag <body>). Si cambia in style.css nella sezione "TEMI PER PAGINA".

AGGIUNGERE ARTICOLI (news.html)
Gli articoli in news.html sono esempi: sostituisci i blocchi <article> con i tuoi.

DOMINIO PERSONALIZZATO (facoltativo)
Compra un dominio (es. Aruba/Namecheap) e collegalo in Netlify -> Domain settings.
