import React from "react";
import { StyleSheet } from '@src/theme/StyleSheet'
import { BaseComponent } from "@src/theme/BaseComponent";

interface BoxProps {
  children: React.ReactNode;
  tag: string;
  styleSheet: StyleSheet;
}

export default function Box({children, styleSheet, tag, ...props}){
  const Tag = tag || 'div';
  return (
    <BaseComponent as={tag} styleSheet={styleSheet}>
      {children}
    </BaseComponent>
  )
}
