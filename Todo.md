### DataFetching
-- fetch all data in top Component then pass it down as state.
    (good for performance, terrible for app architecture and readability)

-- Data Providers


### Todo

-- build Product Component

-- fetch data from Fake Store api 

-- when an article is clicked: Route to Page for article

### Shop()
 --- add pages
 --- add filter by categotie
 --- when card is clicked, route to new link with card and full ----description


### ArticleCardContainer()
 ---render with conditons e.g. price, category etx

### ArticleCard
 ---Styles: On Mouse Hover: enlarge div, add shadow


### bigBugs
--- cannot refresh /shop. results in error
---> When you refresh all Components unmounts, data is fetched   ----again. On /Home thats not a problem but on /Shop it is
----Shop relies on Api Data and must check if its loading 

