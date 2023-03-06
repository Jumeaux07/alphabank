window.addEventListener('load', function () {
    console.log('Cette fonction est exécutée une fois quand la page est chargée.');
    if(!localStorage.getItem("personebank")){
        var persone = {
            login:"Otrega",
            mdp:"Otrega@123",
        }
        localStorage.setItem("connexion","1") // 1 => non | 2 => oui
        localStorage.setItem("personebank",JSON.stringify(persone))
    }
  });

  if(localStorage.getItem("connexion")=== "2"){
    location.href = '../tableau-de-bord.html'
  }

  function connexion(){
    var pers = JSON.parse(localStorage.getItem("personebank"))
    var login = $('#login').val()
    var mdp = $('#mdp').val()
    if(pers.login === login && pers.mdp === mdp){
        console.log("connecté");
        localStorage.setItem("connexion","2") // 1 => non | 2 => oui
        location.href = '../tableau-de-bord.html'
    }else{
        console.log("non");
    }
    console.log(pers);
  }