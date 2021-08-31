import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Converter from './Converter';

const Translator = () => {

    const languages = [
        {
            label: 'Afrikaans',
            value: 'af'
        },

        {
            label: 'Arabic',
            value: 'ar'
        },

        {
            label: 'Hindi',
            value: 'hi'
        }
    ]

    const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
    const [text, setText] = useState('')

    return (
        <div className="ui segment">
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown label="Select a Language" options={languages} selectedOption={selectedLanguage} onSelectedOptionChange={setSelectedLanguage} />
            <Converter text={text} language={selectedLanguage.value}/>
        </div>
    )
}

export default Translator;