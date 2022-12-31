import {BackGroundPage, TextError, NavItem} from './notFoundPage.styled'

const NotFoundPage = () => {
  return (
    <BackGroundPage>
      <TextError>Page not found</TextError>
      <TextError>ERROR 404</TextError>
      <NavItem to="/">Go to Main</NavItem>
    </BackGroundPage>
  );
};

export default NotFoundPage