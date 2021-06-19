import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import * as Yup from 'yup'
import * as S from './styles'
import Container from '../../Components/Layout/Container'
import ToolCard from '../../Components/ToolCard'
import Confirm from '../../Components/Confirm'
import FormTool from '../../Components/FormTool'
import Search from '../../Components/Search'
import searchPlus from '../../assets/Icon-Plus-Circle-2px.svg'
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

const schema = Yup.object().shape({
    title: Yup.string().required("Name tool is required."),
    link: Yup.string().required("Link tool is required."),
    description: Yup.string().required("Description is required."),
    tags: Yup.string().required("Tags is required."),
})

Modal.setAppElement('#root')
function Home() {
    const [modalIsOpenForm, setModalIsOpenForm] = useState(false)
    const [modalIsOpenConfirm, setModalIsOpenConfirm] = useState(false)
    const [searchOnlyTags, setSearchOnlyTags] = useState(false)
    const [itemToDelete, setItemToDelete] = useState(false)
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

    async function handleConfirm() {
        setModalIsOpenConfirm(false)
        if (itemToDelete) {
            await axios.delete(`tools/${itemToDelete}`);
            await loadTools()
        }
    }

    async function handleDelete(item) {
        setModalIsOpenConfirm(!modalIsOpenConfirm)
        setItemToDelete(item)
    }

    async function handleCreate({ title, link, description, tags }) {

        await axios.post('tools', {
            title,
            link,
            description,
            tags: tags.trim().split(' ')
        });
        setModalIsOpenForm(false)
        await loadTools()
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
                {modalIsOpenForm && <FormTool schema={schema} onSubmit={handleCreate} onCancel={() => setModalIsOpenForm(false)} />}
                {modalIsOpenConfirm && <Confirm onConfirm={() => handleConfirm()} onCancel={() => setModalIsOpenConfirm(false)} />}
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
                                <input type="checkbox" id="tag" checked={searchOnlyTags} onChange={() => setSearchOnlyTags(!searchOnlyTags)} />
                                <label htmlFor="tag">search in tag only</label>
                            </S.CheckBox>
                        </S.SearchContainer>
                        <S.Button onClick={() => setModalIsOpenForm(!modalIsOpenForm)}><img src={searchPlus} alt="add" />Add</S.Button>
                    </S.Actions>
                    <S.Cards>
                        {tools.map((item) => (
                            <ToolCard key={item.id} {...item} onDelete={handleDelete} />
                        ))}
                    </S.Cards>
                </S.Content>
            </Container>
        </>

    )
}

export default Home;