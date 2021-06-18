import React, { useState } from 'react';
import * as S from './styles'
import Container from '../../Components/Layout/Container'
import ToolCard from '../../Components/ToolCard'
import Confirm from '../../Components/Confirm'
import FormTool from '../../Components/FormTool'
import searchIcon from '../../assets/Icon-Search-2px.svg'
import searchPlus from '../../assets/Icon-Plus-Circle-2px.svg'
import Modal from 'react-modal';

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
                                <img src={searchIcon} />
                                <input placeholder="search" />
                            </S.Search>
                            <S.CheckBox>
                                <input type="checkbox" name="tag" id="tag" />
                                <label htmlFor="tag">search in tag only</label>
                            </S.CheckBox>
                        </S.SearchContainer>
                        <S.Button onClick={() => setModalIsOpenForm(!modalIsOpenForm)}><img src={searchPlus} />Add</S.Button>
                    </S.Actions>
                    <S.Cards>
                        <ToolCard onDelete={() => setModalIsOpenConfirm(!modalIsOpenConfirm)} />
                        <ToolCard />
                        <ToolCard />
                        <ToolCard />
                    </S.Cards>


                </S.Content>
            </Container>
        </>

    )
}

export default Home;