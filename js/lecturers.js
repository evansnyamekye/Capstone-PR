const lecturersData = [
  {
    id: '01',
    name: 'Brian Addison',
    area: 'Blockchain Project Manager and solution Architect at EvansCode Online School',
    profession: 'Brain has a broad studies of building enterprise production, and customized blockchain solutions to business of all sizes',
    image: 'images/img-avator/avatar-01.jpg',
  },
  {
    id: '02',
    name: 'Mercy Hislord ',
    area: 'Director of PHP framework Dept.',
    profession: 'Mercy has over 7+ experince in building appllications with php framework (Laravel). Courses in this section has been outline from the beginnning level to advance. ',
    image: 'images/img-avator/avatar-02.jpg',
  },
  {
    id: '03',
    name: 'Thomas M. Oduro',
    area: 'Executive Director of Fiber optic Dept. EvansCode online School',
    profession: 'Thomas has vast experince in Fiber optics technology after few year it was invented to transmits information as light pulses along a glass. He teaches cylindrical dielectric waveguide (nonconducting waveguide) that transmits light along its axis through the process of total internal reflection.',
    image: 'images/img-avator/avatar-03.jpg',
  },
  {
    id: '04',
    name: 'Mary Buckman',
    area: 'JavaScript Advanced Tutor',
    profession: 'Mary has experienced in JavaScript development, front End developement and Jounir front End developement. This course has enabled student gain experience in design of applications and software using JavaScript programming language.',
    image: 'images/img-avator/avatar-04.jpg',
  },
  {
    id: '05',
    name: 'Albert Bruis',
    area: 'Head of Project Management at EvansCode Online school',
    profession: 'Albert is a well experienced tutor of all the project management sections(ie. Project Assistant, Project Administrator, Project Management Specialist, Project Scheduler, Project Risk Manager etc.) Students enroll in the above will much to learn',
    image: 'images/img-avator/avatar-05.jpg',
  },
  {
    id: '06',
    name: 'Marian Smith',
    area: 'Director in-Charge of SQL Database developement at EvansCode Online',
    profession: 'Marian has an in-depth understanding of database and how to implement it in any application.  SQL Developer. Database Developer. Junior Database Programmer.',
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
