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
    "coleslaw, french fries, pickles, ketchup, mustard.": 
        "سلطة ملفوف بالمايونيز، بطاطا مقلية، مخللات، كاتشب، خردل.",
    "Cheese Burger": "برجر جبن",
    "mozzarella and chedder slice, coleslaw, french fries, pickles, ketchup, mustard.":
        "شرائح موزاريلا وشيدر، سلطة ملفوف بالمايونيز، بطاطا مقلية، مخللات، كاتشب، خردل.",
    "Double Burger": "برجر مزدوج",
    "double burger, mozzarella and chedder slice, coleslaw, french fries, pickles, ketchup, mustard.":
        "برجر مزدوج، شرائح موزاريلا وشيدر، سلطة ملفوف بالمايونيز، بطاطا مقلية، مخللات، كاتشب، خردل.",
    
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
    "coleslaw / garlic paste, french fries, pickles.":
    "سلطة ملفوف بالمايونيز / معجون ثوم، بطاطس مقلية، مخللات.",
    "Escalob Sandwich":"ساندويتش اسكالوب",
    "coleslaw,french fries, pickles, ketchup, mayonaise.":"سلطة ملفوف بالمايونيز ، بطاطا مقلية، مخللات، كاتشب، مايونيز",
    "Fish Sandwich":"ساندويتش سمك",
    "fish fillet,french fries, lettuce, pickles, tarator.":"فيليه سمك، بطاطس مقلية، خس، مخلل، طحينة بالثوم",
    "Sujuk Sandwich": "ساندويتش سجق",
    "french fries, garlic paste, pickles": "بطاطا مقلية، معجون الثوم، مخللات",
    "Kafta Sandwich": "ساندويتش كفتة",
    "kafta with The CooK's sauce.":
        "كفتة مع صوص ذا كوك.",
    "Kabab Sandwich": "ساندويتش كباب",
    "kabab with The CooK's sauce.":
        "كباب مع صوص ذا كوك.",
    "French Fries Sandwich": "ساندويتش بطاطا",
    "coleslaw, pickles, ketchup, garlic paste.":
        "سلطة ملفوف بالمايونيز، مخللات، كاتشب، معجون ثوم.",
    
    // Plates
    "Baby Fillet Steak Plate": "طبق ستيك",
    "baby fillet steak on hot chilli bread, pickles, french fries, humus, biwaz sauce(parsley / onion / sumac).":
        "شرائح ستيك على خبز حار، مخللات، بطاطس مقلية، حمص، صوص بيوز (بقدونس / بصل / سماق).",
    "Chicken Plate": "طبق دجاج",
    "chicken breast, coleslaw, pickles, sauce, french fries, garlic paste.":
        "صدر دجاج، سلطة ملفوف بالمايونيز، مخللات، صوص، بطاطس مقلية، معجون ثوم.",
    "Fish Plate": "طبق سمك",
    "salad, tarator, potato (fried / grilled).":
        "سلطة، طحينة، بطاطس (مقلية / مشوية).",
    "Plate After Gym a": "طبق بعد التمرين ا",
    "Plate After Gym b": "طبق بعد التمرين ب",
    "(chicken / fish), grilled veggies, grilled potato.":
        "(دجاج / سمك)، خضار مشوية، بطاطس مشوية.",
    "meat, grilled veggies, grilled potato.":"لحم ، خضار مشوية، بطاطس مشوية.",
    "French Fries":"بطاطس مقلية" ,
    "single.":"فردي",

    // Drinks
    "Pepsi (330ml)": "بيبسي (330ml)",
    "Pepsi (185ml)": "بيبسي (185ml)",
    "7up (330ml)": "سفن أب (330ml)",
    "7up (185ml)": "سفن أب (185ml)",
    "Miranda": "ميرندا",
    "Dark Blue": "دارك بلو",
    "Boom Boom": "بوم بوم",
    "Red Bull": "ريد بُل",
    "Mr. Juicy": "مستر جوسي",
    "Water": "ماء",
    "regular / diet":"عادي / دايت"
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
    "سلطة ملفوف بالمايونيز، بطاطا مقلية، مخللات، كاتشب، خردل.": 
        "coleslaw, french fries, pickles, ketchup, mustard.",
    "برجر جبن": "Cheese Burger",
    "شرائح موزاريلا وشيدر، سلطة ملفوف بالمايونيز، بطاطا مقلية، مخللات، كاتشب، خردل.":
        "mozzarella and chedder slice, coleslaw, french fries, pickles, ketchup, mustard.",
    "برجر مزدوج": "Double Burger",
    "برجر مزدوج، شرائح موزاريلا وشيدر، سلطة ملفوف بالمايونيز، بطاطا مقلية، مخللات، كاتشب، خردل.":
        "double burger, mozzarella and chedder slice, coleslaw, french fries, pickles, ketchup, mustard.",
    
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
    "سلطة ملفوف بالمايونيز / معجون ثوم، بطاطس مقلية، مخللات.":
        "coleslaw / garlic paste, french fries, pickles.",
    "ساندويتش اسكالوب":"Escalob Sandwich",
    "سلطة ملفوف بالمايونيز ، بطاطا مقلية، مخللات، كاتشب، مايونيز":
        "coleslaw,french fries, pickles, ketchup, mayonaise.",
    "ساندويتش سمك":"Fish Sandwich",
    "فيليه سمك، بطاطس مقلية، خس، مخلل، طحينة بالثوم":"fish fillet,french fries, lettuce, pickles, tarator.",
    "ساندويتش سجق": "Sujuk Sandwich",
    "بطاطا مقلية، معجون الثوم، مخللات": "french fries, garlic paste, pickles",
    "ساندويتش كفتة": "Kafta Sandwich",
    "كفتة مع صوص ذا كوك.":
        "kafta with The CooK's sauce.",
    "ساندويتش كباب": "Kabab Sandwich",
    "كباب مع صوص ذا كوك.":
        "kabab with The CooK's sauce.",
    "ساندويتش بطاطا": "French Fries Sandwich",
    "سلطة ملفوف بالمايونيز، مخللات، كاتشب، معجون ثوم.":
        "coleslaw, pickles, ketchup, garlic paste.",
    
    // Plates
    "طبق ستيك": "Baby Fillet Steak Plate",
    "شرائح ستيك على خبز حار، مخللات، بطاطس مقلية، حمص، صوص بيوز (بقدونس / بصل / سماق).":
        "baby fillet steak on hot chilli bread, pickles, french fries, humus, biwaz sauce(parsley / onion / sumac).",
    "طبق دجاج": "Chicken Plate",
    "صدر دجاج، سلطة ملفوف بالمايونيز، مخللات، صوص، بطاطس مقلية، معجون ثوم.":
        "chicken breast, coleslaw, pickles, sauce, french fries, garlic paste.",
    "طبق سمك": "Fish Plate",
    "سلطة، طحينة، بطاطس (مقلية / مشوية).":
        "salad, tarator, potato (fried / grilled).",
    "طبق بعد التمرين ا": "Plate After Gym a",
    "طبق بعد التمرين ب": "Plate After Gym b",
    "(دجاج / سمك)، خضار مشوية، بطاطس مشوية.":
        "(chicken / fish), grilled veggies, grilled potato.",
    "لحم ، خضار مشوية، بطاطس مشوية.":
        "meat, grilled veggies, grilled potato.",
    "بطاطس مقلية" :"French Fries",
    "فردي":"single.",

    // Drinks
    "بيبسي (330ml)": "Pepsi (330ml)",
    "بيبسي (185ml)": "Pepsi (185ml)",
    "سفن أب (330ml)": "7up (330ml)",
    "سفن أب (185ml)": "7up (185ml)",
    "ميرندا": "Miranda",
    "دارك بلو": "Dark Blue",
    "بوم بوم": "Boom Boom",
    "ريد بُل": "Red Bull",
    "لبن عيران": "Laban Airan",
    "مستر جوسي":"Mr. Juicy",
    "ماء": "Water",
    "عادي / دايت":"regular / diet"
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


const conversionRate = 89000; // Example rate: 1 USD = 89,000 LBP

function convertPrices(targetCurrency) {
    const prices = document.querySelectorAll('.item-price');
    prices.forEach(price => {
        let originalPrice = parseFloat(price.getAttribute('data-original-price'));
        
        if (targetCurrency === 'USD') {
            let usdPrice = (originalPrice / conversionRate).toFixed(2);
            price.textContent = `$${usdPrice}`;
        } else {
            price.textContent = `${originalPrice} LBP`;
        }
    });
}

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
