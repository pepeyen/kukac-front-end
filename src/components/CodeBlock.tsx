import React, { useEffect } from 'react';

//Prism depedencies for code block
import Prism from "prismjs/components/prism-core";

import 'prismjs/components/prism-markup-templating';
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/components/prism-clike";

//Prism languagues
import "prismjs/components/prism-javascript";

interface IProps{
    codeBlockLanguage: string,
    codeBlockContent: string
};

const CodeBlock: React.FC<IProps> = (props: IProps) => {
    useEffect(() => {
        setTimeout(() => Prism.highlightAll(), 0);
    });

    return(
        <div className = "page__code-block">
            <pre className="line-numbers">
                <code className={`language-${props.codeBlockLanguage}`}>
                    {props.codeBlockContent.trim()}
                </code>
            </pre>
        </div>
    );
};

export default CodeBlock;