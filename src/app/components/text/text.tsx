import BoldText from "./bold";
import MediumText from "./medium";

export default function Text({ children, type, size, color }: { children: React.ReactNode, type: TypeText, size: string, color: string }) {
    const TextComponents = {
        'medium': MediumText,
        'bold': BoldText
    };

    const TextComponent = TextComponents[type];
    return (
        <TextComponent styles={size + ' ' + color}>
            {children}
        </TextComponent>
    )
}

type TypeText = 'medium' | 'bold';