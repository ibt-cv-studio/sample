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

document.getElementById("generate").onclick=()=>{

alert("Phase 2 will generate the official CBC Scheme of Work table.");

};
