import type { Metadata } from 'next'
import Image from 'next/image'
import { Anchor, Box, Container, Grid, GridCol, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import AnimatedSection from '@/components/ui/AnimatedSection'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = { title: 'About' }

const stats = [
  { value: '4+', label: 'Conference Tracks' },
  { value: '4+', label: 'Keynote Speakers' },
  { value: '2', label: 'Conference Days' },
  { value: '4+', label: 'Partner Organizations' },
]

export default function AboutPage() {
  return (
    <Box className="page-enter">
      <PageHero
        title="About the Conference"
        subtitle="1st International Conference on Intelligent Computing and Future Technologies"
      />

      {/* Conference Introduction */}
      <AnimatedSection>
        <Box py={80} bg="white">
          <Container size="xl">
            <Grid gutter={64} align="center">
              <GridCol span={{ base: 12, md: 7 }}>
                <Title
                  order={2}
                  mb={24}
                  c="primary"
                  style={{ borderLeft: '4px solid #d4af37', paddingLeft: 16 }}
                >
                  Conference Introduction
                </Title>
                <Stack gap={16}>
                  {[
                    'We are pleased to announce the upcoming ICICFT-2026 (International Conference on Intelligent Computing and Future Technologies), which aims to promote high-quality research and real-world technological impact through international collaboration. This conference will bring together world-class researchers, academicians, industry experts, and technology leaders.',
                    'The primary objective of ICICFT-2026 is to create a global platform where researchers and professionals from different parts of the world can come together to exchange knowledge, present innovative research findings, and build strong professional networks.',
                    'ICICFT-2026 is designed as an inclusive and interdisciplinary event that welcomes participants from diverse research domains. The conference encourages scholars and practitioners to share their ideas, research outcomes, and technological advancements.',
                    'The conference will focus on Artificial Intelligence and Intelligent Systems, Data Science, Cyber Security, Internet of Things, and Intelligent Computing Applications in Healthcare and Society.',
                  ].map((para, i) => (
                    <Text key={i} c="gray.7" lh={1.8} style={{ textAlign: 'justify' }}>
                      {para}
                    </Text>
                  ))}
                </Stack>
              </GridCol>
              <GridCol span={{ base: 12, md: 5 }}>
                <Box
                  className="hover-scale"
                  style={{
                    borderRadius: 24,
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                  }}
                >
                  <Image
                    src="/assets/images/ab1.jpg"
                    alt="Conference"
                    width={600}
                    height={500}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </Box>
              </GridCol>
            </Grid>
          </Container>
        </Box>
      </AnimatedSection>

      {/* Stats */}
      <AnimatedSection delay={0.1}>
        <Box py={64} bg="gray.1">
          <Container size="lg">
            <SimpleGrid cols={{ base: 2, md: 4 }}>
              {stats.map((s) => (
                <Stack key={s.label} align="center" gap={4}>
                  <Title order={2} c="primary" fz={44} fw={800}>
                    {s.value}
                  </Title>
                  <Text c="gray.6" fz="sm" ta="center">
                    {s.label}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      </AnimatedSection>

      {/* About Poornima University */}
      <AnimatedSection>
        <Box py={80} bg="white">
          <Container size="xl">
            <Title
              order={2}
              mb={32}
              c="primary"
              style={{ borderLeft: '4px solid #d4af37', paddingLeft: 16 }}
            >
              About Poornima University
            </Title>
            <Stack gap={16}>
              <Text c="gray.7" lh={1.8} style={{ textAlign: 'justify' }}>
                Poornima University (PU) is a state private University in Jaipur, India established
                by an act of the Rajasthan legislature. PU was established in 2012 with a vision to
                create a knowledge-based society with scientific temper, team spirit and dignity of
                labour to face global competition and challenges. With modern infrastructure, strong
                industry collaborations, and emphasis on interdisciplinary research, Poornima
                University actively contributes to technological and societal advancement.
              </Text>
              <Text c="gray.7" lh={1.8} style={{ textAlign: 'justify' }}>
                PU is recognized by University Grants Commission (UGC) under Section 2(f) and 12(B)
                with the right to confer degrees as per Section 22(1) of the UGC Act, 1956.
                Currently, PU has more than 8000+ students from all over the country enrolled in
                nine faculties and fourteen departments in various areas such as Management,
                Engineering, Computer Application Sciences, Architecture, Design, Public Health, and
                Hotel Management.
              </Text>
            </Stack>
            <Box mt={32}>
              <Anchor
                href="https://poornima.edu.in/"
                target="_blank"
                c="primary"
                fw={600}
                fz="md"
              >
                Read More →
              </Anchor>
            </Box>
          </Container>
        </Box>
      </AnimatedSection>
    </Box>
  )
}
