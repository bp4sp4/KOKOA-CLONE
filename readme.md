## KOKOA-CLONE

### HTML5, CSS3 기본기 다지기

### 하는 이유 : 시멘틱하게 코드작성, css 파일 좀더 깔끔하게 정리 하기

### 2024/01/09(화) START ~ 2024/01/12(금) END

마우스 우클릭을 통해 새창열어 확인해주시면 감사하겠습니다.

<h3>코코아톡 클론코딩 - <a href="https://bp4sp4.github.io/KOKOA-CLONE/">Demo Site</a></h3>
<br>

<h2>📌 프로젝트 진행이유</h2>

- 좀더 html 기본기 다지기 bem방식 클래스네임 설정방법 익히기 위해 시작했다.
- css 기본기 다지기, 잘못알고 있는 css, 잘 알고 있는 css도 제대로 사용 해보기

<h2>✏️ 얻어 가는 것</h2>

- 좀더 시멘틱한 html 작성법
- css 사용법 , 혹은 잘못알고 있는 지식 제대로 잡고가기
- bem 클래스 작성방식 어렵긴 하지만 적응하면 굉장히 괜찮은 작성방식
- @import식으로 css 파일 컴포넌트화, 스크린화 굉장히 깔끔한 방식이라 마음에 들었다.
- 항상 다른 홈페이지들 보면 :root가 뭔지 잘 몰랐지만 이번기회에 알아가고 나도 많이 써봐야겠단 생각밖에 안들었다. 굉장히 편리한 방식이다.

```
:root {
    --yellow: #fae100;
    --horizontal-space: 25px;
    --main-border: 1px solid rgba(0, 0, 0, 0.2);
}
```

<h2>❗ 어려웠던점</h2>

- 역시 처음 해보는 bem방식 클래스네임이다 보니 오타도 잦았고, 클래스네임이 비슷하다 보니 오류찾기 너무 힘들었다(눈빠지는줄..)
- 클래스네임 짓기 너무 어렵다.

<h2>24/01/12(금)</h2>

- 설정 완성
- 채팅방 내부 완성
- 각종 애니메이션 완성

<h2>24/01/11(목)</h2>

- 친구, 채팅, 검색 영역 완성
- 별 다를꺼 없던 디자인이다 클래스명 BEM 스타일에 적응하고 써보자 클래스명 가독성이 좋아보임
- 채팅,검색 더미데이터 생성 현타온다..
- 항상 찾아쓰던 소문자를 대문자로 바꿔주는 css 외워두자.

```
// 소문자를 대문자로 바꿔주는 css
   text-transform: uppercase;
```

<h2>24/01/10(수)</h2>

- 클론코딩 시작
- 메인 index.html 생성
  - import로 좀더 코드 간결하고 가독성 있게 정리(아주 유용함)
  - vaiables.css 자주 써먹는 코드다 잘 기억해놓고 쓰자
  - css 공부하면서 배웠던 position 부모가 relative 쓰고 자식이 absolute를 쓰면 그 공간안에서 움직임
- css 쓰면서 항상 몰랐던걸 반성하자
- 강의와의 조금 다르게 디자인 변경 앱형식 웹디자인 자동 반응형

```
.nav__link {
    position: relative;
    color: #2e363e;

.nav__notification {

    position: absolute;
    left: 17px;
    ottom: 17px;
}
```

```
:root {
    --yellow: #fae100;
}

excss {
    color : var(--yellow)
}
```

```
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
@import "reset.css";
@import "variables.css";
/* Components */
@import "components/status-bar.css";
@import "components/nav-bar.css";
/* Screens */
@import "screens/login.css";


body {
    font-family: 'Open Sans', sans-serif;
    background-color: #ededed;

}
```

<h2>24/01/09(화)</h2>
<h3>css 기본기 - display</h3>

- display : inline -> 높이와 너비가 없음 지정이안됨
- display : block -> 높이와 너비가 지정이됨
- block -> margin, padding, border 지정 가능

<h3>css 기본기 - margin</h3>

- margin : 10px -> 상, 하, 좌, 우 적용
- margin : 10px, 20px -> 10px 상,하, 20px 좌우 적용
- margin : 20px, 5px, 5px, 5px -> 상, 우, 하, 좌 적용

<h3>css 기본기 - border</h3>

- border : 2px soild black -> 색상의크기, 한줄, 색상
<h3>css 기본기 - posistion</h3>

- postion : static -> 디폴트값
- position : relative -> top, bottom, left, right 속성을 쓸 수 있다.
- position : absolute -> 가장가까운 relative 부모를 기준으로 이동시켜준다.
- 부모엘리먼트 {position : relative}
- 자식엘리먼트 {position : absolute}

<h3>css 기본기 - 화살표 >, +  </h3>

- div > 바로 밑 자식
- div + 형제

<h3>컬러 지정</h3>

- :root {
--main-color : #ededed
}
color {
color : var(--main-color);
}
<h3>css 기본기 - animation </h3>

```
@keyframe 이름 {
    from {
        transform : rotatex(0);
    }
    to {
        transfrom : rotateX(360deg)
    }
}

이름 {
    animation : 이름 5s ease-in-out infinite;
}

@keyframe 이름 {
    0% {
        transform : rotateY(0);
    }
    50% {
        transfrom : rotateY(180deg) translateY(-100px);
    }
    100%{
        transfrom : rotateY(0) translateY(0px);
    }
}

이름 {
    animation : 이름 5s ease-in-out infinite;
}
```
