const header = $(`<header class="header"></header>`);
const main = $(`<main class="main"></main>`)
const footer = $(`<footer class="footer"></footer>`)
const body =$(`body`);
body.append(header , main , footer);


const Recipes = {
  header: "Try Our Deliciously Food",
  intro: [" Choose What You Want From Recipes" ,"What to make this week, as chosen by readers!"],
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
      chicken_dip: {
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


const FoodRecipesPage =()=>{
  const SiteTitle = $(`<div class="site-title"> </div>`);
  header.append(SiteTitle);
  const logo = $(`<div class="logo"> Recipe<span class="tin">Tin</span>Eats </div>`);
  SiteTitle.append(logo)
  const filter_fav_search = $(`<div class="filter_fav_search"> </div>`);
header.append(filter_fav_search);
const foodSearch = $(`<div id="foodSearch"></div>`);
const inputSearch = $(`<input type="search" id="search" name="foodSearch" placeholder="   Search Recipes ...">`);
foodSearch.append(inputSearch);
const filter = $(`<div class ="filter"> </div>`);
const ButtonFilter = $(`<button id="filter"> <img src="filter.svg" alt="filter" /></button>`);
filter.append(ButtonFilter);
const favorite = $(`<div class ="favorite">  </div>`);
const ButtonFavorite = $(`<button id="favorite"> <img src="heart-fill.svg" alt="Favorite" /></button>`);
favorite.append(ButtonFavorite);
filter_fav_search.append(foodSearch , filter , favorite);

const mastHead = $(`<div class="mastHead"> </div>`);
main.append(mastHead);
const divTitle = $(`<div> </div>`);
const divButton = $(`<div> </div>`);
mastHead.append(divTitle , divButton);
const title = $(`<h1 class="title_mastHead">${Recipes["header"]}</h1>`);
divTitle.append(title);
const buttonReadBlogs = $(`<button class="readOurBlogs">Read Our Blogs</button>`);
divButton.append(buttonReadBlogs);
const divIntro = $(`<div class="intro"></div>`);
main.append(divIntro);
const HeaderIntro = $(`<h3 class="ChooseRecipe">${Recipes["intro"][0]}</h3>`);
const paraInto = $(`<p class="makeRecipe">${Recipes["intro"][1]}</p>`);
divIntro.append(HeaderIntro,paraInto)
}
