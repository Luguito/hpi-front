import BoldText from "./bold";
import MediumText from "./medium";

export default function Text({ children, type, classes, onMouseEnter }: { children: React.ReactNode, type: TypeText, classes:string, onMouseEnter?: any}) {
    const TextComponents = {
        'medium': MediumText,
        'bold': BoldText
    };

    const TextComponent = TextComponents[type];
    return (
        <TextComponent styles={classes} onMouseEnter={onMouseEnter}>
            {children}
        </TextComponent>
    )
}

type TypeText = 'medium' | 'bold';