export default function Novelty({header, text}) {
  return (
    <div className='novetly'>
      <div className='blue tc f3 fw6 ma3'>{header}</div>
      <p className='white pb1 ph3 f4'>{text}</p>
    </div>
  );
}
