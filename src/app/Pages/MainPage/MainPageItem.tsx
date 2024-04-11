import { Box, Skeleton, Stack, Typography } from '@mui/material'
import React from 'react'

interface IMainPageItem{
    HeadText: string
}

function MainPageItem({HeadText}:IMainPageItem) {
  return (
    <Stack flexDirection='column' padding='20px 40px'>
        <Typography variant='h4'>{HeadText}</Typography>
        <Stack flexDirection='row' gap={2}>
            <Skeleton variant='rectangular' width={320} height={230}/>
            <Skeleton variant='rectangular' width={320} height={230}/>
            <Skeleton variant='rectangular' width={320} height={230}/>
            <Skeleton variant='rectangular' width={320} height={230}/>
        </Stack>
    </Stack>
  )
}

export default MainPageItem