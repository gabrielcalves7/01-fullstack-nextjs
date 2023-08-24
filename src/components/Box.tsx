import React from "react";

interface StyleSheet {
  fontFamily: string;

}

interface BoxProps {
  children: React.ReactNode;
  tag: string;
  styleSheet: StyleSheet;
}

export default function Box({children, styleSheet, tag}){
  const Tag = tag || 'div';
  return (
    <Tag style={styleSheet}>
      {children}
    </Tag>
  )
}
