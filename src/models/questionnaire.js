const getQuestionnaire = q => ({
  meta: {
    currentStepId: 'ABOUT',
  },
  user: {
    name: ``,
    email: ``,
  },
  answers: {
    occupationRole: [
      { id: `student`, name: `Student`, isChecked: false },
      { id: `designer`, name: `Designer`, isChecked: false },
      { id: `developer`, name: `Developer`, isChecked: false },
      { id: `businessPerson`, name: `Business Person`, isChecked: false },
      { id: `artist`, name: `Artist`, isChecked: false },
      { id: `contentCreator`, name: `Content Creator`, isChecked: false },
    ],
    occupationPlace: [
      { id: `agency`, name: `Agency`, isChecked: false },
      { id: `school`, name: `School`, isChecked: false },
      { id: `company`, name: `Company`, isChecked: false },
      { id: `independent`, name: `Independent`, isChecked: false },
    ],
    occupationHappiness: baseHappiness,
    occupationPlan: ``,
    hobbies: [
      { id: `meetups`, name: `Meetups`, isChecked: false },
      { id: `exercising`, name: `Exercising`, isChecked: false },
      { id: `gardening`, name: `Gardening`, isChecked: false },
      { id: `gaming`, name: `Gaming`, isChecked: false },
      { id: `noInterests`, name: `No Interests 😔`, isChecked: false },
    ],
    hobbiesPlan: ``,
    currentRelationships: [
      { id: `terrible`, name: `Terrible`, isChecked: false },
      { id: `notSoGood`, name: `Not So Good`, isChecked: false },
      { id: `okay`, name: `Okay`, isChecked: false },
      { id: `prettyGood`, name: `Pretty Good`, isChecked: false },
      { id: `awesome`, name: `Awesome`, isChecked: false },
    ],
    relationshipsPlan: ``,
    personalHealth: [
      { id: `terrible`, name: `Terrible`, isChecked: false },
      { id: `notSoGood`, name: `Not So Good`, isChecked: false },
      { id: `okay`, name: `It's Okay`, isChecked: false },
      { id: `prettyGood`, name: `Pretty Good`, isChecked: false },
      { id: `awesome`, name: `Tip Top Shape`, isChecked: false },
    ],
    personalHealthPlan: ``,
    betterYourCommunity: ``,
    betterYourCommunityPlan: ``,
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
