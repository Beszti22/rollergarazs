// RollerGarázs - Kétnyelvű szótár (Hungarian / English)
const translations = {
  hu: {
    // Navigáció
    "nav.brand": "ROLLER GARÁZS",
    "nav.tagline": "Elektromos roller szerviz & tuning • Göd",
    "nav.services": "Szolgáltatások",
    "nav.issues": "Típushibák",
    "nav.calculator": "Árajánlatkérés",
    "nav.workshop": "Műhely & Videók",
    "nav.reviews": "Vélemények",
    "nav.contact": "Kapcsolat",
    "nav.callCta": "Hívás: +36 30 894 7739",
    "nav.openStatus": "Nyitva 18:00-ig • Göd",

    // Hero Szekció
    "hero.badge": "⚡ GÖDI ROLLER SZERVIZ & TUNING MŰHELY • 5.0 ★ ÉRTÉKELÉS",
    "hero.title": "Defekt? Kotyog a kormány? Nem indul?<br><span class=\"glow-red\">Megjavítjuk.</span> Akár még ma.",
    "hero.subtitle": "KuKirin, Xiaomi, Segway-Ninebot és nagy teljesítményű gépek professzionális javítása Gödön. Gyors defektjavítás, nullrevízió, hidraulikus fékcsere és típushiba-megszüntetés 100% garanciával.",
    "hero.quickPhone": "Azonnali telefonos egyeztetés:",
    "hero.quickAddress": "Műhely címe Gödön:",
    "hero.quickRoute": "Útvonaltervezés →",
    "hero.ctaEstimate": "Gyors Árajánlatkérés",
    "hero.ctaCall": "Azonnali hívás: +36 30 894 7739",
    "hero.stat1.val": "5.0 ★",
    "hero.stat1.label": "Kiváló ügyfélértékelés",
    "hero.stat2.val": "KuKirin",
    "hero.stat2.label": "Kiemelt típus-specialista",
    "hero.stat3.val": "1-2 nap",
    "hero.stat3.label": "Gyors szerviz átfutás",
    "hero.stat4.val": "Göd",
    "hero.stat4.label": "Mikszáth K. utca 68.",
    "hero.card.subtitle": "Hivatalos szerviz & tuning műhely",
    "hero.chip1": "KuKirin Specialista",
    "hero.chip2": "Hidraulikus Fékek",
    "hero.chip3": "Nullrevízió",
    "hero.chip4": "Defektmentesítés",
    "hero.chip5": "Elektronika",

    // Támogatott márkák szalag
    "brands.title": "Specializált típusok & márkafüggetlen szerviz",

    // Vészhelyzeti Gyorssegély (Triage)
    "triage.badge": "⚡ VÉSZHELYZETI GYORSSEGÉLY • AZONNALI MEGOLDÁS",
    "triage.title": "Mi a legfőbb probléma a rollereddel?",
    "triage.subtitle": "Válaszd ki a leggyakoribb hibák közül, és nézd meg a gödi szakműhely megoldását!",
    "triage.c1.title": "Defektet kaptál?",
    "triage.c1.desc": "Megerősített belső csere defektgátlóval, vagy kopásálló cellás tömör gumi préselése hidraulikus préssel.",
    "triage.c2.title": "Kotyog a kormány / szitál?",
    "triage.c2.desc": "Kormányszár hézagolás, csapágycsere, Loctite csavarrögzítés és kormánystabilizátor gátló a stabilitásért.",
    "triage.c3.title": "Gyenge a féked / csikorog?",
    "triage.c3.desc": "Gyenge mechanikus bowden helyett komplett hidraulikus fékátépítés (Zoom/Nutt), tárcsaegyengetés és légtelenítés.",
    "triage.c4.title": "Új gépet vettél netről?",
    "triage.c4.desc": "Teljes szakszerű nullrevízió: csavarrögzítés, futómű zsírzás, fékbeállítás, guminyomás kalibrálás átadás előtt.",

    // Miért a RollerGarázs?
    "why.badge": "MIÉRT A ROLLERGARÁZS?",
    "why.title": "Nem csak szerelünk: <span class=\"glow-red\">jobbá tesszük</span> a gépedet",
    "why.subtitle": "A legtöbb szerviz csak alkatrészt cserél. Mi megszüntetjük a gyári tervezési hiányosságokat, hogy évekig biztonságosan gurulhass.",
    "why.c1.title": "Nyílt Műhely a YouTube-on",
    "why.c1.desc": "Több tízezren követik a @RollerGarazs2020 csatornánkon, hogyan szerelünk és tesztelünk rollereket. Zéró titkolózás, 100% nyitott szakmaiság.",
    "why.c2.title": "Gyári Gyermekbetegségek Kiiktatása",
    "why.c2.desc": "Kiküszöböljük az alulméretezett gyári csavarokat, a kormányszár holtjátékot és a beázási kockázatokat prémium Loctite-tal és szigeteléssel.",
    "why.c3.title": "Azonnali Alkatrészkészlet",
    "why.c3.desc": "KuKirin, Xiaomi, Ninebot belsők, külsők, fékbetétek és hidraulika alkatrészek polcon a gödi műhelyben, nem kell heteket várnod külföldi rendelésekre.",
    "why.c4.title": "5.0 Google Értékelés & Garancia",
    "why.c4.desc": "Göd, Dunakeszi, Vác, Fót és Pest északi részének legajánlottabb rollerműhelye. Minden általunk elvégzett munkára garanciát vállalunk.",

    // Típushibák & Megoldások
    "issues.badge": "SZAKÉRTELEM & GYAKORLAT",
    "issues.title": "Gyakori típushibák, amiket csukott szemmel is javítunk",
    "issues.subtitle": "Nem csak alkatrészt cserélünk: orvosoljuk a gyári tervezési hiányosságokat, hogy a rollered biztonságos és tartós legyen.",
    "issues.tab1": "KuKirin széria (G2, G2 Master, G4)",
    "issues.tab2": "Xiaomi & Segway-Ninebot",
    "issues.tab3": "Nagy teljesítményű rollerek",
    
    "issues.kukirin.p1.title": "Kormányszár és nyak kotyogás",
    "issues.kukirin.p1.desc": "A gyári csavarok és illesztések lazulása életveszélyes kormány-holtjátékot okoz. Speciális hézagolással, menetrögzítővel és szükség esetén csapágycserével stabilizáljuk.",
    "issues.kukirin.p2.title": "Gyárilag száraz futómű és lengőkarok",
    "issues.kukirin.p2.desc": "A webshopos dobozokból érkező rollerek lengőkarjai szinte zsírzás nélkül futnak. Nagynyomású PTFE zsírzással és szilent-karbantartással megvédjük a kopástól és nyikorgástól.",
    "issues.kukirin.p3.title": "Gyenge gyári mechanikus fékek",
    "issues.kukirin.p3.desc": "25-60 km/h felett a bowdenes fék nem fog biztonságosan megállítani. Komplett Nutt vagy Zoom hidraulikus fékrendszer beépítést és légtelenítést végzünk.",

    "issues.xiaomi.p1.title": "Gyakori defekt és vékony belsők",
    "issues.xiaomi.p1.desc": "A vékony gyári belső gumi könnyen becsípődik. Vastagított prémium belsőt, Slime defektvédelmet, vagy hidraulikus préssel illesztett rázkódásmentes tömör gumit szerelünk fel.",
    "issues.xiaomi.p2.title": "Kormánynyitó fül kopás és törés",
    "issues.xiaomi.p2.desc": "Az alumínium zárófül idővel kikopik, kinyílhat menet közben. Megerősített ötvözet zárófület építünk be biztonsági rögzítéssel.",
    "issues.xiaomi.p3.title": "Akkumulátor forrfül leválás (Error 21)",
    "issues.xiaomi.p3.desc": "A rázkódástól leugró nikkel szalagok BMS hibát okoznak. Ponthegesztéses megerősítéssel és vezérlő diagnosztikával helyreállítjuk az akkupakkot.",

    "issues.heavy.p1.title": "Kormányszitálás (High-speed Wobble)",
    "issues.heavy.p1.desc": "Nagy sebességnél fellépő veszélyes kormányrázkódás. Állítható kormánystabilizátor gátló (steering damper) precíziós felszerelésével szüntetjük meg.",
    "issues.heavy.p2.title": "Elektronika és kontroller melegedés",
    "issues.heavy.p2.desc": "Magas terhelésnél a vezérlő túlmelegedhet és letilthat. Hővezető pasztázással, MOSFET megerősítéssel és kontroller hűtéssel tesszük megbízhatóvá.",
    "issues.heavy.p3.title": "Vízállóság és esővédelem hiánya",
    "issues.heavy.p3.desc": "A gyári rollerek ritkán bírják a hazai esőket. Fedél- és kábelátvezetés szilikonos szigeteléssel megelőzzük a beázásos zárlatokat.",

    // Szolgáltatások
    "services.badge": "SZOLGÁLTATÁSOK & IRÁNYÁRAK",
    "services.title": "Profi műhely, átlátható árak, garanciális munka",
    "services.subtitle": "Nincsenek rejtett költségek. A leadáskor átvizsgáljuk a rollert és előre egyeztetjük a várható javítási összeget.",
    "services.ctaQuote": "Árajánlatkérés",

    "services.s1.title": "Új roller beüzemelés („Nullrevízió”)",
    "services.s1.desc": "Webshopból rendelt dobozos gép? Ne menj ki vele a forgalomba átvizsgálás nélkül! Csavarrögzítés (Loctite), futómű zsírzás, fék- és futómű-beállítás, guminyomás ellenőrzés.",
    "services.s1.price": "14 900 Ft-tól",
    "services.s1.time": "1 munkanap",

    "services.s2.title": "Defektjavítás & Gumicsere",
    "services.s2.desc": "Belső gumicsere megerősített tömlővel, defektgátló védőfolyadékkal, vagy prémium cellás tömör gumi felszerelése hidraulikus présgéppel.",
    "services.s2.price": "8 500 Ft-tól",
    "services.s2.time": "Akár aznapra",

    "services.s3.title": "Fékrendszer tuning & Hidraulika",
    "services.s3.desc": "Bowdenes mechanikus fékek cseréje professzionális Nutt vagy Zoom hidraulikus rendszerre, fékolaj töltés, légtelenítés, tárcsa egyengetés és kopásálló betétek.",
    "services.s3.price": "9 900 Ft-tól",
    "services.s3.time": "1-2 munkanap",

    "services.s4.title": "Futómű & Kormányszár stabilizálás",
    "services.s4.desc": "Kormánykotyogás megszüntetése, kormányszár csapágyak cseréje, lengőkar szilentek, rugóstagok cseréje és kormánystabilizátor felszerelése.",
    "services.s4.price": "11 900 Ft-tól",
    "services.s4.time": "1 munkanap",

    "services.s5.title": "Elektronika & Akkumulátor javítás",
    "services.s5.desc": "Hibakód diagnosztika, vezérlő (controller) csere, gázkar és kijelző hibák javítása, akku cellateszt és BMS helyreállítás, kábelköteg felújítás.",
    "services.s5.price": "Egyedi felmérés alapján",
    "services.s5.time": "1-3 munkanap",

    "services.s6.title": "Vízszigetelés (IP védelem tuning)",
    "services.s6.desc": "Vezérlőház, akkufedél és kijelző tömítése prémium szilikonnal és tömítőanyagokkal a beázás okozta drága zárlatok megelőzésére.",
    "services.s6.price": "12 500 Ft-tól",
    "services.s6.time": "1 munkanap",

    // Kalkulátor & Árajánlatkérés
    "calc.badge": "ONLINE ÁRAJÁNLATKÉRÉS & IRÁNYÁRAK",
    "calc.title": "Kérj gyors árajánlatot a javításra",
    "calc.subtitle": "Válaszd ki a roller márkáját és a hibát az azonnali tájékoztató irányárhoz, vagy küldd el az adataidat és gyorsan visszahívunk az egyeztetéssel!",
    "calc.step1": "1. Válaszd ki a márkát:",
    "calc.step2": "2. Válaszd ki a fő hibát:",
    "calc.brand.kukirin": "KuKirin / Kugoo",
    "calc.brand.xiaomi": "Xiaomi széria",
    "calc.brand.ninebot": "Segway-Ninebot",
    "calc.brand.joyor": "Joyor",
    "calc.brand.performance": "Dualtron / Kaabo / Laotie",
    "calc.brand.other": "Egyéb márka",

    "calc.issue.flat": "Defekt / Gumicsere",
    "calc.issue.unboxing": "Új gép beüzemelés (Nullrevízió)",
    "calc.issue.brakes": "Fékhiba / Hidraulikus tuning",
    "calc.issue.wobble": "Kormányszár kotyogás / Futómű",
    "calc.issue.electric": "Nem kapcsol be / Hibakód / Elektronika",
    "calc.issue.waterproof": "Vízszigetelés / Általános átnézés",

    "calc.result.title": "Várható szerviz kalkuláció:",
    "calc.result.estPrice": "Irányár:",
    "calc.result.estTime": "Várható időtartam:",
    "calc.result.note": "*A végleges árat a pontos típus és az alkatrészigény alapján a roller átvizsgálásakor határozzuk meg.",

    "calc.form.title": "Kérj árajánlatot vagy visszahívást:",
    "calc.form.name": "Teljes neved",
    "calc.form.namePlh": "pl. Kovács Tamás",
    "calc.form.phone": "Telefonszámod",
    "calc.form.phonePlh": "+36 30 123 4567",
    "calc.form.desc": "Pontos típus és hiba részletei (opcionális)",
    "calc.form.descPlh": "pl. KuKirin G2 Master, kotyog a kormány és szeretnék egy nullrevíziót...",
    "calc.form.submit": "Árajánlatkérés elküldése",
    "calc.form.submitting": "Küldés folyamatban...",
    "calc.form.success": "Köszönjük! Az árajánlatkérésed megérkezett, hamarosan visszahívunk az egyeztetéssel!",

    // Műhely, YouTube & TikTok
    "workshop.badge": "🎬 KÖZÖSSÉG & MŰHELYVIDEÓK",
    "workshop.title": "Kövess minket YouTube-on és TikTokon!",
    "workshop.subtitle": "Nézd meg a saját szemeddel, hogyan dolgozunk! Élő hibafeltárások, típushibák leleplezése, nullrevíziók és pörgős szerelős tippek videón.",
    "workshop.ytBtn": "YouTube csatorna megtekintése",

    // Social Channels Hub
    "workshop.yt.badge": "HOSSZÚ FORMÁTUMÚ VIDEÓK",
    "workshop.yt.name": "RollerGarázs YouTube",
    "workshop.yt.handle": "@RollerGarazs2020",
    "workshop.yt.desc": "Mélyreható típusbemutatók, KuKirin tuningok, gyári szerelési hibák leleplezése és hidraulikus fékátépítések lépésről lépésre.",
    "workshop.yt.btn": "YouTube csatorna megnyitása →",

    "workshop.tt.badge": "PÖRGŐS TIKTOK SHORTS",
    "workshop.tt.name": "RollerGarázs TikTok",
    "workshop.tt.handle": "@rollergarzs",
    "workshop.tt.desc": "Napi garázs pillanatok, brutális gyári hibák dobozbontás után, gyors szerelési trükkök és kész projektek átadása.",
    "workshop.tt.btn": "TikTok csatorna követése →",

    // Featured Videos
    "workshop.videos.title": "Kiemelt Műhelyvideóink",
    "workshop.videos.subtitle": "Nézz bele a legnépszerűbb szerviz- és tuninganyagainkba:",

    "workshop.v1.title": "KuKirin G4 kicsit másképp... Tuning & Gyári Hibák",
    "workshop.v1.desc": "Hogyan lesz a gyári KuKirin G4-ből stabil, biztonságos gép? Zoom hidraulikus fékek, kormánystabilizátor és rázkódáscsökkentés.",
    "workshop.v1.btn": "Videó megtekintése →",

    "workshop.v2.title": "KuKirin G2 Master dobozból: Miért tilos azonnal ráállni?",
    "workshop.v2.desc": "Laza csavarok, száraz futómű és beállítatlan fékek a kicsomagolás után. Lépésről lépésre a szakszerű beüzemelés.",
    "workshop.v2.btn": "Videó megtekintése →",

    "workshop.v3.title": "Napi műhelypillanatok & gyors szerelési tippek",
    "workshop.v3.desc": "Pörgős, 60 másodperces szervizvideók: defektmegelőzés, kotyogó kormányszárak és döbbenetes dobozos meglepetések.",
    "workshop.v3.btn": "TikTok videók megtekintése →",

    "workshop.f1.title": "Élő hibafeltárások",
    "workshop.f1.desc": "Részletesen bemutatjuk a KuKirin és más típusok gyári betegségeit és azok szakszerű javítását.",
    "workshop.f2.title": "Valódi műhely Gödön",
    "workshop.f2.desc": "Dedikált szerszámok, hidraulikus fék-légtelenítő készlet és motorkerékpár-szintű alkatrészpark.",
    "workshop.f3.title": "Tesztvezetés átadás előtt",
    "workshop.f3.desc": "Minden javított gépet személyesen tesztelünk biztonsági szempontból, mielőtt átvennéd.",

    // Vélemények
    "reviews.badge": "ÜGYFÉLVÉLEMÉNYEK",
    "reviews.title": "5.0 csillag a Google Térképen",
    "reviews.subtitle": "Göd, Dunakeszi, Vác és Budapest agglomerációjából is hozzánk hozzák a rollereket.",

    "review.r1.text": "A KuKirin G2 Master rolleremet hoztam el nullrevízióra és fékbeállításra. Minden csavart átnézett, a lengőkarokat beolajozta és a kormányszár kotyogást teljesen megszüntette. Mintha egy kategóriával jobb gépet kaptam volna vissza!",
    "review.r1.author": "Balázs T.",
    "review.r1.type": "KuKirin G2 Master tulajdonos",

    "review.r2.text": "Pénteken kaptam hátsó defektet a Xiaomi rolleremen, hétfőre már mehettem érte, ráadásul kapott megerősített vastag belsőt Slime-mal. Gyors, korrekt és nem próbál semmit feleslegesen rádsózni.",
    "review.r2.author": "Gábor M.",
    "review.r2.type": "Xiaomi Pro 2",

    "review.r3.text": "Végre egy szerviz, ahol értenek is a kínai nagy teljesítményű gépekhez! Zoom hidraulikus fékeket szerelt fel és a kormányszitálást is megoldotta egy kormánystabilizátorral. 10/10 szakember.",
    "review.r3.author": "Péter V.",
    "review.r3.type": "Angwatt T1 & KuKirin G4",

    // Kapcsolat & Megközelítés
    "contact.badge": "ELÉRHETŐSÉG & MŰHELY",
    "contact.title": "Itt találod a RollerGarázst Gödön",
    "contact.subtitle": "Könnyű megközelítés az M2-esről vagy a 2-es főútról, kényelmes parkolás közvetlenül a műhely előtt a lerakodáshoz.",
    "contact.address.label": "Műhely címe:",
    "contact.address.val": "2131 Göd, Mikszáth Kálmán utca 68. (Béke u. sarok)",
    "contact.phone.label": "Telefonszám:",
    "contact.email.label": "E-mail:",
    "contact.hours.label": "Nyitvatartás:",
    "contact.hours.val": "Hétfő – Péntek: 09:00 – 18:00\n(Előzetes telefonos bejelentkezés ajánlott!)",
    "contact.btnWaze": "Útvonal Waze-zel",
    "contact.btnMaps": "Google Térkép megnyitása",
    "contact.btnCall": "Hívás azonnal",

    // Footer
    "footer.desc": "Márkafüggetlen elektromos roller szerviz, beüzemelés és egyedi tuning Gödön.",
    "footer.backToTop": "↑ Vissza a tetejére",
    "footer.rights": "Minden jog fenntartva.",
    "footer.creditText": "⚡ Weboldal koncepció:",
    "footer.credit": "Besztweb Stúdió (beszterczey.com)",

    // Lebegő hívógomb és mobil sáv
    "floating.badge": "SZERVIZ GYORSHÍVÁS",
    "floating.callText": "Hívás azonnal",
    "floating.phone": "+36 30 894 7739",
    "floating.sub": "Göd, Mikszáth K. u. 68.",
    "float.call": "Hívás",
    "float.route": "Útvonal",
    "float.quote": "Árajánlat"
  },
  en: {
    // Navigation
    "nav.brand": "ROLLER GARÁZS",
    "nav.tagline": "Electric Scooter Repair & Tuning • Göd",
    "nav.services": "Services",
    "nav.issues": "Common Issues",
    "nav.calculator": "Quote Request",
    "nav.workshop": "Workshop & Videos",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.callCta": "Call: +36 30 894 7739",
    "nav.openStatus": "Open until 18:00 • Göd",

    // Hero Section
    "hero.badge": "⚡ SCOOTER REPAIR & TUNING IN GÖD • 5.0 ★ RATED",
    "hero.title": "Flat tire? Loose stem? Won't power on?<br><span class=\"glow-red\">We fix it.</span> Often same-day.",
    "hero.subtitle": "Specialized servicing for KuKirin, Xiaomi, Segway-Ninebot and high-power scooters in Göd. Puncture repair, pre-ride checkups, hydraulic brake retrofits and zero-play steering guarantee.",
    "hero.quickPhone": "Direct phone callback & contact:",
    "hero.quickAddress": "Workshop address in Göd:",
    "hero.quickRoute": "Get directions →",
    "hero.ctaEstimate": "Quick Quote Request",
    "hero.ctaCall": "Call now: +36 30 894 7739",
    "hero.stat1.val": "5.0 ★",
    "hero.stat1.label": "Top customer rating",
    "hero.stat2.val": "KuKirin",
    "hero.stat2.label": "Specialized brand expertise",
    "hero.stat3.val": "1-2 days",
    "hero.stat3.label": "Fast service turnaround",
    "hero.stat4.val": "Göd",
    "hero.stat4.label": "Mikszáth K. street 68.",
    "hero.card.subtitle": "Authorized Service & Tuning Workshop",
    "hero.chip1": "KuKirin Specialist",
    "hero.chip2": "Hydraulic Brakes",
    "hero.chip3": "Zero-Revision",
    "hero.chip4": "Puncture Guard",
    "hero.chip5": "Electronics",

    // Brands strip
    "brands.title": "Specialized in leading brands & all-make scooter repairs",

    // Emergency Triage
    "triage.badge": "⚡ EMERGENCY REPAIR TRIAGE • INSTANT FIXES",
    "triage.title": "What's the main issue with your scooter?",
    "triage.subtitle": "Select your problem below for an instant workshop estimate and repair roadmap!",
    "triage.c1.title": "Got a flat tire?",
    "triage.c1.desc": "Reinforced inner tube with puncture sealant, or solid anti-vibration tire installation via hydraulic press.",
    "triage.c2.title": "Wobbly stem / high-speed shake?",
    "triage.c2.desc": "Stem joint shimming, industrial bearing swap, Loctite threadlocking and steering damper tuning.",
    "triage.c3.title": "Weak or squeaking brakes?",
    "triage.c3.desc": "Replace weak mechanical disc brakes with premium hydraulic Nutt/Zoom caliper kits and rotor alignment.",
    "triage.c4.title": "Bought online in a box?",
    "triage.c4.desc": "Complete unboxing revision: bolt threadlocking, pivot greasing, brake setup, tire pressure tuning.",

    // Why RollerGarázs?
    "why.badge": "WHY CHOOSE US?",
    "why.title": "More than repairs: <span class=\"glow-red\">we upgrade</span> your machine",
    "why.subtitle": "Most shops just swap parts. We eliminate manufacturer flaws so your scooter rides safely for years.",
    "why.c1.title": "Transparent Work on YouTube",
    "why.c1.desc": "Tens of thousands watch us teardown and build scooters on @RollerGarazs2020. 100% open, verified engineering.",
    "why.c2.title": "Eliminate Factory Flaws",
    "why.c2.desc": "We replace undersized factory bolts, fix loose folding neck tolerances, and waterproof controller compartments.",
    "why.c3.title": "In-Stock Spare Parts",
    "why.c3.desc": "Tubes, tires, brake pads, adapters and throttle modules in stock in Göd — no waiting weeks for overseas shipments.",
    "why.c4.title": "5.0 Google Rating & Guarantee",
    "why.c4.desc": "Top-rated repair shop across Göd, Dunakeszi, Vác and Northern Pest. Every service is backed by our full warranty.",

    // Issues & Fixes
    "issues.badge": "ENGINEERING & PRACTICE",
    "issues.title": "Known factory flaws we fix with precision",
    "issues.subtitle": "We don't just swap parts: we fix original manufacturer oversights to make your ride safe, solid and durable.",
    "issues.tab1": "KuKirin series (G2, G2 Master, G4)",
    "issues.tab2": "Xiaomi & Segway-Ninebot",
    "issues.tab3": "High-Performance Scooters",
    
    "issues.kukirin.p1.title": "Stem & folding neck loose play",
    "issues.kukirin.p1.desc": "Factory bolts loosening causes dangerous handlebar wobble. We stabilize joints with precision shims, thread-locking compounds and industrial bearing replacements.",
    "issues.kukirin.p2.title": "Factory-dry swingarms & suspension",
    "issues.kukirin.p2.desc": "Boxed scooters often arrive with unlubricated pivot arms. High-pressure PTFE grease application stops squeaking and premature bushing wear.",
    "issues.kukirin.p3.title": "Weak cable-actuated mechanical brakes",
    "issues.kukirin.p3.desc": "Over 25-60 km/h, cable brakes fail to stop safely. We install full hydraulic Nutt or Zoom brake systems with clean mineral oil bleeding.",

    "issues.xiaomi.p1.title": "Frequent punctures & thin inner tubes",
    "issues.xiaomi.p1.desc": "Thin factory tubes pinch easily. We install heavy-duty reinforced tubes, Slime anti-puncture sealant, or vibration-dampened solid rubber tires pressed on hydraulically.",
    "issues.xiaomi.p2.title": "Folding lock latch wear & cracking",
    "issues.xiaomi.p2.desc": "Soft aluminum latches wear out and may snap open while riding. We upgrade to reinforced aircraft-grade alloy latches with safety clips.",
    "issues.xiaomi.p3.title": "Battery nickel strip spot weld break (Error 21)",
    "issues.xiaomi.p3.desc": "Vibrations detach solder joints triggering BMS errors. We reinforce battery cells with precision spot welding and controller repair.",

    "issues.heavy.p1.title": "High-Speed Steering Wobble",
    "issues.heavy.p1.desc": "Dangerous headshake at high velocities. Eliminated with precision CNC-machined adjustable steering damper installation.",
    "issues.heavy.p2.title": "Controller overheating under peak load",
    "issues.heavy.p2.desc": "Dual motor load causes controller throttling or shutdowns. We upgrade thermal paste, reinforce MOSFETs and add cooling solutions.",
    "issues.heavy.p3.title": "Lack of weather & rain sealing",
    "issues.heavy.p3.desc": "Stock scooters risk severe water damage in rain. Full silicone deck and cable conduit waterproofing stops expensive electrical shorts.",

    // Services
    "services.badge": "SERVICES & TRANSPARENT PRICING",
    "services.title": "Professional workshop, clear rates, guaranteed work",
    "services.subtitle": "No hidden fees. We inspect your scooter upon drop-off and confirm the estimated cost before starting work.",
    "services.ctaQuote": "Request Quote",

    "services.s1.title": "New Scooter Setup (\"Zero Revision\")",
    "services.s1.desc": "Ordered boxed online? Don't hit the streets uninspected! Bolt thread-locking (Loctite), suspension greasing, brake alignment and tire pressure calibration.",
    "services.s1.price": "From 14,900 HUF",
    "services.s1.time": "1 working day",

    "services.s2.title": "Puncture Repair & Tire Swaps",
    "services.s2.desc": "Inner tube replacement with heavy-duty tubes, sealant injection, or solid honeycomb tire mounting with our hydraulic shop press.",
    "services.s2.price": "From 8,500 HUF",
    "services.s2.time": "Same day available",

    "services.s3.title": "Brake System Tuning & Hydraulics",
    "services.s3.desc": "Upgrading cable brakes to Nutt or Zoom hydraulic disc systems, brake fluid flushing, rotor straightening and ceramic pads.",
    "services.s3.price": "From 9,900 HUF",
    "services.s3.time": "1-2 working days",

    "services.s4.title": "Suspension & Stem Play Elimination",
    "services.s4.desc": "Eliminating loose handlebar play, head-tube bearing replacements, swingarm bushing overhauls and steering damper setups.",
    "services.s4.price": "From 11,900 HUF",
    "services.s4.time": "1 working day",

    "services.s5.title": "Electronics & Battery Diagnostics",
    "services.s5.desc": "Error code scans, motor controller replacement, throttle & display repairs, battery cell load testing and BMS repairs.",
    "services.s5.price": "Based on diagnosis",
    "services.s5.time": "1-3 working days",

    "services.s6.title": "Waterproofing (IP Protection Tuning)",
    "services.s6.desc": "Sealing battery compartments, controllers, and wiring grommets with industrial grade silicone to safeguard against rain.",
    "services.s6.price": "From 12,500 HUF",
    "services.s6.time": "1 working day",

    // Calculator & Quote Request
    "calc.badge": "ONLINE QUOTE REQUEST & PRICING",
    "calc.title": "Request a quick quote for repairs",
    "calc.subtitle": "Select your brand and issue for an immediate estimate, or submit your details and we will call you back shortly!",
    "calc.step1": "1. Select your brand:",
    "calc.step2": "2. Select main issue:",
    "calc.brand.kukirin": "KuKirin / Kugoo",
    "calc.brand.xiaomi": "Xiaomi Series",
    "calc.brand.ninebot": "Segway-Ninebot",
    "calc.brand.joyor": "Joyor",
    "calc.brand.performance": "Dualtron / Kaabo / Laotie",
    "calc.brand.other": "Other brand",

    "calc.issue.flat": "Puncture / Tire change",
    "calc.issue.unboxing": "New scooter setup (Zero Revision)",
    "calc.issue.brakes": "Brake issue / Hydraulic upgrade",
    "calc.issue.wobble": "Stem loose play / Suspension",
    "calc.issue.electric": "No power / Error code / Electronics",
    "calc.issue.waterproof": "Waterproofing / Full checkup",

    "calc.result.title": "Estimated service details:",
    "calc.result.estPrice": "Estimate:",
    "calc.result.estTime": "Estimated turnaround:",
    "calc.result.note": "*Final price is confirmed after physical inspection based on specific model and required parts.",

    "calc.form.title": "Request quote or callback:",
    "calc.form.name": "Your Full Name",
    "calc.form.namePlh": "e.g. Thomas Smith",
    "calc.form.phone": "Phone Number",
    "calc.form.phonePlh": "+36 30 123 4567",
    "calc.form.desc": "Scooter model & issue details (optional)",
    "calc.form.descPlh": "e.g. KuKirin G2 Master, loose handlebar and need a full unboxing setup...",
    "calc.form.submit": "Submit Quote Request",
    "calc.form.submitting": "Submitting...",
    "calc.form.success": "Thank you! Your quote request has been received. We will get in touch shortly!",

    // Workshop, YouTube & TikTok
    "workshop.badge": "🎬 COMMUNITY & WORKSHOP VIDEOS",
    "workshop.title": "Follow Us on YouTube & TikTok!",
    "workshop.subtitle": "See firsthand how we work! Live diagnostics, factory flaw exposes, zero-revisions and snappy workshop tips on video.",
    "workshop.ytBtn": "Visit YouTube Channel",

    // Social Channels Hub
    "workshop.yt.badge": "LONG-FORM TEARDOWNS",
    "workshop.yt.name": "RollerGarázs YouTube",
    "workshop.yt.handle": "@RollerGarazs2020",
    "workshop.yt.desc": "In-depth model teardowns, KuKirin tuning, exposing assembly flaws and step-by-step hydraulic brake conversions.",
    "workshop.yt.btn": "Open YouTube Channel →",

    "workshop.tt.badge": "SNAPPY TIKTOK SHORTS",
    "workshop.tt.name": "RollerGarázs TikTok",
    "workshop.tt.handle": "@rollergarzs",
    "workshop.tt.desc": "Daily garage insights, unboxing fails from factory crates, quick mechanic tips and finished build handoffs.",
    "workshop.tt.btn": "Follow on TikTok →",

    // Featured Videos
    "workshop.videos.title": "Featured Workshop Videos",
    "workshop.videos.subtitle": "Watch our most popular repair & tuning highlights:",

    "workshop.v1.title": "KuKirin G4 Upgraded: Custom Tuning & Factory Flaws",
    "workshop.v1.desc": "How we turn a stock KuKirin G4 into a safe machine: Zoom hydraulic brakes, steering damper and anti-vibration setup.",
    "workshop.v1.btn": "Watch Video →",

    "workshop.v2.title": "KuKirin G2 Master Unboxing: Why You Shouldn't Ride It Stock",
    "workshop.v2.desc": "Loose bolts, ungreased suspension and misaligned brakes out of the box. Step-by-step professional zero-revision.",
    "workshop.v2.btn": "Watch Video →",

    "workshop.v3.title": "Daily Workshop Stories & Rapid Repair Tips",
    "workshop.v3.desc": "Snappy 60-second shorts: puncture prevention, loose steering stems and shocking unboxing discoveries.",
    "workshop.v3.btn": "Watch on TikTok →",

    "workshop.f1.title": "Live Diagnostic Teardowns",
    "workshop.f1.desc": "We reveal known engineering flaws of KuKirin and other brands and demonstrate proven fixes.",
    "workshop.f2.title": "Real Workshop in Göd",
    "workshop.f2.desc": "Dedicated specialty tooling, hydraulic brake bleeding stations and motorcycle-grade hardware inventory.",
    "workshop.f3.title": "Pre-delivery Road Testing",
    "workshop.f3.desc": "Every repaired scooter is physically test-ridden and safety-checked before handing back.",

    // Reviews
    "reviews.badge": "CUSTOMER FEEDBACK",
    "reviews.title": "5.0 Stars on Google Maps",
    "reviews.subtitle": "Scooter riders bring their machines to us from Göd, Dunakeszi, Vác and throughout Budapest.",

    "review.r1.text": "Brought my KuKirin G2 Master for initial zero-revision and brake adjustments. Every single bolt checked, swingarms lubricated and stem play completely eradicated. Feels like a machine one tier above!",
    "review.r1.author": "Balázs T.",
    "review.r1.type": "KuKirin G2 Master Owner",

    "review.r2.text": "Had a nasty rear puncture on Friday, picked up my scooter ready on Monday morning with an upgraded reinforced tube and Slime. Fast, honest and never tries to upsell unneeded stuff.",
    "review.r2.author": "Gábor M.",
    "review.r2.type": "Xiaomi Pro 2",

    "review.r3.text": "Finally a shop that truly understands high-performance machines! Installed Zoom hydraulics and resolved dangerous high-speed wobble with a custom steering damper. 10/10 master technician.",
    "review.r3.author": "Péter V.",
    "review.r3.type": "Angwatt T1 & KuKirin G4",

    // Contact
    "contact.badge": "LOCATION & CONTACT",
    "contact.title": "Visit RollerGarázs in Göd",
    "contact.subtitle": "Easy access right off the M2 highway or Route 2, with convenient drive-up parking right in front of the shop.",
    "contact.address.label": "Workshop address:",
    "contact.address.val": "2131 Göd, Mikszáth Kálmán street 68. (Béke st. corner)",
    "contact.phone.label": "Phone:",
    "contact.email.label": "Email:",
    "contact.hours.label": "Opening hours:",
    "contact.hours.val": "Monday – Friday: 09:00 – 18:00\n(Prior phone appointment recommended!)",
    "contact.btnWaze": "Open in Waze",
    "contact.btnMaps": "Open in Google Maps",
    "contact.btnCall": "Call now",

    // Footer
    "footer.desc": "Specialized electric scooter service, zero-revision setup and custom tuning in Göd.",
    "footer.backToTop": "↑ Back to top",
    "footer.rights": "All rights reserved.",
    "footer.creditText": "⚡ Website Concept:",
    "footer.credit": "Besztweb Studio (beszterczey.com)",

    // Floating bar
    "float.call": "Call",
    "float.route": "Route",
    "float.quote": "Report Issue"
  }
};

// Expose i18n helper
window.RollerI18n = {
  currentLang: 'hu',
  init() {
    const saved = localStorage.getItem('rg_lang') || 'hu';
    this.setLanguage(saved);
  },
  setLanguage(lang) {
    if (!translations[lang]) lang = 'hu';
    this.currentLang = lang;
    localStorage.setItem('rg_lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[lang][key];
        } else {
          el.innerHTML = translations[lang][key].replace(/\n/g, '<br>');
        }
      }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    document.documentElement.lang = lang;
    document.title = lang === 'hu' 
      ? 'RollerGarázs — Elektromos roller szerviz, beüzemelés & tuning Göd'
      : 'RollerGarázs — Electric Scooter Repair, Setup & Tuning Göd';
  },
  t(key) {
    return translations[this.currentLang][key] || key;
  }
};
