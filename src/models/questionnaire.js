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
    occupationHappiness: baseHappiness,
    occupationPlan: '',
    hobbies: [
      { id: 'meetups', name: 'Meetups', isChecked: false },
      { id: 'exercising', name: 'Exercising', isChecked: false },
      { id: 'digitalArt', name: 'Digital Arts', isChecked: false },
      { id: 'gaming', name: 'Gaming', isChecked: false },
    ],
    hobbiesPlan: '',
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

const baseHappiness = [
  { id: 'unsatisfied', name: 'Unsatisfied', isChecked: false },
  { id: 'notSoWell', name: 'Not So Well', isChecked: false },
  { id: 'couldBeBetter', name: 'Could Be Better', isChecked: false },
  { id: 'satisfied', name: 'Satisfied', isChecked: false },
  { id: 'vertySatisfied', name: 'Very Satisfied', isChecked: false },
]

export { getQuestionnaire }
