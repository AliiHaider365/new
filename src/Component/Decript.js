import * as React from "react";
 
import { useDencrypt } from "use-dencrypt-effect";
 
const values = ["Thing", "websites", "web App", " Effect" ,"Desktop Application" ];
 
const Example = () => {
  const { result, dencrypt } = useDencrypt();
 
  React.useEffect(() => {
    let i = 0;
 
    const action = setInterval(() => {
      dencrypt(values[i]);
 
      i = i === values.length - 1 ? 0 : i + 1;
    }, 2000);
 
    return () => clearInterval(action);
  }, []);
 
  return <div className='anim-txt' style={{display:"inline-block" }} >{result}</div>;
};

export default Example