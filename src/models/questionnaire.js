const getQuestionnaire = q => ({
  meta: {
    currentStepId: 'ABOUT',
  },
  user: {
    name: '',
    email: '',
  },
  answers: {
    occupationRole: [],
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

const getQuestionnaireOptions = () => ({
  occupationRole: [
    { id: 'student', name: 'Student' },
    { id: 'designer', name: 'Designer' },
    { id: 'developer', name: 'Developer' },
    { id: 'businessPerson', name: 'Business Person' },
    { id: 'artist', name: 'Artist' },
    { id: 'contentCreator', name: 'Content Creator' },
  ],
})

export { getQuestionnaire, getQuestionnaireOptions }
