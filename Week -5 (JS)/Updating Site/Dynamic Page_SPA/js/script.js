$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

(function (global) {

var dc = {};

var homeHtml = "snippets/home-snippet.html";
var allCategoriesUrl = "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json";
var menuItemsUrl = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json?category=";
//var menuItemsUrl = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/{cat_short_name}.json";
var categoriesTitleHtml = "snippets/categories-title-snippet.html";
var categoryHtml = "snippets/category-snippet.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

var insertProperty = function (string, propName, propValue) {
  var propToReplace = "{{" + propName +"}}";
  string = string.replace(new RegExp(propToReplace, "g"), propValue);
  return string;
}

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});


//Load the menu categories view
dc.loadMenuCategories = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(allCategoriesUrl, buildAndShowCategoriesHTML);
};

//Load the menu items view
//'categoryShort' is a short_name for a category
dc.loadMenuItems = function (categoryShort) {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    menuItemsUrl + categoryShort,
    buildAndShowMenuItemsHTML);
};

//Builds HTML for the categories page based on the data from the server
function buildAndShowCategoriesHTML (categories) {
  //Load title snippet of categories page.
  $ajaxUtils.sendGetRequest(
    categoriesTitleHtml,
    function (categoriesTitleHtml) {
    //Retrieve single category snippet    
    $ajaxUtils.sendGetRequest(
      categoryHtml,
      function (categoryHtml) {
        var categoriesViewHtml = buildAndShowCategoriesHTML(
                                    categories, categoriesTitleHtml,categoryHtml);
        insertHtml("#main-content", categoriesViewHtml);
      },
      false);
  },
  false);
}

//Using categories data and snippets html, build categories view HTML to be inserted into page
function buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml)
{
  var finalHtml = categoriesTitleHtml;
  finalHtml += "<section class='row'>";

  //Loop over categories
  for(var i=0; i<categories.length; i++) {
    //Insert over categories
    var html = categoryHtml;
    var name = "" + categories[i].name;
    var short_name = categories[i].short_name;
    html = insertProperty(html, "name", name);
    html = insertProperty(html, "short_name", short_name);
    finalHtml += html;
  }
  finalHtml += "</section>";
  return finalHtml;
}

//Builds HTML for the single category page based ont he data from the server
function buildAndShowMenuItemsHTML (catetoryMenuItems) {
  //Load title snippet of menu items page
  $ajaxUtils.sendGetRequest(
    menuItemsTitleHtml,
    function (menuItemsTitleHtml) {
      //Retrieve single menu item snippet
      $ajaxUtils.sendGetRequest(
        menuItemHtml,
        function (menuItemHtml) {
          var menuItemsViewHtml = buildMenuItemsViewHtml(categoryMenuItems, menuItemsTitleHtml,menuItemHtml);
          insertHtml("#main-content",menuItemsViewHtml);
        },
        false);
    },
    false);
}

global.$dc = dc;

})(window);
