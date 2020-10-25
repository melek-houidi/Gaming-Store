function items(title,image){
    var item={}
    item.title=title
    item.image=image
    return item
}
var item1=items('God of War','./melek img/godofwar.jpg')
var item2=items('Naruto','./melek img/naruto.jpg')
var item3=items('Naruto','./melek img/naruto2.jpg')
var item4=items('Zoro','./melek img/zoro.png')
var item5=items('Devil may cry','./melek img/devil may cry.jpg')
var item6=items('FIFA','./melek img/fifa.jpg')
var item7=items('Free Fire','./melek img/free fire.jpg')
var item8=items('Ghost','./melek img/ghost.jpg')
var item9=items('GTA','./melek img/gta.png')
var item10=items('Hunter','./melek img/hunter.jpg')
var item11=items('Hunter','./melek img/hunter2.jpg')
var item12=items('THE LAST OF US','./melek img/last of us.jpg')
var item13=items('Red Dead','./melek img/red dead.jpg')
var item14=items('Valornt','./melek img/valornt.jpg')
var item15=items('Valornt','./melek img/valornt2.jpg')
var item16=items('THE WITCHER','./melek img/the witcher.jpg')
var item17=items('The Division','./melek img/the division.jpg')
var item18=items('assassins creed','./melek img/assassin.jpg')
var item19=items('World of Creaft','./melek img/world of craft.jpg')

var tab=[item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13,item14,item15,item16,item17,item18,item19]

function table(item){
    $("#mainD").append('<div class="all" id="'+item.title+'"></div>')
    $("#"+item.title).append("<img src='"+item.image+"' id="+item.title+"1"+"></img>")
    $("#"+item.title).append("<h3>"+item.title+"</h3>")
    $("#"+item.title).append("<p>"+item.type+"</p>")
}

function table(movies){
    for (var i=0; i<tab.length; i++){
       table(tab[i])
    
    }
}
table(tab)
console.log(item11)


function test(tab,query){
    $('#mainD').html('')
    for(var i=0; i<tab.length; i++){
        if(tab[i].type===query){
           table(tab[i])
        }
        else if(!query){
           table(tab[i])
        }
    }
}