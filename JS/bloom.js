$(document).ready(function () {

});

function validation() {
    var fname = document.getElementById("firstname").value;
    var mail = document.getElementById("email").value;
    var phn = document.getElementById("num").value;
    var password = document.getElementById("pwd").value;
    var confirmpwd = document.getElementById("cpwd").value;

    alpha = /^[A-Za-z]+$/;
    number = /^([0-9]{10,})+$/;
    emailid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;



    if (!alpha.test(fname)) {
        alert("invalid credentials");
    }

    if (!emailid.test(mail)) {
        alert("invalid credentials");
    }
    if (!number.test(phn)) {
        alert("invalid credentials");
    }
    if (!pass.test(password)) {
        alert("invalid credentials");
    }


    if (password == confirmpwd) {
        alert("Successful");

        // document.write(jsobj.firstName)
    } if (password != confirmpwd) {
        alert("Password not matched");
    }

    if (password == confirmpwd && alpha.test(fname) && emailid.test(mail) && number.test(phn) && pass.test(password)) {

        const jsobj = {
            firstName: fname,
            email: mail,
            phone: phn,
            pwd: confirmpwd
        };

        var jsonObj = JSON.stringify(jsobj);
        if (localStorage.length == 0) {
            localStorage.setItem("Details", jsonObj);
            window.location.href = "loginpage.html";
        }
        else if (localStorage.length == 1) {
            localStorage.setItem("User1", jsonObj);
            window.location.href = "loginpage.html";
        }
        else if (localStorage.length == 2) {
            localStorage.setItem("User2", jsonObj);
            window.location.href = "loginpage.html";
        }
        else if (localStorage.length == 3) {
            localStorage.setItem("User3", jsonObj);
            window.location.href = "loginpage.html";
        }
        else if (localStorage.length == 4) {
            localStorage.setItem("User4", jsonObj);
            window.location.href = "loginpage.html";
        }
        else if (localStorage.length == 5) {
            localStorage.setItem("User5", jsonObj);
            window.location.href = "loginpage.html";
        }
        else {
            alert("Storage Full")
        }


        document.getElementById("firstname").value = " ";
        document.getElementById("email").value = " ";
        document.getElementById("num").value = " ";
        document.getElementById("pwd").value = " ";
    }



}


function Clr() {
    document.getElementById("dem1").innerHTML = "Null"
    document.getElementById("dem3").innerHTML = "Null"
    document.getElementById("dem4").innerHTML = "Null"
    document.getElementById("dem5").innerHTML = "Null"
    document.getElementById("dem6").innerHTML = "Null"
    document.getElementById("dem7").innerHTML = "Null"
    document.getElementById("dem8").innerHTML = "Null"
    document.getElementById("dem9").innerHTML = "Null"
    document.getElementById("dem10").innerHTML = "Null"
    document.getElementById("dem11").innerHTML = "Null"
    document.getElementById("dem12").innerHTML = "Null"
    document.getElementById("dem13").innerHTML = "Null"
    document.getElementById("dem14").innerHTML = "Null"
    document.getElementById("dem15").innerHTML = "Null"
    document.getElementById("dem16").innerHTML = "Null"
    document.getElementById("dem17").innerHTML = "Null"
    document.getElementById("dem18").innerHTML = "Null"
    document.getElementById("dem19").innerHTML = "Null"
    document.getElementById("dem20").innerHTML = "Null"
    document.getElementById("dem21").innerHTML = "Null"
    localStorage.clear();

}

function del() {
    document.getElementById("dem1").innerHTML = "Null"
    document.getElementById("dem3").innerHTML = "Null"
    document.getElementById("dem4").innerHTML = "Null"
    document.getElementById("dem5").innerHTML = "Null"
    localStorage.removeItem("details");

}
function del1() {
    document.getElementById("dem6").innerHTML = "Null"
    document.getElementById("dem7").innerHTML = "Null"
    document.getElementById("dem8").innerHTML = "Null"
    document.getElementById("dem9").innerHTML = "Null"
    localStorage.removeItem("User1");
}
function del2() {
    document.getElementById("dem10").innerHTML = "Null"
    document.getElementById("dem11").innerHTML = "Null"
    document.getElementById("dem12").innerHTML = "Null"
    document.getElementById("dem13").innerHTML = "Null"
    localStorage.removeItem("User2");
}
function del3() {
    document.getElementById("dem14").innerHTML = "Null"
    document.getElementById("dem15").innerHTML = "Null"
    document.getElementById("dem16").innerHTML = "Null"
    document.getElementById("dem17").innerHTML = "Null"
    localStorage.removeItem("User3");
}
function del4() {
    document.getElementById("dem18").innerHTML = "Null"
    document.getElementById("dem19").innerHTML = "Null"
    document.getElementById("dem20").innerHTML = "Null"
    document.getElementById("dem21").innerHTML = "Null"
    localStorage.removeItem("User4");
}



function login() {
    // var lg = localStorage.getItem("Details");
    // var lgn = JSON.parse(lg);
    // var us1 = localStorage.getItem("User1");
    // var json_us1 = JSON.parse(us1);
    // var us2 = localStorage.getItem("User2");
    // var json_us2 = JSON.parse(us2);
    // var us3 = localStorage.getItem("User3");
    // var json_us3 = JSON.parse(us3);
    // var us4 = localStorage.getItem("User4");
    // var json_us4 = JSON.parse(us4);

    // var mail = document.getElementById("lemail").value;
    // var Loginpassword = document.getElementById("pwds").value;

    // emailid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    // pass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    // if (!emailid.test(mail)) {
    //     alert("invalid credentials");
    // }

    // else if (!pass.test(Loginpassword)) {
    //     alert("invalid credentials");
    // }

    // else if (mail == lgn.email && Loginpassword == lgn.pwd) {
    //     alert("Successful");
    //     window.location.href = "Bloom.html";
    // }
    // else if (mail == json_us1.email && Loginpassword == json_us1.pwd) {
    //     alert("Successful");
    //     window.location.href = "Bloom.html";
    // }
    // else if (mail == json_us2.email && Loginpassword == json_us2.pwd) {
    //     alert("Successful");
    //     window.location.href = "Bloom.html";
    // }
    // else if (mail == json_us3.email && Loginpassword == json_us3.pwd) {
    //     alert("Successful");
    //     window.location.href = "Bloom.html";
    // }
    // else if (mail == json_us4.email && Loginpassword == json_us4.pwd) {
    //     alert("Successful");
    //     window.location.href = "Bloom.html";
    // }
    // else {
    //     alert("Invalid Credential");
    // }
}

// +++++++++++++++++++Report Card++++++++++++++++++++++++++

function calc() {
    var na = document.getElementById("zero").value;
    var rl = parseInt(document.getElementById("rol").value);
    var a = parseInt(document.getElementById("one").value);
    var b = parseInt(document.getElementById("two").value);
    var c = parseInt(document.getElementById("three").value);
    var d = parseInt(document.getElementById("four").value);
    var e = parseInt(document.getElementById("five").value);
    var grade;
    var rmks;
    if (a > 100 || b > 100 || c > 100 || d > 100 || e > 100) {
        alert("please enter the correct mark");
    }
    else {
        var obtain = a + b + c + d + e;
        document.getElementById("obtain").innerHTML = obtain;
        var per = obtain / 500 * 100;
        document.getElementById("per").innerHTML = per;
        if (a >= 35 && b >= 35 && c >= 35 && d >= 35 && e >= 35) {
            document.getElementById("remarks").innerHTML = "<span style='color:#292'>PASS</span>";
            rmks = "<span style='color:#292'>PASS</span>"

        }
        else {
            document.getElementById("remarks").innerHTML = "<span style='color:red'>FAIL</span>";
            rmks = "<span style='color:red'>FAIL</span>"
        }
    }
    if (per >= 80) {
        document.getElementById("grad").innerHTML = "A"
        grade = "A"

    }
    else if (per >= 70) {
        document.getElementById("grad").innerHTML = "B"
        grade = "B"
    }
    else if (per >= 60) {
        document.getElementById("grad").innerHTML = "C"
        grade = "C"
    }
    else if (per >= 50) {
        document.getElementById("grad").innerHTML = "D"
        grade = "D"
    }
    else if (per >= 40) {
        document.getElementById("grad").innerHTML = "E"
        grade = "E"
    }
    else if (per <= 40) {
        document.getElementById("grad").innerHTML = "F"
        grade = "F"
    }
    // return false

    if (na != "" && a <= 100 && b <= 100 && c <= 100 && d <= 100 && e <= 100) {

        const jsobjm = {
            fulName: na,
            rollNum: rl,
            English: a,
            Tamil: b,
            Math: c,
            Science: d,
            Social: e,
            Total: obtain,
            Percentage: per,
            Grade: grade,
            Remarks: rmks,
        };

        var jsonObjm = JSON.stringify(jsobjm);
        if (localStorage.length == 0) {
            localStorage.setItem("Marks", jsonObjm);
            // window.location.href = "reportcard.html";
        }
        else if (localStorage.length == 1) {
            localStorage.setItem("Marks1", jsonObjm);
            // window.location.href = "reportcard.html";
        }
        else if (localStorage.length == 2) {
            localStorage.setItem("Marks2", jsonObjm);
            // window.location.href = "reportcard.html";
        }
        else if (localStorage.length == 3) {
            localStorage.setItem("Marks3", jsonObjm);
            // window.location.href = "reportcard.html";
        }
        else if (localStorage.length == 4) {
            localStorage.setItem("Marks4", jsonObjm);
            // window.location.href = "reportcard.html";
        }

        else {
            alert("Storage Full")
        }

    }


}




function Clr_marks() {
    document.getElementById("Mar001").innerHTML = "Null"
    document.getElementById("Mar0").innerHTML = "Null"
    document.getElementById("Mar2").innerHTML = "Null"
    document.getElementById("Mar3").innerHTML = "Null"
    document.getElementById("Mar4").innerHTML = "Null"
    document.getElementById("Mar5").innerHTML = "Null"
    document.getElementById("Mar6").innerHTML = "Null"
    document.getElementById("Mar7").innerHTML = "Null"
    document.getElementById("Mar8").innerHTML = "Null"
    document.getElementById("Mar9").innerHTML = "Null"
    document.getElementById("Mar10").innerHTML = "Null"

    document.getElementById("Mar11").innerHTML = "Null"
    document.getElementById("Mar01").innerHTML = "Null"
    document.getElementById("Mar12").innerHTML = "Null"
    document.getElementById("Mar13").innerHTML = "Null"
    document.getElementById("Mar14").innerHTML = "Null"
    document.getElementById("Mar15").innerHTML = "Null"
    document.getElementById("Mar16").innerHTML = "Null"
    document.getElementById("Mar17").innerHTML = "Null"
    document.getElementById("Mar18").innerHTML = "Null"
    document.getElementById("Mar19").innerHTML = "Null"
    document.getElementById("Mar20").innerHTML = "Null"

    document.getElementById("Mar21").innerHTML = "Null"
    document.getElementById("Mar02").innerHTML = "Null"
    document.getElementById("Mar22").innerHTML = "Null"
    document.getElementById("Mar23").innerHTML = "Null"
    document.getElementById("Mar24").innerHTML = "Null"
    document.getElementById("Mar25").innerHTML = "Null"
    document.getElementById("Mar26").innerHTML = "Null"
    document.getElementById("Mar27").innerHTML = "Null"
    document.getElementById("Mar28").innerHTML = "Null"
    document.getElementById("Mar29").innerHTML = "Null"
    document.getElementById("Mar30").innerHTML = "Null"

    document.getElementById("Mar31").innerHTML = "Null"
    document.getElementById("Mar03").innerHTML = "Null"
    document.getElementById("Mar32").innerHTML = "Null"
    document.getElementById("Mar33").innerHTML = "Null"
    document.getElementById("Mar34").innerHTML = "Null"
    document.getElementById("Mar35").innerHTML = "Null"
    document.getElementById("Mar36").innerHTML = "Null"
    document.getElementById("Mar37").innerHTML = "Null"
    document.getElementById("Mar38").innerHTML = "Null"
    document.getElementById("Mar39").innerHTML = "Null"
    document.getElementById("Mar40").innerHTML = "Null"

    document.getElementById("Mar41").innerHTML = "Null"
    document.getElementById("Mar04").innerHTML = "Null"
    document.getElementById("Mar42").innerHTML = "Null"
    document.getElementById("Mar43").innerHTML = "Null"
    document.getElementById("Mar44").innerHTML = "Null"
    document.getElementById("Mar45").innerHTML = "Null"
    document.getElementById("Mar46").innerHTML = "Null"
    document.getElementById("Mar47").innerHTML = "Null"
    document.getElementById("Mar48").innerHTML = "Null"
    document.getElementById("Mar49").innerHTML = "Null"
    document.getElementById("Mar50").innerHTML = "Null"
    localStorage.clear();

}

function del_marks() {
    document.getElementById("Mar001").innerHTML = "Null"
    document.getElementById("Mar0").innerHTML = "Null"
    document.getElementById("Mar2").innerHTML = "Null"
    document.getElementById("Mar3").innerHTML = "Null"
    document.getElementById("Mar4").innerHTML = "Null"
    document.getElementById("Mar5").innerHTML = "Null"
    document.getElementById("Mar6").innerHTML = "Null"
    document.getElementById("Mar7").innerHTML = "Null"
    document.getElementById("Mar8").innerHTML = "Null"
    document.getElementById("Mar9").innerHTML = "Null"
    document.getElementById("Mar10").innerHTML = "Null"
    localStorage.removeItem("details");

}
function del1_marks() {
    document.getElementById("Mar11").innerHTML = "Null"
    document.getElementById("Mar01").innerHTML = "Null"
    document.getElementById("Mar12").innerHTML = "Null"
    document.getElementById("Mar13").innerHTML = "Null"
    document.getElementById("Mar14").innerHTML = "Null"
    document.getElementById("Mar15").innerHTML = "Null"
    document.getElementById("Mar16").innerHTML = "Null"
    document.getElementById("Mar17").innerHTML = "Null"
    document.getElementById("Mar18").innerHTML = "Null"
    document.getElementById("Mar19").innerHTML = "Null"
    document.getElementById("Mar20").innerHTML = "Null"
    localStorage.removeItem("User1");
}
function del2_marks() {
    document.getElementById("Mar21").innerHTML = "Null"
    document.getElementById("Mar02").innerHTML = "Null"
    document.getElementById("Mar22").innerHTML = "Null"
    document.getElementById("Mar23").innerHTML = "Null"
    document.getElementById("Mar24").innerHTML = "Null"
    document.getElementById("Mar25").innerHTML = "Null"
    document.getElementById("Mar26").innerHTML = "Null"
    document.getElementById("Mar27").innerHTML = "Null"
    document.getElementById("Mar28").innerHTML = "Null"
    document.getElementById("Mar29").innerHTML = "Null"
    document.getElementById("Mar30").innerHTML = "Null"
    localStorage.removeItem("User2");
}
function del3_marks() {
    document.getElementById("Mar31").innerHTML = "Null"
    document.getElementById("Mar03").innerHTML = "Null"
    document.getElementById("Mar32").innerHTML = "Null"
    document.getElementById("Mar33").innerHTML = "Null"
    document.getElementById("Mar34").innerHTML = "Null"
    document.getElementById("Mar35").innerHTML = "Null"
    document.getElementById("Mar36").innerHTML = "Null"
    document.getElementById("Mar37").innerHTML = "Null"
    document.getElementById("Mar38").innerHTML = "Null"
    document.getElementById("Mar39").innerHTML = "Null"
    document.getElementById("Mar40").innerHTML = "Null"
    localStorage.removeItem("User3");
}
function del4_marks() {
    document.getElementById("Mar41").innerHTML = "Null"
    document.getElementById("Mar04").innerHTML = "Null"
    document.getElementById("Mar42").innerHTML = "Null"
    document.getElementById("Mar43").innerHTML = "Null"
    document.getElementById("Mar44").innerHTML = "Null"
    document.getElementById("Mar45").innerHTML = "Null"
    document.getElementById("Mar46").innerHTML = "Null"
    document.getElementById("Mar47").innerHTML = "Null"
    document.getElementById("Mar48").innerHTML = "Null"
    document.getElementById("Mar49").innerHTML = "Null"
    document.getElementById("Mar50").innerHTML = "Null"
    localStorage.removeItem("User4");
}


// ++++++++++++++++++++++++++++++++++++Report+++++++++++++++++++++++++++++++++++++++++

function viw_report() {


    var stud1 = localStorage.getItem("Marks");
    var Json_stud1 = JSON.parse(stud1);
    var stud2 = localStorage.getItem("Marks1");
    var Json_stud2 = JSON.parse(stud2);
    var stud3 = localStorage.getItem("Marks2");
    var Json_stud3 = JSON.parse(stud3);
    var stud4 = localStorage.getItem("Marks3");
    var Json_stud4 = JSON.parse(stud4);

    var roll_num = document.getElementById("btn_demo").value

    if (Json_stud1 == undefined && Json_stud1 == null && Json_stud1 == "" && Json_stud2 == undefined && Json_stud2 == null && Json_stud2 == "" &&
        Json_stud3 == undefined && Json_stud3 == null && Json_stud3 == "" && Json_stud4 == undefined && Json_stud4 == null && Json_stud4 == "") {
        alert("Please Enter Correct Roll Number")
        window.location.href = "marks.html";
    }

    if (roll_num == Json_stud1.rollNum) {
        document.getElementById("St_2").innerHTML = Json_stud1.fulName;
        document.getElementById("St_1").innerHTML = Json_stud1.rollNum;
        document.getElementById("St_3").innerHTML = Json_stud1.English;
        document.getElementById("St_4").innerHTML = Json_stud1.Tamil;
        document.getElementById("St_5").innerHTML = Json_stud1.Math;
        document.getElementById("St_6").innerHTML = Json_stud1.Science;
        document.getElementById("St_7").innerHTML = Json_stud1.Social;
        document.getElementById("St_8").innerHTML = Json_stud1.Total;
        document.getElementById("St_9").innerHTML = Json_stud1.Percentage;
        document.getElementById("St_10").innerHTML = Json_stud1.Grade;
        document.getElementById("St_11").innerHTML = Json_stud1.Remarks;

    }

    else if (roll_num == Json_stud2.rollNum) {
        document.getElementById("St_2").innerHTML = Json_stud2.fulName;
        document.getElementById("St_1").innerHTML = Json_stud2.rollNum;
        document.getElementById("St_3").innerHTML = Json_stud2.English;
        document.getElementById("St_4").innerHTML = Json_stud2.Tamil;
        document.getElementById("St_5").innerHTML = Json_stud2.Math;
        document.getElementById("St_6").innerHTML = Json_stud2.Science;
        document.getElementById("St_7").innerHTML = Json_stud2.Social;
        document.getElementById("St_8").innerHTML = Json_stud2.Total;
        document.getElementById("St_9").innerHTML = Json_stud2.Percentage;
        document.getElementById("St_10").innerHTML = Json_stud2.Grade;
        document.getElementById("St_11").innerHTML = Json_stud2.Remarks;
    }

    else if (roll_num == Json_stud3.rollNum) {
        document.getElementById("St_2").innerHTML = Json_stud3.fulName;
        document.getElementById("St_1").innerHTML = Json_stud3.rollNum;
        document.getElementById("St_3").innerHTML = Json_stud3.English;
        document.getElementById("St_4").innerHTML = Json_stud3.Tamil;
        document.getElementById("St_5").innerHTML = Json_stud3.Math;
        document.getElementById("St_6").innerHTML = Json_stud3.Science;
        document.getElementById("St_7").innerHTML = Json_stud3.Social;
        document.getElementById("St_8").innerHTML = Json_stud3.Total;
        document.getElementById("St_9").innerHTML = Json_stud3.Percentage;
        document.getElementById("St_10").innerHTML = Json_stud1.Grade;
        document.getElementById("St_11").innerHTML = Json_stud1.Remarks;


    }
    else if (roll_num == Json_stud4.rollNum) {
        document.getElementById("St_2").innerHTML = Json_stud4.fulName;
        document.getElementById("St_1").innerHTML = Json_stud4.rollNum;
        document.getElementById("St_3").innerHTML = Json_stud4.English;
        document.getElementById("St_4").innerHTML = Json_stud4.Tamil;
        document.getElementById("St_5").innerHTML = Json_stud4.Math;
        document.getElementById("St_6").innerHTML = Json_stud4.Science;
        document.getElementById("St_7").innerHTML = Json_stud4.Social;
        document.getElementById("St_8").innerHTML = Json_stud4.Total;
        document.getElementById("St_9").innerHTML = Json_stud4.Percentage;
        document.getElementById("St_10").innerHTML = Json_stud4.Grade;
        document.getElementById("St_11").innerHTML = Json_stud4.Remarks;


    }


    else {
        alert("Please Enter the correct Roll Number")
        window.location.href = "marks.html";
    }


}




