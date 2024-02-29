const AD_CATEGORIES = {
    DME: "DME",
    NPWT: "NPWT",
    OXYGEN_TANKS: "OXYGEN_TANKS",
    OXYGEN_CONCENTRATORS: "OXYGEN_CONCENTRATORS",
    PREVENTATIVE_MAINTENANCE: "PREVENTATIVE_MAINTENANCE",
    INFECTION_PREVENTION: "INFECTION_PREVENTION",
    NONE: "NONE"
}

const AD_CATEGORIES_DETECT_STRING = {
    DME: "dme",
    NPWT: "npwt",
    OXYGEN_TANKS: "oxygen-tanks",
    OXYGEN_CONCENTRATORS: "oxygen-concentrators",
    PREVENTATIVE_MAINTENANCE: "preventative-maintenance",
    INFECTION_PREVENTION: "infection-prevention",
    NONE: "none"
}

const CTA_URLS = {
    DME: "https://masvidahealth.com/easy-quote-dme/",
    NPWT: "https://masvidahealth.com/easy-quote-landing-page-npwt/",
    OXYGEN_TANKS: "https://masvidahealth.com/easy-quote-landing-page-oxygen/",
    OXYGEN_CONCENTRATORS: "https://masvidahealth.com/concentrator-easy-quote/",
    PREVENTATIVE_MAINTENANCE: "https://masvidahealth.com/quote-concentration-preventative-maintance/",
    INFECTION_PREVENTION: "https://masvidahealth.com/easy-quote-mvip-form/"
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
  }
};

function whichAdCategoryToDisplay() {
    // Get current page's URL
    const currentUrl = window.location.href;

    if ( currentUrl.includes( AD_CATEGORIES_DETECT_STRING.DME ) ) {
        console.log( "shouldDisplayAd(DME)" );
        return AD_CATEGORIES.DME;
    }
    else if ( currentUrl.includes( AD_CATEGORIES_DETECT_STRING.NPWT ) ) {
        console.log( "shouldDisplayAd(NPWT)" );
        return AD_CATEGORIES.NPWT;
    }
    else if ( currentUrl.includes( AD_CATEGORIES_DETECT_STRING.OXYGEN_TANKS ) ) {
        console.log( "shouldDisplayAd(OXYGEN_TANKS)" );
        return AD_CATEGORIES.OXYGEN_TANKS;
    }
    else if ( currentUrl.includes( AD_CATEGORIES_DETECT_STRING.OXYGEN_CONCENTRATORS ) ) {
        console.log( "shouldDisplayAd(OXYGEN_CONCENTRATORS)" );
        return AD_CATEGORIES.OXYGEN_CONCENTRATORS;
    }
    else if ( currentUrl.includes( AD_CATEGORIES_DETECT_STRING.PREVENTATIVE_MAINTENANCE ) ) {
        console.log( "shouldDisplayAd(PREVENTATIVE_MAINTENANCE)" );
        return AD_CATEGORIES.PREVENTATIVE_MAINTENANCE;
    }
    else if ( currentUrl.includes( AD_CATEGORIES_DETECT_STRING.INFECTION_PREVENTION ) ) {
        console.log( "shouldDisplayAd(INFECTION_PREVENTION)" );
        return AD_CATEGORIES.INFECTION_PREVENTION;
    } else {
        return AD_CATEGORIES.NONE;
        console.log("no ad category detected.", currentUrl, AD_CATEGORIES_DETECT_STRING.INFECTION_PREVENTION )
    }


    console.log("taco ", currentUrl);
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
