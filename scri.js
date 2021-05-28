const contaner = document.querySelector(".contaner")
//div head
// const navBar = document.createElement("div")
// contaner.append(navBar)

//div name divCart2   in  contaner div
const divCart2 = document.createElement("div")
divCart2.classList.add("divCart2")
contaner.classList = "select"
contaner.append(divCart2)

let sear =[]
const searchBar = document.querySelector("input")
console.log(searchBar)

searchBar.addEventListener("keyup", (e)=>{
    const searching = e.target.value
    const filterValue1 = sear.filter(value1 => {
       return value1.data.include(searching)
    })
    console.log(filterValue1)
})


const main = async () =>{
    try{
        //get API
        // const sopranosURL =  getApi()
        // const sopranosURL = await axios.get("https://api.tvmaze.com/shows/527/episodes")
        // const sopranosURL = await fetch("https://api.tvmaze.com/shows/527/episodes")
        // sear = await sopranosURL.json();
        // console.log(sear)
        
        
        //SELECTOR
        const select2 = document.querySelector("select")
        // select2.innerText ="select one of season!"
        // navBar.append(select2)


        //SEARCH
        
        // const sear = search2.value
        // navBar.append(search2)

        

        for( let i=0 ; i < sopranosURL.data.length ; i++ ){
        


        //  SELECTOR
        const option1 = document.createElement("option")
        option1.classList = "optionClass"
        if(sopranosURL.data[i].season < 10 ){ 
            const season2 = `0${sopranosURL.data[i].season}`
            if(sopranosURL.data[i].number < 10){
                const number2 = `0${sopranosURL.data[i].number}`
                option1.innerHTML = `${sopranosURL.data[i].name} - S${season2} E${number2}` 
            }else{
                option1.innerHTML = `${sopranosURL.data[i].name} - S${sopranosURL.data[i].season} E${sopranosURL.data[i].number}`
            }}
        select2.append(option1)
        // navBar.append(select2)

        //SEARCH
       
        
        // const sear2 = sopranosURL.data[i].innerHTML.toLowerCase().includes(sear)
        // if(sear2 !== true){
        //     sopranosURL.data[i].style.display = "none"
        // }else{
        //     sopranosURL.data[i].style.display = "block"
        // }

       


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
        heading.classList.add("head")
 

        


        //    IMAGE
        const imge = document.createElement("img")
        imge.src = sopranosURL.data[i].image.medium
        imge.classList.add("image")





        //   SUMMARY
        const paragraph = document.createElement("p")
        paragraph.innerHTML = sopranosURL.data[i].summary
        paragraph.classList.add("parag")

   
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
        

        // search2.addEventListener("input", event =>{
        //     event.preventDefault()
        //     const term = event.target.value.toLowerCase()
        //     let searchResult = sopranosURL.data.filter( value => {
        //         return sopranosURL.data.toLowerCase().includes(term)
        //     })
        //     creT
        // })

    }

    catch(error){
        console.log("ERROR:", error)
    }
} 

//call function
main()

function getApi(){
    return[
        {
            "id": 47840,
            "url": "https://www.tvmaze.com/episodes/47840/the-sopranos-1x01-the-sopranos",
            "name": "The Sopranos",
            "season": 1,
            "number": 1,
            "type": "regular",
            "airdate": "1999-01-10",
            "airtime": "21:00",
            "airstamp": "1999-01-11T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504282.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504282.jpg"
            },
            "summary": "<p>A mobster passes out at a family barbecue and seeks therapy to understand why.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47840"
                }
            }
        },
        {
            "id": 47841,
            "url": "https://www.tvmaze.com/episodes/47841/the-sopranos-1x02-46-long",
            "name": "46 Long",
            "season": 1,
            "number": 2,
            "type": "regular",
            "airdate": "1999-01-17",
            "airtime": "21:00",
            "airstamp": "1999-01-18T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504283.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504283.jpg"
            },
            "summary": "<p>Tony is getting fed up with his mother. Brendan Filone acts against Tony's wishes. Salvatore and Paulie try to track down A.J.'s teacher's stolen car.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47841"
                }
            }
        },
        {
            "id": 47842,
            "url": "https://www.tvmaze.com/episodes/47842/the-sopranos-1x03-denial-anger-acceptance",
            "name": "Denial, Anger, Acceptance",
            "season": 1,
            "number": 3,
            "type": "regular",
            "airdate": "1999-01-24",
            "airtime": "21:00",
            "airstamp": "1999-01-25T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504284.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504284.jpg"
            },
            "summary": "<p>Tony encourages an unwanted son-in-law to divorce, Carmela learns another secret of Tony's, Meadow experiments with speed to study for the SATs, and Chris and Brendan find out the price of disrespecting Junior.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47842"
                }
            }
        },
        {
            "id": 47843,
            "url": "https://www.tvmaze.com/episodes/47843/the-sopranos-1x04-meadowlands",
            "name": "Meadowlands",
            "season": 1,
            "number": 4,
            "type": "regular",
            "airdate": "1999-01-31",
            "airtime": "21:00",
            "airstamp": "1999-02-01T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504285.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504285.jpg"
            },
            "summary": "<p>Jackie's death leaves a power vacuum, Brendan's death leaves Chris fearing for his life, and Anthony's discovery of what his father really does leaves him confused.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47843"
                }
            }
        },
        {
            "id": 47844,
            "url": "https://www.tvmaze.com/episodes/47844/the-sopranos-1x05-college",
            "name": "College",
            "season": 1,
            "number": 5,
            "type": "regular",
            "airdate": "1999-02-07",
            "airtime": "21:00",
            "airstamp": "1999-02-08T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504293.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504293.jpg"
            },
            "summary": "<p>While visiting colleges with Meadow, Tony spots a snitch. Carmela, meanwhile, discovers something about Dr. Melfi.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47844"
                }
            }
        },
        {
            "id": 47845,
            "url": "https://www.tvmaze.com/episodes/47845/the-sopranos-1x06-pax-soprana",
            "name": "Pax Soprana",
            "season": 1,
            "number": 6,
            "type": "regular",
            "airdate": "1999-02-14",
            "airtime": "21:00",
            "airstamp": "1999-02-15T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504286.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504286.jpg"
            },
            "summary": "<p>Tony tries to balance Junior against the other capos, while Carmela reasserts herself as the woman in Tony's life.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47845"
                }
            }
        },
        {
            "id": 47846,
            "url": "https://www.tvmaze.com/episodes/47846/the-sopranos-1x07-down-neck",
            "name": "Down Neck",
            "season": 1,
            "number": 7,
            "type": "regular",
            "airdate": "1999-02-21",
            "airtime": "21:00",
            "airstamp": "1999-02-22T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504287.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504287.jpg"
            },
            "summary": "<p>Anthony has disciplinary problems at school, prompting Tony to recount memories of his childhood with Dr. Melfi.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47846"
                }
            }
        },
        {
            "id": 47847,
            "url": "https://www.tvmaze.com/episodes/47847/the-sopranos-1x08-the-legend-of-tennessee-moltisanti",
            "name": "The Legend of Tennessee Moltisanti",
            "season": 1,
            "number": 8,
            "type": "regular",
            "airdate": "1999-02-28",
            "airtime": "21:00",
            "airstamp": "1999-03-01T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504288.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504288.jpg"
            },
            "summary": "<p>The FBI begins closing in on the DiMeo family. Tony and Carmela are angry over all the attention Italians get from the authorities, while Chris fumes that he's not getting enough attention.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47847"
                }
            }
        },
        {
            "id": 47848,
            "url": "https://www.tvmaze.com/episodes/47848/the-sopranos-1x09-boca",
            "name": "Boca",
            "season": 1,
            "number": 9,
            "type": "regular",
            "airdate": "1999-03-07",
            "airtime": "21:00",
            "airstamp": "1999-03-08T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504289.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504289.jpg"
            },
            "summary": "<p>The capos discuss what to do about the local soccer coach, while Junior's mouth causes him some embarrassment.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47848"
                }
            }
        },
        {
            "id": 47849,
            "url": "https://www.tvmaze.com/episodes/47849/the-sopranos-1x10-a-hit-is-a-hit",
            "name": "A Hit is a Hit",
            "season": 1,
            "number": 10,
            "type": "regular",
            "airdate": "1999-03-14",
            "airtime": "21:00",
            "airstamp": "1999-03-15T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504290.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504290.jpg"
            },
            "summary": "<p>Tony tries to branch out into legitimate investments, while Chris and Adriana decide to try their hands at music production.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47849"
                }
            }
        },
        {
            "id": 47850,
            "url": "https://www.tvmaze.com/episodes/47850/the-sopranos-1x11-nobody-knows-anything",
            "name": "Nobody Knows Anything",
            "season": 1,
            "number": 11,
            "type": "regular",
            "airdate": "1999-03-21",
            "airtime": "21:00",
            "airstamp": "1999-03-22T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504294.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504294.jpg"
            },
            "summary": "<p>Following the arrest of two of his men, Tony suspects a traitor. Efforts to discover who, however, are stymied.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47850"
                }
            }
        },
        {
            "id": 47851,
            "url": "https://www.tvmaze.com/episodes/47851/the-sopranos-1x12-isabella",
            "name": "Isabella",
            "season": 1,
            "number": 12,
            "type": "regular",
            "airdate": "1999-03-28",
            "airtime": "21:00",
            "airstamp": "1999-03-29T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504291.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504291.jpg"
            },
            "summary": "<p>The stress Tony is going through begins to take its toll, and the hit Junior has ordered doesn't help.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47851"
                }
            }
        },
        {
            "id": 47852,
            "url": "https://www.tvmaze.com/episodes/47852/the-sopranos-1x13-i-dream-of-jeannie-cusamano",
            "name": "I Dream of Jeannie Cusamano",
            "season": 1,
            "number": 13,
            "type": "regular",
            "airdate": "1999-04-04",
            "airtime": "21:00",
            "airstamp": "1999-04-05T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504292.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504292.jpg"
            },
            "summary": "<p>Tony starts cleaning house, while Artie feels torn between keeping the peace in his household, and getting even with Tony for destroying his restaurant.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47852"
                }
            }
        },
        {
            "id": 47853,
            "url": "https://www.tvmaze.com/episodes/47853/the-sopranos-2x01-guy-walks-into-a-psychiatrists-office",
            "name": "Guy Walks Into a Psychiatrist's Office",
            "season": 2,
            "number": 1,
            "type": "regular",
            "airdate": "2000-01-16",
            "airtime": "21:00",
            "airstamp": "2000-01-17T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504295.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504295.jpg"
            },
            "summary": "<p>Pussy returns after months in hiding, Chris starts a boiler room stock operation, and Tony's long-lost sister shows up on the doorstep.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47853"
                }
            }
        },
        {
            "id": 47854,
            "url": "https://www.tvmaze.com/episodes/47854/the-sopranos-2x02-do-not-resuscitate",
            "name": "Do Not Resuscitate",
            "season": 2,
            "number": 2,
            "type": "regular",
            "airdate": "2000-01-23",
            "airtime": "21:00",
            "airstamp": "2000-01-24T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504296.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504296.jpg"
            },
            "summary": "<p>Junior leaves prison due to ill health and placed under house arrest, while Livia's health also declines. Pussy begins talking with someone interested in learning more about Tony.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47854"
                }
            }
        },
        {
            "id": 47855,
            "url": "https://www.tvmaze.com/episodes/47855/the-sopranos-2x03-toodle-fucking-oo",
            "name": "Toodle-Fucking-Oo",
            "season": 2,
            "number": 3,
            "type": "regular",
            "airdate": "2000-01-30",
            "airtime": "21:00",
            "airstamp": "2000-01-31T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504297.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504297.jpg"
            },
            "summary": "<p>Richie Aprile gets out after ten years in prison and starts reasserting his authority while unaware of the changes made in the crime family's archetype. Meadow gets in trouble after a party gets out of hand.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47855"
                }
            }
        },
        {
            "id": 47856,
            "url": "https://www.tvmaze.com/episodes/47856/the-sopranos-2x04-commendatori",
            "name": "Commendatori",
            "season": 2,
            "number": 4,
            "type": "regular",
            "airdate": "2000-02-06",
            "airtime": "21:00",
            "airstamp": "2000-02-07T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504298.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504298.jpg"
            },
            "summary": "<p>Tony, Paulie and Chris travel to Naples to conduct a business deal, while Pussy becomes more stressed over trying to balance his secret lives.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47856"
                }
            }
        },
        {
            "id": 47857,
            "url": "https://www.tvmaze.com/episodes/47857/the-sopranos-2x05-big-girls-dont-cry",
            "name": "Big Girls Don't Cry",
            "season": 2,
            "number": 5,
            "type": "regular",
            "airdate": "2000-02-13",
            "airtime": "21:00",
            "airstamp": "2000-02-14T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504299.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504299.jpg"
            },
            "summary": "<p>Paulie and Silvio get promoted, Furio gets welcomed, Pussy gets pushed aside, and Chris gets frustrated with his Hollywood aspirations.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47857"
                }
            }
        },
        {
            "id": 47858,
            "url": "https://www.tvmaze.com/episodes/47858/the-sopranos-2x06-the-happy-wanderer",
            "name": "The Happy Wanderer",
            "season": 2,
            "number": 6,
            "type": "regular",
            "airdate": "2000-02-20",
            "airtime": "21:00",
            "airstamp": "2000-02-21T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504300.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504300.jpg"
            },
            "summary": "<p>Tony's old school friend digs himself into trouble with his gambling, while Tony's family problems only continue to grow.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47858"
                }
            }
        },
        {
            "id": 47859,
            "url": "https://www.tvmaze.com/episodes/47859/the-sopranos-2x07-d-girl",
            "name": "D-Girl",
            "season": 2,
            "number": 7,
            "type": "regular",
            "airdate": "2000-02-27",
            "airtime": "21:00",
            "airstamp": "2000-02-28T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504301.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504301.jpg"
            },
            "summary": "<p>Anthony continues to cause problems at home, while Pussy's divided loyalties cause him greater anguish.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47859"
                }
            }
        },
        {
            "id": 47860,
            "url": "https://www.tvmaze.com/episodes/47860/the-sopranos-2x08-full-leather-jacket",
            "name": "Full Leather Jacket",
            "season": 2,
            "number": 8,
            "type": "regular",
            "airdate": "2000-03-05",
            "airtime": "21:00",
            "airstamp": "2000-03-06T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504302.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504302.jpg"
            },
            "summary": "<p>Rebellion by some of the lower soldiers ends in bloodshed, while Carmela starts intimidating her neighbors to help Meadow's chances at Georgetown.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47860"
                }
            }
        },
        {
            "id": 47861,
            "url": "https://www.tvmaze.com/episodes/47861/the-sopranos-2x09-from-where-to-eternity",
            "name": "From Where to Eternity",
            "season": 2,
            "number": 9,
            "type": "regular",
            "airdate": "2000-03-12",
            "airtime": "21:00",
            "airstamp": "2000-03-13T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504303.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504303.jpg"
            },
            "summary": "<p>Chris awakens from his coma with a message for Tony and Paulie. Carmela, meanwhile, wants Tony to take a cut.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47861"
                }
            }
        },
        {
            "id": 47862,
            "url": "https://www.tvmaze.com/episodes/47862/the-sopranos-2x10-bust-out",
            "name": "Bust Out",
            "season": 2,
            "number": 10,
            "type": "regular",
            "airdate": "2000-03-19",
            "airtime": "21:00",
            "airstamp": "2000-03-20T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504304.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504304.jpg"
            },
            "summary": "<p>Tony continues putting the squeeze on David, while Richie discusses the possibility with Junior of removing some competition while 'Big Pussy' Bonpensiero continues to be an informant.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47862"
                }
            }
        },
        {
            "id": 47863,
            "url": "https://www.tvmaze.com/episodes/47863/the-sopranos-2x11-house-arrest",
            "name": "House Arrest",
            "season": 2,
            "number": 11,
            "type": "regular",
            "airdate": "2000-03-26",
            "airtime": "21:00",
            "airstamp": "2000-03-27T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504305.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504305.jpg"
            },
            "summary": "<p>Junior feels the restrictions of his house arrest acutely, while Tony starts putting in hours at his actual job to allay FBI suspicions, while Junior and Richie uses the garbage pick up routes for a double purpose.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47863"
                }
            }
        },
        {
            "id": 47864,
            "url": "https://www.tvmaze.com/episodes/47864/the-sopranos-2x12-knight-in-white-satin-armor",
            "name": "Knight in White Satin Armor",
            "season": 2,
            "number": 12,
            "type": "regular",
            "airdate": "2000-04-02",
            "airtime": "21:00",
            "airstamp": "2000-04-03T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504306.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504306.jpg"
            },
            "summary": "<p>Richie and Janice get engaged, but Richie's violent temper finally takes him too far. Tony, meanwhile, breaks up with Irina, much to her dismay.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47864"
                }
            }
        },
        {
            "id": 47865,
            "url": "https://www.tvmaze.com/episodes/47865/the-sopranos-2x13-funhouse",
            "name": "Funhouse",
            "season": 2,
            "number": 13,
            "type": "regular",
            "airdate": "2000-04-09",
            "airtime": "21:00",
            "airstamp": "2000-04-10T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504307.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504307.jpg"
            },
            "summary": "<p>Tony gets sick from food poisoning and blames Artie's restaurant. Pussy, meanwhile, reaches the end of the line.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47865"
                }
            }
        },
        {
            "id": 47866,
            "url": "https://www.tvmaze.com/episodes/47866/the-sopranos-3x01-mr-ruggerios-neighborhood",
            "name": "Mr. Ruggerio's Neighborhood",
            "season": 3,
            "number": 1,
            "type": "regular",
            "airdate": "2001-03-04",
            "airtime": "21:00",
            "airstamp": "2001-03-05T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504310.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504310.jpg"
            },
            "summary": "<p>The FBI has trouble finding a new informant, so they attempt to bug the Soprano home. Meanwhile, Anthony continues to get into trouble at school.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47866"
                }
            }
        },
        {
            "id": 47867,
            "url": "https://www.tvmaze.com/episodes/47867/the-sopranos-3x02-proshai-livushka",
            "name": "Proshai, Livushka",
            "season": 3,
            "number": 2,
            "type": "regular",
            "airdate": "2001-03-04",
            "airtime": "21:00",
            "airstamp": "2001-03-05T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504311.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504311.jpg"
            },
            "summary": "<p>Livia dies of a stroke, bringing the family together one more time for the funeral where old tensions resurface.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47867"
                }
            }
        },
        {
            "id": 47868,
            "url": "https://www.tvmaze.com/episodes/47868/the-sopranos-3x03-fortunate-son",
            "name": "Fortunate Son",
            "season": 3,
            "number": 3,
            "type": "regular",
            "airdate": "2001-03-11",
            "airtime": "21:00",
            "airstamp": "2001-03-12T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504312.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504312.jpg"
            },
            "summary": "<p>Chris becomes a made man, while Tony experiences another panic attack. Meadow continues to seethe over Tony's treatment of her boyfriend.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47868"
                }
            }
        },
        {
            "id": 47869,
            "url": "https://www.tvmaze.com/episodes/47869/the-sopranos-3x04-employee-of-the-month",
            "name": "Employee of the Month",
            "season": 3,
            "number": 4,
            "type": "regular",
            "airdate": "2001-03-18",
            "airtime": "21:00",
            "airstamp": "2001-03-19T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504313.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504313.jpg"
            },
            "summary": "<p>Dr. Melfi is brutally attacked, and when the justice system lets her down, she must consider asking Tony for help.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47869"
                }
            }
        },
        {
            "id": 47870,
            "url": "https://www.tvmaze.com/episodes/47870/the-sopranos-3x05-another-toothpick",
            "name": "Another Toothpick",
            "season": 3,
            "number": 5,
            "type": "regular",
            "airdate": "2001-03-25",
            "airtime": "21:00",
            "airstamp": "2001-03-26T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504314.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504314.jpg"
            },
            "summary": "<p>Tony and Carmela try a therapy session together, which ends in an angry dispute. Artie, meanwhile, tries to move in on Adriana.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47870"
                }
            }
        },
        {
            "id": 47871,
            "url": "https://www.tvmaze.com/episodes/47871/the-sopranos-3x06-university",
            "name": "University",
            "season": 3,
            "number": 6,
            "type": "regular",
            "airdate": "2001-04-01",
            "airtime": "21:00",
            "airstamp": "2001-04-02T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504315.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504315.jpg"
            },
            "summary": "<p>Noah and Meadow's relationship is disrupted by her roommate, while Ralphie starts getting rough with one of the strippers from the Bada Bing causing Tony to intervene and questionably violating one of the mafia codes of conduct.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47871"
                }
            }
        },
        {
            "id": 47872,
            "url": "https://www.tvmaze.com/episodes/47872/the-sopranos-3x07-second-opinion",
            "name": "Second Opinion",
            "season": 3,
            "number": 7,
            "type": "regular",
            "airdate": "2001-04-08",
            "airtime": "21:00",
            "airstamp": "2001-04-09T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504316.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504316.jpg"
            },
            "summary": "<p>Junior continues his cancer treatments, but the prognosis is iffy. Chris, meanwhile, finds himself under suspicion from Paulie.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47872"
                }
            }
        },
        {
            "id": 47873,
            "url": "https://www.tvmaze.com/episodes/47873/the-sopranos-3x08-he-is-risen",
            "name": "He is Risen",
            "season": 3,
            "number": 8,
            "type": "regular",
            "airdate": "2001-04-15",
            "airtime": "21:00",
            "airstamp": "2001-04-16T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504317.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504317.jpg"
            },
            "summary": "<p>Tensions rise between Tony and Ralphie until circumstances demand that they resolve their differences. Meadow gets involved with Jackie's son, and ends up in trouble.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47873"
                }
            }
        },
        {
            "id": 47874,
            "url": "https://www.tvmaze.com/episodes/47874/the-sopranos-3x09-the-telltale-moozadell",
            "name": "The Telltale Moozadell",
            "season": 3,
            "number": 9,
            "type": "regular",
            "airdate": "2001-04-22",
            "airtime": "21:00",
            "airstamp": "2001-04-23T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504318.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504318.jpg"
            },
            "summary": "<p>Tony continues seeing Gloria, another of Dr. Melfi's patients, while Meadow continues seeing Jackie Jr.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47874"
                }
            }
        },
        {
            "id": 47875,
            "url": "https://www.tvmaze.com/episodes/47875/the-sopranos-3x10-to-save-us-all-from-satans-power",
            "name": "To Save Us All from Satan's Power",
            "season": 3,
            "number": 10,
            "type": "regular",
            "airdate": "2001-04-29",
            "airtime": "21:00",
            "airstamp": "2001-04-30T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504319.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504319.jpg"
            },
            "summary": "<p>Tony starts having flashbacks about Pussy's betrayal, and then later discovers that Jackie Jr. has been failing in his responsibilities.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47875"
                }
            }
        },
        {
            "id": 47876,
            "url": "https://www.tvmaze.com/episodes/47876/the-sopranos-3x11-pine-barrens",
            "name": "Pine Barrens",
            "season": 3,
            "number": 11,
            "type": "regular",
            "airdate": "2001-05-06",
            "airtime": "21:00",
            "airstamp": "2001-05-07T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504320.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504320.jpg"
            },
            "summary": "<p>While Silvio has the flu, Chris and Paulie run his collections for him, which results in the pair getting lost in the woods and nearly freezing to death while Tony's affair with Gloria goes sour.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47876"
                }
            }
        },
        {
            "id": 47877,
            "url": "https://www.tvmaze.com/episodes/47877/the-sopranos-3x12-amour-fou",
            "name": "Amour Fou",
            "season": 3,
            "number": 12,
            "type": "regular",
            "airdate": "2001-05-13",
            "airtime": "21:00",
            "airstamp": "2001-05-14T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504321.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504321.jpg"
            },
            "summary": "<p>Gloria grows increasingly demanding until Tony realizes who she is, and Jackie Jr. ends up in very serious trouble when Chris realizes who he is.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47877"
                }
            }
        },
        {
            "id": 47878,
            "url": "https://www.tvmaze.com/episodes/47878/the-sopranos-3x13-army-of-one",
            "name": "Army of One",
            "season": 3,
            "number": 13,
            "type": "regular",
            "airdate": "2001-05-20",
            "airtime": "21:00",
            "airstamp": "2001-05-21T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504322.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504322.jpg"
            },
            "summary": "<p>Ralphie issues his final decision on the fate of Jackie Jr., Anthony Jr., faces military school after getting expelled, Paulie and Ralphie have a financial conflict while the FBI assigns Adriana meets a new \"friend.\"</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47878"
                }
            }
        },
        {
            "id": 47879,
            "url": "https://www.tvmaze.com/episodes/47879/the-sopranos-4x01-for-all-debts-public-and-private",
            "name": "For All Debts Public and Private",
            "season": 4,
            "number": 1,
            "type": "regular",
            "airdate": "2002-09-15",
            "airtime": "21:00",
            "airstamp": "2002-09-16T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504327.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504327.jpg"
            },
            "summary": "<p>Chris puts a ghost from his past to rest, while Carmela grows uneasy about her future.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47879"
                }
            }
        },
        {
            "id": 47880,
            "url": "https://www.tvmaze.com/episodes/47880/the-sopranos-4x02-no-show",
            "name": "No Show",
            "season": 4,
            "number": 2,
            "type": "regular",
            "airdate": "2002-09-22",
            "airtime": "21:00",
            "airstamp": "2002-09-23T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504328.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504328.jpg"
            },
            "summary": "<p>Chris' success earns him some jealousy, Adriana learns the truth about her friend, and Meadow still claims and Jackie Jr.'s death still weighs heavily on her.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47880"
                }
            }
        },
        {
            "id": 47881,
            "url": "https://www.tvmaze.com/episodes/47881/the-sopranos-4x03-christopher",
            "name": "Christopher",
            "season": 4,
            "number": 3,
            "type": "regular",
            "airdate": "2002-09-29",
            "airtime": "21:00",
            "airstamp": "2002-09-30T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504329.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504329.jpg"
            },
            "summary": "<p>Columbus Day ignites tensions between Italians and Native Americans, and Bobby receives devastating news about his wife.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47881"
                }
            }
        },
        {
            "id": 47882,
            "url": "https://www.tvmaze.com/episodes/47882/the-sopranos-4x04-the-weight",
            "name": "The Weight",
            "season": 4,
            "number": 4,
            "type": "regular",
            "airdate": "2002-10-06",
            "airtime": "21:00",
            "airstamp": "2002-10-07T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504330.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504330.jpg"
            },
            "summary": "<p>A joke sparks a series of hit contracts, while Carmela finds herself happier than perhaps she should be that Furio will be around for good.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47882"
                }
            }
        },
        {
            "id": 47883,
            "url": "https://www.tvmaze.com/episodes/47883/the-sopranos-4x05-pie-o-my",
            "name": "Pie-O-My",
            "season": 4,
            "number": 5,
            "type": "regular",
            "airdate": "2002-10-13",
            "airtime": "21:00",
            "airstamp": "2002-10-14T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504331.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504331.jpg"
            },
            "summary": "<p>Ralph buys a racehorse, but Tony ends up more attached to it than Ralphie is. Carmela starts trying to invest in her future.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47883"
                }
            }
        },
        {
            "id": 47884,
            "url": "https://www.tvmaze.com/episodes/47884/the-sopranos-4x06-everybody-hurts",
            "name": "Everybody Hurts",
            "season": 4,
            "number": 6,
            "type": "regular",
            "airdate": "2002-10-20",
            "airtime": "21:00",
            "airstamp": "2002-10-21T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504332.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504332.jpg"
            },
            "summary": "<p>Tony feels depressed over the negative impact he has on people who don't deserve it, while Carmela tries to set up Furio with a friend, AJ is uncomfortable with his girlfriend's wealth, Artie attempts a new business venture.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47884"
                }
            }
        },
        {
            "id": 47885,
            "url": "https://www.tvmaze.com/episodes/47885/the-sopranos-4x07-watching-too-much-television",
            "name": "Watching Too Much Television",
            "season": 4,
            "number": 7,
            "type": "regular",
            "airdate": "2002-10-27",
            "airtime": "21:00",
            "airstamp": "2002-10-28T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504333.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504333.jpg"
            },
            "summary": "<p>Adriana learns that life is not like TV shows, while Tony discovers that a former girlfriend has moved on, along with Ralphie and others they scam the Department of Housing and Urban Development.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47885"
                }
            }
        },
        {
            "id": 47886,
            "url": "https://www.tvmaze.com/episodes/47886/the-sopranos-4x08-mergers-amp-acquisitions",
            "name": "Mergers &amp; Acquisitions",
            "season": 4,
            "number": 8,
            "type": "regular",
            "airdate": "2002-11-03",
            "airtime": "21:00",
            "airstamp": "2002-11-04T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504334.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504334.jpg"
            },
            "summary": "<p>Paulie has to take care of some rough relationships for his mother, while Tony's fancy for a fellow horse fancier lands him in trouble with Carmela.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47886"
                }
            }
        },
        {
            "id": 47887,
            "url": "https://www.tvmaze.com/episodes/47887/the-sopranos-4x09-whoever-did-this",
            "name": "Whoever Did This",
            "season": 4,
            "number": 9,
            "type": "regular",
            "airdate": "2002-11-10",
            "airtime": "21:00",
            "airstamp": "2002-11-11T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504335.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504335.jpg"
            },
            "summary": "<p>Ralph's callous behavior finally steps over the line, while Chris gets deeper into his heroin habit.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47887"
                }
            }
        },
        {
            "id": 47888,
            "url": "https://www.tvmaze.com/episodes/47888/the-sopranos-4x10-the-strong-silent-type",
            "name": "The Strong, Silent Type",
            "season": 4,
            "number": 10,
            "type": "regular",
            "airdate": "2002-11-17",
            "airtime": "21:00",
            "airstamp": "2002-11-18T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504336.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504336.jpg"
            },
            "summary": "<p>In the midst of suspicions that he killed Ralph, Tony tries to intervene to get Chris clean and sober.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47888"
                }
            }
        },
        {
            "id": 47889,
            "url": "https://www.tvmaze.com/episodes/47889/the-sopranos-4x11-calling-all-cars",
            "name": "Calling All Cars",
            "season": 4,
            "number": 11,
            "type": "regular",
            "airdate": "2002-11-24",
            "airtime": "21:00",
            "airstamp": "2002-11-25T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504337.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504337.jpg"
            },
            "summary": "<p>Tony's dreams seem to tell him where his life is headed, but he still feels as though he's out of control.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47889"
                }
            }
        },
        {
            "id": 47890,
            "url": "https://www.tvmaze.com/episodes/47890/the-sopranos-4x12-eloise",
            "name": "Eloise",
            "season": 4,
            "number": 12,
            "type": "regular",
            "airdate": "2002-12-01",
            "airtime": "21:00",
            "airstamp": "2002-12-02T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504338.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504338.jpg"
            },
            "summary": "<p>Carmela and Furio grow too close for safety, while Paulie discovers that he's not as big a fish as he thought he was.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47890"
                }
            }
        },
        {
            "id": 47891,
            "url": "https://www.tvmaze.com/episodes/47891/the-sopranos-4x13-whitecaps",
            "name": "Whitecaps",
            "season": 4,
            "number": 13,
            "type": "regular",
            "airdate": "2002-12-08",
            "airtime": "21:00",
            "airstamp": "2002-12-09T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504339.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504339.jpg"
            },
            "summary": "<p>Junior's trial comes to an end, but Tony's trials are just getting underway. Also, the Sopranos almost purchase a house on the beach.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47891"
                }
            }
        },
        {
            "id": 47892,
            "url": "https://www.tvmaze.com/episodes/47892/the-sopranos-5x01-two-tonys",
            "name": "Two Tonys",
            "season": 5,
            "number": 1,
            "type": "regular",
            "airdate": "2004-03-07",
            "airtime": "21:00",
            "airstamp": "2004-03-08T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504340.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504340.jpg"
            },
            "summary": "<p>Some of the old guards are released from prison and want to get back in the action. Chris and Paulie are at each other's throats over matters of money and respect, and Tony decides to tell Dr. Melfi what's really on his mind.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47892"
                }
            }
        },
        {
            "id": 47893,
            "url": "https://www.tvmaze.com/episodes/47893/the-sopranos-5x02-rat-pack",
            "name": "Rat Pack",
            "season": 5,
            "number": 2,
            "type": "regular",
            "airdate": "2004-03-14",
            "airtime": "21:00",
            "airstamp": "2004-03-15T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504341.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504341.jpg"
            },
            "summary": "<p>Carmine's passing opens new wounds, while cousin Tony wants to put his past behind him. Tony Soprano, meanwhile, discovers a traitor.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47893"
                }
            }
        },
        {
            "id": 47894,
            "url": "https://www.tvmaze.com/episodes/47894/the-sopranos-5x03-wheres-johnny",
            "name": "Where's Johnny?",
            "season": 5,
            "number": 3,
            "type": "regular",
            "airdate": "2004-03-21",
            "airtime": "21:00",
            "airstamp": "2004-03-22T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504342.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504342.jpg"
            },
            "summary": "<p>With Carmine's passing and Feech's arrival, turf wars are breaking out around New Jersey. Junior's mental health, meanwhile, starts to decline.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47894"
                }
            }
        },
        {
            "id": 47895,
            "url": "https://www.tvmaze.com/episodes/47895/the-sopranos-5x04-all-happy-families",
            "name": "All Happy Families...",
            "season": 5,
            "number": 4,
            "type": "regular",
            "airdate": "2004-03-28",
            "airtime": "21:00",
            "airstamp": "2004-03-29T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504343.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504343.jpg"
            },
            "summary": "<p>Feech makes a pain of himself by trying to return to his past glory. Carmela tries to work with Anthony's teacher to rein in the out-of-control son.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47895"
                }
            }
        },
        {
            "id": 47896,
            "url": "https://www.tvmaze.com/episodes/47896/the-sopranos-5x05-irregular-around-the-margins",
            "name": "Irregular Around the Margins",
            "season": 5,
            "number": 5,
            "type": "regular",
            "airdate": "2004-04-04",
            "airtime": "21:00",
            "airstamp": "2004-04-05T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504344.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504344.jpg"
            },
            "summary": "<p>A car crash puts Tony and Adriana in a compromising position, and Cousin Tony tries to keep Chris from getting wrong the impression and wrong information.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47896"
                }
            }
        },
        {
            "id": 47897,
            "url": "https://www.tvmaze.com/episodes/47897/the-sopranos-5x06-sentimental-education",
            "name": "Sentimental Education",
            "season": 5,
            "number": 6,
            "type": "regular",
            "airdate": "2004-04-11",
            "airtime": "21:00",
            "airstamp": "2004-04-12T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504345.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504345.jpg"
            },
            "summary": "<p>Carmela has another furtive romance collapse, while Tony B. throws away a chance to turn his life around.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47897"
                }
            }
        },
        {
            "id": 47898,
            "url": "https://www.tvmaze.com/episodes/47898/the-sopranos-5x07-in-camelot",
            "name": "In Camelot",
            "season": 5,
            "number": 7,
            "type": "regular",
            "airdate": "2004-04-18",
            "airtime": "21:00",
            "airstamp": "2004-04-19T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504346.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504346.jpg"
            },
            "summary": "<p>Tony learns about his father through the man's mistress, while Chris' friend learns that there are habits more harmful to your health than heroin.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47898"
                }
            }
        },
        {
            "id": 47899,
            "url": "https://www.tvmaze.com/episodes/47899/the-sopranos-5x08-marco-polo",
            "name": "Marco Polo",
            "season": 5,
            "number": 8,
            "type": "regular",
            "airdate": "2004-04-25",
            "airtime": "21:00",
            "airstamp": "2004-04-26T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504347.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504347.jpg"
            },
            "summary": "<p>An uncomfortable party leads Tony and Carmela to a partial reconciliation, while cousin Tony gets an offer he decides not to refuse.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47899"
                }
            }
        },
        {
            "id": 47900,
            "url": "https://www.tvmaze.com/episodes/47900/the-sopranos-5x09-unidentified-black-males",
            "name": "Unidentified Black Males",
            "season": 5,
            "number": 9,
            "type": "regular",
            "airdate": "2004-05-02",
            "airtime": "21:00",
            "airstamp": "2004-05-03T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504348.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504348.jpg"
            },
            "summary": "<p>Tony finds out that his cousin wants a bigger share of responsibilities, while Finn makes an embarrassing discovery about Vito.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47900"
                }
            }
        },
        {
            "id": 47901,
            "url": "https://www.tvmaze.com/episodes/47901/the-sopranos-5x10-cold-cuts",
            "name": "Cold Cuts",
            "season": 5,
            "number": 10,
            "type": "regular",
            "airdate": "2004-05-09",
            "airtime": "21:00",
            "airstamp": "2004-05-10T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504349.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504349.jpg"
            },
            "summary": "<p>Chris and cousin Tony do some digging to make sure old secrets stay buried, while Janice puts her marriage in jeopardy with her fierce temper.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47901"
                }
            }
        },
        {
            "id": 47902,
            "url": "https://www.tvmaze.com/episodes/47902/the-sopranos-5x11-the-test-dream",
            "name": "The Test Dream",
            "season": 5,
            "number": 11,
            "type": "regular",
            "airdate": "2004-05-16",
            "airtime": "21:00",
            "airstamp": "2004-05-17T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504350.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504350.jpg"
            },
            "summary": "<p>Cousin Tony heads off to avenge the death of his good friend, while a dream reveals to Tony what he must do to prevent a full-scale war.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47902"
                }
            }
        },
        {
            "id": 47903,
            "url": "https://www.tvmaze.com/episodes/47903/the-sopranos-5x12-long-term-parking",
            "name": "Long Term Parking",
            "season": 5,
            "number": 12,
            "type": "regular",
            "airdate": "2004-05-23",
            "airtime": "21:00",
            "airstamp": "2004-05-24T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504351.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504351.jpg"
            },
            "summary": "<p>Tony makes a request to Johnny Sack on behalf of his cousin, and Adriana makes a request to the FBI, followed by one to Chris.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47903"
                }
            }
        },
        {
            "id": 47904,
            "url": "https://www.tvmaze.com/episodes/47904/the-sopranos-5x13-all-due-respect",
            "name": "All Due Respect",
            "season": 5,
            "number": 13,
            "type": "regular",
            "airdate": "2004-06-06",
            "airtime": "21:00",
            "airstamp": "2004-06-07T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504352.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504352.jpg"
            },
            "summary": "<p>Tony realizes that he must take care of family messes himself in order to keep the peace within his own clan.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47904"
                }
            }
        },
        {
            "id": 47905,
            "url": "https://www.tvmaze.com/episodes/47905/the-sopranos-6x01-members-only",
            "name": "Members Only",
            "season": 6,
            "number": 1,
            "type": "regular",
            "airdate": "2006-03-12",
            "airtime": "21:00",
            "airstamp": "2006-03-13T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504354.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504354.jpg"
            },
            "summary": "<p>Gene Pontecorvo makes a final break from the mob life, while Junior's paranoid delusions could be the end of Tony.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47905"
                }
            }
        },
        {
            "id": 47906,
            "url": "https://www.tvmaze.com/episodes/47906/the-sopranos-6x02-join-the-club",
            "name": "Join the Club",
            "season": 6,
            "number": 2,
            "type": "regular",
            "airdate": "2006-03-19",
            "airtime": "21:00",
            "airstamp": "2006-03-20T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504355.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504355.jpg"
            },
            "summary": "<p>The family tries to cope with Tony's hospitalization and possibly impending death, while Tony begins to hallucinate a new life parallel to his own.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47906"
                }
            }
        },
        {
            "id": 47907,
            "url": "https://www.tvmaze.com/episodes/47907/the-sopranos-6x03-mayham",
            "name": "Mayham",
            "season": 6,
            "number": 3,
            "type": "regular",
            "airdate": "2006-03-26",
            "airtime": "21:00",
            "airstamp": "2006-03-27T02:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504356.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504356.jpg"
            },
            "summary": "<p>While the gang begins to turn on itself, Tony finds himself at the threshold, while Christopher gives another try to enter the movie business, however this time as a producer rather than a screenwriter.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47907"
                }
            }
        },
        {
            "id": 47908,
            "url": "https://www.tvmaze.com/episodes/47908/the-sopranos-6x04-the-fleshy-part-of-the-thigh",
            "name": "The Fleshy Part of the Thigh",
            "season": 6,
            "number": 4,
            "type": "regular",
            "airdate": "2006-04-02",
            "airtime": "21:00",
            "airstamp": "2006-04-03T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504357.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504357.jpg"
            },
            "summary": "<p>Tony goes home and returns to business, perhaps with a new frame of mind. Paulie receives a shock about his mother.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47908"
                }
            }
        },
        {
            "id": 47909,
            "url": "https://www.tvmaze.com/episodes/47909/the-sopranos-6x05-mr-mrs-john-sacrimoni-request",
            "name": "Mr. & Mrs. John Sacrimoni Request...",
            "season": 6,
            "number": 5,
            "type": "regular",
            "airdate": "2006-04-09",
            "airtime": "21:00",
            "airstamp": "2006-04-10T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504358.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504358.jpg"
            },
            "summary": "<p>Johnny Sack is granted permission to get out of prison for his daughter's wedding; Tony's on the look out for personal protection and Vito's secret double life is exposed.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47909"
                }
            }
        },
        {
            "id": 47910,
            "url": "https://www.tvmaze.com/episodes/47910/the-sopranos-6x06-live-free-or-die",
            "name": "Live Free or Die",
            "season": 6,
            "number": 6,
            "type": "regular",
            "airdate": "2006-04-16",
            "airtime": "21:00",
            "airstamp": "2006-04-17T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504359.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504359.jpg"
            },
            "summary": "<p>Tony hires help from overseas to fulfill a favor he was asked for by Johnny Sack and decides whether one of his top earners deserves another chance as he acknowledges to Dr. Melfi he was another chance when survived his gun shot wound.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47910"
                }
            }
        },
        {
            "id": 47911,
            "url": "https://www.tvmaze.com/episodes/47911/the-sopranos-6x07-luxury-lounge",
            "name": "Luxury Lounge",
            "season": 6,
            "number": 7,
            "type": "regular",
            "airdate": "2006-04-23",
            "airtime": "21:00",
            "airstamp": "2006-04-24T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504360.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504360.jpg"
            },
            "summary": "<p>Christopher and Carmine travel to Hollywood to take the next step in making their movie but quickly realize they're out of their depth. Artie's restaurant falls prey to one of Tony's scams that was ran by Benny.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47911"
                }
            }
        },
        {
            "id": 47912,
            "url": "https://www.tvmaze.com/episodes/47912/the-sopranos-6x08-johnny-cakes",
            "name": "Johnny Cakes",
            "season": 6,
            "number": 8,
            "type": "regular",
            "airdate": "2006-04-30",
            "airtime": "21:00",
            "airstamp": "2006-05-01T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504361.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504361.jpg"
            },
            "summary": "<p>Vito considers starting a new life in New Hampshire, while Anthony Jr. looking for a purpose and finds it when he continues his pursuit of revenge against Junior.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47912"
                }
            }
        },
        {
            "id": 47913,
            "url": "https://www.tvmaze.com/episodes/47913/the-sopranos-6x09-the-ride",
            "name": "The Ride",
            "season": 6,
            "number": 9,
            "type": "regular",
            "airdate": "2006-05-07",
            "airtime": "21:00",
            "airstamp": "2006-05-08T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504362.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504362.jpg"
            },
            "summary": "<p>Paulie finds public opinion turned against him after an amusement ride accident, while Chris tries to start a new life as a husband and father.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47913"
                }
            }
        },
        {
            "id": 47914,
            "url": "https://www.tvmaze.com/episodes/47914/the-sopranos-6x10-moe-n-joe",
            "name": "Moe n' Joe",
            "season": 6,
            "number": 10,
            "type": "regular",
            "airdate": "2006-05-14",
            "airtime": "21:00",
            "airstamp": "2006-05-15T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504363.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504363.jpg"
            },
            "summary": "<p>Tony reflects on how growing up with Janice colors his attitudes now, while Vito tries to make a new life for himself in New Hampshire.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47914"
                }
            }
        },
        {
            "id": 47915,
            "url": "https://www.tvmaze.com/episodes/47915/the-sopranos-6x11-cold-stones",
            "name": "Cold Stones",
            "season": 6,
            "number": 11,
            "type": "regular",
            "airdate": "2006-05-21",
            "airtime": "21:00",
            "airstamp": "2006-05-22T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504364.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504364.jpg"
            },
            "summary": "<p>Phil takes out his revenge on Vito, while Tony grows frustrated with Anthony's lack of ambition or work ethic.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47915"
                }
            }
        },
        {
            "id": 47916,
            "url": "https://www.tvmaze.com/episodes/47916/the-sopranos-6x12-kaisha",
            "name": "Kaisha",
            "season": 6,
            "number": 12,
            "type": "regular",
            "airdate": "2006-06-04",
            "airtime": "21:00",
            "airstamp": "2006-06-05T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504365.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504365.jpg"
            },
            "summary": "<p>Tony and Phil begin an explosive conflict that puts Phil in the hospital, while Chris and Anthony both embark on new romances.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47916"
                }
            }
        },
        {
            "id": 47917,
            "url": "https://www.tvmaze.com/episodes/47917/the-sopranos-6x13-soprano-home-movies",
            "name": "Soprano Home Movies",
            "season": 6,
            "number": 13,
            "type": "regular",
            "airdate": "2007-04-08",
            "airtime": "21:00",
            "airstamp": "2007-04-09T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504366.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504366.jpg"
            },
            "summary": "<p>Carmela and Tony go away for Tony's birthday up to Janice's and Bobby's where a fight emerges between Tony and Bobby over Janice. Meanwhile A.J. is throwing a party at the Soprano home.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47917"
                }
            }
        },
        {
            "id": 47918,
            "url": "https://www.tvmaze.com/episodes/47918/the-sopranos-6x14-stage-5",
            "name": "Stage 5",
            "season": 6,
            "number": 14,
            "type": "regular",
            "airdate": "2007-04-15",
            "airtime": "21:00",
            "airstamp": "2007-04-16T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504367.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504367.jpg"
            },
            "summary": "<p>Johnny Sac finds out he only has 3 months to live. Meanwhile, 'Cleaver' premieres and is a hit, while Carmela has mixed emotions about it, saying too much of it is based on Tony.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47918"
                }
            }
        },
        {
            "id": 47919,
            "url": "https://www.tvmaze.com/episodes/47919/the-sopranos-6x15-remember-when",
            "name": "Remember When",
            "season": 6,
            "number": 15,
            "type": "regular",
            "airdate": "2007-04-22",
            "airtime": "21:00",
            "airstamp": "2007-04-23T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504368.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504368.jpg"
            },
            "summary": "<p>Paulie shows up at Tony's house to tell him he's learned the Feds are looking into a murder case from the early 1980s. In fact it was Tony's first killing where he made his 'bones'. Tony decides he and Paulie need to lay low for a while and they head off on a road trip to Florida. They reminisce about the old days but Paulie is definitely getting on Tony's nerves. They also find that many things along the route have changed over the years. Tony is particularly interested in knowing who may have told Johnny Sack about the fat joke directed at his wife. Uncle Junior meanwhile has taken to organizing a poker game with his new friend Carter Chong. Junior's as grumpy as ever but continues to suffer from memory loss from time to time. Carter likes Junior's rebellious attitude but things change when the doctors change Junior's meds and he becomes far more docile.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47919"
                }
            }
        },
        {
            "id": 47920,
            "url": "https://www.tvmaze.com/episodes/47920/the-sopranos-6x16-chasing-it",
            "name": "Chasing It",
            "season": 6,
            "number": 16,
            "type": "regular",
            "airdate": "2007-04-29",
            "airtime": "21:00",
            "airstamp": "2007-04-30T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504369.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504369.jpg"
            },
            "summary": "<p>At the Borgata Casino, Tony decides to let it ride after winning at roulette. Tony loses everything he'd won, and then some, on 23. Meanwhile, Vito Jr. is going through a rebellious phase. Tony asks Phil to talk to Vito Jr. Phil grudgingly agrees. AJ proposes to Blanca over a nice dinner, promising her that he will rise from pizzeria night manager to restaurant chain owner in no time, and coaxes a \"yes\" out of her. At the Puerto Rican day parade, Blanca meets up with AJ and returns his engagement ring, telling him she just doesn't feel it.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47920"
                }
            }
        },
        {
            "id": 47921,
            "url": "https://www.tvmaze.com/episodes/47921/the-sopranos-6x17-walk-like-a-man",
            "name": "Walk Like a Man",
            "season": 6,
            "number": 17,
            "type": "regular",
            "airdate": "2007-05-06",
            "airtime": "21:00",
            "airstamp": "2007-05-07T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504370.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504370.jpg"
            },
            "summary": "<p>Christopher and Paulie are making a lot of money off selling stolen tools through Christopher's father-in-law, Al Lombardo. When some of Paulie's guys break into Al's store to take some of the equipment, Christopher goes ballistic and takes matters into his own hands. Paulie has his own way of getting back at him. Tony takes Christopher to task for not being around much. Christopher explains the temptations at places like the Bing but Tony is anything but sympathetic. Christopher is soon drinking again and it leads to tragedy. Tony tells Agent Dwight Harris about the two Muslims who used to hang around the Bing but who seem to have suddenly become observant. AJ is depressed over his break up with Blanca and there's not much Tony or Carmela can say to console him. He's crying a lot and quits his job. Tony tells him to go to a party Patsi Parisi's college-aged son has organized at the Bing. He starts hanging around at their frat house and is all too keen to get involved in their business dealings.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47921"
                }
            }
        },
        {
            "id": 47922,
            "url": "https://www.tvmaze.com/episodes/47922/the-sopranos-6x18-kennedy-and-heidi",
            "name": "Kennedy and Heidi",
            "season": 6,
            "number": 18,
            "type": "regular",
            "airdate": "2007-05-13",
            "airtime": "21:00",
            "airstamp": "2007-05-14T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504371.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504371.jpg"
            },
            "summary": "<p>Tony travels to Las Vegas, after a tragedy occurs.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47922"
                }
            }
        },
        {
            "id": 47923,
            "url": "https://www.tvmaze.com/episodes/47923/the-sopranos-6x19-the-second-coming",
            "name": "The Second Coming",
            "season": 6,
            "number": 19,
            "type": "regular",
            "airdate": "2007-05-20",
            "airtime": "21:00",
            "airstamp": "2007-05-21T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504372.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504372.jpg"
            },
            "summary": "<p>Tony fails to reason with Phil as more problems increase with Anthony when his depression worsens and he attempts suicide.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47923"
                }
            }
        },
        {
            "id": 47924,
            "url": "https://www.tvmaze.com/episodes/47924/the-sopranos-6x20-the-blue-comet",
            "name": "The Blue Comet",
            "season": 6,
            "number": 20,
            "type": "regular",
            "airdate": "2007-06-03",
            "airtime": "21:00",
            "airstamp": "2007-06-04T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504373.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504373.jpg"
            },
            "summary": "<p>The Beginning of the End. Phil finally puts the hits on the Soprano clan and Tony puts a hit on Phil which results in mistaken identity making everyone think its safe when its not and it results in a Death and Coma. After this happens Tony separates from his family to go into hiding as he sends Carmela, Janice, and the kids into hiding.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47924"
                }
            }
        },
        {
            "id": 47925,
            "url": "https://www.tvmaze.com/episodes/47925/the-sopranos-6x21-made-in-america",
            "name": "Made in America",
            "season": 6,
            "number": 21,
            "type": "regular",
            "airdate": "2007-06-10",
            "airtime": "21:00",
            "airstamp": "2007-06-11T01:00:00+00:00",
            "runtime": 60,
            "image": {
                "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/201/504374.jpg",
                "original": "https://static.tvmaze.com/uploads/images/original_untouched/201/504374.jpg"
            },
            "summary": "<p>Tony and his family have to stay in hiding until Phil Leotardo is dealt with. His family don't like the lifestyle they have been forced to adopt. AJ and Meadow move onto the next step in their lives. Tony confronts Junior one last time.</p>",
            "_links": {
                "self": {
                    "href": "https://api.tvmaze.com/episodes/47925"
                }
            }
        }
    ]
}


