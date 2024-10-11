const skiSchool = ["aki", "guadalupe", "lei", "aalam"];

function studentRollCall(student) {
    return student + " the skier";
}

const rollCall = skiSchool.map(studentRollCall);
console.log("Roll Call using function declaration:", rollCall);

const rollCallWithExpression = skiSchool.map(function (student) {
    return student + " the skier";
});
console.log("Roll Call using function expression:", rollCallWithExpression);

const rollCallWithArrow = skiSchool.map((student) => student + " the skier");
console.log("Roll Call using arrow function:", rollCallWithArrow);

const robots = [
    { name: "Johnny 5", modes: 5, isActivated: false },
    { name: "C3PO", modes: 3, isActivated: false },
    { name: "Sonny", modes: 2.5, isActivated: false },
    { name: "Baymax", modes: 1.5, isActivated: false },
];

const activatedRobots = robots.map((robot) => {
    return {
        ...robot,
        modes: robot.modes * 2,
        isActivated: true,
    };
});
console.log("Activated Robots:", activatedRobots);

const tutorials = [
    "what does the this keyword mean?",
    "What is the Constructor OO pattern?",
    "implementing Blockchain Web API",
    "The Test Driven Development Workflow",
    "What is NaN and how Can we Check for it",
    "What is the difference between stopPropagation and preventDefault?",
    "Immutable State and Pure Functions",
    "what is the difference between == and ===?",
    "what is the difference between event capturing and bubbling?",
    "what is JSONP?",
];

function titleCased() {
    return tutorials.map(tutorial => {
        return tutorial
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    });
}

const titleCasedTutorials = titleCased();
console.log("Title Cased Tutorials:", titleCasedTutorials);
