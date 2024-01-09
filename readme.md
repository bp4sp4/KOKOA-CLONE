## KOKOA-CLONE

### HTML5, CSS3 기본기 다지기

### 2024/01/09(화) START

<h2>24/01/09</h2>
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
