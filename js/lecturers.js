const lecturersData = [
  {
    id: '01',
    name: 'Brien Addison',
    area: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    profession: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    image: 'images/img-avator/avatar-01.jpg',
  },
  {
    id: '02',
    name: 'Mercy Hislord ',
    area: 'Director of Art Centre Nabi and a board member of CC Korea',
    profession: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    image: 'images/img-avator/avatar-02.jpg',
  },
  {
    id: '03',
    name: 'Thomas Mullar',
    area: 'Executive Director of the Wikimedia Foundation',
    profession: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
    image: 'images/img-avator/avatar-03.jpg',
  },
  {
    id: '04',
    name: 'Stella Buckman',
    area: 'Blockchain expert',
    profession: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
    image: 'images/img-avator/avatar-04.jpg',
  },
  {
    id: '05',
    name: 'David Bruis',
    area: 'President of Young Pirates of Europe',
    profession: 'European integration, political democracy and participation of youth through online as her major condemn, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
    image: 'images/img-avator/avatar-05.jpg',
  },
  {
    id: '06',
    name: 'Mavis Smith',
    area: 'CEO of ADDtech, ex COO of the Mozilla Foundation',
    profession: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
    image: 'images/img-avator/avatar-06.jpg',
  },
];

const showLect = document.querySelector('#tuitornll');
let output = ' ';
lecturersData.forEach((lecturer) => {
  output += `
        <div class="lecturer-card">
           <img src="${lecturer.image}" alt="lecturer">
           <div class="lecturer-card-details">
                <h3>${lecturer.name}</h3>
                <p class="tuitor">${lecturer.area}</p>
                <p>${lecturer.profession}</p>
           </div>
        </div>
          `;
});
showLect.innerHTML = output;

const showLecturer = document.querySelector('#tuitornli');
const lecturer = document.querySelector('#tuitornl');
const showMoreBtn = document.createElement('button');
showMoreBtn.className = 'show-more';
showMoreBtn.textContent = 'More';
showMoreBtn.addEventListener('click', () => {
  const moreLecturers = lecturersData.slice(2);
  showLecturer.innerHTML += moreLecturers.map((lecturer) => `
            <div class="lecturer-card">
               <img src="${lecturer.image}" alt="lecturer">
               <div class="lecturer-card-details">
                    <h3>${lecturer.name}</h3>
                    <p class="tuitor">${lecturer.area}</p>
                    <p>${lecturer.profession}</p>
               </div>
            </div>
              `).join('');
});
showMoreBtn.innerHTML = 'More <i class="fa fa-chevron-down"></>';
lecturer.appendChild(showMoreBtn);

const firstTwoLecturers = lecturersData.slice(0, 2);
firstTwoLecturers.forEach((lecturer) => {
  showLecturer.innerHTML += `
    <div class="lecturer-card">
    <img src="${lecturer.image}" alt="lecturer">
     <div class="lecturer-card-details">
        <h3>${lecturer.name}</h3>
        <p class="tuitor">${lecturer.area}</p>
        <p>${lecturer.profession}</p>
     </div>
  </div>
    `;
});
