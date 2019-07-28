import styled from 'styled-components'

export const Box = styled.div`
    position: absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    width:500px;
    height:500px;
`

export const H1 = styled.div`
    position: absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-60%);
    width:500px;
    height:500px;
    text-align:left:

`

export const Win = styled.div`
    position: absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    width:500px;
    height:500px;
    background: ${props => (!props.ifWin) ? 'none' : 'url("./img/puzzle_img.jpeg")'};
    z-index:${props => (!props.ifWin) ? -1 : 2};
    display: ${props => (!props.ifWin) ? 'none' : 'block'};
    text-align:center;
    line-height:500px;
    color:#ffffff;
`
