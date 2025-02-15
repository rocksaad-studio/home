// Translation data
const translations = {
    en: {
        "Welcome to My Website": "Welcome to My Website",
        "My Games": "My Games",
        "Here are some of the games I've created or enjoy playing:": "Here are some of the games I've created or enjoy playing:",
        "About Me": "About Me",
        "Hi! I'm a game developer with Godot. I will make tutorials, challenges, and more!": "Hi! I'm a game developer with Godot. I will make tutorials, challenges, and more!",
        "My Social Links": "My Social Links",
        "My Official YouTube Channel": "My Official YouTube Channel",
        "Check out my YouTube channel for more content:": "Check out my YouTube channel for more content:",
        "Visit My Channel": "Visit My Channel",
        "2025 Rocksaad Studio. All rights reserved.": "2025 Rocksaad Studio. All rights reserved."
    },
    ar: {
        "Welcome to My Website": "مرحبًا بكم في موقعي",
        "My Games": "ألعابي",
        "Here are some of the games I've created or enjoy playing:": "إليك بعض الألعاب التي قمت بإنشائها أو أستمتع بلعبها:",
        "About Me": "عني",
        "Hi! I'm a game developer with Godot. I will make tutorials, challenges, and more!": "مرحبًا! أنا مطور ألعاب باستخدام Godot. سأقوم بعمل دروس وتحديات والمزيد!",
        "My Social Links": "روابط التواصل الاجتماعي",
        "My Official YouTube Channel": "قناتي الرسمية على اليوتيوب",
        "Check out my YouTube channel for more content:": "تفقد قناتي على اليوتيوب للمزيد من المحتوى:",
        "Visit My Channel": "زيارة القناة",
        "2025 Rocksaad Studio. All rights reserved.": "© 2025 استوديو روكسعد. جميع الحقوق محفوظة."
    }
};

// Default language
let currentLanguage = "en";

// Function to translate the page
function translatePage(language) {
    const elements = document.querySelectorAll("h1, h2, p, a, li, footer p");
    elements.forEach(element => {
        const key = element.innerText.trim();
        if (translations[language][key]) {
            element.innerText = translations[language][key];
        }
    });
}

// Toggle translation between English and Arabic
document.getElementById("translate-btn").addEventListener("click", function () {
    if (currentLanguage === "en") {
        translatePage("ar");
        currentLanguage = "ar";
        this.innerText = "Translate to English";
    } else {
        translatePage("en");
        currentLanguage = "en";
        this.innerText = "Translate to Arabic";
    }
});