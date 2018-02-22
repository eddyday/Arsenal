# Arsenal player listing
This is a project to test out Gatsby's advanced features. The aim was to build a web app that pulls images and other content from a Wordpress site, list the images on a home page and allow each player to be clicked on to find more information.

Although relatively simple, the app is using several advanced techniques. React is at the core of the app and allows for blazing fast movement between pages. At build, a static site is generated, optimised for best performance. Some features include:

* The individual player pages themselves are programmatically generated using Gatsby's createPages API, which itself leverages Flux's bindActionCreators API. In this example, I am using wordpress' slugs to generate the required slugs for the new pages. 

* Advanced image-processing built into Gatsby allows for responsive images to be generated automagically, greatly improving the load time. Images display with a blurred base64 as the correct images loads, ensuring the flow of the page is never disrupted.

* Multiple React components are used to build the pages. The header component replicates the header on instagram, with the avatar, bio and username being fetched from Wordpress using queries generated in GraphiQL.

## To do
The individual player pages are a little sparse right now. The plan is to find an API delivering up to date player data and to parse the json data into fields, creating a comprehensive player info page. Alternatively, I will generate a JSON file with the necessary data and go from there.

Introduce CSS Modules to clean up styling.


