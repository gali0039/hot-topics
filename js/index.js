const p = console.log;

// GET THE REFERENCES
const $container = document.querySelector(".dynamic-content");
const $links = document.querySelectorAll("nav");
// p($container, $links);

// CREATE THE OBJECT TO STORE THE LOADED CONTENT
const contents = {};



// USE fetch() TO LOAD home.html ON THE PAGE-LOAD.
// STORE THE LOADED CONTENT INTO contents AS A 
// NEW PROPERTY OF contents WITH THE KEY: 
// "./partials/home.html"
fetch("./partials/home.html")
            .then(function (resp) {
                // GET THE RESPONSE
                return resp.text();
            })
            .then(function (data) {
                // PASS THE DATA TO contents[urlVal]
                contents["./partials/home.html"] = data;
                // PASS THE contents[urlVal] TO $container
                $container.innerHTML = contents["./partials/home.html"];
            })




// CREATE THE FUNCTION 
const storeContents = function (urlVal) {
// storeContents RUNS EVERY TIME A LINK IS CLICKED.
// storeContents REQUIRES THE INPUT. THIS INPUT IS
// THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK.
    
// IN THE BODY OF THIS FUNCTION CHECK:
    
   // IF contents OBJECT DOESN'T HAVE A PROPERTY WITH
   // THE KEY THAT IS THE VALUE OF href ATTRIBUTE OF 
   // THE CLICKED LINK - LIKE THIS:
   // !contents[urlVal]
    if (!contents[urlVal]) {
      // IF SO:
        fetch(urlVal)
            .then(function (resp) {
                // GET THE RESPONSE
                return resp.text();
            })
            .then(function (data) {
                // PASS THE DATA TO contents[urlVal]
                contents[urlVal] = data;
                // PASS THE contents[urlVal] TO $container
                $container.innerHTML = contents[urlVal];
            })
    } else {
      // ELSE:
         // THIS MEANS contents OBJECT ALREADY 
         // HAS THIS PROPERTY AND YOU JUST NEED 
         // TO PASS ITS VALUE TO $container 
        $container.innerHTML = contents[urlVal];
    }
}


// CREATE THE FUNCTION THAT WILL HANDLE A LINK-CLICK:
const handleClick = function (ev) {
   // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
    ev.preventDefault();
   // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
    let url = ev.target.href;
    
    p(url)
   // CALL THE FUNCTION storeContents PROVIDING THE href
   // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
   // OF storeContents FUNCTION.
    storeContents(url)
};


// REGISTER handleClick FOR THE CLICK EVENT ON A NAV-BAR LINK
$links[0].addEventListener("click", handleClick);
$links[1].addEventListener("click", handleClick);