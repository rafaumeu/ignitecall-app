import { Box, Heading, Text, styled } from '@rafaumeu-ignite-ui/react'

export const Container = styled('main', {
  maxWidth: 852,
  margin: '$20 auto $4',
  padding: '0 $4',
})

export const Header = styled('div', {
  padding: '0 $6',
  marginBottom: '$8',
  [`> ${Heading}`]: {
    lineHeight: '$base',
  },
  [`> ${Text}`]: {
    color: '$gray200',
    marginTop: '$2',
  },
})

export const StatsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$4',
  marginBottom: '$8',

  '@media(max-width: 600px)': {
    gridTemplateColumns: '1fr',
  },
})

export const StatCard = styled(Box, {
  padding: '$6',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const StatValue = styled(Heading, {
  fontSize: '$3xl',
  color: '$ignite100',
  lineHeight: '$base',
})

export const StatLabel = styled(Text, {
  color: '$gray200',
  fontSize: '$sm',
})

export const ChartSection = styled(Box, {
  padding: '$6',
  marginBottom: '$6',
})

export const ChartTitle = styled(Text, {
  marginBottom: '$4',
  fontWeight: 'bold',
  color: '$gray100',
})

export const ChartContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',
  gap: '$2',
  height: 160,
  paddingBottom: '$4',
  paddingTop: '$4',
})

export const BarGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flex: 1,
  gap: '$2',
  minWidth: 0,
})

export const Bar = styled('div', {
  width: '100%',
  maxWidth: 48,
  backgroundColor: '$ignite500',
  borderRadius: '$sm $sm 0 0',
  transition: 'height 0.3s ease',
  minHeight: 2,

  '&:hover': {
    backgroundColor: '$ignite300',
  },
})

export const BarLabel = styled(Text, {
  fontSize: '$xs',
  color: '$gray400',
  textAlign: 'center',
  whiteSpace: 'nowrap',
})

export const BarValue = styled(Text, {
  fontSize: '$xs',
  color: '$gray200',
})

export const EmptyState = styled(Box, {
  padding: '$8',
  textAlign: 'center',
})

export const Navigation = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '0 $6',
  marginBottom: '$4',
})
