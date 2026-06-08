(function () {
  const LANG_KEY = "festiplannerLanguage";
  const APPEARANCE_KEY = "festiplannerAppearance";

  const translations = {
    nl: {
      "Choose festival": "Kies festival",
      "Festival planner": "Festivalplanner",
      "Festival Hub": "Festivalhub",
      "Find your next festival": "Vind je volgende festival",
      "Your festival plans": "Je festivalplannen",
      "Your festivals": "Je festivals",
      "Festivals": "Festivals",
      "Pinned Festivals": "Vastgezette festivals",
      "All Festivals": "Alle festivals",
      "Pin festivals to keep them close.": "Zet festivals vast om ze binnen handbereik te houden.",
      "Pin festival": "Festival vastzetten",
      "Unpin festival": "Festival losmaken",
      "1 active": "1 actief",
      "Available": "Beschikbaar",
      "18-21 Jun": "18-21 jun",
      "Future": "Later",
      "Quick access": "Snelle toegang",
      "Light": "Licht",
      "Dark": "Donker",
      "Choose a festival and open its planning tools.": "Kies een festival en open de planningtools.",
      "Search festivals": "Zoek festivals",
      "Open": "Openen",
      "Locked": "Vergrendeld",
      "18-21 June 2026": "18-21 juni 2026",
      "18-21 June 2026": "18-21 juni 2026",
      "Future profile": "Toekomstig profiel",
      "Festival profile": "Festivalprofiel",
      "Location to be added": "Locatie wordt toegevoegd",
      "Dessel, Belgium": "Dessel, Belgie",
      "Werchter, Belgium": "Werchter, Belgie",
      "Boom, Belgium": "Boom, Belgie",
      "Festival trips, finally organized": "Festivaltrips, eindelijk georganiseerd",
      "Pick a festival, plan your campsite, pack the right things, map your route, and catch timetable clashes before the weekend starts.": "Kies een festival, plan je camping, pak de juiste spullen, stippel je route uit en ontdek timetable-clashes voor het weekend begint.",
      "Start planning": "Begin met plannen",
      "About us": "Over ons",
      "Next up": "Volgende",
      "Camping": "Camping",
      "Lineup": "Line-up",
      "Travel": "Reis",
      "Choose your festival": "Kies je festival",
      "Graspop is ready now. More festival profiles can be added later with their own campsites, travel notes, and lineup tools.": "Graspop is nu klaar. Later kunnen we meer festivalprofielen toevoegen met eigen campings, reisnotities en line-up tools.",
      "Available now": "Nu beschikbaar",
      "Dessel, Belgium. Dynamic packing, campsite choices, route planning, lineup marking, and clash detection.": "Dessel, Belgie. Dynamisch inpakken, campingkeuzes, routeplanning, line-up markeren en clash-detectie.",
      "Open planner": "Open planner",
      "Calculating countdown": "Aftellen berekenen",
      "Festival started": "Festival begonnen",
      "Official Graspop website": "Officiele Graspop-website",
      "Check official timetable": "Check het officiele tijdschema",
      "Check official travel info": "Check de officiele reisinformatie",
      "Future slot": "Toekomstige plek",
      "A future profile could add its own camping setup, transport flow, and artist schedule.": "Een toekomstig profiel kan een eigen campingsetup, transportflow en artiestenschema krijgen.",
      "Coming later": "Komt later",
      "The same planner structure can grow into multi-genre festival weekends too.": "Dezelfde plannerstructuur kan later ook meegroeien naar andere festivalweekenden.",
      "Festiplanner is built for the sweet spot between festival freedom and knowing where your ticket, charger, and rain jacket are.": "Festiplanner is gemaakt voor de balans tussen festivalvrijheid en weten waar je ticket, oplader en regenjas liggen.",
      "Less last-minute panic": "Minder last-minute stress",
      "We turn the messy parts of a festival trip into focused pages: packing, travel, lineup planning, and the final countdown before you leave.": "We maken van de rommelige delen van een festivaltrip duidelijke pagina's: inpakken, reizen, line-up planning en de laatste checklist voor vertrek.",
      "Festival-first planning": "Festivalgerichte planning",
      "Every festival can have its own rules, campsites, routes, and timetable. Graspop is the first profile, with room for more later.": "Elk festival kan eigen regels, campings, routes en tijdschema's hebben. Graspop is het eerste profiel, met ruimte voor meer.",

      "Home": "Home",
      "Settings": "Instellingen",
      "Settings | Festiplanner": "Instellingen | Festiplanner",
      "Manage app-wide preferences and locally saved festival data.": "Beheer app-brede voorkeuren en lokaal opgeslagen festivalgegevens.",
      "Appearance": "Weergave",
      "Choose how Festiplanner looks on this device.": "Kies hoe Festiplanner er op dit apparaat uitziet.",
      "Theme": "Thema",
      "System": "Systeem",
      "System follows your device appearance.": "Systeem volgt de weergave van je apparaat.",
      "Language": "Taal",
      "Choose the language used throughout the app.": "Kies de taal die in de hele app wordt gebruikt.",
      "English": "Engels",
      "Nederlands": "Nederlands",
      "Festival Preferences": "Festivalvoorkeuren",
      "Control how festivals are organized in the Festival Hub.": "Bepaal hoe festivals in de Festivalhub worden geordend.",
      "Show pinned festivals first": "Toon vastgezette festivals eerst",
      "Keep pinned festivals above the full festival list.": "Houd vastgezette festivals boven de volledige festivallijst.",
      "Data": "Gegevens",
      "Manage information saved locally in this browser.": "Beheer informatie die lokaal in deze browser is opgeslagen.",
      "Reset current festival": "Huidig festival resetten",
      "Clears campsite, travel, bands, notes, and packing progress.": "Wist camping, reizen, bands, notities en inpakvoortgang.",
      "Reset festival": "Festival resetten",
      "Reset all local data": "Alle lokale gegevens resetten",
      "Clears festival plans, pinned festivals, and all app preferences.": "Wist festivalplannen, vastgezette festivals en alle app-voorkeuren.",
      "Reset all data": "Alle gegevens resetten",
      "About": "Over",
      "FestiPlanner version": "FestiPlanner-versie",
      "Current festival count": "Huidig aantal festivals",
      "Reset local data?": "Lokale gegevens resetten?",
      "This action cannot be undone.": "Deze actie kan niet ongedaan worden gemaakt.",
      "Cancel": "Annuleren",
      "Reset": "Resetten",
      "Reset current festival?": "Huidig festival resetten?",
      "Campsite, travel information, selected bands, notes, and packing progress will be cleared.": "Camping, reisinformatie, geselecteerde bands, notities en inpakvoortgang worden gewist.",
      "Reset all local data?": "Alle lokale gegevens resetten?",
      "All festival plans, pinned festivals, language, theme, and app preferences will be cleared. This cannot be undone.": "Alle festivalplannen, vastgezette festivals, taal, thema en app-voorkeuren worden gewist. Dit kan niet ongedaan worden gemaakt.",
      "Festival preference saved.": "Festivalvoorkeur opgeslagen.",
      "Current festival data reset.": "Gegevens van het huidige festival gereset.",
      "All local data reset.": "Alle lokale gegevens gereset.",
      "Site navigation": "Sitenavigatie",
      "Packing progress": "Inpakvoortgang",
      "Packing": "Inpakken",
      "Packing List": "Paklijst",
      "Packing List | Festiplanner": "Paklijst | Festiplanner",
      "Packing list": "Paklijst",
      "Lineup | Festiplanner": "Line-up | Festiplanner",
      "Timeline | Festiplanner": "Tijdlijn | Festiplanner",
      "Timeline": "Tijdlijn",
      "My Festival": "Mijn festival",
      "My Festival | Festiplanner": "Mijn festival | Festiplanner",
      "Your Graspop overview: packing, travel, favourite bands, clashes, and notes.": "Je Graspop-overzicht: inpakken, reizen, favoriete bands, clashes en notities.",
      "Countdown": "Aftellen",
      "Graspop is coming": "Graspop komt eraan",
      "Continue checklist": "Ga verder met checklist",
      "Marked acts": "Gemarkeerde acts",
      "No favourite bands yet": "Nog geen favoriete bands",
      "Mark bands in the lineup.": "Markeer bands in de line-up.",
      "Review overlaps": "Bekijk overlappingen",
      "Clash overview": "Clash-overzicht",
      "No clashes yet. Mark bands to detect overlaps.": "Nog geen clashes. Markeer bands om overlappingen te vinden.",
      "No clashes yet": "Nog geen clashes",
      "Mark bands to detect overlaps.": "Markeer bands om overlappingen te vinden.",
      "ready": "klaar",
      "Weather": "Weer",
      "Festival forecast": "Festivalverwachting",
      "Weather summary placeholder": "Weeroverzicht placeholder",
      "Personal festival notes": "Persoonlijke festivalnotities",
      "Saved together with your travel notes.": "Opgeslagen samen met je reisnotities.",
      "Choose your festival stay and get a packing list that adapts to your campsite or accommodation.": "Kies je festivalverblijf en krijg een paklijst die zich aanpast aan je camping of accommodatie.",
      "Choose a festival and start planning.": "Kies een festival en begin met plannen.",
      "Where are you staying?": "Waar verblijf je?",
      "Pick one option so the planner can highlight campsite-specific reminders.": "Kies een optie zodat de planner camping-specifieke herinneringen kan tonen.",
      "Choose your stay type": "Kies je verblijfstype",
      "No campsite selected yet": "Nog geen camping geselecteerd",
      "Choose Boneyard, The Crypt, Inferno, or Devil's Lake to personalize your list.": "Kies Boneyard, The Crypt, Inferno of Devil's Lake om je lijst te personaliseren.",
      "Quick campsite reminders": "Snelle campingherinneringen",
      "Keep your festival ticket, campsite confirmation, and ID easy to reach.": "Houd je festivalticket, campingbevestiging en ID binnen handbereik.",
      "Check the latest official Graspop info before you leave.": "Check de laatste officiele Graspop-info voordat je vertrekt.",
      "Your checks are saved automatically in this browser.": "Je vinkjes worden automatisch opgeslagen in deze browser.",
      "Mark essentials": "Markeer essentials",
      "Clear checks": "Wis vinkjes",
      "Packed and ready.": "Ingepakt en klaar.",

      "Closest to the arena": "Dichtst bij de arena",
      "The classic festival camping choice next to the festival arena: bring your own tent, book a Friends Zone, or rent a FestiTent.": "De klassieke festivalcamping naast de arena: neem je eigen tent mee, boek een Friends Zone of huur een FestiTent.",
      "Own tent": "Eigen tent",
      "Friends Zone": "Friends Zone",
      "FestiTent": "FestiTent",
      "Full camping kit": "Volledige campingkit",
      "Group friendly": "Groepsvriendelijk",
      "Pitch your own tent at Boneyard with a full camping kit.": "Zet je eigen tent op Boneyard neer met een volledige campingset.",
      "A reserved Boneyard area for camping together with friends.": "Een gereserveerde Boneyard-zone om samen met vrienden te kamperen.",
      "A pre-set rental tent at Boneyard, available for smaller groups.": "Een vooraf opgezette huurtent op Boneyard, geschikt voor kleinere groepen.",
      "Quieter own-tent camping": "Rustiger kamperen met eigen tent",
      "A calmer campsite about 1.3 km from the arena, with parking nearby and the same need for a valid camping ticket.": "Een rustigere camping op ongeveer 1,3 km van de arena, met parking dichtbij en ook hier een geldig campingticket nodig.",
      "Quieter": "Rustiger",
      "Parking nearby": "Parking dichtbij",
      "Accessible facilities": "Toegankelijke voorzieningen",
      "The Crypt has accessible showers and toilets, but no Inter staff on site.": "The Crypt heeft toegankelijke douches en toiletten, maar geen Inter-medewerkers ter plaatse.",
      "Comfort and accessibility": "Comfort en toegankelijkheid",
      "A comfort campsite about 500 metres from the arena, with ready-made accommodations and the separate Inter campsite for disabled visitors.": "Een comfortcamping op ongeveer 500 meter van de arena, met kant-en-klare accommodaties en de aparte Inter-camping voor bezoekers met een beperking.",
      "Pre-pitched": "Vooraf opgezet",
      "Inter camping": "Inter-camping",
      "500 m walk": "500 m lopen",
      "Festihut / XL": "Festihut / XL",
      "Tip-Up": "Tip-Up",
      "Canvas Hut": "Canvas Hut",
      "Group tent": "Groepstent",
      "Boutique Tent": "Boutique Tent",
      "A dedicated accessible zone at Inferno for disabled visitors, arranged through Inter.": "Een aparte toegankelijke zone op Inferno voor bezoekers met een beperking, geregeld via Inter.",
      "Holiday park stay": "Verblijf op vakantiepark",
      "A cottage or hotel-room stay in Lommel, about 25 km from the festival site, with more comfort and daily travel planning.": "Een cottage- of hotelkamerverblijf in Lommel, ongeveer 25 km van het festivalterrein, met meer comfort en dagelijkse reisplanning.",
      "Comfort cottage": "Comfort cottage",
      "Premium cottage": "Premium cottage",
      "Hotel room": "Hotelkamer",
      "Comfort Cottage": "Comfort Cottage",
      "Premium Cottage": "Premium Cottage",
      "VIP Cottage": "VIP Cottage",
      "Hotel room": "Hotelkamer",

      "Tickets & documents": "Tickets & documenten",
      "Camping & sleep": "Camping & slapen",
      "Clothes": "Kleding",
      "Hygiene": "Hygiene",
      "Food & drink": "Eten & drinken",
      "Tech & safety": "Tech & veiligheid",
      "Stay-specific": "Verblijf-specifiek",
      "festival ticket": "festivalticket",
      "campsite or accommodation confirmation": "camping- of accommodatiebevestiging",
      "ID or passport": "ID of paspoort",
      "bank card and some cash": "bankpas en wat cash",
      "health insurance details": "zorgverzekeringsgegevens",
      "offline screenshots of maps and bookings": "offline screenshots van kaarten en boekingen",
      "tent or accommodation booking proof": "tent of accommodatiebewijs",
      "sleeping bag": "slaapzak",
      "sleeping mat or air mattress": "slaapmat of luchtbed",
      "pillow or hoodie pillow": "kussen of hoodie-kussen",
      "earplugs for sleeping": "oordoppen om te slapen",
      "camping light or headlamp": "campinglamp of hoofdlamp",
      "tarp, extra pegs, and mallet": "zeil, extra haringen en hamer",
      "band shirts and daily outfits": "bandshirts en outfits per dag",
      "warm hoodie or jacket": "warme hoodie of jas",
      "rain jacket or poncho": "regenjas of poncho",
      "comfortable broken-in shoes": "comfortabele ingelopen schoenen",
      "spare socks": "extra sokken",
      "underwear": "ondergoed",
      "hat or cap": "hoed of pet",
      "toothbrush and toothpaste": "tandenborstel en tandpasta",
      "deodorant": "deodorant",
      "towel": "handdoek",
      "shower shoes": "doucheslippers",
      "wet wipes and tissues": "vochtige doekjes en tissues",
      "sunscreen": "zonnebrand",
      "hand sanitizer": "handgel",
      "reusable water bottle": "herbruikbare waterfles",
      "travel snacks": "reissnacks",
      "breakfast items": "ontbijtspullen",
      "electrolytes or rehydration tablets": "elektrolyten of ORS-tabletten",
      "small trash bags": "kleine vuilniszakken",
      "cup or mug": "beker of mok",
      "phone and charger": "telefoon en oplader",
      "power bank": "powerbank",
      "charging cable": "laadkabel",
      "small first aid kit": "kleine EHBO-kit",
      "personal medication": "persoonlijke medicatie",
      "hearing protection for concerts": "gehoorbescherming voor concerten",
      "small lock for luggage": "klein slot voor bagage",
      "accommodation voucher and deposit info": "accommodatievoucher en borginformatie",
      "bedding check for your exact rental type": "check beddengoed voor je exacte huurtype",
      "room key plan": "kamer-/sleutelplan",
      "daily festival day bag": "dagrugzak voor het festival",
      "swimwear or recovery clothes": "zwemkleding of herstelkleding",
      "Inter approval details": "Inter-goedkeuringsgegevens",
      "mobility or medical charging cables": "laadkabels voor mobiliteit of medische hulpmiddelen",
      "doctor's note for medication or special diet": "doktersverklaring voor medicatie of speciaal dieet",

      "Travel | Festiplanner": "Reis | Festiplanner",
      "Plan your route, save your meeting point, and keep travel notes close before heading out.": "Plan je route, bewaar je ontmoetingspunt en houd reisnotities bij de hand voor vertrek.",
      "Set your route and arrival details before you leave.": "Stel je route en aankomstgegevens in voor vertrek.",
      "Travel plan": "Reisplan",
      "Add the details you need for a smooth arrival.": "Voeg de gegevens toe die je nodig hebt voor een vlotte aankomst.",
      "Transport method": "Vervoermiddel",
      "Arrival target": "Gewenste aankomsttijd",
      "Example: Thursday 12:00": "Voorbeeld: donderdag 12:00",
      "Route": "Route",
      "Review your journey before opening directions.": "Controleer je reis voordat je de routebeschrijving opent.",
      "From": "Van",
      "To": "Naar",
      "Add a starting point": "Voeg een vertrekpunt toe",
      "Estimated travel time": "Geschatte reistijd",
      "Available in a future update": "Beschikbaar in een toekomstige update",
      "Stenehei, 2480 Dessel, Belgium": "Stenehei, 2480 Dessel, Belgie",
      "Quick arrival tips": "Snelle aankomsttips",
      "Save parking ticket screenshot": "Bewaar een screenshot van je parkeerticket",
      "Download route offline": "Download de route offline",
      "Save campsite location": "Bewaar de locatie van je camping",
      "Share arrival time with friends": "Deel je aankomsttijd met vrienden",
      "Travel notes": "Reisnotities",
      "Add the practical details you always need at the exact moment your backpack is already closed.": "Voeg de praktische details toe die je altijd nodig hebt zodra je rugzak al dicht zit.",
      "Arrival plan": "Aankomstplan",
      "Car": "Auto",
      "Public transport": "Openbaar vervoer",
      "Walking": "Lopen",
      "Cycle": "Fiets",
      "Starting point": "Vertrekpunt",
      "Destination": "Bestemming",
      "Open in Google Maps": "Open in Google Maps",
      "Festival location": "Festivallocatie",
      "Travel details": "Reisdetails",
      "Departure target": "Vertrekmoment",
      "Meet-up point": "Ontmoetingspunt",
      "Notes": "Notities",
      "Example: Amsterdam Centraal": "Voorbeeld: Amsterdam Centraal",
      "Example: Monday 10:30": "Voorbeeld: maandag 10:30",
      "Example: campsite gate, shuttle stop, car park": "Voorbeeld: campingpoort, shuttlehalte, parking",
      "Locker code, tent location, friends' phone numbers, parking details, medication reminders...": "Lockercode, tentlocatie, telefoonnummers van vrienden, parkeerdetails, medicatieherinneringen...",

      "Mark the bands you want to see. The clash panel will show where your choices overlap.": "Markeer de bands die je wilt zien. Het clashpaneel toont waar je keuzes overlappen.",
      "Lineup clash finder": "Line-up clashzoeker",
      "Clear lineup": "Wis line-up",
      "Lineup days": "Line-up dagen",
      "Stage": "Podium",
      "All stages": "Alle podia",
      "Only marked bands": "Alleen gemarkeerde bands",
      "Show everything": "Toon alles",
      "Marked only": "Alleen gemarkeerd",
      "Find a band": "Zoek een band",
      "Search the timetable": "Zoek in het tijdschema",
      "Thursday lineup": "Line-up donderdag",
      "Friday lineup": "Line-up vrijdag",
      "Saturday lineup": "Line-up zaterdag",
      "Sunday lineup": "Line-up zondag",
      "Marked bands": "Gemarkeerde bands",
      "Your planning": "Je planning",
      "Clashes": "Clashes",
      "No bands marked yet.": "Nog geen bands gemarkeerd.",
      "Mark bands to build your planning.": "Markeer bands om je planning te maken.",
      "No clashes among your marked bands yet.": "Nog geen clashes tussen je gemarkeerde bands.",
      "No bands match these filters.": "Geen bands gevonden met deze filters.",
      "Mark": "Markeer",
      "Marked": "Gemarkeerd",
      "Mark band": "Markeer band",
      "Lineup data is based on the official Graspop 2026 timetable pages checked on 4 June 2026. Always re-check the official timetable before the festival in case set times move.": "Line-updata is gebaseerd op de officiele Graspop 2026-tijdschemapagina's gecontroleerd op 4 juni 2026. Check altijd het officiele tijdschema opnieuw voor het festival, voor het geval tijden wijzigen.",
      "Thursday": "Donderdag",
      "Friday": "Vrijdag",
      "Saturday": "Zaterdag",
      "Sunday": "Zondag",
      "Thu": "Do",
      "Fri": "Vr",
      "Sat": "Za",
      "Sun": "Zo",

      "A final run-up checklist for the week before, the days before, and the morning you leave.": "Een laatste checklist voor de week ervoor, de dagen ervoor en de ochtend van vertrek.",
      "Before you leave": "Voordat je vertrekt",
      "1 week out": "1 week vooraf",
      "2 days out": "2 dagen vooraf",
      "Morning of": "Ochtend zelf",
      "Test your tent, confirm travel, check weather, break in shoes, and make sure your power bank still works.": "Test je tent, bevestig je reis, check het weer, loop je schoenen in en controleer je powerbank.",
      "Charge devices, freeze water bottles if useful, sort clothes by weather, and put tickets plus ID in your day bag.": "Laad apparaten op, vries eventueel waterflessen in, sorteer kleding op weer en stop tickets plus ID in je dagtas.",
      "Pack snacks and water, screenshot tickets and maps, check campsite directions, and share your arrival time.": "Pak snacks en water, maak screenshots van tickets en kaarten, check campingroutes en deel je aankomsttijd.",
      "This planner is intentionally practical, but festival rules can change. Use it together with the official Graspop information for allowed items, campsite access, and transport updates.": "Deze planner is bewust praktisch, maar festivalregels kunnen veranderen. Gebruik hem samen met de officiele Graspop-info voor toegestane items, campingtoegang en vervoersupdates."
    }
  };

  const reverse = {};
  Object.entries(translations.nl).forEach(([en, nl]) => {
    reverse[nl] = en;
  });

  function currentLanguage() {
    const saved = localStorage.getItem(LANG_KEY);
    return saved === "nl" ? "nl" : "en";
  }

  function translateText(text, lang) {
    const trimmed = text.trim();
    if (!trimmed) return text;
    const untilEn = trimmed.match(/^(\d+) days? until Graspop$/);
    if (lang === "nl" && untilEn) {
      const count = Number(untilEn[1]);
      return text.replace(trimmed, `${count} ${count === 1 ? "dag" : "dagen"} tot Graspop`);
    }
    const untilNl = trimmed.match(/^(\d+) dagen? tot Graspop$/);
    if (lang === "en" && untilNl) {
      const count = Number(untilNl[1]);
      return text.replace(trimmed, `${count} day${count === 1 ? "" : "s"} until Graspop`);
    }
    const packedEn = trimmed.match(/^(\d+)\/(\d+) items packed$/);
    if (lang === "nl" && packedEn) {
      return text.replace(trimmed, `${packedEn[1]}/${packedEn[2]} items ingepakt`);
    }
    const packedNl = trimmed.match(/^(\d+)\/(\d+) items ingepakt$/);
    if (lang === "en" && packedNl) {
      return text.replace(trimmed, `${packedNl[1]}/${packedNl[2]} items packed`);
    }
    const readyEn = trimmed.match(/^(\d+)% ready$/);
    if (lang === "nl" && readyEn) {
      return text.replace(trimmed, `${readyEn[1]}% klaar`);
    }
    const readyNl = trimmed.match(/^(\d+)% klaar$/);
    if (lang === "en" && readyNl) {
      return text.replace(trimmed, `${readyNl[1]}% ready`);
    }
    const favoriteEn = trimmed.match(/^(\d+) favourite bands?$/);
    if (lang === "nl" && favoriteEn) {
      const count = Number(favoriteEn[1]);
      return text.replace(trimmed, `${count} favoriete ${count === 1 ? "band" : "bands"}`);
    }
    const favoriteNl = trimmed.match(/^(\d+) favoriete bands?$/);
    if (lang === "en" && favoriteNl) {
      const count = Number(favoriteNl[1]);
      return text.replace(trimmed, `${count} favourite band${count === 1 ? "" : "s"}`);
    }
    const conflictsEn = trimmed.match(/^(\d+) schedule conflicts?$/);
    if (lang === "nl" && conflictsEn) {
      const count = Number(conflictsEn[1]);
      return text.replace(trimmed, `${count} ${count === 1 ? "planningsconflict" : "planningsconflicten"}`);
    }
    const conflictsNl = trimmed.match(/^(\d+) planningsconflicten?$/);
    if (lang === "en" && conflictsNl) {
      const count = Number(conflictsNl[1]);
      return text.replace(trimmed, `${count} schedule conflict${count === 1 ? "" : "s"}`);
    }
    if (lang === "nl") {
      const routeModes = {
        "Car": "Auto",
        "Public transport": "Openbaar vervoer",
        "Walking": "Lopen",
        "Cycle": "Fiets"
      };
      const mode = Object.keys(routeModes).find(label => trimmed === label || trimmed.startsWith(`${label} ·`));
      if (mode) return text.replace(mode, routeModes[mode]);
    }
    if (lang === "en") {
      const routeModes = {
        "Auto": "Car",
        "Openbaar vervoer": "Public transport",
        "Lopen": "Walking",
        "Fiets": "Cycle"
      };
      const mode = Object.keys(routeModes).find(label => trimmed === label || trimmed.startsWith(`${label} ·`));
      if (mode) return text.replace(mode, routeModes[mode]);
    }
    const countdownEn = trimmed.match(/^(\d+) days? remaining$/);
    if (lang === "nl" && countdownEn) {
      const count = Number(countdownEn[1]);
      return text.replace(trimmed, `${count} ${count === 1 ? "dag" : "dagen"} te gaan`);
    }
    const countdownNl = trimmed.match(/^(\d+) dagen? te gaan$/);
    if (lang === "en" && countdownNl) {
      const count = Number(countdownNl[1]);
      return text.replace(trimmed, `${count} day${count === 1 ? "" : "s"} remaining`);
    }
    const hoursEn = trimmed.match(/^(\d+) hours? remaining$/);
    if (lang === "nl" && hoursEn) {
      return text.replace(trimmed, `${hoursEn[1]} uur te gaan`);
    }
    const hoursNl = trimmed.match(/^(\d+) uur te gaan$/);
    if (lang === "en" && hoursNl) {
      const count = Number(hoursNl[1]);
      return text.replace(trimmed, `${count} hour${count === 1 ? "" : "s"} remaining`);
    }
    const countdownDetailedEn = trimmed.match(/^(\d+) days? (\d+) hours? remaining$/);
    if (lang === "nl" && countdownDetailedEn) {
      const days = Number(countdownDetailedEn[1]);
      return text.replace(trimmed, `${days} ${days === 1 ? "dag" : "dagen"} ${countdownDetailedEn[2]} uur te gaan`);
    }
    const countdownDetailedNl = trimmed.match(/^(\d+) dagen? (\d+) uur te gaan$/);
    if (lang === "en" && countdownDetailedNl) {
      const days = Number(countdownDetailedNl[1]);
      const hours = Number(countdownDetailedNl[2]);
      return text.replace(trimmed, `${days} day${days === 1 ? "" : "s"} ${hours} hour${hours === 1 ? "" : "s"} remaining`);
    }
    const progressMatch = trimmed.match(/^(\d+) of (\d+) items checked\.$/);
    if (lang === "nl" && progressMatch) {
      return text.replace(trimmed, `${progressMatch[1]} van ${progressMatch[2]} items afgevinkt.`);
    }
    const progressNlMatch = trimmed.match(/^(\d+) van (\d+) items afgevinkt\.$/);
    if (lang === "en" && progressNlMatch) {
      return text.replace(trimmed, `${progressNlMatch[1]} of ${progressNlMatch[2]} items checked.`);
    }
    const translated = lang === "nl" ? translations.nl[trimmed] : reverse[trimmed];
    if (!translated || translated === trimmed) return text;
    return text.replace(trimmed, translated);
  }

  function translateAttribute(element, attribute, lang) {
    const value = element.getAttribute(attribute);
    if (!value) return;
    const translated = translateText(value, lang);
    if (translated !== value) element.setAttribute(attribute, translated);
  }

  function applyTranslations() {
    const lang = currentLanguage();
    document.documentElement.lang = lang;
    document.querySelectorAll(".language-toggle button").forEach(button => {
      button.classList.toggle("active", button.dataset.lang === lang);
      button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest("script, style")) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const translated = translateText(node.nodeValue, lang);
      if (translated !== node.nodeValue) node.nodeValue = translated;
    });

    document.querySelectorAll("[placeholder], [title], [aria-label]").forEach(element => {
      translateAttribute(element, "placeholder", lang);
      translateAttribute(element, "title", lang);
      translateAttribute(element, "aria-label", lang);
    });

    const originalTitle = document.title;
    const translatedTitle = translateText(originalTitle, lang);
    if (translatedTitle !== originalTitle) document.title = translatedTitle;
  }

  function installToggle() {
    if (document.querySelector(".language-toggle")) return;
    const controls = document.getElementById("languageSettings");
    if (!controls) return;
    const toggle = document.createElement("div");
    toggle.className = "language-toggle";
    toggle.setAttribute("aria-label", "Language");
    toggle.innerHTML = `
      <button type="button" data-lang="en">English</button>
      <button type="button" data-lang="nl">Nederlands</button>
    `;
    toggle.querySelectorAll("button").forEach(button => {
      button.addEventListener("click", () => {
        localStorage.setItem(LANG_KEY, button.dataset.lang);
        applyTranslations();
      });
    });

    if (controls) controls.appendChild(toggle);
  }

  function appearanceMode() {
    const saved = localStorage.getItem(APPEARANCE_KEY);
    return ["light", "dark", "system"].includes(saved) ? saved : "system";
  }

  function resolvedTheme(mode) {
    if (mode === "system") {
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }
    return mode;
  }

  function applyAppearance() {
    const mode = appearanceMode();
    const theme = resolvedTheme(mode);
    document.documentElement.dataset.appearance = mode;
    document.documentElement.dataset.theme = theme;
    document.querySelectorAll(".appearance-toggle button").forEach(button => {
      const active = button.dataset.appearance === mode;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function installAppearanceToggle() {
    if (document.querySelector(".appearance-toggle")) return;
    const controls = document.getElementById("appearanceSettings");
    if (!controls) return;
    const toggle = document.createElement("div");
    toggle.className = "appearance-toggle";
    toggle.setAttribute("aria-label", "Appearance");
    toggle.innerHTML = `
      <button type="button" data-appearance="system">System</button>
      <button type="button" data-appearance="light">Light</button>
      <button type="button" data-appearance="dark">Dark</button>
    `;
    toggle.querySelectorAll("button").forEach(button => {
      button.addEventListener("click", () => {
        localStorage.setItem(APPEARANCE_KEY, button.dataset.appearance);
        applyAppearance();
        applyTranslations();
      });
    });

    if (controls) controls.appendChild(toggle);
  }
  document.addEventListener("DOMContentLoaded", () => {
    installToggle();
    installAppearanceToggle();
    applyAppearance();
    applyTranslations();
    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", () => {
        if (appearanceMode() === "system") applyAppearance();
      });
    }
    let queued = false;
    const observer = new MutationObserver(() => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        applyTranslations();
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  });
})();
