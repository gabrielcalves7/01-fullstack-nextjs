import React from "react";
import { StyleSheet } from '@src/theme/StyleSheet'
import { BaseComponent } from "@src/theme/BaseComponent";

interface BoxProps {
  children?: React.ReactNode;
  tag?: 'main' | 'div' | 'article' | 'section' | 'ul' | string;
  styleSheet?: StyleSheet;
}

export default function Box({children, styleSheet, tag, ...props}: BoxProps){
  const Tag = tag || 'div';
  return (
    <BaseComponent as={Tag} styleSheet={styleSheet} {...props}>
      {children}
    </BaseComponent>
  )
}
