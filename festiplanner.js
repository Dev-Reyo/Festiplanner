
    const STORAGE_KEY = "graspopPackingPlanner";

    const camps = [
      {
        id: "boneyard",
        name: "Boneyard",
        icon: "B",
        style: "Closest to the arena",
        summary: "The classic festival camping choice next to the festival arena: bring your own tent, book a Friends Zone, or rent a FestiTent.",
        reminders: [
          "Bring a sturdy tent, sleeping mat, mallet, extra pegs, and a recognizable marker for your spot.",
          "Pack wet-weather gear and dry bags because your tent is your main base.",
          "Plan how your group will carry shared items like a pump, tarp, and camping light.",
          "Showers are paid, while toilets, washbasins, and tap water are part of the campsite setup."
        ],
        tags: ["Own tent", "Friends Zone", "FestiTent"],
        types: [
          {
            id: "own-tent",
            name: "Own tent",
            summary: "Pitch your own tent at Boneyard with a full camping kit.",
            reminders: [
              "Pack tent, pegs, mallet, groundsheet, repair tape, and a small light.",
              "Bring a wagon or split heavy gear across the group if you are carrying drinks and bedding."
            ]
          },
          {
            id: "friends-zone",
            name: "Friends Zone",
            summary: "A reserved Boneyard area for camping together with friends.",
            reminders: [
              "Every person still needs their own Boneyard camping ticket.",
              "Add group admin to your list: lead booker details, deposit awareness, and who brings shared gear."
            ]
          },
          {
            id: "festitent",
            name: "FestiTent",
            summary: "A pre-set rental tent at Boneyard, available for smaller groups.",
            reminders: [
              "You can leave bulky tent canvas at home, but still pack bedding, towel, and personal comfort items.",
              "Bring the reservation details and remember the deposit is separate from the campsite ticket."
            ]
          }
        ]
      },
      {
        id: "crypt",
        name: "The Crypt",
        icon: "C",
        style: "Quieter own-tent camping",
        summary: "A calmer campsite about 1.3 km from the arena, with parking nearby and the same need for a valid camping ticket.",
        reminders: [
          "Keep your Crypt ticket, parking voucher, and wristband plan available offline.",
          "Pack for a walk between campsite and festival: comfortable shoes and a day bag matter.",
          "Showers are paid, so bring shower shoes, towel, toiletries, and easy-change clothes."
        ],
        tags: ["Own tent", "Quieter", "Parking nearby"],
        types: [
          {
            id: "own-tent",
            name: "Own tent",
            summary: "Set up your own tent in a quieter campsite outside the busiest festival area.",
            reminders: [
              "Bring the complete tent kit: tent, pegs, mallet, mat, sleeping bag, and campsite light.",
              "Pack a small day bag for the walk to and from the arena."
            ]
          },
          {
            id: "accessible-facilities",
            name: "Accessible facilities",
            summary: "The Crypt has accessible showers and toilets, but no Inter staff on site.",
            reminders: [
              "Bring any mobility, medical, or access documents you need, plus medication in original packaging.",
              "If you need Inter support, check the Inter campsite option under Inferno instead."
            ]
          }
        ]
      },
      {
        id: "inferno",
        name: "Inferno",
        icon: "I",
        style: "Comfort and accessibility",
        summary: "A comfort campsite about 500 metres from the arena, with ready-made accommodations and the separate Inter campsite for disabled visitors.",
        reminders: [
          "Bring your reservation details and know your check-in window.",
          "Pack bedding or a sleeping bag based on what your exact Inferno option includes.",
          "Use packing cubes or bags so you can settle in quickly without unpacking everything.",
          "Check what your exact accommodation includes before you pack bed linen, towels, chairs, or power adapters."
        ],
        tags: ["Pre-pitched", "Inter camping", "500 m walk"],
        types: [
          {
            id: "festihut",
            name: "Festihut / XL",
            summary: "A lockable hut-style stay for a more solid base at Inferno.",
            reminders: [
              "Bring key-safe habits: small lock pouch, reservation voucher, and a plan for check-in.",
              "Check whether your booking includes bedding before leaving your sleeping gear at home."
            ]
          },
          {
            id: "tip-up",
            name: "Tip-Up",
            summary: "A compact two-person wooden-frame option with more comfort than a basic tent.",
            reminders: [
              "Pack light and compact; space is more limited than a group tent.",
              "Bring your charging cable and adapter if you plan to use the power socket."
            ]
          },
          {
            id: "canvas-hut",
            name: "Canvas Hut",
            summary: "A four-person canvas stay on a wooden floor.",
            reminders: [
              "Coordinate bedding and towels with your group so you do not duplicate bulky items.",
              "Pack a small indoor light and soft bags that fit under beds or in corners."
            ]
          },
          {
            id: "group-tent",
            name: "Group tent",
            summary: "A larger Inferno option for 6, 8, or 12 people.",
            reminders: [
              "Make one shared checklist for power, snacks, first aid, and cleaning/trash bags.",
              "Confirm how many parking vouchers your group can use before travel day."
            ]
          },
          {
            id: "boutique",
            name: "Boutique Tent",
            summary: "A pre-pitched boutique tent option for 2, 4, or 6 people.",
            reminders: [
              "Check the included comfort items before packing bedding or chairs.",
              "Bring a small doormat or spare bag for muddy shoes outside the sleeping area."
            ]
          },
          {
            id: "inter",
            name: "Inter camping",
            summary: "A dedicated accessible zone at Inferno for disabled visitors, arranged through Inter.",
            reminders: [
              "Bring Inter approval details, medical documents, medication in original packaging, and any mobility charging cables.",
              "The Inter campsite includes accessible sanitary facilities and medical-support infrastructure, but places are limited.",
              "Up to 4 friends can stay nearby in a maximum of 3 small tents when approved."
            ]
          }
        ]
      },
      {
        id: "devils-lake",
        name: "Devil's Lake",
        icon: "D",
        style: "Holiday park stay",
        summary: "A cottage or hotel-room stay in Lommel, about 25 km from the festival site, with more comfort and daily travel planning.",
        reminders: [
          "Check shuttle or transfer times and save the route offline.",
          "Bring a compact day bag for layers, rain gear, sunscreen, medicine, and battery backup.",
          "Pack a quiet return kit: fresh socks, water, room key, and anything you need after the last band.",
          "Use the room comforts: pack lighter on camping gear, heavier on day-bag organization."
        ],
        tags: ["Comfort cottage", "Premium cottage", "Hotel room"],
        types: [
          {
            id: "comfort-cottage",
            name: "Comfort Cottage",
            summary: "A practical cottage with kitchen, bathroom, terrace, safe, linen, and towels included.",
            reminders: [
              "Bring groceries, coffee plans, and a small festival day bag instead of camping equipment.",
              "Pack swimwear if you want to use the holiday-park facilities."
            ]
          },
          {
            id: "premium-cottage",
            name: "Premium Cottage",
            summary: "A higher-comfort cottage with made-up beds and towel/kitchen pack included.",
            reminders: [
              "You can leave most bedding and towel gear at home.",
              "Pack recovery items: comfortable off-site clothes, blister care, and hydration tablets."
            ]
          },
          {
            id: "vip-cottage",
            name: "VIP Cottage",
            summary: "A luxury cottage option with made-up beds and spa-style comfort features.",
            reminders: [
              "Pack for downtime: swimwear, easy clothes, and anything you need for late-night decompression.",
              "Keep transport times visible so comfort does not make you miss the first band."
            ]
          },
          {
            id: "hotel-room",
            name: "Hotel room",
            summary: "A hotel-style stay with daily service and breakfast access.",
            reminders: [
              "Bring a compact daily reset kit: earplugs, charger, fresh shirt, sunscreen, and medicine.",
              "Keep room key, shuttle plan, and festival ticket together in your day bag."
            ]
          }
        ]
      }
    ];

    const categories = [
      {
        name: "Tickets & documents",
        items: [
          ["festival ticket", true],
          ["campsite or accommodation confirmation", true],
          ["ID or passport", true],
          ["bank card and some cash", true],
          ["health insurance details", false],
          ["offline screenshots of maps and bookings", false]
        ]
      },
      {
        name: "Camping & sleep",
        items: [
          ["tent or accommodation booking proof", true],
          ["sleeping bag", true],
          ["sleeping mat or air mattress", true],
          ["pillow or hoodie pillow", false],
          ["earplugs for sleeping", true],
          ["camping light or headlamp", false],
          ["tarp, extra pegs, and mallet", false]
        ]
      },
      {
        name: "Clothes",
        items: [
          ["band shirts and daily outfits", true],
          ["warm hoodie or jacket", true],
          ["rain jacket or poncho", true],
          ["comfortable broken-in shoes", true],
          ["spare socks", true],
          ["underwear", true],
          ["hat or cap", false]
        ]
      },
      {
        name: "Hygiene",
        items: [
          ["toothbrush and toothpaste", true],
          ["deodorant", true],
          ["towel", true],
          ["shower shoes", false],
          ["wet wipes and tissues", false],
          ["sunscreen", true],
          ["hand sanitizer", false]
        ]
      },
      {
        name: "Food & drink",
        items: [
          ["reusable water bottle", true],
          ["travel snacks", false],
          ["breakfast items", false],
          ["electrolytes or rehydration tablets", false],
          ["small trash bags", false],
          ["cup or mug", false]
        ]
      },
      {
        name: "Tech & safety",
        items: [
          ["phone and charger", true],
          ["power bank", true],
          ["charging cable", true],
          ["small first aid kit", false],
          ["personal medication", true],
          ["hearing protection for concerts", true],
          ["small lock for luggage", false]
        ]
      }
    ];

    const festivalContentTranslations = {
      nl: {
        "Closest to the arena": "Dichtst bij de arena",
        "The classic festival camping choice next to the festival arena: bring your own tent, book a Friends Zone, or rent a FestiTent.": "De klassieke festivalcamping naast de arena: neem je eigen tent mee, boek een Friends Zone of huur een FestiTent.",
        "Bring a sturdy tent, sleeping mat, mallet, extra pegs, and a recognizable marker for your spot.": "Neem een stevige tent, slaapmat, hamer, extra haringen en een herkenningspunt voor je plek mee.",
        "Pack wet-weather gear and dry bags because your tent is your main base.": "Pak regenspullen en drybags in, want je tent is je belangrijkste basis.",
        "Plan how your group will carry shared items like a pump, tarp, and camping light.": "Spreek af hoe je groep gedeelde spullen zoals een pomp, zeil en campinglamp meeneemt.",
        "Showers are paid, while toilets, washbasins, and tap water are part of the campsite setup.": "Douches zijn betalend; toiletten, wastafels en kraanwater horen bij de campingvoorzieningen.",
        "Own tent": "Eigen tent",
        "Pitch your own tent at Boneyard with a full camping kit.": "Zet je eigen tent op Boneyard met een volledige campingset.",
        "Pack tent, pegs, mallet, groundsheet, repair tape, and a small light.": "Pak tent, haringen, hamer, grondzeil, reparatietape en een klein lampje in.",
        "Bring a wagon or split heavy gear across the group if you are carrying drinks and bedding.": "Neem een kar mee of verdeel zware spullen binnen de groep als je drank en beddengoed draagt.",
        "A reserved Boneyard area for camping together with friends.": "Een gereserveerde Boneyard-zone om samen met vrienden te kamperen.",
        "Every person still needs their own Boneyard camping ticket.": "Iedereen heeft nog steeds een eigen Boneyard-campingticket nodig.",
        "Add group admin to your list: lead booker details, deposit awareness, and who brings shared gear.": "Zet groepsafspraken op je lijst: gegevens van de hoofdboeker, borgafspraken en wie gedeelde spullen meebrengt.",
        "A pre-set rental tent at Boneyard, available for smaller groups.": "Een vooraf opgezette huurtent op Boneyard, geschikt voor kleinere groepen.",
        "You can leave bulky tent canvas at home, but still pack bedding, towel, and personal comfort items.": "Groot tentdoek kan thuisblijven, maar pak wel beddengoed, handdoek en persoonlijke comfortspullen in.",
        "Bring the reservation details and remember the deposit is separate from the campsite ticket.": "Neem de reserveringsgegevens mee en onthoud dat de borg losstaat van het campingticket.",
        "Quieter own-tent camping": "Rustiger kamperen met eigen tent",
        "A calmer campsite about 1.3 km from the arena, with parking nearby and the same need for a valid camping ticket.": "Een rustigere camping op ongeveer 1,3 km van de arena, met parking dichtbij en ook hier een geldig campingticket nodig.",
        "Keep your Crypt ticket, parking voucher, and wristband plan available offline.": "Bewaar je Crypt-ticket, parkingvoucher en polsbandplan offline.",
        "Pack for a walk between campsite and festival: comfortable shoes and a day bag matter.": "Pak voor de wandeling tussen camping en festival: comfortabele schoenen en een dagrugzak zijn belangrijk.",
        "Showers are paid, so bring shower shoes, towel, toiletries, and easy-change clothes.": "Douches zijn betalend, dus neem doucheslippers, handdoek, toiletspullen en makkelijk omkleedbare kleding mee.",
        "Quieter": "Rustiger",
        "Parking nearby": "Parking dichtbij",
        "Set up your own tent in a quieter campsite outside the busiest festival area.": "Zet je eigen tent op een rustigere camping buiten de drukste festivalzone.",
        "Bring the complete tent kit: tent, pegs, mallet, mat, sleeping bag, and campsite light.": "Neem de volledige tentset mee: tent, haringen, hamer, mat, slaapzak en campinglamp.",
        "Pack a small day bag for the walk to and from the arena.": "Pak een kleine dagrugzak voor de wandeling van en naar de arena.",
        "Accessible facilities": "Toegankelijke voorzieningen",
        "The Crypt has accessible showers and toilets, but no Inter staff on site.": "The Crypt heeft toegankelijke douches en toiletten, maar geen Inter-medewerkers ter plaatse.",
        "Bring any mobility, medical, or access documents you need, plus medication in original packaging.": "Neem alle mobiliteits-, medische of toegangspapieren mee die je nodig hebt, plus medicatie in originele verpakking.",
        "If you need Inter support, check the Inter campsite option under Inferno instead.": "Als je Inter-ondersteuning nodig hebt, bekijk dan de Inter-campingoptie bij Inferno.",
        "Comfort and accessibility": "Comfort en toegankelijkheid",
        "A comfort campsite about 500 metres from the arena, with ready-made accommodations and the separate Inter campsite for disabled visitors.": "Een comfortcamping op ongeveer 500 meter van de arena, met kant-en-klare accommodaties en de aparte Inter-camping voor bezoekers met een beperking.",
        "Bring your reservation details and know your check-in window.": "Neem je reserveringsgegevens mee en ken je check-invenster.",
        "Pack bedding or a sleeping bag based on what your exact Inferno option includes.": "Pak beddengoed of een slaapzak in op basis van wat jouw exacte Inferno-optie bevat.",
        "Use packing cubes or bags so you can settle in quickly without unpacking everything.": "Gebruik packing cubes of tassen zodat je snel kunt installeren zonder alles uit te pakken.",
        "Check what your exact accommodation includes before you pack bed linen, towels, chairs, or power adapters.": "Controleer wat je exacte accommodatie bevat voordat je bedlinnen, handdoeken, stoelen of stroomadapters inpakt.",
        "Pre-pitched": "Vooraf opgezet",
        "Inter camping": "Inter-camping",
        "500 m walk": "500 m lopen",
        "Group tent": "Groepstent",
        "Boutique Tent": "Boutique Tent",
        "A lockable hut-style stay for a more solid base at Inferno.": "Een afsluitbaar hutachtig verblijf als stevigere basis op Inferno.",
        "Bring key-safe habits: small lock pouch, reservation voucher, and a plan for check-in.": "Denk aan sleutelveiligheid: klein slotzakje, reserveringsvoucher en een check-inplan.",
        "Check whether your booking includes bedding before leaving your sleeping gear at home.": "Controleer of je boeking beddengoed bevat voordat je slaapspullen thuislaat.",
        "A compact two-person wooden-frame option with more comfort than a basic tent.": "Een compacte houten optie voor twee personen met meer comfort dan een basistent.",
        "Pack light and compact; space is more limited than a group tent.": "Pak licht en compact; de ruimte is beperkter dan in een groepstent.",
        "Bring your charging cable and adapter if you plan to use the power socket.": "Neem je laadkabel en adapter mee als je het stopcontact wilt gebruiken.",
        "A four-person canvas stay on a wooden floor.": "Een canvasverblijf voor vier personen op een houten vloer.",
        "Coordinate bedding and towels with your group so you do not duplicate bulky items.": "Stem beddengoed en handdoeken af met je groep zodat je geen grote spullen dubbel meeneemt.",
        "Pack a small indoor light and soft bags that fit under beds or in corners.": "Pak een klein binnenlampje en zachte tassen die onder bedden of in hoeken passen.",
        "A larger Inferno option for 6, 8, or 12 people.": "Een grotere Inferno-optie voor 6, 8 of 12 personen.",
        "Make one shared checklist for power, snacks, first aid, and cleaning/trash bags.": "Maak een gedeelde checklist voor stroom, snacks, EHBO en schoonmaak-/vuilniszakken.",
        "Confirm how many parking vouchers your group can use before travel day.": "Controleer voor vertrek hoeveel parkingvouchers je groep kan gebruiken.",
        "A pre-pitched boutique tent option for 2, 4, or 6 people.": "Een vooraf opgezette boutique tent voor 2, 4 of 6 personen.",
        "Check the included comfort items before packing bedding or chairs.": "Controleer de inbegrepen comfortitems voordat je beddengoed of stoelen inpakt.",
        "Bring a small doormat or spare bag for muddy shoes outside the sleeping area.": "Neem een kleine deurmat of extra tas mee voor modderige schoenen buiten het slaapgedeelte.",
        "A dedicated accessible zone at Inferno for disabled visitors, arranged through Inter.": "Een aparte toegankelijke zone op Inferno voor bezoekers met een beperking, geregeld via Inter.",
        "Bring Inter approval details, medical documents, medication in original packaging, and any mobility charging cables.": "Neem Inter-goedkeuringsgegevens, medische documenten, medicatie in originele verpakking en eventuele laadkabels voor mobiliteitshulpmiddelen mee.",
        "The Inter campsite includes accessible sanitary facilities and medical-support infrastructure, but places are limited.": "De Inter-camping heeft toegankelijke sanitaire voorzieningen en medische ondersteuningsinfrastructuur, maar plaatsen zijn beperkt.",
        "Up to 4 friends can stay nearby in a maximum of 3 small tents when approved.": "Na goedkeuring kunnen maximaal 4 vrienden dichtbij verblijven in maximaal 3 kleine tenten.",
        "Holiday park stay": "Verblijf op vakantiepark",
        "A cottage or hotel-room stay in Lommel, about 25 km from the festival site, with more comfort and daily travel planning.": "Een cottage- of hotelkamerverblijf in Lommel, ongeveer 25 km van het festivalterrein, met meer comfort en dagelijkse reisplanning.",
        "Comfort cottage": "Comfort Cottage",
        "Premium cottage": "Premium Cottage",
        "Check shuttle or transfer times and save the route offline.": "Controleer shuttle- of transfertijden en sla de route offline op.",
        "Bring a compact day bag for layers, rain gear, sunscreen, medicine, and battery backup.": "Neem een compacte dagrugzak mee voor laagjes, regenspullen, zonnebrand, medicatie en batterijbackup.",
        "Pack a quiet return kit: fresh socks, water, room key, and anything you need after the last band.": "Pak een rustige terugkomstset: schone sokken, water, kamersleutel en alles wat je na de laatste band nodig hebt.",
        "Use the room comforts: pack lighter on camping gear, heavier on day-bag organization.": "Gebruik het kamercomfort: pak minder kampeerspullen en organiseer je dagrugzak beter.",
        "A practical cottage with kitchen, bathroom, terrace, safe, linen, and towels included.": "Een praktische cottage met keuken, badkamer, terras, kluis, bedlinnen en handdoeken inbegrepen.",
        "Bring groceries, coffee plans, and a small festival day bag instead of camping equipment.": "Neem boodschappen, koffieplannen en een kleine festivaldagrugzak mee in plaats van kampeerspullen.",
        "Pack swimwear if you want to use the holiday-park facilities.": "Pak zwemkleding in als je de faciliteiten van het vakantiepark wilt gebruiken.",
        "A higher-comfort cottage with made-up beds and towel/kitchen pack included.": "Een comfortabelere cottage met opgemaakte bedden en handdoeken-/keukenpakket inbegrepen.",
        "You can leave most bedding and towel gear at home.": "De meeste beddengoed- en handdoekenspullen kunnen thuisblijven.",
        "Pack recovery items: comfortable off-site clothes, blister care, and hydration tablets.": "Pak herstelspullen in: comfortabele kleding voor buiten het terrein, blarenzorg en hydratatietabletten.",
        "A luxury cottage option with made-up beds and spa-style comfort features.": "Een luxe cottage-optie met opgemaakte bedden en wellnessachtig comfort.",
        "Pack for downtime: swimwear, easy clothes, and anything you need for late-night decompression.": "Pak voor rustmomenten: zwemkleding, makkelijke kleding en alles wat je nodig hebt om 's nachts te ontspannen.",
        "Keep transport times visible so comfort does not make you miss the first band.": "Houd reistijden zichtbaar zodat comfort je niet de eerste band laat missen.",
        "A hotel-style stay with daily service and breakfast access.": "Een hotelachtig verblijf met dagelijkse service en ontbijttoegang.",
        "Hotel room": "Hotelkamer",
        "Bring a compact daily reset kit: earplugs, charger, fresh shirt, sunscreen, and medicine.": "Neem een compacte dagelijkse resetkit mee: oordoppen, oplader, schoon shirt, zonnebrand en medicatie.",
        "Keep room key, shuttle plan, and festival ticket together in your day bag.": "Bewaar kamersleutel, shuttleplan en festivalticket samen in je dagrugzak.",
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
        "No campsite selected yet": "Nog geen camping geselecteerd",
        "Choose Boneyard, The Crypt, Inferno, or Devil's Lake to personalize your list.": "Kies Boneyard, The Crypt, Inferno of Devil's Lake om je lijst te personaliseren.",
        "Keep your festival ticket, campsite confirmation, and ID easy to reach.": "Houd je festivalticket, campingbevestiging en ID binnen handbereik.",
        "Check the latest official Graspop info before you leave.": "Check de laatste officiele Graspop-info voordat je vertrekt.",
        "Staying at": "Verblijf op",
        "Selected": "Geselecteerd"
      }
    };

    const lineup = [
      { day: "Thursday", stage: "South Stage", name: "Ego Kill Talent", start: "12.45", end: "13.30" },
      { day: "Thursday", stage: "South Stage", name: "Danko Jones", start: "14.35", end: "15.25" },
      { day: "Thursday", stage: "South Stage", name: "Accept", start: "16.35", end: "17.25" },
      { day: "Thursday", stage: "South Stage", name: "A Day to Remember", start: "18.40", end: "19.35" },
      { day: "Thursday", stage: "South Stage", name: "Within Temptation", start: "21.10", end: "22.25" },
      { day: "Thursday", stage: "South Stage", name: "The Offspring", start: "0.00", end: "1.30" },
      { day: "Thursday", stage: "North Stage", name: "Mantah", start: "12.00", end: "12.40" },
      { day: "Thursday", stage: "North Stage", name: "Combichrist", start: "13.35", end: "14.25" },
      { day: "Thursday", stage: "North Stage", name: "Wind Rose", start: "15.35", end: "16.25" },
      { day: "Thursday", stage: "North Stage", name: "Tom Morello", start: "17.35", end: "18.30" },
      { day: "Thursday", stage: "North Stage", name: "Megadeth", start: "19.45", end: "21.00" },
      { day: "Thursday", stage: "North Stage", name: "Limp Bizkit", start: "22.35", end: "23.50" },
      { day: "Thursday", stage: "Marquee", name: "Distant", start: "12.00", end: "12.40" },
      { day: "Thursday", stage: "Marquee", name: "Snot", start: "13.15", end: "14.00" },
      { day: "Thursday", stage: "Marquee", name: "Dying Wish", start: "14.40", end: "15.25" },
      { day: "Thursday", stage: "Marquee", name: "Gatecreeper", start: "16.05", end: "16.55" },
      { day: "Thursday", stage: "Marquee", name: "Wolves In The Throne Room", start: "17.35", end: "18.25" },
      { day: "Thursday", stage: "Marquee", name: "Septicflesh", start: "19.10", end: "20.00" },
      { day: "Thursday", stage: "Marquee", name: "Cult of Luna", start: "20.45", end: "21.40" },
      { day: "Thursday", stage: "Marquee", name: "Anthrax", start: "22.25", end: "23.25" },
      { day: "Thursday", stage: "Jupiler Stage", name: "Slay Squad", start: "12.40", end: "13.20" },
      { day: "Thursday", stage: "Jupiler Stage", name: "BLACKGOLD", start: "14.00", end: "14.45" },
      { day: "Thursday", stage: "Jupiler Stage", name: "Thrown", start: "15.40", end: "16.25" },
      { day: "Thursday", stage: "Jupiler Stage", name: "Grade 2", start: "17.25", end: "18.10" },
      { day: "Thursday", stage: "Jupiler Stage", name: "John Coffey", start: "19.10", end: "20.00" },
      { day: "Thursday", stage: "Jupiler Stage", name: "Pennywise", start: "21.00", end: "21.50" },
      { day: "Thursday", stage: "Jupiler Stage", name: "The Dillinger Escape Plan", start: "23.00", end: "0.00" },
      { day: "Thursday", stage: "Metal Dome", name: "Magnolia Park", start: "12.00", end: "12.40" },
      { day: "Thursday", stage: "Metal Dome", name: "Ankor", start: "13.20", end: "14.00" },
      { day: "Thursday", stage: "Metal Dome", name: "The Funeral Portrait", start: "14.50", end: "15.35" },
      { day: "Thursday", stage: "Metal Dome", name: "Sleep Theory", start: "16.30", end: "17.20" },
      { day: "Thursday", stage: "Metal Dome", name: "Lakeview", start: "18.15", end: "19.05" },
      { day: "Thursday", stage: "Metal Dome", name: "Bloodywood", start: "20.05", end: "20.55" },
      { day: "Thursday", stage: "Metal Dome", name: "President", start: "21.55", end: "22.55" },
      { day: "Thursday", stage: "Classic Rock Cafe", name: "Thrash Attack", start: "14.00", end: "14.45" },
      { day: "Thursday", stage: "Classic Rock Cafe", name: "Powerslave", start: "15.15", end: "16.30" },
      { day: "Thursday", stage: "Classic Rock Cafe", name: "Thrash Attack", start: "17.00", end: "17.45" },

      { day: "Friday", stage: "South Stage", name: "Quicksand", start: "12.55", end: "13.40" },
      { day: "Friday", stage: "South Stage", name: "Triggerfinger", start: "14.45", end: "15.35" },
      { day: "Friday", stage: "South Stage", name: "Cavalera \"Chaos A.D.\"", start: "16.45", end: "17.35" },
      { day: "Friday", stage: "South Stage", name: "Sex Pistols featuring Frank Carter", start: "18.45", end: "19.45" },
      { day: "Friday", stage: "South Stage", name: "Alter Bridge", start: "21.10", end: "22.25" },
      { day: "Friday", stage: "South Stage", name: "Volbeat", start: "0.00", end: "1.30" },
      { day: "Friday", stage: "North Stage", name: "Infected Rain", start: "12.00", end: "12.45" },
      { day: "Friday", stage: "North Stage", name: "Drowning Pool", start: "13.50", end: "14.35" },
      { day: "Friday", stage: "North Stage", name: "Mammoth", start: "15.45", end: "16.35" },
      { day: "Friday", stage: "North Stage", name: "Trivium", start: "17.45", end: "18.35" },
      { day: "Friday", stage: "North Stage", name: "Breaking Benjamin", start: "19.55", end: "21.00" },
      { day: "Friday", stage: "North Stage", name: "Knocked Loose", start: "22.35", end: "23.50" },
      { day: "Friday", stage: "Marquee", name: "Hulder", start: "12.00", end: "12.40" },
      { day: "Friday", stage: "Marquee", name: "Bark", start: "13.20", end: "14.05" },
      { day: "Friday", stage: "Marquee", name: "Asomvel", start: "14.45", end: "15.30" },
      { day: "Friday", stage: "Marquee", name: "Suicidal Angels", start: "16.10", end: "17.00" },
      { day: "Friday", stage: "Marquee", name: "Old Man's Child", start: "17.40", end: "18.30" },
      { day: "Friday", stage: "Marquee", name: "Possessed", start: "19.10", end: "20.00" },
      { day: "Friday", stage: "Marquee", name: "Death To All", start: "20.45", end: "21.45" },
      { day: "Friday", stage: "Marquee", name: "Cradle Of Filth", start: "22.45", end: "0.00" },
      { day: "Friday", stage: "Jupiler Stage", name: "Thornhill", start: "12.40", end: "13.20" },
      { day: "Friday", stage: "Jupiler Stage", name: "letlive.", start: "14.05", end: "14.45" },
      { day: "Friday", stage: "Jupiler Stage", name: "Guilt Trip", start: "15.40", end: "16.25" },
      { day: "Friday", stage: "Jupiler Stage", name: "Drain", start: "17.25", end: "18.10" },
      { day: "Friday", stage: "Jupiler Stage", name: "We Came As Romans", start: "19.10", end: "20.00" },
      { day: "Friday", stage: "Jupiler Stage", name: "Kublai Khan TX", start: "21.00", end: "21.50" },
      { day: "Friday", stage: "Jupiler Stage", name: "Lionheart", start: "23.30", end: "0.30" },
      { day: "Friday", stage: "Metal Dome", name: "Vower", start: "12.00", end: "12.40" },
      { day: "Friday", stage: "Metal Dome", name: "TX2", start: "13.20", end: "14.05" },
      { day: "Friday", stage: "Metal Dome", name: "Oranssi Pazuzu", start: "14.50", end: "15.35" },
      { day: "Friday", stage: "Metal Dome", name: "Harakiri for the Sky", start: "16.30", end: "17.20" },
      { day: "Friday", stage: "Metal Dome", name: "Elder", start: "18.15", end: "19.05" },
      { day: "Friday", stage: "Metal Dome", name: "Kadavar", start: "20.05", end: "20.55" },
      { day: "Friday", stage: "Metal Dome", name: "Leprous", start: "21.55", end: "22.55" },
      { day: "Friday", stage: "Classic Rock Cafe", name: "AmÆzing Snäke", start: "14.00", end: "14.45" },
      { day: "Friday", stage: "Classic Rock Cafe", name: "AmÆzing Snäke", start: "15.15", end: "16.00" },
      { day: "Friday", stage: "Classic Rock Cafe", name: "AmÆzing Snäke", start: "16.30", end: "17.15" },
      { day: "Friday", stage: "Classic Rock Cafe", name: "ROLR", start: "19.00", end: "19.45" },
      { day: "Friday", stage: "Classic Rock Cafe", name: "ROLR", start: "20.15", end: "21.00" },
      { day: "Friday", stage: "Classic Rock Cafe", name: "ROLR", start: "21.30", end: "22.15" },

      { day: "Saturday", stage: "South Stage", name: "Fleddy Melculy", start: "12.55", end: "13.40" },
      { day: "Saturday", stage: "South Stage", name: "Malevolence", start: "14.45", end: "15.35" },
      { day: "Saturday", stage: "South Stage", name: "Hollywood Undead", start: "16.45", end: "17.35" },
      { day: "Saturday", stage: "South Stage", name: "Ice Nine Kills", start: "18.50", end: "19.50" },
      { day: "Saturday", stage: "South Stage", name: "Architects", start: "21.10", end: "22.25" },
      { day: "Saturday", stage: "South Stage", name: "Bring Me The Horizon", start: "0.00", end: "1.30" },
      { day: "Saturday", stage: "North Stage", name: "The Pretty Wild", start: "12.00", end: "12.45" },
      { day: "Saturday", stage: "North Stage", name: "P.O.D.", start: "13.50", end: "14.35" },
      { day: "Saturday", stage: "North Stage", name: "Sepultura", start: "15.45", end: "16.35" },
      { day: "Saturday", stage: "North Stage", name: "Three Days Grace", start: "17.45", end: "18.40" },
      { day: "Saturday", stage: "North Stage", name: "BABYMETAL", start: "20.00", end: "21.00" },
      { day: "Saturday", stage: "North Stage", name: "Bad Omens", start: "22.35", end: "23.50" },
      { day: "Saturday", stage: "Marquee", name: "Embryonic Autopsy", start: "12.15", end: "13.00" },
      { day: "Saturday", stage: "Marquee", name: "Sinsaenum", start: "13.40", end: "14.25" },
      { day: "Saturday", stage: "Marquee", name: "Ellende", start: "15.05", end: "15.50" },
      { day: "Saturday", stage: "Marquee", name: "Terrorizer", start: "16.30", end: "17.15" },
      { day: "Saturday", stage: "Marquee", name: "Lacuna Coil", start: "17.55", end: "18.45" },
      { day: "Saturday", stage: "Marquee", name: "Corrosion Of Conformity", start: "19.25", end: "20.15" },
      { day: "Saturday", stage: "Marquee", name: "Moonspell", start: "20.55", end: "21.45" },
      { day: "Saturday", stage: "Marquee", name: "Six Feet Under", start: "22.35", end: "23.35" },
      { day: "Saturday", stage: "Jupiler Stage", name: "Vicious Rumors", start: "12.40", end: "13.20" },
      { day: "Saturday", stage: "Jupiler Stage", name: "Feuerschwanz", start: "14.00", end: "14.45" },
      { day: "Saturday", stage: "Jupiler Stage", name: "Primal Fear", start: "15.40", end: "16.25" },
      { day: "Saturday", stage: "Jupiler Stage", name: "Orden Ogan", start: "17.25", end: "18.10" },
      { day: "Saturday", stage: "Jupiler Stage", name: "Sonata Arctica", start: "19.10", end: "20.00" },
      { day: "Saturday", stage: "Jupiler Stage", name: "Queensrÿche", start: "21.00", end: "21.50" },
      { day: "Saturday", stage: "Jupiler Stage", name: "Avatar", start: "23.00", end: "0.00" },
      { day: "Saturday", stage: "Metal Dome", name: "Mouth Culture", start: "12.00", end: "12.40" },
      { day: "Saturday", stage: "Metal Dome", name: "Faetooth", start: "13.20", end: "14.00" },
      { day: "Saturday", stage: "Metal Dome", name: "Rivers of Nihil", start: "14.50", end: "15.35" },
      { day: "Saturday", stage: "Metal Dome", name: "Loathe", start: "16.30", end: "17.20" },
      { day: "Saturday", stage: "Metal Dome", name: "Catch Your Breath", start: "18.15", end: "19.05" },
      { day: "Saturday", stage: "Metal Dome", name: "Uncle Acid & the Deadbeats", start: "20.05", end: "20.55" },
      { day: "Saturday", stage: "Metal Dome", name: "Tesseract", start: "21.55", end: "22.55" },
      { day: "Saturday", stage: "Classic Rock Cafe", name: "Ultimate Ozzy", start: "14.00", end: "15.00" },
      { day: "Saturday", stage: "Classic Rock Cafe", name: "Snaggletooth", start: "16.00", end: "17.00" },

      { day: "Sunday", stage: "South Stage", name: "Battle Beast", start: "12.00", end: "12.45" },
      { day: "Sunday", stage: "South Stage", name: "Life of Agony", start: "13.55", end: "14.45" },
      { day: "Sunday", stage: "South Stage", name: "Extreme", start: "15.55", end: "16.55" },
      { day: "Sunday", stage: "South Stage", name: "Black Label Society", start: "18.15", end: "19.15" },
      { day: "Sunday", stage: "South Stage", name: "Electric Callboy", start: "20.45", end: "21.55" },
      { day: "Sunday", stage: "South Stage", name: "Sabaton", start: "23.30", end: "1.00" },
      { day: "Sunday", stage: "North Stage", name: "Evergrey", start: "12.55", end: "13.45" },
      { day: "Sunday", stage: "North Stage", name: "Europe", start: "14.55", end: "15.45" },
      { day: "Sunday", stage: "North Stage", name: "Foreigner", start: "17.05", end: "18.05" },
      { day: "Sunday", stage: "North Stage", name: "Alice Cooper", start: "19.25", end: "20.35" },
      { day: "Sunday", stage: "North Stage", name: "Def Leppard", start: "22.05", end: "23.20" },
      { day: "Sunday", stage: "Marquee", name: "Killus", start: "12.00", end: "12.40" },
      { day: "Sunday", stage: "Marquee", name: "Gaerea", start: "13.15", end: "14.00" },
      { day: "Sunday", stage: "Marquee", name: "Decapitated", start: "14.40", end: "15.30" },
      { day: "Sunday", stage: "Marquee", name: "Vltimas", start: "16.10", end: "17.00" },
      { day: "Sunday", stage: "Marquee", name: "Kanonenfieber", start: "17.40", end: "18.40" },
      { day: "Sunday", stage: "Marquee", name: "The Gathering", start: "19.20", end: "20.10" },
      { day: "Sunday", stage: "Marquee", name: "Venom", start: "20.50", end: "21.50" },
      { day: "Sunday", stage: "Marquee", name: "Mastodon", start: "22.35", end: "23.50" },
      { day: "Sunday", stage: "Jupiler Stage", name: "Kuazar", start: "12.40", end: "13.20" },
      { day: "Sunday", stage: "Jupiler Stage", name: "King 810", start: "14.00", end: "14.45" },
      { day: "Sunday", stage: "Jupiler Stage", name: "Wargasm", start: "15.40", end: "16.25" },
      { day: "Sunday", stage: "Jupiler Stage", name: "Set It Off", start: "17.25", end: "18.10" },
      { day: "Sunday", stage: "Jupiler Stage", name: "Lagwagon", start: "19.10", end: "20.00" },
      { day: "Sunday", stage: "Jupiler Stage", name: "Bury Tomorrow", start: "21.00", end: "21.50" },
      { day: "Sunday", stage: "Jupiler Stage", name: "The Plot In You", start: "23.00", end: "0.00" },
      { day: "Sunday", stage: "Metal Dome", name: "Return To Dust", start: "12.00", end: "12.40" },
      { day: "Sunday", stage: "Metal Dome", name: "Zetra", start: "13.20", end: "14.00" },
      { day: "Sunday", stage: "Metal Dome", name: "Rain City Drive", start: "14.50", end: "15.35" },
      { day: "Sunday", stage: "Metal Dome", name: "Future Palace", start: "16.30", end: "17.20" },
      { day: "Sunday", stage: "Metal Dome", name: "Periphery", start: "18.15", end: "19.05" },
      { day: "Sunday", stage: "Metal Dome", name: "Sólstafir", start: "20.05", end: "20.55" },
      { day: "Sunday", stage: "Metal Dome", name: "Carpenter Brut", start: "21.55", end: "22.55" },
      { day: "Sunday", stage: "Classic Rock Cafe", name: "AmÆzing Snäke", start: "14.00", end: "14.45" },
      { day: "Sunday", stage: "Classic Rock Cafe", name: "AmÆzing Snäke", start: "15.15", end: "16.00" },
      { day: "Sunday", stage: "Classic Rock Cafe", name: "AmÆzing Snäke", start: "16.30", end: "17.15" }
    ];
    window.FESTIPLANNER_LINEUP_DATA = lineup;

    const defaultState = {
      camp: "",
      campType: "",
      checked: {},
      lineupDay: "Thursday",
      favoriteActs: {},
      arrivalMode: "driving",
      mapStart: "",
      mapDestination: "Graspop Metal Meeting, Dessel, Belgium",
      departureTime: "",
      meetingPoint: "",
      freeNotes: ""
    };

    let state = loadState();

    const campGrid = document.getElementById("campGrid");
    const campTypePanel = document.getElementById("campTypePanel");
    const campTypeGrid = document.getElementById("campTypeGrid");
    const packingGrid = document.getElementById("packingGrid");
    const selectedTitle = document.getElementById("selectedTitle");
    const selectedSummary = document.getElementById("selectedSummary");
    const selectedPills = document.getElementById("selectedPills");
    const campTips = document.getElementById("campTips");
    const progressNumber = document.getElementById("progressNumber");
    const progressFill = document.getElementById("progressFill");
    const progressText = document.getElementById("progressText");
    const mobileProgressNumber = document.getElementById("mobileProgressNumber");
    const mobileProgressFill = document.getElementById("mobileProgressFill");
    const mobileProgressText = document.getElementById("mobileProgressText");
    const dayTabs = document.getElementById("dayTabs");
    const stageFilter = document.getElementById("stageFilter");
    const favoriteFilter = document.getElementById("favoriteFilter");
    const lineupSearch = document.getElementById("lineupSearch");
    const lineupTitle = document.getElementById("lineupTitle");
    const actList = document.getElementById("actList");
    const clashList = document.getElementById("clashList");
    const clashOverviewList = document.getElementById("clashOverviewList");
    const markedList = document.getElementById("markedList");
    const planList = document.getElementById("planList");
    const mapsLink = document.getElementById("mapsLink");
    const mapsPreview = document.getElementById("mapsPreview");
    const routeFrom = document.getElementById("routeFrom");
    const routeTo = document.getElementById("routeTo");

    function loadState() {
      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
        const next = { ...defaultState, ...saved };
        if (!next.checked || typeof next.checked !== "object" || Array.isArray(next.checked)) next.checked = {};
        if (!next.favoriteActs || typeof next.favoriteActs !== "object" || Array.isArray(next.favoriteActs)) next.favoriteActs = {};
        if (!["driving", "transit", "walking", "bicycling"].includes(next.arrivalMode)) next.arrivalMode = "driving";
        if (!next.mapDestination) next.mapDestination = defaultState.mapDestination;
        return next;
      } catch {
        return { ...defaultState };
      }
    }

    function saveState() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }

    function contentLanguage() {
      return localStorage.getItem("festiplannerLanguage") === "nl" ? "nl" : "en";
    }

    function festivalText(value) {
      if (!value || typeof value !== "string") return value;
      return festivalContentTranslations[contentLanguage()]?.[value] || value;
    }

    function renderCamps() {
      campGrid.innerHTML = camps.map(camp => `
        <button class="camp-card ${state.camp === camp.id ? "active" : ""}" type="button" data-camp="${camp.id}">
          <span class="camp-icon" aria-hidden="true">${camp.icon}</span>
          <h3>${camp.name}</h3>
          <p><strong>${festivalText(camp.style)}</strong></p>
          <p>${festivalText(camp.summary)}</p>
        </button>
      `).join("");

      campGrid.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
          if (state.camp !== button.dataset.camp) {
            state.campType = "";
          }
          state.camp = button.dataset.camp;
          saveState();
          render();
        });
      });
    }

    function renderCampTypes() {
      const camp = camps.find(item => item.id === state.camp);
      if (!camp || !camp.types || !camp.types.length) {
        campTypePanel.hidden = true;
        campTypeGrid.innerHTML = "";
        return;
      }

      campTypePanel.hidden = false;
      campTypeGrid.innerHTML = camp.types.map(type => `
        <button class="type-card ${state.campType === type.id ? "active" : ""}" type="button" data-type="${type.id}">
          <strong>${festivalText(type.name)}</strong>
          <span>${festivalText(type.summary)}</span>
        </button>
      `).join("");

      campTypeGrid.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
          state.campType = button.dataset.type;
          saveState();
          renderSelectedCamp();
          renderCampTypes();
          renderPacking();
          renderProgress();
        });
      });
    }

    function renderSelectedCamp() {
      const camp = camps.find(item => item.id === state.camp);
      if (!camp) {
        selectedTitle.textContent = festivalText("No campsite selected yet");
        selectedSummary.textContent = festivalText("Choose Boneyard, The Crypt, Inferno, or Devil's Lake to personalize your list.");
        selectedPills.innerHTML = "";
        campTips.innerHTML = `
          <li>${festivalText("Keep your festival ticket, campsite confirmation, and ID easy to reach.")}</li>
          <li>${festivalText("Check the latest official Graspop info before you leave.")}</li>
        `;
        return;
      }

      const type = (camp.types || []).find(item => item.id === state.campType);
      selectedTitle.textContent = type ? `${camp.name}: ${festivalText(type.name)}` : `${festivalText("Staying at")} ${camp.name}`;
      selectedSummary.textContent = festivalText(type ? type.summary : camp.summary);
      selectedPills.innerHTML = [
        ...camp.tags.map(tag => festivalText(tag)),
        ...(type ? [`${festivalText("Selected")}: ${festivalText(type.name)}`] : [])
      ].map(tag => `<span class="pill">${tag}</span>`).join("");
      campTips.innerHTML = [...camp.reminders, ...(type ? type.reminders : [])]
        .map(tip => `<li>${festivalText(tip)}</li>`)
        .join("");
    }

    function getItemId(categoryName, itemName) {
      return `${categoryName}:${itemName}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    }

    function stayNeeds() {
      const camp = state.camp;
      const type = state.campType;
      const ownTent = !camp || type === "own-tent" || type === "inter" || camp === "crypt" || (camp === "boneyard" && !["festitent"].includes(type));
      const rentalTent = type === "festitent" || ["festihut", "tip-up", "canvas-hut", "group-tent", "boutique"].includes(type);
      const roomStay = camp === "devils-lake";
      const inter = type === "inter";
      return { ownTent, rentalTent, roomStay, inter };
    }

    function packingCategoriesForStay() {
      const needs = stayNeeds();
      const remove = new Set();

      if (!needs.ownTent) {
        [
          "tent or accommodation booking proof",
          "sleeping mat or air mattress",
          "tarp, extra pegs, and mallet"
        ].forEach(item => remove.add(item));
      }

      if (needs.roomStay) {
        [
          "tent or accommodation booking proof",
          "sleeping bag",
          "sleeping mat or air mattress",
          "camping light or headlamp",
          "tarp, extra pegs, and mallet",
          "shower shoes",
          "small trash bags",
          "cup or mug"
        ].forEach(item => remove.add(item));
      }

      const adapted = categories.map(category => ({
        name: category.name,
        items: category.items.filter(([item]) => !remove.has(item))
      })).filter(category => category.items.length);

      const extraItems = [];
      if (needs.rentalTent) {
        extraItems.push(["accommodation voucher and deposit info", true]);
        extraItems.push(["bedding check for your exact rental type", true]);
      }
      if (needs.roomStay) {
        extraItems.push(["room key plan", true]);
        extraItems.push(["daily festival day bag", true]);
        extraItems.push(["swimwear or recovery clothes", false]);
      }
      if (needs.inter) {
        extraItems.push(["Inter approval details", true]);
        extraItems.push(["mobility or medical charging cables", true]);
        extraItems.push(["doctor's note for medication or special diet", false]);
      }
      if (extraItems.length) adapted.push({ name: "Stay-specific", items: extraItems });

      return adapted;
    }

    function renderPacking() {
      const activeCategories = packingCategoriesForStay();
      packingGrid.innerHTML = activeCategories.map(category => {
        const checkedCount = category.items.filter(([item]) => state.checked[getItemId(category.name, item)]).length;
        return `
          <article class="category">
            <h3>${festivalText(category.name)}<span class="counter">${checkedCount}/${category.items.length}</span></h3>
            <div class="checklist">
              ${category.items.map(([item, essential]) => {
                const id = getItemId(category.name, item);
                const checked = Boolean(state.checked[id]);
                return `
                  <label class="check ${checked ? "done" : ""}">
                    <input type="checkbox" data-item="${id}" data-essential="${essential}" ${checked ? "checked" : ""}>
                    <span>${festivalText(item)}</span>
                  </label>
                `;
              }).join("")}
            </div>
          </article>
        `;
      }).join("");

      packingGrid.querySelectorAll("input[type='checkbox']").forEach(box => {
        box.addEventListener("change", () => {
          state.checked[box.dataset.item] = box.checked;
          saveState();
          renderPacking();
          renderProgress();
        });
      });
    }

    function renderProgress() {
      const allItems = packingCategoriesForStay().flatMap(category => category.items.map(([item]) => getItemId(category.name, item)));
      const checkedItems = allItems.filter(id => state.checked[id]).length;
      const percentage = Math.round((checkedItems / allItems.length) * 100);
      const progressLabel = checkedItems === allItems.length
        ? "Packed and ready."
        : `${checkedItems} of ${allItems.length} items checked.`;
      progressNumber.textContent = `${percentage}%`;
      progressFill.style.width = `${percentage}%`;
      progressText.textContent = progressLabel;
      if (mobileProgressNumber) mobileProgressNumber.textContent = `${percentage}%`;
      if (mobileProgressFill) mobileProgressFill.style.width = `${percentage}%`;
      if (mobileProgressText) mobileProgressText.textContent = progressLabel;
    }

    function actId(act) {
      return `${act.day}:${act.stage}:${act.name}:${act.start}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    }

    function timeToMinutes(value) {
      const [hourText, minuteText] = value.split(".");
      const hour = Number(hourText);
      const minute = Number(minuteText);
      return (hour < 6 ? hour + 24 : hour) * 60 + minute;
    }

    function formatTime(value) {
      return value.replace(".", ":");
    }

    function renderLineupControls() {
      const days = ["Thursday", "Friday", "Saturday", "Sunday"];
      dayTabs.innerHTML = days.map(day => `
        <button class="day-tab ${state.lineupDay === day ? "active" : ""}" type="button" data-day="${day}">${day.slice(0, 3)}</button>
      `).join("");

      dayTabs.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
          state.lineupDay = button.dataset.day;
          saveState();
          renderLineup();
        });
      });

      const stages = ["All stages", ...new Set(lineup.filter(act => act.day === state.lineupDay).map(act => act.stage))];
      const currentStage = stageFilter.value || "All stages";
      stageFilter.innerHTML = stages.map(stage => `<option value="${stage}">${stage}</option>`).join("");
      stageFilter.value = stages.includes(currentStage) ? currentStage : "All stages";
    }

    function visibleLineupActs() {
      const stage = stageFilter.value || "All stages";
      const search = (lineupSearch.value || "").trim().toLowerCase();
      const markedOnly = favoriteFilter.value === "favorites";
      return lineup
        .filter(act => act.day === state.lineupDay)
        .filter(act => stage === "All stages" || act.stage === stage)
        .filter(act => !markedOnly || state.favoriteActs[actId(act)])
        .filter(act => !search || `${act.name} ${act.stage}`.toLowerCase().includes(search))
        .sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start));
    }

    function renderActList() {
      const acts = visibleLineupActs();
      lineupTitle.textContent = `${state.lineupDay} lineup`;
      actList.innerHTML = acts.length ? acts.map(act => {
        const id = actId(act);
        const favorite = Boolean(state.favoriteActs[id]);
        return `
          <article class="act-card ${favorite ? "favorite" : ""}">
            <div class="act-card-content">
              <span class="act-name">${act.name}</span>
              <span class="act-meta">${formatTime(act.start)} - ${formatTime(act.end)}</span>
            </div>
            <button class="favorite-button" type="button" data-act="${id}" aria-pressed="${favorite}" aria-label="${favorite ? "Unmark" : "Mark"} ${act.name}" title="${favorite ? "Unmark band" : "Mark band"}">
              <span aria-hidden="true">${favorite ? "✓" : "+"}</span>
            </button>
          </article>
        `;
      }).join("") : `<p class="hint">No bands match these filters.</p>`;

      actList.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
          state.favoriteActs[button.dataset.act] = !state.favoriteActs[button.dataset.act];
          if (!state.favoriteActs[button.dataset.act]) delete state.favoriteActs[button.dataset.act];
          saveState();
          renderActList();
          renderClashes();
        });
      });
    }

    function dayBounds(dayActs) {
      const starts = dayActs.map(act => timeToMinutes(act.start));
      const ends = dayActs.map(act => timeToMinutes(act.end));
      const min = Math.floor(Math.min(...starts) / 60) * 60;
      const max = Math.ceil(Math.max(...ends) / 60) * 60;
      return { min, max, span: Math.max(max - min, 1) };
    }

    function minutesToLabel(minutes) {
      const hour = Math.floor(minutes / 60) % 24;
      return `${String(hour).padStart(2, "0")}:00`;
    }

    function markedActsWithMinutes() {
      const dayOrder = { Thursday: 1, Friday: 2, Saturday: 3, Sunday: 4 };
      return lineup
        .filter(act => state.favoriteActs[actId(act)])
        .map(act => ({
          ...act,
          startMinutes: timeToMinutes(act.start),
          endMinutes: timeToMinutes(act.end)
        }))
        .sort((a, b) => dayOrder[a.day] - dayOrder[b.day] || a.startMinutes - b.startMinutes);
    }

    function clashPairs(marked) {
      const clashes = [];
      marked.forEach((act, index) => {
        marked.slice(index + 1).forEach(other => {
          if (act.day !== other.day) return;
          const overlap = Math.min(act.endMinutes, other.endMinutes) - Math.max(act.startMinutes, other.startMinutes);
          if (overlap > 0) clashes.push({ act, other, overlap });
        });
      });
      return clashes;
    }

    function clashingActIds() {
      const ids = new Set();
      clashPairs(markedActsWithMinutes()).forEach(({ act, other }) => {
        ids.add(actId(act));
        ids.add(actId(other));
      });
      return ids;
    }

    function renderActList() {
      const acts = visibleLineupActs();
      lineupTitle.textContent = `${state.lineupDay} lineup`;
      if (!acts.length) {
        actList.innerHTML = `<p class="hint">No bands match these filters.</p>`;
        return;
      }

      const dayActs = lineup.filter(act => act.day === state.lineupDay);
      const bounds = dayBounds(dayActs);
      const stageOrder = [...new Set(dayActs.map(act => act.stage))]
        .filter(stage => acts.some(act => act.stage === stage));
      const clashing = clashingActIds();
      const ticks = [];
      const hourLines = [];
      for (let minute = bounds.min; minute <= bounds.max; minute += 60) {
        const left = ((minute - bounds.min) / bounds.span) * 100;
        ticks.push(`<span class="time-tick" style="left: ${left}%">${minutesToLabel(minute)}</span>`);
        hourLines.push(`<span class="hour-line" style="left: ${left}%"></span>`);
      }

      actList.innerHTML = `
        <div class="schedule-board">
          <div class="time-axis">
            <div class="axis-spacer" aria-hidden="true"></div>
            <div class="time-scale">${ticks.join("")}</div>
          </div>
          ${stageOrder.map(stage => `
            <div class="stage-lane">
              <div class="stage-name">${stage}</div>
              <div class="stage-track">
                ${hourLines.join("")}
                ${acts.filter(act => act.stage === stage).map(act => {
                  const id = actId(act);
                  const favorite = Boolean(state.favoriteActs[id]);
                  const clash = clashing.has(id);
                  const start = timeToMinutes(act.start);
                  const end = timeToMinutes(act.end);
                  const left = ((start - bounds.min) / bounds.span) * 100;
                  const width = Math.max(((end - start) / bounds.span) * 100, 4);
                  return `
                    <article class="act-card ${favorite ? "favorite" : ""} ${clash ? "clashing" : ""}" style="left: ${left}%; width: ${width}%;">
                      <div class="act-card-content">
                        <span class="act-name">${act.name}</span>
                        <span class="act-meta">${formatTime(act.start)} - ${formatTime(act.end)}</span>
                      </div>
                      <button class="favorite-button" type="button" data-act="${id}" aria-pressed="${favorite}" aria-label="${favorite ? "Unmark" : "Mark"} ${act.name}" title="${favorite ? "Unmark band" : "Mark band"}">
                        <span aria-hidden="true">${favorite ? "✓" : "+"}</span>
                      </button>
                    </article>
                  `;
                }).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      `;

      actList.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
          state.favoriteActs[button.dataset.act] = !state.favoriteActs[button.dataset.act];
          if (!state.favoriteActs[button.dataset.act]) delete state.favoriteActs[button.dataset.act];
          saveState();
          renderActList();
          renderClashes();
        });
      });
    }

    function clashCardMarkup({ act, other, overlap }) {
      return `
        <article class="clash-card">
          <strong>${act.name} vs ${other.name} — ${overlap} min overlap</strong>
          <span class="act-meta">${formatTime(act.start)}-${formatTime(act.end)} / ${formatTime(other.start)}-${formatTime(other.end)}</span>
          <span class="act-meta">${act.stage} / ${other.stage}</span>
        </article>
      `;
    }

    function renderClashes() {
      const marked = markedActsWithMinutes();
      const clashes = clashPairs(marked).sort((a, b) => b.overlap - a.overlap);
      const clashing = clashingActIds();

      markedList.innerHTML = marked.length ? marked.map(act => `
        <article class="mini-act ${clashing.has(actId(act)) ? "clashing" : ""}">
          <strong>${act.name}</strong>
          <div class="act-meta">${act.day} · ${formatTime(act.start)} - ${formatTime(act.end)} · ${act.stage}</div>
        </article>
      `).join("") : `<p class="hint">No bands marked yet.</p>`;

      const planningDays = [...new Set(marked.map(act => act.day))];
      planList.innerHTML = marked.length ? planningDays.map(day => {
        const acts = marked.filter(act => act.day === day);
        return `
          <article class="mini-act">
            <strong>${day}</strong>
            ${acts.map(act => `<div class="act-meta">${formatTime(act.start)} - ${formatTime(act.end)} · ${act.name} · ${act.stage}</div>`).join("")}
          </article>
        `;
      }).join("") : `<p class="hint">Mark bands to build your planning.</p>`;

      const clashContent = clashes.length
        ? clashes.map(clashCardMarkup).join("")
        : `<p class="hint">No clashes yet. Mark bands to detect overlaps.</p>`;
      clashList.innerHTML = clashContent;
      if (clashOverviewList) clashOverviewList.innerHTML = clashContent;
    }

    function renderLineup() {
      renderLineupControls();
      renderActList();
      renderClashes();
    }

    function routeModeLabel(mode) {
      return {
        driving: "Car",
        transit: "Public transport",
        walking: "Walking",
        bicycling: "Cycle"
      }[mode] || "Car";
    }

    function updateMapsLink() {
      const mode = ["driving", "transit", "walking", "bicycling"].includes(state.arrivalMode)
        ? state.arrivalMode
        : "driving";
      const destination = state.mapDestination || "Graspop Metal Meeting, Dessel, Belgium";
      const origin = state.mapStart || "";
      const params = new URLSearchParams({
        api: "1",
        destination,
        travelmode: mode
      });
      if (origin) params.set("origin", origin);
      mapsLink.href = `https://www.google.com/maps/dir/?${params.toString()}`;
      mapsPreview.textContent = `${routeModeLabel(mode)} route ${origin ? "from " + origin + " " : ""}to ${destination}.`;
      if (routeFrom) routeFrom.textContent = origin || "Add a starting point";
      if (routeTo) routeTo.textContent = destination;
    }

    function bindNotes() {
      ["arrivalMode", "mapStart", "mapDestination", "departureTime", "meetingPoint", "freeNotes"].forEach(id => {
        const field = document.getElementById(id);
        field.value = state[id] || "";
        if (id === "arrivalMode" && !["driving", "transit", "walking", "bicycling"].includes(field.value)) {
          field.value = "driving";
          state.arrivalMode = "driving";
        }
        field.addEventListener("input", () => {
          state[id] = field.value;
          saveState();
          if (["arrivalMode", "mapStart", "mapDestination"].includes(id)) updateMapsLink();
        });
      });
      updateMapsLink();
    }

    function bindTools() {
      document.getElementById("checkEssentials").addEventListener("click", () => {
        packingCategoriesForStay().forEach(category => {
          category.items.forEach(([item, essential]) => {
            if (essential) state.checked[getItemId(category.name, item)] = true;
          });
        });
        saveState();
        renderPacking();
        renderProgress();
      });

      document.getElementById("clearChecks").addEventListener("click", () => {
        state.checked = {};
        saveState();
        renderPacking();
        renderProgress();
      });

      document.getElementById("clearFavorites").addEventListener("click", () => {
        state.favoriteActs = {};
        saveState();
        renderLineup();
      });
    }

    function bindLineupFilters() {
      [stageFilter, favoriteFilter, lineupSearch].forEach(field => {
        field.addEventListener("input", () => {
          renderActList();
          renderClashes();
        });
      });
    }

    function render() {
      renderCamps();
      renderCampTypes();
      renderSelectedCamp();
      renderPacking();
      renderProgress();
      renderLineup();
    }

    bindNotes();
    bindTools();
    bindLineupFilters();
    document.addEventListener("click", event => {
      if (!event.target.closest(".language-toggle button")) return;
      setTimeout(render, 0);
    });
    render();
  
