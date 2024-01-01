import React from "react";

// componentプロパティの型をReact.ElementTypeにする(TypeScriptがComponentの型を推測できないため型注釈を追加)
interface IconProps {
    component: React.ElementType;
    color?: string;
}

// Iconコンポーネントのプロパティの型としてIconPropsを使用
const Icon: React.FC<IconProps> = ({
    component: Component,
    color = "var(--default-color)", // cssのデフォルトカラーを指定
}) => <Component size={48} style={{ margin: "10px", color }} />;

export default Icon;
