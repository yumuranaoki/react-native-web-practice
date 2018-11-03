import { connect } from 'react-redux';
import App from '../component/App';
import { changeScreen } from '../action/app';

const mapStateToProps = state => ({
  screen: state.appReducer.screen,
});

const mapDispatchScreen = dispatch => ({
  changeScreen: screen => dispatch(changeScreen(screen)),
});

const AppConnected = connect(
  mapStateToProps,
  mapDispatchScreen
)(App);

export default AppConnected;
