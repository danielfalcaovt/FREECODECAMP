
let target = $("div#b")
let classes = ""
target.click(function(){
    if (
        classes = target.attr("class").split(/\s+/))
        if (classes.length == 2){

            target.toggleClass("dark-theme") 
        }else{
            target.toggleClass("light-theme") 
            target.toggleClass("dark-theme") 
        }
        
})