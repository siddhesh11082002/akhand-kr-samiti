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
  const subjects = [
    "सावंतवाडी टर्मिनसचे उद्घाटन आपल्या हस्ते व्हावे ही कोकणवासियांची भावना",
    "कोकणवासीयांची विनंती: सावंतवाडी टर्मिनसचे उद्घाटन आपल्या हस्ते करा",
    "आपल्या हस्ते सावंतवाडी टर्मिनसचे उद्घाटन होणे गरजेचे",
    "सावंतवाडी टर्मिनस उद्घाटनाबाबत आपली उपस्थिती हवी",
    "कोकणवासीयांचे स्वप्न पूर्ण करा: सावंतवाडी टर्मिनसचे उद्घाटन",
    "सावंतवाडी टर्मिनसचे काम पूर्ण होऊन उद्घाटन आपल्या हस्ते व्हावे",
    "कोकणवासीयांची इच्छा: सावंतवाडी टर्मिनसचे उद्घाटन आपल्या उपस्थितीत व्हावे",
    "सावंतवाडी टर्मिनसच्या उद्घाटनासाठी कोकणवासीय आपली वाट पाहत आहेत",
    "आपण केलेल्या शिलान्यासाचे फळ सावंतवाडी टर्मिनसचे उद्घाटन व्हावे",
    "सावंतवाडी टर्मिनस: कोकणवासीयांसाठी एक ऐतिहासिक क्षण",
    "टर्मिनसचे उद्घाटन आपल्या हस्ते होणे कोकणवासीयांसाठी अभिमानाचा क्षण",
    "कोकणवासीयांना दिलेला शब्द पूर्ण करा: सावंतवाडी टर्मिनस",
    "सावंतवाडी टर्मिनसचे उद्घाटन आणि कोकणवासीयांचा आनंद",
    "आपल्या हस्ते सावंतवाडी टर्मिनसचे उद्घाटन करून इतिहास रचा",
    "सावंतवाडी टर्मिनसच्या उद्घाटनासाठी आपल्या मार्गदर्शनाची गरज",
];

  // Email Button
  const emailbutton = document.querySelector('.email-button');
  emailbutton.addEventListener('click', function (event) {
  
      console.log("email section");
  
      var recipients = "officeofmr@gov.in,cm@maharashtra.gov.in,dcm@maharashtra.gov.in,dycm@maharashtra.gov.in,bagadeharibhau@gmail.com,Chairmanmls5@gmail.com,ministerwssd@gmail.com,cs@maharashtra.gov.in,psec.wssd@maharashtra.gov.in,acs.transport@maharashtra.gov.in,divcom.konkan@maharashtra.gov.in,collector.sindhudurg@maharashtra.gov.in,dycommr.enf1@gmail.com,cbawankule.min@gmail.com,cmpro@maharashtra.gov.in,prakash.sabale@nic.in,rdc.sindhudurg@maharashtra.gov.in,dyceosin@yahoo.com,ceozp.sindhudurg@maharashtra.gov.in,ambadasdanve79@gmail.com,press.secy@rb.nic.in,us.ca4@gov.in,edpg@rb.railnet.gov.in";
      var cc = "office.mosrs@gov.in,aneesh.hegde@gov.in,narayanrane52@gmail.com,shripad.naik52@gov.in,aniket.tat@gmail.com,manishakayande@rediffmaill.com,neeilamgorhe@gmail.com,asmita.jagruti@gmail.com,uddhavthackeray@gmail.com,anildattatray@gmail.com,aamshyadada@gmail.com,misunilshinde@gmail.com,BHAIGIRKAR16@gmail.com,niranjandavkhare@gmail.com,pydmlaoffice@gmail.com,kolimahasangh@yahoo.com,dnyaneshwar.mhatre68@gmail.com,jayantpwp@gmail.com,Yogesh_kadam1986@outlook.com,mlamaheshchoughule@gmail.com,bjpofficemalad@yahoo.com,speakerrsn1@gmail.com,ravishethpatil158@gmail.com,officeofmlaatul@gmail.com,mandataimhatre@gmail.com,nnr23682@gmail.com,bharatilavekar@gmail.com,parag@maninfra.com,ashish.shelar@yahoo.com,ameetsatam@yahoo.com,aadtti7@yahoo.co.in,sbhusara41@gmail.com,nawabmalikmla@gmail.com,gaikwad.varsha3@gmail.com,aminpatel186@gmail.com,abuasimazmi@hotmail.com,raissp132@gmail.com,mla@rajupatilmns.com,geetajainoffice@gmail.com,secy1-mls@mah.gov.in,shekhargnikam@gmail.com,sandipanbhumare@gmail.com,appabarne@gmail.com,nageshpatil4545@gmail.com,shahuchhatrapatikop@gmail.com,email@nitingadkari.org,nitin.gadkari@nic.in,jadhavprataprao25@gmail.com,rakshataikhadse@gmail.com,dramolkolhe80@gmail.com,dhairyasheelmane@gmail.com,sureshmhatre1701@gmail.com,murlidhar.mohol@gmail.com,sanjaydinapatil@gmail.com,hemantsavara@yahoo.co.in,officeofdrshrikantshinde.delhi@gmail.com,supriyassule@gmail.com,waikarravindra@gmail.com,mpmilind.deora@sansad.nic.in,dhairyashil.mprs@sansad.nic.in,pawars@sansad.nic.in,s.raut@sansad.nic.in,ambadasdanve79@gmail.com,anilkadam7711@gmail.com,vnaik95@gmail.com,press.secy@rb.nic.in,shivsenabhavan@gmail.com,Bjpmaha@gmail.com,vinodtawde@rediffmail.com,vinodstawde@gmail.com,spprabhu1@gmail.com,secretary@sureshprabhu.com,infokokanclub@gmail.com,k.gautam@nic.in,general@krcl.co.in,ibnlokmatsport@gmail.com ,mymahanagarweb@gmail.com,middaysocial@gmail.com , pratikriya@expressindia.com ,admin@freepressjournal.in ";
      var bcc = "akhandkokanpravasiseva@gmail.com,swaditerminus@gmail.com";
      
      const randomIndex = Math.floor(Math.random() * subjects.length);
      const subject = subjects[randomIndex];
      
      var body = `To,

Hon. Shri Devendra Fadanavis ji,
Chief Minister of Maharashtra
Mumbai,

Subject: Requesting you to take prompt responses along with immediate action on the approved work of the Sawantwadi Railway Terminus (SWV), requirement of additional train halts and passengers Amenities.

Respected Sir,


I would like to seek your attention on the following recent proposals and multiple requests:

1.Prolonged pending development work at the Sawantwadi railway terminus should be completed as soon as possible. Including Rel-O-Tel, Terminus Building,Platforms, Watering Arrangements etc.

2.Konkan Railway corporation needs to be merged into Indian Railways for better future aspects.
Intigrate Ratnagiri Region (Kolad to Madura) with Central Railway, And Karwar Region with South Western Railway. 

3.Inclusion of Sawantwadi station in the Amrit Bharat Station Scheme. 
KRCL has already sent its proposal to the Executive Director (SD and Trans) Railway Board, Dated 30/12/2022.

3.Halts of the express trains mentioned below were revoked from Sawantwadi Rd station due to ZBTT during the covid period should be reinstated on high priority.

1. 12431/32 H. Nizamuddin - Trivendrum Rajdhani express.
2. 12201/02 LTT Mumbai - Kochuvelli Garib Rath Express.

KRCL has already sent its proposal regarding Feasibility of said halts with their remarks to the Principal Executive Director (Coaching) Railway Board, Dated 07/08/2024.


4.Please consider the high Passengers footfall and Earnings at Sawantwadi station and kindly provide halts to below trains at Sawantwadi Rd station.

i) 12133/34 C.S.M.T. Mumbai - Manglore Junction - C.S.M.T. Mumbai Express.

ii) 22229/30 C.S.M.T. Mumbai - Madgaon - C.S.M.T. Mumbai Vande Bharat Express.

iii) 22655/56 Ernakulam Junction - H. Nizamuddin - Ernakulam Junction Superfast Express. (Weekly).

iv) 22653/54 Trivandrum Central - H. Nizamuddin - Trivandrum Central Superfast Express. (Weekly).


5.Introduction of the new daily train From Pune Junction  - Kalyan (Mumbai) -  Sawantwadi (SWV), on regular basis.

6.Expendite the Work of New BG Line between Sawantwadi - Chandgarh - Belgaum.(114.6KM)
(Preliminary Engineering Cum Traffic Survay Report has been submitted to the Railway Board by SWR at Dated 21/09/2018.)

Please note we attempted multiple times with the KRCL via various contact mediums requesting to fulfill the studyful and basic demands to be accepted but unfortunately we didn't get proper response or we would rather say concrete action plan was not made to achieve the same.

Scheduling a meeting at your office along with Konkan railway passenger Asssociation Sawantwadi would bring more light to resolve these problems.

Looking forward to hearing more on this matter as soon as possible.

Thank you!

Your Sincerely,`;
  
      var emailLink = "mailto:" + encodeURIComponent(recipients) +
                      "?cc=" + encodeURIComponent(cc) +
                      "&bcc=" + encodeURIComponent(bcc) +
                      "&subject=" + encodeURIComponent(subject) +
                      "&body=" + encodeURIComponent(body);
  
      // Construct the mailto link
      emailLink = `mailto:${encodeURIComponent(recipients)}?cc=${encodeURIComponent(cc)}&bcc=${encodeURIComponent(bcc)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Debugging: Log the link
      console.log("CC:", cc);
      console.log("Generated email link:", emailLink);
  
  
    // Create and click the temporary link
    try {
      const tempLink = document.createElement('a');
      tempLink.href = emailLink;  
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      console.log("Email client triggered");
  } catch (error) {
      console.error("Failed to trigger email client:", error);
  }
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

