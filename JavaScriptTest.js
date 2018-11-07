//Jared Williams

var bool = confirm("shall we then?");
var condition = bool && "carl";
document.writeln(condition);
if (condition) {
    document.writeln("true");
}
else {
    document.write("false")
}

var switchStatements = function() {
    switch (prompt("What is the weather like?")){
        case "rainy":
            document.write("Remember to bring an umbrella.");
            break;
        case "sunny":
            document.write("Dress lightly.");
        case "cloudy":
            document.write("Go outside.");
            break;
        default:
            document.write("Unknown weather type!");
            break;
    }
}
