const currentChecklistItems = JSON.parse(
  localStorage.getItem("currentChecklistItems")
) || [
  {
    id: "614c696dbb9f687f6436f574",
    title: "Start learning at least the basics of Polish.",
    text: "Else, you are very likely to encounter problems when renting a flat, visiting a doctor, making any calls for appointments, etc. Shopping is no problem with English.  ",
    isActive: false,
    sectionId: 1,
  },
  {
    id: "614c696d06ed5696068d7bac",
    title:
      "Learn Basic information about relocation and life in Poland. ",
    text: "join Relocation to Poland Teams channel, settlement guide, link to new KB space (launch on Sept, 20)",
    isActive: false,
    sectionId: 1,
  },
  {
    id: "614c696d4a344571a624f141",
    title:
      "Check passport validity. ",
    text: "check your and your family members passport expiry date It is recommended that the passport should be valid for no longer than 10 years and expires not earlier than in 2 years. ! Belarusian citizens whose passport had been issued for 20 years: recommended to change your passport Passports in EU are valid for 10 years. If your passport is older, you might have issues travelling especially in airports.",
    isActive: false,
    sectionId: 1,
  },
  {
    id: "614c696d87c3b27d33ab9083",
    title:
      "check your driver's license validity. ",
    text: "Please note that exchanging your driver's license in case of its expiration requires a valid medical certificate to be submitted along with other documents. ",
    isActive: false,
    sectionId: 1,
  },
  {
    id: "61489d46522e05721aa58e3e",
    title: "obtain a Visa and ask GM team for verification. ",
    text: "GM team will contact you directly after the Job offer acceptance with instructions on how to obtain a visa and will guide you through the whole relo process",
    isActive: false,
    sectionId: 1,
  },
  {
    id: "614c696ddf54919e8cdc0561",
    title: "find short term accommodation and organize your trip. ",
    text: `Full package - GM team will propose the options of short term accommodation(up to 28days) and flight tickets unless you choose another means of transport(then you should organize it yourself)

    Light package Since it is difficult to find a long-term apartment on your own remotely, it is recommended to find a short term accommodation for the first 2-3weeks in Poland( on booking.com or airbnb etc) You may look for a long-term accommodation upon your arrival.
    
    In both cases, check Wi-Fi availability in the apartment and note down the exact address including the postal code, etc. (it will be needed to submit the docs at the passport control and for equipment delivery)
    
    you won't be able to cross the border without confirmed address of your stay during the quarantine
    
    For anybody who is travelling from Belarus, due to the BY border restrictions in place, it is strongly recommended that spouses and children travel by plane. In this case, a valid Polish visa is enough for BY and PL border crossing.`,
    isActive: false,
    sectionId: 1,
  },
  {
    id: "614c696d8c52606406093316",
    title: "make sure you can make purchases abroad. ",
    text: "check your bank account settings to be able to make payments in Poland (some banks require to make a call and inform them that you are you going to use your card in Poland, or your card might be blocked without this notice, as in this case the bank will consider it to have been stolen and used by third parties) check if you'll be able to pay by your credit card abroad (withdrawal limit, roaming for payment confirmation (especially sms) recommended to have some cash depending on your bank account settings, you might need to verify your payments in Poland via sms code",
    isActive: false,
    sectionId: 1,
  },
  {
    id: "61489d46934d2231970bff38",
    title: "collect all the necessary documents",
    text: `passport (not older than 2 years - recommended)    
    Diplomas with supplements Reference letters/workbook 

    Birth certificates - for all family members & for yourself (old USSR birth certificates are OK) 

    Marriage certificate - for spouse (if you relocate to Gdańsk there is a need to obtain a non-laminated duplicate of the marriage certificate because the original will be imposed by Polish authorities)
    
    Divorce certificates (if you have any, especially if your last name has been changed) - optional Certificate of Name Change (if you have any) - optional
    
    Vaccination Certificate for kids (optional but highly recommended especially for children)
    
    All the necessary documents if you are relocating with the challenged child
    
    School certificate
    
    print out Umowa o Prace document and have it with you in a hard copy work permit (GM team will let you know if you need one)`,
    isActive: false,
    sectionId: 1,
  },
  {
    id: "614c696d26a410f70e646b8a",
    title: "Start preliminary search of long-term accommodation",
    text: `Describe your expectations to long-term apartment in e-mail and contact the recommended real estate agencies or start contacting owners directly using Facebook Marketplace, Long-term: <a href="https://www.otodom.pl/">https://www.otodom.pl/</a> <a href="https://www.gumtree.pl/">https://www.gumtree.pl/</a> <a href="https://t.me/rentapartaments_krk">https://t.me/rentapartaments_krk</a> (gumtree's thread in Telegram for Krakow) <a href="https://www.olx.pl/nieruchomosci/mieszkania/wynajem/">https://www.olx.pl/nieruchomosci/mieszkania/wynajem/</a> Gdansk and whole trojmiasto: <a href="https://ogloszenia.trojmiasto.pl/nieruchomosci-mam-do-wynajecia/">https://ogloszenia.trojmiasto.pl/nieruchomosci-mam-do-wynajecia/</a>`,
    isActive: false,
    sectionId: 1,
  },
  {
    id: "614c696db91ccf2e8b3303e7",
    title: "return the equipment provided by EPAM in your previous location",
    text: `you cannot be dismissed from your previous office without returning the equipment. If you have any difficulties with this, please contact IT department in your current working location`,
    isActive: false,
    sectionId: 1,
  },
  {
    id: "614c696d973b1b506615e0e3",
    title: "Have a taxi app installed for transfer from the airport",
    text: `Bolt/Uber`,
    isActive: false,
    sectionId: 1,
  },
  {
    id: "614c696dae02ea859fa40a58",
    title: "Arrange walking out for your pets",
    text: `Given that it is forbidden to walk the dog during the quarantine, it is recommended to use the following options:

    pet hotels. The cost for hotel is around 30-55 PLN/ day
    
    In Facebook there is a group, which supports walking the dog during quarantine (Pies w Koronie)
    
    Often there are paid offers just for walking dog. Examples:
    
    In Katowice popular is: <a href='https://wyprowadzanie-psow.pl/oferta/wyprowadzanie-psow-katowice'>https://wyprowadzanie-psow.pl/oferta/wyprowadzanie-psow-katowice<a/>
    
    Krakow:  <a href="https://petsitterkrakow.pl/en/">https://petsitterkrakow.pl/en/</a>
    
    Gdansk:  <a href="https://dog-walk.pl/">https://dog-walk.pl/</a>
    
    Warszawa, Krakow, Wroclaw, Gdansk  <a href="https://zoopiekuj.pl/">https://zoopiekuj.pl/</a>
    
    All cities:  <a href="https://www.opiekazwierzat.pl/">https://www.opiekazwierzat.pl/</a>
    
    Or choose any other by your choice (“Wyprowadzenie psa”).
    
    As one of the options – if you stay in the hotel or aparthotel, you can check at the reception if a concierge service is available. If yes – you can ask them if they can walk your dog on your own expense. You can also walk your dog on a terrace (usually flats on the ground floor have terraces called in Polish “ogródek”).
    
    You can also search for volunteers who can walk your dog using local social network groups. Also check out the telegram chat on traveling with pets - there might be volunteers in your city.`,
    isActive: false,
    sectionId: 1,
  },
  {
    id: "614c696d785fcb008a689611",
    title: "Register e-sim card (if your device supports it)",
    text: `Instruction:

    Use VPN like <a href="https://www.tunnelbear.com">https://www.tunnelbear.com</a> (other secure VPN can be used: Cisco AnyConnect, NordVPN, OpenVPN) (have 1GB free/month for free account) on your Android / iOS device and select Poland as destination Install Orange Flex app <a href="https://flex.orange.pl/?ct=mgm&pt=orange&mt=LIZAVETA6LKG">https://flex.orange.pl/?ct=mgm&pt=orange&mt=LIZAVETA6LKG</a>
    
    Create New Account
    
    Select eSIM option or Physical SIM card with delivery to address
    
    You will need to take a picture of your passport + selfie (the same way like in car-sharing services)
    
    The app will take 5-10mins to confirm your ID
    
    After confirmation you will be able to select a Plan - like 30GB for 30PLN/month - and select a phone number from the randomized list
    
    Also enter the PROMO code FLEX3 - it will make the same plan available for 1PLN/month for the next 3 months
    
    Enter credit card info for the payment when requested by the app
    
    Follow instructions for adding a eSIM into device settings
    
    When in Poland, activate eSIM and enjoy the connection
    
    The assigned phone number can be found in the Orange Flex app at Profile screen`,
    isActive: false,
    sectionId: 1,
  },
  {
    id: "614c696d0fd9e7d24290d741",
    title: "Download Kwarantanna app",
    text: `Quarantine is mandatory in Poland for all travelers outside of Schengen area (first country of departure is outside of Schengen area) Except people passing through Turkey`,
    isActive: false,
    sectionId: 1,
  },
  {
    id: "614c696dbd199b4e51e55f65",
    title: "Download a MAPS.me app for Poland for easy navigation.",
    text: `a good application for finding a nearest pharmacy, grocery store, gas station, shopping center, etc.`,
    isActive: false,
    sectionId: 1,
  },
  {
    id: "614c696d1372c9247967cd8e",
    title: "Make sure you have the contact details of Belarussian Embassy in Poland",
    text: `If you have any issues related to passport being stolen or lost, legal issues, car accident, etc. you can contact the embassy`,
    isActive: false,
    sectionId: 1,
  },
  {
    id: "614c696dd31844d0e241a170",
    title: "Check Polish legislation basics",
    text: "",
    isActive: false,
    sectionId: 1,
  },
  {
    id: "614c696d587deac1265e4fec",
    title: "Make sure to visit a dentist and do a health check-up before leaving.",
    text: ``,
    isActive: false,
    sectionId: 1,
  },
  {
    id: "614c696de320e0270774b6fe",
    title: "Have a reasonable amount of Zloty in cash with you for emergency situations. ",
    text: ``,
    isActive: false,
    sectionId: 1,
  },
  {
    id: "614c696deadec4151c466fc3",
    title: "bringing your own laptop not to have to use a mobile phone only for such personal purposes is a good point ",
    text: ``,
    isActive: false,
    sectionId: 1,
  },
  {
    id: "614c696dc62f05c8377563df",
    title: "make apostil for documents  ",
    text: ``,
    isActive: false,
    sectionId: 1,
  },
  {
    id: "614c696d1322f6f5b73ee71f",
    title: "check roaming before relocation (especially sms) ",
    text: `if you are going to pay with BY card – sometimes you need to specify code from sms`,
    isActive: false,
    sectionId: 1,
  },
  {
    id: "614c696d7002f9237c07cb4e",
    title: "Buy and REGISTER a Polish SIM card (airport or Zabka)",
    text: `Buy a Polish SIM card and confirm during your purchase that the shop assistant has not just given you your SIM card package but has activated the card as well. Please insert and register the SIM card, then confirm it’s all working properly via text messages from the cell company and a quick internet speed test. Verifying the SIM Card before leaving the store or kiosk is much easier than trying to deal with non-activation later. Polish number is needed for a medical check (call from a doctor).`,
    isActive: false,
    sectionId: 2,
  },
  {
    id: "614c696dd213fb2437f73d28",
    title: "Buy food for your quarantine time ",
    text: `Before quarantine starts you are allowed to do some shopping. You can go to local supermarkets (like Tesco, Auchan, Carrefour, Kaufland, Alma, Biedronka, Lidl etc.) where you can buy necessary goods. Please remember that shopping malls are closed ON SUNDAYS and Public Holidays, but small shops like Żabka.pl will be open
    `,
    isActive: false,
    sectionId: 2,
  },
  {
    id: "614c696df522660992fdc62c",
    title: `Provide your phone number and temporary address in Poland to <a href="mailto:hr_pl@epam.com">hr_pl@epam.com</a>`,
    text: `Onboarding documents need to be delivered to your address in Poland approx. one week before onboarding day Also, courier with the onboarding documents will contact you to arrange delivery`,
    isActive: false,
    sectionId: 3,
  },
  {
    id: "614c696dcc5bcea638473e71",
    title:`Return one copy of signed onboarding documents to HR by a courier <a href="mailto:hr_pl@epam.com">hr_pl@epam.com</a>`,
    text: `Without signed and returned papers you will not get the IT equipment and be considered as an EPAM Poland employee

    The list: Employment contract Additional information to the contract
    
    Non disclosure agreement
    
    Personal questionnaire
    
    Health and Safety statement
    
    NJ Health Self Declaration
    
    Declaration of residence
    
    Bank authorization form (if you don't have bank account in Poland yet - you can deliver the form in one month since your start date)
    
    Acknowledgement of work regulations and privacy notice ZUS contributions statement
    
    Statement for the purpose of the use of parents rights and carers - if applicable
    
    ZUS family members registration - if applicable 
    
    PIT 2 - if applicable
    
    Mutual taxation - if applicable 
    
    Application for increased tax expenses - if applicable
    
    Resignation from tax relief - if applicable 
    
    Application for higher tax rate - if applicable`,
    isActive: false,
    sectionId: 3,
  },
  {
    id: "614c696d63e8f60e7e8f3083",
    title: "pass the medical check (a call from a doctor in English)",
    text: `You cannot perform work without the required medical check. HR Team will organize a call with you and a doctor.`,
    isActive: false,
    sectionId: 3,
  },
  {
    id: "614c696dde571bac9a47d219",
    title: "pass Health and safety training",
    text: `Without the health and safety training you can not perform work`,
    isActive: false,
    sectionId: 4,
  },
  {
    id: "614c696decec81e126afcf51",
    title: "attend online onboarding calls according to the schedule",
    text: ``,
    isActive: false,
    sectionId: 4,
  },
  {
    id: "614c696d8c9de4e8fa7ca7ab",
    title: `Open your bank account in PLN and provide the account details to <a href="mailto:hr_pl@epam.com">hr_pl@epam.com</a>`,
    text: `Opening account takes minutes, but the card may be delivered in 2-3 weeks. If you don't know the address where you will be staying in 2-3 weeks - you can specify Epam PL office reception in your city.

    Bank Santander Polska - needs just passport and UoP, opening an account takes like 10-15 mins
    
    PKO Bank - is ok with contract only
    
    Millenium Bank - needs just passport and contract ING Bank - requires PESEL mostly, some of the branches are ok with just a contract but take like 3 days to make a decision`,
    isActive: false,
    sectionId: 5,
  },
  {
    id: "614c696deae052eb7443c484",
    title: `Finish assignments on: <a href="https://onboarding.epam.com">https://onboarding.epam.com</a> <a href="https://upsa.epam.com/">https://upsa.epam.com/</a> and request English assessment `,
    text: ``,
    isActive: false,
    sectionId:6,
  },
  {
    id: "614c696dd51fe92b703c1030",
    title: "Make Meldunek and PESEL and provide details to your GM specialist and HR",
    text: `After you have a long-term rental apartment, you can apply for PESEL (personal identification number in Poland) and Meldowanie (registration of the address of living)

    You need to prepare:
    
    The first page of your passport (page with photo) – original
    
    Visa OR Residence Permit decision OR Residence Card – original
    
    Apartment rental agreement OR Act of ownership – original
    
    Address Registration form – filled in Polish, according to the SAMPLE_
    
    Address Registration form Confirmation of payment (17 zl)
    
    17zl is paid for the actual print out of the confirmation of the Meldowanie per person and is optional. PESEL and Meldowanie itself procedures are free of charge.
    
    If you have kids, it worth mentioning that Zaświadczenie o zameldowaniu (confirmation list) is required for kindergarten. In that case you don’t have to pay 17zl for your child, it will be for free.`,
    isActive: false,
    sectionId: 6,
  },
  {
    id: "614c696db275ad37e0368ef1",
    title: "Let HR team know about your education and work experience",
    text: `Scans of diplomas from the university

    Workbook`,
    isActive: false,
    sectionId: 6,
  },
  {
    id: "614c696d318d9fbf52c9dc01",
    title: `Find your tax office: <a href="https://bazy.hoga.pl/wyszukiwarka-urzedow-skarbowych/">https://bazy.hoga.pl/wyszukiwarka-urzedow-skarbowych/</a>`,
    text: ``,
    isActive: false,
    sectionId: 6,
  },
  {
    id: "614c696d89f4f2f0536d395f",
    title: "Provide expense report on relocation costs",
    text: ``,
    isActive: false,
    sectionId: 6,
  },
  {
    id: "614c696da6ac3cdeb548995d",
    title: "Apply for residence permit at the Immigration Office, have a stamp about application in your passport and send a scan to GM specialist",
    text: `The residence permit procedure for EPAMer is usually supported by the 3-rd party Immigration Vendor, starts right after the relocation, and takes 3–12 months from the day of submitting documents in the Immigration Office. Processing time can be extended at the discretion of the immigration authorities. The process of obtaining a residence permit for EPAMer's family members is usually also supported by the Immigration Vendor and runs in parallel with the EPAMer's process unless the family members relocate to Poland later.`,
    isActive: false,
    sectionId: 7,
  },
  {
    id: "614c696d60a70f778e4e9f32",
    title: "Provide Residence permit decision/residence card scans to GM specialist",
    text: `should be kept by HR/GM in case of Board Guard Control`,
    isActive: false,
    sectionId: 7,
  },
  {
    id: "614c696d36d2821b88cb0408",
    title: "Get vaccinated",
    text: ``,
    isActive: false,
    sectionId: 7,
  },
  {
    id: "614c696d96dca0fafc81cf7f",
    title: "Medicine",
    text: ``,
    isActive: false,
    sectionId: 7,
  },
  {
    id: "614c696d18a497070a8f6694",
    title: "Profil zaufany (optional)",
    text: ``,
    isActive: false,
    sectionId: 7,
  },
  {
    id: "614c696db0cd140a254fbbde",
    title: "apply for residence permit ",
    text: ``,
    isActive: false,
    sectionId: 7,
  }
];

let currentSectionId = localStorage.getItem("currentSectionId") || 1;
let currentSectionActiveItemsCount = 0;
let currentAllSectionItemsCount = 0;

let currentSectionItemsCountElem = document.getElementById(
  "currentSectionItemsElem"
);
let currentAllSectionItemsCountElem = document.getElementById(
  "currentAllSectionItems"
);
const sectionsElem = document.querySelectorAll(".checklist__items");
const sectionsElemDot = document.querySelectorAll(".dot");

const setDefaultActiveDot = (sectionId) => {
  for (let i = 0; i < sectionsElemDot.length; i++) {
    sectionsElemDot[i].classList.remove("active");
    if (i === sectionId) {
      sectionsElemDot[i].classList.add("active");
    }
  }
};
setDefaultActiveDot(currentSectionId - 1);

const getCurrentSectionElem = (id) => {
  return document.getElementById(id.toString());
};

const generateChecklistItem = (item, sectionId) => {
  const currentSectionElem = getCurrentSectionElem(sectionId);
  if (item.isActive) {
    currentSectionActiveItemsCount++;
    currentSectionItemsCountElem.innerHTML = currentSectionActiveItemsCount;
    currentSectionElem.innerHTML += `
    <div class="check__item" id=${item.id}>
    <div class="check__item_doneButton">
    <img alt="doneIcon" src="https://res.cloudinary.com/ds8hydjea/image/upload/v1632409397/kb/doneButton_ybxyhd.svg" class="check__item_doneButton"/>
    </div>
      <div class="check__text">
        <h3>${item.title}</h3>
          <p>${item.text}</p>
      </div>
    </div>
  `
  } else {
    currentSectionElem.innerHTML += `
    <div class="check__item" id=${item.id}>
      <button class="check__item_button"></button>
      <div class="check__text">
        <h3>${item.title}</h3>
          <p>${item.text}</p>
      </div>
    </div>
  `
  }
};

const setCheckListItems = (id) => {
  currentChecklistItems.forEach((item) => {
    if (item.sectionId === Number(id)) {
      generateChecklistItem(item, id);
      currentAllSectionItemsCount++;
    }
  });
  currentAllSectionItemsCountElem.innerHTML = currentAllSectionItemsCount;
};
setCheckListItems(currentSectionId);

const removeContentSection = (sectionId) => {
  const currentSectionElem = getCurrentSectionElem(sectionId);
  currentSectionElem.innerHTML = "";
  currentAllSectionItemsCount = 0;
};

const setCurrentActiveItems = (sectionId) => {
  currentChecklistItems.forEach((item) => {
    if (item.sectionId === sectionId && item.isActive) {
      currentSectionActiveItemsCount++;
    }
  });
  currentSectionItemsCountElem.innerHTML = currentSectionActiveItemsCount;
};

const setActiveSection = (event) => {
  for (elem of sectionsElemDot) {
    elem.classList.remove("active");
  }
  event.target.classList.add("active");

  removeContentSection(currentSectionId);

  currentSectionId = event.target.id / 10;
  localStorage.setItem("currentSectionId", currentSectionId);

  setCheckListItems(currentSectionId);
  addEventListenerAllItems();

  currentSectionActiveItemsCount = 0;
  setCurrentActiveItems(currentSectionId);
};

sectionsElemDot.forEach((elem) => {
  elem.addEventListener("click", (e) => setActiveSection(e));
});

const setCurrentDoneElems = (condition) => {
  if (condition) {
    currentSectionActiveItemsCount++;
    currentSectionItemsCountElem.innerHTML = currentSectionActiveItemsCount;
  } else {
    currentSectionActiveItemsCount--;
    currentSectionItemsCountElem.innerHTML = currentSectionActiveItemsCount;
  }
};

const setIsActive = (event) => {
  const id = event.target.parentNode.id;
  const item = currentChecklistItems.find((item) => item.id == id);

  if (item.isActive) {
    item.isActive = false;
    localStorage.setItem(
      "currentChecklistItems",
      JSON.stringify(currentChecklistItems)
    );
    setCurrentDoneElems(false);
    event.target.parentNode.innerHTML = `
    <button class="check__item_button"></button>
    <div class="check__text">
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>
    `;
  } else {
    item.isActive = true;
    localStorage.setItem(
      "currentChecklistItems",
      JSON.stringify(currentChecklistItems)
    );
    setCurrentDoneElems(true);
    event.target.parentNode.innerHTML = `
    <img alt="doneIcon" src="https://res.cloudinary.com/ds8hydjea/image/upload/v1632409397/kb/doneButton_ybxyhd.svg" class="check__item_doneButton"/>
    <div class="check__text">
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>
    `;
  }
};

const addEventListenerAllItems = () => {
  const allItems = document.getElementsByClassName("check__item");

  for (item of allItems) {
    item.addEventListener("click", (e) => setIsActive(e));
  }
};
addEventListenerAllItems();