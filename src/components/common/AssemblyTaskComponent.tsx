import { H4, InlineDivs, MaxWidthContainer, Ol, Section } from './eBook/CustomComponents';

// Define the structure of each list item
interface ListItem {
  title?: string;
  code?: string;
}

// Define the props for the AssemblyTasksComponent
interface AssemblyTasksProps {
  lists: { [key: string]: string | ListItem };
}

const AssemblyTasksComponent: React.FC<AssemblyTasksProps> = ({ lists }) => {
  return (
    <Ol>
      {Object.keys(lists).map((key) => {
        const item = lists[key];
        return (
            <Section>
                <InlineDivs>
                    <MaxWidthContainer>
                        <li key={key}>
                        {typeof item === 'string' ? (
                            item
                        ) : (
                            <>
                            <H4>{item.title}</H4>
                            <code>{item.code}</code>
                            </>
                        )}
                        </li>
                    </MaxWidthContainer>
                    <MaxWidthContainer>
                        <button>Show answer</button>
                    </MaxWidthContainer>
            </InlineDivs>
          </Section>
        );
      })}
    </Ol>
  );
};

export default AssemblyTasksComponent;
