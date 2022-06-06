const notes = [
    {
        course: "Educación Física",
        note: 7,
        credit: 2,
    },
    {
        course: "Programación",
        note: 9,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 10,
        credit: 5,
    },
    {
        course: "matemáticas",
        note: 8,
        credit: 4,
    }
];

const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;

document.getElementById("ponderado").innerHTML = promedioPonderadoNotasConCreditos;