$(function(){
    // Side bar dropdown
    $("#sideDropDown_1").click(function(){
        if($("#sideDropDown_11").css("visibility") === "hidden"){
            $("#sideDropDown_11").css({ "position": "relative", "margin-top": "0", "visibility": "visible"})
            $("#sideDropDown_22, #sideDropDown_33, #sideDropDown_44").css({"margin-top": "-100px", "visibility": "hidden", "position": "absolute"})
        }else{
            $("#sideDropDown_11").css({"margin-top": "-100px", "visibility": "hidden", "position": "absolute"})
        }
    })

    
    $("#sideDropDown_2").click(function(){
        if($("#sideDropDown_22").css("visibility") === "hidden"){
            $("#sideDropDown_22").css({ "position": "relative", "margin-top": "0", "visibility": "visible"})
            $("#sideDropDown_11, #sideDropDown_33, #sideDropDown_44").css({"margin-top": "-100px", "visibility": "hidden", "position": "absolute"})
        }else{
            $("#sideDropDown_22").css({"margin-top": "-100px", "visibility": "hidden", "position": "absolute"})
        }
    })

    
    $("#sideDropDown_3").click(function(){
        if($("#sideDropDown_33").css("visibility") === "hidden"){
            $("#sideDropDown_33").css({ "position": "relative", "margin-top": "0", "visibility": "visible"})
            $("#sideDropDown_11, #sideDropDown_22, #sideDropDown_44").css({"margin-top": "-100px", "visibility": "hidden", "position": "absolute"})
        }else{
            $("#sideDropDown_33").css({"margin-top": "-100px", "visibility": "hidden", "position": "absolute"})
        }
    })

    
    $("#sideDropDown_4").click(function(){
        if($("#sideDropDown_44").css("visibility") === "hidden"){
            $("#sideDropDown_44").css({ "position": "relative", "margin-top": "0", "visibility": "visible"})
            $("#sideDropDown_11, #sideDropDown_22, #sideDropDown_33").css({"margin-top": "-100px", "visibility": "hidden", "position": "absolute"})
        }else{
            $("#sideDropDown_44").css({"margin-top": "-100px", "visibility": "hidden", "position": "absolute"})
        }
    })

    //sidebar open and close

    $("#navIcon .fa-bars").click(function(){
        $("#sideBar").fadeIn(500)
        $("#openSideNav").css({"right": "0"}, 500)
        $("#sideBar").css({"visibility": "visible"})
        $("#sideNav .fa-times").css({"display": "block"})
        $("body").css("overflow-y", "hidden")
    })

    $("#sideNav .fa-times, #closeSideNav").click(function(){
        $("#sideBar").fadeOut(500)
        $("#openSideNav").css({"right": "-100%"}, 500)
        $("#sideBar").css({"visibility": "hidden"})
        $("#sideNav .fa-times").css({"display": "none"})
        $("body").css("overflow-y", "scroll")
    })
})