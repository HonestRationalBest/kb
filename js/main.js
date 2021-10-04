const currentChecklistItems = JSON.parse(
  localStorage.getItem("currentChecklistItems")
) || [
  {
    id: "614c696dbb9f687f6436f574",
    title: "Start learning at least the basics of Polish.",
    text: "Else, you are very likely to encounter problems when renting a flat, visiting a doctor, making any calls for appointments, etc. Shopping is no problem with English.  ",
    isActive: false,
    sectionId: 1,
    category: 1,
  },
  {
    id: "614c696d06ed5696068d7bac",
    title: "Learn Basic information about relocation and life in Poland. ",
    text: `Resources to study:<br/>
      <ul>
        <li>link to new KB space (launch on Sept, 20)</li>
        <li>Internal Mobility process <a href="https://kb.epam.com/display/EPMGIM/Materials+for+Employees">Materials for Employees</a></li>
        <li><a href="https://kb.epam.com/display/EPMHRGM/Relocation+to+Poland">Relocation to Poland</a> process</li>
        <li>Poland <a href="https://kb.epam.com/display/EPMHRGM/Poland%3A+Settlement+Guide">Settlement guide</a></li>
        <li><a href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fteam%2F19%3Ae3530da41c154514afd849708c216bcf%40thread.tacv2%2Fconversations%3FgroupId%3D86dde2c7-8a43-4018-a49b-8d40f281f7c5%26tenantId%3Db41b72d0-4e9f-4c26-8a69-f949f367c91d&type=team&deeplinkId=96065411-9d27-43a2-91b4-f5c1cad1f099&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true">Relocation to Poland</a> Teams channel</li>
      </ul>
    `,
    isActive: false,
    sectionId: 1,
    category: 1,
  },
  {
    id: "614c696d4a344571a624f141",
    title: "Learn more about Polish taxation law  ",
    text: `Taxes in Poland are similar to a great extent to taxes across Europe, but usually they come as a surprise for people relocated from CIS countries who have never calculated them on their own and it was always responsibility of employer to pay all taxes. In order to plan your budget and expenses after relocation, make sure you understand the difference between GROSS and NET salary and taxation applied to some benefits (including relocation package). 
    It is highly recommended to study these resources: 
    <ul>
      <li>Basics of Polish immigration legislation - <a href="https://udsc.gov.pl/en/cudzoziemcy/obywatele-panstw-trzecich/pouczenie-dla-cudzoziemca-o-zasadach-postepowania-prawach-i-obowiazkach/">About the rights and obligations of foreigners in Polands</a></li>
      <li>Learn about peculiarities of taxation in Poland: <a href="https://kb.epam.com/display/EPMHRGM/Poland%3A+Tax+System"> Settlement guide: tax system</a></li>
      <li>Use<a href="https://www.money.pl/podatki/kalkulatory/plac/?rok_podatkowy=2020"> Tax calculator for 2020</a>and get general understanding of your NET salary</li>
      <li>Learn more about<a href="https://kb.epam.com/display/EPMPLHR/Taxed+benefits+in+payroll"> Benefits in kind</a>which are treated in Poland as your taxable income.</li>
      <li>Join <a href="https://community-z.com/communities/financial-literacy">Financial literacy community </a></li>
      <li>Join Relocation to Poland Teams channel and learn more about experience of previous generations of expats:<a href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fchannel%2F19%3A30695b4051c64d69b3004e545798b52d%40thread.tacv2%2FTaxes%2C%2520PIT%2520forms%3FgroupId%3D86dde2c7-8a43-4018-a49b-8d40f281f7c5%26tenantId%3Db41b72d0-4e9f-4c26-8a69-f949f367c91d&type=channel&deeplinkId=333ec5c4-4919-4087-80c6-36dd2bdef9a8&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true"> Taxes, PIT forms</a></li>
    </ul>`,
    isActive: false,
    sectionId: 1,
    category: 1,
  },
  {
    id: "614c696d87c3b27d33ab9083",
    title: "Learn the basics of Polish immigration legislation",
    text: `<a href="https://udsc.gov.pl/en/cudzoziemcy/obywatele-panstw-trzecich/pouczenie-dla-cudzoziemca-o-zasadach-postepowania-prawach-i-obowiazkach/">About the rights and obligations of foreigners in Poland</a><br/>
    <a href="https://udsc.gov.pl/en/cudzoziemcy/frequently-asked-questions/">Immigration FAQ</a><br/>
    <a href="https://udsc.gov.pl/en/cudzoziemcy/obywatele-panstw-trzecich/">Information for foreigners from outside the EU</a><br/>`,
    isActive: false,
    sectionId: 1,
    category: 1,
  },
  {
    id: "61489d46522e05721aa58e3e",
    title: "Check passport validity",
    text: `Check your and your family members passport expiry date. It is recommended that the passports should be valid for at least 2  years after relocation. If not, it’s better to have a new one issued. 
    N.B.: Belarusian citizens whose passport had been issued for 20 years: recommended to change your passport because passports in EU are valid for 10 years. If your passport is older, you might have issues travelling, especially in airports. `,
    isActive: false,
    sectionId: 1,
    category: 1,
  },
  {
    id: "614c696ddf54919e8cdc0561",
    title: "Check your driving license validity  ",
    text: `Later you’ll be able to exchange it for Polish driving license, but your current license has to be valid during the whole verification process which might take a few months. More information in <a href="https://kb.epam.com/display/EPMHRGM/Poland%3A+Owning+Car+in+Poland">Settlent Guide</a> and on <a href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fchannel%2F19%3Aee4d7e1273474bd4a65018b5210e5f85%40thread.tacv2%2FCars%2520%255BRU%255D%3FgroupId%3D86dde2c7-8a43-4018-a49b-8d40f281f7c5%26tenantId%3Db41b72d0-4e9f-4c26-8a69-f949f367c91d&type=channel&deeplinkId=e71f33ea-a471-47f0-a3bb-38e8a8f7651c&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true">Relocation to PL Teams Channel: Cars</a>`,
    isActive: false,
    sectionId: 1,
    category: 1,
  },
  {
    id: "614c696d8c52606406093316",
    title: "Make sure to visit a dentist and do a health check-up",
    text: "",
    isActive: false,
    sectionId: 1,
  },
  {
    id: "61489d46934d2231970bff38",
    title:
      "Talk to your RM, ask your RM to create IM request in UPSA, find job position in Poland and sign a job offer",
    text: ``,
    isActive: false,
    sectionId: 1,
    category: 2,
  },
  {
    id: "614c696d26a410f70e646b8a",
    title: "Collect all the necessary documents",
    text: `<ol>
    <li>passport (not older than 2 years - recommended)  </li>
    <li>Diplomas with supplements </li>
    <li>Reference letters/workbook  </li>
    <li>Birth certificates - for all family members & for yourself (old USSR birth certificates are OK) </li>
    <li>Marriage certificate - for spouse (if you relocate to Gdańsk there is a need to obtain a non-laminated duplicate of the marriage certificate because the original will be imposed by Polish authorities)  </li>
    <li>Divorce certificates (if you have any, especially if your last name has been changed) - optional  </li>
    <li>Certificate of Name Change (if you have any) - optional </li>
    <li>Vaccination Certificate for kids (optional but highly recommended)  </li>
    <li>All the necessary documents if you are relocating with a handicapped child  </li>
    <li>School certificate  </li>
    <li>Work permit (if applicable) </li>
    </ol>`,
    isActive: false,
    sectionId: 1,
    category: 2,
  },
  {
    id: "614c696db91ccf2e8b3303e7",
    title: "Translation of documents and apostil",
    text: `It's better to do the notary translations in Poland, some of them will be done by EPAM within the immigration process. Apostil is not required.`,
    isActive: false,
    sectionId: 1,
    category: 2,
  },
  {
    id: "614c696db91ccf2e8b3303e6",
    title: "Obtain a Visa and ask GM team for verification",
    text: `GM team will contact you directly after you've signed your Job Offer with instructions on how to obtain a visa and will guide you through the whole relocation process`,
    isActive: false,
    sectionId: 1,
    category: 3,
  },
  {
    id: "614c696db91ccf2e8b3303e4",
    title:
      "if you are going to cross BY land border, request a PL-RU working contract",
    text: `Print out Umowa o Prace (working contract) document and have it with you in hard copy  `,
    isActive: false,
    sectionId: 1,
    category: 3,
  },
  {
    id: "614c696db91ccf2e8b3303e2",
    title: "find short term accommodation and organize your trip. ",
    text: `Remember that you won't be able to cross the border without confirmed address of your stay during the quarantine (if applicable).  

    EPAM support with accomodation depends on your relocation package: 
    Full package: GM team will propose the options of short term accommodation(up to 28days) and flight tickets unless you choose another means of transport(then you should organize it yourself) 
    Light package:  Since it is difficult to find a long-term apartment on your own remotely, it is recommended that you find a short term accommodation for the first 2-3 weeks in Poland ( on <a href="http://booking.com/">booking.com</a> or airbnb etc) You may look for a long-term accommodation upon your arrival. <br/>
    
    In both cases, check Wi-Fi availability in the apartment and note down the exact address including the postal code, etc. (it will be needed to submit the docs at passport control and for equipment delivery)  For anybody who is travelling from Belarus, due to the BY border restrictions in place, it is strongly recommended that spouses and children travel by plane. In this case, a valid Polish visa is enough for BY and PL border crossing. 
    
    More on: <a href="https://kb.epam.com/pages/viewpage.action?pageId=1209011826">Poland: Organization of Travel & Accommodation</a> `,
    isActive: false,
    sectionId: 1,
    category: 3,
  },
  {
    id: "614c696d973b1b506615e0e3",
    title: "Start preliminary search of long-term accommodation",
    text: `
    Describe your expectations for a long-term apartment in e-mail and contact the recommended real estate agency or start contacting owners directly using:  

Facebook Marketplace 
<a href="https://www.otodom.pl/">https://www.otodom.pl/</a>  
<a href="https://www.gumtree.pl/">https://www.gumtree.pl/</a>  
<a href="https://t.me/rentapartaments_krk">https://t.me/rentapartaments_krk</a> (gumtree's thread in Telegram for Krakow)  
<a href="https://www.olx.pl/nieruchomosci/mieszkania/wynajem/">https://www.olx.pl/nieruchomosci/mieszkania/wynajem/</a>  
Gdansk and the whole trojmiasto: <a href="https://ogloszenia.trojmiasto.pl/nieruchomosci-mam-do-wynajecia/">https://ogloszenia.trojmiasto.pl/nieruchomosci-mam-do-wynajecia/</a>
More information here: <a href="https://kb.epam.com/display/EPMHRGM/Long-term+Accommodation">Long-term Accommodation</a>
`,
    isActive: false,
    sectionId: 3,
    category: 3,
  },
  {
    id: "614c696d973b1b50661570e3",
    title: "Return the equipment provided by EPAM in your previous location ",
    text: `You cannot be dismissed from your previous office without returning the equipment. If you have any difficulties with this, please contact IT department in your current working location.`,
    isActive: false,
    sectionId: 3,
    category: 4,
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
    
    Key word for Google search is “Wyprowadzenie psa”.
    There is a group on Facebook which supports walking the dog on quarantine (Pies w Koronie), paid offers for walking a dog can be found there.  
     
    
    If you stay in a hotel or aparthotel, you can check at the reception if a concierge service is available. If yes – you can ask them if they can walk your dog on your own expense. You can also walk your dog on a terrace (usually flats on the ground floor have terraces called in Polish “ogródek”). You can also search for volunteers who can walk your dog using local social network groups.
    
    Also check out the telegram chat or <a href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fchannel%2F19%3A94cdda0c265f4861b32f592ab92b4de9%40thread.tacv2%2FPets%3FgroupId%3D86dde2c7-8a43-4018-a49b-8d40f281f7c5%26tenantId%3Db41b72d0-4e9f-4c26-8a69-f949f367c91d&type=channel&deeplinkId=2836bf4a-5939-438d-96ea-15e93f232447&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true">Relocation to PL Teams Channel</a> on traveling with pets - there might be volunteers in your city. 
    More information on <a href="https://kb.epam.com/display/EPMHRGM/Poland%3A+Pets">Settlement guide: Pets</a> `,
    isActive: false,
    sectionId: 1,
    category: 4
  },
  {
    id: "614c696d785fcb008a689611",
    title: "Register e-sim card (if your device supports it)",
    text: `
    Instruction:  
<ol>
<li>Use VPN like <a href="https://www.tunnelbear.com">https://www.tunnelbear.com</a> (other secure VPN can be used: Cisco AnyConnect, NordVPN, OpenVPN) (have 1GB free/month for free account) on your Android / iOS device and select Poland as destination Install Orange Flex app <a href="https://flex.orange.pl/?ct=mgm&pt=orange&mt=LIZAVETA6LKG">https://flex.orange.pl/?ct=mgm&pt=orange&mt=LIZAVETA6LKG</a></li>
<li>Create New Account Select eSIM option or Physical SIM card with delivery to address You will need to take a picture of your passport + selfie (the same way like in car-sharing services) The app will take 5-10mins to confirm your ID  </li>
<li>After confirmation you will be able to select a Plan - like 30GB for 30PLN/month - and select a phone number from the randomized list Also enter the PROMO code FLEX3 - it will make the same plan available for 1PLN/month for the next 3 months   </li>
<li>Enter credit card info for the payment when requested by the app </li>
<li>Follow instructions for adding a eSIM into device settings </li>
<li>When in Poland, activate eSIM and enjoy the connection. The assigned phone number can be found in the Orange Flex app at Profile screen </li>
</ol>
`,
    isActive: false,
    sectionId: 1,
    category: 4
  },
  {
    id: "614c696d0fd9e7d24290d741",
    title: "Download Kwarantanna app (if applicable) and learn quarantine rules",
    text: `Quarantine is mandatory in Poland for all travelers outside of Schengen area (first country of departure is outside of Schengen area)
    See <a href="https://kb.epam.com/display/EPMHRGM/First+Steps+in+Poland#FirstStepsinPoland-TIPSONQUARANTINE">First Steps in Poland#TIPSONQUARANTINE </a>`,
    isActive: false,
    sectionId: 1,
    category: 4
  },
  {
    id: "614c696dbd199b4e51e55f65",
    title: "Download MAPS.me app for Poland for easy navigation.",
    text: `A good application for finding a nearest pharmacy, grocery store, gas station, shopping center, etc. 
    Make sure to download a map for Poland if you want it to work offline `,
    isActive: false,
    sectionId: 1,
    category: 4
  },
  {
    id: "614c696d1372c9247967cd8e",
    title:
      "Make sure you have saved necessary contact details ",
    text: `<ul>
    <li>Your RM
    </li>
    <li>Your mobility specialist</li>
    <li>Your embassy in Poland (If you have any issues related to passport being stolen or lost, legal issues, car accident, etc.)</li>
    </ul>`,
    isActive: false,
    sectionId: 1,
    category: 4
  },
  {
    id: "614c696dd31844d0e241a170",
    title: "Have some cash in PLN with you for emergency situations. ",
    text: "",
    isActive: false,
    sectionId: 1,
    category: 4
  },
  {
    id: "614c696d587deac1265e4fec",
    title:
      "Have important information backed up on your personal laptop",
    text: `not to have to use a mobile phone only for such personal purposes is a good point `,
    isActive: false,
    sectionId: 1,
    category: 4

  },
  {
    id: "614c696de320e0270774b6fe",
    title:
      "Have a taxi app installed for transfer from the airport",
    text: `Bolt/Uber. Make sure to activate by connecting your local card `,
    isActive: false,
    sectionId: 1,
    category: 4

  },
  {
    id: "614c696deadec4151c466fc3",
    title:
      "Buy and REGISTER a Polish SIM card (at the airport/Zabka shop/gas station)",
    text: `Buy a Polish SIM card and confirm during your purchase that the shop assistant has not just given you your SIM card package but has activated the card as well.
    Please insert and register the SIM card, then confirm it’s all working properly via text messages from the cell company and have a quick internet speed test.
    Activating the SIM Card before leaving the store or kiosk is much easier than trying to deal with non-activation later. Polish number is later needed for a remote medical check (call from a doctor). `,
    isActive: false,
    sectionId: 2,
  },
  {
    id: "614c696dc62f05c8377563df",
    title: "Buy food for your quarantine time",
    text: `Before quarantine starts you are allowed to do some shopping. You can go to local supermarkets (like Tesco, Auchan, Carrefour, Kaufland, Alma, Biedronka, Lidl etc.) where you can buy necessary goods. Please remember that shopping malls are closed ON SUNDAYS and Public Holidays, but small shops like Żabka.pl will be open.`,
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
    title: `Return one copy of signed onboarding documents to HR by a courier <a href="mailto:hr_pl@epam.com">hr_pl@epam.com</a>`,
    text: `You will not get the IT equipment and be considered as an EPAM Poland employee without signed and returned papers:
    <ol>
    <li>Employment contract</li>
    <li>Additional information to the contract</li>
    <li>Non disclosure agreement</li>
    <li>Personal questionnaire</li>
    <li>Health and Safety statement</li>
    <li>NJ Health Self Declaration</li>
    <li>Declaration of residence</li>
    <li>Bank authorization form (if you don't have bank account in Poland yet - you can deliver the form in one month since your start date)</li>
    <li>Acknowledgement of work regulations and privacy notice ZUS contributions statement</li>
    <li>Statement for the purpose of the use of parents rights and carers - if applicable</li>
    <li>ZUS family members registration - if applicable </li>
    <li>PIT 2 - if applicable </li>
    <li>Mutual taxation - if applicable </li>
    <li>Application for increased tax expenses - if applicable </li>
    <li>Resignation from tax relief - if applicable </li>
    <li>Application for higher tax rate - if applicable</li>
    </ol>
    Use <a href="https://epam-my.sharepoint.com/:p:/p/yana_melko/EYV9Iif-8PBNsF9xRanTB1EB060cUeCClqFICLg0yFLVNg?e=K2laqc">this instruction</a>to fill in the documents in Polish
    `,
    isActive: false,
    sectionId: 3,
  },
  {
    id: "614c696d63e8f60e7e8f3083",
    title: "Pass the remote medical check (a call from a doctor in English)",
    text: `HR Team will organize a call with you and a doctor. You cannot perform work without the required medical check. The doctor will ask a few questions about your current condition, chronicle illnesses if any to confirm that you may perform your duties. Later it will be required to go to the medical check at the doctor physically. HR will inform you about the date and time of this visit.
    `,
    isActive: false,
    sectionId: 3,
  },  
  {
    id: "614c696dde571bac9a47d219",
    title: "Pass Health and safety training",
    text: `Without the health and safety training you can not perform work`,
    isActive: false,
    sectionId: 4,
  },
  {
    id: "614c696decec81e126afcf51",
    title: "Contact your RM in Poland",
    text: ``,
    isActive: false,
    sectionId: 4,
  },
  {
    id: "614c696decec81e126afcf1",
    title: "Attend online onboarding calls according to the schedule",
    text: ``,
    isActive: false,
    sectionId: 4,
  },
  {
    id: "614c696d8c9de4e8fa7ca7ab",
    title: `Open your bank account in PLN and provide the account details to <a href="mailto:hr_pl@epam.com">hr_pl@epam.com</a>`,
    text: `Opening account takes minutes, but the card may be delivered in 2-3 weeks. If you don't know the address where you will be staying in 2-3 weeks - you can specify Epam PL office reception in your city.
    <ul>
    <li>Bank Santander Polska - needs just a passport and employment contract, opening an account takes 10-15 min</li>
    <li>PKO Bank - is ok with contract only</li>
    <li>Millenium Bank - needs just a passport and contract</li>
    <li>ING Bank - requires PESEL mostly(which you don't have yet), some of the branches are ok with just a contract but take about 3 days to make a decision.</li>
    </ul>  
    These requirements may change with time, so please check them in advance or ask the advice of your colleagues on <a href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fchannel%2F19%3A424fc7dea2e34db5b9f40b2bcc5e3643%40thread.tacv2%2FBanks%2520and%2520Money%2520transfers%3FgroupId%3D86dde2c7-8a43-4018-a49b-8d40f281f7c5%26tenantId%3Db41b72d0-4e9f-4c26-8a69-f949f367c91d&type=channel&deeplinkId=46d6ce27-8e12-4919-88d8-85be2d4f8476&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true">Relocation to PL Teams Chat: Banks and Money Transfer</a>
    `,
    isActive: false,
    sectionId: 5,
  },
  {
    id: "614c696deae052eb7443c484",
    title: `Finish assignments on: <a href="https://onboarding.epam.com">https://onboarding.epam.com</a> <a href="https://upsa.epam.com/">https://upsa.epam.com/</a> and request English assessment `,
    text: ``,
    isActive: false,
    sectionId: 6,
  },
  {
    id: "614c696dd51fe92b703c1030",
    title:
      "Get Zameldowanie(Meldunek) and a PESEL, provide details to your GM specialist and HR",
    text: `After you have a long-term rental apartment, you can apply for PESEL (personal identification number in Poland) and Meldowanie (registration of the address of living)

    You need to prepare:
    
    The first page of your passport (page with photo) – original
    
    Visa OR Residence Permit decision OR Residence Card – original
    
    Apartment rental agreement OR Act of ownership – original
    
    Address Registration form – filled in Polish, according to the SAMPLE_
    
    Address Registration form Confirmation of payment (17 zl)
    
    17zl is paid for the actual print out of the confirmation of the Meldowanie per person and is optional. PESEL and Meldowanie itself procedures are free of charge.
    
    If you have kids, it worth mentioning that Zaświadczenie o zameldowaniu (confirmation list) is required for kindergarten. In that case you don’t have to pay 17zl for your child, it will be for free.
    
    More information: <a href="https://kb.epam.com/display/EPMHRGM/Poland%3A+Address+Registration+and+PESEL+number">Poland: Address Registration and PESEL number</a>
Related discussions: <a href="https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fchannel%2F19%3Ae824c8fe464244148f959e91464a1b7f%40thread.tacv2%2FZameldowanie%2C%2520PESEL%2C%2520Karta%2520Pobytu%2C%2520Blue%2520Card%3FgroupId%3D86dde2c7-8a43-4018-a49b-8d40f281f7c5%26tenantId%3Db41b72d0-4e9f-4c26-8a69-f949f367c91d&type=channel&deeplinkId=bbdb5a18-8f19-4e89-a690-9f2a2ee08092&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true">Relocation to PL Teams Chat: Zameldowanie, PESEL</a>
    `,
    isActive: false,
    sectionId: 6,
  },
  {
    id: "614c696db275ad37e0368ef1",
    title: "Let HR team know about your education and work experience",
    text: `Depending on your experience, you are entitled to 20 or 26 vacation days. Provide scans of diplomas from the university and a workbook to extend your vacations.
    20 days - if the employee has been working for less than 10 years
    26 days - if the employee has been working for at least 10 years
    Vacation policy in Poland`,
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
    text: `The process is described here: <a href="https://kb.epam.com/display/EPMHRGM/Poland%3A+Expense+reporting">Poland: Expense reporting</a>`,
    isActive: false,
    sectionId: 6,
  },
  {
    id: "614c696da6ac3cdeb548995d",
    title:
      "Apply for residence permit at the Immigration Office, have a stamp about application in your passport and send a scan to GM specialist",
    text: `The residence permit procedure for EPAMer is usually supported by the 3-rd party Immigration Vendor, starts right after the relocation, and takes 3–12 months from the day of submitting documents in the Immigration Office. Processing time can be extended at the discretion of the immigration authorities. The process of obtaining a residence permit for EPAMer's family members is usually also supported by the Immigration Vendor and runs in parallel with the EPAMer's process unless the family members relocate to Poland later.
    <a href="https://kb.epam.com/display/EPMHRGM/Poland%3A+Application+for+Residence+Permit">Poland: Application for Residence Permit</a> `,
    isActive: false,
    sectionId: 7,
  },
  {
    id: "614c696d60a70f778e4e9f32",
    title:
      "Provide Residence permit decision/residence card scans to GM specialist",
    text: `should be kept by HR/GM in case of Board Guard Control`,
    isActive: false,
    sectionId: 7,
  },
  {
    id: "614c696d36d2821b88cb0408",
    title: "Get vaccinated",
    text: `Info on where to get vaccinated in different cities of Poland can be found <a href="https://kb.epam.com/display/EPMGIM/Vaccination">here</a>`,
    isActive: false,
    sectionId: 7,
  },
  {
    id: "614c696d96dca0fafc81cf7f",
    title: "Choose a vendor and package for private medical insurance",
    text: `In most of cases insurers have English speaking professionals and in some cases even Russian speaking, so it's worth to check upfront. EPAM is working with Luxmed and Medicover companies which one can pay from MultiCafeteria 404 bonus. Please consult with HRs on details and read these pages to choose the package: <a href="https://kb.epam.com/display/EPMPLHR/LUXMED">Luxmed</a>, <a href="https://kb.epam.com/display/EPMPLHR/MEDICOVER">Medicover</a>.  
    `,
    isActive: false,
    sectionId: 7,
  },
  {
    id: "614c696d18a497070a8f6694",
    title: "Profil zaufany (optional)",
    text: `Info on step-by-step guide on how to create profil zaufany can be found here
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


    This checklist has been created in collaboration with different departments and generations of expats at EPAM Poland to ease your relocation and adaptation.
    If you want to contribute or report a mistake, please contact <a href="mailto:SharedEPAMRelocationBuddyAdmin@epam.com">SharedEPAMRelocationBuddyAdmin@epam.com</a> or <a href="mailto:Yana_Melko@epam.com">Yana_Melko@epam.com</a> `,
    isActive: false,
    sectionId: 7,
  },

];

let currentSectionId = localStorage.getItem("currentSectionId") || 1;
let category = localStorage.getItem("category") || 1;
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
const categories = document.querySelectorAll(".steps__item");
const categoriesDisplay = document.querySelector(".steps");
const categoryElem = document.querySelectorAll(".steps__item");
const hrDots = document.querySelectorAll(".dot_progress");

const setDefaultActiveDot = (sectionId) => {
  for (let i = 0; i < sectionId ; i++) {
    sectionsElemDot[i].classList.add("done");
    hrDots[i].classList.add("done");
  }
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
  let currentSectionElem = getCurrentSectionElem(sectionId);
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
  `;
  } else {
    currentSectionElem.innerHTML += `
    <div class="check__item" id=${item.id}>
    <div class="check__item_doneButton">
      <button class="check__item_button"></button>
      </div>
      <div class="check__text">
        <h3>${item.title}</h3>
          <p>${item.text}</p>
      </div>
    </div>
  `;
  }
};

const setCheckListItems = (id, category) => {
  currentChecklistItems.forEach((item) => {
    if (id === 1) {
      if (item.category === Number(category)) {
        generateChecklistItem(item, id);
        currentAllSectionItemsCount++;
      }
    } else if (item.sectionId === Number(id) && id !== 1) {
      generateChecklistItem(item, id);
      currentAllSectionItemsCount++;
    }
  });
  currentAllSectionItemsCountElem.innerHTML = currentAllSectionItemsCount;
};
setCheckListItems(Number(currentSectionId), 1);

const removeContentSection = (sectionId) => {
  const currentSectionElem = getCurrentSectionElem(sectionId);
  currentSectionElem.innerHTML = "";
  currentAllSectionItemsCount = 0;
};

const setCurrentActiveItems = (sectionId, category) => {
  currentChecklistItems.forEach((item) => {
    if (sectionId === 1 && item.category === category && item.isActive) {
      currentSectionActiveItemsCount++;
    } else if (
      sectionId !== 1 &&
      item.sectionId === sectionId &&
      item.isActive
    ) {
      currentSectionActiveItemsCount++;
    }
  });
  currentSectionItemsCountElem.innerHTML = currentSectionActiveItemsCount;
};

const setIsVisibleCategory = (condition) => {
  if (condition) {
    categoriesDisplay.classList.add("active");
  } else {
    categoriesDisplay.classList.remove("active");
  }
};
setIsVisibleCategory(Number(currentSectionId) === 1);

const setActiveSection = (event) => {
  const id = event.currentTarget.id / 10;

  for (let i = 0; i < sectionsElemDot.length; i++) {
    sectionsElemDot[i].classList.remove("done");
    sectionsElemDot[i].classList.remove("active");
  }
  for (let i = 0; i < hrDots.length; i++) {
    hrDots[i].classList.remove("done");
  }

  for (let i = 0; i < id - 1; i++) {
    sectionsElemDot[i].classList.add("done");
    hrDots[i].classList.add("done");
  }
  event.target.classList.add("active");

  removeContentSection(currentSectionId);

  currentSectionId = event.target.id / 10;
  localStorage.setItem("currentSectionId", currentSectionId);

  setIsVisibleCategory(currentSectionId === 1);

  setCheckListItems(currentSectionId, category);
  addEventListenerAllItems();

  currentSectionActiveItemsCount = 0;
  if (currentSectionId === 1) {
    setCurrentActiveItems(currentSectionId, category);
  } else {
    setCurrentActiveItems(currentSectionId, 0);
  }
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
  const id = event.target.parentNode.parentNode.id;
  const item = currentChecklistItems.find((item) => item.id === id);

  if (item.isActive) {
    item.isActive = false;
    localStorage.setItem(
      "currentChecklistItems",
      JSON.stringify(currentChecklistItems)
    );
    setCurrentDoneElems(false);
    event.target.parentNode.parentNode.innerHTML = `
    <div class="check__item" id=${item.id}>
      <button class="check__item_button"></button>
      <div class="check__text">
        <h3>${item.title}</h3>
          <p>${item.text}</p>
      </div>
    </div>
    `;
  } else {
    item.isActive = true;
    localStorage.setItem(
      "currentChecklistItems",
      JSON.stringify(currentChecklistItems)
    );
    setCurrentDoneElems(true);
    event.target.parentNode.parentNode.innerHTML = `
    <div class="check__item" id=${item.id}>
    <div class="check__item_doneButton">
    <img alt="doneIcon" src="https://res.cloudinary.com/ds8hydjea/image/upload/v1632409397/kb/doneButton_ybxyhd.svg" class="check__item_doneButton"/>
    </div>
      <div class="check__text">
        <h3>${item.title}</h3>
          <p>${item.text}</p>
      </div>
    </div>
    `;
  }
};

const setActiveCategory = (event) => {
  for (elem of categories) {
    elem.classList.remove("active");
  }
  event.currentTarget.classList.add("active");

  removeContentSection(currentSectionId);

  category = event.currentTarget.id / 100;
  localStorage.setItem("category", category);

  setCheckListItems(Number(currentSectionId), Number(category));
  addEventListenerAllItems();
  currentSectionActiveItemsCount = 0;

  setCurrentActiveItems(Number(currentSectionId), Number(category));
};

const addEventListenerAllItems = () => {
  const allItems = document.getElementsByClassName("check__item");

  for (item of allItems) {
    item.addEventListener("click", (e) => setIsActive(e));
  }
};
addEventListenerAllItems();

const addEventListenerCategory = () => {
  for (item of categories) {
    item.addEventListener("click", (e) => setActiveCategory(e));
  }
};
addEventListenerCategory();
