import React from 'react';

type ButtonProps = {
  click: ((event: React.MouseEvent<HTMLButtonElement>) => void),
  pressed: boolean,
  times: number,
  children: any
};

export default (props: ButtonProps) =>
  <button onClick={props.click}>
    Pressed: {props.pressed && `yes`}, times: {props.times}
    {props.children}
  </button>;
