//first section
function func() {
    let put1 = document.querySelector('.inu1').value
    let put2 = document.querySelector('.inu2').value
    let put3 = document.querySelector('.inu3').value
    let result = document.getElementById('resu').innerHTML = `Name: ${put1}</br>Class: ${put2} </br>Term: ${put3} <a href="sec.html"><button id="br">Edit</button></a>`
    if(put1=="" || put2=="" || put3=="") {
        document.getElementById('resu').innerHTML = `Please fill the form <a href="sec.html"><button id="br">press to fill form</button></a>`
    }
    document.getElementById('in').style.display='none'
}
function generate() {
    //alert("hello ")
 
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
    let val18 = document.getElementById("val18").value;
    if(val1=="" || val2=="" || val3=="" || val4=="" || val5=="" || val6==""){
        document.getElementById('info').innerHTML = `Please fill all the boxes below! </br> or check if what you inputed was correct`;
    }
    
    else{
        const subjects = [
            { name: "Mathematics", score: parseFloat(val1) },
            { name: "English", score: parseFloat(val2) },
            { name: "Yoruba", score: parseFloat(val3) },
            { name: "CCA", score: parseFloat(val4) },
            { name: "Basic science", score: parseFloat(val5) },
            { name: "Basic technology", score: parseFloat(val6) },
            { name: "Business studies", score: parseFloat(val7) },
            { name: "Civic Education", score: parseFloat(val8) },
            { name: "IRS", score: parseFloat(val9) },
            { name: "Agric science", score: parseFloat(val10) },
            { name: "History", score: parseFloat(val11) },
            { name: "Social studies", score: parseFloat(val12) },
            { name: "Home Economics", score: parseFloat(val13) },
            { name: "PHE", score: parseFloat(val14) },
            { name: "Arabic", score: parseFloat(val15) },
            { name: "Hifsu", score: parseFloat(val16) },
            { name: "Computer", score: parseFloat(val17) },
            { name: "Security Education", score: parseFloat(val18) },
        ];
        function calculateGrade(score) {
            if (score >= 70) return { grade: 'A', remark: 'Excellent' }
            if (score >= 60) return { grade: 'B', remark: 'Very Good' }
            if (score >= 50) return { grade: 'C', remark: 'Good' }
            if (score >= 40) return { grade: 'D', remark: 'Pass' }
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
            let fomular = parseFloat(val1) + parseFloat(val2) + parseFloat(val3) + parseFloat(val4) + parseFloat(val5) + parseFloat(val6) + parseFloat(val7) + parseFloat(val8) + parseFloat(val9) +parseFloat(val10) + parseFloat(val11) + parseFloat(val12) + parseFloat(val13) + parseFloat(val14) + parseFloat(val15) + parseFloat(val16) + parseFloat(val17) + parseFloat(val18);
            let result = document.querySelector('.result')
            result.value = fomular;
        });
    }
}