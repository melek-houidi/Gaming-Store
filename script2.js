function makeGame(title, type, discription, price, imgurl ){
    return game ={
        "title" : title,
        "type" : type,
        "discription" : discription,
        "price" : price,
        "imgurl" : imgurl,
     }
}
const godofwar = "godofwar.jpg"
const doom ="doom.jpg"
const cyberpunk ="cyberpunk.jpg"
const assassins ="assasin.jpg"
const halflif ="halflife.jpg"
const gtav="gta.jpg"
const warzone ="warzone.jpg"
const ori ="ori.jpg"
const wasteland ="wasteland.jpg"
const residentevil ="residentevil3.jpg"
const xcom ="xcom.jpg"
const watchdogs = "watchdogs.jpg"
const jay = "jay.jpg"

const  gamess = [
    makeGame("cyberpunk 2077", "RPG", "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.", "$59",cyberpunk),
    makeGame("doom", "FPS", "Doom is a video game series and media franchise created by John Carmack, John Romero, Adrian Carmack, Kevin Cloud, and Tom Hall.[1] The series focuses on the exploits of an unnamed space marine operating under the auspices of the Union Aerospace Corporation (UAC), who fights hordes of demons and the undead.", "$65", doom ),
    makeGame("god of war III ", "RPG", "God of War III is an action-adventure game developed by Santa Monica Studio and published by Sony Computer Entertainment (SCE). Released for the PlayStation 3 (PS3) console on March 16, 2010, the game is the fifth installment in the God of War series, the seventh chronologically, and the sequel to 2007's God of War II. Loosely based on Greek mythology, the game is set in ancient Greece with vengeance as its central motif. The player controls the protagonist and former God of War Kratos, after his betrayal at the hands of his father Zeus, King of the Olympian gods. Reigniting the Great War, Kratos ascends Mount Olympus until he is abandoned by the Titan Gaia. Guided by Athena’s spirit, Kratos battles monsters, gods, and Titans in a search for Pandora, without whom he cannot open Pandora's Box, defeat Zeus, and end the reign of the Olympian gods.", "$89", godofwar),
    makeGame("ori and the blind forest", "RPG", "Ori and the Blind Forest is a platform-adventure Metroidvania video game developed by Moon Studios and published by Microsoft Studios. The game was released for Xbox One and Microsoft Windows on March 11, 2015 and for Nintendo Switch on September 27, 2019. Players assume control of Ori, a small white guardian spirit, and Sein, the light and eyes of the Forest's Spirit Tree. Players are tasked to move between platforms and solve puzzles. The game features a save system called , which allows players to save their progress at will with limited resources, and an upgrade system that gives players the ability to strengthen Ori's skills and abilities.", "$60", ori),
    makeGame("resident evil 3 ", "RPG", "Resident Evil 3 is a survival horror video game developed by Capcom and released for the PlayStation in 1999. It is the third installment in the Resident Evil series and takes place before and after the events of Resident Evil 2. The story follows Jill Valentine and her efforts to escape from a city infected with a biological weapon. Choices through the game affect the story and ending. The game uses the same engine as its predecessors and features 3D models over pre-rendered backgrounds with fixed camera angles.", "$66", residentevil ),
    makeGame("COD warzone", "battle royal", "Call of Duty Warzone is a free-to-play battle royale video game released on March 10, 2020, for PlayStation 4, Xbox One, and Microsoft Windows. The game is a part of the 2019 title Call of Duty: Modern Warfare but does not require purchase of it. Warzone was developed by Infinity Ward and Raven Software and published by Activision.[1] Warzone allows online multiplayer combat among 150 players, although some limited-time game modes support 200 players. Codenamed Operation: Rapid Sunder, it is set in the fictional city of Verdansk, which is loosely based on Donetsk city in Eastern Ukraine,[2] on day 96 of the ongoing in-game conflict. The game features both cross-platform play and cross-platform progression between both games.", "$85", warzone),
    makeGame("watch dogs legion ", "RPG", "Watch Dogs: Legion is an upcoming action-adventure game, developed by Ubisoft Toronto and published by Ubisoft. It is the third instalment in the Watch Dogs series, and the sequel to Watch Dogs 2. The game is set within an open world, fictionalised representation of London, and will feature the ability to control multiple characters that can be recruited across the game's setting and who can be permanently lost during the course of a playthrough if players have the permadeath option enabled, providing a more dynamic influence on the game's narrative. The game will also feature a cooperative multiplayer that will allow up to four players to work together. It is due to be released for Microsoft Windows, PlayStation 4, Xbox One, and Stadia on 29 October 2020", "$65", watchdogs),
    makeGame("xcom  enemy unknown", "RPG", "XCOM: Enemy Unknown is a 2012 turn-based tactical video game developed by Firaxis Games and published by 2K Games. The game is a reimagined remake of the 1994 cult classic strategy game UFO: Enemy Unknown (also known as X-COM: UFO Defense) and a reboot of MicroProse's 1990s X-COM series.", "$88", xcom),
    makeGame("assasins creed valhalla", "RPG", "Assassin's Creed Valhalla is an upcoming action role-playing video game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth major installment and the twenty-second release in the Assassin's Creed series, and a successor to the 2018 game Assassin's Creed Odyssey. Set in 873 AD, the game recounts a mythological history of the Viking invasion of Britain. The player controls Eivor, a Viking raider who becomes embroiled in the conflict between the Brotherhood of Assassins and the Templar Order.", "$89", assassins),
    makeGame("wasteland","RPG", "Wasteland 3 is a role-playing video game developed by inXile Entertainment and published by Deep Silver. It is a sequel to Wasteland 2 (2014) and was released for Microsoft Windows, PlayStation 4 and Xbox One on August 28, 2020. Initially planned Linux and macOS versions were postponed to the end of 2020.", "$54", wasteland),
    makeGame("half - life alyx ", "RPG", "Half-Life Alyx is a 2020 virtual reality (VR) first-person shooter developed and published by Valve. Between the events of Half-Life (1998) and Half-Life 2 (2004), players control Alyx Vance on a mission to seize a superweapon belonging to the alien Combine. Players use VR to interact with the environment and fight enemies, using gravity gloves to manipulate objects, similarly to the gravity gun from Half-Life 2. Traditional Half-Life elements return, such as physics puzzles, combat, exploration and survival horror aspects.", "$65", halflif),
   
]
 

    
   ///the div display function (still on test)
   
//    $(document.createElement("div"))












var columndiv =document.createElement("div");
columndiv.className = "cardd"
$(".cardd").css( "flex-direction: row")
$('body').append(columndiv)
    for(var i=0; i < gamess.length; i++){
        $(columndiv).attr("id",'b'+i);
      
      
         
          }
 
          
    for(var i=0; i < gamess.length; i++){
          var div= document.createElement("div");
          div.className = "adjust";
          console.log(gamess[i].title)
         $(div).attr("id",'c'+i);
         console.log(  'c'+i)
         $('.cardd').append(div);
         $('#' + 'c'+i).append(`<img class="allimg" src="${gamess[i].imgurl}"  />`);
        $('#' + 'c'+i).append(`<h5 class="card-title"> ${gamess[i].title} </h5>`);
        $('#' + 'c'+i).append(`<h2 class="type">${gamess[i].type}</h2>`);  
        $('#' + 'c'+i).append(`<h2 class="price" >   ${gamess[i].price}</p>`);
        $('#' + 'c'+i).append(" <b class='btn btn-outline-dark' > remove </b>");
        $('#' + 'c'+i).append(" <b id='btn1' class='btn btn-outline-dark' > check out  </b>");
       


    }

    var columndiv =document.getElementById("myModal");
$(".modal").css( "flex-direction: row")
$('body').append(columndiv)
    for(var i=0; i < gamess.length; i++){
        $(columndiv).attr("id",'b'+i);
      
      
         
          }
 
          
    for(var i=0; i < gamess.length; i++){
          var div= document.createElement("div");
          div.className = "adjust";
          console.log(gamess[i].title)
         $(div).attr("id",'c'+i);
         console.log(  'c'+i)
         $('.modal').append(div);
         $('#' + 'c'+i).append(`<img class="allimg" src="${gamess[i].imgurl}"  />`);
        $('#' + 'c'+i).append(`<h5 class="card-title"> ${gamess[i].title} </h5>`);
        $('#' + 'c'+i).append(`<h2 class="type">${gamess[i].type}</h2>`);  
        $('#' + 'c'+i).append(`<h2 class="price" >   ${gamess[i].price}</p>`);
        $('#' + 'c'+i).append(" <b class='btn btn-outline-dark' > remove </b>");
        $('#' + 'c'+i).append(" <b id='btn1' class='btn btn-outline-dark' > check out  </b>");
       


    }

    $("btn" ).click(function(){
        alert("youre game has been saved to the cart.");
    });
    