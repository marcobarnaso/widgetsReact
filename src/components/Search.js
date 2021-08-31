import React, { useState, useEffect } from 'react';
import wikipedia from '../apis/wikipedia'


const Search = () => {

    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 300);

        return () => {
            clearTimeout(timerId)
        }
    }, [term])

    useEffect(() => {
        const search = async () => {
            const { data } = await wikipedia.get('', {
                params: {
                    srsearch: debouncedTerm
                }
            })
            setResults(data.query.search)
        }

        if(debouncedTerm) {
            search()
        }
        
    }, [debouncedTerm])

    const renderResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a
                        className="ui button"
                        target="blanc"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                        Go
                        </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }} />
                </div>
            </div>
        )
    })

    return (
        <div className="ui segment">
            <div className="ui form">
                <div className="field">
                    <label>Search </label>
                </div>
                <input
                    className="input"
                    type="text"
                    value={term}
                    onChange={(event) => {
                        setTerm(event.target.value)
                    }} />
            </div>
            <div className="ui celled list">
                {renderResults}
            </div>
        </div>

    )
}

export default Search;