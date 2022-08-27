import styled from "@suid/system/styled";

export const Wrapper = styled('div')(({ theme }) => ({
    boxSizing: 'border-box',
    minWidth: 160,
    padding: 8,
    border: '2px solid black',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    zIndex: 10
}));

export const Item = styled('div')(({ theme }) => ({
    boxSizing: 'border-box',
    width: '100%',
    padding: 8,
    border: '2px solid black',
    display: 'flex',
    flexDirection: 'column',

    '&:not(:last-child)': {
        marginBottom: 8
    }
}));

export const Name = styled('span')(({ theme }) => ({
    fontSize: 16
}));

export const Description = styled('span')(({ theme }) => ({
    fontSize: 10
}));