document.addEventListener('DOMContentLoaded', () => {
    // --- Selectarea Elementelor DOM ---
    const loader = document.getElementById('loader');
    const dashboardContainer = document.getElementById('dashboard-container');
    const navLinks = document.querySelectorAll('.main-nav li');
    const sections = document.querySelectorAll('.dashboard-section');
    const modulesContainer = document.getElementById('modules-container');
    const innovationsContainer = document.getElementById('innovations-container');
    const moduleSearch = document.getElementById('module-search');
    const moduleFilter = document.getElementById('module-filter');
    const citationsList = document.getElementById('citations-list'); // Pentru citări

    // Elementele modalului
    const moduleModal = document.getElementById('module-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalTopicsList = document.getElementById('modal-topics-list');
    const modalTrendsList = document.getElementById('modal-trends-list');
    const modalProgressBar = document.getElementById('modal-progress-bar');
    const modalProgressPercentage = document.getElementById('modal-progress-percentage');
    const modalProgressStatus = document.getElementById('modal-progress-status');
    const modalActionBtn = document.getElementById('modal-action-btn');
    const modalResearchContent = document.getElementById('modal-research-content'); // Pentru conținutul detaliat al cercetării

    // --- Datele Cercetării Integrate ---
    const researchContent = {
        intro: `Avionica modernă reprezintă unul dintre domeniile tehnologice cu cel mai rapid ritm de dezvoltare din industria aeronautică contemporană, fiind fundamental pentru siguranța și eficiența operațiunilor de zbor. **Avionica** cuprinde totalitatea sistemelor electrice și electronice utilizate pe aeronave, sateliți artificiali și nave spațiale, având rolul esențial de a oferi piloților și sistemelor automatizate informațiile și capacitățile necesare pentru o navigație sigură și eficientă<sup data-citation="1">[1]</sup>.
        <br><br>
        Această cercetare analizează principalele sisteme de comunicații, navigație și identificare care formează coloana vertebrală a avionicii moderne, explorând tehnologiile de la sisteme tradiționale precum VOR și ILS până la soluții avansate bazate pe sateliți și tehnologii de ultimă generație.`,
        navigation: {
            title: 'Sisteme de navigație',
            sections: [
                {
                    heading: 'Sisteme tradiționale de navigație',
                    content: `**Sistemul VOR (VHF Omnidirectional Range)** reprezintă unul dintre pilonii navigației aeriene tradiționale, operând în gama de frecvențe 108-112 MHz cu 100 de canale și un ecart de frecvență de 50 Hz<sup data-citation="2">[2]</sup>. VOR permite aeronavelor să determine poziția lor față de o stație la sol prin măsurarea unghiului între nordul magnetic și linia dintre receptor. Sistemul oferă informații de relevment magnetic (QDM pentru apropierea către stația și QDR pentru îndepărtarea de stație), fiind esențial pentru navigația pe rute aeriene<sup data-citation="2">[2]</sup>.
                    <br><br>
                    **Sistemul ILS (Instrument Landing System)** funcționează ca un sistem de ghidare de precizie pentru aterizare, utilizând două fascicule radio pentru a oferi piloților ghidare atât orizontală (localizer), cât și verticală (glide slope)<sup data-citation="3">[3]</sup>. Localizatorul operează pe frecvențe VHF între 108-112 MHz, în timp ce glide slope-ul utilizează frecvențe UHF între 329.15-335 MHz<sup data-citation="4">[4]</sup>. Sistemul permite aterizări în condiții de vizibilitate redusă, cu categorii de performanță diferite (CAT I, II, III) în funcție de condițiile meteorologice<sup data-citation="5">[5]</sup>.
                    <br><br>
                    **Sistemul NDB/ADF (Non-Directional Beacon/Automatic Direction Finder)** utilizează unde radio în gama AM (200-1799 kHz) pentru a oferi informații de direcție către radiofaruri omnidirecționale<sup data-citation="6">[6]</sup>. Radiocompasul de la bordul aeronavei indică constant direcția către stația NDB, permițând navigația prin metoda "homing" sau zborul pe radiale specifice<sup data-citation="7">[7]</sup>.`
                },
                {
                    heading: 'Sisteme moderne de navigație',
                    content: `**Sistemul DME (Distance Measuring Equipment)** operează în banda 960-1215 MHz și măsoară distanța oblică între aeronavă și stația la sol prin calcularea timpului de propagare a semnalelor radio<sup data-citation="8">[8]</sup>. DME-ul trimite o pereche de impulsuri către transpondorul de la sol, care răspunde după o întârziere cunoscută, permițând calcularea distanței prin viteza luminii<sup data-citation="9">[9]</sup>. Sistemul este adesea asociat cu VOR pentru a oferi o navigație bidimensională completă<sup data-citation="10">[10]</sup>.
                    <br><br>
                    **Navigația RNAV/RNP (Area Navigation/Required Navigation Performance)** reprezintă un concept fundamental în navigația bazată pe performanță (PBN), permițând aeronavelor să zboare pe orice traiectorie dorită în cadrul acoperirii sistemelor de navigație terestre sau spațiale<sup data-citation="11">[11]</sup>. RNAV permite flexibilitate în planificarea rutelor, în timp ce RNP adaugă cerințe de monitorizare și alertare a performanței, oferind o mai mare precizie și fiabilitate<sup data-citation="12">[12]</sup>. Specificațiile RNP și RNAV sunt definite prin acuratețea laterală de navigație în mile nautice care trebuie atinsă în cel puțin 95% din timpul de zbor<sup data-citation="13">[13]</sup>.
                    <br><br>
                    **Sistemele GNSS și augmentarea acestora** constituie viitorul navigației aeronautice, cu GPS ca sistem principal complementat de sisteme de augmentare pentru îmbunătățirea preciziei. **WAAS (Wide Area Augmentation System)** utilizează o rețea de stații de referință la sol pentru a măsura variațiile semnalelor GPS și a transmite corecții prin sateliți geostaționari, îmbunătățind acuratețea și integritatea pentru toate fazele de zbor<sup data-citation="14">[14]</sup>. **GBAS (Ground Based Augmentation System)** oferă corecții locale prin legături VHF în jurul aeroporturilor, având potențialul de a înlocui sistemele ILS pentru aterizări de precizie<sup data-citation="15">[15]</sup>.`
                }
            ]
        },
        communications: {
            title: 'Sisteme de comunicații',
            sections: [
                {
                    heading: 'Comunicații voce tradiționale',
                    content: `Comunicațiile radio VHF și HF rămân fundamentale pentru interacțiunea pilot-controler de trafic aerian. Sistemele VHF (Very High Frequency) operează în condiții de vizibilitate directă, fiind utilizate pentru comunicații locale și regionale, în timp ce sistemele HF (High Frequency) permit comunicații pe distanțe lungi, inclusiv oceanice<sup data-citation="16">[16]</sup>.`
                },
                {
                    heading: 'Sisteme de comunicații digitale',
                    content: `**ACARS (Aircraft Communications Addressing and Reporting System)** reprezintă o revoluție în comunicațiile aeronautice, fiind un sistem de legături de date pentru transmisia mesajelor între aeronave și stațiile la sol<sup data-citation="17">[17]</sup>. Dezvoltat în anii '70 pentru a reduce volumul comunicațiilor vocale, ACARS permite transmiterea automată și manuală a mesajelor de tip ATC (controlul traficului aerian), AOC (controlul operațional aeronautic) și AAC (controlul administrativ al companiei aeriene)<sup data-citation="18">[18]</sup>.
                    <br><br>
                    **CPDLC (Controller Pilot Data Link Communications)** este un sistem bidirecțional de legături de date care permite controlerilor să transmită mesaje strategice non-urgente către aeronave ca alternativă la comunicațiile vocale<sup data-citation="19">[19]</sup>. Sistemul reduce congestionarea frecvențelor radio și erorile de comunicație, îmbunătățind siguranța și eficiența operațiunilor<sup data-citation="20">[20]</sup>.
                    <br><br>
                    **SATCOM (Satellite Communications)** oferă capacități de comunicații globale pentru aeronave, utilizând sateliți geostaționari pentru a asigura acoperire în zonele oceanic și remote unde comunicațiile terestre nu sunt disponibile<sup data-citation="21">[21]</sup>. Sistemele SATCOM moderne suportă atât comunicații vocale, cât și legături de date pentru aplicații ATC și operaționale<sup data-citation="22">[22]</sup>.`
                }
            ]
        },
        identification: {
            title: 'Sisteme de identificare și supraveghere',
            sections: [
                {
                    heading: 'Sisteme tradiționale de supraveghere',
                    content: `**Radarul primar** transmite impulsuri radio UHF sau SHF în toate direcțiile, detectând aeronavele prin reflexia undelor radio și calculând direcția și distanța prin măsurarea timpului de întoarcere<sup data-citation="23">[23]</sup>. **Radarul secundar (SSR)** utilizează transpondoare de la bordul aeronavelor pentru a îmbunătăți detectarea și identificarea, operând prin interogări pe 1030 MHz și răspunsuri pe 1090 MHz<sup data-citation="24">[24]</sup>.`
                },
                {
                    heading: 'Sisteme moderne de supraveghere',
                    content: `**Mode S (Mode Selective)** reprezintă o evoluție a SSR-ului, utilizând adrese unice de 24 de biți pentru fiecare aeronavă și permitând interogări selective<sup data-citation="25">[25]</sup>. Sistemul reduce interferențele radio și oferă informații mai detaliate, incluzând identificarea aeronavei și datele de altitudine<sup data-citation="26">[26]</sup>.
                    <br><br>
                    **ADS-B (Automatic Dependent Surveillance-Broadcast)** este o tehnologie de supraveghere în care aeronava determină automat poziția sa prin navigație satelitară și o transmite periodic, permițând urmărirea în timp real<sup data-citation="27">[27]</sup>. Sistemul oferă două servicii: "ADS-B Out" (transmisia datelor) și "ADS-B In" (recepția datelor de la alte aeronave pentru conștientizarea situațională)<sup data-citation="28">[28]</sup>.
                    <br><br>
                    **MLAT (Multilateration)** este o tehnică de supraveghere care determină poziția aeronavei prin măsurarea diferenței de timp de sosire (TDOA) a semnalelor transponderului la mai multe stații de recepție la sol<sup data-citation="29">[29]</sup>. Tehnologia oferă o alternativă cost-eficientă la radarul traditional și poate funcționa cu echipamentele de transponder existente<sup data-citation="30">[30]</sup>.
                    <br><br>
                    **TCAS (Traffic Collision Avoidance System)** este un sistem de evitare a coliziunilor care monitorizează aeronavele din proximitate echipate cu transpondoare și oferă alerturi de trafic (TA) și sfaturi de rezoluție (RA) pentru evitarea coliziunilor<sup data-citation="31">[31]</sup>. Sistemul operează independent de controlul traficului aerian și coordonează manevrele de evitare între aeronavele echipate<sup data-citation="32">[32]</sup>.`
                }
            ]
        },
        fms: {
            title: 'Sisteme integrate de management al zborului',
            sections: [
                {
                    heading: 'Flight Management System (FMS)',
                    content: `**FMS (Flight Management System)** este un computer multifuncțional de bord care automatizează o gamă largă de sarcini în zbor, reducând volumul de muncă al echipajului<sup data-citation="33">[33]</sup>. Sistemul integrează navigația, performanța aeronavei și operațiunile de zbor, oferind management automat al planului de zbor, optimizarea rutei și interfațarea cu sistemele de pilot automat<sup data-citation="34">[34]</sup>.`
                }
            ]
        },
        challengesAndFuture: {
            title: 'Provocări și dezvoltări viitoare în Avionică',
            sections: [
                {
                    heading: 'Provocări curente',
                    content: `Avionica modernă se confruntă cu provocări semnificative în ceea ce privește siguranța cibernetică<sup data-citation="37">[37]</sup><sup data-citation="40">[40]</sup><sup data-citation="56">[56]</sup><sup data-citation="57">[57]</sup><sup data-citation="61">[61]</sup>, interferențele GNSS și integrarea noilor tehnologii.
                    Sistemele anti-icing și de-icing devin din ce în ce mai importante pentru operațiunile în condiții adverse, utilizând tehnologii precum sistemele de aer prelevat, încălzirea electrică și sistemele chimice pentru prevenirea și îndepărtarea gheții<sup data-citation="35">[35]</sup><sup data-citation="36">[36]</sup>.`
                },
                {
                    heading: 'Dezvoltări viitoare',
                    content: `Dezvoltările viitoare includ implementarea tehnologiilor de inteligență artificială pentru optimizarea navigației, sistemele de comunicații bazate pe IP pentru o mai mare flexibilitate și integrare<sup data-citation="38">[38]</sup><sup data-citation="39">[39]</sup><sup data-citation="45">[45]</sup><sup data-citation="46">[46]</sup>, și îmbunătățirea rezilienței sistemelor prin redundanță și diversificare tehnologică.
                    <br><br>
                    Integrarea acestor sisteme într-o arhitectură coerentă și redundantă este esențială pentru menținerea standardelor înalte de siguranță ale aviației moderne, în timp ce dezvoltările viitoare promit o și mai mare automatizare și inteligență în gestionarea operațiunilor de zbor.`
                }
            ]
        },
        conclusion: `Sistemele de comunicații, navigație și identificare pentru avionică au evoluat dramatic de la instrumentele mecanice simple la sisteme integrate complexe bazate pe tehnologii digitale și satelitare. Această evoluție continuă să modeleze viitorul aviației, cu accent pe siguranța sporită, eficiența operațională și capacitatea de a opera în medii din ce în ce mai complexe și aglomerate.`
    };

    const citationsData = [
        "Avionică - Wikipedia https://ro.wikipedia.org/wiki/Avionic%C4%83",
        "Sistemul de Navigaţie Apropiata VOR (Very High Frequency ... - Scribd https://ro.scribd.com/presentation/463057531/VOR",
        "Instrument Landing System - ILS (Beacon) - IVAO Wiki https://wiki.ivao.aero/en/home/training/documentation/Instrument_Landing_System_-_ILS_Beacon",
        "Instrument landing system - Wikipedia https://en.wikipedia.org/wiki/Instrument_landing_system",
        "[PDF] Operational Notes of Instrument Landing System - CASA https://www.casa.gov.au/sites/default/files/2021-09/operational-notes-on-instrument-landing-system.pdf",
        "Radiocompasul | PDF - Scribd https://ro.scribd.com/doc/256929428/Radiocompasul",
        "Manual de Navigatie Aeriana | PDF - Scribd https://ro.scribd.com/doc/272544800/Manual-de-Navigatie-Aeriana",
        "Distance measuring equipment - Wikipedia https://en.wikipedia.org/wiki/Distance_measuring_equipment",
        "Distance Measuring Equipment (DME) | SKYbrary Aviation Safety https://skybrary.aero/articles/distance-measuring-equipment-dme",
        "GBN - Distance Measuring Equipment (DME) - FAA https://www.faa.gov/about/office_org/headquarters_offices/ato/service_units/techops/navservices/gbng/lpdme",
        "ENR 1.17 Performance-Based Navigation (PBN) and Area Navigation (RNAV) https://www.faa.gov/air_traffic/publications/atpubs/aip_html/part2_enr_section_1.17.html",
        "Required Navigation Performance (RNP) | SKYbrary Aviation Safety https://skybrary.aero/articles/required-navigation-performance-rnp",
        "Performance-Based Navigation (PBN) and Area Navigation (RNAV) https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap1_section_2.html",
        "Wide Area Augmentation System - Wikipedia https://en.wikipedia.org/wiki/Wide_Area_Augmentation_System",
        "Satellite Navigation - GBAS - How It Works - FAA https://www.faa.gov/about/office_org/headquarters_offices/ato/service_units/techops/navservices/gnss/laas/howitworks",
        "Sisteme de aeronave: ultimele 7 tehnologii pentru navigarea pe cer https://www.flightschoolusa.com/ro/sisteme-de-aeronave-ultime-7-tehnologii/",
        "Aircraft Communications, Addressing and Reporting System https://skybrary.aero/articles/aircraft-communications-addressing-and-reporting-system",
        "ACARS Explained: How It Keeps Aircraft Connected - Pilot Institute https://pilotinstitute.com/acars-explained/",
        "Controller Pilot Data Link Communications (CPDLC) - SKYbrary https://skybrary.aero/articles/controller-pilot-data-link-communications-cpdlc",
        "Controller–pilot data link communications (CPDLC) https://www.youtube.com/watch?v=uC2_zbJ4qcc",
        "SATCOM | SKYbrary Aviation Safety https://skybrary.aero/articles/satcom",
        "What is SATCOM? - Iris User Support - ESSP-SAS https://satcom-dls-support.essp-sas.eu/european-satcom/what-is-satcom",
        "Transponder Radar Beacon - Radar Beacon Transponder https://a-aeronave-4.aprendamos-aviacion.com/2022/10/transponder-radar-beacon-radar-beacon.html",
        "Principiile radiolocaţiei - Transponderul - Radartutorial.eu https://www.radartutorial.eu/13.ssr/sr17.ro.html",
        "Mode S | SKYbrary Aviation Safety https://skybrary.aero/articles/mode-s",
        "[PDF] Mode S Elementary Surveillance (ELS) Operations Manual https://www.eurocontrol.int/sites/default/files/2019-04/surveillance-mode-s-els-ops-manual-ed-1.0-20110102.pdf",
        "Automatic Dependent Surveillance–Broadcast - Wikipedia https://en.wikipedia.org/wiki/Automatic_Dependent_Surveillance%E2%80%93Broadcast",
        "What is ADS – B/C Automatic Dependent Surveillance - Broadcast https://sassofia.com/blog/what-is-ads-b-c-automatic-dependent-surveillance-broadcast/",
        "Multilateration (MLAT) https://www.multilateration.info/surveillance/multilateration.html",
        "Understanding multilateration (MLAT) for more precise aircraft ... https://spire.com/blog/aviation/understanding-multilateration-mlat-for-more-precise-aircraft-positioning-free-from-interference/",
        "Traffic Collision Avoidance System (TCAS) - ATR Aircraft https://www.atr-aircraft.com/aviation-glossary/traffic-collision-avoidance-system/",
        "What is TCAS? | Bristol Groundschool https://www.bristol.gs/what-is-tcas/",
        "Flight Management System | SKYbrary Aviation Safety https://skybrary.aero/articles/flight-management-system",
        "Flight management system - Wikipedia https://en.wikipedia.org/wiki/Flight_management_system",
        "Aircraft Ice Protection Systems | SKYbrary Aviation Safety https://skybrary.aero/articles/aircraft-ice-protection-systems",
        "Aircraft Anti-Icing and De-Icing Systems for Safe Flights - Pilot Mall https://www.pilotmall.com/blogs/news/6-aircraft-anti-icing-and-de-icing-systems",
        "Securitatea rețelelor și sisteme de comunicații în medii Smart https://rria.ici.ro/en/vol-30-no-1-2020/network-security-and-communication-systems-in-smart-environments/",
        "Rețelele de comunicații 5G https://www.internetmobile.ro/retelele-de-comunicatii-5g/",
        "Adaptarea și Optimizarea Tehnologiilor Wireless de Proximitate în vederea Integrării în Sisteme Pervazive de Comunicații Adaptation and Optimization of Wireless Proximity Technologies intended for Integration into Pervasive Communications Systems https://www.semanticscholar.org/paper/407455023679cfab3533614fee820aed1e1ffb5c",
        "Challenges in Communication and Information Security Management (Provocari in Managementul Securitatii Sistemelor Informatice Si De Comunicatii) https://www.semanticscholar.org/paper/c2bb952e61d2fa072e5a7ce704772ec248ebe9a7",
        "AMENINȚĂRI AERIENE CLASICE ȘI IMPACTUL LOR ASUPRA SISTEMELOR MODERNE DE RACHETE SOL-AER https://www.semanticscholar.org/paper/1575f8a0689f8071de98a7918b38dfe2ccd7bbe0",
        "Aspecte Legate De Cooperarea Internațională În Domeniul Criminalisticii (Aspects Related to International Cooperation in the Field of Forensic Science) https://www.semanticscholar.org/paper/0c140e48c035b3a800f023ff3b8d412f41019629",
        "A Contribution to the Characterization of Radiation-induced Soft Errors in Sigma-Delta Modulators and SRAM Memories https://www.semanticscholar.org/paper/3d2ab4ed5f7cf8c30b9bc3dd1ce2bda012989412",
        "Degree studies at EETAC https://www.semanticscholar.org/paper/06711cb2ac87605ed25a307e1212fd5379f55c92",
        "ITS-G5 AND MOBILE WIMAX PERFORMANCE IN VEHICLE-TO-INFRASTRUCTURE COMMUNICATIONS https://www.semanticscholar.org/paper/6c73b8e5c7d4f26e8a0077ab4b2b113a0959897f",
        "Improvements of DVB-RCS 2 to DVB-RCS https://www.semanticscholar.org/paper/177a49a9e39c76a8ca2c5d9b9962c393a9b1de5a",
        "Instrumente de bord - Wikipedia https://ro.wikipedia.org/wiki/Instrumente_de_bord",
        "Aeronautica: Definiție, ramuri și cariere - Aviation Academy https://aviationacademy.ro/aeronautica-definire-ramuri-cariere/",
        "[PDF] Reglementarea Aeronautică Civilă Română RACR-CNS Operearea https://www.caa.ro/uploads/pages/RACR-CNS,%20Vol%20III,%20edi%C8%9Bia%202_2014,%20consolidat.pdf",
        "[PDF] NAVIGAŢIE AERIANĂ - Aeroclubul Cluj-Napoca http://www.aeroclubulcluj.ro/pdf/NAVIGATIE_AERIANA.pdf",
        "[PDF] Aeroclubul Romaniei - cunoasterea generala a aeronavei https://aerodrombarza.ro/wp-content/uploads/2020/07/Cunoastinte-generale-despre-aeronave.pdf",
        "Sisteme de Avionica | PDF - Scribd https://ro.scribd.com/document/219620972/Sisteme-de-Avionica",
        "[PDF] Aeroclubul Romaniei - Navigatie aeriana PPL https://aerodrombarza.ro/wp-content/uploads/2020/07/Navigatie-aeriana.pdf",
        "[PDF] Contribuţii la configurarea unor structuri de testare automată cu ... https://dspace.upt.ro/jspui/bitstream/123456789/4395/1/BUPT_TD_Simu%20Dan.pdf",
        "[PDF] Aeroclubul Romaniei - Comunicatii Aeronautice PPL https://aerodrombarza.ro/wp-content/uploads/2020/07/Comunicatii.pdf",
        "Scurte considerații privind sancționarea fraudelor comise prin sisteme informatice şi mijloace de plată electronice https://www.semanticscholar.org/paper/114e0d4d79f1d3ae58ab9483f1569f0d52d23ae6",
        "Sisteme De Securitate A Tranzactiilor Electronice https://www.semanticscholar.org/paper/c5cc5d0de8727a8eb412bf770e801fe0dc87cdb2",
        "OPERAȚII DE RĂZBOI INFORMAȚIONAL DESFĂȘURATE DE FORȚE ARMATE ‒ CONCEPTE, METODE ȘI POTENȚIALE DEZVOLTĂRI https://revista.unap.ro/index.php/Impact_ro/article/view/1466",
        "Aspecte Procesuale Privind Investigarea Cazurilor De Fraudă Cu Cărţi De (Credit Criminal Law Aspects Related to Investigation of Credit Card Frauds) https://www.semanticscholar.org/paper/004799be50c4de6459cf858592df11aaeeffd80",
        "Proiectarea, dezvoltarea şi întreţinerea siturilor web https://www.telework.ro/ro/e-books/proiectarea-dezvoltarea-si-intretinerea-siturilor-web/",
        "INFRACŢIUNEA DE INTERCEPTARE ILEGALĂ A UNEI TRANSMISII DE DATE INFORMATICE https://www.semanticscholar.org/paper/aeea131c4998ef0472842dd0b840474b3bdae69d",
        "Modelarea matematică şi elaborarea software-lor pentru simularea în timp real pe calculator a problemelor de dinamică cu multe grade de libertate https://www.semanticscholar.org/paper/3e13c4d9f4bdf5041f7936b789ffb8c2e53585fa",
        "PROGRAMA ANALITICA A CURSULUI https://www.semanticscholar.org/paper/ce000b043e91424db85d8e9eff4d2e3ce1d9587",
        "Advances in UAV Avionics Systems Architecture, Classification and Integration: A Comprehensive Review and Future Perspectives https://arxiv.org/pdf/2501.00856.pdf",
        "An event-driven link-level simulator for validation of AFDX and Ethernet avionics networks https://arxiv.org/html/2312.13969v1",
        "PAT Avionics shows G-HULP heads-up-display system for recreational aircraft https://newatlas.com/pat-avionics-hud-recreational-aircraft/23477/",
        "Head Up Display (HUD) | SKYbrary Aviation Safety https://skybrary.aero/articles/head-display-hud",
        "GPS Air Navigator – Applications sur Google Play https://play.google.com/store/apps/details?id=com.nksoftware.gpsairnavigator",
        "Avionica si GPS - PilotShop Romania https://www.pilotshop.ro/ro/10-avionica-si-gps",
        "Head-up Display - Wikipedia https://ro.wikipedia.org/wiki/Head-up_Display",
        "GPS Air Navigator – Aplicații pe Google Play https://play.google.com/store/apps/details?id=com.nksoftware.gpsairnavigator&hl=ro",
        "Avionika - Wikipedija, prosta enciklopedija https://sl.wikipedia.org/wiki/Avionika",
        "FLIGHT INSTRUMENTS HEADS UP DISPLAYS HUD https://www.youtube.com/watch?v=Kf6UWcbkif3",
        "VHF Omnidirectional Range (VOR) Experimental Positioning for Stratospheric Vehicles https://www.mdpi.com/2226-4310/8/9/263/pdf",
        "High-resolution signal-in-space measurements of VHF omnidirectional ranges using UAS https://ars.copernicus.org/articles/17/1/2019/ars-17-1-2019.pdf",
        "Concept and design of a UAS-based platform for measurements of RF signal-in-space https://www.adv-radio-sci.net/14/1/2016/ars-14-1-2016.pdf",
        "FMCW Radar-Aided Navigation for Unmanned Aircraft Approach and Landing in AAM Scenarios: System Requirements and Processing Pipeline https://www.mdpi.com/1424-8220/25/8/2429",
        "Deep learning for aircraft classification from VHF radar signatures https://onlinelibrary.wiley.com/doi/pdfdirect/10.1049/rsn2.12067",
        "Assessment of suitability of radionavigation devices used in air https://www.polsl.pl/Wydzialy/RT/ZN_T/pelne_tekste/vol90/99_ZN90_2016_JafernikKrasuckiMichta.pdf",
        "Sensing Requirements and Vision-Aided Navigation Algorithms for Vertical Landing in Good and Low Visibility UAM Scenarios https://www.mdpi.com/2072-4292/14/15/3764/pdf?version=1659703621",
        "FMCW Radar-Aided Navigation for Unmanned Aircraft Approach and Landing in AAM Scenarios: System Requirements and Processing Pipeline https://pmc.ncbi.nlm.nih.gov/articles/PMC12031103/",
        "The Feasibility of Remotely Piloted Aircrafts for VOR Flight Inspection https://www.mdpi.com/1424-8220/20/7/1947",
        "Application of nonlinear filtering to navigation system design using passive sensors https://zenodo.org/record/1262692/files/article.pdf",
        "How To Navigate to an NDB Using the Automatic Direction Finder ... https://www.youtube.com/watch?v=JHZEribdeao",
        "Instrument Landing System (ILS) | SKYbrary Aviation Safety https://skybrary.aero/articles/instrument-landing-system-ils",
        "[PDF] Reglementare Aeronautică Civilă Română - Ministerul Transporturilor https://www.mt.ro/web14/documente/acte-normative/2014/5_08/anexa%201.pdf",
        "[PDF] Reglementarea aeronautică civilă română RACR-CNS Operarea ... https://www.caa.ro/uploads/pages/RACR%20CNS%20vol%20I%20ed%203%202020.pdf",
        "[PDF] Reglementarea aeronautică civilă română RACR-AD-PETA ... https://www.caa.ro/uploads/pages/RACR-AD-PETA%20ed%203%20draft%204.pdf",
        "PENGARUH SISTEM PENGENDALIAN MANAJEMEN DAN KECERDASAN EMOSIONAL TERHADAP KINERJA STAFF ATC DENGAN LOCUS OF CONTROL SEBAGAI VARIABEL PEMODERASI (Studi Kasus pada Perum LPPNPI AirNav Indonesia) http://journals.ums.ac.id/index.php/reaksi/article/view/1976",
        "ANALISIS POSTUR KERJA DALAM SISTEM MANUSIA MESIN UNTUK MENGURANGI FATIGUE AKIBAT KERJA PADA BAGIAN AIR TRAFFIC CONTROL (ATC) DI PT. ANGKASA PURA II POLONIA MEDAN https://www.semanticscholar.org/paper/26c04f08f5232c700bf6126704a7e5b7e49d7f66",
        "Perancangan Sistem Pintar Prediksi Trajektori Pesawat Menggunakan Data ADS-B dengan Metode Kalman Filter untuk Mencegah Collision http://192.168.55.218/wartaardhia/index.php/wartaardhia/article/view/310",
        "SISTEM INFORMASI RATING PERSONALMENGGUNAKAN METODE BACKWARD CHAINING (STUDI KASUS AIR TRAFFIC CONTROLLER AIRNAV INDONESIA) https://www.semanticscholar.org/paper/2d57c75b87bf80cc72ec7768a50d60785ab6808c",
        "EVALUASI KINERJA STRUKTUR BANGUNAN GEDUNG KULIAH C UNISA YOGYAKARTA MENGGUNAKAN PUSHOVER ANALYSIS DENGAN METODE FEMA 356 DAN ATC-40EVALUATION OF STRUCTURE PERFORMANCE OF GEDUNG KULIAH C UNISA YOGYAKARTA USING PUSHOVER ANALYSIS USING FEMA 356 AND ATC-40 METHODS https://www.semanticscholar.org/paper/8eb41f253afb9c0acac96c0ccbb178057a958bc0",
        "Pelaksanaan Sistem Manajemen Keselamatan Dan Kesehatan Kerja (SMK3) Di Ptpn XIII (Persero) Kecamatan Parindu Kebupaten Sanggau https://www.semanticscholar.org/paper/f20176a374a20ed86804030d00c2476b831cbb",
        "Road-map Pengembangan Intelligent Transport System di Surabaya http://iptek.its.ac.id/index.php/jps/article/view/3346",
        "The importance of briefing in reducing complications after invasive medical procedures https://www.semanticscholar.org/paper/d3d50b00829bb8d530a4beff6e0383ff065f6fe",
        "Air Traffic Control Tools Assessment https://ojs.cvut.cz/ojs/index.php/mad/article/download/4143/3996",
        "Holographic Mixed Reality System for Air Traffic Control and Management https://www.mdpi.com/2076-3417/9/16/3370/pdf?version=1566470360",
        "ATC and Air Traffic Control Administration System - AIS https://blog.airport-information-systems.com/atc-and-air-traffic-control-admin-system/",
        "Air traffic control - Wikipedia https://en.wikipedia.org/wiki/Air_traffic_control",
        "Transponder code - Wikipedia https://it.wikipedia.org/wiki/Transponder_code",
        "[PDF] PAC-ATS - AACR https://www.caa.ro/uploads/pages/PAC%20ATS_Editia3_2022_Amdt1_2023.pdf",
        "W.H. Harman https://www.ll.mit.edu/sites/default/files/publication/doc/tcas-system-preventing-midair-collisions-harman-ja-6399.pdf",
        "Mengenal Lebih Dekat Air Traffic Control - ATC https://www.youtube.com/watch?v=1dc1HgcweDQ",
        "Rancangan Aplikasi Berbasis Augmented Reality Dalam Pemeliharaan Front panel DME (Distance Measuring Equipment) Merek Thales Tipe 435 https://ojs.unikom.ac.id/index.php/telekontran/article/view/13586",
        "ANALISIS PENURUNAN JANGKAUAN PANCARAN T-DME (TERMINAL-DISTANCE MEASURING EQUIPMENT) MERK NEC NNG-1796A DI BANDARA INTERNASIONAL MINANGKABAU https://jurnal.sttkd.ac.id/index.php/ts/article/view/1103",
        "Protection Level Formulations for Distance Measuring Equipment (DME) https://www.ion.org/publications/abstract.cfm?articleID=18587",
        "Flight test of a pseudo‐ranging signal compatible with existing distance measuring equipment (DME) ground stations https://navi.ion.org/content/67/3/567",
        "Message Design for a Robust Time Signal using Distance Measuring Equipment (DME) Pulse Pair Position Modulated (PPPM) Pseudo lite https://ieeexplore.ieee.org/document/9317492/",
        "Software-Defined Architecture and Front-End Optimization for DO-178B Compliant Distance Measuring Equipment https://ieeexplore.ieee.org/document/10124320/",
        "Design of a Passive Ranging System Using Existing Distance Measuring Equipment (DME) Signals & Transmitters https://onlinelibrary.wiley.com/doi/10.1002/navi.83",
        "Navigation by Pair of Distance Measuring Equipment with Extrapolated Data https://ieeexplore.ieee.org/document/9766941/",
        "Underlay Spectrum Sharing with L-Band Distance Measuring Equipment for Aeronautical Communications https://link.springer.com/10.1007/s11277-022-10045-0",
        "A Single Distance Measuring Equipment (DME) Station-Based Positioning System for Alternative Position Navigation and Timing (APNT) https://onlinelibrary.wiley.com/doi/10.1002/navi.121",
        "Performance-based navigation - Wikipedia https://en.wikipedia.org/wiki/Performance-based_navigation"
    ];

    // --- Datele Modulelor ---
    let modulesData = [
        {
            id: 'comms-vhf-uhf',
            icon: 'fas fa-broadcast-tower',
            title: 'Bazele Comunicațiilor VHF/UHF',
            description: 'Explorarea principiilor fundamentale ale comunicațiilor radio VHF și UHF utilizate în aviație, incluzând echipamente, frecvențe și protocoale.',
            fullDescription: 'Acest modul acoperă arhitectura, principiile de funcționare și aplicațiile practice ale sistemelor de comunicații VHF (Very High Frequency) și UHF (Ultra High Frequency) esențiale pentru controlul traficului aerian și comunicațiile pilot-turn/pilot-pilot. Se va discuta despre modulația AM, squelch, sistemele SELCAL și importanța coordonării frecvențelor.',
            topics: ['Sisteme radio VHF/UHF', 'Frecvențe aeronautice', 'Modulație AM', 'SELCAL', 'Echipamente transceptor'],
            progress: 100,
            status: 'Finalizat',
            trends: ['VoIP în aviație', 'Software-Defined Radios (SDR)', 'Digital Radio (ACARS/VDL Mode 2)'],
            researchModule: false // Flag pentru a distinge modulele de cercetare
        },
        {
            id: 'nav-gnss',
            icon: 'fas fa-satellite-dish',
            title: 'Sisteme Globale de Navigație prin Satelit (GNSS)',
            description: 'Studiul aprofundat al GPS, GLONASS, Galileo și Beidou, precum și al sistemelor de augmentare (SBAS, GBAS).',
            fullDescription: 'Modulul detaliază funcționarea și importanța sistemelor globale de navigație prin satelit (GNSS), cu accent pe GPS, GLONASS, Galileo și Beidou. Se vor analiza principiile de triangulație, sursele de eroare, integritatea semnalului și sistemele de augmentare precum WAAS, EGNOS (SBAS) și la nivel local (GBAS), esențiale pentru operațiunile de precizie.',
            topics: ['Principii GPS', 'WAAS/EGNOS (SBAS)', 'GLONASS, Galileo, Beidou', 'Integrare FMS', 'Erori și precizie'],
            progress: 75,
            status: 'În Progres',
            trends: ['Multi-constellation GNSS', 'Sisteme de navigație autonome', 'Integrare avansată cu INS'],
            researchModule: false
        },
        {
            id: 'ident-transponders',
            icon: 'fas fa-fingerprint',
            title: 'Sisteme de Identificare și Transpondere',
            description: 'Analiza transponderelor Mode A/C, Mode S și a sistemelor ADS-B pentru identificare și supraveghere.',
            fullDescription: 'Acest modul se concentrează pe evoluția și funcționarea transponderelor aeronautice, de la cele clasice Mode A/C, la cele moderne Mode S cu capabilități de datalink. O atenție deosebită se va acorda Automatic Dependent Surveillance-Broadcast (ADS-B), tehnologie cheie pentru supravegherea modernă a traficului aerian, inclusiv principiile, beneficiile și cerințele de implementare.',
            topics: ['Transpondere Mode A/C', 'Transpondere Mode S', 'Principii ADS-B In/Out', 'TCAS', 'Sisteme de supraveghere'],
            progress: 50,
            status: 'În Progres',
            trends: ['ADS-B ca standard global', 'Fuziune de date din senzori multipli', 'Cybersecuritate în sisteme de identificare'],
            researchModule: false
        },
        {
            id: 'nav-ins',
            icon: 'fas fa-compass',
            title: 'Principii de Navigație Inerțială (INS/IRS)',
            description: 'Cum funcționează giroscoapele și accelerometrele pentru a asigura navigația autonomă. Diferențe între INS și IRS.',
            fullDescription: 'Modulul explică fundamentele sistemelor de navigație inerțială (INS) și ale sistemelor de referință inerțială (IRS). Se vor studia giroscoapele (mecanice și laser/FOG), accelerometrele, algoritmii de integrare și estimare a poziției, vitezei și atitudinii. Se vor detalia avantajele navigației autonome și integrarea INS/IRS cu GNSS.',
            topics: ['Giroscoape', 'Accelerometre', 'Algoritmi de navigație', 'IRS vs INS', 'Erori inerțiale'],
            progress: 25,
            status: 'Neparcurs',
            trends: ['Microsisteme inerțiale (MEMS)', 'Integrare tightly-coupled cu GNSS', 'Sisteme inerțiale pentru UAM/UAV'],
            researchModule: false
        },
        {
            id: 'comms-datalinks',
            icon: 'fas fa-link',
            title: 'Datalinks Aeronautice (ACARS, FANS)',
            description: 'Explorarea sistemelor de comunicații digitale pentru date și mesaje între aeronave și sol.',
            fullDescription: 'Acest modul se concentrează pe datalinks-urile digitale esențiale pentru operațiunile aviatice moderne. Se vor analiza sistemele ACARS (Aircraft Communications Addressing and Reporting System) pentru mesaje text și raportări automate, și Future Air Navigation Systems (FANS) care permit comunicații pilot-controlor (CPDLC) și Automatic Dependent Surveillance-Contract (ADS-C) prin satelit, optimizând rutele și sporind siguranța.',
            topics: ['Principii ACARS', 'CPDLC', 'ADS-C', 'Datalinks satelitare', 'Optimizarea rutelor'],
            progress: 0,
            status: 'Neparcurs',
            trends: ['ATN/IP (Aeronautical Telecommunication Network over IP)', 'Comunicații bazate pe rețea', 'Standardizarea datalink-urilor'],
            researchModule: false
        },
        {
            id: 'nav-radar',
            icon: 'fas fa-radar',
            title: 'Sisteme RADAR în Avionică',
            description: 'De la RADAR-ul meteo la RADAR-ul de înălțime, înțelegerea principiilor și aplicațiilor lor.',
            fullDescription: 'Modulul acoperă diversele tipuri de sisteme RADAR utilizate în aviație. Se va discuta despre principii de bază (puls-eco, Doppler), RADAR-ul meteo pentru detectarea formațiunilor atmosferice periculoase, RADAR-ul de înălțime (Radio Altimeter) pentru măsurarea precisă a distanței față de sol și rolul RADAR-ului în sistemele de navigație și evitare a coliziunilor.',
            topics: ['Principii RADAR', 'RADAR meteo', 'Radio Altimeter', 'Evitare coliziuni (TCAS)', 'Antene și transmisie'],
            progress: 0,
            status: 'Neparcurs',
            trends: ['RADAR-uri cu stare solidă (solid-state)', 'Multi-mode RADAR', 'Integrare cu sisteme de viziune sintetică'],
            researchModule: false
        }
    ];

    // Adaugă modulele bazate pe cercetare
    modulesData.push({
        id: 'research-intro',
        icon: 'fas fa-clipboard-list',
        title: 'Introducere în Sisteme CNI Avionică',
        description: 'Vei descoperi ce este avionica și importanța sistemelor CNI pentru siguranța și eficiența zborurilor moderne.',
        fullDescription: researchContent.intro,
        topics: ['Definiția Avionicii', 'Importanța Sistemelor CNI', 'Obiectivele Cercetării'],
        progress: 0,
        status: 'Neparcurs',
        trends: ['Evoluția avionicii', 'Integrare sisteme'],
        researchModule: true,
        category: 'research'
    });

    modulesData.push({
        id: 'research-navigation',
        icon: 'fas fa-map-marked-alt',
        title: 'Cercetare: Sisteme de Navigație',
        description: 'Explorează principiile și evoluția sistemelor de navigație, de la cele tradiționale la GNSS și augmentarea lor.',
        fullDescription: researchContent.navigation.sections.map(s => `<h4>${s.heading}</h4>${s.content}`).join(''),
        topics: ['VOR', 'ILS', 'NDB/ADF', 'DME', 'RNAV/RNP', 'GNSS', 'WAAS', 'GBAS'],
        progress: 0,
        status: 'Neparcurs',
        trends: ['GNSS multi-constelație', 'Navigație bazată pe performanță', 'Integrare INS/GNSS'],
        researchModule: true,
        category: 'research'
    });

    modulesData.push({
        id: 'research-communications',
        icon: 'fas fa-comments',
        title: 'Cercetare: Sisteme de Comunicații',
        description: 'Aprofundează tehnologiile de comunicații vocale și digitale, de la VHF/HF la ACARS, CPDLC și SATCOM.',
        fullDescription: researchContent.communications.sections.map(s => `<h4>${s.heading}</h4>${s.content}`).join(''),
        topics: ['VHF/HF', 'ACARS', 'CPDLC', 'SATCOM'],
        progress: 0,
        status: 'Neparcurs',
        trends: ['VoIP în aviație', 'ATN/IP', 'Standardizarea datalink-urilor'],
        researchModule: true,
        category: 'research'
    });

    modulesData.push({
        id: 'research-identification',
        icon: 'fas fa-id-badge',
        title: 'Cercetare: Sisteme de Identificare și Supraveghere',
        description: 'Înțelege cum funcționează radarul, transponderele, ADS-B, MLAT și TCAS pentru siguranța traficului aerian.',
        fullDescription: researchContent.identification.sections.map(s => `<h4>${s.heading}</h4>${s.content}`).join(''),
        topics: ['Radar Primar/Secundar', 'Mode S', 'ADS-B', 'MLAT', 'TCAS'],
        progress: 0,
        status: 'Neparcurs',
        trends: ['ADS-B global', 'Fuziune de date din senzori', 'Securitate cibernetică'],
        researchModule: true,
        category: 'research'
    });

    modulesData.push({
        id: 'research-fms-challenges',
        icon: 'fas fa-rocket',
        title: 'Cercetare: FMS, Provocări & Viitor',
        description: 'O analiză a sistemelor FMS, a provocărilor aviației moderne și a direcțiilor viitoare de dezvoltare în avionică.',
        fullDescription: `<h3>Sisteme integrate de management al zborului</h3>${researchContent.fms.sections[0].content}<h3>Provocări și dezvoltări viitoare</h3>${researchContent.challengesAndFuture.sections.map(s => `<h4>${s.heading}</h4>${s.content}`).join('')}<h3>Concluzie</h3><p>${researchContent.conclusion}</p>`,
        topics: ['FMS', 'Securitate Cibernetică', 'Interferențe GNSS', 'AI în Avionică', 'Sisteme IP', 'Sisteme Anti-Icing'],
        progress: 0,
        status: 'Neparcurs',
        trends: ['Automatizare inteligentă', 'Reziliență sisteme', 'UAM/UAV'],
        researchModule: true,
        category: 'research'
    });


    // --- Datele Inovațiilor ---
    const innovationsData = [
        {
            id: 'atn-ip',
            title: 'Rețeaua de Telecomunicații Aeronautice (ATN/IP)',
            company: 'ICAO, EUROCONTROL',
            description: 'Migrarea de la sisteme de comunicații bazate pe circuite la o infrastructură bazată pe Internet Protocol (IP) pentru a suporta creșterea traficului aerian și servicii avansate.',
            impact: 'Îmbunătățirea securității cibernetice, scalabilitate și eficiență operațională.'
        },
        {
            id: 'nextgen-sesar',
            title: 'NextGen & SESAR (Sisteme de Management al Traficului Aerian)',
            company: 'FAA (SUA), Comisia Europeană',
            description: 'Programe de modernizare a sistemelor de management al traficului aerian, incluzând concepte ca Four-Dimensional Trajectory (4D-T) și optimizarea spațiului aerian.',
            impact: 'Reducerea întârzierilor, a consumului de combustibil și a emisiilor de CO2.'
        },
        {
            id: 'uam-cni',
            title: 'Sisteme CNI pentru Mobilitatea Aeriană Urbană (UAM)',
            company: 'Diverse start-up-uri și giganți tech',
            description: 'Dezvoltarea de soluții CNI adaptate pentru aeronavele electrice cu decolare și aterizare verticală (eVTOL) și drone, operând în medii urbane dense.',
            impact: 'Permite operarea sigură și eficientă a transportului aerian în orașe, cu noi provocări legate de interferențe și densitate.'
        },
        // Din cercetare, provocări și dezvoltări viitoare
        {
            id: 'cybersecurity-avionics',
            title: 'Securitatea Cibernetică în Avionică',
            company: 'Industria Aeronautică Globală',
            description: 'O provocare majoră în avionică modernă este protejarea sistemelor electronice împotriva atacurilor cibernetice, având în vedere dependența crescândă de rețele și legături de date digitale.',
            impact: 'Asigurarea integrității și disponibilității sistemelor critice pentru zbor, prevenirea accesului neautorizat și a manipulării datelor.'
        },
        {
            id: 'ai-in-avionics',
            title: 'Inteligența Artificială în Sistemele Avionice',
            company: 'Cercetare și Dezvoltare',
            description: 'Implementarea AI pentru optimizarea navigației, managementul autonom al zborului și sisteme de asistență pentru piloți, permițând decizii mai rapide și mai precise.',
            impact: 'Creșterea eficienței operaționale, reducerea volumului de muncă al echipajului și îmbunătățirea siguranței prin predicție și adaptare.'
        },
        {
            id: 'resilience-systems',
            title: 'Reziliența Sistemelor CNI',
            company: 'Standarde Industriale',
            description: 'Dezvoltarea de arhitecturi redundante și diversificate pentru a asigura funcționarea continuă a sistemelor de comunicații, navigație și identificare, chiar și în condiții de interferențe sau defecțiuni.',
            impact: 'Reducerea vulnerabilităților și creșterea fiabilității operaționale, esențială pentru siguranța zborului.'
        }
    ];

    // --- Logica Ecranului de Încărcare ---
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            dashboardContainer.style.opacity = '1';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500); // Permite completarea efectului de fade out
        }, 1500); // Simulează un timp de încărcare de 1.5 secunde
    });

    // --- Inițializare Particles.js ---
    // Această secțiune necesită ca biblioteca particles.js să fie încărcată (ex: dintr-un CDN)
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ff7b00" },
                "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } },
                "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
                "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
                "line_linked": { "enable": true, "distance": 150, "color": "#ffa633", "opacity": 0.4, "width": 1 },
                "move": { "enable": true, "speed": 3, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
            },
            "interactivity": {
                "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } }
            },
            "retina_detect": true
        });
    }

    // --- Logica Navigației Sidebar ---
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetSectionId = link.dataset.section;

            // Elimină clasa "active-nav" de la toate link-urile de navigație
            navLinks.forEach(nav => nav.classList.remove('active-nav'));
            // Adaugă clasa "active-nav" link-ului apăsat
            link.classList.add('active-nav');

            // Ascunde toate secțiunile
            sections.forEach(section => section.classList.remove('active-section'));
            // Afișează secțiunea țintă
            document.getElementById(targetSectionId).classList.add('active-section');

            // Actualizează hash-ul URL-ului pentru navigare cu back/forward
            history.pushState(null, '', `#${targetSectionId}`);
        });
    });

    // Gestionarea încărcării inițiale pe baza hash-ului URL-ului
    const initialHash = window.location.hash.substring(1);
    if (initialHash && document.getElementById(initialHash)) {
        const initialNavLink = document.querySelector(`.main-nav li[data-section="${initialHash}"]`);
        if (initialNavLink) {
            initialNavLink.click(); // Simulează un click pentru a activa secțiunea
        } else {
            // Dacă hash-ul este invalid, revine la dashboard
            document.querySelector('.main-nav li[data-section="dashboard"]').click();
        }
    } else {
        document.querySelector('.main-nav li[data-section="dashboard"]').click(); // Setează dashboard-ul ca implicit
    }

    // --- Randarea Modulelor și Interacțiune ---
    function renderModules(filterText = '', filterStatus = 'all') {
        modulesContainer.innerHTML = ''; // Golește modulele existente

        const filteredModules = modulesData.filter(module => {
            const matchesSearch = module.title.toLowerCase().includes(filterText.toLowerCase()) ||
                                  module.description.toLowerCase().includes(filterText.toLowerCase());
            const matchesStatus = filterStatus === 'all' || module.status.toLowerCase().replace(/\s/g, '_') === filterStatus;
            return matchesSearch && matchesStatus;
        });

        filteredModules.forEach(module => {
            const moduleCard = document.createElement('div');
            moduleCard.classList.add('module-card', 'card');
            moduleCard.dataset.moduleId = module.id;

            let statusClass = '';
            if (module.progress === 100) {
                statusClass = 'status--success';
            } else if (module.progress > 0) {
                statusClass = 'status--warning';
            } else {
                statusClass = 'status--info';
            }

            moduleCard.innerHTML = `
                <div class="flex justify-between items-center mb-4">
                    <i class="${module.icon} icon"></i>
                    <span class="status ${statusClass}">${module.status}</span>
                </div>
                <h3>${module.title}</h3>
                <p>${module.description}</p>
                <div class="module-progress-bar-container">
                    <div class="module-progress-bar" style="width: ${module.progress}%;"></div>
                </div>
                <div class="module-progress-text">${module.progress}% Completat</div>
            `;
            modulesContainer.appendChild(moduleCard);

            moduleCard.addEventListener('click', () => openModuleModal(module.id));
        });
    }

    // --- Randarea Inovațiilor ---
    function renderInnovations() {
        innovationsContainer.innerHTML = '';
        innovationsData.forEach(innovation => {
            const innovationCard = document.createElement('div');
            innovationCard.classList.add('innovation-card', 'card');
            innovationCard.innerHTML = `
                <h3>${innovation.title}</h3>
                <div class="company">Dezvoltat de: ${innovation.company}</div>
                <p class="description">${innovation.description}</p>
                <p class="impact"><i class="fas fa-star" style="color: var(--orange-light);"></i> Impact: ${innovation.impact}</p>
            `;
            innovationsContainer.appendChild(innovationCard);
        });
    }

    // --- Randarea Citațiilor ---
    function renderCitations() {
        citationsList.innerHTML = '';
        citationsData.forEach((citation, index) => {
            const li = document.createElement('li');
            li.setAttribute('id', `citation-${index + 1}`); // Adaugă ID pentru link-uri directe
            // Crează un element 'a' pentru a face citarea un link, dacă conține URL
            const citationText = `[${index + 1}] ${citation}`;
            const urlMatch = citation.match(/(https?:\/\/[^\s]+)/);
            if (urlMatch) {
                const url = urlMatch[0];
                const textWithoutUrl = citation.replace(url, '').trim();
                li.innerHTML = `[${index + 1}] <a href="${url}" target="_blank" rel="noopener noreferrer">${textWithoutUrl}</a> <span class="citation-url" style="color: var(--text-muted); font-size: 0.85em;">(${url})</span>`;
            } else {
                li.textContent = citationText;
            }
            citationsList.appendChild(li);
        });
    }

    // --- Logica Modalului de Detalii Modul ---
    function openModuleModal(moduleId) {
        const module = modulesData.find(m => m.id === moduleId);
        if (!module) return;

        modalTitle.textContent = module.title;
        
        // Afișează conținutul de cercetare sau descrierea scurtă, în funcție de tipul modulului
        if (module.researchModule) {
            modalResearchContent.innerHTML = module.fullDescription;
            modalResearchContent.closest('div').style.display = 'block';
            modalDescription.style.display = 'none'; // Ascunde descrierea scurtă
            modalTopicsList.closest('div').style.display = 'none'; // Ascunde subiectele
            modalTrendsList.closest('div').style.display = 'none'; // Ascunde tendințele
        } else {
            modalDescription.textContent = module.fullDescription; // Descrierea completă pentru modulele standard
            modalResearchContent.innerHTML = '';
            modalResearchContent.closest('div').style.display = 'none';
            modalDescription.style.display = 'block'; // Afișează descrierea scurtă
            
            // Reafișează secțiunile Subiecte și Tendințe pentru modulele standard
            modalTopicsList.closest('div').style.display = 'block';
            modalTrendsList.closest('div').style.display = 'block';
        }

        // Populează subiectele cheie
        modalTopicsList.innerHTML = '';
        if (module.topics && module.topics.length > 0) {
            module.topics.forEach(topic => {
                const li = document.createElement('li');
                li.textContent = topic;
                modalTopicsList.appendChild(li);
            });
        } else if (!module.researchModule) { // Ascunde secțiunea doar dacă nu e modul de cercetare și nu are topicuri
            modalTopicsList.closest('div').style.display = 'none';
        }


        // Populează tendințele curente
        modalTrendsList.innerHTML = '';
        if (module.trends && module.trends.length > 0) {
            module.trends.forEach(trend => {
                const li = document.createElement('li');
                li.textContent = trend;
                modalTrendsList.appendChild(li);
            });
        } else if (!module.researchModule) { // Ascunde secțiunea doar dacă nu e modul de cercetare și nu are tendințe
            modalTrendsList.closest('div').style.display = 'none';
        }

        modalProgressBar.style.width = `${module.progress}%`;
        modalProgressPercentage.textContent = `${module.progress}%`;
        modalProgressStatus.textContent = module.status;

        modalActionBtn.textContent = module.progress === 100 ? 'Revizuiește Modulul' : (module.progress > 0 ? 'Continuă Modulul' : 'Începe Modulul');
        modalActionBtn.innerHTML = (module.progress === 100 ? '<i class="fas fa-redo"></i> Revizuiește Modulul' : (module.progress > 0 ? '<i class="fas fa-play-circle"></i> Continuă Modulul' : '<i class="fas fa-play-circle"></i> Începe Modulul'));

        moduleModal.classList.remove('hidden');

        // Adaugă event listener pentru link-urile de citare din modal
        modalResearchContent.querySelectorAll('sup[data-citation]').forEach(sup => {
            sup.addEventListener('click', (event) => {
                event.preventDefault();
                const citationId = event.target.dataset.citation;
                window.location.hash = `citation-${citationId}`; // Navighează la citare
                modalCloseBtn.click(); // Închide modalul
                // Comută la secțiunea de resurse pentru a vedea citarea
                document.querySelector('.main-nav li[data-section="resources"]').click();
            });
        });
    }

    modalCloseBtn.addEventListener('click', () => {
        moduleModal.classList.add('hidden');
    });

    moduleModal.addEventListener('click', (event) => {
        if (event.target === moduleModal) {
            moduleModal.classList.add('hidden');
        }
    });

    modalActionBtn.addEventListener('click', () => {
        // Simulează acțiunea modulului (ex: navigare către conținutul modulului, actualizare progres)
        alert(`Acțiune pentru modulul "${modalTitle.textContent}" inițiată!`);
        moduleModal.classList.add('hidden');
        // Într-o aplicație reală, ai încărca aici conținutul real al modulului.
        // Pentru un modul de cercetare, aceasta ar putea doar să înregistreze citirea.
    });


    // --- Actualizarea Statisticilor Dashboard ---
    function updateDashboardStats() {
        // Numără doar modulele non-cercetare pentru progresul general
        const standardModules = modulesData.filter(m => !m.researchModule);

        const totalModules = standardModules.length;
        const completedModules = standardModules.filter(m => m.progress === 100).length;
        const totalProgress = standardModules.reduce((sum, m) => sum + m.progress, 0);
        const overallPercentage = totalModules > 0 ? Math.round(totalProgress / totalModules) : 0;

        document.getElementById('overall-progress-percentage').textContent = `${overallPercentage}%`;
        document.getElementById('overall-progress-bar').style.width = `${overallPercentage}%`;
        document.getElementById('completed-modules-count').textContent = completedModules;
        document.getElementById('total-modules-count').textContent = totalModules;
        
        const nextModule = standardModules.find(m => m.progress < 100);
        document.getElementById('next-module-hint').textContent = nextModule ? nextModule.title : 'Toate modulele de bază finalizate!';

        document.getElementById('stat-completed-modules').textContent = completedModules;
        document.getElementById('stat-quiz-avg').textContent = '85%'; // Simulat
        document.getElementById('stat-hours-studied').textContent = '42'; // Simulat
    }


    // --- Listenere pentru Căutare și Filtrare Module ---
    let currentSearchText = '';
    let currentFilterStatus = 'all';

    moduleSearch.addEventListener('input', (event) => {
        currentSearchText = event.target.value;
        renderModules(currentSearchText, currentFilterStatus);
    });

    moduleFilter.addEventListener('change', (event) => {
        currentFilterStatus = event.target.value;
        renderModules(currentSearchText, currentFilterStatus);
    });


    // --- Apeluri Inițiale pentru Randarea Conținutului ---
    updateDashboardStats();
    renderModules();
    renderInnovations();
    renderCitations(); // Randarea citațiilor la încărcarea paginii
});
