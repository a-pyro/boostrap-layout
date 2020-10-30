document.addEventListener('DOMContentLoaded', () => {
  console.log('dom loaded');
  // smooth scroll
  const scroll = new SmoothScroll('a[href*="#"]');
  const container = document.querySelector('.container-fluid');

  // random img array function
  const createRandomImgArray = (numberOfImages, width, height) => {
    const arrayOfImg = [];
    for (let i = 0; i < numberOfImages; i++) {
      const imgLink = `https://picsum.photos/${String(width)}/${String(
        height
      )}?random=${Math.ceil(Math.random() * 100)}`;
      const newAnchor = document.createElement('a');
      newAnchor.setAttribute('target', '_blank');
      newAnchor.setAttribute('title', 'click to open');
      newAnchor.setAttribute('href', imgLink);
      const newImg = document.createElement('img');
      newImg.setAttribute('src', imgLink);
      newImg.classList.add('img-fluid');
      newAnchor.appendChild(newImg);
      arrayOfImg.push(newAnchor);
    }
    return arrayOfImg;
  };

  //   create the basic bootstrap grid
  //   2 row 6 col
  const firstRow = document.createElement('div');
  firstRow.classList.add('row', 'first-row', 'justify-content-start');
  const secondRow = document.createElement('div');
  secondRow.classList.add('row', 'second-row', 'justify-content-start');
  container.append(firstRow, secondRow);

  //   create col and append to rows
  for (let i = 0; i < 6; i++) {
    const colsFirstRow = document.createElement('div');
    const colsSecondRow = document.createElement('div');
    colsFirstRow.classList.add(
      'col-12',
      'col-sm-6',
      'col-md-4',
      'col-lg-2',
      'text-center',
      'mb-3',
      'col-js'
    );
    colsSecondRow.classList.add(
      'col-12',
      'col-sm-6',
      'col-md-4',
      'col-lg-2',
      'text-center',
      'mb-3',
      'col-js'
    );
    firstRow.append(colsFirstRow);
    secondRow.append(colsSecondRow);
  }

  //   load the images
  const columns = document.querySelectorAll('.col-js');
  for (let i = 0; i < columns.length; i++) {
    columns[i].appendChild(createRandomImgArray(columns.length, 400, 200)[i]);
  }

  //   changin bg color to the navbar on scroll
  const navBar = document.querySelector('#navBar');

  window.addEventListener('scroll', (e) => {
    const yPos = window.scrollY;
    if (yPos >= 25) {
      navBar.classList.remove('bg-transparent');
      navBar.classList.add('navbar-custom');
    }
    if (yPos === 0) {
      navBar.classList.add('bg-transparent');
      navBar.classList.remove('navbar-custom');
    }
  });

  //   const yPos = window.scrollY;
  //   if (yPos >= 25) {
  //     navBar.classList.remove('bg-transparent');
  //     navBar.classList.add('navbar-custom');

  //     navBar.style.transform = 'translateY(-70px)';

  //     setTimeout(function () {
  //       navBar.style.transform = 'translateY(0)';
  //     }, 200);
  //   }
  //   if (yPos === 0) {
  //     navBar.classList.add('bg-transparent');
  //     navBar.classList.remove('navbar-custom');
  //   }
  // });
});

// let scrolled = false;

// window.onscroll = function () {
//   if (window.pageYOffset > 30) {
//     navBar.classList.remove('bg-transparent');
//     if (!scrolled) {
//       navBar.style.transform = 'translateY(-70px)';
//     }
//     setTimeout(function () {
//       navBar.style.transform = 'translateY(0)';
//       scrolled = true;
//     }, 200);
//   } else {
//     navBar.classList.add('bg-dark');
//     scrolled = false;
//   }
// };
