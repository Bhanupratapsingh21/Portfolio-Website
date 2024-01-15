// i know how to create responsive website but i have my exams so i was not doing it right now thanku hope you understand 
// iam keep learning all things mern stack and all or iwill create another website useing react next js or some backend thing 
// later so it is just for assiment thanku!

function redirectIfWindowSizeLessThan650() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (windowWidth < 650) {
      window.location.href = 'https://linktr.ee/HTTPS_BHANU';
    }
  }
  window.addEventListener('resize', redirectIfWindowSizeLessThan650);
  redirectIfWindowSizeLessThan650();