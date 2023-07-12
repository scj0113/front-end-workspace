### 목차


- [HTML 기초](#html-기초)
- [글자 태그](#글자-태그)
- [목록 태그](#목록-태그)
- [이미지 및 멀티미디어 태그](#이미지-및-멀티미디어-태그)
- [하이퍼링크 태그](#하이퍼링크-태그)
- [테이블 태그](#테이블-태그)

# HTML 기초 

## 웹 브라우저 : 인터넷 화면을 보여주는 프로그램

- Chrome, BRAVE, Fire Fox, Safari, Opera, Edge...
- 사용자가 사용하는 브라우저는 정해져 있지 않으며 
  브라우저마다 화면이 다르게 출력이 될 수 있으니 브라우저마다 테스트를 하면서 수정
=> 크로스 브라우징 모든 브라우저를 통일하게끔 만듬

## 웹 페이지 개발 방법

- 구조（Structure） : HTML
- 표현 (Presentation) : CSS
- 동작 (Behavior) : JavaScript


## HTML (Hyper Text Markup Language) : 웹 페이지를 작성하는 언어

- 웹 문서 / HTML 문서 / HTML 페이지

## 웹 페이지 생성

- 저장 시 확장자는 .html 또는 .htm
- 처음 보여지는 화면의 파일 이름은 "index.html"

## main page, sub page

- main page : index.html
- sub page : index.html을 제외한 파일명.html 파일들

## HTML 내용 작성

1. 이해하기 쉽게
2. 논리적으로
3. 의미있게
4. 구조적으로
5. 콘텐츠는 "제목 + 내용"으로 작성한다
6. 디자인에는 없는 요소들도 내용 전달에 필요하면 추가 작성
7. 중요도, 선호도, 사용빈도가 높은 순으로


## 코딩 순서

1. 내용 작성
2. 마크업 : 용도나 목적에 맞는 태그를 작성해야한다
3. 콘텐츠 블럭
4. CSS 초기화
5. CSS 작성
6. 자바 스크립트 적용
7. 프로그래밍 적용
8. 표준/접근성 검사
9. 수정/보안

## 태그

```
<태그 속성="값"></태그>
```

1. "<"와 ">" 사이에 명령어 (tag, element) 작성
2. 시작태그와 종료태그로 구성
3. 종료태그가 없는 태그도 있다 (br, img, hr, meta, input)
4. 태그는 중첩 가능하며 종료태그는 나중에 작성한 태그먼저 작성
5. 가급적으로 모든 태그와 속성은 소문자로 작성해야한다

## 속성의 특징

1. 태그와 속성, 속성과 속성은 공백으로 구분

```html
<a href="#"></a>
```

2. 여러 개의 속성을 사용할 수 있다.

```html
<img src="/" width="100">
```

3. 하나의 속성에는 값을 한개만 지정가능하다.

```html
<img src="/" width="100,200">  <!--작성 불가-->
```

4. 속성값은 원래의 이름이 한글인 경우가 아니면 사용이 불가능하다.

```html
<img src="/" width="삼백"> <!--작성 불가-->
<meta name = "keywords" content="영화,한국영화,외국영화"><!--예외적인 경우-->
```

## HTML 기본 문서 구조

```html
<!DOCTYPE html> <!--- 문서 형식--->
<html lang="ko"> <!-- 기본 언어 설정-->
   <head>
       <title>문서 제목</title> 
   </head>
   <body></body>
</html>  
```
- !DOCTYPE html : 현재 문서가 HTML5 언어로 작성된 웹 문서라는 의미
- html : 웹 문서의 시작과 끝
- head : 웹 문서의 정보를 뜻함
- body : 실제 웹 브라우저에 나타날 내용들이 들어있음

## head에 많이 쓰는 태그

1. title : 문서의 제목
2. meta : 문서의 속성

## meta 태그 

```html
<meta charset="UTF-8"> <!--문자 세트를 지정하는것-->
<meta name="viewport" content= "width=device-width, initial-sacel=1.0"> <!--모바일 기기-->
<meta http-equiv="X-UA-Compatible" content="ie=edge"> <!--인터넷 익스플로어 브라우저 때문에 들어감-->



<!--검색 엔진-->
<meta name="keyword" content="키워드1,키워드2">
<meta name="description" content="문서 설명">
<meta name = "author" content="문서 작성자">
```

- keywords를 사용함으로 옛날에는 검색되게끔 했지만 과한 키워드 추가로 현재는 검색 엔진에서 사용하지 않는다. (구글은 가능)

[위로 이동](#목차)


# 글자 태그

## hn (Heading)

- 제목 표시
- h1(가장 큰 제목)~ h6(가장 작은 제목)
- 알아서 줄바꿈이 됨 + 볼드체 적용

## p (Paragraph)

- 문단 구분하는 태그


## br (Break)

- 줄 바꿈할때 쓰는 태그

## hr (Horizontal)

- 수평 줄 생성 태그

## pre (Preformat)

- 입력 하는대로 화면에 표시하는 태그

## b (Bold), strong

- 글자를 강조
- 굵게 표시하는 태그

## i (Itelic), em (Emphasized)

- 글자를 기울여서 표시하는 태그

## u (Under line)

- 글자에 밑줄을 표시하는 태그

## s (Strikethrough)

- 취소선 그어주는 태그

## mark

- 형광펜 태그

## small

- 글자를 작게하는 태그

## sup (Superscript Text), sub (SubScript Text)

- 위/아래 첨자 태그

## q, blockquote

- 글을 인용할 경우
- blockquote는 줄바꿈이 들어가있음

## abbr (Abbreviation)

- 약어 표시 태그

<br>

# 목록 태그

[위로이동](#목차)

## ul (Unordered List)

- 순서 없는 목록

## ol (Ordered List)

- 순서 있는 목록
- type : 항목 앞에 표시되는 숫자의 종류 변경
- start : 항목의 시작 번호 변경 (기본값 : 1)
- reversed : 항목을 역순으로 표시

## li (List Item)

- ul, ol의 항목에서 쓰는 태그

## dl (Description List)

- 정의 목록에 해당하는 태그

## dt (Definition Term)

- 목록에 대한 정의를 뜻하는 태그

## dd (Definition Description)

- 정의 목록의 항목에 해당하는 태그 
<!-- dl dt dd는 대부분 같이씀 -->
<br>

# 이미지 및 멀티미디어 태그

[위로 이동](#목차)

## img 

- 웹 페이지에 이미지 불러오는 태그
- 고정길이 : px, 가변길이 : % => 기본값은 px 단위

```html
<img src="이미지 경로" alt="이미지 설명 문구" 
width="가로길이(px/%)" height="세로길이(px/%)">
```

## img 태그 속성의 alt

- 사진의 경로가 잘못되거나 이미지를 제대로 표현할 수 없는 경우 대체 텍스트의 용도로 사용한다.

- 웹 접근성의 의해 정보를 청각, 촉각으로 얻는 사람들을 위해 img 속성의 alt로 정보를 전달한다.

- 전달할 정보가 없더라도 alt는 사용한다.(예시 alt="")

## audio

```html
<audio src="오디오 경로" controls autoplay loop> </audio>
```
- controls : 재생도구 출력 여부를 뜻함
- autoplay : 자동 재생여부를 지정하는 것
- loop : 반복 재생여부를 지정하는 것

## video

```html
<video src="비디오 경로" controls autoplay loop width =""
height ="" poster ="섬네일 이미지 경로">
```

- 기존 : object element, embeded element로 Flash, media player와 같은 플러그인 사용
- HTML5 : 플러그인 없이 동영상 재생
- 재생, 일시중지 등 web browser마다 자체 control 제공

## iframe

```html
<iframe width="너비" height="높이" src="페이지 경로">

</iframe>
```
- 원래는 웹 문서 안에 다른 웹 페이지를 추가하는 태그 (인라인 프레임)
- 유튜브 영상을 페이지에 넣고 싶을때 사용하게됨

<br>

# 하이퍼링크 태그

[위로 이동](#목차)

## a (Anchor)

- 하이퍼링크 기능은 웹 문서의 가장 핵심적인 기능이다.
- 클릭을 통해 연결된 곳으로 이동하여 사용을 편리하게 해주는 기능
- 텍스트를 클릭해 링크를 이동하는 방법, 이미지를 클릭해서 넘어가는 방법 등 존재
- 페이지 내에서의 링크를 통한 이동도 가능

## 절대경로

1. 최상위 디렉토리부터 순차적으로 이동하는 경로
2. 드라이브명(c:.d:)이나 프로토콜(http://,ftp//)으로 시작
3. 기존 파일의 위치에 상관없이 대상 파일의 경로가 동일


## 상대경로

1. 기존 파일과 대상 파일의 위치에 따라 경로 설정
2. 동일한 디렉터리에 있는 경우 : ./파일명.확장자 or 파일명.확장자
3. 하위 디렉터리에 있는 경우 : 디렉터리명/파일명.확장자
4. 상위 디렉터리에 있는 경우 : ../파일명.확장자




# 테이블 태그

[위로 이동](#목차)

## 테이블

- 웹 문서에서 자료를 정리할 때 사용함
- 행과 열로 이루어져 있고, 행과 열이 만나는 지점을 셀이라고 함

## 특징

1. 각 행의 셀 개수는 동일
2. 같은 행에 있는 셀들은 높이가 동일
3. 같은 열에 있는 셀들은 길이가 동일

## 관련 태그

1. table : 테이블의 외곽선을 표시해줌 태그
2. tr (Table Row) : 테이블의 행(줄)을 구분하는 태그
3. td (Table Data Cell) : 셀(칸) 생성하는 태그

## 셀 병합 속성

1. colspan : 열 병합
2. rowspan : 행 병합


## 접근성 향상을 위한 요소

1. th(Table Header) : 제목 셀 지정
2. caption : 테이블의 제목
3. thead(제목) / tfoot(결과) / tbody(내용) : 각 셀들의 역할 별 구분