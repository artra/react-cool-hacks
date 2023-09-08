import {useState, useEffect} from 'react';

interface ChildProps {
  counter: number;
}

const Child = ({ counter }: ChildProps) => {
  const [childCounter, setChildCounter] = useState(counter);
  const [prevCounter, setPrevCounter] = useState(counter);

  // getDerivedStateFromProps in hooks
  // setState inside render will restart rendering and update internal state faster then setState in useEffect
  // update props -> render -> restart render -> user see changes
  if (prevCounter !== counter) {
    setPrevCounter(counter);
    setChildCounter(counter);
  }

  return <>child {childCounter}</>;
}

const Parent = () => {
  const [counter, setCounter] = useState();

  const onClick = () => {
    setCounter((c: number) => {
      return c + 1;
    });
  }

  return <>
    <Child counter={counter} />
    <button onClick={onClick}/>
  </>
}