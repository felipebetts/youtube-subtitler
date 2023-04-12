import React, { useEffect, useRef } from 'react'
import { styled } from '@stitches/react'
import { Box } from './box'

interface Props {
    children: string | undefined
}

export const Output: React.FC<Props> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const containerEl = containerRef.current
        if (containerEl) {
            containerEl.scrollTop = containerEl.scrollHeight
        }
    }, [children])
    return (
        <Box css={{ flex: 1, overflow: 'auto' }} className='output-container'>
            <Pre>{children}</Pre>
        </Box>
    )
}

export const Pre = styled('pre', {
    margin: '1em',
    fontSize: '1.2em',
    whiteSpace: 'pre-wrap'
})
