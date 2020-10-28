window.addEventListener("DOMContentLoaded", init);

const state = {
    activeSection: 'experience',
    get activeSection() {
        return this._activeSection;
    },
    set activeSection(section) {
        this._activeSection = section;

        displaySection();
    },
};

function init() {
    const navigationButtonsElements = document.querySelectorAll('[data-target-id]');

    console.log(navigationButtonsElements)

    navigationButtonsElements.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    })
}

function handleButtonClick() {
    setActiveSection(this.dataset.targetId);
}

function setActiveSection(section) {
    state.activeSection = section;
}

function displaySection() {
    const previousSectionElement = document.querySelector('section.active');
    const sectionElement = document.querySelector(`[data-section-id="${state.activeSection}"]`);

    if (previousSectionElement) {
        previousSectionElement.classList.remove('active');
    }

    if (sectionElement) {
        sectionElement.classList.add('active');
    }
}