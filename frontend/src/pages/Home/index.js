import React, { useState, useEffect } from 'react';
import * as S from './styles'
import Container from '../../Components/Layout/Container'
import ToolCard from '../../Components/ToolCard'
import Confirm from '../../Components/Confirm'
import FormTool from '../../Components/FormTool'
import Search from '../../Components/Search'
import searchPlus from '../../assets/Icon-Plus-Circle-2px.svg'
import Modal from 'react-modal';
import axios from '../../services/api'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function Home() {
    const [modalIsOpenForm, setModalIsOpenForm] = useState(false)
    const [modalIsOpenConfirm, setModalIsOpenConfirm] = useState(false)
    const [searchOnlyTags, setSearchOnlyTags] = useState(false)
    const [term, setTerm] = useState('')
    const [tools, setTools] = useState([])

    useEffect(() => {
        loadTools()
    }, [term])

    async function loadTools() {
        let params = {}
        if (searchOnlyTags && term) {
            console.log('here')
            params = {
                tag: term
            }
        }
        if (term && !searchOnlyTags) {
            params = {
                q: term
            }
        }

        const response = await axios.get('tools', { params });
        const { data } = response.data
        setTools(data)
    }

    function onSearch(term) {
        if (term) {
            setTerm(term)
        }
    }

    function handleResetSearch() {
        setTerm('')
        setSearchOnlyTags(false)
    }

    return (
        <>
            <Modal
                isOpen={modalIsOpenConfirm || modalIsOpenForm}
                shouldCloseOnOverlayClick={false}
                onAfterOpen={() => { }}
                onRequestClose={() => { }}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {modalIsOpenForm && <FormTool onSubmit={() => { }} onCancel={() => setModalIsOpenForm(false)} />}
                {modalIsOpenConfirm && <Confirm onConfirm={() => { }} onCancel={() => setModalIsOpenConfirm(false)} />}
            </Modal>
            <Container>
                <S.Header>
                    <S.Title>VUTTR</S.Title>
                    <S.Subtitle>Very Useful Tools to Remember</S.Subtitle>
                </S.Header>

                <S.Content>
                    <S.Actions>
                        <S.SearchContainer>
                            <S.Search>
                                <Search value={term} onChange={onSearch} onRefresh={() => handleResetSearch()} />
                            </S.Search>
                            <S.CheckBox>
                                <input type="checkbox" va id="tag" checked={searchOnlyTags} onChange={() => setSearchOnlyTags(!searchOnlyTags)} />
                                <label htmlFor="tag">search in tag only</label>
                            </S.CheckBox>
                        </S.SearchContainer>
                        <S.Button onClick={() => setModalIsOpenForm(!modalIsOpenForm)}><img src={searchPlus} />Add</S.Button>
                    </S.Actions>
                    <S.Cards>
                        {tools.map(({ id, ...rest }) => (
                            <ToolCard key={id} {...rest} onDelete={() => setModalIsOpenConfirm(!modalIsOpenConfirm)} />
                        ))}
                    </S.Cards>
                </S.Content>
            </Container>
        </>

    )
}

export default Home;