import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { useState, useRef } from 'react';
import { ExperiencesAccordion } from '../ExperiencesAccordion';
import { Section } from '../Section';

const experiences = [
  {
    name: 'SamMeghTechnologies',
    label: 'SamMeghTechnologies',
    title: 'fullstack',
    started_at: '2023-08-01T03:00:00.000Z',
    end_date: null,
    location: 'remote',
    contract_type: 'full-time',
    bullet_points: 8,
  },
  {
    name: 'KarmaYoga',
    title: 'fullstack',
    label: 'KarmaYoga',
    started_at: '2023-09-01T03:00:00.000Z',
    end_date: '2025-10-01T03:00:00.000Z',
    location: 'Bangalore, India',
    contract_type: 'full-time',
    bullet_points: 7,
  }
];

export const Experiences = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(0);
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleChange = (number: number) => {
    setExpanded(number);
    if (accordionRefs.current[number]) {
      const accordionElement = accordionRefs.current[number];
      if (accordionElement) {
        setTimeout(() => {
          accordionElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 500);
      }
    }
  };

  return (
    <Section id="experiences" title={t('experiences')}>
      {experiences.map((experience, index) => {
        return (
          <Box
            key={`experience-${index}`}
            ref={(el: HTMLDivElement | null) => (accordionRefs.current[index] = el)}
            sx={{ paddingTop: '16px' }}
          >
            <ExperiencesAccordion
              expanded={expanded === index}
              experience={experience}
              handleChange={() => handleChange(index)}
            />
          </Box>
        );
      })}
    </Section>
  );
};
