class Candidate {
  constructor(name,title,skills,personalities,languages){
    this.name=name;
    this.title=title;
    this.skills=skills;
    this.personalities=personalities;
    this.languages=languages;
  }
}

class Personality {
  constructor(isFastLearner,isCurious,isIndependent){
    this.isFastLearner=isFastLearner;
    this.isCurious=isCurious;
    this.isIndependent=isIndependent;
  }
}

document.querySelector('#submitBtn').addEventListener('click',()=>{
  const nameInput=document.querySelector('#nameInput').value;
  const titleInput=document.querySelector('#titleInput').value;
  const jsInput=document.querySelector('#jsInput');
  const cssInput=document.querySelector('#cssInput');
  const htmlInput=document.querySelector('#htmlInput');
  const fastInput=document.querySelector('#fastInput');
  const curInput=document.querySelector('#curInput');
  const indInput=document.querySelector('#indInput');
  const engInput=document.querySelector('#engInput');
  const danInput=document.querySelector('#danInput');

  const personalities= new Personality(true,true,true);
  const candidateForm= new Candidate(nameInput,titleInput,skills(),getCandPersonality(personalities),myLanguages());

function skills(){
  if(jsInput.checked===true&&cssInput.checked===true&&htmlInput.checked==true)
  return [jsInput.name,cssInput.name,htmlInput.name];
  else return []
}
function getCandPersonality(humor){
  if(fastInput.checked===true||curInput.checked===true||indInput.checked===true) return humor
  else return []
}
function myLanguages(){
  if(engInput.checked===true&&danInput.checked==true) return [engInput.name,danInput.name]
  else if(engInput.checked===true) return engInput.name
  else if(danInput.checked===true) return danInput.name
  else return []
}
  const send_application=function(applicant,url){
    console.log(applicant);
    console.log(url);
    alert(`Dear ${applicant.name} we have recieved your application.\nWe will come back to you.\nThank you for applying.`);
  }
  console.log(candidateForm);
  const apply_position = function(candidate) {
    const hasAllTraits = ['isFastLearner', 'isCurious', 'isIndependent'].every(personality => {
      return (candidate.personalities[personality]) !== undefined ? candidate.personalities[personality] === true : false;
    });
    console.log(hasAllTraits);
    const hasLanguage = ['danish', 'english'].some(language => {
      return candidate.languages.indexOf(language) > -1;
    });
    console.log(hasLanguage);
    const hasAllSkills = ['Javascript', 'CSS', 'HTML'].every(skill => {
      return candidate.skills.indexOf(skill) > -1;
    });
    console.log(hasAllSkills);
    const allMatched=[hasAllTraits, hasLanguage, hasAllSkills].every(match => {
      return (match?true:false);
    });
    console.log(allMatched);
    if (allMatched) {
      send_application(candidate, 'https://thehub.dk/jobs/front-end-developer-join-an-innovative-team');
    }
    else if(candidate.name==''){
      alert(`Dear applicant we are sorry,\nyour application does not match\n our criteria`)
    }
    else alert(`Dear ${candidate.name} we are sorry,\nyour application does not match\n our criteria`);
  }
  apply_position(candidateForm);
});
