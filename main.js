const header = $(`<header class="header"></header>`);
const main = $(`<main class="main"></main>`);
const footer = $(`<footer class="footer"></footer>`);
const body = $(`body`);
body.append(header, main, footer);

let favArr = [];

const R = {
  categories: [
    {
      mastHeadFood: {
        plates: [
          {
            title: "Retro Salad",
            Image: "Retro Salad.webp",
            Description: [
              "Wedge salads are essential steakhouse fare and have been for decades – pale green-white triangles of commodity iceberg drizzled in [creamy blue cheese dressing], with crumbles of bacon and bright red pops of cherry tomato, and pricks of green chive strewn across the top. Serve a wedge and a steak, or a wedge and a hamburger, or a wedge and a roast chicken, or just a wedge and a lot of warm bread…, and it’s a pleasant evening you’re having, a retro delight. Wedge is a salad for pleasure.",
              "This Retro Wedge Salad is great with small heads of romaine—often labeled “petite” or “artisan” romaine—if you can find them in your supermarket’s produce section.",
              "so According to the chefs quoted in the Times article, simple is the secret. Don’t go high end on the blue cheese crumbles. Don’t chop or shred the lettuce. And don’t mess with the crisp cut of iceberg. The only thing you can change, apparently, is the dressing. Mix your favorite, especially if you don’t do blue cheese.",
            ],
            Rate: "9.6/10",
          },
          {
            title: "Chicken Stew",
            Image: "Chicken-Stew.webp",
            Description: [
              "Anyone else here not a fan of slimy chicken skin??I don’t care how long it’s been slow cooked. And whether it’s a stew, in soup or Hainanese chicken.No chicken skin comes near my mouth unless it’s crispy or caramelised.When my mother reads this, I know she’s going to roll her eyes and think”she’s so childish!!”I don’t care. I love crispy skin. I want crispy skin. Give me all the crispy skin!!! 😂",
              "We nwwd to Slow cooked in the oven for crispy skin!Because I’m so anti-slimy chicken skin, I like to make my Chicken Stew in the oven rather than on the stove. And unless someone knows a magic trick, the only way to get crispy skin for a stew is in the oven.",
              "Cook it covered for part of the time, then uncover it to let the sauce thicken, make the chicken flesh super tender, the surface of the veggies and edges of the stew caramelise, and – most importantly in my world – to get that chicken skin super crispy!",
            ],
            Rate: "7.9/10",
          },
          {
            title: "Spaghetti Bolognese",
            Image: "Spaghetti-Bolognese.webp",
            Description: [
              "Everyone needs a great everyday Spaghetti Bolognese recipe, and this is mine! The Bolognese Sauce is rich, thick and has beautiful depth of flavour. It’s perfect for a quick midweek meal but even better if you can simmer it for a couple of hours! Serve it over pasta, stuff into jacket potatoes, make an epic Lasagna or Baked Spaghetti Pie!",
              "We Aussies have a thing about shortening words. Good day is g’day. Pavlova is Pav, afternoon is arvo, mosquitos are mozzies. Sharon is Shazz, Nagisa is Nagi (that’s yours truly).",
              "And here she is – my Spag Bol. Rich, thick, incredible flavour in the sauce even if you only have time for a quick 20 minute simmer. Though if you can slow cook for a couple of hours, it really takes it to another level!",
            ],
            Rate: "8/10",
          },
        {
            title: "Cornbread Salad",
            Image: "cornbread-salad.webp",
            Description: [
              "This easy cornbread salad recipe is basically a Southern Panzanella. Traditionally made as a layered salad, this southern staple is is loaded with colorful veggies, cheddar cheese, crispy crumbled cornbread and an herby lime buttermilk dressing.",
              "If you need a fun and impressive dish to take to the next family gathering or potluck that’s also super easy, this Cornbread Salad is it! It’s a layered salad in a trifle dish or large glass bowl with cubed cornbread, corn, beans, peppers, onion, tomato, cheese, and ranch dressing!",
              "I remember the first time I heard someone talking about a southern cornbread salad, and I thought they were crazy. However, after one bite I instantly knew what all the hype was about. It’s just good, despite the fact that it might seem a little weird. Like seriously good.",
            ],
            Rate: "9/10",
        },
          {
            title: "Satay Chicken Stir Fry",
            Image: 
              "Chicken-in-Satay-Sauce.webp",
            Description: [
              "This is a made from scratch chicken satay recipe, and there is every possibility you already have everything you need to make this. Similar to the Everyday Chicken Curry, the simplicity of the spices required will surprise you.",
              "For years, I’ve been trying to extract restaurant secrets from my local Chinese restaurant. Each time I go, I weave a question innocently into the conversation, trying to pick up one more tip. Ask too many, or be too obvious, and they clam up and shake their heads. “No, no, no”, he’d say, shaking his head.",
              "The Chinese take out version of Chicken in Satay Sauce is quite different from Malaysian, Thai and Indonesian Satay Sauce. It’s less coconut-y and less peanut-y (are they real words??), doesn’t have bits of crushed peanuts in the sauce, and has a stronger flavour from satay seasoning.As my local Chinese takeout owner says, there is actually no such thing as satay in Chinese cuisine. But over the years the popularity of satay generally has evolved such that almost every neighbourhood Chinese restaurant here in Australia has x, y and z in Satay Sauce on the menu.",
            ],
            Rate: "7.3/10",
          },
        ],
      },
    },
  ],
};

const dinnerSuggestions = {
    categories: [
        {
            Suggestions: {
            plates: [
              {
                title: "Beef chow mein",
            Image: ["Beef-chow-mein.webp", "Beef-chow-mein_2.webp"],
            Description: [
              "Here’s a great beef mince recipe for you that’s quick to make, economical and full of hidden vegetables so it’s a complete meal – Beef Chow Mein! It’s the beef version of everybody’s favourite Chicken Chow Mein, made with the convenience of ground beef.",
              "Here’s something new to try with that packet of beef mince you throw into your shopping cart every week! The beef is stir fried with chow mein sauce until it’s beautifully caramelised then tossed in a tangle of noodles and vegetables.A neat trick in today’s recipe is to scramble up an egg with the beef. It makes the beef bits stick to the noodles better, with the added bonus of upping the protein.",
              "Another bonus: chow mein actually has a vast amount of noodle-shaped vegetables hidden in the noodles. A carrot, 2 heaped cups of cabbage and a heaped cup of bean sprouts. That’s a good veg serving for a meal!",
            ],
            Rate: "10/10",
            addins: "Beef-Chow-Mein-Ingredients.webp",
              }, 
              {
                title: "California Spaghetti Salad",
            Image: [
              "CaliforniaSpaghetti.webp",
              "california-spaghetti-salad-2.jpg",
            ],
            Description: [
              "California Spaghetti Salad is a delicious pasta salad filled with fresh veggies and covered in a zesty Italian dressing.  With all those flavors and colors making one beautiful and tasty side dish, there is no doubt this will be the hit of your next gathering!I love delicious, cool salads in Spring and Summer like Creamy Pea, Cauliflower Broccoli, and Cucumber Tomato Salad. Enjoy your salad at your next BBQ!",
              "As the weather begins to change and warm up at this time of year, I find myself looking for recipes with a fresher and lighter feel.  I especially love quick and easy cold pasta salads! This California spaghetti salad only took 15 minutes to make, and it was a hit with my guests.  It is vegan-friendly, so it is great to bring to a potluck.",
              "This recipe is great to make ahead of time because it tastes better as it sits. It’s coated in a zesty Italian dressing (made from scratch) and all of the ingredients really soak up that flavor. All of the amazing veggies packed inside add so much texture, flavor, and color to the pasta. It is the perfect finishing touch to this pasta salad.",
            ],
            Rate: "10/10",
              }, 
              {
                title: "Carbonara",
                Image: ["Carbonara.webp", "Carbonara-2.webp"],
                Description: [
                  "This is a real spaghetti carbonara recipe made the traditional Italian way, without a single drop of cream. It relies solely on egg and cheese to make a luscious, creamy carbonara sauce. Food fit for a king (or queen!) that proves simple can be magnificent.",
                  "Carbonara is a beautiful, classic Italian pasta that’s so creamy, you’d swear there’s a good amount of cream in it. And indeed, there’s plenty of recipes that cheat by adding in cream.",
                  "But today, we’re making spaghetti carbonara properly, the authentic, traditional way. No cream. Just egg, cheese and a splash of starchy pasta cooking water.15 minutes later, THIS is the sight that will be in front of you. And you’ll make 60 million Italians beam with pride!",
                  "You can imagine eating that mouthful of chewy spaghetti bathed in the creamy sauce, right? Don’t dream about it. Make it a reality!! It’s so quick and easy it will blow your mind!",
                ],
                Rate: "8.5/10",
              }, 
              {
                title: "Charred Red Cabbage and Carrot Salad",
            Image: [
              "Charred-Red-Cabbage-and-Carrot-Salad.webp",
              "Carrot-Cabbage-2.jpg",],
            Description: [
              "This charred red cabbage and carrot salad, made by lightly charring vegetables under the broiler, is seasoned with garam masala, honey, and rice vinegar. It's surprisingly delicious—the slight bitterness from charring amplifies all the sweet and savory tastes. It makes a stunning side dish, or even a supper main dish all on its own, with only a fried egg and toast on the side.",
              "If you’re looking for a summer salad or side that’s easy to throw together and bring along, then a slaw is the answer.  While I’m a sucker for a good slaw any time of year, summer really is the perfect season for a slaw salad.  It’s fresh and crunchy and goes great with just about everything on your summer menu. ",
              "This one is an Asian inspired red cabbage and carrot slaw with an orange sesame dressing.  It’s a lighter, fresher and more flavorful alternative to the kind dressed with mayo, not to mention less soggy. Colorful and crunchy it’s a welcome addition to any barbecue, picnic or summer get-together.",
            ],
            Rate: "8.1/10",
              }, 
              {
                title: "Chicken Curry",
            Image: ["Chicken-Curry.webp", "Chicken-Curry_2.webp"],
            Description: [
              "Simple shouldn’t mean bland – and this Chicken Curry recipe knocks it out of the park! A mild, creamy coconut curry sauce made with just 5 ingredients (from scratch!), it tastes so good for something so quick, you will be amazed.",
              "Curries are notorious for lengthy ingredient lists to achieve the richly spiced sauces and punchy flavours. And while we’d all love to be able to whip up a from-scratch Tikka Masala and Butter Chicken whenever the craving hits us, it’s simply not viable.",
              ,
              "So today, I’m sharing the best SIMPLE chicken curry that I know. This recipe is a Western style curry – it’s not a traditional Indian curry, Thai curry, nor any other cuisine",
            ],
            Rate: "8/10",
              }, 
              {
                title: "Creamy Mushroom Pasta",
            Image: ["Creamy-Mushroom-Pasta.webp", "Creamy-Mushroom-2.webp"],
            Description: [
              "This Creamy Mushroom Pasta speaks for itself. A slippery tangle of pasta bathed in a creamy parmesan sauce loaded with buttery garlic mushrooms, it’s simple, quick, and utterly luxurious!",
              "How do you make a steaming bowl of pasta smothered in a creamy Alfredo sauce even better?Load it up with garlicky buttery mushrooms!!!🍄🍄🍄There’s few things in this world that can rival the feeling of satisfying a craving for a big bowl of creamy pasta. And this one not only hits the spot, it’s so good it’s going to have you doing the happy dance around the kitchen (because there’s every possibility that half of it never makes your plate!).And the best part? You’re just 15 minutes away from THIS being in front of you (in real life)",
              "You can imagine eating that mouthful of chewy spaghetti bathed in the creamy sauce, right? Don’t dream about it. Make it a reality!! It’s so quick and easy it will blow your mind!",
            ],
            Rate: "9.2/10",
              },],},},],
}

const quickDinner = {
    categories: [
        {
            Suggestions: {
            plates: [
              {
                title: "Chicken Chinese Noodle Soup",
            Image: [
              "ChickenChineseNoodleSoup.webp",
              "ChickenChineseNoodleSoup_2.webp",
            ],
            Description: [
              "Using this foolproof method of poaching chicken breast you will never again end up with a dry, overcooked chicken! Honestly, poaching chicken breast is one of the most difficult things to master, even the experts use thermometers to get it exactly right, or they use fancy techniques like sous-vide (sealing meat in vacuum packs and submerging them in hot water maintained at an exact temperature).",
              " The home method is so simple and no fail. All you do is bring water/stock to boil, place the chicken in water, bring it to boil again, remove from heat and leave it to cook in the residual heat. Everytime I make this, I stress that the chicken won’t cook through – but it always works! Always. The chicken breast is just cooked through, and is incredibly moist. It is so juicy you can eat it plain – and that’s saying something for chicken breast!",
              "Using this method also flavours the stock it’s cooked in which is an added benefit, so it’s perfect to use as the base for a noodle soup.Though the recipe shows that it takes 30 minutes to cook, only 5 minutes of this requires requires the stove to be on! This is a fantastic mid week meal that’s effortless but oh-so-tasty and satisfying. Hope you give it a go!",
            ],
            Rate: "7.1/10",
              }, 
              {
                title: "Crunchy chicken taco fingers",
            Image: [
              "Crunchy-chicken-taco-fingers.webp",
              "Crunchy-chicken-taco-fingers_2.webp",
            ],
            Description: [
              "Crunchy, oven baked chicken fingers with a Mexican seasoned crumb, designed for stuffing in tacos. Or dipping in your favourite sauce!",
              "Not that we could ever get sick of tacos – not even old school beef mince ones (shredded iceberg and crispy taco shells a must!) – but sometimes its nice to do something a little different.",
              "So here I am today, with an offering from something different. Specifically, something crunchy inside our tacos, rather than the usual saucy or shredded or grilled, something baked rather than fried (yet wow, look how golden they are!), and something that is in long finger-form designed to neatly fit one inside each taco so that the cook (that’d be you, and me) only needs to crumb 16 long strips rather than a gazillion little pieces.",
            ],
            Rate: "7.8/10",
              }, 
              {
                title: "Chicken Kiev",
            Image: ["Chicken-Kiev_2-1.webp", "Chicken-Kiev_2.webp"],
            Description: [
              "If you’re wondering what Chicken Kiev is, all you need to know is this: it’s crumbed and fried chicken stuffed with melting garlic butter. Totally retro, totally simple but totally fabulous and quite possibly the greatest use of chicken breast, ever!",
              "The trick to ensuring the melted butter stays firmly sealed inside? Partially freezing the chicken so the chicken is keep firmly in place. Yep, it’s that easy! {Bonus no deep frying option provided",
              "Stuffed things are good things. Dumplings. Profiteroles. Samosas. The anticipation of cutting into something that looks so plain and unassuming on the outside to reveal something wickedly good on the inside, is like opening a tantalising birthday present. Of all the stuffed chicken dishes in this world, Chicken Kiev is surely the king of them all! Stuffed with rich garlic butter, this Russian beauty is all kinds of incredible. Cutting through that crunchy, golden breadcrumb crust and into the juicy chicken flesh, a river of molten butter oozes from the meat across your plate – it’s a heart-stopping moment of joy that few things in this world can rival. In fact, right now I can’t think of anything that does!!!",
            ],
            Rate: "8.4/10",
              }, 
              {
                title: "Penne all’Arrabbiata",
                Image: ["Penne-Arrabbiata.webp", "Penne-Arrabbiata-2.webp"],
                Description: [
                  "So, I am not sure that one line summary of today’s recipe will go anywhere beyond my little corner of the internet. But that is my articulate description of the greatness that is Penne all’Arrabbiata! Simple made interesting with a good kick of chilli and healthy dose of garlic. The Italians know a thing or two about making simple pastas great!By way of background, “Arrabbiata” means “angry” in Italian. So this pasta is said to be named as such in reference to its fiery nature!",
                  "But fear not. Yes, this is a pasta that is meant to be spicy. But it’s fundamentally a great tomato pasta that you can make as spicy as you’d like. Or not. It’s easy to adjust – just make the sauce with less chilli to start with. Taste it during the simmer time. Add more if you’re feeling bold! ",
                ],
                Rate: "8.8/10",
              }, 
              {
                title: "Chicken Fajitas",
            Image: ["Chicken-Fajitas.webp", "Chicken-Fajitas_2.webp"],
            Description: [
              "These Chicken Fajitas have a terrific flavour hit from a really great Fajita marinade. Served alongside charred capsicum and onion, stuff them inside warm tortillas for a tasty Mexican Fajita fiesta for dinner tonight!",
              "The secret ingredient in this marinade is orange juice. No, it doesn’t taste of oranges once cooked. When mixed with other savoury ingredients (lime, garlic, cumin, olive oil) then cooked, you end up with an incredibly flavourful chicken that’s savoury, fragrant and balanced with a hint of sweet.",
              "Fruit juice is used in a wide range of marinades, from Cuban Mojo marinades to Mexican Pork Carnitas, to Korean Marinades to Hawaiian. It injects with subtle flavour and also the sugar brines like salt so proteins retain juiciness when cooked. Did you know that? There’s your cooking trivia for the day!",
            ],
            Rate: "9/10",
              }, 
              {
                title: "Sticky Chicken Wings",
                Image: [
                  "Sticky-Chinese-Chicken.webp",
                  "Sticky-Chinese-Chicken-Wings-2.webp",
                ],
                Description: [
                  "These Sticky Chinese Chicken Wings are so moorish, once you start you won’t be able to stop!This is my family recipe for Sticky Chinese Chicken Wings which has been tweaked and perfected over years, with input from everyone (mother, brother, sister and me) and many heated debates! We finally agreed this is The Recipe and have been loyal to it for years and I don’t see it changing soon. After all, why tinker with perfection?",
                  "The marinade for this recipe is a perfect balance of slightly spicy (very mild), salty, sweet with a touch of tang, and the subtle fragrance of Chinese Five Spice from hoisin sauce as well as five spice powder.",
                  "We have a rule that it is acceptable to omit one ingredient from the marinade, but if you are missing more than one, then don’t bother making it……. 😂 However, it IS acceptable to substitute with similar ingredients, and I’ve provided a fairly lengthy list of “acceptable” substitutions in the recipe!",
                ],
                Rate: "8.2/10",
              },],},},],
}



const Recipes = {
  header: "Try Our Deliciously Food",
  intro: [
    " Choose What You Want From Recipes",
    "What to make this week, as chosen by readers!",
  ],
  imgSrc: "Portrait-of-a-cat-with-whiskers-visible.webp",
  categories: [
    {
      Spaghetti: {
        plates: [
          {
            title: "Beef chow mein",
            Image: ["Beef-chow-mein.webp", "Beef-chow-mein_2.webp"],
            Description: [
              "Here’s a great beef mince recipe for you that’s quick to make, economical and full of hidden vegetables so it’s a complete meal – Beef Chow Mein! It’s the beef version of everybody’s favourite Chicken Chow Mein, made with the convenience of ground beef.",
              "Here’s something new to try with that packet of beef mince you throw into your shopping cart every week! The beef is stir fried with chow mein sauce until it’s beautifully caramelised then tossed in a tangle of noodles and vegetables.A neat trick in today’s recipe is to scramble up an egg with the beef. It makes the beef bits stick to the noodles better, with the added bonus of upping the protein.",
              "Another bonus: chow mein actually has a vast amount of noodle-shaped vegetables hidden in the noodles. A carrot, 2 heaped cups of cabbage and a heaped cup of bean sprouts. That’s a good veg serving for a meal!",
            ],
            Rate: "10/10",
            addins: "Beef-Chow-Mein-Ingredients.webp",
          },
          {
            title: "Spaghetti alla Puttanesca",
            Image: ["Spaghetti-Puttanesca.webp", "Spaghetti-Puttanesca_2.webp"],
            Description: [
              "Spaghetti alla Puttanesca is a traditional Italian pasta from Naples that’s quick to put together from pantry staples. If you have canned tomatoes, garlic, olives, anchovies and capers in your cupboard, you can knock out this simple but flavourful sauce in a flash. It’s a stellar emergency meal everyone should know, with a “saucy” backstory of its own!",
              "There are various colourful stories explaining how this dish came to be, and how Puttanesca pasta got its name. “Puttanesca” roughly translates to “working girls” in Italian (that’s a politically correct term I’m using there!) One tale tells how this dish was invented in the brothels of Naples so the smells wafting from the kitchen would entice potential … errr, clients. Another story claims this pasta was a quick and simple dish ladies of the Neapolitan night could throw together in a hurry in amongst their busy schedules.Does this kind of talk on a G-rated food blog make you blush? 😉",
              "Whatever the origins, today this is considered a classic and staple Italian pasta recipe. It’s budget-friendly, easy and quick to make, yet delicious enough to woo family and friends (or indeed, “paying customers” … 😉)",
            ],
            Rate: "dvds",
          },
          {
            title: "Spicy Chilli Prawn Pasta",
            Image: ["Spicy-Prawn-Pasta.webp", "Spicy-Prawn-Pasta-2.webp"],
            Description: [
              "Pasta tossed with a rich tomato sauce with a tingle of spicy heat and plump prawns (shrimp). This Spicy Chilli Prawn Pasta is a total crowd pleaser to make all year round, and the only thing that requires chopping is parsley. You can have this on the table in just 15 MINUTES!!!",
              "Being an Aussie fortunate enough to have many readers from all around the world – and I really do many from all around the world (!!!!) – one of the things I’m very mindful of is sharing a selection of recipes suited to varying climates. And right now – January and February – are always the toughest months because the seasonal difference is at its most extreme. When I’m sweltering in the height of summer when it’s 40C/104F without a whisper of a breeze (reminder: I live in a house with no air conditioning!!) and I know it’s minus-something where some of you are, and you’re shovelling snow off your driveway so you can drive to work, I want to share winter comfort foods to warm your soul. But I also want to share the quick-cook fresh meals for me and all the other Aussies and readers enjoying warmer / stinking hot weather.",
              "So newcomers to my site during Jan/Feb each year are probably very baffled when they see my latest recipes wildly swinging between hot winter soups and stews and summery salads and cocktails!Thats a long winded way of leading into why I’m happy to be sharing a (fairly) climate neutral recipe today!!! Sure, pasta is probably not the first thing you think of when it’s really REALLY stinking hot. But generally, I’ll make quick-cook pastas like this Spicy Chilli Prawn Pasta all year round.",
            ],
            Rate: "9/10",
          },
          {
            title: "Penne all’Arrabbiata",
            Image: ["Penne-Arrabbiata.webp", "Penne-Arrabbiata-2.webp"],
            Description: [
              "So, I am not sure that one line summary of today’s recipe will go anywhere beyond my little corner of the internet. But that is my articulate description of the greatness that is Penne all’Arrabbiata! Simple made interesting with a good kick of chilli and healthy dose of garlic. The Italians know a thing or two about making simple pastas great!By way of background, “Arrabbiata” means “angry” in Italian. So this pasta is said to be named as such in reference to its fiery nature!",
              "But fear not. Yes, this is a pasta that is meant to be spicy. But it’s fundamentally a great tomato pasta that you can make as spicy as you’d like. Or not. It’s easy to adjust – just make the sauce with less chilli to start with. Taste it during the simmer time. Add more if you’re feeling bold! ",
            ],
            Rate: "8.8/10",
          },
          {
            title: "Carbonara",
            Image: ["Carbonara.webp", "Carbonara-2.webp"],
            Description: [
              "This is a real spaghetti carbonara recipe made the traditional Italian way, without a single drop of cream. It relies solely on egg and cheese to make a luscious, creamy carbonara sauce. Food fit for a king (or queen!) that proves simple can be magnificent.",
              "Carbonara is a beautiful, classic Italian pasta that’s so creamy, you’d swear there’s a good amount of cream in it. And indeed, there’s plenty of recipes that cheat by adding in cream.",
              "But today, we’re making spaghetti carbonara properly, the authentic, traditional way. No cream. Just egg, cheese and a splash of starchy pasta cooking water.15 minutes later, THIS is the sight that will be in front of you. And you’ll make 60 million Italians beam with pride!",
              "You can imagine eating that mouthful of chewy spaghetti bathed in the creamy sauce, right? Don’t dream about it. Make it a reality!! It’s so quick and easy it will blow your mind!",
            ],
            Rate: "8.5/10",
          },
          {
            title: "Spaghetti Bolognese",
            Image: ["Spaghetti-Bolognese.webp", "Spaghetti-Bolognese-2.webp"],
            Description: [
              "Everyone needs a great everyday Spaghetti Bolognese recipe, and this is mine! The Bolognese Sauce is rich, thick and has beautiful depth of flavour. It’s perfect for a quick midweek meal but even better if you can simmer it for a couple of hours! Serve it over pasta, stuff into jacket potatoes, make an epic Lasagna or Baked Spaghetti Pie!",
              "We Aussies have a thing about shortening words. Good day is g’day. Pavlova is Pav, afternoon is arvo, mosquitos are mozzies. Sharon is Shazz, Nagisa is Nagi (that’s yours truly).",
              "And here she is – my Spag Bol. Rich, thick, incredible flavour in the sauce even if you only have time for a quick 20 minute simmer. Though if you can slow cook for a couple of hours, it really takes it to another level!",
            ],
            Rate: "8/10",
          },
          {
            title: "Creamy Mushroom Pasta",
            Image: ["Creamy-Mushroom-Pasta.webp", "Creamy-Mushroom-2.webp"],
            Description: [
              "This Creamy Mushroom Pasta speaks for itself. A slippery tangle of pasta bathed in a creamy parmesan sauce loaded with buttery garlic mushrooms, it’s simple, quick, and utterly luxurious!",
              "How do you make a steaming bowl of pasta smothered in a creamy Alfredo sauce even better?Load it up with garlicky buttery mushrooms!!!🍄🍄🍄There’s few things in this world that can rival the feeling of satisfying a craving for a big bowl of creamy pasta. And this one not only hits the spot, it’s so good it’s going to have you doing the happy dance around the kitchen (because there’s every possibility that half of it never makes your plate!).And the best part? You’re just 15 minutes away from THIS being in front of you (in real life)",
              "You can imagine eating that mouthful of chewy spaghetti bathed in the creamy sauce, right? Don’t dream about it. Make it a reality!! It’s so quick and easy it will blow your mind!",
            ],
            Rate: "9.2/10",
          },
          {
            title: "Lasagna!",
            Image: ["Lasagne.webp", "Lasagne-2.webp"],
            Description: [
              "One of the most loved foods in the world is finally here! This is a beautiful Italian Lasagna with layers of slow cooked Ragù Bolognese and Besciamella cheese sauce.  Though patience is required, it is quite straight forward to make as you will see in the recipe video!",
              "Lasagna, lasagna. How I love thee! It is possibly one of the most loved foods in the whole wide world, and understandably so. There is just something so sentimental about lasagna, so comforting. It evokes images of of gatherings with family and friends all around the world. It is the sort of food that is like a big warm hug, and so more-ish you want to keep digging in until you burst.",
              "And if you’ve never tried a homemade one before, that needs to change! If you can make spaghetti bolognese, you can make lasagne. It just requires a wee bit more patience.OK, bit more than a wee bit more patience. But it’s totally worth it. A real homemade Lasagna is epic.",
            ],
            Rate: "10/10",
          },
          
        ],
      },
    },
    {
      Chicken: {
        plates: [
          {
            title: "Crunchy chicken taco fingers",
            Image: [
              "Crunchy-chicken-taco-fingers.webp",
              "Crunchy-chicken-taco-fingers_2.webp",
            ],
            Description: [
              "Crunchy, oven baked chicken fingers with a Mexican seasoned crumb, designed for stuffing in tacos. Or dipping in your favourite sauce!",
              "Not that we could ever get sick of tacos – not even old school beef mince ones (shredded iceberg and crispy taco shells a must!) – but sometimes its nice to do something a little different.",
              "So here I am today, with an offering from something different. Specifically, something crunchy inside our tacos, rather than the usual saucy or shredded or grilled, something baked rather than fried (yet wow, look how golden they are!), and something that is in long finger-form designed to neatly fit one inside each taco so that the cook (that’d be you, and me) only needs to crumb 16 long strips rather than a gazillion little pieces.",
            ],
            Rate: "7.8/10",
          },
          {
            title: "Chicken Fajitas",
            Image: ["Chicken-Fajitas.webp", "Chicken-Fajitas_2.webp"],
            Description: [
              "These Chicken Fajitas have a terrific flavour hit from a really great Fajita marinade. Served alongside charred capsicum and onion, stuff them inside warm tortillas for a tasty Mexican Fajita fiesta for dinner tonight!",
              "The secret ingredient in this marinade is orange juice. No, it doesn’t taste of oranges once cooked. When mixed with other savoury ingredients (lime, garlic, cumin, olive oil) then cooked, you end up with an incredibly flavourful chicken that’s savoury, fragrant and balanced with a hint of sweet.",
              "Fruit juice is used in a wide range of marinades, from Cuban Mojo marinades to Mexican Pork Carnitas, to Korean Marinades to Hawaiian. It injects with subtle flavour and also the sugar brines like salt so proteins retain juiciness when cooked. Did you know that? There’s your cooking trivia for the day!",
            ],
            Rate: "9/10",
          },
          {
            title: "Chicken Curry",
            Image: ["Chicken-Curry.webp", "Chicken-Curry_2.webp"],
            Description: [
              "Simple shouldn’t mean bland – and this Chicken Curry recipe knocks it out of the park! A mild, creamy coconut curry sauce made with just 5 ingredients (from scratch!), it tastes so good for something so quick, you will be amazed.",
              "Curries are notorious for lengthy ingredient lists to achieve the richly spiced sauces and punchy flavours. And while we’d all love to be able to whip up a from-scratch Tikka Masala and Butter Chicken whenever the craving hits us, it’s simply not viable.",
              ,
              "So today, I’m sharing the best SIMPLE chicken curry that I know. This recipe is a Western style curry – it’s not a traditional Indian curry, Thai curry, nor any other cuisine",
            ],
            Rate: "8/10",
          },
          {
            title: "Chicken Chinese Noodle Soup",
            Image: [
              "ChickenChineseNoodleSoup.webp",
              "ChickenChineseNoodleSoup_2.webp",
            ],
            Description: [
              "Using this foolproof method of poaching chicken breast you will never again end up with a dry, overcooked chicken! Honestly, poaching chicken breast is one of the most difficult things to master, even the experts use thermometers to get it exactly right, or they use fancy techniques like sous-vide (sealing meat in vacuum packs and submerging them in hot water maintained at an exact temperature).",
              " The home method is so simple and no fail. All you do is bring water/stock to boil, place the chicken in water, bring it to boil again, remove from heat and leave it to cook in the residual heat. Everytime I make this, I stress that the chicken won’t cook through – but it always works! Always. The chicken breast is just cooked through, and is incredibly moist. It is so juicy you can eat it plain – and that’s saying something for chicken breast!",
              "Using this method also flavours the stock it’s cooked in which is an added benefit, so it’s perfect to use as the base for a noodle soup.Though the recipe shows that it takes 30 minutes to cook, only 5 minutes of this requires requires the stove to be on! This is a fantastic mid week meal that’s effortless but oh-so-tasty and satisfying. Hope you give it a go!",
            ],
            Rate: "7.1/10",
          },
          {
            title: "Chicken Stew",
            Image: ["Chicken-Stew.webp", "Chicken-Stew_2.webp"],
            Description: [
              "Anyone else here not a fan of slimy chicken skin??I don’t care how long it’s been slow cooked. And whether it’s a stew, in soup or Hainanese chicken.No chicken skin comes near my mouth unless it’s crispy or caramelised.When my mother reads this, I know she’s going to roll her eyes and think”she’s so childish!!”I don’t care. I love crispy skin. I want crispy skin. Give me all the crispy skin!!! 😂",
              "We nwwd to Slow cooked in the oven for crispy skin!Because I’m so anti-slimy chicken skin, I like to make my Chicken Stew in the oven rather than on the stove. And unless someone knows a magic trick, the only way to get crispy skin for a stew is in the oven.",
              "Cook it covered for part of the time, then uncover it to let the sauce thicken, make the chicken flesh super tender, the surface of the veggies and edges of the stew caramelise, and – most importantly in my world – to get that chicken skin super crispy!",
            ],
            Rate: "7.9/10",
          },
          {
            title: "Satay Chicken Stir Fry",
            Image: [
              "Chicken-in-Satay-Sauce.webp",
              "Chicken-in-Satay-Sauce-2.webp",
            ],
            Description: [
              "This is a made from scratch chicken satay recipe, and there is every possibility you already have everything you need to make this. Similar to the Everyday Chicken Curry, the simplicity of the spices required will surprise you.",
              "For years, I’ve been trying to extract restaurant secrets from my local Chinese restaurant. Each time I go, I weave a question innocently into the conversation, trying to pick up one more tip. Ask too many, or be too obvious, and they clam up and shake their heads. “No, no, no”, he’d say, shaking his head.",
              "The Chinese take out version of Chicken in Satay Sauce is quite different from Malaysian, Thai and Indonesian Satay Sauce. It’s less coconut-y and less peanut-y (are they real words??), doesn’t have bits of crushed peanuts in the sauce, and has a stronger flavour from satay seasoning.As my local Chinese takeout owner says, there is actually no such thing as satay in Chinese cuisine. But over the years the popularity of satay generally has evolved such that almost every neighbourhood Chinese restaurant here in Australia has x, y and z in Satay Sauce on the menu.",
            ],
            Rate: "7.3/10",
          },
          {
            title: "Sticky Chicken Wings",
            Image: [
              "Sticky-Chinese-Chicken.webp",
              "Sticky-Chinese-Chicken-Wings-2.webp",
            ],
            Description: [
              "These Sticky Chinese Chicken Wings are so moorish, once you start you won’t be able to stop!This is my family recipe for Sticky Chinese Chicken Wings which has been tweaked and perfected over years, with input from everyone (mother, brother, sister and me) and many heated debates! We finally agreed this is The Recipe and have been loyal to it for years and I don’t see it changing soon. After all, why tinker with perfection?",
              "The marinade for this recipe is a perfect balance of slightly spicy (very mild), salty, sweet with a touch of tang, and the subtle fragrance of Chinese Five Spice from hoisin sauce as well as five spice powder.",
              "We have a rule that it is acceptable to omit one ingredient from the marinade, but if you are missing more than one, then don’t bother making it……. 😂 However, it IS acceptable to substitute with similar ingredients, and I’ve provided a fairly lengthy list of “acceptable” substitutions in the recipe!",
            ],
            Rate: "8.2/10",
          },
          {
            title: "Chicken Kiev",
            Image: ["Chicken-Kiev_2-1.webp", "Chicken-Kiev_2.webp"],
            Description: [
              "If you’re wondering what Chicken Kiev is, all you need to know is this: it’s crumbed and fried chicken stuffed with melting garlic butter. Totally retro, totally simple but totally fabulous and quite possibly the greatest use of chicken breast, ever!",
              "The trick to ensuring the melted butter stays firmly sealed inside? Partially freezing the chicken so the chicken is keep firmly in place. Yep, it’s that easy! {Bonus no deep frying option provided",
              "Stuffed things are good things. Dumplings. Profiteroles. Samosas. The anticipation of cutting into something that looks so plain and unassuming on the outside to reveal something wickedly good on the inside, is like opening a tantalising birthday present. Of all the stuffed chicken dishes in this world, Chicken Kiev is surely the king of them all! Stuffed with rich garlic butter, this Russian beauty is all kinds of incredible. Cutting through that crunchy, golden breadcrumb crust and into the juicy chicken flesh, a river of molten butter oozes from the meat across your plate – it’s a heart-stopping moment of joy that few things in this world can rival. In fact, right now I can’t think of anything that does!!!",
            ],
            Rate: "8.4/10",
          },
        ],
      },
    },
    {
      Salads: {
        plates: [
          {
            title: "Cornbread Salad",
            Image: ["cornbread-salad.webp"],
            Description: [
              "This easy cornbread salad recipe is basically a Southern Panzanella. Traditionally made as a layered salad, this southern staple is is loaded with colorful veggies, cheddar cheese, crispy crumbled cornbread and an herby lime buttermilk dressing.",
              "If you need a fun and impressive dish to take to the next family gathering or potluck that’s also super easy, this Cornbread Salad is it! It’s a layered salad in a trifle dish or large glass bowl with cubed cornbread, corn, beans, peppers, onion, tomato, cheese, and ranch dressing!",
              "I remember the first time I heard someone talking about a southern cornbread salad, and I thought they were crazy. However, after one bite I instantly knew what all the hype was about. It’s just good, despite the fact that it might seem a little weird. Like seriously good.",
            ],
            Rate: "9/10",
          },
          {
            title: "Green Goddess Salad",
            Image: [
              "Green_Goddess_Dressing.webp",
              "Green-Goddess-Salad-Recipe-2.jpg",
            ],
            Description: [
              "This green goddess salad is one of those salads that is not boring at all and will get the whole family excited to dip tortilla chips in their salad! It’s a fast and simple cabbage salad that results in loads of great flavor.",
              "With the right combination of fresh ingredients and a stellar dressing to tie everything together, salads are my kind of comfort food. Not only do they deliver on both flavor and texture, but they also leave you feeling lively and refreshed. This quick and easy dish is destined to join the ranks of your top favorite salad recipes!",
              "Vibrant green vegetables give this salad its signature color while the tomato, red onion and sunflower seeds sprinkle in some nice variation. The dressing coats each component with a lightweight layer of tangy, herby, garlicky goodness. It all comes together to form heaven in a serving bowl! Nothing beats a big bite that combines a little bit of everything.",
            ],
            Rate: "9.3/10",
          },
          {
            title: "California Spaghetti Salad",
            Image: [
              "CaliforniaSpaghetti.webp",
              "california-spaghetti-salad-2.jpg",
            ],
            Description: [
              "California Spaghetti Salad is a delicious pasta salad filled with fresh veggies and covered in a zesty Italian dressing.  With all those flavors and colors making one beautiful and tasty side dish, there is no doubt this will be the hit of your next gathering!I love delicious, cool salads in Spring and Summer like Creamy Pea, Cauliflower Broccoli, and Cucumber Tomato Salad. Enjoy your salad at your next BBQ!",
              "As the weather begins to change and warm up at this time of year, I find myself looking for recipes with a fresher and lighter feel.  I especially love quick and easy cold pasta salads! This California spaghetti salad only took 15 minutes to make, and it was a hit with my guests.  It is vegan-friendly, so it is great to bring to a potluck.",
              "This recipe is great to make ahead of time because it tastes better as it sits. It’s coated in a zesty Italian dressing (made from scratch) and all of the ingredients really soak up that flavor. All of the amazing veggies packed inside add so much texture, flavor, and color to the pasta. It is the perfect finishing touch to this pasta salad.",
            ],
            Rate: "10/10",
          },
          {
            title: "Waldorf Salad",
            Image: ["waldorf-salad.webp", "Waldorf-Salad-2.jpgs"],
            Description: [
              "This Waldorf salad belongs on every holiday dinner table. It’s a delicious symphony of crisp apples, celery, grapes, and crunchy walnuts, tossed in a tangy-sweet, creamy dressing that adds the perfect refreshing touch.",
              "It’s a seasonal twist on a fruit salad. If you’re a fan of fruit salads in the summer, think of this as your fall and winter fruit salad that’s perfect for holiday gatherings. It features crisp apples, juicy grapes, and crunchy walnuts.",
              "and of course You can customize it to your liking. The original version was created in the Waldorf Astoria Hotel in New York (during the 1800’s) and only included apples, celery, and mayonnaise. But it’s endlessly adaptable! So I’ve listed some creative ideas below if you’re feeling adventurous.",
            ],
            Rate: "10/10",
          },
          {
            title: "Retro Salad",
            Image: ["Retro Salad.webp"],
            Description: [
              "Wedge salads are essential steakhouse fare and have been for decades – pale green-white triangles of commodity iceberg drizzled in [creamy blue cheese dressing], with crumbles of bacon and bright red pops of cherry tomato, and pricks of green chive strewn across the top. Serve a wedge and a steak, or a wedge and a hamburger, or a wedge and a roast chicken, or just a wedge and a lot of warm bread…, and it’s a pleasant evening you’re having, a retro delight. Wedge is a salad for pleasure.",
              "This Retro Wedge Salad is great with small heads of romaine—often labeled “petite” or “artisan” romaine—if you can find them in your supermarket’s produce section.",
              "so According to the chefs quoted in the Times article, simple is the secret. Don’t go high end on the blue cheese crumbles. Don’t chop or shred the lettuce. And don’t mess with the crisp cut of iceberg. The only thing you can change, apparently, is the dressing. Mix your favorite, especially if you don’t do blue cheese.",
            ],
            Rate: "9.6/10",
          },
          {
            title: "Charred Red Cabbage and Carrot Salad",
            Image: [
              "Charred-Red-Cabbage-and-Carrot-Salad.webp",
              "Carrot-Cabbage-2.jpg",
            ],
            Description: [
              "This charred red cabbage and carrot salad, made by lightly charring vegetables under the broiler, is seasoned with garam masala, honey, and rice vinegar. It's surprisingly delicious—the slight bitterness from charring amplifies all the sweet and savory tastes. It makes a stunning side dish, or even a supper main dish all on its own, with only a fried egg and toast on the side.",
              "If you’re looking for a summer salad or side that’s easy to throw together and bring along, then a slaw is the answer.  While I’m a sucker for a good slaw any time of year, summer really is the perfect season for a slaw salad.  It’s fresh and crunchy and goes great with just about everything on your summer menu. ",
              "This one is an Asian inspired red cabbage and carrot slaw with an orange sesame dressing.  It’s a lighter, fresher and more flavorful alternative to the kind dressed with mayo, not to mention less soggy. Colorful and crunchy it’s a welcome addition to any barbecue, picnic or summer get-together.",
            ],
            Rate: "8.1/10",
          },
          {
            title: "Pecan Chicken Salad",
            Image: ["Pecan Chicken Salad.webp"],
            Description: [
              "The Pecan Chicken Salad growing up, chicken salad was something we had pretty often. It was affordable and the way Mom made it, it ended up creating two meals. She’d cook a whole chicken, then use the broth and part of the meat to make chicken and rice. Then she’d use the remaining chicken to make chicken salad. Double whammy!",
              "Now there are as many ways to make chicken salad as Carter’s has liver pills. (Have y’all ever heard that phrase?) And most of them are pretty delicious. My preferred recipe actually depends on my mood. Sometimes I like my chicken salad with a little curry powder in it. Other times I want it a little sweet with some grapes or apples. And then sometimes, I want it simple and straightforward – kinda like my mom makes it. This is that recipe: simple, straightforward, and crazy delicious. Let’s get started…",
              "The recipe simply calls for chopped cooked chicken. It’s vague for a reason. The reality is that you can use most any cooked chicken for this recipe. Boiled, roasted, even grocery store rotisserie chickens work brilliantly. I’ve even used leftover fried chicken with the breading picked off to make chicken salad. Of course each of the methods will impart some different flavors, but I find that kinda fun. ",
            ],
            Rate: "7/10",
          },
          {
            title: "Greek Pasta Salad",
            Image: ["greek-pasta-salad.webp", "Greek-Pasta-Salad-Recipe-2.jpg"],
            Description: [
              "Greek Pasta Salad is an easy side, perfect to prep ahead and a hit at every party or potluck! Tender pasta, ripe juicy tomatoes, crisp cucumbers, feta cheese and olives are tossed in a Greek dressing for the perfect make ahead side dish.",
              "I started playing around with the my original Greek Salad recipe and made it into a pasta salad.  The combination of ripe juicy tomatoes, crisp cucumbers, red onions, feta cheese, olives and pasta tossed with a delicious greek dressing is crazy good and makes the perfect meal or side dish! as This Greek pasta salad is super simple to make and has the most delicious dressing! It’s light, fresh, and perfect for summer entertaining and potlucks!",
              ,
              "Inspired by my favorite Greek salad recipe, this easy pasta salad has fresh tomatoes, red onion, olives, and feta cheese. It’s simple to shop for and quick to make.Serve it as a side dish, or turn it into dinner and top it with grilled chicken or your favorite protein. For more incredible pasta salad recipes, see our easy pasta salad, orzo salad, or this Italian pasta salad with salami.",
            ],
            Rate: "8.6/10",
          },
        ],
      },
    },
  ],
};

const FoodRecipesPage = () => {
  const SiteTitle = $(`<div class="site-title"> </div>`);
  header.append(SiteTitle);
  const logo = $(
    `<div class="logo"> Recipe<span class="tin">Tin</span>Eats </div>`
  );
  SiteTitle.append(logo);
  const switch_fav_search = $(`<div class="filter_fav_search"> </div>`);
  header.append(switch_fav_search);
  const foodSearch = $(`<div id="foodSearch"></div>`);
  const inputSearch = $(
    `<input type="search" id="search" name="foodSearch" placeholder="   Search Recipes ...">`
  );
  foodSearch.append(inputSearch);
  const switchBtn = $(`<div class ="switch"> </div>`);
 
  const label = $(`<label class="switch"></label>`)
  switchBtn.append(label)
  const input = $(` <input type="checkbox">`)
  const span = $(`<span class="slider"></span>`);
  label.append(input ,span )
//   const ButtonFilter = $(
//     `<button id="filter"> <img src="filter.svg" alt="filter" /></button>`
//   );
//   filter.append(ButtonFilter);
  const favorite = $(`<div class ="favorite">  </div>`);
  const ButtonFavorite = $(
    `<button id="favorite"> <img src="heart-fill.svg" alt="Favorite" /></button>`
  );
  favorite.append(ButtonFavorite);

  ButtonFavorite.on("click", function () {
    FavoritePage();
  });

  switch_fav_search.append(foodSearch, switchBtn, favorite);
  const mastHead = $(`<div class="mastHead"> </div>`);
  main.append(mastHead);
  const divTitle = $(`<div> </div>`);
  const divButton = $(`<div> </div>`);
  mastHead.append(divTitle, divButton);
  const title = $(`<h1 class="title_mastHead">${Recipes["header"]}</h1>`);
  divTitle.append(title);
  const SeeOurCategory = $(
    `<button class="SeeOurCategory">See Our Category</button>`
  );
  divButton.append(SeeOurCategory);
  const divIntro = $(`<div class="intro"></div>`);
  main.append(divIntro);
  const HeaderIntro = $(`<h3 class="ChooseRecipe">${Recipes["intro"][0]}</h3>`);
  const paraInto = $(`<p class="makeRecipe">${Recipes["intro"][1]}</p>`);
  divIntro.append(HeaderIntro, paraInto);

  const intro = $(`<div class="intro"></div>`);
  main.append(intro);
  /////////////////////////////////////////////////////////////////////
  const ContainerImgs = $(`<div class="ContainerImgs"></div>`);
  main.append(ContainerImgs);
  const bigImage = $(`<div class="bigImage"></div>`);
  ContainerImgs.append(bigImage);
  const hyperLink = $(`<a></a>`);
  bigImage.append(hyperLink);
  const Image = $(
    `<img class="BigsourceImg" src="${R["categories"][0]["mastHeadFood"]
        ["plates"][0]["Image"]}" alt="${R["categories"][0]["mastHeadFood"]
            ["plates"][0]["title"][0]}" />`
  );
  hyperLink.append(Image);
  const titleBigImg = $(` <div class="titleBigImg"></div>`);
  bigImage.append(titleBigImg);
  const para = $(` <p>${R["categories"][0]["mastHeadFood"]
    ["plates"][0]["title"]}</p>`);
  titleBigImg.append(para);

  hyperLink.on("click", function () {
    const img = $(`.BigsourceImg`).attr("src");
    const title = $(`.titleBigImg`).text();

    FoodRecipeDetails(title, img);
  });
  /////////////////////////////////////////////////////////////////

  const smallImages = $(`<div class="smallImages"></div>`);
  ContainerImgs.append(smallImages);
  for(let i = 1 ;i <R["categories"][0]["mastHeadFood"]["plates"].length ; i++ ){
    const item = $(`<div class="item3"></div>`);
    smallImages.append(item);
    const hyperLinkSmallImg = $(`<a class ="a"></a>`);
    item.append(hyperLinkSmallImg);
    const ImageSmallimg = $(
      `<img class="imgSmall" src="${R["categories"][0]["mastHeadFood"]
        ["plates"][i]["Image"]}" alt="${R["categories"][0]["mastHeadFood"]
            ["plates"][i]["title"]}" />`
    );
    hyperLinkSmallImg.append(ImageSmallimg);
    const titleSmallImg = $(`<div class="titleSmallImg">`);
    item.append(titleSmallImg);
    const paraSmall = $(` <p>${R["categories"][0]["mastHeadFood"]
        ["plates"][i]["title"]}</p>`);
    titleSmallImg.append(paraSmall);

  };

  $(".item3").each(function () {
    $(this).click(function () {
      const img = $(this).find(".imgSmall").attr("src");
      console.log(img);
      const title = $(this).find(".titleSmallImg").text();
      console.log(title);
      FoodRecipeDetails(title, img);
    });
  });

  //////////////////////////////////////////////////////////////////////////////////
  /// Section Grid

  const SectionOfRecipeCard = $(`<div class="SectionOfRecipeCard"></div>`);
  main.append(SectionOfRecipeCard);
  const divOfsectionOfCards = $(`<div></div>`);
  SectionOfRecipeCard.append(divOfsectionOfCards);
  const paraOfsectionOfCards = $(
    `<p class="paraOfsectionOfCards">Some quick dinner suggestions!</p>`
  );
  divOfsectionOfCards.append(paraOfsectionOfCards);

  const gridCards = $(`<div class="gridCards"></div>`);
  SectionOfRecipeCard.append(gridCards);

for (let i = 0 ;i<dinnerSuggestions["categories"][0]["Suggestions"]["plates"].length ; i++){
    const card = $(`<div class="card"></div>`);
  gridCards.append(card);
  const imgCard = $(
    ` <img class="imgCard" src="${dinnerSuggestions["categories"][0]["Suggestions"]["plates"][i]["Image"][0]}" alt="${dinnerSuggestions["categories"][0]["Suggestions"]["plates"][i]["title"]}">`
  );
  card.append(imgCard);
  const container = $(`<div class="container"></div>`);
  card.append(container);
  const titleOfRecipe = $(
    `<h4 class="titleOfRecipe"><b>${dinnerSuggestions["categories"][0]["Suggestions"]["plates"][i]["title"]}</b></h4>`
  );
  const rate = $(`<p>Rate : ${dinnerSuggestions["categories"][0]["Suggestions"]["plates"][i]["Rate"]}</p>`);
//   const divOfFav = $(`<div class ="divOfFav"> </div>`)

  const fav = $(
    `<button class="fav" ><img src="heart-fill.svg" alt="Favorite" /></button>`
  );
  container.append(titleOfRecipe , rate , fav);
}


const SectionOfRecipeCard2 = $(`<div class="SectionOfRecipeCard"></div>`);
main.append(SectionOfRecipeCard2);
   const divOfsection = $(`<div></div>`);
   SectionOfRecipeCard2.append(divOfsection);
const paraOfsection = $(
  `<p class="paraOfsectionOfCards">Need something quick for dinner tonight?</p>`
);
SectionOfRecipeCard2.append(paraOfsection);


const gridCards2 = $(`<div class="gridCards2"></div>`);
SectionOfRecipeCard2.append(gridCards2);
for (let i = 0 ;i<quickDinner["categories"][0]["Suggestions"]["plates"].length ; i++){
    const card = $(`<div class="card"></div>`);
    gridCards2.append(card);
  const imgCard = $(
    ` <img class="imgCard" src="${quickDinner["categories"][0]["Suggestions"]["plates"][i]["Image"][0]}" alt="${quickDinner["categories"][0]["Suggestions"]["plates"][i]["title"]}">`
  );
  card.append(imgCard);
  const container = $(`<div class="container"></div>`);
  card.append(container);
  const titleOfRecipe = $(
    ` <h4 class="titleOfRecipe"><b>${quickDinner["categories"][0]["Suggestions"]["plates"][i]["title"]}</b></h4>`
  );
  const rate = $(`<p>Rate : ${quickDinner["categories"][0]["Suggestions"]["plates"][i]["Rate"]}</p>`);
  const fav = $(
    `<button class="fav" ><img src="heart-fill.svg" alt="Favorite" /></button>`
  );
  container.append(titleOfRecipe , rate , fav);
}


    const SeeMore = $(`<div class ="SeeMore">`);
    main.append(SeeMore);
    const ButtonSeeMore = $(`<button class="ButtonSeeMore">See More</button>`);
    SeeMore.append(ButtonSeeMore);

  $(".titleOfRecipe").on("click", function (event) {
    const img = $(this).parent().parent().find("img").attr("src");
    console.log($(this).parent().parent().parent());
    const DesOfCard = $(this).text().split(":");
    console.log(DesOfCard[0]);
    FoodRecipeDetails(DesOfCard[0], img);
  });

  $(`.fav`).on("click", function () {
    const img = $(this).parent().parent().find("img").attr("src");
    console.log(img)
    const details = $(this).parent().parent().text().split("Rate :");
    favArr.push({ img: img, title: details[0], rate: details[1] });
  });

  inputSearch.on("click", function () {
    if (inputSearch.val() == "") {
      console.log("the input is empty");
    } else {
      const title = inputSearch.val();
      console.log(title);
      let cate = ["Spaghetti", "Salads", "chicken"];

      for (let i = 0; i < Recipes["categories"].length; i++) {
        for (
          let j = 0;
          j < Recipes["categories"][i][cate[i]]["plates"].length;
          j++
        ) {
          if (
            Recipes["categories"][i][cate[i]]["plates"][j]["title"] === title
          ) {
            console.log("yes");
          } else {
            console.log("no");
          }
          // console.log(Recipes["categories"][i][cate[i]]["plates"][j]["title"])
        }
      }
    }
  });
  //   $(".fav").each(function () {
  //     $(this).click(function (e) {
  //       const img = $(this).parent().parent().find("img").attr("src");
  //       console.log(img);
  //       const name = $(this).parent().parent().text().split(":");
  //       console.log(name[0]);
  //       favArr.push({"img" :img,title: name[0], rate :name[1]});
  //     });
  //   });

  // $(`.card`).on("click" , function(){
  //     console.log($(this).add(`.titleOfRecipe`).text());
  // }
  const BtnCategory = $(`.SeeOurCategory`);
  const SeeMoreButton = $(`.ButtonSeeMore`);
  BtnCategory.on("click", function () {
    CategoryPage();
  });

  SeeMoreButton.on("click", function () {
    CategoryPage();
  });
};

FoodRecipesPage();

const FavoritePage = () => {
  body.html("");
  const urFavorite = $(`<div class="urFavorite"></div>`);
  body.append(urFavorite);
  const h3 = $(` <div><h3>Your Favorite</h3></div>`);
  const cardFav = $(`<div class ="cards"></div>`);
  urFavorite.append(h3, cardFav);
  if (favArr.length !== 0) {
    console.log(favArr);
    favArr.forEach(function (e, index) {
      console.log(e);
      const card = $(` <div class="card">`);
      cardFav.append(card);
      const imgCard = $(
        `<img class="imgCard" src="${e["img"]}" alt="${e["title"]}">`
      );
      card.append(imgCard);
      const container = $(`<div class="container"></div>`);
      card.append(container);
      const titleOfRecipe = $(
        `<h4 class="titleOfRecipe"><b>${e["title"]}</b></h4>`
      );
      const rate = $(
        `<p>Rate ${e["rate"]}</p> <button class="fav" ><img src="heart-fill.svg" alt="Favorite" /></button>`
      );
      const removeBtn = $(
        `<button type="button" class="removeBtn">Remove</button>`
      );
      removeBtn.on("click", function () {
        $(this).parent().parent().remove();
      });
      container.append(titleOfRecipe, rate, removeBtn);
    });
  }
};

/* <div class="urFavorite">
    <div><h3>Your Favorite</h3></div>
    <div class ="cardFav">
        <div class="card">
            <img class="imgCard" src="" alt="">
            <div class="container">
                <h4 class="titleOfRecipe"><b>Chicken Chinese Noodle Soup</b></h4>
                <p>knk</p> <button class="fav" ><img src="heart-fill.svg" alt="Favorite" /></button>
            </div>
        </div>

</div></div> */
const CategoryPage = () => {
  body.html("");
  const header2 = $(`<header class="header"></header>`);
  body.append(header2);
  const SiteTitle = $(`<div class="site-title"> </div>`);
  header2.append(SiteTitle);
  const logo = $(
    `<div class="logo"> Recipe<span class="tin">Tin</span>Eats </div>`
  );
  SiteTitle.append(logo);
  const filter_fav_search = $(`<div class="filter_fav_search"> </div>`);
  header2.append(filter_fav_search);
  const foodSearch = $(`<div id="foodSearch"></div>`);
  const inputSearch = $(
    `<input type="search" id="search" name="foodSearch" placeholder="   Search Recipes ...">`
  );
  foodSearch.append(inputSearch);
  const filter = $(`<div class ="filter"> </div>`);
  const ButtonFilter = $(
    `<button id="filter"> <img src="filter.svg" alt="filter" /></button>`
  );
  filter.append(ButtonFilter);
  const favorite = $(`<div class ="favorite"></div>`);
  const ButtonFavorite = $(
    `<button id="favorite"> <img src="heart-fill.svg" alt="Favorite" /></button>`
  );
  favorite.append(ButtonFavorite);

  ButtonFavorite.on("click", function () {
    FavoritePage();
  });

  filter_fav_search.append(foodSearch, filter, favorite);
  const filterCategories = $(`<div class = "filterCategories"></div>`);
  body.append(filterCategories);
  ButtonFilter.on("click" , function(){
    const divOfPara = $(`<div class="para"></div>`)
    filterCategories.append(divOfPara);
    const p = $(`<p class ="FilterByCategory">Filter By Category :</p>`)
    divOfPara.append(p)
    const Btns = $(`<div class ="buttonOfFilter"></div>`)
    filterCategories.append(Btns)
    const btn1 = $(
        `<button class ="Buttonall buttonfilter">All Categories</button>`
      );
      const btn2 = $(
        `<button class="ButtonSpaghetti buttonfilter">Spaghetti</button>`
      );
      const btn3 = $(`<button class ="ButtonSalads buttonfilter">Salads</button>`);
      const btn4 = $(
        `<button class ="ButtonChicken buttonfilter">Chickens</button>`
      );
    
      Btns.append(btn1, btn2, btn3, btn4);
      btn1.on("click", function () {
        $(`.SpaghettiCategory`).show();
        $(`.SaladsCategory`).show();
        $(`.Salads`).show();
        $(`.Spaghetti`).show();
        $(`.chickenCategory`).show();
        $(`.Chicken`).show();
      });
      btn2.on("click", function () {
        $(`.SpaghettiCategory`).show();
        $(`.Spaghetti`).show();
        $(`.SaladsCategory`).hide();
        $(`.Salads`).hide();
        $(`.chickenCategory`).hide();
        $(`.Chicken`).hide();
      });
    
      btn3.on("click", function () {
        $(`.SaladsCategory`).show();
        $(`.Salads`).show();
        $(`.SpaghettiCategory`).hide();
        $(`.Spaghetti`).hide();
        $(`.chickenCategory`).hide();
        $(`.Chicken`).hide();
      });
    
      btn4.on("click", function () {
        $(`.SaladsCategory`).hide();
        $(`.Salads`).hide();
        $(`.SpaghettiCategory`).hide();
        $(`.Spaghetti`).hide();
        $(`.chickenCategory`).show();
        $(`.Chicken`).show();
      });
    
  })
 

  const categories = $(` <div class="categories"></div>`);
  body.append(categories);
  const sectionOne = $(`<div class="sectionOne"></div>`);
  categories.append(sectionOne);
  const titleCategory = $(
    `<div class="titleCategory SpaghettiCategory"></div>`
  );
  sectionOne.append(titleCategory);
  const headerTwo = $(`<h2>Spaghetti</h2>`);
  titleCategory.append(headerTwo);
  const cards = $(`<div class="cards"></div>`);
  sectionOne.append(cards);
  for(let i = 0 ;i<Recipes["categories"][0]["Spaghetti"]["plates"].length;i++){
     
      const cardOne = $(`<div class="card Spaghetti"></div>`);
      cards.append(cardOne);
      const imgCardOne = $(`<img class="imgCard" src="${Recipes["categories"][0]["Spaghetti"]["plates"][i]["Image"][0]}"alt="${Recipes["categories"][0]["Spaghetti"]["plates"][i]["title"]}">`);
      cardOne.append(imgCardOne);
      const containerOne = $(`<div class="container"></div>`);
      cardOne.append(containerOne);
      const titleOfRecipeOne = $(` <h4 class="titleOfRecipe"><b>${Recipes["categories"][0]["Spaghetti"]["plates"][i]["title"]}</b></h4>`);
      const rateObe = $(`<p>Rate : ${Recipes["categories"][0]["Spaghetti"]["plates"][i]["Rate"]}</p>`);
      const favOne = $(
        `<button class="fav" ><img src="heart-fill.svg" alt="Favorite" /></button>`
      );
      containerOne.append(titleOfRecipeOne, rateObe, favOne);
  }
  

  //////////////////////////////////////////////////

  const sectionTwo = $(`<div class="sectionTwo"></div>`);
  categories.append(sectionTwo);
  const titleCategoryTwo = $(
    `<div class="titleCategory SaladsCategory"></div>`
  );
  sectionTwo.append(titleCategoryTwo);
  const header = $(`<h2>Salads</h2>`);
  titleCategoryTwo.append(header);
  const cardsTwo = $(`<div class="cards"></div>`);
  sectionTwo.append(cardsTwo);
  for(let i = 0 ;i<Recipes["categories"][2]["Salads"]["plates"].length;i++){
     
      const cardOne = $(`<div class="card Salads"></div>`);
      cardsTwo.append(cardOne);
      const imgCardOne = $(`<img class="imgCard" src="${Recipes["categories"][2]["Salads"]["plates"][i]["Image"][0]}"alt="${Recipes["categories"][2]["Salads"]["plates"][i]["title"]}">`);
      cardOne.append(imgCardOne);
      const containerOne = $(`<div class="container"></div>`);
      cardOne.append(containerOne);
      const titleOfRecipeOne = $(` <h4 class="titleOfRecipe"><b>${Recipes["categories"][2]["Salads"]["plates"][i]["title"]}</b></h4>`);
      const rateObe = $(`<p>Rate : ${Recipes["categories"][2]["Salads"]["plates"][i]["Rate"]}</p>`);
      const favOne = $(
        `<button class="fav" ><img src="heart-fill.svg" alt="Favorite" /></button>`
      );
      containerOne.append(titleOfRecipeOne, rateObe, favOne);
  }

  ///////////////////////////////////////////////////////////////////////////////sec tw


  const sectionThree = $(`<div class="sectionThree"></div>`);
  categories.append(sectionThree);
  const titleCategoryThree = $(
    `<div class="titleCategory chickenCategory"></div>`
  );
  sectionThree.append(titleCategoryThree);
  const headerthree = $(`<h2>Chicken</h2>`);
  titleCategoryThree.append(headerthree);
  const cardsthree = $(`<div class="cards"></div>`);
  sectionThree.append(cardsthree);

  for(let i = 0 ;i<Recipes["categories"][1]["Chicken"]["plates"].length;i++){
     
      const cardOne = $(`<div class="card Chicken"></div>`);
      cardsthree.append(cardOne);
      const imgCardOne = $(`<img class="imgCard" src="${Recipes["categories"][1]["Chicken"]["plates"][i]["Image"][0]}"alt="${Recipes["categories"][1]["Chicken"]["plates"][i]["title"]}">`);
      cardOne.append(imgCardOne);
      const containerOne = $(`<div class="container"></div>`);
      cardOne.append(containerOne);
      const titleOfRecipeOne = $(` <h4 class="titleOfRecipe"><b>${Recipes["categories"][1]["Chicken"]["plates"][i]["title"]}</b></h4>`);
      const rateObe = $(`<p>Rate : ${Recipes["categories"][1]["Chicken"]["plates"][i]["Rate"]}</p>`);
      const favOne = $(
        `<button class="fav" ><img src="heart-fill.svg" alt="Favorite" /></button>`
      );
      containerOne.append(titleOfRecipeOne, rateObe, favOne);
  }
  

  ////////////////////////////////////////////////

  $(`.fav`).on("click", function () {
    const img = $(this).parent().parent().find("img").attr("src");
    console.log(img);
    const details = $(this).parent().parent().text().split("Rate : ");
    console.log(details);
    favArr.push({ img: img, title: details[0], rate: details[1] });
  });

  $(".titleOfRecipe").on("click", function (event) {
    const img = $(this).parent().parent().find("img").attr("src");
    console.log(img);
    const DesOfCard = $(this).text().split(":");
    console.log(DesOfCard[0]);
    FoodRecipeDetails(DesOfCard[0], img);
  });

  
  //////////////////////////////////////////
};
const FoodRecipeDetails = (title, image) => {
  body.html("");

  const FoodRecipeDetails = $(`<div class ="DetailsFood"></div>`);
  body.append(FoodRecipeDetails);
  const TitleOfDetailsFood = $(`<div class ="TitleOfDetailsFood"> </div>`)
  const TitleOfDetailsFoodh3 = $(`<h3 class ="TitleOfDetailsFoodh3">California Spaghetti Salad</h3>`)
  TitleOfDetailsFood.append(TitleOfDetailsFoodh3);
  const paraOne = $(` <div class ="paraOne">${"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia corrupti nostrum accusamus saepe"}</div>`)
const divImgOfDetailsFood = $(`<div class = "divImgOfDetailsFood"></div>`)
const imgOfDetailsFood = $(`<img class ="imgOfDetailsFood" src="Carbonara-2.webp" alt ="">`)
divImgOfDetailsFood.append(imgOfDetailsFood);
const paraTwo = $(` <div class ="paraTwo">${"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia corrupti nostrum accusamus saepe"}</div>`)
const divImgOfDetailsFoodTwo = $(`<div class = "divImgOfDetailsFood"></div>`)
const imgOfDetailsFoodTwo = $(`<img class ="imgTwoOfDetailsFood imgOfDetailsFood" src="Carbonara-2.webp" alt ="">`)
divImgOfDetailsFoodTwo.append(imgOfDetailsFoodTwo);
const paraThree = $(` <div class ="paraThree">${"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia corrupti nostrum accusamus saepe"}</div>`)
FoodRecipeDetails.append(TitleOfDetailsFood ,paraOne , divImgOfDetailsFood , paraTwo  , divImgOfDetailsFoodTwo , paraThree)

//   <div class = "DetailsFood">

//         <div class ="TitleOfDetailsFood"><h3 class ="TitleOfDetailsFoodh3">California Spaghetti Salad</h3></div>

//         <div class ="paraOne">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia corrupti nostrum accusamus saepe quibusdam facere sapiente voluptatem repellendus atque eos vel sit, aut quasi tempora ipsa nisi obcaecati, et magni!</div>
//         <div class = "divImgOfDetailsFood"><img class ="imgOfDetailsFood" src="Carbonara-2.webp" alt =""></div>
//         <div class ="paraTwo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, nisi beatae similique excepturi tempora quam vitae fugiat voluptates quaerat qui minus, et voluptatibus unde. Eos officiis facilis ducimus adipisci praesentium?</div>
//         <div class = "divImgOfDetailsFood"><img class ="imgTwoOfDetailsFood imgOfDetailsFood"src="california-spaghetti-salad-2.jpg" alt =""></div>
//         <div class ="paraThree">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id saepe, non praesentium eum deserunt. Eos cumque reprehenderit dolores molestias sunt dolorum accusantium eius doloribus? Reprehenderit voluptates optio porro labore?</div>
// </div>

};
//FoodRecipeDetails()
/* <div class ="FoodRecipeDetails">
<div class ="headerPage">test</div>
<div><img src="Chicken-in-Satay-Sauce.webp" /></div>
<div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, vero eum rerum perferendis quaerat odio tempore deserunt sit fugiat aut? Ut aliquam impedit eligendi adipisci nobis illo molestiae praesentium esse.</p></div>
</div> */

//CategoryPage();

//                 <div class="card">
//                     <img class="imgCard" src="cornbread-salad.webp"
//                         alt="Charred Red Cabbage and Carrot Salad">
//                     <div class="container">
//                         <h4 class="titleOfRecipe"><b>Cornbread Salad</b></h4>
//                         <p>Rate : 8/10</p> <button class="fav"><img src="heart-fill.svg" alt="Favorite" /></button>
//                     </div>
//                 </div>
//                 <div class="card">
//                     <img class="imgCard" src="Green_Goddess_Dressing.webp"
//                         alt="Green_Goddess_Dressing">
//                     <div class="container">
//                         <h4 class="titleOfRecipe"><b>Green Goddess Dressing</b></h4>
//                         <p>Rate : 8/10</p> <button class="fav"><img src="heart-fill.svg" alt="Favorite" /></button>
//                     </div>
//                 </div>
//                 <div class="card">
//                     <img class="imgCard" src="waldorf-salad.webp"
//                         alt="waldorf-salad">
//                     <div class="container">
//                         <h4 class="titleOfRecipe"><b>Waldorf Salad</b></h4>
//                         <p>Rate : 8/10</p> <button class="fav"><img src="heart-fill.svg" alt="Favorite" /></button>
//                     </div>
//                 </div>
//             </div>
//         </div>
