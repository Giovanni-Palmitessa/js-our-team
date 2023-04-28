const teamMembers = [
    {
        nameSurname: 'Wayne Barnett', 
        job: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        nameSurname: 'Angela Caroll', 
        job: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },  
    
    {
        nameSurname: 'Walter Gordon', 
        job: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },

    {
        nameSurname: 'Angela Lopez', 
        job: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },


    {
        nameSurname: 'Scott Estrada', 
        job: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },

    {
        nameSurname: 'Barbara Ramos', 
        job: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    },
];

const card = document.querySelector('.card');

for ( let i = 0; i < teamMembers.length; i++) {
    let members = teamMembers[i];
    console.log(`${i}. Nome e Cognome: ${members.nameSurname}, Incarico: ${members.job}, Immagine: ${members.image}.`);

    // card.innerHTML += ` ${i}. Nome e Cognome: ${members.nameSurname}, Incarico: ${members.job}, Immagine: ${members.image}.`
};