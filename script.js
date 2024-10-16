document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu Toggle
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  navToggle.addEventListener('click', function () {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll'); // Add or remove no-scroll class
  });

  // Close the menu when clicking outside
  document.addEventListener('click', function (event) {
    if (!mobileMenu.contains(event.target) && !navToggle.contains(event.target)) {
      mobileMenu.classList.add('hidden');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll'); // Remove no-scroll when closing menu
    }
  });

  //hero section 
  const heroSection = document.querySelector('.hero-section');
const imagePaths = [
    'images/banner/ban1.jpg',
    'images/banner/ban2.jpg',
    'images/banner/ban3.jpg',
    'images/banner/ban4.jpg',
    'images/banner/ban5.jpg',
    'images/banner/ban6.jpg',
    'images/banner/ban7.jpg',
    'images/banner/ban8.jpg',
    'images/banner/ban9.jpg',
    'images/banner/ban10.jpg'
];

// Preload images
function preloadImage(src) {
    const img = new Image();
    img.src = src;

}

// Preload the first image
preloadImage(imagePaths[0]);

let currentIndex = 0;

function changeBackgroundImage() {
    heroSection.style.backgroundImage = `url('${imagePaths[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % imagePaths.length; // Loop back to the first image
}

// Change image every 4 seconds
setInterval(changeBackgroundImage, 4000);

// // Donation Button
// const donationButton = document.querySelector('.donation-button');
// donationButton.addEventListener('click', function (event) {
//     event.preventDefault();
//     window.open('https://docs.google.com/forms/d/e1FAIpQLSfmQHHjx6Icw0Qja1aa4zBmD9UIYDTmEm9H0cYzBz6VFkFnRA/viewform?usp=sf_link', '_blank'); 
// });


  // Email Button
  const emailbutton = document.querySelector('.email-button');
emailbutton.addEventListener('click', function (event) {

    console.log("email section")

    var recipients = "officeofmr@gov.in,av.odisha@sansad.nic.in,ashwini.vaishnav@gmail.com,osdmr@rb.railnet.gov.in,edpgmr@rb.railnet.gov.in,mr@rb.railnet.gov.in";
    var cc = " office.mosrs@gov.in,aneesh.hegde@gov.in,mosr@rb.railnet.gov.in,crb@rb.railnet.gov.in,sanjay.sehgal@gov.in,edcc@rb.railnet.gov.in,edpsu@rb.railnet.gov.in,dpsu@rb.railnet.gov.in,chiefminister@maharashtra.gov.in,CM@maharashtra.gov.in,dcm@maharashtra.gov.in,sunil.tatkare55@sansad.nic.in,sunilrane2013@gmail.com,narayan.rane@gov.in,narayan.rane@sansad.nic.in,narayanrane52@gmail.com,shripad.naik52@gov.in,shripad.naik@sansad.nic.in,shrinivaspoojari53@gmail.com,captain.brijesh@sansad.nic.in,aniket.tat@gmail.com,manishakayande@rediffmaill.com,neeilamgorhe@gmail.com,asmita.jagruti@gmail.com,uddhavthackeray@gmail.com,anildattatray@gmail.com,vilaspotnis99@gmail.com,misunilshinde@gmail.com,BHAIGIRKAR16@gmail.com,niranjandavkhare@gmail.com,pydmlaoffice@gmail.com,kolimahasangh@yahoo.com,dnyaneshwar.mhatre68@gmail.com,kapilpatil@gmail.com,jayantpwp@gmail.com,Yogesh_kadam1986@outlook.com,mlamaheshchoughule@gmail.com,bjpofficemalad@yahoo.com,speakerrsn1@gmail.com,ravishethpatil158@gmail.com,officeofmlaatul@gmail.com,mandataimhatre@gmail.com,nnr23682@gmail.com,bharatilavekar@gmail.com,parag@maninfra.com,ashish.shelar@yahoo.com,ameetsatam@yahoo.com,captainr.tamilselvan@gmail.com,jsa707@gmail.com,sbhusara41@gmail.com,nawabmalikmla@gmail.com,gaikwad.varsha3@gmail.com,aminpatel186@gmail.com,abuasimazmi@hotmail.com,raissp132@gmail.com,mla@rajupatilmns.com,geetajainoffice@gmail.com,secy1-mls@mah.gov.in,shekhargnikam@gmail.com,sandipanbhumare@gmail.com,sandipanbhumare.mp@sansad.nic.in,sc.barne@sansad.nic.in,appabarne@gmail.com,nageshpatil4545@gmail.com,patil.nagesh@sansad.nic.in,udayanrajebhonsle@gmail.com,udayanraje.bhonsle@sansad.nic.in,shahuchhatrapatikop@gmail.com,shahu.chhatrapatikol@sansad.nic.in,anil.desai@sansad.nic.in,nitin.gadkari@nic.in,piyush.goyal@gov.in,prataprao.jadhav@sansad.nic.in,jadhavprataprao25@gmail.com,nr.khadase@sansad.nic.in,rakshataikhadse@gmail.com,dramolkolhe80@gmail.com,amol.kolhe@sansad.nic.in,sureshmhatre1701@gmail.com,murlidhar.mohol@gmail.com,sanjaydinapatil@gmail.com,narayan.rane@sansad.nic.in,hemantsavara@yahoo.co.in,arvind.sawant@sansad.nic.in,officeofdrshrikantshinde.delhi@gmail.com,supriyassule@gmail.com,smita.udaywagh@sansad.nic.in,waikarravindra@gmail.com,dranil.bonde@sansad.nic.in,priyanka.c19@sansad.nic.in,ashokchavan.009@sansad.nic.in,mpmilind.deora@sansad.nic.in,cdhandore.mp@sansad.nic.in,bhagwat.karad@sansad.nic.in,mp.medha@sansad.nic.in,dhananjaymahadik.mp@sansad.nic.in,praful@sansad.nic.in,dhairyashil.mprs@sansad.nic.in,pawars@sansad.nic.in,s.raut@sansad.nic.in , chai2kul@gmail.com, ​gm@cr.railnet.gov.in,agm@cr.railnet.gov.in,sdgm@cr.railnet.gov.in,​drm@bb.railnet.gov.in,gm@swr.railnet.gov.in,cpro@swr.railnet.gov.in,drm@ubl.railnet.gov.in,drm@sbc.railnet.gov.in,drm@mys.railnet.gov.in,drm@bsl.railnet.gov.in,drm@ngp.railnet.gov.in,drm@sur.railnet.gov.in,​drm@pa.railnet.gov.in,ecgm@cr.railnet.gov.in,dgm@cr.railnet.gov.in,secygm@swr.railnet.gov.in,dgm@swr.railnet.gov.in,";
    var bcc = "akhandkokanpravasiseva@gmail.com , swaditerminus@gmail.com ";
    var subjects = [
        "Urgent Call for the Merger of Konkan Railway with Central and South Western Railways",
        "Proposal to Merge Konkan Railway into Indian Railways by Unifying Central and South Western Zones",
        "Combining Konkan Railway with Central and South Western Railway Zones to Boost Efficiency",
        "Plea for the Integration of Konkan Railway with Central Railway and South Western Railway",
        "Strategic Integration of Konkan Railway with Central and South Western Railways to Improve Passenger Services",
        "Proposal for the Prompt Merger of Konkan Railway with Central and South Western Railways",
        "Request to Merge Konkan Railway into Central and South Western Railways for Enhanced Operations and Financial Gains",
        "Urgent Plea for the Merger of Konkan Railway with Central and South Western Railway Zones",
        "Integration of Konkan Railway’s Roha-Madure Stretch with Central Railway and Karwar with South Western Railway",
        "Appeal for the Strategic Merger of Konkan Railway into Indian Railways to Optimize Operations",
        "Merging Konkan Railway with Indian Railways: A Move Toward Financial and Operational Stability",
        "Advocating for the Merger of Konkan Railway with Indian Railways for Long-Term Passenger and Infrastructure Gains"
    ];
    
    var subject = subjects[Math.floor(Math.random() * subjects.length)];
    
    var body = `To,
Hon. Shri Ashwini Vaishnav ji,
Cabinet Minister,Railways
Government of India.
                
Hon. Shri. V. Somanna ji
MoS, Railways,
Government of India.

Hon. Shri Ravneet Singh Bittu ji.
MoS, Railways,
Government of India.

Subject: Merger of Konkan Railway in Indian Railways by integrating Ratnagiri Region (Kolad to Madure) with Central Railway and Karwar Region with South Western Railway

Respected Sir,

Konkan Railway Corporation Limited (KRCL) was established in 1990 on a Build-Operate-Transfer (BOT) basis, primarily to complete the railway line from Roha to Thokur (Mangaluru). While Indian Railways holds a 51% stake, state contributions include Maharashtra (22%), Karnataka (15%), Goa (6%), and Kerala (6%). Initially, KRCL was to merge with Indian Railways after 15 years, but in 2008, the government opted for KRCL's independence, limiting its capacity to enhance infrastructure.

As of May 29, 2024, KRCL is grappling with substantial financial difficulties, with total liabilities amounting to ₹7,337 crore, including a ₹1,500 crore bond that is due soon. Delays in funding from the ministry of railways and state governments have forced KRCL to rely on loans, hindering development efforts. The proposal for patch doubling of a 141 km route was abandoned due to a lack of allocated funds from state governments. Both the Union Ministry and the Finance Ministry also declined to finance the project since the state governments did not participate. This situation is a rare instance in the country where a railway doubling project has been dropped due to insufficient funding from state governments, largely thanks to the PSU status of Konkan Railway. Konkan Railway remains excluded from key projects, such as the Amrit Bharat Station Scheme. Also, it is not listed under High Density Network (HDN) or Highly Utilized Network (HUN) despite high passenger traffic. To address these challenges, we propose merging Konkan Railway with Indian Railways, absorbing its debts. We propose the following options for the merger in view of better passenger services.

Option 1 (Integration of Roha - Madure section with Central Railway and the rest with South Western Railway): Establishing a new railway zone involves significant costs, including land acquisition, the creation of new positions, and increased administrative expenses. Therefore, it is more beneficial to integrate the Konkan Railway route into the existing railway zones. To improve operational efficiency, we propose transferring the Roha to Madure section in Maharashtra to Central Railway, while the section in Karnataka should be assigned to South Western Railway. Central Railway primarily manages most of Maharashtra, and South Western Railway covers most of Karnataka, making this arrangement logical.

Option 2 (Handover the operations of Roha - Madure section to Central Railway, rest with South Western Railway and KRCL to continue as a construction authority PSU): Should the existence of Konkan Railway be deemed necessary, it should be designated to focus on construction work and then transfer it to the relevant railway zones as done in the case of Udhampur-Srinagar-Baramulla Rail Link (USBRL) project in Jammu and Kashmir where Konkan Railway has constructed the line and handed it over to Northern Railway.

Passengers are the ultimate stakeholders of the railways, and we urge that our voices be prioritized in any decisions regarding the merger. We call upon Hon. Prime Minister Shri Narendra Modi, Hon. Railway Minister Shri Ashwini Vaishnav, Hon. Finance Minister Smt. Nirmala Sitharaman, Hon. Chief Minister of Maharashtra Shri Eknath Shinde, and other key leaders to expedite this historic merger. This is a significant opportunity for our leaders to leave a lasting legacy.

Copy To:
Hon. Shri. Eknath Shinde, Chief Minister, Maharashtra
Hon. Shri. Devendra Fadnavis, Deputy Chief Minister, Maharashtra
Hon. Shri. Ajit Pawar, Deputy Chief Minister, Maharashtra
All concerned Members of Parliament
All concerned Members of Legislative Assembly and Council`;

    var emailLink = "mailto:" + encodeURIComponent(recipients) +
                    "?cc=" + encodeURIComponent(cc) +
                    "&bcc=" + encodeURIComponent(bcc) +
                    "&subject=" + encodeURIComponent(subject) +
                    "&body=" + encodeURIComponent(body);

    // Create temporary anchor element
    var tempLink = document.createElement('a');
    tempLink.setAttribute('href', emailLink);

    // Append anchor element to body
    document.body.appendChild(tempLink);

    // Trigger the email client
    tempLink.click();

    // Clean up
    document.body.removeChild(tempLink);
});

  

/*gallery section */

    
    const newsGrid = document.getElementById('news-grid');
    
    const newsFolder = 'images/news/';
    const newsImages = [];
    for (let i = 1; i <= 10; i++) {
        newsImages.push(`NW_${i}.jpg`);
    }

    newsImages.forEach(image => {
        const articleElement = document.createElement('a');
        articleElement.href = `${newsFolder}${image}`;
        articleElement.className = 'news-item';
        
        const imgElement = document.createElement('img');
        imgElement.src = `${newsFolder}${image}`;
        imgElement.alt = 'News Article';
        imgElement.className = 'news-image';

        // Error handling for image loading
        imgElement.onerror = function() {
            this.src = 'images/placeholder.jpg'; // Fallback image
            this.alt = 'Image not available'; // Fallback alt text
        };
        
        articleElement.appendChild(imgElement);
        newsGrid.appendChild(articleElement);
    });

    // Initialize Magnific Popup for news
    $('.news-item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

// representive grid 

const representatives = [
    { name: "शांताराम नाईक", position: "अध्यक्ष", image: "images/representative/representative.png" },
    { name: "दीपक चव्हाण", position: "कार्याध्यक्ष", image: "images/representative/representative.png" },
    { name: "राजू कांबळे", position: "प्रमुख", image: "images/representative/representative.png" },
    { name: "तानाजी परब", position: "उपाध्यक्ष", image: "images/representative/representative.png" },
    { name: "योगिता सावंत", position: "उपाध्यक्ष", image: "images/representative/representative.png" },
    { name: "अक्षय महापदी", position: "सचिव", image: "images/representative/representative.png" },
    { name: "दर्शन कासले", position: "सचिव", image: "images/representative/representative.png" },
    { name: "राजाराम कुंडेकर", position: "कोषाध्यक्ष", image: "images/representative/representative.png" },
    { name: "मिहीर मठकर", position: "कोषाध्यक्ष", image: "images/representative/representative.png" },
    { name: "नितीन जाधव", position: "उप कोषाध्यक्ष", image: "images/representative/representative.png" },
    { name: "मनिष दाभोळकर", position: "अ. हिशेब तपासनीस", image: "images/representative/representative.png" },
    { name: "सुनिल उतेकर", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "श्रीकांत सावंत", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "सुरेंद्र नेमळेकर", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "परेश गुरव", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "प्रमोद सावंत", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "संदेश जिमन", position: "सल्लागार", image: "images/representative/representative.png" },
    { name: "सागर तळवडेकर", position: "संपर्क प्रमुख", image: "images/representative/representative.png" },
    { name: "अभिषेक शिंदे", position: "सह संपर्कप्रमुख", image: "images/representative/representative.png" },
    { name: "अभिजीत धुरत", position: "विशेष मार्गदर्शक", image: "images/representative/representative.png" }
];

const representativeGrid = document.querySelector('.representative-grid');

representatives.forEach(representative => {
    const card = document.createElement('div');
    card.classList.add('representative-card');
    
    card.innerHTML = `
        <img src="${representative.image}" alt="${representative.name}" class="representative-image">
        <h3>${representative.name}</h3>
        <p>${representative.position}</p>
    `;
    
    representativeGrid.appendChild(card);
});

