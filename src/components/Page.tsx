import React from 'react';

interface IProps {
    children?: React.ReactNode,
    title?: string
};

const Page: React.FC<IProps> = (props: IProps) => {
    return(
        <article className="page">
            <h1 className="page__title">{props.title}</h1>
            {props.children}
        </article>
    );
};

export default Page;