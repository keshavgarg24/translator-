const fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
exchangeIcon = document.querySelector(".exchange"),
selectTag = document.querySelectorAll("select"),
icons = document.querySelectorAll(".row i");
translateBtn = document.querySelector("button");

// Updated list of countries with Indian regional and generic languages, Asian languages, and lesser-known languages
const countries = {
    "bn-IN": "Bengali", // Bengali
    "gu-IN": "Gujarati", // Gujarati
    "hi-IN": "Hindi", // Hindi
    "kn-IN": "Kannada", // Kannada
    "ne-NP": "Nepali", // Nepali
    "pa-IN": "Panjabi", // Punjabi
    "si-LK": "Sinhala", // Sinhala
    "ta-LK": "Tamil", // Tamil
    "te-IN": "Telugu", // Telugu
    "as-IN": "Assamese", // Assamese
    "my-MM": "Burmese", // Burmese
    "km-KM": "Khmer", // Khmer
    "lo-LA": "Lao", // Lao
    "ms-MY": "Malay", // Malay
    "mn-MN": "Mongolian", // Mongolian
    "fil-PH": "Filipino", // Filipino
    "th-TH": "Thai", // Thai
    "uz-UZ": "Uzbek", // Uzbek
    "vi-VN": "Vietnamese", // Vietnamese
    "wo-SN": "Wolof", // Wolof
    "xh-ZA": "Xhosa", // Xhosa
    "zu-ZA": "Zulu", // Zulu
    "haw-US": "Hawaiian", // Hawaiian
    "kha-IN": "Khasi", // Khasi
    "kok-IN": "Konkani", // Konkani
    "lus-CN": "Mizo", // Mizo
    "mn-MN": "Mongolian", // Mongolian
    "rup-MK": "Aromanian", // Aromanian
    "dsb-DE": "Lower Sorbian", // Lower Sorbian
    "frr-DE": "Northern Frisian", // Northern Frisian
    "gom-Latn-IN": "Goan Konkani", // Goan Konkani
    "krl-RU": "Karelian", // Karelian
    "ksb-TZ": "Shambala", // Shambala
    "sah-RU": "Yakut", // Yakut
    "sat-IN": "Santali", // Santali
    "sd-PK": "Sindhi", // Sindhi
    "shn-MM": "Shan", // Shan
    "syr-SY": "Syriac", // Syriac
    "tmz-IR": "Tamanaku", // Tamanaku
    "tn-BW": "Tswana", // Tswana
    "wal-ET": "Wolaytta", // Wolaytta
};

// Updated language options for select tags
selectTag.forEach((tag, id) => {
    for (let country_code in countries) {
        let selected = id == 0 ? country_code == "en-GB" ? "selected" : "" : country_code == "hi-IN" ? "selected" : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});
