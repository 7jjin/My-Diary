const OddEventResult = ({ count }) => {
  console.log(count);
  return <> {count % 2 === 0 ? "짝수" : "홀수"}</>;
};

export default OddEventResult;
