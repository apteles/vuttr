import React from 'react';
import { Form, Input, Textarea } from '@rocketseat/unform'
import * as S from './styles';

function FormTool({ onCancel, onSubmit, schema }) {
    return (
        <S.Container>
            <S.Header>
                <S.Title>+ Add new tool</S.Title>
            </S.Header>
            <S.Content>
                <Form schema={schema} onSubmit={onSubmit}>
                    <S.FormField>
                        <label htmlFor="">Tool Name</label>
                        <Input name="title" />
                    </S.FormField>
                    <S.FormField>
                        <label htmlFor="">Link</label>
                        <Input name="link" />
                    </S.FormField>
                    <S.FormField>
                        <label htmlFor="">Description</label>
                        <Textarea name="description" />
                    </S.FormField>
                    <S.FormField>
                        <label htmlFor="">Tags</label>
                        <Input name="tags" />
                    </S.FormField>
                    <S.Footer>
                        <button type="button" onClick={onCancel}>Cancel</button>
                        <button type="submit">Add tool</button>
                    </S.Footer>
                </Form>
            </S.Content>

        </S.Container >
    );
}

export default FormTool;