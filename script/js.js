//상단 메뉴 header scroll 됐을때 변경 [header.on]

const header = document.querySelector('header')

/* 
첫번째방법: window.addEventListener('scroll', function(){
  if(window.scrollY > 300){ //300px내릴때 변경함
    header.classList.add('on')
  } else{
    header.classList.remove('on')
  }
  
}) 
*/

window.addEventListener('scroll', function(){
  if(window.innerWidth > 930) {
  header.classList.toggle('on',window.scrollY > 300)}
  //두번째방법: element.header.classList.toggle('class명',조건)
})

//3번째를 반영하려면 추가로~ section 이동 함수 
function moveToSection(target){
  target.scrollIntoView({behavior:"smooth"})
}

//header button
const menuItems = document.querySelectorAll('nav ul > li > a')

//한번에 scroll 부드럽게 넘어가기, menuItems.forEach(function(아이템,순서){}) 
menuItems.forEach(function(item,idx){
  item.onclick = function(e){
    e.preventDefault(); //a태그의 기본속성 막아줌/ 링크걸어둔걸 차단
    //1- document.querySelector(`#s${idx+1}`).scrollIntoView({behavior:"smooth"})
    //   tab을 눌렀을때 부드럽게 내려감 속도변경없음

    const target = document.querySelector(this.getAttribute('href'))
    //2-   target.scrollIntoView({behavior:"smooth"})

    moveToSection(target) // 3 section 이동 함수추가
  }
})

//Down Button, for(초기화식;조건식;증감식){실행할코드}
/* for(let i = 1; i < 6; i++){
  document.querySelector(`#s${i} .btnDown`).onclick = function(){
    //1- document.querySelector(`#s${i+1}`).scrollIntoView({behavior:"smooth"})
    const target = document.querySelector(`#s${i+1}`)
    moveToSection(target)
  }
} */

document.querySelectorAll('.btnDown').forEach(function(btn){
  btn.addEventListener('click',function(){
    const nextSection = this.closest('section').nextElementSibling;
    //closest('section') - this부터 시작해서 가장 가까운 section요소 찾아줘(부모방향으로올라가면서 가장가까운section)
    moveToSection(nextSection) 
  })
})

// 모바일일때 slider Menu - 햄버거버튼
const mob_btn = document.querySelector('.trigger')

mob_btn.addEventListener('click', (a)=>{
  a.preventDefault(); //브라우저가 특정 이벤트에 대해 기본적으로 수행하는 동작을 취소(막는) 메서드
  header.classList.toggle('open')
})

