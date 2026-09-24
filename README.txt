SITO DAVIDE SAMUELLI — Istruzioni
=================================

CONTENUTO
 index.html, termotecnici.html, elettrici.html, diagnosi.html, detrazioni.html,
 ape.html, news.html + style.css (grafica), config.js (i tuoi dati),
 site.js (funzioni), logo.png

1) I TUOI DATI
 Apri config.js e modifica email, telefono, P.IVA, indirizzo, link Dropbox (APE)
 e web3formsKey (vedi punto 3). Valgono per TUTTE le pagine.

2) METTERE ONLINE (Cloudflare Pages o Netlify)
 - Carica l'INTERA CARTELLA (non i singoli file). index.html e' la home.
 - Cloudflare Pages: crea un progetto e carica la cartella (Direct Upload),
   oppure collega una repo. Per aggiornare, ricarica la cartella.

3) RICEVERE I MODULI VIA EMAIL (Web3Forms — gratis, funziona ovunque)
 I moduli (contatti dei servizi, APE, newsletter) usano Web3Forms.
 a. Vai su web3forms.com, inserisci la tua email e ottieni una "Access Key".
 b. Incolla la chiave in config.js -> web3formsKey: "LA-TUA-CHIAVE".
 c. Ricarica il sito. Da quel momento ogni invio ti arriva via email.
 Senza la chiave, i moduli mostrano il ripiego "scrivimi via email".

4) NEWSLETTER — RACCOGLIERE E INVIARE
 Web3Forms ti INVIA via email ogni nuova iscrizione (le ricevi subito).
 Per GESTIRE la lista e INVIARE campagne, usa un servizio dedicato gratuito
 (es. MailerLite, Brevo o Mailchimp): registra i contatti e permette di
 inviare le newsletter. Quando lo attivi, sostituisci il modulo newsletter
 in news.html con il codice/embed fornito dal servizio (oppure imposta la
 "action" del form sull'indirizzo indicato dal servizio).

5) SCRIVERE NUOVI ARTICOLI (news.html)
 In news.html, nella sezione Articoli, copia un blocco <article>...</article>,
 incollalo come primo della lista e cambia tag, titolo, testo e data.
 Salva e ricarica il sito. (Vedi il commento gia' presente nel file.)

6) COLORE PER TEMATICA
 Ogni pagina ha un colore di sfondo e un'animazione diversi (classe theme-...
 sul <body>). Si regolano in style.css, sezione "TEMI PER PAGINA".

7) DOMINIO (facoltativo)
 Compra un dominio e collegalo dal pannello dell'hosting.
