export default function Tabs({children, buttons, buttonsContainer = "menu"}) {
    const ButtonContainer = buttonsContainer
    // if we left it with "buttonsContainer" when rendering it would look for custom component called buttonsContainer. 
    // This identifier MUST start with uppercase letter if we want to use identifier for a custom component as a prop value.
    return (<>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        {children}
    </>)
}