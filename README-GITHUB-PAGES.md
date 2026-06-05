# 맞닿음 모임 GitHub Pages 배포 가이드

이 프로젝트는 `정적 웹사이트`라서 GitHub Pages에 바로 올릴 수 있습니다.
이미 상대 경로(`./styles.css`, `./app.js`, `./manifest.webmanifest`)로 맞춰두어서,
저장소 이름이 무엇이든 크게 손대지 않고 배포할 수 있습니다.

## 1. 준비물

- GitHub 계정
- 이 폴더 전체
- 인터넷 브라우저

## 2. GitHub에 새 저장소 만들기

1. GitHub에 로그인합니다.
2. 오른쪽 위 `+` 버튼을 누릅니다.
3. `New repository`를 누릅니다.
4. Repository name에 원하는 이름을 넣습니다.
   - 예: `matdadum-moim`
5. `Public`으로 선택합니다.
6. `Add a README file`은 체크하지 않는 것을 추천합니다.
7. `Create repository`를 누릅니다.

## 3. 파일 업로드하기

### 방법 A. 웹에서 직접 업로드

처음이면 이 방법이 가장 쉽습니다.

1. 방금 만든 저장소 화면에서 `uploading an existing file`를 누릅니다.
2. 현재 폴더 안의 파일들을 모두 드래그해서 올립니다.
   - `index.html`
   - `styles.css`
   - `app.js`
   - `manifest.webmanifest`
   - `sw.js`
   - `icon.svg`
   - `.nojekyll`
   - `README-GITHUB-PAGES.md`
3. 아래 `Commit changes` 버튼을 누릅니다.

### 방법 B. GitHub Desktop 사용

GitHub Desktop을 쓰면 다음 업데이트가 편합니다.

1. GitHub Desktop 설치
2. `File > Add local repository`
3. 현재 폴더 선택
4. `Publish repository`

처음엔 A가 더 쉽습니다.

## 4. GitHub Pages 켜기

1. 저장소 상단 메뉴에서 `Settings`로 들어갑니다.
2. 왼쪽 메뉴에서 `Pages`를 누릅니다.
3. `Build and deployment`에서:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - 폴더는 `/ (root)`
4. `Save`를 누릅니다.

조금 기다리면 배포 링크가 생깁니다.

형식은 보통 아래와 같습니다.

```text
https://깃허브아이디.github.io/저장소이름/
```

예시:

```text
https://yourname.github.io/matdadum-moim/
```

## 5. 휴대폰에서 앱처럼 쓰기

GitHub Pages는 HTTPS라서 PWA 조건을 만족합니다.

### 아이폰

1. Safari로 배포 링크를 엽니다.
2. 하단 공유 버튼을 누릅니다.
3. `홈 화면에 추가`를 누릅니다.

### 안드로이드

1. Chrome으로 배포 링크를 엽니다.
2. 브라우저 메뉴를 누릅니다.
3. `홈 화면에 추가` 또는 `앱 설치`를 누릅니다.

설치하면 `맞닿음 모임` 이름으로 앱처럼 열 수 있습니다.

## 6. 나중에 수정할 때

1. 로컬 파일 수정
2. GitHub 저장소에 같은 파일 다시 업로드
3. 잠시 기다리면 Pages가 자동 반영

## 7. 잘 안 될 때 체크

- 링크가 404면:
  - `Settings > Pages`에서 브랜치가 `main`인지 확인
  - 업로드가 `main` 브랜치에 들어갔는지 확인
- 스타일이 안 보이면:
  - 파일 이름이 정확한지 확인
  - `styles.css`, `app.js`가 같은 폴더에 있는지 확인
- 앱 설치가 안 보이면:
  - 반드시 GitHub Pages 링크로 접속했는지 확인
  - 브라우저 캐시를 새로고침해보기

## 8. 추천

처음에는 `웹 업로드 방식`으로 한 번 성공해보는 걸 추천합니다.
원하면 다음 단계로는 제가

- GitHub Desktop 방식
- Git 명령어 방식
- Netlify 배포 방식

중 하나로도 이어서 자세히 설명해드릴 수 있습니다.
