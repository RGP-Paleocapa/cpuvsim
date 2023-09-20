import useDocumentMetadata from "../components/UseDocumentMetadata";

const Page2 = () => {
    useDocumentMetadata('Page 2 - My App', 'This is the second page.');

    return (
        <h1>This is the second page.</h1>
    );
}

export default Page2;