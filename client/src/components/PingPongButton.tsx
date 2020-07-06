import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StoreStateType } from '../models'
import spinner from '../images/spinner.svg'
import { setLoading } from '../redux/actions/gui'

type PingPongButtonPropType = {
    onPong?: (text: string) => void,
    onClick?: () => void,
}
export default function PingPongButton({ onPong, onClick }: PingPongButtonPropType) {

    const loading = useSelector<StoreStateType, boolean>(state => state.gui.loading)
    const dispatch = useDispatch()

    const handleClick = async () => {

        onClick()

        try {
            dispatch(setLoading(true))
            
            await new Promise(res => setTimeout(res, 500)) // mock net delay

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
        } finally {
            dispatch(setLoading(false))
        }
    }

    if (loading) {
        return <>
            <img src={spinner} />
        </>
    }

    return (
        <button onClick={handleClick}>
            Ping Express Server
        </button>
    )
}
