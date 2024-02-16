import EBookPage from '@/components/features/eBook/EBook';
import { Description, H3, SectionTitle, Text } from '@/components/features/eBook/content';
import images from '@assets/images/pages/page6';
import { Section, Figure } from '@/components/features/eBook/layout/layout';
import { YourImageComponent } from '@/components/features/eBook/images';
import useDocumentMetadata from '@hooks/useDocumentMetadata';
import { useFooter } from '@/context/FooterContext';
import { useEffect } from 'react';
import data from './data.json';
import RenderHTML from '@/components/common/RenderHTML';
import { useTranslation } from 'react-i18next';

const Page6 = () => {
  useDocumentMetadata('Assembly and High Level Languages', "This is the sixth page");
  const { setFooterData } = useFooter();
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
            <Text>
                <RenderHTML htmlString={t("languagesSection.description")} />
            </Text>
            <img src={images.languagesFlowchart.src} alt={t("languagesSection.imageAlt")} className='img-center bg-white' />
          </Section>

          <Section>
            <SectionTitle>
                {t("highLevelLanguagesSection.title")}
            </SectionTitle>
            <Text>
                <RenderHTML htmlString={t("highLevelLanguagesSection.description")} />
            </Text>
        </Section>

        <Section>
          <SectionTitle>
              {t("lowLevelLanguagesSection.title")}
          </SectionTitle>
          <Text>
              {t("lowLevelLanguagesSection.text1")}
          </Text>

          <br /><br />

          <H3>
              {t("lowLevelLanguagesSection.machineLanguageTitle")}
          </H3>
          <Text>
              <RenderHTML htmlString={t("lowLevelLanguagesSection.machineLanguageText")} />
          </Text>

          <br /><br />

          <H3>
              {t("lowLevelLanguagesSection.assemblyLanguageTitle")}
          </H3>
          <Text>
              <RenderHTML htmlString={t("lowLevelLanguagesSection.assemblyLanguageText")} />
          </Text>
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

        <Text>
            <RenderHTML htmlString={t("programmingLanguagesSection.text")} />
        </Text>
    </Section>
      </EBookPage>
    );
}

export default Page6;