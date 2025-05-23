import EBookPage from '@/components/features/eBook/EBook';
import images from '@assets/images/pages/page6';
import { Section, Figure } from '@/components/features/eBook/layout';
import { YourImageComponent } from '@/components/features/eBook/images';
import useDocumentMetadata from '@hooks/useDocumentMetadata';
import { useEffect } from 'react';
import data from './data.json';
import RenderHTML from '@/components/common/RenderHTML';
import { useTranslation } from 'react-i18next';
import { useFooterStore } from '@/context/useFooterStore';
import { SectionTitle, Description, Heading3, ParagraphText } from '@/components/features/eBook/typography';

const Page6 = () => {
  useDocumentMetadata('Assembly and High Level Languages', "This is the sixth page");
  const { setFooterData } = useFooterStore();
  useEffect(() => {
    setFooterData(references);
  }, [setFooterData]);
  const references = data.references;
  const { t } = useTranslation("page6");

    return (
        <EBookPage currentPage={6}>
          <Section>
            <SectionTitle>
                {t("languagesSection.title")}
            </SectionTitle>
            <ParagraphText>
                <RenderHTML htmlString={t("languagesSection.description")} />
            </ParagraphText>
            <img src={images.languagesFlowchart.src} alt={t("languagesSection.imageAlt")} className='img-center bg-white' />
          </Section>

          <Section>
            <SectionTitle>
                {t("highLevelLanguagesSection.title")}
            </SectionTitle>
            <ParagraphText>
                <RenderHTML htmlString={t("highLevelLanguagesSection.description")} />
            </ParagraphText>
        </Section>

        <Section>
          <SectionTitle>
              {t("lowLevelLanguagesSection.title")}
          </SectionTitle>
          <ParagraphText>
              {t("lowLevelLanguagesSection.text1")}
          </ParagraphText>

          <br /><br />

          <Heading3>
              {t("lowLevelLanguagesSection.machineLanguageTitle")}
          </Heading3>
          <ParagraphText>
              <RenderHTML htmlString={t("lowLevelLanguagesSection.machineLanguageText")} />
          </ParagraphText>

          <br /><br />

          <Heading3>
              {t("lowLevelLanguagesSection.assemblyLanguageTitle")}
          </Heading3>
          <ParagraphText>
              <RenderHTML htmlString={t("lowLevelLanguagesSection.assemblyLanguageText")} />
          </ParagraphText>
      </Section>

      <Section>
        <SectionTitle>
            {t("programmingLanguagesSection.title")}
        </SectionTitle>

        <Figure>
            <div>
                <img src={images.image2.src} alt="default" className="img-center w-96 h-28 rounded" />
                <Description alignCenter>
                    <strong>{t("programmingLanguagesSection.highLevelLanguageDescription")}</strong>
                </Description>
            </div>
            <div>
                <YourImageComponent image={images.image3} className='w-96 h-28' />
                <Description alignCenter>
                    <strong>{t("programmingLanguagesSection.assemblyLanguageDescription")}</strong>
                </Description>
            </div>
            <div>
                <YourImageComponent image={images.image4} className='w-96 h-28' />
                <Description alignCenter>
                    <strong>{t("programmingLanguagesSection.machineLanguageDescription")}</strong>
                </Description>
            </div>
        </Figure>

        <ParagraphText>
            <RenderHTML htmlString={t("programmingLanguagesSection.text")} />
        </ParagraphText>
    </Section>
      </EBookPage>
    );
}

export default Page6;
