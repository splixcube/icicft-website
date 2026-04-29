import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Box,
  Button,
  Container,
  Grid,
  GridCol,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import AnimatedSection from '@/components/ui/AnimatedSection'
import HeroSlider from '@/components/ui/HeroSlider'
import { tracks } from '@/data/tracks'

export const metadata: Metadata = { title: 'Home' }

const stats = [
  { value: '5+', label: 'Conference Tracks' },
  { value: '4+', label: 'Keynote Speakers' },
  { value: '2', label: 'Conference Days' },
  { value: '4+', label: 'Partner Organizations' },
]

const importantDates = [
  { event: 'Paper Submission Deadline', date: 'July 10, 2026' },
  { event: 'Notification of Acceptance', date: 'August 10, 2026' },
  { event: 'Camera Ready Submission', date: 'September 01, 2026' },
  { event: 'Early Bird Registration', date: 'October 30, 2026' },
  { event: 'Conference Dates', date: 'September 25–26, 2026' },
]

export default function HomePage() {
  return (
    <Box className="page-enter">
      {/* ── HERO ── */}
      <Box py={48} bg="gray.0">
        <Container size="lg">
          <Stack align="center" mb={40} gap="xs">
            <Title order={1} ta="center" fz={{ base: 28, md: 44 }} lh={1.2}>
              1<sup>st</sup> International Conference on Intelligent Computing
              and Future Technologies
              <br />
              <Text component="span" c="primary" fz="inherit" fw={800}>
                (ICICFT 2026)
              </Text>
            </Title>
            <Text fz="lg" c="primary" fw={600} ta="center">
              September 25–26, 2026
            </Text>
            <Text fz="md" c="dimmed" ta="center">
              Organizing by Department of Computer Science and Engineering
              <br />
              Poornima University, Jaipur
            </Text>
          </Stack>

          <HeroSlider />

          {/* Association box */}
          <Paper
            mt={40}
            p={32}
            radius="xl"
            style={{
              background: '#eff6ff',
              border: '1px solid #bfdbfe',
              textAlign: 'center',
              maxWidth: 720,
              margin: '40px auto 0',
            }}
          >
            <Text fw={600} fz="lg" mb={16} c="gray.8">
              In Association with
            </Text>
            <Stack gap={6}>
              <Text c="gray.7">Rajasthan Council for Advanced Training (RCAT), Jaipur</Text>
              <Text c="gray.7">Research and Development Cell, Poornima University, Jaipur</Text>
              <Text c="gray.7">Indian Knowledge System (IKS) Cell, Poornima University, Jaipur</Text>
            </Stack>
          </Paper>

          {/* Publication notice */}
          <Paper
            mt={24}
            p={24}
            radius="xl"
            style={{
              background: '#eff6ff',
              border: '1px solid #bfdbfe',
              textAlign: 'center',
              maxWidth: 720,
              margin: '24px auto 0',
            }}
          >
            <Text c="primary" fw={500}>
              All accepted papers will be recommended for publication in Scopus Indexed Conference
              Proceedings (Application sent for publication)
            </Text>
          </Paper>
        </Container>
      </Box>

      {/* ── ABOUT ── */}
      <AnimatedSection>
        <Box py={80} bg="gray.2">
          <Container size="xl">
            <Grid gutter={48} align="center">
              <GridCol span={{ base: 12, md: 7 }}>
                <Title order={2} mb={24} fz={30}>
                  About the ICICFT–2026 Conference
                </Title>
                <Text c="gray.7" fz="md" lh={1.8} mb={16} style={{ textAlign: 'justify' }}>
                  We are pleased to announce the upcoming{' '}
                  <strong>
                    International Conference on Intelligent Computing and Future Technologies
                    (ICICFT-2026)
                  </strong>
                  , which aims to promote high-quality research and real-world technological impact
                  through international collaboration. This conference will bring together
                  world-class researchers, academicians, industry experts, and technology leaders.
                </Text>
                <Text c="gray.7" fz="md" lh={1.8} mb={32} style={{ textAlign: 'justify' }}>
                  The primary objective of <strong>ICICFT-2026</strong> is to create a global
                  platform where researchers and professionals can come together to exchange
                  knowledge, present innovative research findings, and build professional networks.
                </Text>
                <Button component="a" href="/about" size="md" radius="md">
                  Read More
                </Button>
              </GridCol>
              <GridCol span={{ base: 12, md: 5 }}>
                <Box style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}>
                  <Image
                    src="/assets/images/conference.jpg"
                    alt="Conference"
                    width={600}
                    height={400}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </Box>
              </GridCol>
            </Grid>
          </Container>
        </Box>
      </AnimatedSection>

      {/* ── STATS ── */}
      <AnimatedSection delay={0.1}>
        <Box py={64} bg="primary">
          <Container size="lg">
            <SimpleGrid cols={{ base: 2, md: 4 }}>
              {stats.map((s) => (
                <Stack key={s.label} align="center" gap={4}>
                  <Title order={2} c="white" fz={40} fw={800}>
                    {s.value}
                  </Title>
                  <Text c="blue.2" fz="sm" ta="center">
                    {s.label}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      </AnimatedSection>

      {/* ── TRACKS ── */}
      <AnimatedSection>
        <Box py={80} bg="white">
          <Container size="xl">
            <Title order={2} ta="center" mb={16} fz={34}>
              Conference Tracks
            </Title>
            <Text c="dimmed" ta="center" maw={640} mx="auto" mb={52} fz="md" lh={1.7}>
              ICICFT-2026 features five major research tracks covering key areas of intelligent
              computing, data science, cybersecurity, emerging technologies, and real-world AI
              applications.
            </Text>

            <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
              {tracks.map((track, i) => (
                <AnimatedSection key={track.title} delay={i * 0.08}>
                  <Paper
                    p={32}
                    radius="xl"
                    className="hover-lift-lg"
                    style={{
                      border: '1px solid #bfdbfe',
                      background: '#eff6ff',
                      height: '100%',
                    }}
                  >
                    <Title order={4} c="primary" mb={12} fz={16}>
                      {track.title}
                    </Title>
                    <Text c="gray.7" fz="sm" lh={1.7}>
                      {track.description}
                    </Text>
                  </Paper>
                </AnimatedSection>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      </AnimatedSection>

      {/* ── IMPORTANT DATES ── */}
      <AnimatedSection>
        <Box py={80} bg="gray.1">
          <Container size="md">
            <Title order={2} ta="center" mb={48} fz={34}>
              Important Dates
            </Title>
            <Stack gap={0}>
              {importantDates.map((item, i) => (
                <Box
                  key={item.event}
                  py={16}
                  px={24}
                  style={{
                    background: i % 2 === 0 ? 'white' : '#f8fafc',
                    borderLeft: '4px solid #1e3a8a',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  className="hover-bg-indigo"
                >
                  <Text fw={500} c="gray.8">
                    {item.event}
                  </Text>
                  <Text fw={700} c="primary">
                    {item.date}
                  </Text>
                </Box>
              ))}
            </Stack>
          </Container>
        </Box>
      </AnimatedSection>

      {/* ── CTA ── */}
      <AnimatedSection>
        <Box
          py={80}
          style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)', textAlign: 'center' }}
        >
          <Container size="md">
            <Title order={2} c="white" mb={16} fz={32}>
              Ready to Submit Your Research?
            </Title>
            <Text c="blue.2" mb={36} fz="lg">
              Join researchers from around the globe at ICICFT-2026
            </Text>
            <Group justify="center" gap="lg">
              <Button component="a" href="/submission" size="lg" color="white" c="primary" radius="md">
                Submit Paper
              </Button>
              <Button
                component="a"
                href="/call-for-papers"
                size="lg"
                variant="outline"
                color="white"
                radius="md"
              >
                Call for Papers
              </Button>
            </Group>
          </Container>
        </Box>
      </AnimatedSection>
    </Box>
  )
}
