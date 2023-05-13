import "./App.css";
import DiaryEditor from "./DiaryEdit";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "조진형",
    content: "안녕하세요",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "홍길동",
    content: "메롱",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "아무개",
    content: "바보",
    emotion: 1,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
