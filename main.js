'use strict';
// 네비게이션 바를 스크롤되면 분홍색 배경으로 바꾸기
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// 탭 메뉴를 선택했을 때 해당위치로 특정 태그위치로 스크롤링 되기
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', function (e) {
  //   console.log(e.target); - 클릭하면 target이 나옴
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    //값이 undefind일 때 - 메뉴 중간 쯤 애매한 위치 클릭하면 나옴
    return; //값을 출력하지 x
  }
  console.log(e.target.dataset.link); //html에 data-link="#home"으로 지정
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
});
