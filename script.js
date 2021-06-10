const contaner = document.querySelector(".container")


const divCart2 = document.createElement("div")
divCart2.classList.add("divCart2")
contaner.className = "select"
contaner.append(divCart2)

const main = async () =>{
    try{
        //get API
        // const sopranosURL =  getApi()
        const sopranosURL = await axios.get("https://api.tvmaze.com/shows/527/episodes")
        // console.log(sear)
    
        /* -------------------------------------------------------------------------- */
        /*                                  SELECTOR                                  */
        /* -------------------------------------------------------------------------- */
        const selector = document.querySelector("select")
        selector.className = "selectorClass"
        // navBar.append(select2)
        
        for( let i=0 ; i < sopranosURL.data.length ; i++ ){
        // for(let api of getApi){
        /* -------------------------------------------------------------------------- */
        /*                                  SELECTOR                                  */
        /* -------------------------------------------------------------------------- */
        const option = document.createElement("option")
        option.className = "optionClass"
        if(sopranosURL.data[i].season < 10 ){ 
            const season2 = `0${sopranosURL.data[i].season}`
            if(sopranosURL.data[i].number < 10){
                const number2 = `0${sopranosURL.data[i].number}`
                option.innerHTML = `${sopranosURL.data[i].name} - S${season2} E${number2}` 
            }else{
                option.innerHTML = `${sopranosURL.data[i].name} - S${sopranosURL.data[i].season} E${sopranosURL.data[i].number}`
            }}
        selector.append(option)
        // navBar.append(select2)


        /* --------------------------------- HEADING -------------------------------- */
        const heading = document.createElement("h2")
        // Each part should be zero-padded to two digits
        if(sopranosURL.data[i].season < 10 ){ 
        const season2 = `0${sopranosURL.data[i].season}`
        if(sopranosURL.data[i].number < 10){
            const number2 = `0${sopranosURL.data[i].number}`
            heading.innerHTML = `${sopranosURL.data[i].name} - S${season2} E${number2}` 
        }else{
            heading.innerHTML = `${sopranosURL.data[i].name} - S${sopranosURL.data[i].season} E${sopranosURL.data[i].number}`
        }}
        heading.classList.add("head")
 

        /* ---------------------------------- IMAGE --------------------------------- */
        const imge = document.createElement("img")
        imge.src = sopranosURL.data[i].image.medium
        imge.classList.add("image")



        /* --------------------------------- SUMMARY -------------------------------- */
        const paragraph = document.createElement("p")
        paragraph.innerHTML = sopranosURL.data[i].summary
        paragraph.classList.add("parag")

   
        /* -------------------------------- READ MORE ------------------------------- */
        // if(paragraph.length > 300){
        //     console.log(paragraph)
        //     divCart.append(paragraph)
        // }
        // else{
        //    const longParagraph = paragraph.substr(0,300)
        //     console.log(longParagraph)
        // }
            // const readmore = document.createElement("p")
            // readmore.innerHTML = "Read more"
            // readmore.addEventListener("click", ()=>{
            // })
        //   divCart2.append(readmore)
        // }
        // else{
        //     readmore.type ="button"
        //     readmore.title = "read more"
      
        // }


        /* ----------------------------------- DIV ---------------------------------- */
        const divCart = document.createElement("div")
        // divCart.classList.add("divCart")
        divCart.className = "cartdiv"
        /* ------------------------------ css style DIV ----------------------------- */
        // divCart.style.padding = "10px"
        divCart.style.backgroundColor = "#79DEF7"
        divCart.style.border = "solid"
        divCart.style.borderRadius = "2rem"

        /* --------------------------------- append --------------------------------- */
        divCart.append(heading)
        divCart.append(imge)
        divCart.append(paragraph)
        divCart2.append(divCart)

        }
        


    }

    catch(error){
        console.log("ERROR:", error)
    }
} 


//call function
main()


/* -------------------------------------------------------------------------- */
/*                                   SEARCH                                   */
/* -------------------------------------------------------------------------- */

let searchBar = document.querySelector(".search_box")

searchBar.addEventListener("keyup", ()=>{

    const label = document.querySelector("label")
    const cartdivs = document.getElementsByClassName("cartdiv")
    let searchBar = document.querySelector(".search_box")
    searchBar = searchBar.value.toLowerCase()
    // console.log(searchBar)
    let counter = 0;

    for(j=0;j<cartdivs.length;j++){
        if(!cartdivs[j].innerHTML.toLowerCase().includes(searchBar)){
            cartdivs[j].style.display = "none"
        } else{
            cartdivs[j].style.display = "block"
            counter++
        }
    }
    
    label.innerHTML = `Displaying ${counter}/${cartdivs.length} Episodes`
})


/* -------------------------------------------------------------------------- */
/*                                  SELECTOR                                  */
/* -------------------------------------------------------------------------- */
let selectBar = document.querySelector(".select")
selectBar.addEventListener("change", ()=>{
    const cartdivs = document.getElementsByClassName("cartdiv")
    const option = document.getElementsByClassName("optionClass")
    let selects = selectBar.options[selectBar.selectedIndex].text
    // console.log(selects)

    for (let z = 0; z < selectBar.length; z++) {
        // console.log(option[z])

        if (option[z].value === selects) {
            cartdivs[z].style.display = "block"
        }else{
            cartdivs[z].style.display = "none"
        };
        
    }
})



function toggleShow() {
    let showsS = document.getElementById("box")
    showsS.classList.toggle("show")
}
