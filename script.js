const contaner = document.querySelector(".contaner")
//css style 
// contaner.style.padding = "0px"
contaner.style.backgroundColor = "gray"
contaner.classList.add("zahra")
//div name divCart2   in  contaner div
const divCart2 = document.createElement("div")
//css style
divCart2.style.display = "grid"
divCart2.style.gridTemplateColumns = "repeat(3, auto)"
divCart2.style.gridGap = "20px"
divCart2.style.padding = "50px"
// console.log(divCart2.style)
contaner.append(divCart2)


const main = async () =>{
    try{
        //get API
        const sopranosURL = await axios.get("https://api.tvmaze.com/shows/527/episodes")
        console.log(sopranosURL)

        for( let i=0 ; i < sopranosURL.data.length ; i++ ){
        
        
            //  HEADING
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
        console.log(heading)
        // divCart2.append(heading)

        //css style HEADING
        // heading.style.border = "solid"
        // heading.style.borderRadius = "2rem"
        heading.style.padding = "20px"
        heading.style.paddingLeft = "50px"
        heading.style.alignItems = "center"
        heading.style.backgroundColor = "#0CAEF5"

        

        //    IMAGE
        const imge = document.createElement("img")
        imge.src = sopranosURL.data[i].image.medium
        console.log(imge)
        // divCart2.append(imge)
        // css style IMAGE
        imge.style.paddingLeft = "50px"
        imge.style.borderRadius = "2rem"



        //   SUMMARY
        const paragraph = document.createElement("p")
        paragraph.innerHTML = sopranosURL.data[i].summary
        console.log(paragraph)
        // divCart2.append(paragraph)
        // css style SUMMARY
        // paragraph.style.alignItems = "center"
        paragraph.style.paddingLeft = "30px"
        paragraph.style.paddingRight = "30px"
        paragraph.style.fontFamily = "Arial"

        //     READ MORE
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


        //   DIV
        const divCart = document.createElement("div")
        //css style DIV
        // divCart.style.padding = "10px"
        divCart.style.backgroundColor = "#79DEF7"
        divCart.style.border = "solid"
        divCart.style.borderRadius = "2rem"

        divCart.append(heading)
        divCart.append(imge)
        divCart.append(paragraph)
        divCart2.append(divCart)

        }
        
        //   NAV BAR
        const navBar = document.querySelector("div")
        // css style
        // navBar.style.backgroundColor = "#0a9396"
        // navBar.style.paddingBottom = "30px"
        // contaner.append()

        
    }

    catch(error){
        console.log("ERROR:", error)
    }
} 

//call function
main()




