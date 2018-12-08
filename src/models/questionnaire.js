const getQuestionnaire = q => ({
  meta: {
    currentStepId: 'ABOUT',
  },
  user: {
    name: '',
    email: '',
  },
  answers: {
    occupationRole: [
      { id: 'student', name: 'Student', isChecked: false },
      { id: 'designer', name: 'Designer', isChecked: false },
      { id: 'developer', name: 'Developer', isChecked: false },
      { id: 'businessPerson', name: 'Business Person', isChecked: false },
      { id: 'artist', name: 'Artist', isChecked: false },
      { id: 'contentCreator', name: 'Content Creator', isChecked: false },
    ],
    occupationCompany: '',
    occupationPlan: '',
    hobbyThisYear: '',
    hobbyThisYearPlan: '',
    wantToLearn: '',
    wantToLearnPlan: '',
    placeToVisit: '',
    placeToVisitPlan: '',
    betterYourHealth: '',
    betterYourHealthPlan: '',
    betterYourCommunity: '',
    betterYourCommunityPlan: '',
  },
})

export { getQuestionnaire }
