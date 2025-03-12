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
            title: "dvd",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "dvd",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "dvd",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "dvd",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "dvd",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "dvd",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "dvd",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "dvd",
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
            title: "dvd",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "dvd",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "dvd",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "dvd",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "dvd",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "dvd",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "dvd",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "dvd",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
        ],
      },
    },
    {
      chicken: {
        questions: [
          {
            title: "dvd",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "dvd",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "dvd",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "dvd",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "dvd",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "dvd",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "dvd",
            Image: "dsvd",
            Description: "vdv",
            Rate: "dvds",
          },
          {
            title: "dvd",
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
  const hyperLink = $(`<a href="#"></a>`);
  bigImage.append(hyperLink);
  const Image = $(
    `<img class="BigsourceImg" src="Retro Salad.webp" alt="Retro Salad" />`
  );
  hyperLink.append(Image);
  const titleBigImg = $(` <div class="titleBigImg"></div>`);
  bigImage.append(titleBigImg);
  const para = $(` <p>Retro Salad</p>`);
  titleBigImg.append(para);
  /////////////////////////////////////////////////////////////////
  const smallImages = $(`<div class="smallImages"></div>`);
  ContainerImgs.append(smallImages);
  const itemOne = $(`<div class="item2"></div>`);
  smallImages.append(itemOne);
  const hyperLinkSmallImg1 = $(`<a href="#"></a>`);
  itemOne.append(hyperLinkSmallImg1);
  const ImageSmallimg1 = $(
    `<img class="item2" src="Chicken-Stew.webp" alt="Chicken-Stew" />`
  );
  hyperLinkSmallImg1.append(ImageSmallimg1);
  const titleSmallImg = $(`<div class="titleSmallImg">`);
  itemOne.append(titleSmallImg);
  const paraSmall1 = $(` <p>Chicken Stew</p>`);
  titleSmallImg.append(paraSmall1);

  ////////////////////////////////////////////////////////////////

  const itemThree = $(`<div class="item3"></div>`);
  smallImages.append(itemThree);
  const hyperLinkSmallImg2 = $(`<a href="#"></a>`);
  itemThree.append(hyperLinkSmallImg2);
  const ImageSmallimg2 = $(
    `<img class="item3" src="cornbread-salad.webp"alt="cornbread-salad" />`
  );
  hyperLinkSmallImg2.append(ImageSmallimg2);
  const titleSmallImg2 = $(`<div class="titleSmallImg">`);
  itemThree.append(titleSmallImg2);
  const paraSmall2 = $(`<p>Cornbread Salad</p>`);
  titleSmallImg2.append(paraSmall2);

  ////////////////////////////////////////////////////
  const itemFour = $(`<div class="item3"></div>`);
  smallImages.append(itemFour);
  const hyperLinkSmallImg3 = $(`<a href="#"></a>`);
  itemFour.append(hyperLinkSmallImg3);
  const ImageSmallimg3 = $(
    `<img class="item5" src="Spaghetti-Bolognese.webp" alt="Spaghetti-Bolognese" />`
  );
  hyperLinkSmallImg3.append(ImageSmallimg3);
  const titleSmallImg3 = $(`<div class="titleSmallImg">`);
  itemFour.append(titleSmallImg3);
  const paraSmall3 = $(`<p>Spaghetti Bolognese</p>`);
  titleSmallImg3.append(paraSmall3);
  //////////////////////////////////////////////////
  const itemFive = $(`<div class="item3"></div>`);
  smallImages.append(itemFive);
  const hyperLinkSmallImg4 = $(`<a href="#"></a>`);
  itemFive.append(hyperLinkSmallImg4);
  const ImageSmallimg4 = $(
    `<img class="item4" src="Chicken-in-Satay-Sauce.webp" alt="Chicken-in-Satay-Sauce" />`
  );
  hyperLinkSmallImg4.append(ImageSmallimg4);
  const titleSmallImg4 = $(`<div class="titleSmallImg">`);
  itemFive.append(titleSmallImg4);
  const paraSmall4 = $(`<p>Chicken in Satay Sauce</p>`);
  titleSmallImg4.append(paraSmall4);
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

  let BtnFav = $(`.fav`);
 let dd = $(`.gridCards`);
  BtnFav.on("click", function(){
  //  const fav = dd.add( ".card" ).text()
    //const fav = $(`gridCards`).add(`.card`).add(`.imgCard`).prop(`src`);
    //const a= $(this).parent().index();
        const fav = $(`.card`).get( index );

    console.log(fav)
  });
};
FoodRecipesPage();
