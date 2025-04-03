// Define subjects for each level
const subjectsByLevel = {
    L100: [],
    L200: [
        { id: "DBMS1", name: "DBMS Quiz 1" },
        { id: "computerArchitecture", name: "Computer Architecture" },
        { id: "compArchitecture19", name: "CSC211 2019 Exams" },
        { id: "csc211Quiz1", name: "CSC211 Quiz 1" },
        { id: "CSC211", name: "Yale CSC211 MCQs" }
    ],
    L300: [],
    L400: []
};

// Display the selected level
const selectedLevel = localStorage.getItem('selectedLevel');
if (selectedLevel) {
    document.getElementById('selected-level').textContent = `Level: ${selectedLevel}`;
}

// Get the subjects for the selected level
const subjectsContainer = document.getElementById('subjects-list');
const noSubjectsFeedback = document.getElementById('no-subjects-feedback');
const subjects = subjectsByLevel[selectedLevel] || [];

// Display subjects or feedback
if (subjects.length > 0) {
    subjects.forEach(subject => {
        const button = document.createElement('button');
        button.className = 'btn subject-btn';
        button.setAttribute('data-subject', subject.id);
        button.textContent = subject.name;
        button.addEventListener('click', () => {
            const isTimed = document.getElementById('timed-checkbox').checked;
            localStorage.setItem('selectedSubject', subject.id);
            localStorage.setItem('isTimed', isTimed);

            localStorage.removeItem('currentQuestionIndex');
            localStorage.removeItem('score');
            localStorage.removeItem('timeLeft');

            window.location.href = 'quiz.html';
        });
        subjectsContainer.appendChild(button);
    });
} else {
    noSubjectsFeedback.style.display = 'block';
}