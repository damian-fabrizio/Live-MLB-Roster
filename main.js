import { API_KEY } from "./config.js";

const optionMenu = document.querySelector(".optionsContainer");
const selectBtn = document.querySelector(".selectTeamBtn");
const options = document.querySelectorAll(".option");
const selectBtnText = document.querySelector(".selectBtn");

//toggle option menu
selectBtn.addEventListener("click", ()=> optionMenu.classList.toggle("active"));





    //function that grabs API call for roster info
    async function getRoster(city){
        const url = 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBTeamRoster?teamAbv=';
        
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url + city, options);
	const result = await response.json();
	console.log(result);

        //create and populate table elements with roster info
        var table = document.getElementById('myTable');
        table.innerHTML = '';
    for(var i =0; i<result.body.roster.length; i++){
        var row = `<tr>
                        <td>${result.body.roster[i].jerseyNum}</td>
                        <td>${result.body.roster[i].longName}</td>
                        <td>${result.body.roster[i].pos}</td>
                        <td>${result.body.roster[i].height}</td>
                        <td>${result.body.roster[i].weight}</td>
                   </tr>`
                table.innerHTML += row;
    }




} catch (error) {
	console.error(error);
    }


    
}

//the two variables below are the large logos displayed left and right of the main info
let secondLogoImgR = document.querySelector(".imgR");
let secondLogoImgL = document.querySelector(".imgL");

//for each option (team) fetch proper roster info, and display proper logos, colors etc
options.forEach(option =>{
    option.addEventListener("click", () =>{
        let selectedOption = option.querySelector(".teamName").innerText;
        let bgColor = document.querySelector(".application");
        if(selectedOption === "Atlanta Braves"){
            selectedOption = "ATL";
            bgColor.style.backgroundColor = "#13274f";
            secondLogoImgL.src = "logos/braves2.png";
            secondLogoImgR.src = "logos/braves2.png";
        }else if(selectedOption === "Arizona Diamondbacks"){
            selectedOption = "ARI";
            bgColor.style.backgroundColor = "#e3d4ad";
            secondLogoImgL.src = "logos/dbacks2.png";
            secondLogoImgR.src = "logos/dbacks2.png";
        }else if(selectedOption === "Baltimore Orioles"){
            selectedOption = "BAL";
            bgColor.style.backgroundColor = "#222";
            secondLogoImgL.src = "logos/orioles2.png";
            secondLogoImgR.src = "logos/orioles2.png";
        }else if(selectedOption === "Boston Red Sox"){
            selectedOption = "BOS";
            bgColor.style.backgroundColor = "#192c55";
            secondLogoImgL.src = "logos/boston2.png";
            secondLogoImgR.src = "logos/boston2.png";
        }else if(selectedOption === "Chicago Cubs"){
            selectedOption = "CHC";
            bgColor.style.backgroundColor = "#0e3386";
            secondLogoImgL.src = "logos/cubs2.png";
            secondLogoImgR.src = "logos/cubs2.png";
        }else if(selectedOption === "Chicago White Sox"){
            selectedOption = "CHW";
            bgColor.style.backgroundColor = "#c4ced4";
            secondLogoImgL.src = "logos/white2.png";
            secondLogoImgR.src = "logos/white2.png";
        }else if(selectedOption === "Cincinnati Reds"){
            selectedOption = "CIN";
            bgColor.style.backgroundColor = "#222";
            secondLogoImgL.src = "logos/mlb-cincinnati-reds-logo.png";
            secondLogoImgR.src = "logos/mlb-cincinnati-reds-logo.png";
        }else if(selectedOption === "Cleveland Guardians"){
            selectedOption = "CLE";
            bgColor.style.backgroundColor = "#1a2e5a";
            secondLogoImgL.src = "logos/mlb-cleveland-guardians-logo.png";
            secondLogoImgR.src = "logos/mlb-cleveland-guardians-logo.png";
        }else if(selectedOption === "Colorado Rockies"){
            selectedOption = "COL";
            bgColor.style.backgroundColor = "#33006f";
            secondLogoImgL.src = "logos/rock2.png";
            secondLogoImgR.src = "logos/rock2.png";
        }else if(selectedOption === "Detroit Tigers"){
            selectedOption = "DET";
            bgColor.style.backgroundColor = "#182d55";
            secondLogoImgL.src = "logos/tiger2.png";
            secondLogoImgR.src = "logos/tiger2.png";
        }else if(selectedOption === "Houston Astros"){
            selectedOption = "HOU";
            bgColor.style.backgroundColor = "#eb6e1f";
            secondLogoImgL.src = "logos/Houston-Astros-Emblem.png";
            secondLogoImgR.src = "logos/Houston-Astros-Emblem.png";
        }else if(selectedOption === "Kansas City Royals"){
            selectedOption = "KC";
            bgColor.style.backgroundColor = "#174885";
            secondLogoImgL.src = "logos/royals2.png";
            secondLogoImgR.src = "logos/royals2.png";
        }else if(selectedOption === "Los Angeles Angels"){
            selectedOption = "LAA";
            bgColor.style.backgroundColor = "#862633";
            secondLogoImgL.src = "logos/mlb-los-angeles-angels-logo.png";
            secondLogoImgR.src = "logos/mlb-los-angeles-angels-logo.png";
        }else if(selectedOption === "Los Angeles Dodgers"){
            selectedOption = "LAD";
            bgColor.style.backgroundColor = "#005a9c";
            secondLogoImgL.src = "logos/dodgers2.png";
            secondLogoImgR.src = "logos/dodgers2.png";
        }else if(selectedOption === "Miami Marlins"){
            selectedOption = "MIA";
            bgColor.style.backgroundColor = "#0077c8";
            secondLogoImgL.src = "logos/marlins2.png";
            secondLogoImgR.src = "logos/marlins2.png";
        }else if(selectedOption === "Milwaukee Brewers"){
            selectedOption = "MIL";
            bgColor.style.backgroundColor = "#0a2351";
            secondLogoImgL.src = "logos/brewers2.png";
            secondLogoImgR.src = "logos/brewers2.png";
        }else if(selectedOption === "Minnesota Twins"){
            selectedOption = "MIN";
            bgColor.style.backgroundColor = "#002b5c";
            secondLogoImgL.src = "logos/twins2.png";
            secondLogoImgR.src = "logos/twins2.png";
        }else if(selectedOption === "New York Mets"){
            selectedOption = "NYM";
            bgColor.style.backgroundColor = "#002d72";
            secondLogoImgL.src = "logos/mets2.png";
            secondLogoImgR.src = "logos/mets2.png";
        }else if(selectedOption === "New York Yankees"){
            selectedOption = "NYY";
            bgColor.style.backgroundColor = "#132448";
            secondLogoImgL.src = "logos/mlb-new-york-yankees-logo.png";
            secondLogoImgR.src = "logos/mlb-new-york-yankees-logo.png";
        }else if(selectedOption === "Oakland Athletics"){
            selectedOption = "OAK";
            bgColor.style.backgroundColor = "#003831";
            secondLogoImgL.src = "logos/mlb-oakland-athletics-logo.png";
            secondLogoImgR.src = "logos/mlb-oakland-athletics-logo.png";
        }else if(selectedOption === "Philadelphia Phillies"){
            selectedOption = "PHI";
            bgColor.style.backgroundColor = "#284898";
            secondLogoImgL.src = "logos/phila2.png";
            secondLogoImgR.src = "logos/phila2.png";
        }else if(selectedOption === "Pittsburgh Pirates"){
            selectedOption = "PIT";
            bgColor.style.backgroundColor = "#222";
            secondLogoImgL.src = "logos/pit2.png";
            secondLogoImgR.src = "logos/pit2.png";
        }else if(selectedOption === "San Diego Padres"){
            selectedOption = "SD";
            bgColor.style.backgroundColor = "#002d62";
            secondLogoImgL.src = "logos/san-diego-padres.png";
            secondLogoImgR.src = "logos/san-diego-padres.png";
        }else if(selectedOption === "San Francisco Giants"){
            selectedOption = "SF";
            bgColor.style.backgroundColor = "#fd5a1e";
            secondLogoImgL.src = "logos/sf2.png";
            secondLogoImgR.src = "logos/sf2.png";
        }else if(selectedOption === "Seattle Mariners"){
            selectedOption = "SEA";
            bgColor.style.backgroundColor = "#0c2c56";
            secondLogoImgL.src = "logos/sea2.png";
            secondLogoImgR.src = "logos/sea2.png";
        }else if(selectedOption === "St. Louis Cardinals"){
            selectedOption = "STL";
            bgColor.style.backgroundColor = "#c41e3a";
            secondLogoImgL.src = "logos/stl2.png";
            secondLogoImgR.src = "logos/stl2.png";
        }else if(selectedOption === "Tampa Bay Rays"){
            selectedOption = "TB";
            bgColor.style.backgroundColor = "#8fbce6";
            secondLogoImgL.src = "logos/tb2.png";
            secondLogoImgR.src = "logos/tb2.png";
        }else if(selectedOption === "Texas Rangers"){
            selectedOption = "TEX";
            bgColor.style.backgroundColor = "#003278";
            secondLogoImgL.src = "logos/tx2.png";
            secondLogoImgR.src = "logos/tx2.png";
        }else if(selectedOption === "Toronto Blue Jays"){
            selectedOption = "TOR";
            bgColor.style.backgroundColor = "#134a8e";
            secondLogoImgL.src = "logos/tor2.png";
            secondLogoImgR.src = "logos/tor2.png";
        }else if(selectedOption === "Washington Nationals"){
            selectedOption = "WAS";
            bgColor.style.backgroundColor = "#212759";
            secondLogoImgL.src = "logos/mlb-Washington-Nationals-Logo.png";
            secondLogoImgR.src = "logos/mlb-Washington-Nationals-Logo.png";
        }
        
        //console the selected team to make sure its correct
        console.log(selectedOption);

        //set a one second delay to give the page time to populate the info
        setTimeout(() =>{
            //toggle on/off the options/teams display
            optionMenu.classList.toggle("active");
        },1000);
        getRoster(selectedOption);
    })
})
