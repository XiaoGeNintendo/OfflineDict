//build dictionary
function buildDict(){
    if(localStorage['builtDict']==undefined || localStorage['builtDict']==null ||
        localStorage['builtVersion']!=__version
        ){
        console.log("Building Dictionary Cache...");
        __dict.forEach(va => {
            va.search=va.otherForms.join("#");
            va.description=va.def.map(ele => ele.main).join(".");
            va.url="search.html?word="+encodeURIComponent(va.word);
        });
        __dict.sort((a,b) =>{
            if(a.word<b.word){
                return -1;
            }else if(a.word==b.word){
                return 0;
            }else{
                return 1;
            }
        });
        
        localStorage["builtDict"]=JSON.stringify(__dict);
        localStorage['builtVersion']=__version;
    }
}
buildDict();
var dict=JSON.parse(localStorage['builtDict']);