import {useState, useCallback, useMemo, memo} from 'react';

interface ChildProps {
  onChildClick: () => void;
  data: Record<string, string>;
}

// this will be rerendered only on props change
const Child = memo(({}: ChildProps) => {
  return <>child</>;
})

const Parent = () => {
  const [counter, setCounter] = useState();

  // wrapped this prop with useCallback
  const onChildClick = useCallback(() => {
    // do something
  }, []);

  // wrapped this prop with useMemo
  const data = useMemo(() => {
    return {
      test: 'hello world'
    };
  }, []);

  const onClick = () => {
    setCounter((c: number) => {
      return c + 1;
    });
  }

  return <>
    <Child onChildClick={onChildClick} data={data} />
    <button onClick={onClick}/>
  </>
}