import {useState, useCallback, useMemo, memo} from 'react';

interface ChildProps {
  onChildClick: () => void;
}

// this will be rerendered only on props change
const Child = memo(({}: ChildProps) => {
  return <>child</>;
})

const arr = [1,2,3,4];
const Parent = () => {
  const [counter, setCounter] = useState();

  // wrapped this prop with useCallback
  const onChildClick = useCallback(() => {
    // do something
  }, []);


  // don't need to wrap this with useCallback as it's not passing to any children (it's not a callback at all)
  const mapNumber = (num: number) => {
    return <div key={num}>num</div>;
  }

  // could skip useCallback here because button is dom element, not react component
  const onClick = () => {
    setCounter((c: number) => {
      return c + 1;
    });
  }

  return <>
    <Child onChildClick={onChildClick} />
    {arr.map(mapNumber)}
    <button onClick={onClick}/>
  </>
}