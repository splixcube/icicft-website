import type { Metadata } from 'next'
import Link from 'next/link'
import { Anchor, Box, Container, Grid, GridCol, Paper, Stack, Text, Title } from '@mantine/core'
import AnimatedSection from '@/components/ui/AnimatedSection'
import PageHero from '@/components/ui/PageHero'

export const metadata: Metadata = { title: 'Contact & Venue' }

const conveners = [
  {
    title: 'Convener',
    members: [
      {
        name: 'Dr. Saurabh Shandilya',
        role: 'Professor, PU, Jaipur',
        dept: 'Faculty of Computer Science Engineering',
        email: 'saurabh.shandilya@poornima.edu.in',
        mobile: '+91-9887587811',
      },
      {
        name: 'Dr. Udit Mamodiya',
        role: 'Associate Professor, PU, Jaipur',
        dept: 'Head R&D Cell',
        email: 'udit.mamodiya@poornima.edu.in',
        mobile: '+91-7014937762',
      },
    ],
  },
  {
    title: 'Co-Convener',
    members: [
      {
        name: 'Dr. Sumit Kapoor',
        role: 'Associate Professor, PU, Jaipur',
        dept: 'Faculty of Computer Science Engineering',
        email: 'sumit.kapoor@poornima.edu.in',
        mobile: '+91-8006690016',
      },
      {
        name: 'Dr. Deepen Banoriya',
        role: 'Professor, PU, Jaipur',
        dept: 'Member, R&D Cell',
        email: 'deepen.banoriya@poornima.edu.in',
        mobile: '+91-7000542674',
      },
    ],
  },
]

export default function ContactPage() {
  return (
    <Box className="page-enter">
      <PageHero
        title="Contact & Venue"
        subtitle="Conference location and contact information"
      />

      {/* Contact */}
      <AnimatedSection>
        <Box py={64} bg="gray.1">
          <Container size="xl">
            <Title order={2} ta="center" mb={48} fz={30}>
              Contact Us
            </Title>
            <Grid gutter="xl">
              {conveners.map((group) => (
                <GridCol key={group.title} span={{ base: 12, md: 6 }}>
                  <Paper
                    p={40}
                    radius="xl"
                    className="hover-lift-lg"
                    style={{
                      background: 'linear-gradient(135deg, #eef2ff, #e0e7ff)',
                      height: '100%',
                    }}
                  >
                    <Title order={3} c="indigo" mb={32} fz={22}>
                      {group.title}
                    </Title>
                    <Stack gap={32}>
                      {group.members.map((m) => (
                        <Box key={m.name}>
                          <Text fw={600} fz="lg" mb={4}>
                            {m.name}
                          </Text>
                          <Text c="gray.6" fz="sm">
                            {m.role}
                          </Text>
                          <Text c="gray.6" fz="sm" mt={4}>
                            {m.dept}
                          </Text>
                          <Anchor
                            href={`mailto:${m.email}`}
                            fz="sm"
                            c="indigo"
                            fw={500}
                            mt={6}
                            style={{ display: 'block' }}
                          >
                            Email – {m.email}
                          </Anchor>
                          <Text fz="sm" fw={600} mt={4}>
                            Mobile – {m.mobile}
                          </Text>
                        </Box>
                      ))}
                    </Stack>
                  </Paper>
                </GridCol>
              ))}
            </Grid>
          </Container>
        </Box>
      </AnimatedSection>

      {/* Venue */}
      <AnimatedSection>
        <Box py={64} bg="white">
          <Container size="xl">
            <Title order={2} ta="center" mb={48} fz={30}>
              Conference Venue
            </Title>
            <Grid gutter="xl" align="center">
              <GridCol span={{ base: 12, md: 6 }}>
                <Paper p={32} radius="xl" style={{ border: '1px solid #e2e8f0' }}>
                  <Title order={3} c="primary" mb={16} fz={20}>
                    Poornima University
                  </Title>
                  <Stack gap={8}>
                    <Text c="gray.7">
                      <strong>Address:</strong> IS-2027-2028, Ramchandrapura, Sitapura Extension,
                      Jaipur, Rajasthan 302022
                    </Text>
                    <Text c="gray.7">
                      <strong>City:</strong> Jaipur, Rajasthan, India
                    </Text>
                    <Text c="gray.7">
                      <strong>Website:</strong>{' '}
                      <Anchor href="https://poornima.edu.in" target="_blank" c="primary">
                        poornima.edu.in
                      </Anchor>
                    </Text>
                    <Text c="gray.7">
                      <strong>Conference Dates:</strong> September 25–26, 2026
                    </Text>
                  </Stack>
                </Paper>
              </GridCol>
              <GridCol span={{ base: 12, md: 6 }}>
                <Box style={{ borderRadius: 16, overflow: 'hidden', height: 320 }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.7!2d75.8577!3d26.8124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a7aa7c8a2b%3A0x1234567890abcdef!2sPoornima+University!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Poornima University Map"
                  />
                </Box>
              </GridCol>
            </Grid>
          </Container>
        </Box>
      </AnimatedSection>
    </Box>
  )
}
