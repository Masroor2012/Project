//loading animation
setTimeout(() => {
    let anim = document.getElementById('load-anim')
    anim.style.display = 'none'
    let disp = document.getElementById('disp')
    disp.style.display = 'flex'
    let main = document.getElementById('primary-toogle-display')
    main.style.display = 'block'
}, 1000)
//=============================

//User Recognition
let userImpend = document.getElementById('username')
let userName = localStorage.getItem('userName')

userImpend.innerHTML = userName
//============================

// primary toogle display...

var homeTool = document.getElementById('home-tool')
var setTool = document.getElementById('set-tool')
var runTool = document.getElementById('run-tool')

var toogleLoad = document.getElementById('toogle-load')

var homeDis = document.getElementById('home-page-dis')
var setDis = document.getElementById('set-page-dis')
var runDis = document.getElementById('run-page-dis')

function homeFunc(){
    homeDis.style.display = 'flex'
    setDis.style.display = 'none'
    runDis.style.display = 'none'
}

function setFunc(){
    setDis.style.display = 'flex'
    homeDis.style.display = 'none'
    runDis.style.display = 'none'
}

function runFunc(){
    runDis.style.display = 'block'
    homeDis.style.display = 'none'
    setDis.style.display = 'none'
}
//================================

// More Options section

function moreOpt(){
    document.getElementById('moreOptions-disp').style.display = 'block'
}

function kgSubjDisp(){

}

//===========================

// save function

    function saveFunc(){
        var valA = document.getElementById('valA').value
        var valB = document.getElementById('valB').value
        var valC = document.getElementById('valC').value
        var valD = document.getElementById('valD').value
        var done = document.getElementById('done')
        if (valA== '' || valB== '' || valC== '' || valD== '' || valF== ''){
            done.innerHTML = `<h1> Fill all the boxes </h1>`
        }else{
            var disappear =  document.getElementById('disappear')
            disappear.style.display = 'none';
            done.innerHTML = `<h1> SAVED, <br> click the start tool to continue`
        }
    }

//====================================
// Generation
    function generate(){
    // Check if all values is inputed
        if(val1==" " || val2=="" || val3=="" || val4=="" || val16=="" || val17==""){
            document.getElementById('error-IfAllIsNotInputed').innerHTML = `Please fill all the boxes below! </br> or check if what you inputed was correct`;
        }else{
            // Execute Main Command
            document.getElementById('title').innerHTML = 'Generating...'
            document.getElementById('bar-complete').style.display = 'flex';
            document.getElementById('overall-workspace-display').style.display = 'none';

            let percent = 0;
            const fill = document.getElementById("fill-bar");
            const text = document.getElementById("percentage");
            const status = document.getElementById("status");

            const statusMessages = {
                10: "Collating data...",
                40: "Initializing calculations...",
                70: "Generating results...",
                90: "Almost done..."
            };

            const interval = setInterval(() => {
                if (percent <= 100) {
                fill.style.width = percent + "%";
                text.textContent = percent + "%";

                // Update status message if one is defined for the current percent
                if (statusMessages[percent]) {
                    status.textContent = statusMessages[percent];
                }

                percent += 5;
                } else {
                status.textContent = "Completed!";
                clearInterval(interval);
                }
            }, 700);

            setTimeout(() => {
                document.getElementById('bar-complete').style.display = 'none'
                document.getElementById('generated-result').style.display = 'flex'
                document.getElementById('title').innerHTML = 'Result'
            }, 18000)

            //maim Generation of result

            let val1 = document.getElementById("val1").value;
            let val2 = document.getElementById("val2").value;
            let val3 = document.getElementById("val3").value;
            let val4 = document.getElementById("val4").value;
            let val5 = document.getElementById("val5").value;
            let val6 = document.getElementById("val6").value;
            let val7 = document.getElementById("val7").value;
            let val8 = document.getElementById("val8").value;
            let val9 = document.getElementById("val9").value;
            let val10 = document.getElementById("val10").value;
            let val11 = document.getElementById("val11").value;
            let val12 = document.getElementById("val12").value;
            let val13 = document.getElementById("val13").value;
            let val14 = document.getElementById("val14").value;
            let val15 = document.getElementById("val15").value;
            let val16 = document.getElementById("val16").value;
            let val17 = document.getElementById("val17").value;

            const subjects = [
                { name: "Mathematics", score: parseFloat(val1) },
                { name: "English", score: parseFloat(val2) },
                { name: "Language Subjects", score: parseFloat(val3) },
                { name: "Fine Art", score: parseFloat(val4) },
                { name: "Social Science", score: parseFloat(val5) },
                { name: "Science Subject", score: parseFloat(val6) },
                { name: "Business studies", score: parseFloat(val7) },
                { name: "Civic Education", score: parseFloat(val8) },
                { name: "Religious Studies", score: parseFloat(val9) },
                { name: "Agric science", score: parseFloat(val10) },
                { name: "History", score: parseFloat(val11) },
                { name: "Extra curricular", score: parseFloat(val12) },
                { name: "Home Economics", score: parseFloat(val13) },
                { name: "PHE", score: parseFloat(val14) },
                { name: "Pre-vocational Studies", score: parseFloat(val15) },
                { name: "Music", score: parseFloat(val16) },
                { name: "Computer", score: parseFloat(val17) },
            ];
            function calculateGrade(score) {
                if (score >= valA.value) return { grade: 'A', remark: 'Excellent' }
                if (score >= valB.value) return { grade: 'B', remark: 'Very Good' }
                if (score >= valC.value) return { grade: 'C', remark: 'Good' }
                if (score >= valD.value) return { grade: 'D', remark: 'Pass' }
                return { grade: 'F', remark: 'Fail' }
            }
            subjects.forEach((subject, index) => {
                const { grade, remark } = calculateGrade(subject.score);
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${subject.name}</td>
                    <td>${subject.score}</td>
                    <td>${grade}</td>
                    <td>${remark}</td>
                `;
                const tbody = document.getElementById('tbody');
                tbody.appendChild(row);
                let fomular = parseFloat(val1) + parseFloat(val2) + parseFloat(val3) + parseFloat(val4) + parseFloat(val5) + parseFloat(val6) + parseFloat(val7) + parseFloat(val8) + parseFloat(val9) +parseFloat(val10) + parseFloat(val11) + parseFloat(val12) + parseFloat(val13) + parseFloat(val14) + parseFloat(val15) + parseFloat(val16) + parseFloat(val17);
                let result = document.querySelector('.result')
                result.value = fomular;
            });
        }
    }
