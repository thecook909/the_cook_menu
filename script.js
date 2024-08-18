document.getElementById('menu-toggle').addEventListener('click', function() {
    var menuList = document.getElementById('menu-list');
    menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var menuList = document.getElementById('menu-list');
        
        // Collapse menu only if screen width is less than 768px (mobile view)
        if (window.innerWidth < 768) {
            menuList.style.display = 'none';
        }
        
        var targetSection = document.querySelector(this.getAttribute('href'));
        var offsetPosition = targetSection.offsetTop - 55; // Adjust 60px as needed based on your header height
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

document.getElementById('feedback-button').addEventListener('click', function() {
    window.location.href = 'feedback.html'; // Replace with the actual feedback page URL
});




// Translation btn function

const menuItems = {
    // Navigation
    "Menu": "القائمة",
    "Burgers": "برجر",
    "Sandwiches": "ساندويتشات",
    "Plates": "أطباق",
    "Drinks": "مشروبات",
    
    // Burgers
    "Classic Burger": "برجر كلاسيكي",
    "coleslaw, french fries, lettuce, pickles, ketchup, mayonnaise, mustard.": 
        "برجر، سلطة ملفوف بالمايونيز، بطاطس مقلية، خس، مخللات، كاتشب، مايونيز، خردل.",
    "Cheese Burger": "برجر جبن",
    "double cheese(2 kinds), coleslaw, french fries, lettuce, pickles, ketchup, mayonnaise, mustard.":
        "برجر، جبن مزدوج (نوعان)، سلطة ملفوف بالمايونيز، بطاطس مقلية، خس، مخللات، كاتشب، مايونيز، خردل.",
    "Double Burger": "برجر مزدوج",
    "double cheese(2 kinds), coleslaw, french fries, lettuce, pickles, ketchup, mayonnaise, mustard.":
        "برجر مزدوج، جبن مزدوج (نوعان)، سلطة ملفوف بالمايونيز، بطاطس مقلية، خس، مخللات، كاتشب، مايونيز، خردل.",
    
    // Sandwiches
    "The CooK Sandwich": "ساندويتش ذا كوك",
    "caviar, avocado, cheese, rokka, lemon, in baguette.":
        "كافيار، أفوكادو، جبن، روكا، ليمون، في خبز باغيت.",
    "Fajita Sandwich": "ساندويتش فاهيتا",
    "chicken, mozzarella cheese, onion, mushroom, pickles, pepper(green / yellow / red).":
        "دجاج، جبن موزاريلا، بصل، فطر، مخللات، فلفل (أخضر / أصفر / أحمر).",
    "Philadelphia Sandwich": "ساندويتش فيلادلفيا",
    "meat, mozzarella cheese, onion, mushroom, pickles, pepper(green / yellow / red).":
        "لحم، جبن موزاريلا، بصل، فطر، مخللات، فلفل (أخضر / أصفر / أحمر).",
    "Tawook Sandwich": "ساندويتش طاووق",
    "coleslaw, french fries, pickles, garlic paste.":
        "سلطة ملفوف بالمايونيز، بطاطس مقلية، مخللات، معجون ثوم.",
    "Escalob Sandwich":"ساندويتش اسكالوب",
    "coleslaw,french fries, pickles, ketchup, mayonaise.":"سلطة ملفوف بالمايونيز ، بطاطا مقلية، مخللات، كاتشب، مايونيز",
    "Sujuk Sandwich": "ساندويتش سجق",
    "french fries, garlic paste, pickles": "بطاطا مقلية، معجون الثوم، مخللات",
    "Kafta Sandwich": "ساندويتش كفتة",
    "kafta with The CooK's sauce.":
        "كفتة مع صوص ذا كوك.",
    "Kabab Sandwich": "ساندويتش كباب",
    "kabab with The CooK's sauce.":
        "كباب مع صوص ذا كوك.",
    "Batata Sandwich": "ساندويتش بطاطا",
    "coleslaw, pickles, ketchup, garlic paste.":
        "سلطة ملفوف بالمايونيز، مخللات، كاتشب، معجون ثوم.",
    
    // Plates
    "Steak Plate": "طبق ستيك",
    "steak fillet on hot chilli bread, pickles, french fries, humus, biwaz sauce(parsley / onion / sumac).":
        "شرائح ستيك على خبز حار، مخللات، بطاطس مقلية، حمص، صوص بيوز (بقدونس / بصل / سماق).",
    "Chicken Plate": "طبق دجاج",
    "chicken breast, coleslaw, pickles, sauce, french fries, garlic paste.":
        "صدر دجاج، سلطة ملفوف بالمايونيز، مخللات، صوص، بطاطس مقلية، معجون ثوم.",
    "Fish Plate": "طبق سمك",
    "salad, tarator, potato (fried / grilled).":
        "سلطة، طحينة، بطاطس (مقلية / مشوية).",
    "Plate After Gym": "طبق بعد التمرين",
    "(meat / chicken / fish), grilled veggies, grilled potato.":
        "(لحم / دجاج / سمك)، خضار مشوية، بطاطس مشوية.",
    
    // Drinks
    "Pepsi": "بيبسي",
    "Pepsi Diet": "بيبسي دايت",
    "7up": "سفن أب",
    "7up Diet": "سفن أب دايت",
    "Miranda": "ميرندا",
    "Dark Blue": "دارك بلو",
    "Boom Boom": "بوم بوم",
    "Red Bull": "ريد بُل",
    "Laban Airan": "لبن عيران",
    "Water": "ماء"
};



const menuItemsArabic = {
    // Navigation
    "القائمة": "Menu",
    "برجر": "Burgers",
    "ساندويتشات": "Sandwiches",
    "أطباق": "Plates",
    "مشروبات": "Drinks",
    
    // Burgers
    "برجر كلاسيكي": "Classic Burger",
    "برجر، سلطة ملفوف بالمايونيز، بطاطس مقلية، خس، مخللات، كاتشب، مايونيز، خردل.": 
        "coleslaw, french fries, lettuce, pickles, ketchup, mayonnaise, mustard.",
    "برجر جبن": "Cheese Burger",
    "برجر، جبن مزدوج (نوعان)، سلطة ملفوف بالمايونيز، بطاطس مقلية، خس، مخللات، كاتشب، مايونيز، خردل.":
        "double cheese(2 kinds), coleslaw, french fries, lettuce, pickles, ketchup, mayonnaise, mustard.",
    "برجر مزدوج": "Double Burger",
    "برجر مزدوج، جبن مزدوج (نوعان)، سلطة ملفوف بالمايونيز، بطاطس مقلية، خس، مخللات، كاتشب، مايونيز، خردل.":
        "double cheese(2 kinds), coleslaw, french fries, lettuce, pickles, ketchup, mayonnaise, mustard.",
    
    // Sandwiches
    "ساندويتش ذا كوك": "The CooK Sandwich",
    "كافيار، أفوكادو، جبن، روكا، ليمون، في خبز باغيت.": 
        "caviar, avocado, cheese, rokka, lemon, in baguette.",
    "ساندويتش فاهيتا": "Fajita Sandwich",
    "دجاج، جبن موزاريلا، بصل، فطر، مخللات، فلفل (أخضر / أصفر / أحمر).":
        "chicken, mozzarella cheese, onion, mushroom, pickles, pepper(green / yellow / red).",
    "ساندويتش فيلادلفيا": "Philadelphia Sandwich",
    "لحم، جبن موزاريلا، بصل، فطر، مخللات، فلفل (أخضر / أصفر / أحمر).":
        "meat, mozzarella cheese, onion, mushroom, pickles, pepper(green / yellow / red).",
    "ساندويتش طاووق": "Tawook Sandwich",
    "سلطة ملفوف بالمايونيز، بطاطس مقلية، مخللات، معجون ثوم.":
        "coleslaw, french fries, pickles, garlic paste.",
    "ساندويتش اسكالوب":"Escalob Sandwich",
    "سلطة ملفوف بالمايونيز ، بطاطا مقلية، مخللات، كاتشب، مايونيز":
        "coleslaw,french fries, pickles, ketchup, mayonaise.",

    "ساندويتش سجق": "Sujuk Sandwich",
    "بطاطا مقلية، معجون الثوم، مخللات": "french fries, garlic paste, pickles",
    "ساندويتش كفتة": "Kafta Sandwich",
    "كفتة مع صوص ذا كوك.":
        "kafta with The CooK's sauce.",
    "ساندويتش كباب": "Kabab Sandwich",
    "كباب مع صوص ذا كوك.":
        "kabab with The CooK's sauce.",
    "ساندويتش بطاطا": "Batata Sandwich",
    "سلطة ملفوف بالمايونيز، مخللات، كاتشب، معجون ثوم.":
        "coleslaw, pickles, ketchup, garlic paste.",
    
    // Plates
    "طبق ستيك": "Steak Plate",
    "شرائح ستيك على خبز حار، مخللات، بطاطس مقلية، حمص، صوص بيوز (بقدونس / بصل / سماق).":
        "steak fillet on hot chilli bread, pickles, french fries, humus, biwaz sauce(parsley / onion / sumac).",
    "طبق دجاج": "Chicken Plate",
    "صدر دجاج، سلطة ملفوف بالمايونيز، مخللات، صوص، بطاطس مقلية، معجون ثوم.":
        "chicken breast, coleslaw, pickles, sauce, french fries, garlic paste.",
    "طبق سمك": "Fish Plate",
    "سلطة، طحينة، بطاطس (مقلية / مشوية).":
        "salad, tarator, potato (fried / grilled).",
    "طبق بعد التمرين": "Plate After Gym",
    "(لحم / دجاج / سمك)، خضار مشوية، بطاطس مشوية.":
        "(meat / chicken / fish), grilled veggies, grilled potato.",
    
    // Drinks
    "بيبسي": "Pepsi",
    "بيبسي دايت": "Pepsi Diet",
    "سفن أب": "7up",
    "سفن أب دايت": "7up Diet",
    "ميرندا": "Miranda",
    "دارك بلو": "Dark Blue",
    "بوم بوم": "Boom Boom",
    "ريد بُل": "Red Bull",
    "لبن عيران": "Laban Airan",
    "ماء": "Water"
};


let isEnglish = true;

document.getElementById('translate-button').addEventListener('click', function() {
    document.querySelectorAll('.item-name').forEach(function(item) {
        item.textContent = isEnglish ? menuItems[item.textContent] || item.textContent : menuItemsArabic[item.textContent] || item.textContent;
    });
    document.querySelectorAll('.item-description').forEach(function(description) {
        description.textContent = isEnglish ? menuItems[description.textContent] || description.textContent : menuItemsArabic[description.textContent] || description.textContent;
    });
    document.querySelectorAll('.menu-options').forEach(function(description) {
        description.textContent = isEnglish ? menuItems[description.textContent] || description.textContent : menuItemsArabic[description.textContent] || description.textContent;
    });

    isEnglish = !isEnglish;
    document.getElementById('translate-button').textContent = isEnglish ? "للعربية اضغط هنا" : "for English ";
});



// Unit price functions from $ ==> lira

// Exchange rate: 1 USD = 89,000 LBP (example rate, update as needed)
const exchangeRate = 89000;
const prices = document.querySelectorAll('.item-price');

// Function to convert prices
function convertPrices(toCurrency) {
    
    prices.forEach(price => {
        let value = parseFloat(price.textContent.replace('$', ''));
        if (toCurrency === 'LBP') {
            value = value * exchangeRate;
            price.textContent = `${value.toFixed(0)} LBP`;
        } else {
            value = value / exchangeRate;
            price.textContent = `$${value.toFixed(2)}`;
        }
    });
}

// Event listener for the price toggle button
const priceToggleButton = document.getElementById('price-toggle');
let inDollars = false;

priceToggleButton.addEventListener('click', () => {
    if (inDollars) {
        convertPrices('LBP');
        priceToggleButton.textContent = 'Switch to USD';
    } else {
        convertPrices('USD');
        priceToggleButton.textContent = 'Switch to LBP';
    }
    inDollars = !inDollars;
});
