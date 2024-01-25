export default function Tabs({ children, buttons, ButtonContainer = "menu" }) {
  //const ButtonContainer = ButtonContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}
