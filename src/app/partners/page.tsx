import type { Metadata } from 'next'
import Image from 'next/image'
import { Box, Container, Grid, GridCol, Paper, SimpleGrid, Text, Title } from '@mantine/core'
import AnimatedSection from '@/components/ui/AnimatedSection'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = { title: 'Partners & Publications' }

const technicalPartners = [
  { name: 'ISLE', src: '/assets/images/isle.png' },
  { name: 'ASHRAE', src: '/assets/images/ashrae.png' },
]

const industryPartners = [
  { name: 'SincGrid', src: '/assets/images/sincgrid.jpg' },
  { name: 'KT', src: '/assets/images/kt.png' },
  { name: 'Ambition Tech', src: '/assets/images/ambition_tech.png' },
  { name: 'RoboFi', src: '/assets/images/robofi.png' },
  { name: 'Club First', src: '/assets/images/club_first.png' },
  { name: 'Zeetro', src: '/assets/images/zeetro.jpg' },
]

function PartnerCard({ name, src }: { name: string; src: string }) {
  return (
    <Paper
      p={40}
      radius="xl"
      className="hover-lift"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 12px 35px rgba(0,0,0,0.05)',
      }}
    >
      <Image
        src={src}
        alt={name}
        width={200}
        height={112}
        style={{ objectFit: 'contain', maxHeight: 112 }}
      />
    </Paper>
  )
}

export default function PartnersPage() {
  return (
    <Box className="page-enter">
      <PageHero
        title="Partners & Publications"
        subtitle="Conference proceedings and journal publication opportunities"
      />

      {/* Technical Partners */}
      <AnimatedSection>
        <Box py={64} bg="white">
          <Container size="lg">
            <Title order={2} ta="center" c="primary" mb={48} fz={30}>
              Technical Partners
            </Title>
            <Grid gutter="xl" justify="center">
              {technicalPartners.map((p) => (
                <GridCol key={p.name} span={{ base: 12, sm: 6, md: 4 }}>
                  <PartnerCard {...p} />
                </GridCol>
              ))}
            </Grid>
          </Container>
        </Box>
      </AnimatedSection>

      {/* Industry Partners */}
      <AnimatedSection>
        <Box py={64} bg="gray.1">
          <Container size="xl">
            <Title order={2} ta="center" c="primary" mb={48} fz={30}>
              Industry Partners
            </Title>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
              {industryPartners.map((p, i) => (
                <AnimatedSection key={p.name} delay={i * 0.07}>
                  <PartnerCard {...p} />
                </AnimatedSection>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      </AnimatedSection>

      {/* Publication Info */}
      <AnimatedSection>
        <Box py={64} bg="white">
          <Container size="md">
            <Paper
              p={48}
              radius="xl"
              style={{ border: '1px solid #bfdbfe', background: '#eff6ff', textAlign: 'center' }}
            >
              <Title order={3} c="primary" mb={16} fz={22}>
                Publication Opportunity
              </Title>
              <Text c="gray.7" lh={1.8} fz="md">
                All accepted papers will be recommended for publication in{' '}
                <strong>Scopus Indexed Conference Proceedings</strong>. Selected papers may also be
                recommended for publication in reputed journals.
              </Text>
            </Paper>
          </Container>
        </Box>
      </AnimatedSection>
    </Box>
  )
}
