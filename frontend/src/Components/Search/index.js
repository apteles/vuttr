import React, { useState } from 'react';
import searchIcon from '../../assets/Icon-Search-2px.svg'
import refreshIcon from '../../assets/Icon-Sync-2px.svg'
import * as S from './styles';
import useDebounce from '../../helpers/hooks/useDebounce'

function Search({ onChange, onRefresh, term }) {
    const [value, setValue] = useState(term)
    const debouncedChange = useDebounce(onChange, 1000)

    function handleChange(e) {
        setValue(e.target.value)
        debouncedChange(e.target.value)
    }

    function handleRefresh() {
        setValue('')
        onRefresh()
    }

    return (
        <S.Container>
            <img src={searchIcon} alt="search" />
            <input placeholder="search" defaultValue={value} onChange={handleChange} />
            {value && (
                <S.Refresh onClick={handleRefresh}><img src={refreshIcon} alt="refresh" /></S.Refresh>
            )}

        </S.Container>
    );
}

export default Search;