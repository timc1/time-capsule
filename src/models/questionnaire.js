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
    occupationPlace: [
      { id: 'agency', name: 'Agency', isChecked: false },
      { id: 'school', name: 'School', isChecked: false },
      { id: 'company', name: 'Company', isChecked: false },
      { id: 'independent', name: 'Independent', isChecked: false },
    ],
    occupationHappiness: [],
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
