'use client'

import Link from 'next/link'
import { Box, Container, Grid, GridCol, Group, Stack, Text, Title, Anchor } from '@mantine/core'
import { motion } from 'framer-motion'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Call for Papers', href: '/call-for-papers' },
  { label: 'Committee', href: '/committee' },
  { label: 'Speakers', href: '/speakers' },
  { label: 'Submission', href: '/submission' },
  { label: 'Sponsorship', href: '/sponsorship' },
  { label: 'Contact', href: '/contact' },
]

export default function AppFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        background: 'linear-gradient(135deg, #0d1b5e 0%, #142a86 100%)',
        color: 'white',
      }}
    >
      <Container size="xl" py={60}>
        <Grid gutter={40}>
          {/* About */}
          <GridCol span={{ base: 12, md: 4 }}>
            <Title order={3} fz={18} fw={600} mb={18}>
              ICICFT 2026
            </Title>
            <Text fz="sm" c="gray.3" lh={1.7} mb={10}>
              1st International Conference on Intelligent Computing and Future Technologies
            </Text>
            <Text fz="sm" c="gray.3" lh={1.7} mb={10}>
              September 25–26, 2026
            </Text>
            <Text fz="sm" c="gray.3" lh={1.7}>
              Department of Computer Science and Engineering,{' '}
              <br />
              Poornima University, Jaipur
            </Text>
          </GridCol>

          {/* Quick Links */}
          <GridCol span={{ base: 12, md: 4 }}>
            <Title order={3} fz={18} fw={600} mb={18}>
              Quick Links
            </Title>
            <Stack gap={10}>
              {quickLinks.map((link) => (
                <Anchor
                  key={link.href}
                  component={Link}
                  href={link.href}
                  fz="sm"
                  c="gray.3"
                  style={{
                    textDecoration: 'none',
                    transition: 'color 0.2s, padding-left 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white'
                    e.currentTarget.style.paddingLeft = '5px'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = ''
                    e.currentTarget.style.paddingLeft = '0'
                  }}
                >
                  {link.label}
                </Anchor>
              ))}
            </Stack>
          </GridCol>

          {/* Contact */}
          <GridCol span={{ base: 12, md: 4 }}>
            <Title order={3} fz={18} fw={600} mb={18}>
              Contact
            </Title>
            <Stack gap={8}>
              <Text fz="sm" c="gray.3">
                Dr. Saurabh Shandilya
              </Text>
              <Text fz="sm" c="gray.3">
                Email: saurabh.shandilya@poornima.edu.in
              </Text>
              <Text fz="sm" c="gray.3">
                Mobile: +91-9887587811
              </Text>
              <Box mt={16}>
                <Text fz="sm" c="gray.3">
                  Dr. Udit Mamodiya
                </Text>
                <Text fz="sm" c="gray.3">
                  Email: udit.mamodiya@poornima.edu.in
                </Text>
                <Text fz="sm" c="gray.3">
                  Mobile: +91-7014937762
                </Text>
              </Box>
            </Stack>
          </GridCol>
        </Grid>
      </Container>

      {/* Footer bottom */}
      <Box
        style={{
          borderTop: '1px solid rgba(255,255,255,0.15)',
          padding: '20px 24px',
        }}
      >
        <Group justify="space-between" maw={1280} mx="auto" wrap="wrap">
          <Text fz={13} c="gray.4">
            © 2026 ICICFT. All rights reserved. | Poornima University, Jaipur
          </Text>
          <Text fz={13} c="gray.4">
            Powered by Department of CSE, Poornima University
          </Text>
        </Group>
      </Box>
    </motion.footer>
  )
}
