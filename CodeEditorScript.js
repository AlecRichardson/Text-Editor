$(document).ready(function(){
$("#cssInput").dblclick(function importCss(){
            $(this).val("h3 {color:blue;} \np {font-family:cursive, arial; \nfont-size:25pt;}");
        });
        $("#htmlInput").dblclick(function importHtml(){
            $(this).val("<h3>Hello!</h3>\n<p>applied?</p>")
        });
        //will launch or rerun the preview div
        var launch = function(){
            $("#output").html($("#htmlInput").val());
        }
        $("#launchButton").click(function(){
            launch();
            $("#outputCss").html($("#cssInput").val());
            toggle = true;
        });
        var toggle = false;
        $("#toggleButton").click(function(){
            if(toggle===true){
                $("#outputCss").html("");
                $(this).css("color", "red");
                toggle = false;
            } else {
                $("#outputCss").html($("#cssInput").val());
                $(this).css("color", "green");
                toggle = true;
            }
            launch();
        });
        $("#clearButton").click(function(){
            $("#cssInput").val("");
            $("#htmlInput").val("");
            $("#output").html("");
            $("#toggleButton").css("color", "green");
        });
        $("#clearButton").dblclick(function(){
            var newTitle = prompt("What would you like to change the title too?", "New Title");
            $("title").html(newTitle);
        });
});
