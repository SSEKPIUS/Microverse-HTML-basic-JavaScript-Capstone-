/* eslint-disable no-unused-vars */
const featuredSpeakers = [
  {
    name: 'yochai Benkler',
    photo: 'images/pf1.jpg',
    position: 'program Manager Live Alive',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Labore, saepe molestias. Nemo animi, quaerat voluptatem recusandae tenetur a`,
  },
  {
    name: 'kilnam Chon',
    photo: 'images/pf2.jpg',
    position: '',
    description: `Est dolores sit ea labore tempor Eirmod sadipscing sed et est vero vero invidunt. 
      Vero consetetur ipsum voluptua no Lorem kasd diam ipsum eos nonumy ut diam accusam kasd. Est invidunt`,
  },
  {
    name: 'SohYeong Noh',
    photo: 'images/pf3.jpg',
    position: 'Director of Art Center Nabi and a board member of Live Alive',
    description: `Est dolores sit ea labore tempor Eirmod sadipscing sed et est vero vero invidunt. 
      Vero consetetur ipsum voluptua no Lorem kasd diam ipsum eos nonumy ut diam accusam kasd. Est invidunt`,
  },
  {
    name: 'Julia Leda',
    photo: 'images/pf4.jpg',
    position: 'President of Young Pirates of Europe',
    description: `Est dolores sit ea labore tempor Eirmod sadipscing sed et est vero vero invidunt. 
      Vero consetetur ipsum voluptua no Lorem kasd diam ipsum eos nonumy ut diam accusam kasd. Est invidunt`,
  },
  {
    name: 'Lila Tretikov',
    photo: 'images/pf5.jpg',
    position: 'Executive Director of the Wikipedia Foundation',
    description: `Est dolores sit ea labore tempor Eirmod sadipscing sed et est vero vero invidunt. 
      Vero consetetur ipsum voluptua no Lorem kasd diam ipsum eos nonumy ut diam accusam kasd. Est invidunt`,
  },
  {
    name: 'Ryan Merkley',
    photo: 'images/pf6.jpg',
    position: 'CEO of LiveLive, ex COO of thr Moxilla Foundation',
    description: `Est dolores sit ea labore tempor Eirmod sadipscing sed et est vero vero invidunt. 
      Vero consetetur ipsum voluptua no Lorem kasd diam ipsum eos nonumy ut diam accusam kasd. Est invidunt`,
  },
];

const container = document.querySelector('.featured-speakers .speakers');
const isMobile = window.matchMedia('all and (max-width: 768px)').matches;
function showSpeakers(override = false) {
  featuredSpeakers.every((speaker, index) => {
    const draftImg = document.createElement('img');
    draftImg.src = 'images/draft.jpg';
    draftImg.alt = 'draft pic';

    const img = document.createElement('img');
    img.src = speaker.photo;
    img.alt = 'profile pic';

    const profileDv = document.createElement('div');
    profileDv.classList.add('profile');
    profileDv.appendChild(draftImg);
    profileDv.appendChild(img);

    const h = document.createElement('h3');
    h.innerText = speaker.name;

    const p1 = document.createElement('p');
    p1.classList.add('position');
    p1.innerText = speaker.position;

    const p2 = document.createElement('p');
    p2.classList.add('spliter');

    const p3 = document.createElement('p');
    p3.classList.add('description');
    p3.innerText = speaker.description;

    const biodataDv = document.createElement('div');
    biodataDv.classList.add('biodata');
    biodataDv.appendChild(h);
    biodataDv.appendChild(p1);
    biodataDv.appendChild(p2);
    biodataDv.appendChild(p3);

    const speakerDv = document.createElement('div');
    speakerDv.classList.add('speaker');
    speakerDv.appendChild(profileDv);
    speakerDv.appendChild(biodataDv);

    if (isMobile && index > 1 && override === false) {
      const icon = document.createElement('i');
      icon.classList.add('fa', 'fa-chevron-down', 'icon');
      icon.setAttribute('aria-hidden', 'true');

      const input = document.createElement('input');
      input.classList.add('input-field');
      input.setAttribute('type', 'text');
      input.setAttribute('placeholder', 'MORE');

      const inputSpeakers = document.createElement('div');
      inputSpeakers.classList.add('input-speakers');
      inputSpeakers.appendChild(icon);
      inputSpeakers.appendChild(input);

      const speakerBtn = document.createElement('div');
      speakerBtn.classList.add('speaker-btn');
      speakerBtn.appendChild(inputSpeakers);

      speakerBtn.addEventListener('click', () => {
        container.innerHTML = '';
        showSpeakers(true);
      });

      container.appendChild(speakerBtn);
      return false;
    }
    container.appendChild(speakerDv);
    return true;
  });
}

window.addEventListener('DOMContentLoaded', (event) => {
  showSpeakers();
});
