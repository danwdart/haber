import React from 'react';

type MyProps = {
  name: string,
  children: any
};

export default (props: MyProps) =>
  <div className="hi">
    Hello World, my name is {props.name}
    {props.children}
  </div>;
