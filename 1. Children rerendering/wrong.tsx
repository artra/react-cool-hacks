import {useState} from 'react';

interface ChildProps {
  onChildClick: () => void;
  data: Record<string, string>;
}

// this will be rerendered on each parent button click
const Child = ({}: ChildProps) => {
  return <>child</>;
}

const Parent = () => {
  const [counter, setCounter] = useState();
  const onChildClick = () => {
    // do something
  }
  const data = {
    test: 'hello world'
  };


  const onClick = () => {
    setCounter((c: number) => {
      return c + 1;
    });
  }

  return <>
    <Child onChildClick={onChildClick} data={data}/>
    <button onClick={onClick}/>
  </>
}