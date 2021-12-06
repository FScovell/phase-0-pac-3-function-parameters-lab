function introduction(string){
    let name = string;
    return "Hi, my name is " + name + ".";
}

function introductionWithLanguage(name, language){
    return "Hi, my name is " + name + " and I am learning to program in " + language + ".";
    /*let name = string;
        if (name = Aki){
            return "Hi, my name is " + name + " and I am learning to program in Ember.js."
        }
        else if(name = Samip){
             return "Hi, my name is " + name + " and I am learning to program in React."
        }*/
}

function introductionWithLanguageOptional(name, language = "JavaScript"){
    return "Hi, my name is " + name + " and I am learning to program in " + language + ".";
}
