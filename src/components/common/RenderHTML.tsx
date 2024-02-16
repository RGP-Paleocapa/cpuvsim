interface RenderHTMLProps {
    htmlString: string;
}

const RenderHTML: React.FC<RenderHTMLProps> = ({ htmlString }) => {
    return <span dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

export default RenderHTML;
