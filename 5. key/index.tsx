import {useState} from 'react';

interface ChildProps {
  counter: number;
}

const Child = ({ counter }: ChildProps) => {
  const [childCounter] = useState(counter);

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
    {
      // imagine you have a really complex dependent state inside this child,
      // then sometimes it's easier to recreate child manually defining a different key prop
    }
    <Child counter={counter} key={counter} />
    <button onClick={onClick}/>
  </>
}