
const AD_CATEGORIES = {
    DME: "DME",
    NPWT: "NPWT",
    OXYGEN_TANKS: "OXYGEN_TANKS",
    OXYGEN_CONCENTRATORS: "OXYGEN_CONCENTRATORS",
    INFECTION_PREVENTION: "INFECTION_PREVENTION",

    CUSTOMER_SUCCESS: "CUSTOMER_SUCCESS",
    NEWS: "NEWS",
    EPISODE: "EPISODE", /* doesn't show anything because the global isn't in it */
    NONE: "NONE"
}

const AD_CATEGORIES_DETECT_STRING = {
    DME: "dme",
    NPWT: "npwt",
    OXYGEN_TANKS: "oxygen-tanks",
    OXYGEN_CONCENTRATORS: "oxygen-concentrators",
    INFECTION_PREVENTION: "infection-prevention",
    CUSTOMER_SUCCESS: "customer-success",
    NEWS: "news",
    EPISODE: "episode",
    NONE: "none"
}

const CTA_URLS = {
    DME: "https://masvidahealth.com/easy-quote-dme/",
    NPWT: "https://masvidahealth.com/easy-quote-landing-page-npwt/",
    OXYGEN_TANKS: "https://masvidahealth.com/easy-quote-landing-page-oxygen/",
    OXYGEN_CONCENTRATORS: "https://masvidahealth.com/concentrator-easy-quote/",
    INFECTION_PREVENTION: "https://masvidahealth.com/easy-quote-mvip-form/",
    PREVENTATIVE_MAINTENANCE: "https://masvidahealth.com/quote-concentration-preventative-maintance/",
}

var ad_data = {
  "DME": {
    gif_source: "https://masvidahealth.com/wp-content/uploads/2024/02/Spot-Ad-Concepts-Fast-DME.gif",
    category: AD_CATEGORIES.DME,
  },
  "OXYGEN_TANKS": {
    gif_source: "https://masvidahealth.com/wp-content/uploads/2024/02/Spot-Ad-Concepts-Magage-O2.gif",
    category: AD_CATEGORIES.OXYGEN_TANKS,
  },
  "OXYGEN_CONCENTRATORS": {
    gif_source: "https://masvidahealth.com/wp-content/uploads/2024/02/Spot-Ad-Concepts-O2-Tank.gif",
    category: AD_CATEGORIES.OXYGEN_CONCENTRATORS,
  },
  "NPWT": {
    gif_source: "https://masvidahealth.com/wp-content/uploads/2024/03/Spot-Ad-Concepts-NPWT.gif",
    category: AD_CATEGORIES.NPWT,
  }
  
};

function whichAdCategoryToDisplay() {
    // Get current page's URL
    const currentUrl = window.location.href;

    if ( currentUrl.includes( AD_CATEGORIES_DETECT_STRING.DME ) ) {
        return AD_CATEGORIES.DME;
    }
    else if ( currentUrl.includes( AD_CATEGORIES_DETECT_STRING.NPWT ) ) {
        return AD_CATEGORIES.NPWT;
    }
    else if ( currentUrl.includes( AD_CATEGORIES_DETECT_STRING.OXYGEN_TANKS ) ) {
        return AD_CATEGORIES.OXYGEN_TANKS;
    }
    else if ( currentUrl.includes( AD_CATEGORIES_DETECT_STRING.OXYGEN_CONCENTRATORS ) ) {
        return AD_CATEGORIES.OXYGEN_CONCENTRATORS;
    }
    else if ( currentUrl.includes( AD_CATEGORIES_DETECT_STRING.EPISODE ) ) {
        return AD_CATEGORIES.DME;
    }
    else if ( currentUrl.includes( AD_CATEGORIES_DETECT_STRING.INFECTION_PREVENTION ) ) {
        return AD_CATEGORIES.DME;
    }
    else if ( currentUrl.includes( AD_CATEGORIES_DETECT_STRING.CUSTOMER_SUCCESS ) ) {
        return AD_CATEGORIES.DME;
    }
    else if ( currentUrl.includes( AD_CATEGORIES_DETECT_STRING.NEWS ) ) {
        return AD_CATEGORIES.DME;
    }  else {
        console.log("no ad category detected.", currentUrl, AD_CATEGORIES_DETECT_STRING.INFECTION_PREVENTION )
        return AD_CATEGORIES.NONE;
    }
}

function runAd() {
    
    // check for blog page's category
    var adCategoryToDisplay = whichAdCategoryToDisplay();

    // do nothing if no category is detected
    if ( adCategoryToDisplay == AD_CATEGORIES.NONE ) {
        return;
    } 

    // leash to img element
    var imgElment = document.getElementById("id-ad-element");
    var aElement = document.getElementById("id-ad-cta-url");

    console.log("imgElement " + imgElment, adCategoryToDisplay );

    aElement.href = CTA_URLS[ adCategoryToDisplay ];
    imgElment.src = ad_data[ adCategoryToDisplay ].gif_source;
}

runAd();