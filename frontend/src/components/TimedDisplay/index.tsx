import React, { useEffect, useState } from "react";

type TimedDisplayProps = {
  duration: number;
};

const TimedDisplay: React.FC<TimedDisplayProps> = (props) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, props.duration);
  }, []);

  if (show) {
    return <div>{props.children}</div>;
  }
  return null;
};

export default TimedDisplay;
