import styled from "styled-components";

const Sentence = styled.cite`
    padding: 1em 1em;
    background-color: #D5D4D4;
    border-radius: 5px;
    width: 17em;
    height: auto;
    text-align: center;
`

const Author = styled.p`
color: #8D8C8C;
`

const Quotes = styled.div`
    padding: 0.2em;
    display: flex;
    flex-direction: column;
    align-items: center;

    
`

const Quote = (props) => {
    
    return(
        <Quotes>
            <Sentence>"{props.children}"</Sentence>
            <Author>- {props.by}</Author>
        </Quotes>
    )
}

export default Quote;