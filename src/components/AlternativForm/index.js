import styled from 'styled-components';

const AlternativForm = styled.form`
    label {
        &[data-selected="true"] {
            background-color: ${({ theme }) => theme.colors.primary};
            border: 1px solid ${({ theme }) => theme.colors.secondary};

            &[data-status="SUCCESS"] {
                background-color: ${({ theme }) => theme.colors.success};
            }

            &[data-status="ERROR"] {
                background-color: ${({ theme }) => theme.colors.wrong};
            }
        }
        &:focus {
            opacity: 1;
        }
    }

    button {
        margin-top: 24px;
        border-radius: ${({ theme }) => theme.borderRadius};
        border: 1px solid ${({ theme }) => theme.colors.secondary}
    }
`

export default AlternativForm;