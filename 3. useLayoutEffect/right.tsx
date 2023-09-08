import {useLayoutEffect, useRef} from 'react';


const Component = () => {
  const buttonRef = useRef();

  // layout effects applies synchronously after render
  // button will be drawn focused
  useLayoutEffect(() => {
    buttonRef.current.focus();
  }, []);

  return <>
    <button ref={buttonRef} />
  </>
}