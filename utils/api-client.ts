export function extractVideoIdFromUrl(url: string) {
    return new URL(url).searchParams.get('v')
}

type ProgressCallback = (output: string) => void

export async function processVideo(
    videoId: string,
    callback: ProgressCallback
): Promise<string | false> {
    callback('Downloading audio...\n')
    callback('Progress 1 \n')
    callback('Progress 2 \n')
    callback('Progress 3 \n')
    callback('Progress 4 \n')

    return 'result'
}