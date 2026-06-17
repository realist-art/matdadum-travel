# 맞닿음 모임 GitHub Pages 배포 가이드

## 업로드할 폴더 구조

```text
후쿠오카/
├─ index.html
├─ styles.css
├─ app.js
├─ sw.js
├─ manifest.webmanifest
├─ icon.svg
├─ .nojekyll
├─ README-GITHUB-PAGES.md
└─ assets/
   └─ photos/
      ├─ motsunabe.jpg
      ├─ hakata-ramen.jpg
      ├─ mentaiko.jpg
      └─ drugstore.jpg
```

## 처음 배포할 때

1. GitHub에서 `Public` 저장소를 새로 만듭니다.
2. 저장소 첫 화면에서 `uploading an existing file`를 누릅니다.
3. 위 폴더 구조 그대로 전부 업로드합니다.
4. `Commit changes`를 누릅니다.
5. `Settings > Pages`로 이동합니다.
6. `Deploy from a branch`를 고릅니다.
7. `main`과 `/ (root)`를 선택하고 저장합니다.

## GitHub Pages 주소

```text
https://깃허브아이디.github.io/저장소이름/
```

예시:

```text
https://realist-art.github.io/matdadum-travel/
```

## 수정 후 다시 올릴 때

아래 파일 또는 폴더가 바뀌었으면 같이 다시 업로드합니다.

- `index.html`
- `styles.css`
- `app.js`
- `sw.js`
- `manifest.webmanifest`
- `assets/photos/`

같은 이름으로 덮어쓰기 후 `Commit changes`를 누르면 됩니다.

## 모바일에서 앱처럼 설치

### 아이폰

1. Safari로 배포 링크를 엽니다.
2. 공유 버튼을 누릅니다.
3. `홈 화면에 추가`를 누릅니다.

### 안드로이드

1. Chrome으로 배포 링크를 엽니다.
2. 메뉴를 누릅니다.
3. `홈 화면에 추가` 또는 `앱 설치`를 누릅니다.

## 주의

- 핀 코드와 와이파이 비밀번호는 화면에서 가려도 공개 저장소 소스에는 남습니다.
- 정말 민감하면 공개 저장소 대신 비공개 저장소나 별도 비공개 배포가 더 안전합니다.
- 서비스워커 캐시 때문에 수정 후 예전 화면이 보이면 브라우저 새로고침을 1~2번 더 해보세요.
