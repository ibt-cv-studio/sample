const weeksContainer = document.getElementById("weeks");

const addWeekBtn = document.getElementById("addWeek");

let weekCount = 0;

addWeekBtn.onclick = () => {

weekCount++;

const week = document.createElement("div");

week.className="card week";

week.innerHTML=`

<h2>

Week ${weekCount}

<button class="deleteWeek">
Delete Week
</button>

</h2>

<div class="grid">

<input placeholder="Week Number" required>

<input type="date" required>

<input type="date" required>

</div>

<div class="lessons"></div>

<br>

<button class="addLesson">
+ Add Lesson
</button>

`;

weeksContainer.appendChild(week);

const lessonsContainer = week.querySelector(".lessons");

const addLessonButton = week.querySelector(".addLesson");

let lessonNumber=0;

addLessonButton.onclick=()=>{

lessonNumber++;

const lesson=document.createElement("div");

lesson.className="lesson";

lesson.innerHTML=`

<h3>

Lesson ${lessonNumber}

<button class="deleteLesson">

Delete

</button>

</h3>

<div class="grid">

<input placeholder="Number of Periods" required>

<input placeholder="Unit Title" required>

<input placeholder="Lesson Title" required>

<textarea placeholder="Knowledge & Understanding" required></textarea>

<textarea placeholder="Skills" required></textarea>

<textarea placeholder="Attitudes & Values" required></textarea>

<textarea placeholder="Teaching Methods" required></textarea>

<textarea placeholder="Resources & References" required></textarea>

<textarea placeholder="Observations"></textarea>

</div>

`;

lessonsContainer.appendChild(lesson);

lesson.querySelector(".deleteLesson").onclick=()=>{

lesson.remove();

};

};

week.querySelector(".deleteWeek").onclick=()=>{

week.remove();

};

};

document.getElementById("generate").onclick = () => {

    let output = `
    <html>
    <head>
        <title>CBC Scheme of Work</title>
        <style>
            body{
                font-family:Arial,sans-serif;
                padding:20px;
            }

            table{
                width:100%;
                border-collapse:collapse;
            }

            th,td{
                border:1px solid #000;
                padding:8px;
                vertical-align:top;
            }

            th{
                background:#f2f2f2;
            }

            h2{
                text-align:center;
            }
        </style>
    </head>
    <body>

    <h2>CBC Scheme of Work</h2>

    <table>

    <tr>
        <th>Week</th>
        <th>Periods</th>
        <th>Unit</th>
        <th>Lesson</th>
        <th>Knowledge</th>
        <th>Skills</th>
        <th>Attitudes</th>
        <th>Teaching Methods</th>
        <th>Resources</th>
        <th>Observation</th>
    </tr>
    `;

    document.querySelectorAll(".week").forEach((week)=>{

        const weekInputs = week.querySelectorAll(".grid input");

        const weekNumber = weekInputs[0].value;

        const lessons = week.querySelectorAll(".lesson");

        lessons.forEach((lesson,index)=>{

            const inputs = lesson.querySelectorAll("input");

            const textareas = lesson.querySelectorAll("textarea");

            output += `
            <tr>

                ${
                    index===0
                    ? `<td rowspan="${lessons.length}">${weekNumber}</td>`
                    : ""
                }

                <td>${inputs[0].value}</td>

                <td>${inputs[1].value}</td>

                <td>${inputs[2].value}</td>

                <td>${textareas[0].value}</td>

                <td>${textareas[1].value}</td>

                <td>${textareas[2].value}</td>

                <td>${textareas[3].value}</td>

                <td>${textareas[4].value}</td>

                <td>${textareas[5].value}</td>

            </tr>
            `;

        });

    });

    output += `
    </table>

    </body>

    </html>
    `;

    const printWindow = window.open("", "_blank");

    printWindow.document.write(output);

    printWindow.document.close();

    printWindow.print();

};
