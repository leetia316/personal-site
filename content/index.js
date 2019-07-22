export const hero = {
  headline: 'I\'m a <b>pragmatic web developer</b> who wears many hats.',
  subheadline: '... metaphorically speaking. I look <b><i>REALLY</b></i> bad in hats.',
  image: '/images/sisters.jpg',
}

export const skills = [
  { icon: 'Frontend', headline: 'Frontend Development', paragraph: 'I can turn any design into a web app. I prefer Vue.js and PostCSS, but know my way around Node, ES6, and plenty of other modern frontend tooling.' },
  { icon: 'Backend', headline: 'Backend Development', paragraph: 'I use modern backend solutions like Headless CMSs and Static Site Generation to deploy lean and secure builds to Global CDNs.' },
  { icon: 'Design', headline: 'Design & UX', paragraph: 'While it is not my primary focus, I can whip up low-fidelity wireframes, and iterate them into full-fledged designs. I designed this very site!' },
]

export const hobbies = [
  { icon: 'Exercise', text: 'I repeatedly pick up and then lower down heavy objects to make my muscles slightly bigger.' },
  { icon: 'Party', text: 'I have been known to drink a brew or two, but I am far past my Ohio University glory days.' },
  { icon: 'Gaming', text: 'I have been playing competitive video games for as long as I can remember. I am currently hooked on Apex Legends.' },
]

const content = {
  ...hero,
  ...skills,
  ...hobbies,
}

export default content
