import BoldText from "./bold";
import MediumText from "./medium";

export default function Text({ children, type, classes }: { children: React.ReactNode, type: TypeText, classes:string }) {
    const TextComponents = {
        'medium': MediumText,
        'bold': BoldText
    };

    const TextComponent = TextComponents[type];
    return (
        <TextComponent styles={classes}>
            {children}
        </TextComponent>
    )
}

type TypeText = 'medium' | 'bold';