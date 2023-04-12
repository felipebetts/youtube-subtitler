import type { NextApiRequest, NextApiResponse } from 'next'
import { spawn } from 'child_process'
import path from 'path'
import { transferChildProcessOutput } from '../../utils/shell'

export default function POST(
    request: NextApiRequest,
    response: NextApiResponse
) {
    const srt = request.body
    if (typeof srt !== 'string') {
        response.status(400).json({ error: 'Invalid input' })
        return
    }

    console.log('srt:', srt)

    const cmd = spawn(
        'python3',
        [path.join(process.cwd(), 'scripts/translate.py'),],
        {
            cwd: process.cwd()
        }
    )

    // we need to pass the srt binary string to the stdin of our subprocess
    cmd.stdin.write(srt)
    cmd.stdin.end()
    transferChildProcessOutput(cmd, response)
}