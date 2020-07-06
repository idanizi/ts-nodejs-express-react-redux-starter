import React from 'react'

type PingPongButtonPropType = {
    onPong?: (text: string) => void
}
export default function PingPongButton({ onPong }: PingPongButtonPropType) {

    const handleClick = async () => {
        try {
            const response = await fetch('/api/ping')
            if (response.ok) {
                const text = await response.text()
                console.log('[PingPongButton]', '[handleClick]', 'response.text:', text)

                if (onPong) {
                    onPong(text)
                }

            } else {
                console.log('[PingPongButton]', '[handleClick]', 'response not ok', response)
            }

        } catch (error) {
            console.error('[PingPongButton]', '[handleClick]', error)
        }
    }


    return (
        <button onClick={handleClick}>
            Ping Express Server
        </button>
    )
}
