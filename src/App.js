// eslint-disable  - waring 안뜨게 하려는 코드
// eslint-disable-next-line no-unused-vars

import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
 
  let [글제목, 글제목변경] = useState(['추천1', '추천2', '추천3']);
  let [따봉, 따봉변경] = useState(0);
  let [하트, 하트변경] = useState(0);
  let posts = '맛집1';

  // function 제목바꾸기(){
  //   var newArray = [...글제목];
  //   newArray[0] = '여자코드 추천';
  //   글제목변경( newArray );
  // }
  // <button onClick={ 제목바꾸기 } >버튼</button>
  return (
    <div className="App">
      <div className="black-nav">
        <div> KHM blog </div>
      </div>
      
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> {따봉} </h3>
        <p>3월 15일 발행</p>
        <hr/>
      </div>
      <div className="list">
      <h3>{ 글제목[1] } <span onClick={ ()=>{ 하트변경(하트 + 1 ) } }> ❤️ </span> {하트} </h3>
        <p>3월 14일 발행</p>
        <hr/>
      </div>
      <div className="list">
      <h3>{ 글제목[2] }</h3>
        <p>3월 13일 발행</p>
        <hr/>
      </div>

      <Modal/>

    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
        <h2>제목</h2>
        <p>날짝</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;




// 리액트 데이터 저장공간 state 만드는 법
// import React, {useState} from 'react';

// import logo from './logo.svg';
// import './App.css';

// 변수에 데이터 저장하고 (function App())
// function App() {

//   // state 데이터, state 데이터, state 데이터 변경 함수
//   let [글제목, 글제목변경] = useState('추천', '추천2');
//   let [글제목2, 글제목변경2] = useState('추천');

//   // [a->('어떤 것 추천') 들어가고,  b-> 추천 state 정정해주는 함수  두개의 함수 나오는 어레이]
//   // useState('어떤 것 추천'); [a, b]

//   // 데이터  / state 데이터 문법
//   let posts = 'Lillaya'; 
//   return (  
//     <div className="App">
//       <div className="black-nav">
//         <div> lillaya </div>
//       </div>
//       <div className="list">
//         {/* 데이터 바인딩함 */}
//         <h3> { posts } </h3>
//         <p> 3월 18일 발생 </p>
//         <hr/>
//       </div>
//     </div>
//   );
// }