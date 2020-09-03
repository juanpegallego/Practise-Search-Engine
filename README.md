# practise-Crm
Its a web search engine for companies

-The main idea of the page is to integrate and practice concepts of a SPA.-

The purpose of the web is to simulate financial information of companies and bring it to the client in a very simple and fast way.
The navigation bar is made up of only 3 buttons: -HOME-, -CUSTOMER LIST- AND -ADD COMPANY-.
In -HOME- is the base of this page which is a search engine that is centered on the screen. When entering a company name, it checks to see if that company is listed in the database and prints a variety of useful data about that company. If the name of such company is not found, the search button becomes a button that indicates that there was an error, and 3 seconds later, becomes again a search button.

The CUSTOMER LIST part is designed to show a list of all the companies that we have in the database with some important contact information.

In the ADD COMPANY part, the client has a form available to add all the information of a company manually to the database.

The code is very simple, implemented with Vanilla Js, it works by importing customer information with the Fetch method.
The URL ordering method within the page is with the hash #home, #Listado and #Nuevo.

The file "index.html" contains only the index of the web with all the HTML elements.
The file "tabla.json" contains the database that I then import with fetch.
The file "listado.js" contains the fetch method and the printing of the data on the web.
The file "home.js" contains all the declarations, the configuration of the hashes and the operation of the home search engine and the data to show of the companies.
Finally the file "NuevaEmpresa.js" contains the form with which the user would add the information of the new company.


Tasks that remain to be done in the next commits

-Develop a friendlier interface in the sector ADD COMPANY
-Link the data that is added from the Add Company form with the database created in Tabla.json
-Correct problems with events when we request a list of companies since the information is duplicated with each click
