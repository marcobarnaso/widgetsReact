import React, { useState, useEffect } from 'react';
import googleTranslate from '../apis/googleTranslate'

const Converter = ({ text, language }) => {

    const [translatedText, setTranslatedText] = useState('')
    const [debouncedText, setDebouncedText] = useState(text)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text)
        }, 500);

        return () => clearTimeout(timerId)
    },[text])

    useEffect(() => {
        const translate = async () => {
            const { data: { data: { translations: [{ translatedText }] } } } = await googleTranslate.post('', {}, {
                params: {
                    q: debouncedText,
                    target: language,
                }
            })
            setTranslatedText(translatedText)
        }

        translate()

    }, [debouncedText, language])

    return (
        <div>
            <h1 className="ui header">{translatedText}</h1>
        </div>
    )
}

export default Converter;