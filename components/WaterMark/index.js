import React, { useEffect } from "react";

const consoleMyName = () => {
  console.log(`akhil
  `);
};

const WaterMark = () => {
  useEffect(consoleMyName, []);
  return <></>;
};

export default React.memo(WaterMark);
