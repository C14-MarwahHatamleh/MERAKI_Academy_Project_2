const header = $(`<header class="header"></header>`);
const main = $(`<main class="main"></main>`);
const footer = $(`<footer class="footer"></footer>`);
const body = $(`body`);
body.append(header, main, footer);

let favArr = [];

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
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "Spaghetti alla Puttanesca",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "Spicy Chilli Prawn Pasta",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "Penne all’Arrabbiata",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "Carbonara",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "Spaghetti Bolognese",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "Creamy Mushroom Pasta",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "Lasagna!",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
        ],
      },
    },
    {
      Salads: {
        plates: [
          {
            title: "Crunchy chicken taco fingers",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "Chicken Fajitas",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "Chicken Curry",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "Chicken Chinese Noodle Soup",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "Chicken Stew",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "Satay Chicken Stir Fry",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "Sticky Chicken Wings",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "Chicken Kiev",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
        ],
      },
    },
    {
      chicken: {
        plates: [
          {
            title: "Cornbread Salad",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "Green Goddess Salad",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "California Spaghetti Salad",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "Waldorf Salad",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "Retro Salad",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "Charred Red Cabbage and Carrot Salad",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "Pecan Chicken Salad",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "Greek Pasta Salad",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
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
    const filter_fav_search = $(`<div class="filter_fav_search"> </div>`);
    header.append(filter_fav_search);
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
    const favorite = $(`<div class ="favorite">  </div>`);
    const ButtonFavorite = $(
      `<button id="favorite"> <img src="heart-fill.svg" alt="Favorite" /></button>`
    );
    favorite.append(ButtonFavorite);
  
  
  ButtonFavorite.on("click" , function(){
      FavoritePage();
  })
  
  filter_fav_search.append(foodSearch, filter, favorite);
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
    `<img class="BigsourceImg" src="Retro Salad.webp" alt="Retro Salad" />`
  );
  hyperLink.append(Image);
  const titleBigImg = $(` <div class="titleBigImg"></div>`);
  bigImage.append(titleBigImg);
  const para = $(` <p>Retro Salad</p>`);
  titleBigImg.append(para);

  hyperLink.on("click", function () {
    const img = $(`.BigsourceImg`).attr("src");
    const title = $(`.titleBigImg`).text();

    FoodRecipeDetails(title, img);
  });
  /////////////////////////////////////////////////////////////////
  const smallImages = $(`<div class="smallImages"></div>`);
  ContainerImgs.append(smallImages);
  const itemOne = $(`<div class="item3"></div>`);
  smallImages.append(itemOne);
  const hyperLinkSmallImg1 = $(`<a class ="a"></a>`);
  itemOne.append(hyperLinkSmallImg1);
  const ImageSmallimg1 = $(
    `<img class="imgSmall" src="Chicken-Stew.webp" alt="Chicken-Stew" />`
  );
  hyperLinkSmallImg1.append(ImageSmallimg1);
  const titleSmallImg = $(`<div class="titleSmallImg">`);
  itemOne.append(titleSmallImg);
  const paraSmall1 = $(` <p>Chicken Stew</p>`);
  titleSmallImg.append(paraSmall1);

  ////////////////////////////////////////////////////////////////

  const itemThree = $(`<div class="item3"></div>`);
  smallImages.append(itemThree);
  const hyperLinkSmallImg2 = $(`<a></a>`);
  itemThree.append(hyperLinkSmallImg2);
  const ImageSmallimg2 = $(
    `<img class="imgSmall" src="cornbread-salad.webp"alt="cornbread-salad" />`
  );
  hyperLinkSmallImg2.append(ImageSmallimg2);
  const titleSmallImg2 = $(`<div class="titleSmallImg">`);
  itemThree.append(titleSmallImg2);
  const paraSmall2 = $(`<p>Cornbread Salad</p>`);
  titleSmallImg2.append(paraSmall2);

  ////////////////////////////////////////////////////
  const itemFour = $(`<div class="item3"></div>`);
  smallImages.append(itemFour);
  const hyperLinkSmallImg3 = $(`<a></a>`);
  itemFour.append(hyperLinkSmallImg3);
  const ImageSmallimg3 = $(
    `<img class="imgSmall" src="Spaghetti-Bolognese.webp" alt="Spaghetti-Bolognese" />`
  );
  hyperLinkSmallImg3.append(ImageSmallimg3);
  const titleSmallImg3 = $(`<div class="titleSmallImg">`);
  itemFour.append(titleSmallImg3);
  const paraSmall3 = $(`<p>Spaghetti Bolognese</p>`);
  titleSmallImg3.append(paraSmall3);
  //////////////////////////////////////////////////
  const itemFive = $(`<div class="item3"></div>`);
  smallImages.append(itemFive);
  const hyperLinkSmallImg4 = $(`<a></a>`);
  itemFive.append(hyperLinkSmallImg4);
  const ImageSmallimg4 = $(
    `<img class="imgSmall" src="Chicken-in-Satay-Sauce.webp" alt="Chicken-in-Satay-Sauce" />`
  );
  hyperLinkSmallImg4.append(ImageSmallimg4);
  const titleSmallImg4 = $(`<div class="titleSmallImg">`);
  itemFive.append(titleSmallImg4);
  const paraSmall4 = $(`<p>Chicken in Satay Sauce</p>`);
  titleSmallImg4.append(paraSmall4);

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
  const card = $(`<div class="card"></div>`);
  gridCards.append(card);
  const imgCard = $(
    ` <img class="imgCard" src="Beef-chow-mein.webp" alt="Beef-chow-mein">`
  );
  card.append(imgCard);
  const container = $(`<div class="container"></div>`);
  card.append(container);
  const titleOfRecipe = $(
    ` <h4 class="titleOfRecipe"><b>Beef chow mein</b></h4>`
  );
  const rate = $(`<p>Rate : 9/10</p>`);
  const fav = $(
    `<button class="fav" ><img src="heart-fill.svg" alt="Favorite" /></button>`
  );
  container.append(titleOfRecipe, rate, fav);
  ////////////////////////////////////////////////////card2
  const card2 = $(`<div class="card"></div>`);
  gridCards.append(card2);
  const imgCard2 = $(
    ` <img class="imgCard" src="CaliforniaSpaghetti.webp" alt="California Spaghetti">`
  );
  card2.append(imgCard2);
  const container2 = $(`<div class="container"></div>`);
  card2.append(container2);
  const titleOfRecipe2 = $(
    ` <h4 class="titleOfRecipe"><b>California Spaghetti</b></h4>`
  );
  const rate2 = $(`<p>Rate : 9.5/10</p>`);
  const fav2 = $(
    `<button class="fav" ><img src="heart-fill.svg" alt="Favorite" /></button>`
  );
  container2.append(titleOfRecipe2, rate2, fav2);
  ////////////////////////////////////////////////////
  const card3 = $(`<div class="card"></div>`);
  gridCards.append(card3);
  const imgCard3 = $(
    `<img class="imgCard" src="Carbonara.webp" alt="Carbonara">`
  );
  card3.append(imgCard3);
  const container3 = $(`<div class="container"></div>`);
  card3.append(container3);
  const titleOfRecipe3 = $(` <h4 class="titleOfRecipe"><b>Carbonara</b></h4>`);
  const rate3 = $(`<p>Rate : 9/10</p>`);
  const fav3 = $(
    `<button class="fav" ><img src="heart-fill.svg" alt="Favorite" /></button>`
  );
  container3.append(titleOfRecipe3, rate3, fav3);
  ////////////////////////////////////////////////
  const card4 = $(`<div class="card"></div>`);
  gridCards.append(card4);
  const imgCard4 = $(
    `<img class="imgCard" src="Charred-Red-Cabbage-and-Carrot-Salad.webp" alt="Charred Red Cabbage and Carrot Salad">`
  );
  card4.append(imgCard4);
  const container4 = $(`<div class="container"></div>`);
  card4.append(container4);
  const titleOfRecipe4 = $(
    ` <h4 class="titleOfRecipe"><b>Charred Red Cabbage and Carrot Salad</b></h4>`
  );
  const rate4 = $(`<p>Rate : 8/10</p>`);
  const fav4 = $(
    `<button class="fav" ><img src="heart-fill.svg" alt="Favorite" /></button>`
  );
  container4.append(titleOfRecipe4, rate4, fav4);

  ////////////////////////////////////////////////
  const card5 = $(`<div class="card"></div>`);
  gridCards.append(card5);
  const imgCard5 = $(
    `<img class="imgCard" src="Chicken-Curry.webp" alt="Chicken Curry">`
  );
  card5.append(imgCard5);
  const container5 = $(`<div class="container"></div>`);
  card5.append(container5);
  const titleOfRecipe5 = $(
    ` <h4 class="titleOfRecipe"><b>Chicken Curry</b></h4>`
  );
  const rate5 = $(`<p>Rate : 9/10</p>`);
  const fav5 = $(
    `<button class="fav" ><img src="heart-fill.svg" alt="Favorite" /></button>`
  );
  container5.append(titleOfRecipe5, rate5, fav5);

  ////////////////////////////////////////////////
  const card6 = $(`<div class="card"></div>`);
  gridCards.append(card6);
  const imgCard6 = $(
    ` <img class="imgCard" src="Creamy-Mushroom-Pasta.webp" alt="Creamy Mushroom">`
  );
  card6.append(imgCard6);
  const container6 = $(`<div class="container"></div>`);
  card6.append(container6);
  const titleOfRecipe6 = $(
    ` <h4 class="titleOfRecipe"><b>Creamy Mushroom Pasta</b></h4>`
  );
  const rate6 = $(`<p>Rate : 9.5/10</p>`);
  const fav6 = $(
    `<button class="fav" ><img src="heart-fill.svg" alt="Favorite" /></button>`
  );
  container6.append(titleOfRecipe6, rate6, fav6);
  const SeeMore = $(`<div class ="SeeMore">`);
  main.append(SeeMore);
  const ButtonSeeMore = $(`<button class="ButtonSeeMore">See More</button>`);
  SeeMore.append(ButtonSeeMore);

 
  //  $('.fav').each(function() {
  // $(this).click(function(){
  // console.log($(this).index())
  // });
  // });

  //   BtnFav.on("click", function(){

  //   //  const fav = dd.add( ".card" ).text()
  //     //const fav = $(`gridCards`).add(`.card`).add(`.imgCard`).prop(`src`);
  //     //const a= $(this).parent().index();
  //        // const fav = $(`.card`).get( index );

  //     //console.log(fav)
  //   });

  // $(`.fav`).each(function(){
  //     $(this).click(function(){
  //         console.log($(this).index());
  //     })
  // })

    // $(".card").each(function () {
    //   $(this).click(function () {
    //     const img = $(this).find("img").attr("src");
    //     console.log(img);
    //     const DesOfCard = $(this).text().split(":");
    //     console.log(DesOfCard[0]);
    //     FoodRecipeDetails(DesOfCard[0], img);
    //   });
    // });

  $(`.fav`).on("click", function () {
    const img = $(this).parent().parent().find("img").attr("src");
    const details = $(this).parent().parent().text().split(":");
    favArr.push({ img: img, title: details[0], rate: details[1] });
  });


 inputSearch.on("change" , function(){
    if(inputSearch.val() ==""){
        console.log("the input is empty")
    }else{
    const title = inputSearch.val();
    console.log(title)
    let cate = ["Spaghetti" ,"Salads" , "chicken" ]
    for(let i = 0 ; i < Recipes["categories"].length ;i++){
        for(let j = 0 ; j<Recipes["categories"][i][cate[i]]["plates"].length; j++){
        if(Recipes["categories"][i][cate[i]]["plates"][j]["title"] ===title )
        {
        
            console.log("yes")
        } else {
            console.log("no")
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
    body.html("")
  const urFavorite = $(`<div class="urFavorite"></div>`);
  body.append(urFavorite);
  const h3 = $(` <div><h3>Your Favorite</h3></div>`);
  const cardFav = $(`<div class ="cards"></div>`);
  urFavorite.append(h3, cardFav);
  if(favArr.length !== 0)
  {console.log(favArr)
    favArr.forEach(function(e , index){
        console.log(e)
        const card = $(` <div class="card">`);
        cardFav.append(card)
        const imgCard = $(`<img class="imgCard" src="${e["img"]}" alt="${e["title"]}">`);
        card.append(imgCard);
        const container = $(`<div class="container"></div>`);
        card.append(container);
        const titleOfRecipe = $(`<h4 class="titleOfRecipe"><b>${e["title"]}</b></h4>`)
        const rate = $(`<p>Rate ${e["rate"]}</p> <button class="fav" ><img src="heart-fill.svg" alt="Favorite" /></button>`)
        container.append(titleOfRecipe,rate)
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
 body.html("")
 const header2 = $(`<header class="header"></header>`);
 body.append(header2)
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
 const favorite = $(`<div class ="favorite">  </div>`);
 const ButtonFavorite = $(
   `<button id="favorite"> <img src="heart-fill.svg" alt="Favorite" /></button>`
 );
 favorite.append(ButtonFavorite);


ButtonFavorite.on("click" , function(){
   FavoritePage();
})

 filter_fav_search.append(foodSearch, filter, favorite);
 

  
  const filterCategories = $(`<div class = "filterCategories"></div>`);
  body.append(filterCategories);
  const headerfilter = $(`<h3>Filter by Categories</h3>`);
  const btn1 = $(`<button class ="Buttonall">All Categories</button>`);
  const btn2 = $(`<button class="ButtonSpaghetti">Spaghetti</button>`);
  const btn3 = $(`<button class ="ButtonSalads">Salads</button>`);
  filterCategories.append(headerfilter, btn1, btn2, btn3);

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
  const cards = $(`<div class="cards"><div>`);
  sectionOne.append(cards);
  const cardOne = $(`<div class="card Spaghetti"></div>`);
  cards.append(cardOne);
  const imgCardOne = $(`<img class="imgCard" src="Lasagne.webp"alt="Lasagne">`);
  cardOne.append(imgCardOne);
  const containerOne = $(`<div class="container"></div>`);
  cardOne.append(containerOne);
  const titleOfRecipeOne = $(` <h4 class="titleOfRecipe"><b>Lasagne</b></h4>`);
  const rateObe = $(`<p>Rate : 10/10</p>`);
  const favOne = $(
    `<button class="fav" ><img src="heart-fill.svg" alt="Favorite" /></button>`
  );
  containerOne.append(titleOfRecipeOne, rateObe, favOne);

  //////////////////////////////////////////////////
  const cardTwo = $(`<div class="card Spaghetti"></div>`);
  cards.append(cardTwo);
  const imgCardTwo = $(
    `<img class="imgCard" src="Spaghetti-Bolognese.webp"alt="Spaghetti-Bolognese">`
  );
  cardTwo.append(imgCardTwo);
  const containerTwo = $(`<div class="container"></div>`);
  cardTwo.append(containerTwo);
  const titleOfRecipeTwo = $(
    ` <h4 class="titleOfRecipe"><b>Spaghetti Bolognese</b></h4>`
  );
  const rateTwo = $(`<p>Rate : 8/10</p>`);
  const favTwo = $(
    `<button class="fav" ><img src="heart-fill.svg" alt="Favorite" /></button>`
  );
  containerTwo.append(titleOfRecipeTwo, rateTwo, favTwo);

  //////////////////////////////////////////////

  const cardThree = $(`<div class="card Spaghetti"></div>`);
  cards.append(cardThree);
  const imgCardThree = $(
    `<img class="imgCard" src="CaliforniaSpaghetti.webp" alt="CaliforniaSpaghetti">`
  );
  cardThree.append(imgCardThree);
  const containerThree = $(`<div class="container"></div>`);
  cardThree.append(containerThree);
  const titleOfRecipeThree = $(
    ` <h4 class="titleOfRecipe"><b>California Spaghetti</b></h4>`
  );
  const rateThree = $(`<p>Rate : 8/10</p>`);
  const favThree = $(
    `<button class="fav" ><img src="heart-fill.svg" alt="Favorite" /></button>`
  );
  containerThree.append(titleOfRecipeThree, rateThree, favThree);

  ///////////////////////////////////////////////////////////////////////////////sec two
  const sectionTwo = $(`<div class="sectionTwo"></div>`);
  categories.append(sectionTwo);
  const titleCategoryTwo = $(
    `<div class="titleCategory SaladsCategory"></div>`
  );
  sectionTwo.append(titleCategoryTwo);
  const header = $(`<h2>Salads</h2>`);
  titleCategoryTwo.append(header);
  const cardsTwo = $(`<div class="cards"><div>`);
  sectionTwo.append(cardsTwo);

  const card1 = $(`<div class="card Salads"></div>`);
  cardsTwo.append(card1);
  const imgCard1 = $(
    ` <img class="imgCard" src="cornbread-salad.webp"alt="Charred Red Cabbage and Carrot Salad">`
  );
  card1.append(imgCard1);
  const container1 = $(`<div class="container"></div>`);
  card1.append(container1);
  const titleOfRecipe1 = $(
    ` <h4 class="titleOfRecipe"><b>Cornbread Salad</b></h4>`
  );
  const rate1 = $(`<p>Rate : 8/10</p>`);
  const fav1 = $(
    `<button class="fav" ><img src="heart-fill.svg" alt="Favorite" /></button>`
  );
  container1.append(titleOfRecipe1, rate1, fav1);

  /////////////////////////////////////////////////

  ////////////////////////////////////////////////


  $(`.fav`).on("click", function () {
    const img = $(this).parent().parent().find("img").attr("src");
    console.log(img)
    const details = $(this).parent().parent().text().split("Rate : ");
    console.log(details)
    favArr.push({ img: img, title: details[0], rate: details[1] });
  });
  btn1.on("click", function () {
    $(`.SpaghettiCategory`).show();
    $(`.SaladsCategory`).show();
    $(`.Salads`).show();
    $(`.Spaghetti`).show();
  });
  btn2.on("click", function () {
    $(`.SpaghettiCategory`).show();
    $(`.Spaghetti`).show();
    $(`.SaladsCategory`).hide();
    $(`.Salads`).hide();
  });

  btn3.on("click", function () {
    $(`.SaladsCategory`).show();
    $(`.Salads`).show();
    $(`.SpaghettiCategory`).hide();
    $(`.Spaghetti`).hide();
  });

  //////////////////////////////////////////
};
const FoodRecipeDetails = (title, image) => {
  body.html("");
  const FoodRecipeDetails = $(`<div class ="FoodRecipeDetails"></div>`);
  body.append(FoodRecipeDetails);
  const headerPage = $(`<div class ="headerPage">${title}</div>`);
  const imgOfRecipe = $(`<div><img src="${image}" /></div>`);
  const paraofDetails =
    $(`<div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, vero eum rerum perferendis quaerat odio tempore deserunt sit fugiat aut? Ut aliquam impedit eligendi adipisci nobis illo molestiae praesentium esse.</p></div>
</div>`);
  FoodRecipeDetails.append(headerPage, imgOfRecipe, paraofDetails);
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
