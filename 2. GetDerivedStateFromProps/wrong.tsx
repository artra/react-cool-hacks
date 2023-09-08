import {useState, useEffect} from 'react';

interface ChildProps {
  counter: number;
}

const Child = ({ counter }: ChildProps) => {
  const [childCounter, setChildCounter] = useState(counter);

  // update dependent local state
  // update props -> render -> call effects next tick (user should see these changes) -> rerender
  useEffect(() => {
    setChildCounter(counter)
  }, [counter]);

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