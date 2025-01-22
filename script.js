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
      var cc = "office.mosrs@gov.in,aneesh.hegde@gov.in,narayanrane52@gmail.com,shripad.naik52@gov.in,aniket.tat@gmail.com,manishakayande@rediffmaill.com,neeilamgorhe@gmail.com,asmita.jagruti@gmail.com,uddhavthackeray@gmail.com,anildattatray@gmail.com,aamshyadada@gmail.com,misunilshinde@gmail.com,BHAIGIRKAR16@gmail.com,niranjandavkhare@gmail.com,pydmlaoffice@gmail.com,kolimahasangh@yahoo.com,dnyaneshwar.mhatre68@gmail.com,jayantpwp@gmail.com,Yogesh_kadam1986@outlook.com,mlamaheshchoughule@gmail.com,bjpofficemalad@yahoo.com,speakerrsn1@gmail.com,ravishethpatil158@gmail.com,officeofmlaatul@gmail.com,mandataimhatre@gmail.com,nnr23682@gmail.com,bharatilavekar@gmail.com,parag@maninfra.com,ashish.shelar@yahoo.com,ameetsatam@yahoo.com,aadtti7@yahoo.co.in,sbhusara41@gmail.com,nawabmalikmla@gmail.com,gaikwad.varsha3@gmail.com,aminpatel186@gmail.com,abuasimazmi@hotmail.com,raissp132@gmail.com,mla@rajupatilmns.com,geetajainoffice@gmail.com,secy1-mls@mah.gov.in,shekhargnikam@gmail.com,sandipanbhumare@gmail.com,appabarne@gmail.com,nageshpatil4545@gmail.com,shahuchhatrapatikop@gmail.com,email@nitingadkari.org,nitin.gadkari@nic.in,jadhavprataprao25@gmail.com,rakshataikhadse@gmail.com,dramolkolhe80@gmail.com,dhairyasheelmane@gmail.com,sureshmhatre1701@gmail.com,murlidhar.mohol@gmail.com,sanjaydinapatil@gmail.com,hemantsavara@yahoo.co.in,arvind.sawant@sansad.nic.in,officeofdrshrikantshinde.delhi@gmail.com,supriyassule@gmail.com,smita.udaywagh@sansad.nic.in,waikarravindra@gmail.com,dranil.bonde@sansad.nic.in,priyanka.c19@sansad.nic.in,ashokchavan.009@sansad.nic.in,mpmilind.deora@sansad.nic.in,cdhandore.mp@sansad.nic.in,bhagwat.karad@sansad.nic.in,mp.medha@sansad.nic.in,dhananjaymahadik.mp@sansad.nic.in,praful@sansad.nic.in,dhairyashil.mprs@sansad.nic.in,pawars@sansad.nic.in,s.raut@sansad.nic.in,ambadasdanve79@gmail.com,anilkadam7711@gmail.com,vnaik95@gmail.com,press.secy@rb.nic.in,shivsenabhavan@gmail.com,Bjpmaha@gmail.com,vinodtawde@rediffmail.com,vinodstawde@gmail.com,spprabhu1@gmail.com,secretary@sureshprabhu.com,infokokanclub@gmail.com,k.gautam@nic.in,general@krcl.co.in";
      var bcc = "akhandkokanpravasiseva@gmail.com,swaditerminus@gmail.com";
      
      const randomIndex = Math.floor(Math.random() * subjects.length);
      const subject = subjects[randomIndex];
      
      var body = `प्रति,
  श्री देवेंद्र सरिता गंगाधरराव फडणवीस यांसी,
  मुख्यमंत्री महाराष्ट्र राज्य.
  
  विषय : सावंतवाडी टर्मिनसचे उद्घाटन आपल्या हस्ते व्हावे ही कोकणवासियांची भावना.
  
  आदरणीय देवा भाऊ,
  
  आपण २०१९ वर्षीच्या विधानसभा निवडणुकीत जसे बोललात तसे २०२४ वर्षीच्या विधानसभा निवडणुकीत उशिरा का होईना पण प्रचंड बहुमताने पुन्हा आलात,
  अभिनंदन..!!
  कोकणातील जनतेने देखील महायुतीला प्रचंड बहुमताने विजयी करून आपल्याला भक्कम साथ दिलीय.
  
  देवा भाऊ, आम्हाला आठवतेय, की आपण सण २०१४ ला महाराष्ट्राचे मुख्यमंत्री बनल्यावर मा. रेल्वेमंत्री सुरेश प्रभू व मा. पालकमंत्री दीपकभाई केसरकर यांचा उपस्थितीत २७ जून २०१५ रोजी सावंतवाडी टर्मिनसचा शिलान्यास केला होता, तेव्हा कोकणी जनता आणि मुंबईस्थित चाकरमानी या घटनेने सुखावले होते, परंतु आपल्याला सांगू इच्छितो की आजतागायत या सावंतवाडी टर्मिनसचे काम पूर्ण झालेले नाही.
  आपण त्यावेळी आपल्या भूमिपूजनाचा भाषणात ह्या टर्मिनस चे उद्घाटनाला देखील आपण नक्की येऊ, आणि आपल्या हस्तेच या टर्मिनस चे उद्घाटन होईल असे संबोधिले होते, ते शब्द आज ही मला आठवतात. कारण तो प्रसंग मी आणि माझ्या कुटुंबाने याची देही याची डोळा पाहिला होता.
  
  देवा भाऊ, काळ लोटला.. बघता बघता २०२५ साल जवळ आले आणि तो क्षण पुन्हा आला, आपण पुन्हा या राज्याचे बहुमताने मुख्यमंत्री झालात आणि पुन्हा त्या टर्मिनसच्या भूमिपूजनाचा सोहळा माझ्या डोळ्यांसमोर उभा ठाकला, पुन्हा एक हळूच ती आशा जागृत झाली, मनाला सावंतवाडी टर्मिनसचे वेध पुन्हा लागले.
  
  देवा भाऊ, आपण पुन्हा आलात, आणि तुमच्या सोबत माजी मुख्यमंत्री, कोकणचे भाग्यविधाते आणि या मतदारसंघाचे खासदार श्री नारायणराव राणे आहेत, सोबत सावंतवाडीचे आदरणीय भाई, अर्थातच दीपक भाई, हिंदुत्वाचे उभरते नेतृत्व आणि या जिल्ह्याचे पालकमंत्री श्री नितेश राणे, आमदार श्री निलेश राणे, आमदार आणि आपल्या पक्षाचे कार्यकारी अध्यक्ष श्री रवी दादा ही सिंधुदुर्ग जिल्ह्यातील दिग्गज नेते मंडळी आहेतच,
  
  देवा भाऊ, आपण शिलान्यास केलेले सावंतवाडी टर्मिनसचा कोनशिला आपली वाट बघतोय, त्या कोनशिलेला आपण द्याल का न्याय..? येथील टर्मिनस प्रेमी जनता आपली जिवाच्या आकांताने आपल्याला साद घालत आहे, आपण त्यांना द्याल का साथ..?
  
  देवा भाऊ, कोकण रेल्वे महामंडळ या सावंतवाडी टर्मिनसला पूर्ण विसरून गेलाय, म्हणतोय टर्मिनस ला आलेला निधी माघारी गेला म्हणून.
  परंतु देवा भाऊ, आता कोकणी जनता या महामंडळाला नारळ देण्यावर ठाम झालाय, आपण कराल का मदत..? ह्या रेल्वे महामंडळातील महाराष्ट्र राज्याचा हिस्सा द्याल का केंद्राला..? हे महामंडळ होईल का भारतीय रेल्वे चा भाग..?
  
  देवा भाऊ, आपली दूरदृष्टी नेते अशी ओळख आहे, समृध्दीने ते दाखवून ही दिलेय. तशीच जबाबदारी आपण आमच्या छोट्याश्या सावंतवाडी टर्मिनसची देखील घ्यावी अशी आम्हा कोकणी जनतेची इच्छा आपण कराल का पूर्ण.?
  
  देवा भाऊ, या टर्मिनसची अपूर्ण कामे पूर्ण होऊन सदर टर्मिनसचे उद्घाटन हे आपल्या हस्ते व्हावे कदाचित हेच त्या विधात्याला मान्य असावे.
  
  देवा भाऊ, कोकणी जनतेची ही इच्छा आपण पूर्ण करावी, जेणेकरून कोकणी जनता आपल्या रामेश्वराकडे आपल्या उत्तम आरोग्य, भरभराटी साठी नक्कीच गाऱ्हाणे घालील हा शब्द आहे.
  आणि हो, सदर टर्मिनसला प्राध्यापक मधु दंडवते यांचे नाव द्यावे जेणेकरून ज्याने ही वास्तू घडवली त्या शिल्पकराचा योग्य सन्मान या देवभूमित राखला जाईल.
  
  आपला एक हितचिंतक,`;
  
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

